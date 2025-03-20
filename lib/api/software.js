import { createSupabase } from "../utils/supabase";

export async function searchSoftware(searchTerm) {
    if (!searchTerm) return [];

    const supabase = await createSupabase();

    const { data, error } = await supabase
        .rpc('search_software', {
            search_query: searchTerm
        });

    if (error) {
        console.error('Error fetching data:', error);
        return [];
    }

    return data;
}

export async function getSoftwareBySlug(slug) {

    const supabase = await createSupabase();

    const { data: software, error } = await supabase
        .from("software")
        .select(`
        *, 
        software_suitability(id, type),
        problems(name, solution, id, slug),
        software_feature(*),
        software_procons(*),
        software_category!software_software_category_id_fkey(*),
        expert_software_rating(*)
        `)
        .eq('slug', slug)
        .eq('status', 'active')
        .limit(1).single();

    return software;
}

export async function getAllSoftwareSlugs() {

    const supabase = await createSupabase();

    const { data } = await supabase
        .from('software')
        .select('slug')
        .eq('status', 'active');

    return data;
}

export async function getSoftwareByCategoryId(categoryId) {
    const supabase = await createSupabase();
    let { data } = await supabase
        .from("software")
        .select(`
            *,
            problems(name, solution, id, slug),
            expert_software_rating!left(*)
        `)
        .eq('software_category_id', categoryId)
        .eq('status', 'active')
        .order('overall_score', { referencedTable: 'expert_software_rating', ascending: true })
        .limit(4);

    return data;

}

export async function getSupportedShopSystemsForSoftware(software) {

    const supabase = await createSupabase();
    const softwareId = software.id

    const { data: category, error: categoryError } = await supabase
        .from('software_category')
        .select('id')
        .eq('name', 'Shopsysteme')
        .single();

    const { data, error } = await supabase
        .from('software')
        .select(`
      id,
      name,
      logo_url,
      software_integration!software_integration_integrated_with_id_fkey(integration_type)
    `)
        .eq('software_integration.software_id', softwareId)
        .eq('software_category_id', category.id);


    const shops = data.map((shop) => ({
        id: shop.id,
        name: shop.name,
        logo: shop.logo_url,
        integration_type: shop.software_integration?.[0]?.integration_type || 'none'
    }))
        .sort((a, b) => {
            const order = ['native', 'via_middleware', 'custom', 'none'];
            return order.indexOf(a.integration_type) - order.indexOf(b.integration_type);
        });;

    return shops;
}

export async function getSoftwareByCategory(category) {
    const supabase = await createSupabase();
    const { data: softwares } = await supabase
        .from("software")
        .select(`
            *, 
            software_suitability (id, type),
            expert_software_rating(*), 
            problems(name, solution, id, slug), 
            software_feature(*)
        `)
        .eq('software_category_id', category.id)
        .eq('status', 'active');

    return softwares;
}

export async function getSoftwareByCategoryAndShopSystem(category, shopSystem) {
    const supabase = await createSupabase();

    const { data, error } = await supabase
        .from('software_integration')
        .select('software_id')
        .eq('integrated_with_id', shopSystem.id)
        .in('integration_type', ['native', 'middleware']);

    if (error) {
        throw new Error(`Error fetching integration data: ${error.message}`);
    }

    let compatibleIds = data?.map(row => row.software_id) || [];

    if (compatibleIds.length === 0) {
        return [];
    }

    const { data: softwares } = await supabase
        .from("software")
        .select(`
        *,
        software_suitability (id, type),
        expert_software_rating(*), 
        problems(name, solution, id, slug), 
        software_feature(*)
    `)
        .eq('software_category_id', category.id)
        .eq('status', 'active')
        .in('id', compatibleIds);

    return softwares;

}

export async function getRelatedSoftware(software) {

    const supabase = await createSupabase();

    const { data: relatedSoftware } = await supabase
        .from("software")
        .select(`
                *,
                software_category!software_software_category_id_fkey(*),
                expert_software_rating(*)
        `)
        .eq('software_category_id', software.software_category_id)
        .neq('id', software.id) // Aktuelle Software ausschließen
        .eq('status', 'active')
        .limit(5);

    return relatedSoftware;
}

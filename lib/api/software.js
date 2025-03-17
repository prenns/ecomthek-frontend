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

    const { data: software } = await supabase.from("software").select(`
        *, 
        software_suitability(id, type),
        problems(name, id, slug),
        software_feature(*),
        software_procons(*),
        software_category(*),
        expert_software_rating(*)
        `).eq('slug', slug).limit(1).single();

    return software;

}

export async function getAllSoftwareSlugs() {

    const supabase = await createSupabase();

    const { data } = await supabase
        .from('software')
        .select('slug');

    return data;
}

export async function getSoftwareByCategoryId(categoryId) {
    const supabase = await createSupabase();
    let { data } = await supabase
        .from("software")
        .select(`
            *,
            problems(name, id, slug),
            expert_software_rating!left(*)
        `)
        .eq('software_category_id', categoryId)
        .order('overall_score', { referencedTable: 'expert_software_rating', ascending: true })
        .limit(4);

    return data;

}

export async function getRelatedSoftware(software) {

    const supabase = await createSupabase();

    const { data: relatedSoftware } = await supabase
        .from("software")
        .select(`
      *,
      software_category(*),
      expert_software_rating(*)
    `)
        .eq('software_category_id', software.software_category_id) // Gleiche Kategorie
        .neq('id', software.id) // Aktuelle Software ausschließen
        .limit(5);

    return relatedSoftware;
}

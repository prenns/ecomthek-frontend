import { createSupabase } from "../utils/supabase";

export async function getCategoryBySlug(slug) {

    const supabase = await createSupabase();

    const { data: category } = await supabase.from("software_category").select(`
            id,
            name,
            slug,
            description,
            seo_title,
            seo_meta_description,
            seo_description,
            software ( *, software_suitability (id, type), expert_software_rating(*), problems(name, id, slug), software_feature(*) )
          `).eq('slug', slug).limit(1).single();

    return category;
}

export async function getAllCategorySlugs() {

    const supabase = await createSupabase();

    const { data } = await supabase
        .from('software_category')
        .select('slug');
    return data;
}

export async function getAllCategories() {

    const supabase = await createSupabase();
    const { data: categories } = await supabase.from("software_category").select();
    return categories;
}

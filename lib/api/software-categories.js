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
            seo_description
          `).eq('slug', slug)
          .limit(1).single();

    return category;
}

export async function getAllCategorySlugs() {

    const supabase = await createSupabase();

    const { data } = await supabase
        .from('software_category')
        .select('slug');
    return data;
}

export async function getCategoryShopsystem(category, shopSystem) {
    const supabase = await createSupabase();
    const { data: categoryShopSystem } = await supabase
    .from('category_shopsystem')
    .select('*')
    .eq('software_category_id', category.id)
    .eq('shop_id', shopSystem.id)
    .limit(1).single();
     return categoryShopSystem;
}

export async function getAllCategoryShopsystems() {

    const supabase = await createSupabase();
    
    const { data: categories } = await supabase
    .from('category_shopsystem')
    .select('software_category(id, slug), software(id, slug)');
    
    return categories;
}

export async function getAllCategories() {

    const supabase = await createSupabase();
    const { data: categories } = await supabase.from("software_category").select();
    return categories;
}

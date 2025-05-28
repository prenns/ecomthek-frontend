const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;

export async function getAllCategories() {
    const res = await fetch(cmsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
             query {
              categories {
                nodes {
                  id
                  name
                  slug
                  description
                   seo {
                    title
                    metaDesc
                  }
                }
              }
            }

          `
        }),
        next: { revalidate: 60 },
    });

    const json = await res.json();
    const categories = json?.data?.categories?.nodes || [];
    return categories;
}

export async function getCategoryBySlug(slug) {
 const res = await fetch(cmsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
        query GetCategoryBySlug($slug: ID!) {
          category(id: $slug, idType: SLUG) {
            id
            name
            slug
            description
            seo {
                title
                metaDesc
             }
          }
        }
      `,
            variables: { slug },
        }),
        next: { revalidate: 60 },
    });

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error('Fehler beim Abrufen des Blogposts');
    }
    return json.data.category;
}
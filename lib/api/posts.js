import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');
const authorDirectory = path.join(process.cwd(), 'authors');
const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;

export const categories = {
    'performance-marketing': { name: 'Performance Marketing', description: '' },
    'email-marketing': { name: 'E-Mail Marketing', description: '' },
    'content-marketing': { name: 'Content Marketing', description: '' },
    'business-prozesse': { name: 'Business Prozesse', description: '' },
    'produkt': { name: 'Produkt', description: '' },
    'website-shop': { name: 'Website & Shop', description: '' }
}

export function getCategoryBySlug(slug) {
    return categories[slug];
}

export function getAuthorById(id) {

    const fullPath = path.join(authorDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id and contentHtml
    return {
        id,
        ...matterResult.data,
    };

}

export async function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const author = getAuthorById(matterResult.data.authorId)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
            author: author
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getSortedPostsByCategory(category) {

    let allPostsData = await getSortedPostsData();
    allPostsData = allPostsData.filter((postData) => postData.category == category);
    return allPostsData;
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            id: fileName.replace(/\.md$/, ''),
        };
    });
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();


    const author = await getAuthorById(matterResult.data.authorId)
    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
        author: author
    };
}

export async function getAllPosts() {
    const res = await fetch(cmsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query {
              posts {
                nodes {
                  id
                  title
                  slug
                  date
                  excerpt
                  categories {
                    nodes {
                      id
                      name
                    }
                  }
                  author {
                    node {
                      firstName
                      lastName
                      avatar {
                        url
                      }
                    }
                  }
                  featuredImage {
                    node {
                        sourceUrl
                        altText
                    }
                  }
                }
              }
            }
          `
        }),
        next: { revalidate: 60 },
    });

    const json = await res.json();
    const posts = json?.data?.posts?.nodes || [];
    return posts;
}

export async function getLatestPosts(limit = 3) {
    const res = await fetch(cmsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
          query GetLatestPosts($limit: Int!) {
            posts(first: $limit, where: { orderby: { field: DATE, order: DESC } }) {
              nodes {
                id
                title
                slug
                date
                excerpt
                categories {
                    nodes {
                      id
                      name
                    }
                  }
                author {
                  node {
                    firstName
                    lastName
                    avatar {
                      url
                    }
                  }
                }
                featuredImage {
                  node {
                    sourceUrl
                    altText
                  }
                }
              }
            }
          }
        `,
            variables: {
                limit,
            },
        }),
        next: { revalidate: 60 },
    });

    const json = await res.json();
    const posts = json?.data?.posts?.nodes || [];
    return posts;
}


export async function getPostsByCategory(category) {
    const res = await fetch(cmsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query GetPostsByCategory($slug: String!) {
                  posts(where: { categoryName: $slug }, first: 10) {
                    nodes {
                      id
                      title
                      slug
                      date
                      excerpt
                      categories {
                        nodes {
                            id
                            name
                        }
                      }
                      author {
                        node {
                            firstName
                            lastName
                            avatar {
                                url
                            }
                        }
                    }
                      featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                    }
                  }
                }
            `,
            variables: { slug: category.slug },
        }),
        next: { revalidate: 60 },
    });

    const json = await res.json();

    if (json.errors) {
        console.error(json.errors);
        throw new Error('Fehler beim Abrufen der Posts');
    }

    return json.data.posts.nodes;
}

export async function getPostBySlug(slug) {

    const res = await fetch(cmsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
        query GetPostBySlug($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            id
            title
            slug
            content
            date
            excerpt
            categories {
                    nodes {
                      id
                      name
                    }
                  }
            author {
                node {
                    firstName
                    lastName
                    description
                    avatar {
                        url
                    }
                }
            }
            featuredImage {
                 node {
                     sourceUrl
                     altText
                }
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
    return json.data.post;
}

export async function getPostSEOtBySlug(slug) {

    const res = await fetch(cmsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
        query GetPostBySlug($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            id
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
    return json.data.post;
}
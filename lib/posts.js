import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');
const authorDirectory = path.join(process.cwd(), 'authors');

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
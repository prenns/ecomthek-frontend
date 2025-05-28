import {  getAllPosts, getPostBySlug, getPostSEOtBySlug } from '../../../lib/api/posts';
import BlogPost from '../../../components/blog/blogPost';
import { notFound } from 'next/navigation';

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
   const posts = await getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {

  const { slug } = await params;
  const post = await getPostSEOtBySlug(slug);

  if(post) {
        return {
            title: post.seo.title,
            description: post.seo.metaDesc
          }
   }
  else return null;

}

export default async function Post({ params }) {
  
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <BlogPost post={post} />
      </div>
    </main>)
}


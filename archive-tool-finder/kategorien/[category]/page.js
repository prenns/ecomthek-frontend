import { getPostsByCategory } from '../../../lib/api/posts';
import { getCategoryBySlug, getAllCategories } from '../../../lib/api/post-categories';
import BlogCard from '../../../components/blog/blogCard';

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {

    const allCategories = await getAllCategories();

    return allCategories.map((category) => ({
        slug: category.slug,
    }));
}

export async function generateMetadata({ params }) {

    const category = await getCategoryBySlug(params.category);
    if (category) {
        return {
            title: category.seo.title,
            description: category.seo.metaDesc
        }
    }
    else return null;
}

export default async function CategoryPage({ params }) {

    
    const category = await getCategoryBySlug(params.category);
    const posts = await getPostsByCategory(category);

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        {category.name}
                    </h1>
                    <div dangerouslySetInnerHTML={{__html: category.description}} className="font-light text-gray-500 sm:text-xl dark:text-gray-400" />
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    {posts.map((postData) => (
                        <BlogCard key={postData.id} blogPost={postData}  />
                    ))}
                </div>
            </div>
        </section>

    );
}




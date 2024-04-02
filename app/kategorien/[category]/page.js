import { getSortedPostsByCategory, categories } from '../../../lib/posts';
import BlogListItem from '../../../components/blogListItem';

export async function generateStaticParams() {

    return Object.keys(categories).map((category) => ({
        category: category
    }))
}

export async function generateMetadata({ params }, parent) {
   
    return {
      title: categories[params.category].name + ' | Ecomthek',
      description: categories[params.category].description
    }
  }

export default async function CategoryPage({ params }) {

    const posts = await getSortedPostsByCategory(params.category);
    return (


        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        {categories[params.category].name}
                    </h1>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        {categories[params.category].description}
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    {posts.map(({ ...postData }) => (
                        <BlogListItem key={postData.id} {...postData} />
                    ))}
                </div>
            </div>
        </section>

    );
}




import { getAllPosts } from "../../lib/api/posts";
import BlogCard from "../../components/blog/blogCard";

export default async function BlogHome() {
    let posts = await getAllPosts();

    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                       Du möchtest Dein E-Commerce Wissen erweitern?
                    </h1>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400" >
                   Entdecke unsere neuesten Beiträge zum Thema E-Commerce
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    {posts.map((postData) => (
                        <BlogCard key={postData.id} blogPost={postData} />
                    ))}
                </div>
            </div>
        </section>
    )
}
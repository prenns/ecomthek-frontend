import BlogCard from './blogCard';
import { getLatestPosts } from '../../lib/api/posts';
import Link from 'next/link';
export default async function BlogSnippet({title, description}) {

    const latestPosts = await getLatestPosts(4);

    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        {title}
                    </h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        {description}
                    </p>
                </div>
                {/* <div className="grid gap-8 lg:grid-cols-2">
                    {allPostsData.map(postData => {
                       return <BlogListItem key={postData.id} {...postData} />
                    })}
                </div> */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {latestPosts.map(latestPost => {
                       return <BlogCard key={latestPost.id} blogPost={latestPost} />
                    })}
                </div>
            </div>
            <div className="mb-12 text-center">
                 <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
            >
              Alle Artikel anzeigen
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
            </div>

             
        </section>
    )
}



import { getAllPostIds, getPostData } from '../../../lib/api/posts';

export async function generateStaticParams() {
  const slugs = await getAllPostIds();

  return slugs.map((slug) => ({
    slug: slug.id
  }))
}

export async function generateMetadata({ params }, parent) {

  const postData = await getPostData(params.slug);
 
  return {
    title: postData.seoTitle + ' | Ecomthek',
    description: postData.seoDescription
  }
}

export default async function Post({ params }) {
  const postData = await getPostData(params.slug);
  return (
  <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
    <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <header className="mb-4 lg:mb-6 not-format">
        <address className="flex items-center mb-6 not-italic">
            <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
              <img
                className="mr-4 w-16 h-16 rounded-full"
                src= {postData.author.image}
                alt={postData.author.name}
              />
              <div>
                <a
                  href="#"
                  rel="author"
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  {postData.author.name}
                </a>
                <p className="text-base text-gray-500 dark:text-gray-400">
                {postData.author.description}
                </p>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  <time
                    pubdate=""
                    dateTime="2022-02-08"
                    title="February 8th, 2022"
                  >
                    {postData.date}
                  </time>
                </p>
              </div>
            </div>
          </address>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
            {postData.title}
          </h1>
        </header>
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        
      </article>
    </div>
  </main>)
}


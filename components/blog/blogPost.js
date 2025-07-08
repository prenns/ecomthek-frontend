import FormattedDate from "../ui/formattedDate";

export default function BlogCard({ post }) { 

    return (
        <article className="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                    <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">

                        {post.author?.node?.avatar?.url && (
                            <img
                                src={post.author.node.avatar.url}
                                alt={`${post.author.node.firstName} ${post.author.node.lastName}`}
                                className="mr-4 w-16 h-16 rounded-full"
                            />
                        )}
                        <div>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                                {post.author.node.firstName} {post.author.node.lastName}
                            </span>
                            <div dangerouslySetInnerHTML={{__html: post.author.node.description}} className="text-base text-gray-500 dark:text-gray-400" />
                            <p className="text-base text-gray-500 dark:text-gray-400">
                                <FormattedDate
                                    dateString={post.date}
                                />
                            </p>
                        </div>
                    </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                    {post.title}
                </h1>
            </header>
            <div
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    )

}
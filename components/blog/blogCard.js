import Link from 'next/link';
import FormattedDate from '../ui/formattedDate';

export default function BlogCard({ blogPost }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
      {/* Top: Badges + Date */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {blogPost.categories.nodes.map((category) => (
            <span
              key={category.id}
              className="inline-flex items-center gap-1 rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600"
            >
              <svg
                className="h-3 w-3 text-primary-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clipRule="evenodd"
                />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
              </svg>
              {category.name}
            </span>
          ))}
        </div>

        <FormattedDate
          dateString={blogPost.date}
          className="text-sm text-gray-700 dark:text-gray-400"
        />
      </div>

      {/* Title */}
      <h2 className="text-[22px] leading-snug tracking-tight text-gray-900 sm:text-2xl dark:text-white">
        <Link
          href={`/blog/${blogPost.slug}`}
          className="outline-none transition-colors hover:text-primary-600 focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-primary-200"
        >
          {blogPost.title}
        </Link>
      </h2>

      {/* Excerpt */}
      <div
        className="prose prose-sm mt-3 max-w-none text-gray-700 line-clamp-3 dark:prose-invert dark:text-gray-300"
        dangerouslySetInnerHTML={{ __html: blogPost.excerpt }}
      />

      {/* Footer CTA */}
      <div className="mt-6 flex items-center justify-between">
        <Link
          href={`/blog/${blogPost.slug}`}
          className="group/cta inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
        >
          <span>Mehr lesen</span>
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-700 transition-transform group-hover/cta:translate-x-0.5">
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Link>
      </div>

      {/* Subtle gradient sheen like on the audit page */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary-100/60 blur-2xl" />
      </div>
    </article>
  );
}

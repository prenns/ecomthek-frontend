import Link from 'next/link';

export default function CategoryListItem({ id, name, description, slug }) {

    return (
        <Link
            href={`/software/kategorie/${slug}`}
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
            <span className="text-sm font-medium text-gray-900 dark:text-white">
                {name}
            </span>
        </Link>

    )
}
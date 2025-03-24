import Link from 'next/link';

export default function CategoryShopListItem({ category, shopSystem }) {

    return (
        <Link
            href={`/software/kategorie/${category.slug}/${shopSystem.software.slug}`}
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
            <img
                className="w-8 h-8 object-contain mr-2"
                src={shopSystem.software.logo_url}
                alt={`${shopSystem.software.name} Logo`}
            />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
{category.name} für {shopSystem.software.name}
            </span>
        </Link>

    )
}
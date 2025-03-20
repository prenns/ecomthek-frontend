import Link from 'next/link';
import { markdownToHtml } from '../../../../../lib/utils/textUtils';
import SoftwareCategoryListItem from '../../../../../components/softwareCategoryListItem';
import { getCategoryBySlug, getAllCategorySlugs, getCategoryShopsystem, getAllCategoryShopsystems } from '../../../../../lib/api/software-categories';
import { getSoftwareByCategoryAndShopSystem, getSoftwareBySlug } from '../../../../../lib/api/software';

export const dynamicParams = false;
export const revalidate = 60;

export async function generateMetadata({ params }, parent) {

    const category = await getCategoryBySlug(params.slug);
    return {
        title: `${category.seo_title} 2025` + ' | Ecomthek',
        description: `${category.seo_meta_description}`
    }
}

export async function generateStaticParams() {
    
    const categoryShopsystems = await getAllCategoryShopsystems();

    return categoryShopsystems.map((categoryShopsystem) => ({
        slug: categoryShopsystem.software_category.slug,
        shopsystem: categoryShopsystem.software.slug
    }));
}


export default async function CategoryForShopsystem({ params }) {

    const category = await getCategoryBySlug(params.slug);
    const shopSystem = await getSoftwareBySlug(params.shopsystem);
    const softwares = await getSoftwareByCategoryAndShopSystem(category, shopSystem);
    const categoryShopSystem = await getCategoryShopsystem(category, shopSystem);

    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-12">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mb-4 items-end justify-between sm:flex md:mb-8">
                    <div className="mb-4 sm:mb-0">
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                <li className="inline-flex items-center">
                                    <Link
                                        href="/software"
                                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        <svg
                                            className="me-2.5 h-3 w-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                        </svg>
                                        Software
                                    </Link>
                                </li>
                                <li aria-current="page">
                                    <div className="flex items-center">
                                        <svg
                                            className="h-5 w-5 text-gray-400 rtl:rotate-180"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="m9 5 7 7-7 7"
                                            />
                                        </svg>
                                        <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">
                                            {category.name}
                                        </span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <h2 className="mt-6 text-3xl font-semibold text-gray-900 dark:text-white">
                            {categoryShopSystem.title}
                        </h2>
                        <p className="mb-3 mt-6 font-normal text-gray-500 dark:text-gray-400">{category.description}</p>
                    </div>

                </div>
                <div className="gap-6 lg:flex">
                    {/* Sidenav */}
                    {/*                     <aside
                        id="sidebar"
                        className="hidden h-full w-80 shrink-0 border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:block lg:rounded-lg"
                    >
                    
                    </aside> */}
                    {/* Right content */}
                    <div className="w-full">
                        {/* Product Cards */}
                        <div className="grid gap-4">


                            {softwares.map(softwareItem => {
                                return <SoftwareCategoryListItem key={softwareItem.id} software={softwareItem} />
                            })}

                        </div>
                        {/* Pagination */}
                        {/*                         <nav
                            className="mt-6 flex items-center justify-center sm:mt-8"
                            aria-label="Page navigation example"
                        >
                            <ul className="flex h-8 items-center -space-x-px text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        <span className="sr-only">Previous</span>
                                        <svg
                                            className="h-4 w-4 rtl:rotate-180"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="m15 19-7-7 7-7"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        1
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        2
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        aria-current="page"
                                        className="z-10 flex h-8 items-center justify-center border border-primary-300 bg-primary-50 px-3 leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-700 dark:text-white"
                                    >
                                        3
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        ...
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        100
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        <span className="sr-only">Next</span>
                                        <svg
                                            className="h-4 w-4 rtl:rotate-180"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="m9 5 7 7-7 7"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav> */}
                    </div>
                </div>
                {/* Mobile Drawer */}

                <div className="max-w-none mt-16 mx-auto format" dangerouslySetInnerHTML={{ __html: await markdownToHtml(category.seo_description) }} />
            </div>

        </section>

    );
}
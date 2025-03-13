import Link from 'next/link';
import { createClient } from '../../../../utils/supabase/server'
import SoftwareCategoryListItem from '../../../../components/softwareCategoryListItem';
import { markdownToHtml } from '../../../../utils/textUtils';

export default async function Category({ params }) {

    const supabase = await createClient();
    const { data: category } = await supabase.from("software_category").select(`
        id,
        name,
        slug,
        description,
        seo_description,
        software ( *, software_suitability (id, type), expert_software_rating(*) )
      `).eq('slug', params.slug).limit(1).single();
    
      console.log(category);

    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-12">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mb-4 items-end justify-between sm:flex md:mb-8">
                    <div className="mb-4 sm:mb-0">
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                <li className="inline-flex items-center">
                                    <a
                                        href="#"
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
                                        Home
                                    </a>
                                </li>
                                <li>
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
                                        <Link
                                            href="/software"
                                            className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
                                        >
                                            Software
                                        </Link>
                                    </div>
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
                            {category.name}
                        </h2>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            data-drawer-target="drawer-mobile-filter"
                            data-drawer-show="drawer-mobile-filter"
                            aria-controls="drawer-mobile-filter"
                            type="button"
                            className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto lg:hidden"
                        >
                            <svg
                                className="-ms-0.5 me-2 h-4 w-4"
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
                                    strokeWidth={2}
                                    d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                                />
                            </svg>
                            Filters
                            <svg
                                className="-me-0.5 ms-2 h-4 w-4"
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
                                    d="m19 9-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {/*  <button
                            id="sortDropdownButton2"
                            data-dropdown-toggle="dropdownSort2"
                            type="button"
                            className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                        >
                            <svg
                                className="-ms-0.5 me-2 h-4 w-4"
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
                                    d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4"
                                />
                            </svg>
                            Sortieren
                            <svg
                                className="-me-0.5 ms-2 h-4 w-4"
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
                                    d="m19 9-7 7-7-7"
                                />
                            </svg>
                        </button> */}
                        <div
                            id="dropdownSort2"
                            className="z-50 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                            data-popper-placement="bottom"
                        >
                            <ul
                                className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                                aria-labelledby="sortDropdownButton"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        {" "}
                                        Meiste Bewertungen{" "}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        {" "}
                                        Ecomthek Score{" "}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        {" "}
                                        Name A-Z{" "}
                                    </a>
                                </li>
                            </ul>
                        </div>
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


                            {category.software.map(softwareItem => {
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
                <form
                    action="#"
                    method="get"
                    id="drawer-mobile-filter"
                    className="fixed left-0 top-0 z-40 h-screen w-full max-w-sm -translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800"
                    tabIndex={-1}
                    aria-labelledby="drawer-label"
                >
                    <h5
                        id="drawer-label-2"
                        className="mb-4 inline-flex items-center text-base font-semibold uppercase text-gray-500 dark:text-gray-400"
                    >
                        Filters mobile
                    </h5>
                    <button
                        type="button"
                        data-drawer-dismiss="drawer-mobile-filter"
                        aria-controls="drawer-mobile-filter"
                        className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <svg
                            className="h-5 w-5"
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
                                d="M6 18 17.94 6M18 18 6.06 6"
                            />
                        </svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                    <div className="flex flex-1 flex-col justify-between">
                        <div className="space-y-4">
                            {/* Product Brand */}
                            <div>
                                <label
                                    htmlFor="product-brand-2"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    {" "}
                                    Product Brand{" "}
                                </label>
                                <select
                                    id="product-brand-2"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                >
                                    <option selected="" value="apple">
                                        Apple
                                    </option>
                                    <option value="lg">LG</option>
                                    <option value="samsung">Samsung</option>
                                    <option value="logitech">Logitech</option>
                                    <option value="lenovo">Lenovo</option>
                                    <option value="samsung">Philips</option>
                                    <option value="logitech">Microsoft</option>
                                    <option value="lenovo">Sony</option>
                                </select>
                            </div>
                            {/* Price */}
                            <div>
                                <h6 className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                    Price Range
                                </h6>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <input
                                            id="min-price"
                                            type="range"
                                            min={0}
                                            max={7000}
                                            defaultValue={300}
                                            step={1}
                                            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            id="max-price"
                                            type="range"
                                            min={0}
                                            max={7000}
                                            defaultValue={3500}
                                            step={1}
                                            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                                        />
                                    </div>
                                    <div className="col-span-2 flex items-center justify-between space-x-4">
                                        <div className="w-full">
                                            <label
                                                htmlFor="min-price-input"
                                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                From
                                            </label>
                                            <input
                                                type="number"
                                                id="min-price-input"
                                                defaultValue={300}
                                                min={0}
                                                max={7000}
                                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 "
                                                placeholder=""
                                                required=""
                                            />
                                        </div>
                                        <div className="w-full">
                                            <label
                                                htmlFor="max-price-input"
                                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                To
                                            </label>
                                            <input
                                                type="number"
                                                id="max-price-input"
                                                defaultValue={3500}
                                                min={0}
                                                max={7000}
                                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                placeholder=""
                                                required=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {/* Delivery method */}
                                <div className="w-full space-y-3">
                                    <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                                        Delivery method
                                    </h6>
                                    <div className="flex items-center">
                                        <input
                                            id="flowbox-2"
                                            type="radio"
                                            name="delivery"
                                            defaultValue=""
                                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                        />
                                        <label
                                            htmlFor="flowbox-2"
                                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            {" "}
                                            Flowbox{" "}
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="pick-from-store-2"
                                            type="radio"
                                            name="delivery"
                                            defaultValue=""
                                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                        />
                                        <label
                                            htmlFor="pick-from-store-2"
                                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            {" "}
                                            Pick from the store{" "}
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="courier-2"
                                            type="radio"
                                            name="delivery"
                                            defaultValue=""
                                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                        />
                                        <label
                                            htmlFor="courier-2"
                                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            {" "}
                                            Fast courier{" "}
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                                        Rating
                                    </h6>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <input
                                                id="five-stars"
                                                type="radio"
                                                defaultValue=""
                                                name="rating"
                                                className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                htmlFor="five-stars"
                                                className="ml-2 flex items-center"
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>First star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Second star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Third star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Fourth star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Fifth star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="four-stars"
                                                type="radio"
                                                defaultValue=""
                                                name="rating"
                                                className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                htmlFor="four-stars"
                                                className="ml-2 flex items-center"
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>First star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Second star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Third star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Fourth star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-gray-300 dark:text-gray-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Fifth star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="three-stars"
                                                type="radio"
                                                defaultValue=""
                                                name="rating"
                                                defaultChecked=""
                                                className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                htmlFor="three-stars"
                                                className="ml-2 flex items-center"
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>First star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Second star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Third star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-gray-300 dark:text-gray-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Fourth star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-gray-300 dark:text-gray-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Fifth star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="two-stars"
                                                type="radio"
                                                defaultValue=""
                                                name="rating"
                                                className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label htmlFor="two-stars" className="ml-2 flex items-center">
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>First star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Second star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-gray-300 dark:text-gray-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Third star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-gray-300 dark:text-gray-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Fourth star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-gray-300 dark:text-gray-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Fifth star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="one-star"
                                                type="radio"
                                                defaultValue=""
                                                name="rating"
                                                className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label htmlFor="one-star" className="ml-2 flex items-center">
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>First star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-gray-300 dark:text-gray-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Second star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-gray-300 dark:text-gray-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Third star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-gray-300 dark:text-gray-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Fourth star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-gray-300 dark:text-gray-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Fifth star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Condition */}
                            <div>
                                <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                                    Condition
                                </h6>
                                <ul className="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                                    <li className="w-full border-r border-gray-200 dark:border-gray-600">
                                        <div className="flex items-center pl-3">
                                            <input
                                                id="condition-all"
                                                type="radio"
                                                defaultValue=""
                                                name="list-radio"
                                                defaultChecked=""
                                                className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                htmlFor="condition-all"
                                                className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                {" "}
                                                All{" "}
                                            </label>
                                        </div>
                                    </li>
                                    <li className="w-full border-r border-gray-200 dark:border-gray-600">
                                        <div className="flex items-center pl-3">
                                            <input
                                                id="condition-new"
                                                type="radio"
                                                defaultValue=""
                                                name="list-radio"
                                                className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                htmlFor="condition-new"
                                                className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                {" "}
                                                New{" "}
                                            </label>
                                        </div>
                                    </li>
                                    <li className="w-full">
                                        <div className="flex items-center pl-3">
                                            <input
                                                id="condition-used"
                                                type="radio"
                                                defaultValue=""
                                                name="list-radio"
                                                className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                htmlFor="condition-used"
                                                className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                {" "}
                                                Used{" "}
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* Color & Rating */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="w-full">
                                    <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                                        Colour
                                    </h6>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <input
                                                id="blue"
                                                type="checkbox"
                                                defaultValue=""
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                htmlFor="blue"
                                                className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                <div className="mr-2 h-3.5 w-3.5 rounded-full bg-primary-600" />
                                                Blue
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="gray"
                                                type="checkbox"
                                                defaultValue=""
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                htmlFor="gray"
                                                className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                <div className="mr-2 h-3.5 w-3.5 rounded-full bg-gray-400" />
                                                Gray
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="green"
                                                type="checkbox"
                                                defaultValue=""
                                                defaultChecked=""
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                htmlFor="green"
                                                className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                <div className="mr-2 h-3.5 w-3.5 rounded-full bg-green-400" />
                                                Green
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="pink"
                                                type="checkbox"
                                                defaultValue=""
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                htmlFor="pink"
                                                className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                <div className="mr-2 h-3.5 w-3.5 rounded-full bg-pink-400" />
                                                Pink
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="red"
                                                type="checkbox"
                                                defaultValue=""
                                                defaultChecked=""
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                htmlFor="red"
                                                className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                <div className="mr-2 h-3.5 w-3.5 rounded-full bg-red-500" />
                                                Red
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full space-y-3">
                                    <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                                        Weight
                                    </h6>
                                    <div className="flex items-center">
                                        <input
                                            id="weight-6"
                                            type="checkbox"
                                            defaultValue=""
                                            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                        />
                                        <label
                                            htmlFor="weight-6"
                                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            {" "}
                                            Under 1 kg{" "}
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="weight-7"
                                            type="checkbox"
                                            defaultValue=""
                                            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            defaultChecked=""
                                        />
                                        <label
                                            htmlFor="weight-7"
                                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            {" "}
                                            1 kg to 5 kg{" "}
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="weight-8"
                                            type="checkbox"
                                            defaultValue=""
                                            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                        />
                                        <label
                                            htmlFor="weight-8"
                                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            {" "}
                                            5 kg to 10 kg{" "}
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="weight-9"
                                            type="checkbox"
                                            defaultValue=""
                                            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                        />
                                        <label
                                            htmlFor="weight-9"
                                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            {" "}
                                            10 kg to 20 kg{" "}
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="weight-10"
                                            type="checkbox"
                                            defaultValue=""
                                            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                        />
                                        <label
                                            htmlFor="weight-10"
                                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            {" "}
                                            Over 20 kg{" "}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* Delivery */}
                            <div>
                                <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                                    Shipping to
                                </h6>
                                <ul className="grid gap-4 sm:grid-cols-2">
                                    <li>
                                        <input
                                            type="radio"
                                            id="delivery-usa"
                                            name="delivery"
                                            defaultValue="delivery-usa"
                                            className="peer hidden"
                                            defaultChecked=""
                                        />
                                        <label
                                            htmlFor="delivery-usa"
                                            className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"
                                        >
                                            <div className="block">
                                                <div className="w-full text-base font-semibold">USA</div>
                                                <div className="w-full text-sm">Delivery only for USA</div>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            id="delivery-europe"
                                            name="delivery"
                                            defaultValue="delivery-europe"
                                            className="peer hidden"
                                        />
                                        <label
                                            htmlFor="delivery-europe"
                                            className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"
                                        >
                                            <div className="block">
                                                <div className="w-full text-base font-semibold">Europe</div>
                                                <div className="w-full text-sm">Delivery only for USA</div>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            id="delivery-asia"
                                            name="delivery"
                                            defaultValue="delivery-asia"
                                            className="peer hidden"
                                            defaultChecked=""
                                        />
                                        <label
                                            htmlFor="delivery-asia"
                                            className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"
                                        >
                                            <div className="block">
                                                <div className="w-full text-base font-semibold">Asia</div>
                                                <div className="w-full text-sm">Delivery only for Asia</div>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            id="delivery-australia"
                                            name="delivery"
                                            defaultValue="delivery-australia"
                                            className="peer hidden"
                                        />
                                        <label
                                            htmlFor="delivery-australia"
                                            className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"
                                        >
                                            <div className="block">
                                                <div className="w-full text-base font-semibold">
                                                    Australia
                                                </div>
                                                <div className="w-full text-sm">
                                                    Delivery only for Australia
                                                </div>
                                            </div>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom-0 left-0 mt-6 flex w-full justify-center space-x-4 pb-4">
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-primary-700 px-5 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800"
                            >
                                Apply filters
                            </button>
                            <button
                                type="reset"
                                className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                            >
                                Clear all
                            </button>
                        </div>
                    </div>
                </form>
                <div className="max-w-none mt-16 mx-auto format lg:format-lg" dangerouslySetInnerHTML={{ __html: await markdownToHtml(category.seo_description)}} />
            </div>
           
        </section>

    );
}
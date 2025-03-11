import { createClient } from '../../utils/supabase/server';
import SoftwareListItem from '../../components/softwareListItem';
import CategoryListItem from '../../components/categoryListItem';
import Link from 'next/link';

export default async function Softwares() {
    const supabase = await createClient();
    const { data: softwares } = await supabase.from("software").select();
    const { data: categories } = await supabase.from("software_category").select();
    return (
        <main>

            <section className="bg-white dark:bg-gray-900">

                <section className="bg-white dark:bg-gray-900">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-8">
                        <div className="grid items-center gap-8 mt-4 mb-8 lg:mb-16 lg:gap-12 lg:grid-cols-12">
                            <div className="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">

                                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
                                    Finde die perfekte Software für dein E-Commerce-Wachstum
                                </h1>
                                <p className="max-w-xl mx-auto mb-6 font-light text-gray-500 lg:mx-0 xl:mb-8 md:text-lg xl:text-xl dark:text-gray-400">
                                    Finde die passenden Tools für dein Business. Vergleiche Software, entdecke Expertenbewertungen und wähle die perfekte Lösung – einfach & effizient
                                </p>
                                <form className="mx-auto lg:ml-0" action="#">
                                    <label
                                        htmlFor="default-search"
                                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                                    >
                                        Suchen
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="search"
                                            id="default-search"
                                            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Suche nach Software, Kategorien, Lösungen..."
                                            required=""
                                        />
                                        <button
                                            type="submit"
                                            className="text-white inline-flex items-center absolute right-2.5 bottom-2.5 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                        >
                                            <svg
                                                className="w-4 h-4 mr-2 -ml-1"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            Software finden
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-span-6">
                                <img
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/search-mockup.png"
                                    className="dark:hidden"
                                    alt="mockup"
                                />
                                <img
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/search-mockup-dark.png"
                                    className="hidden dark:block"
                                    alt="mockup dark"
                                />
                            </div>
                        </div>
                        <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
                            <div className="flex justify-center">
                                <svg
                                    className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <div>
                                    <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                                        Customizable Categories
                                    </h3>
                                    <p className="font-light text-gray-500 dark:text-gray-400">
                                        Host code that you don't want to share with the world in private.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <svg
                                    className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <div>
                                    <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                                        Private repos
                                    </h3>
                                    <p className="font-light text-gray-500 dark:text-gray-400">
                                        Host code that you don't want to share with the world in private.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <svg
                                    className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <div>
                                    <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                                        Tracking Saving Rate
                                    </h3>
                                    <p className="font-light text-gray-500 dark:text-gray-400">
                                        Host code that you don't want to share with the world in private.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


          {/*       <section className="bg-white dark:bg-gray-900">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                                Was für ein Problem willst du lösen?
                            </h2>
                            <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                                Finde die passenden Tools, um deine größten Herausforderungen im E-Commerce zu meistern – von Conversion-Optimierung bis hin zu effizienterem Fulfillment.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-2 mt-8 xl:gap-12 md:grid-cols-2">

                            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                <div className="flex justify-center mb-4">
                                    <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">

                                        <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd" />
                                        </svg>

                                    </div>
                                </div>

                                <Link href={`/solutions/conversion-rate-steigern`}>
                                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Conversion-Rate & Warenkorbabbrüche
                                    </h5>
                                </Link>

                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Mehr Besucher in zahlende Kunden verwandeln
                                </p>
                                <Link
                                    href={`/solutions/conversion-rate-steigern`}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Mehr erfahren
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </Link>
                            </div>
                            <div className="content-center text-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-center mb-4">

                                    <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">


                                        <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.111 20A3.111 3.111 0 0 1 4 16.889v-12C4 4.398 4.398 4 4.889 4h4.444a.89.89 0 0 1 .89.889v12A3.111 3.111 0 0 1 7.11 20Zm0 0h12a.889.889 0 0 0 .889-.889v-4.444a.889.889 0 0 0-.889-.89h-4.389a.889.889 0 0 0-.62.253l-3.767 3.665a.933.933 0 0 0-.146.185c-.868 1.433-1.581 1.858-3.078 2.12Zm0-3.556h.009m7.933-10.927 3.143 3.143a.889.889 0 0 1 0 1.257l-7.974 7.974v-8.8l3.574-3.574a.889.889 0 0 1 1.257 0Z" />
                                        </svg>

                                    </div>
                                </div>

                                <Link href={`/solutions/conversion-rate-steigern`}>
                                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Steigende Werbekosten & sinkender ROAS
                                    </h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Mehr Umsatz aus deinen Werbeanzeigen rausholen
                                </p>
                                <Link
                                    href={`/solutions/conversion-rate-steigern`}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Mehr erfahren
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </Link>
                            </div>
                            <div className="content-center text-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-center mb-4">

                                    <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">


                                        <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.111 20A3.111 3.111 0 0 1 4 16.889v-12C4 4.398 4.398 4 4.889 4h4.444a.89.89 0 0 1 .89.889v12A3.111 3.111 0 0 1 7.11 20Zm0 0h12a.889.889 0 0 0 .889-.889v-4.444a.889.889 0 0 0-.889-.89h-4.389a.889.889 0 0 0-.62.253l-3.767 3.665a.933.933 0 0 0-.146.185c-.868 1.433-1.581 1.858-3.078 2.12Zm0-3.556h.009m7.933-10.927 3.143 3.143a.889.889 0 0 1 0 1.257l-7.974 7.974v-8.8l3.574-3.574a.889.889 0 0 1 1.257 0Z" />
                                        </svg>

                                    </div>
                                </div>

                                <Link href={`/solutions/conversion-rate-steigern`}>
                                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Kundenbindung & niedriger CLV
                                    </h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Kunden gewinnen ist teuer – halte sie langfristig
                                </p>
                                <Link
                                    href={`/solutions/conversion-rate-steigern`}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Mehr erfahren
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </Link>
                            </div>
                            <div className="content-center text-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-center mb-4">

                                    <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">


                                        <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.111 20A3.111 3.111 0 0 1 4 16.889v-12C4 4.398 4.398 4 4.889 4h4.444a.89.89 0 0 1 .89.889v12A3.111 3.111 0 0 1 7.11 20Zm0 0h12a.889.889 0 0 0 .889-.889v-4.444a.889.889 0 0 0-.889-.89h-4.389a.889.889 0 0 0-.62.253l-3.767 3.665a.933.933 0 0 0-.146.185c-.868 1.433-1.581 1.858-3.078 2.12Zm0-3.556h.009m7.933-10.927 3.143 3.143a.889.889 0 0 1 0 1.257l-7.974 7.974v-8.8l3.574-3.574a.889.889 0 0 1 1.257 0Z" />
                                        </svg>

                                    </div>
                                </div>

                                <Link href={`/solutions/conversion-rate-steigern`}>
                                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Logistik, Retouren & Bestandsmanagement
                                    </h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Logistik-Chaos vermeiden & Retouren reduzieren
                                </p>
                                <Link
                                    href={`/solutions/conversion-rate-steigern`}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Mehr erfahren
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </Link>
                            </div>


                        </div>

                    </div>
                </section> */}


                <div className="mt-16 mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                            Alle Kategorien
                        </h2>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {categories.map(category => {
                            return <CategoryListItem key={category.id} {...category} />
                        })}

                    </div>
                </div>

                <div className="mt-16 mx-auto max-w-screen-xl text-left pt-8 mb-8">
                    <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                            Top E-Commerce Software
                        </h2>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        {softwares.map(software => {
                            return <SoftwareListItem key={software.id} {...software} />
                        })}
                    </div>
                </div>


            </section >
        </main>
    );
}
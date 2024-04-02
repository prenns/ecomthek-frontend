import '../styles/global.css'
import 'flowbite';
import Link from 'next/link';
import { categories, getCategoryBySlug } from '../lib/posts';
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'

export default function RootLayout({ children }) {
    return (
        <html lang="en">

            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" />

            <link rel="preconnect" href="//privacy-proxy.usercentrics.eu" />
            <link rel="preload" href="//privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js" as="script" />
            <script id="usercentrics-cmp" data-settings-id="LyLFSKLFbONAlI" data-language="de" src="https://app.usercentrics.eu/browser-ui/latest/loader.js" async> </script>
            <script src="https://privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js" async></script>

            <body>
                <header>
                    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                            <Link href="/" className="flex items-center">
                                <img src="/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">ECOMTHEK</span>
                            </Link>
                            <div className="flex items-center lg:order-2">
                                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                    <span className="sr-only">Menü öffnen</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                    <li>
                                        <Link href="/" className="block py-2 pr-4 pl-3 border-b border-gray-100 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-primary-500 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-primary-500 lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Über Uns</Link>
                                    </li>
                                    <li>
                                        <Link href="/notion-templates/marketing-calendar" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Notion Templates</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </header>
                {children}
                <footer className="border-t border-gray-100 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Allgemein
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400">
                                    <li className="mb-4">
                                        <Link
                                            href="/about"
                                            className="hover:underline hover:text-gray-900 dark:hover:text-white"
                                        >
                                            Über Uns
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="/contact"
                                            className="hover:underline hover:text-gray-900 dark:hover:text-white"
                                        >
                                            Kontakt
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="/datenschutz"
                                            className="hover:underline hover:text-gray-900 dark:hover:text-white"
                                        >
                                            Datenschutz
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="/impressum"
                                            className="hover:underline hover:text-gray-900 dark:hover:text-white"
                                        >
                                            Impressum
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Themen
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400">
                                    {Object.keys(categories).map(categoryKey => {
                                        return (
                                            <li className="mb-4">
                                                <Link
                                                    href={`/kategorien/${categoryKey}`}
                                                    className="hover:underline hover:text-gray-900 dark:hover:text-white"
                                                >
                                                    {getCategoryBySlug(categoryKey).name}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Notion Templates
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400">
                                    <li className="mb-4">
                                        <Link
                                            href={`/notion-templates/marketing-calendar`}
                                            className="hover:underline hover:text-gray-900 dark:hover:text-white"
                                        >
                                            All-In-One E-Commerce Marketing Hub
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 text-center sm:mt-12 lg:mt-16">
                            <a
                                href="#"
                                className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
                            >
                                <img src="/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Ecomthek Logo" />
                                ECOMTHEK
                            </a>
                            <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
                                © 2024{" "}
                                <a href="#" className="hover:underline">
                                    ECOMTHEK
                                </a>
                                . Alle Rechte vorbehalten.
                            </span>
                            <ul className="flex justify-center mt-5 space-x-5">
                                <li>
                                    <a
                                        href="https://www.facebook.com/profile.php?id=61558168462019"
                                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/ecomthek/"
                                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/ecomthek"
                                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                                    >
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                                        </svg>

                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.youtube.com/@ecomthek"
                                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                                    >
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd" />
                                        </svg>


                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </footer>
            </body>
            <GoogleTagManager gtmId="GTM-TKFHN8M3" />
        </html>
    )
}
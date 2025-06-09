import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';

export const metadata = {
    title: 'All-In-One E-Commerce Marketing Hub Notion Template | Ecomthek',
    description: 'Entdecke unser Notion Template für effizientes Marketingmanagement. Organisiere mühelos Kampagnen, Content-Erstellung und Teamkollaboration, um deine Marketingziele zu erreichen und deine Produktivität zu steigern.',
}

export default function LandingMarketingCalendar() {

    return (<>

        <section className="dark:bg-gray-900">
            <div className="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:px-12">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Dein All-In-One
                    <span className="from-[#210370] to-[#7AD9C4] bg-clip-text text-transparent bg-gradient-to-r"> E-Commerce Marketing Hub </span>
                    in Notion.
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Plane und verwalte alle Marketing Aktivitäten deiner E-Commerce Brand an einem Ort. Mit dem E-Commerce Markting Hub Template für Notion bringst du Struktur in dein Marketing.
                </p>

                <div className="flex flex-col mb-0 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a
                        href="#buy-box"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                    >
                        Jetzt Downloaden
                        <svg
                            className="ml-2 -mr-1 w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.8"
                                d="M12 19V5m0 14-4-4m4 4 4-4"
                            />
                        </svg>

                    </a>
                </div>

            </div>
        </section>


        <section>
            <div className="max-w-5xl mx-auto my-8 lg:mt-16">
                <img src="/images/hero-laptop.png"
                    alt="Content image" />
            </div>

        </section>

        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
                <div class="max-w-3xl pb-16 mx-auto text-center"><h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">Designed für E-Commerce Businesses</h2><p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">Wir besitzen selbst mehrere E-Commerce Brands und haben dieses Template speziell an die Anforderungen von diesem einzigartigen Geschäftsmodell angepasst.</p></div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 xl:gap-12 md:space-y-0">
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary-100 dark:bg-primary-900">

                            <svg
                                className="w-12 h-12 text-primary-700 dark:text-primary-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.5 8.7a2.5 2.5 0 0 1 3.5 0 2.5 2.5 0 0 1 0 3.5l-1.1 1a1 1 0 0 0-.2-.2l-3-3-.3-.2 1.1-1Zm-2.4 2.5L7.3 14a1 1 0 0 0-.3.7v2c0 .6.4 1 1 1h2c.3 0 .5 0 .7-.3l2.8-2.8-.2-.2-3-3-.2-.2Z"
                                    clipRule="evenodd"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M7 3c.6 0 1 .4 1 1v1h3V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h1V4c0-.6.4-1 1-1Zm10.7 8H19v8H5v-8h3.9l.5-.5c.2-.3.5-.4.9-.3 0 0 .2.1.2 0V10a1 1 0 0 1 .2-.9l1.1-1a3.5 3.5 0 0 1 4.9 0 3.5 3.5 0 0 1 1 2.9Z"
                                    clipRule="evenodd"
                                />
                            </svg>


                        </div>
                        <div className="mt-5">
                            <h3 className="text-xl font-bold dark:text-white">
                                Content Planung
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                                <li className="flex space-x-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-400">
                                        <svg
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Content Kalender
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-400">
                                        <svg
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Influencer Marketing
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-400">
                                        <svg
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Posting Zeitpläne
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-400">
                                        <svg
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Content Pillars
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-400">
                                        <svg
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        SEO Keywords
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-lg dark:bg-purple-900">
                            <svg
                                className="w-12 h-12 text-purple-600 dark:text-purple-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.8"
                                    d="M13.6 16.7c.2.3.5.5.9.6a1.4 1.4 0 0 0 1.7-.8c.2-.6-.4-1.3-1.2-1.5-.8-.2-1.4-.8-1.2-1.5a1.4 1.4 0 0 1 1.7-.7c.4 0 .7.2.9.5m-1.4 4v.6m0-5.9v.7M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
                                />
                            </svg>

                        </div>
                        <div className="mt-5">
                            <h3 className="text-xl font-bold dark:text-white">
                                Performance Marketing
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                                <li className="flex space-x-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 text-purple-600 bg-purple-100 rounded-full dark:bg-purple-900 dark:text-purple-400">
                                        <svg
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Werbekampagnen
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 text-purple-600 bg-purple-100 rounded-full dark:bg-purple-900 dark:text-purple-400">
                                        <svg
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Promotions & Sales
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 text-purple-600 bg-purple-100 rounded-full dark:bg-purple-900 dark:text-purple-400">
                                        <svg
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Änderungshistorie
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 text-purple-600 bg-purple-100 rounded-full dark:bg-purple-900 dark:text-purple-400">
                                        <svg
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Creative Datenbank
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 text-purple-600 bg-purple-100 rounded-full dark:bg-purple-900 dark:text-purple-400">
                                        <svg
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Performance Analyse
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 bg-teal-100 rounded-lg dark:bg-teal-900">
                            <svg
                                className="w-12 h-12 text-teal-600 dark:text-teal-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.8"
                                    d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"
                                />
                            </svg>

                        </div>
                        <div className="mt-5">
                            <h3 className="text-xl font-bold dark:text-white">
                                Branding & Strategie
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                                <li className="flex space-x-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 text-teal-600 bg-teal-100 rounded-full dark:bg-teal-900 dark:text-teal-400">
                                        <svg
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Brand Guidelines
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 text-teal-600 bg-teal-100 rounded-full dark:bg-teal-900 dark:text-teal-400">
                                        <svg
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Brand Assets
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 text-teal-600 bg-teal-100 rounded-full dark:bg-teal-900 dark:text-teal-400">
                                        <svg
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Personas
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 text-teal-600 bg-teal-100 rounded-full dark:bg-teal-900 dark:text-teal-400">
                                        <svg
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Ziele
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 text-teal-600 bg-teal-100 rounded-full dark:bg-teal-900 dark:text-teal-400">
                                        <svg
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Inspirationen Datenbank
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6">
                {/* Row */}
                <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Plane und Verwalte deine Werbekampagnen
                        </h2>
                        <p className="mb-8 font-light lg:text-xl">
                            Alle Meta und Google Kampagnen an einem Ort. Plane neue Kampagnen, manage aktive Kampagnen und analysiere die Performance.
                            Mit der Kampagnenhistorie behältst du auch immer einen Überlick über alle Änderungen.
                        </p>
                        {/* List */}
                        <ul
                            role="list"
                            className="pt-8 my-7 space-y-5 border-t border-gray-200 dark:border-gray-700"
                        >
                            <li className="flex space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Google & Meta Werbekampagnen planen
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Änderungshistorie
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Creative Datenbank
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Sales und Events planen
                                </span>
                            </li>
                        </ul>
                        <p className="mb-8 font-light lg:text-xl">

                        </p>
                    </div>
                    <img
                        className="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg"
                        src="/images/ads.png"
                        alt="office feature image"
                    />
                </div>
                {/* Row */}
                <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
                    <img
                        className="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg"
                        src="/images/calendar.png"
                        alt="office feature image 2"
                    />
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Content Kalender
                        </h2>
                        <p className="mb-8 font-light lg:text-xl">
                            Plane, organisiere und verwalte deinen gesamten Content in einem Übersichtlichen Kalender. Bilde deine gesamte Content Creation in
                            einem sauberen Prozess ab und behalte immer den Überlick.
                        </p>
                        {/* List */}
                        <ul
                            role="list"
                            className="pt-8 my-7 space-y-5 border-t border-gray-200 dark:border-gray-700"
                        >
                            <li className="flex space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Content Kalender
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Templates für jede Plattform (Facebook, Instagram, YouTube, TikTok, ...)
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Einfacher und übersichtlichter Content Freigabeprozess
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Einfache Zusammenarbeit mit deinem Team
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Posting Zeitpläne für das optimale Timing
                                </span>
                            </li>
                        </ul>
                        <p className="font-light lg:text-xl">

                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-16">
            <div class="mt-8 max-w-3xl pb-16 mx-auto text-center"><h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">Bringe Struktur in dein Marketing</h2><p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">Mit dem zentralen Dashboard hast du immer alles im Blick.</p></div>
            <div className="max-w-5xl mx-auto mt-5 lg:mt-5">
                <img src="/images/hub.png"
                    alt="Content image" />
            </div>

        </section>


        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6">
                {/* Row */}
                <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Brand Guidelines & CI
                        </h2>
                        <p className="mb-8 font-light lg:text-xl">
                            Stelle sicher, dass dein Brandimage konsistent und einheitlich bleibt und für alle Teammitglieder leicht zugänglich ist.
                        </p>
                        {/* List */}
                        <ul
                            role="list"
                            className="pt-8 my-7 space-y-5 border-t border-gray-200 dark:border-gray-700"
                        >
                            <li className="flex space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Brand Guidelines
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Brand Asset Datenbank
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Logos, Fonts und Marketingbilder zentral an einem Ort
                                </span>
                            </li>
                        </ul>
                        <p className="mb-8 font-light lg:text-xl">

                        </p>
                    </div>
                    <img
                        className="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg"
                        src="/images/branding.png"
                        alt="office feature image"
                    />
                </div>
                {/* Row */}
                <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
                    <img
                        className="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg"
                        src="/images/influencer.png"
                        alt="office feature image 2"
                    />
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Steuere dein Influencer Marketing
                        </h2>
                        <p className="mb-8 font-light lg:text-xl">
                            In der Notion-Datenbank können Influencer und Kooperationen effizient organisiert und verwaltet werden, um die Zusammenarbeit zu optimieren und den Kampagnenerfolg zu steigern.
                        </p>
                        {/* List */}
                        <ul
                            role="list"
                            className="pt-8 my-7 space-y-5 border-t border-gray-200 dark:border-gray-700"
                        >
                            <li className="flex space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Influencer CRM
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Influencer Kampagnen
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Briefings
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Postings planen und überwachen
                                </span>
                            </li>
                        </ul>
                        <p className="font-light lg:text-xl">

                        </p>
                    </div>
                </div>
            </div>
        </section>




        <section className="bg-white dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        Und noch viele andere nützliche Features
                    </h2>
                    <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                        Das Template bietet eine Vielzahl weiterer nützlicher Features, für ein effizientes Marketing deiner Brand.
                    </p>
                </div>
                <div className="p-4 mt-8 rounded-lg sm:p-12 lg:mt-16 bg-gray-50 dark:bg-gray-800">
                    <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
                        <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                                <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="square" strokeWidth="2" d="M8 15h7.01v.01H15L8 15Z"/>
  <path stroke="currentColor" strokeLinecap="square" strokeWidth="2" d="M20 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"/>
  <path stroke="currentColor" strokeLinecap="square" strokeWidth="2" d="M6 9h.01v.01H6V9Zm0 3h.01v.01H6V12Zm0 3h.01v.01H6V15Zm3-6h.01v.01H9V9Zm0 3h.01v.01H9V12Zm3-3h.01v.01H12V9Zm0 3h.01v.01H12V12Zm3 0h.01v.01H15V12Zm3 0h.01v.01H18V12Zm0 3h.01v.01H18V15Zm-3-6h.01v.01H15V9Zm3 0h.01v.01H18V9Z"/>
</svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                                    Keywords tracken
                                </h3>
                                <p className="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                                    Definiere relevante Keywords für deine Brand damit du deine Inhaltsstrategie optimieren kannst, um mehr organischen Traffic zu generieren.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                            <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 9H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6m0-6v6m0-6 5.419-3.87A1 1 0 0 1 18 5.942v12.114a1 1 0 0 1-1.581.814L11 15m7 0a3 3 0 0 0 0-6M6 15h3v5H6v-5Z"/>
</svg>

                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                                    Hooks verwalten
                                </h3>
                                <p className="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                                    Dokumentiere deine besten Hooks an einem zentral Ort. Das erleichtert es dir, überzeugende Anfänge für deine Anzeigen, E-Mails, Social-Media-Beiträge und andere Inhalte zu entwickeln.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                            <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/>
</svg>

                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                                    Marketing Tools
                                </h3>
                                <p className="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                                    Vereinfache die Zusammenarbeit im Team durch leichteren Zugriff auf alle Software Tools an einem zentralen Ort.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                                <svg
                                    aria-hidden="true"
                                    className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                                    Ziele erfassen
                                </h3>
                                <p className="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                                    Das Erfassen von Marketingzielen hilft, klare Leitlinien zu setzen und den Fortschritt sowie den Erfolg deiner Marketingbemühungen genau zu verfolgen und anzupassen.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                            <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"/>
</svg>

                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                                    Content Pillars definieren
                                </h3>
                                <p className="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                                    Content Pillars bieten eine klare Struktur für die Content-Strategie, erleichtern die Fokussierung auf die wichtigsten Themen und fördern die Konsistenz in deiner Markenkommunikation.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                            <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z"/>
</svg>

                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                                    Insipirations-Datenbank
                                </h3>
                                <p className="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                                    Starte nicht von 0. Sammle Ideen und Inspirationen von E-Mails, Anzeigen oder Social Media Posts,
                                    um neue Ideen zu generieren und die eigene Marketingstrategie zu optimieren.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>




        <section id="buy-box" className="border-t border-b border-gray-100 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
                <div className="bg-white rounded-lg shadow lg:grid lg:grid-cols-3 dark:bg-gray-700">
                    <div className="col-span-2 p-6 lg:p-8">
                        <h2 className="mb-1 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                            Einmal bezahlen. Für immer verwenden.
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                            Geeignet für E-Commerce Brands jeder Größe.
                        </p>
                        <div className="grid gap-4 mt-4 lg:mt-6 sm:grid-cols-2 md:grid-cols-3">
                            {/* List */}
                            <ul role="list" className="space-y-4 dark:text-white">
                                <li className="flex space-x-2.5">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Content Kalender
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Influencer Marketing
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Werbekampagnen
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Brand Guidelines
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        SEO Keywords
                                    </span>
                                </li>
                            </ul>
                            {/* List */}
                            <ul
                                role="list"
                                className="hidden space-y-4 dark:text-white sm:block"
                            >
                                <li className="flex space-x-2.5">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Posting Zeitpläne
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Promotions & Sales
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Änderungshistorie
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Creative Datenbank
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Performance Analyse
                                    </span>
                                </li>
                            </ul>
                            {/* List */}
                            <ul
                                role="list"
                                className="hidden space-y-4 dark:text-white lg:block"
                            >
                                <li className="flex space-x-2.5">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                    Content Pillars
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Brand Asset Datenbank
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Personas
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Ziele
                                    </span>
                                </li>
                                <li className="flex space-x-2.5">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                                        Insipirationen Datenbank
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex p-6 text-center bg-gray-50 lg:p-8 dark:bg-gray-700">
                        <div className="self-center w-full">
                            <div className="text-5xl font-extrabold text-gray-900 dark:text-white">
                                49€
                            </div>
                            <div className="mt-1 mb-4 text-gray-500 text-light dark:text-gray-400">
                                exkl. MwSt.
                            </div>
                            <a
                                href="https://sowl.co/bjtbss"
                                className="flex justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-bue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700"
                            >
                                Jetzt Kaufen
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 sm:text-4xl dark:text-white">
                    Hast du noch Fragen?
                </h2>
                <Accordion>
                    <AccordionPanel>
                        <AccordionTitle>Was ist ein Notion Template?</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Notion kann ein sehr mächtiges und hilfreiches Tool für dein Business sein. Die hohe flexibilität kann aber auch gerade am Anfang für
                                Verwirrung sorgen. Aus diesem Grund gibt es Templates.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Ein Notion Template ist eine vorgefertigte Struktur bestehend aus Seiten und Datenbanken, welche miteinander verknüpft sind. Du startest also nicht
                            auf einer leeren Seite, sondern es sind alle wichtigen Strukturen bereits erstellt und du kannst direkt mit deiner Arbeit beginnen und die Produktivität steigern.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>Benötige ich einen bezahlten Notion Plan?</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Nein, das Template ist für jeden Notion Plan geeignet.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>Wie läuft die Zahlungsabwicklung und der Download ab?</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Die Zahlungsabwicklung wird über die Plattform SendOwl durchgeführt. Wenn du auf den Button "Jezt Kaufen" klickst, wirst du auf eine Checkout Seite
                                von SendOwl weitergeleitet. Verfügbare Zahlungsmethoden sind Kreditkarte und PayPal.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Nach der Zahlung erhältst du eine E-Mail mit einem PDF, welches den Link zum kopieren des Notion Templates beinhaltet.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>Gib es eine Geld-Zurück-Garantie?</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Ja. Es gibt eine 30 tägige Geld-Zurück-Garantie. Schreibe uns einfach eine E-Mail an support@ecomthek.com
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
        </section>
        <section className="bg-white dark:bg-gray-900">
        <div className="grid gap-16 py-8 px-4 mx-auto max-w-screen-xl lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Über Uns
            </h2>
            <p className="mb-2 md:text-lg">
              Wir sind Tina & Alex und sind seit über 5 Jahren in der E-Commerce Branche tätig. Wir besitzen selbst mehrere D2C Brands mit 7-stelligen Umsätzen.
            </p>
            <p className="mb-2 md:text-lg">
              E-Commerce ist unsere Leidenschaft und deshalb wollen wir unser Wissen mit der Welt teilen. Unsere Mission mit der Plattform ECOMTHEK ist es, dir
              zu helfen deinen Traum vom eigenen, erfolgreichen E-Commerce Business zu erfüllen.
            </p>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {/* Profile Card */}
            <div className="flex flex-col items-center pb-8 sm:flex-row">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full sm:ml-0 sm:mr-6"
                src="/images/alex-prennsberger.png"
                alt="Bonnie Avatar"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Alex Prennsberger</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  CEO/Co-founder
                </span>
                <p className="mt-3 mb-4 max-w-sm font-light text-gray-500 dark:text-gray-400">
                  Experte für Finance, Software, Business Operations und Performance Marketing
                </p>
                <ul className="flex justify-center space-x-4 sm:justify-start">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
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
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                      </svg>

                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Profile Card */}
            <div className="flex flex-col items-center pt-8 pb-8 sm:flex-row">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full sm:ml-0 sm:mr-6"
                src="/images/tina-prennsberger.jpg"
                alt="Roberta Avatar"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Tina Prennsberger</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  CEO/Co-founder
                </span>
                <p className="mt-3 mb-4 max-w-sm font-light text-gray-500 dark:text-gray-400">
                  Expertin für Design, Produktentwicklung und People Management
                </p>
                <ul className="flex justify-center space-x-4 sm:justify-start">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                      </svg>

                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

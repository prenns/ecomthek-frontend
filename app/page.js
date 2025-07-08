import Link from 'next/link';
import BlogSnippet from '../components/blog/blogSnippet';
import SearchBar from '../components/searchbar';
import { searchSoftware } from '../lib/api/software';
import StackIcon from '../components/icons/stackIcon';
import CodeIcon from '../components/icons/codeIcon';
import BookIcon from '../components/icons/bookIcon'
import DictIcon from '../components/icons/dictIcon';

export const metadata = {
    title: 'E-Commerce Knowledge on demand | Ecomthek',
    description: 'Hochwertige Inhalte und praktische Ratschläge zu den Themen Performance Marketing, E-Mail Marketing, Produktentwicklung und vielen mehr. Unser Ziel ist es, dir dabei zu helfen, dein E-Commerce Business erfolgreich aufzubauen und zu skalieren.',
};

async function searchSoftwareSever(searchTerm) {
    "use server";
    return searchSoftware(searchTerm);
}

export default async function Home() {

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <Link
                        href="/software"
                        className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                        role="alert"
                    >
                        <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
                            Neu
                        </span>{" "}
                        <span className="text-sm font-medium">Finde die passende Software für dein E-Commerce Business</span>
                        <svg
                            className="ml-2 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>

                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                         Dein Wissenshub für modernes<span className="mx-1 relative inline-block stroke-current">
                            E-Commerce
                            <svg className="text-primary-600 absolute -bottom-0.1 w-full max-h-1.8" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none">
                                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
                            </svg>
                        </span>
                    </h1>
                    <p className="mb-8 mt-12 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                        Ob Tools, Strategien oder konkrete Umsetzung: Ecomthek liefert dir genau die Inhalte, die du brauchst, um deinen Onlineshop effizient aufzubauen und nachhaltig zu skalieren – egal, ob du gerade startest oder bereits erste Erfolge erzielt hast.
                    </p>

                   


                    <div className="mx-auto max-w-3xl">
                        <SearchBar searchSoftware={searchSoftwareSever} />
                    </div>

                </div>


            </section>

{/*             <section className="max-w-6xl mx-auto py-16 px-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                   
                    <div className="bg-primary-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
                        <div className="text-primary-500 mb-4 text-5xl">🛠️</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            Software Reviews
                        </h3>
                        <p className="text-sm text-gray-600">
                            Bewertungen &amp; Empfehlungen zu den besten Tools im E-Commerce.
                        </p>
                    </div>
                   
                    <div className="bg-primary-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
                        <div className="text-primary-500 mb-4 text-5xl">📝</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            Template &amp; Tools
                        </h3>
                        <p className="text-sm text-gray-600">
                            Sofort einsatzbereite Templates für Planung, Content &amp; Kampagnen.
                        </p>
                    </div>
                  
                    <div className="bg-primary-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
                        <div className="text-primary-500 mb-4 text-5xl">🎓</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            Kurse &amp; Playbooks
                        </h3>
                        <p className="text-sm text-gray-600">
                            Praxisnahe Lernformate für Wachstum und Optimierung deines Shops.
                        </p>
                    </div>
                   
                    <div className="bg-primary-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
                        
                        <div className="flex justify-center mb-4">

                                  <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z" />
                                    </svg>
                            </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            Services &amp; Audits
                        </h3>
                        <p className="text-sm text-gray-600">
                            Analyse &amp; Unterstützung durch E-Commerce-Expert:innen direkt für
                            dich.
                        </p>
                    </div>
                </div>
            </section> */}


            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                            So können wir Dein Business unterstützen
                        </h2>
                        <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                            Entdecke unsere Services und Produkte, um deinen Onlineshop auf das nächste Level zu bringen.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-2 mt-8 xl:gap-12 md:grid-cols-2">

                        <div className="content-center text-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-center mb-4">

                                <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">



                                <StackIcon className="w-10 lg:w-12 h-10 lg:h-12" />


                                </div>
                            </div>

                            <Link href="/software">
                                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Die besten Tools für deinen Shop
                                </h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                               Finde die besten Tools für deinen Onlineshop – von Versand bis E-Mail-Marketing. Vergleiche Funktionen, entdecke Expertenbewertungen und wähle die Software, die wirklich zu dir passt.
                            </p>
                            <Link
                                href="/software"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                        <div className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                            <div className="flex justify-center mb-4">
                                <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">

                                    <CodeIcon className="w-10 lg:w-12 h-10 lg:h-12" />

                                </div>
                            </div>

                            <Link href="/audit">
                                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Shop Audit
                                </h5>
                            </Link>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Wir nehmen deinen Onlineshop unter die Lupe und erstellen einen individuellen Handlungsplan, damit du auf das nächste Level skalieren kannst.
                            </p>
                            <Link
                                href="/audit"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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


                                    <BookIcon className="w-10 lg:w-12 h-10 lg:h-12"/>

                                </div>
                            </div>

                            <Link href="/notion-templates/marketing-calendar">
                                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Templates
                                </h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Wir haben für dich nützliche Ressourcen und Templates erstellt, welche dir helfen dein E-Commerce Business besser zu organisieren.
                            </p>
                            <Link
                                href="/notion-templates/marketing-calendar"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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


                                    <DictIcon className="w-10 lg:w-12 h-10 lg:h-12"/>

                                </div>
                            </div>

                            <Link href="/notion-templates/marketing-calendar">
                                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Blog & Insights
                                </h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                               Bleib up to date mit fundierten Artikeln zu Tools, Versand, Shop-Optimierung und mehr. Ideal für wachsende Marken, die effizient skalieren wollen.
                            </p>
                            <Link
                                href="/blog"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            </section>


            <BlogSnippet title="Du möchtest Dein E-Commerce Wissen erweitern?" description="Entdecke unsere neuesten Beiträge zum Thema E-Commerce" />

        </div>
    );
}

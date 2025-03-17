import { createClient } from '../../lib/api/utils/supabase/server';
import SoftwareCard from '../../components/softwareCard';
import CategoryListItem from '../../components/categoryListItem';
import Link from 'next/link';
import SoftwareHero from '../../components/softwareHero';

export async function generateMetadata({ params }, parent) {

    return {
        title: `Die besten E-Commerce-Tools für mehr Wachstum – Finde die passende Software | Ecomthek`,
        description: `Entdecke die besten E-Commerce-Softwares für Shopsysteme, E-Mail-Marketing, Kundenservice und mehr. Finde die passende Lösung für dein Business – mit Experten-Bewertungen und hilfreichen Funktionen.`
    }
}

export default async function Softwares() {

    const supabase = await createClient();
    const { data: categories } = await supabase.from("software_category").select();

    const mainCategories = [
        { id: 45, name: 'Shopsysteme', slug: 'shopsysteme' },
        { id: 1, name: 'E-Mail Marketing Software', slug: 'email-marketing' },
        { id: 46, name: 'Kundenservice Software', slug: 'kundenservice' },
        { id: 47, name: 'Rechnungs- und Buchhaltungssysteme', slug: 'rechnungs-und-buchhaltungssysteme' },
        { id: 48, name: 'Bewertungs- und Trust Software', slug: 'bewertungen-und-trust' },
        { id: 49, name: 'Umfragen Software', slug: 'umfragen-und-kundenfeedback' },
        { id: 50, name: 'Fulfillment & Versandsoftware', slug: 'versand-und-fulfillment' }
    ];

    const results = await Promise.all(mainCategories.map(async ({ id, name, slug }) => {
        let { data } = await supabase
            .from("software")
            .select(`
            *,
            problems(name, id, slug),
            expert_software_rating!left(*)
          `)
            .eq('software_category_id', id)
            .order('overall_score', { referencedTable: 'expert_software_rating', ascending: true })
            .limit(4);

        data = data || [];

        return { category: { id, name, slug }, data };
    }));

    return (
        <main>

            <section className="bg-white dark:bg-gray-900">
                <div className="mt-10">
                    <SoftwareHero />
                </div>
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


                {results.map(({ category, data }) => (
                    <div className="mt-16 mx-auto max-w-screen-xl text-left pt-8 mb-8">

                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                                Top {category.name}
                            </h2>
                            <Link href={`/software/kategorie/${category.slug}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Alle ansehen</Link>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-4">
                            {data.map(software => {
                                return <SoftwareCard key={software.id} software={software} />
                            })}
                        </div>
                    </div>

                ))}


                <div className="mt-16 mb-16 mx-auto max-w-screen-xl px-4 2xl:px-0">
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



            </section >
        </main>
    );
}
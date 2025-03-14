import BlogSnippet from '../../../../components/blogSnippet';
import { createClient } from '../../../../utils/supabase/server'
import { mapTypeToRevenue } from '../../../../utils/textUtils';
import Link from 'next/link';
import { Button } from "flowbite-react";
import { CiShare1 } from "react-icons/ci";


export async function generateMetadata({ params }, parent) {

    const supabase = await createClient();
    const { data: software } = await supabase.from("software").select(`
        *, 
        software_suitability(id, type),
        problems(name, id, slug),
        software_feature(*),
        software_procons(*),
        software_category(*),
        expert_software_rating(*)
        `).eq('slug', params.slug).limit(1).single();

    return {
        title: `${software.name} – Efahrungen und Features` + ' | Ecomthek',
        description: `Erfahre mehr über die Funktionen und Erfahrungen mit ${software.name}. Alle wichtigen Features im Überblick – jetzt entdecken!`
    }
}


export default async function Software({ params }) {

    const supabase = await createClient();
    const { data: software } = await supabase.from("software").select(`
        *, 
        software_suitability(id, type),
        problems(name, id, slug),
        software_feature(*),
        software_procons(*),
        software_category(*),
        expert_software_rating(*)
        `).eq('slug', params.slug).limit(1).single();

    const { data: relatedSoftware } = await supabase
        .from("software")
        .select(`
          *,
          software_category(*),
          expert_software_rating(*)
        `)
        .eq('software_category_id', software.software_category_id) // Gleiche Kategorie
        .neq('id', software.id) // Aktuelle Software ausschließen
        .limit(5);

    let proCons = null;
    let plusIcon = (<svg className="w-6 h-6 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>);

    let minusIcon = (<svg className="w-6 h-6 mr-1 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>);

    proCons = software.software_procons.map(procon => {

        let color = "bg-green-100 inline-flex items-center text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm"
        let icon = plusIcon;

        if (procon.type == "CON") {
            color = "bg-red-100 inline-flex items-center text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300"
            icon = minusIcon;
        }

        return (
            <span key={procon.id} className={color}>
                {icon}
                {procon.name}
            </span>
        );

    });

    const convertToPercentage = (score) => {
        // Clamping auf Werte zwischen 0 und 10, um Fehleingaben zu verhindern
        const clampedScore = Math.max(0, Math.min(10, score));
        // Umrechnen auf Bereich von 0% bis 100%
        return Math.round((clampedScore / 10) * 100);
    };

    let expertRating = null;
    let expertRatingBox = null;
    let scoreSnippet = null;
    let expertRatingTab = null;

    if (software.expert_software_rating.length > 0) {
        expertRating = software.expert_software_rating[0];
    }

    if (expertRating !== null) {

        expertRatingTab = (
            <li className="me-2">
                <Link

                    href="#ecomthekRating"
                    className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                    <svg className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd" />
                    </svg>

                    Ecomthek Bewertung
                </Link>
            </li>
        );


        scoreSnippet = (
            <div className="flex items-center mb-5">

                <p className="bg-blue-100 text-blue-800 text-m font-semibold inline-flex items-center p-1.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                    {expertRating.overall_score}/10
                </p>
                <p className="ms-2 font-medium text-gray-900 dark:text-white">Ecomthek Score</p>

            </div>
        );

        expertRatingBox = (
            <div className="mx-auto max-w-screen-xl flex md:flex-row mb-12">

                <div className="w-full border border-gray-200  bg-white p-6 rounded-lg ">
                    <h1 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Wie gut ist {software.name}? Unsere Analyse</h1>

                    <div class="mb-16">

                        <>
                            <div className="flex items-center mb-5">
                                <p className="bg-blue-100 text-blue-800 text-xl font-semibold inline-flex items-center p-1.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                                    {expertRating.overall_score}/10
                                </p>
                                <p className="ms-2 font-medium text-gray-900 dark:text-white">Ecomthek Score</p>

                            </div>
                            <div className="gap-8 sm:grid sm:grid-cols-2">
                                <div>
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Funktionsumfang
                                        </dt>
                                        <dd className="flex items-center mb-3">
                                            <div className="w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 me-2">
                                                <div
                                                    className="bg-blue-600 h-2.5 rounded-sm dark:bg-blue-500"
                                                    style={{ width: `${convertToPercentage(expertRating.functionality_score)}%` }}
                                                />
                                            </div>
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                {expertRating.functionality_score}
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Benutzerfreundlichkeit
                                        </dt>
                                        <dd className="flex items-center mb-3">
                                            <div className="w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 me-2">
                                                <div
                                                    className="bg-blue-600 h-2.5 rounded-sm dark:bg-blue-500"
                                                    style={{ width: `${convertToPercentage(expertRating.usability_score)}%` }}
                                                />
                                            </div>
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                {expertRating.usability_score}
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Integrationen & Kompatibilität
                                        </dt>
                                        <dd className="flex items-center mb-3">
                                            <div className="w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 me-2">
                                                <div
                                                    className="bg-blue-600 h-2.5 rounded-sm dark:bg-blue-500"
                                                    style={{ width: `${convertToPercentage(expertRating.integrations_compatibility_score)}%` }}
                                                />
                                            </div>
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                {expertRating.integrations_compatibility_score}
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Preis-Leistungs-Verhältnis
                                        </dt>
                                        <dd className="flex items-center">
                                            <div className="w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 me-2">
                                                <div
                                                    className="bg-blue-600 h-2.5 rounded-sm dark:bg-blue-500"
                                                    style={{ width: `${convertToPercentage(expertRating.value_for_money_score)}%` }}
                                                />
                                            </div>
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                {expertRating.value_for_money_score}
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                                <div>
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Support & Community
                                        </dt>
                                        <dd className="flex items-center mb-3">
                                            <div className="w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 me-2">
                                                <div
                                                    className="bg-blue-600 h-2.5 rounded-sm dark:bg-blue-500"
                                                    style={{ width: `${convertToPercentage(expertRating.support_community_score)}%` }}
                                                />
                                            </div>
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                {expertRating.support_community_score}
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Performance & Stabilität
                                        </dt>
                                        <dd className="flex items-center mb-3">
                                            <div className="w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 me-2">
                                                <div
                                                    className="bg-blue-600 h-2.5 rounded-sm dark:bg-blue-500"
                                                    style={{ width: `${convertToPercentage(expertRating.performance_stability_score)}%` }}
                                                />
                                            </div>
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                {expertRating.performance_stability_score}
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Innovationsgrad & Zukunftssicherheit
                                        </dt>
                                        <dd className="flex items-center">
                                            <div className="w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 me-2">
                                                <div
                                                    className="bg-blue-600 h-2.5 rounded-sm dark:bg-blue-500"
                                                    style={{ width: `${convertToPercentage(expertRating.innovation_future_proof_score)}%` }}
                                                />
                                            </div>
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                {expertRating.innovation_future_proof_score}
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </>


                    </div>
                    <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">

                        <p className="mr-2 bg-blue-100 text-blue-800 text-m font-semibold inline-flex items-center p-1.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                            {expertRating.functionality_score}/10
                        </p>
                        Funktionsumfang

                    </h2>
                    <p className="mb-8 font-normal text-gray-500 dark:text-gray-400">{expertRating.functionality_text}</p>

                    <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        <p className="mr-2 bg-blue-100 text-blue-800 text-m font-semibold inline-flex items-center p-1.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                            {expertRating.usability_score}/10
                        </p>
                        Benutzerfreundlichkeit</h2>
                    <p className="mb-8 font-normal text-gray-500 dark:text-gray-400">{expertRating.usability_text}</p>

                    <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        <p className="mr-2 bg-blue-100 text-blue-800 text-m font-semibold inline-flex items-center p-1.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                            {expertRating.integrations_compatibility_score}/10
                        </p>
                        Integrationen & Kompatibilität
                    </h2>
                    <p className="mb-8 font-normal text-gray-500 dark:text-gray-400">{expertRating.integrations_compatibility_text}</p>

                    <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        <p className="mr-2 bg-blue-100 text-blue-800 text-m font-semibold inline-flex items-center p-1.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                            {expertRating.value_for_money_score}/10
                        </p>
                        Preis-Leistungs-Verhältnis
                    </h2>
                    <p className="mb-8 font-normal text-gray-500 dark:text-gray-400">{expertRating.value_for_money_text}</p>

                    <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        <p className="mr-2 bg-blue-100 text-blue-800 text-m font-semibold inline-flex items-center p-1.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                            {expertRating.support_community_score}/10
                        </p>
                        Support & Community
                    </h2>
                    <p className="mb-8 font-normal text-gray-500 dark:text-gray-400">{expertRating.support_community_text}</p>

                    <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        <p className="mr-2 bg-blue-100 text-blue-800 text-m font-semibold inline-flex items-center p-1.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                            {expertRating.performance_stability_score}/10
                        </p>
                        Performance & Stabilität
                    </h2>
                    <p className="mb-8 font-normal text-gray-500 dark:text-gray-400">{expertRating.performance_stability_text}</p>

                    <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        <p className="mr-2 bg-blue-100 text-blue-800 text-m font-semibold inline-flex items-center p-1.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                            {expertRating.innovation_future_proof_score}/10
                        </p>
                        Innovationsgrad & Zukunftssicherheit
                    </h2>
                    <p className="mb-8 font-normal text-gray-500 dark:text-gray-400">{expertRating.innovation_future_proof_text}</p>

                    <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Fazit
                    </h2>
                    <p className="mb-8 font-normal text-gray-500 dark:text-gray-400">{expertRating.final_verdict}</p>

                </div>

            </div>
        );

    }

    return (
        <div>

            <section className="bg-white dark:bg-gray-900">

                <div className="mx-auto max-w-screen-xl text-left pt-8 mb-8">
                    <nav className="mb-4 flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link
                                    href="/software"
                                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                >
                                    <svg
                                        className="w-3 h-3 me-2.5"
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
                            <li>
                                <div className="flex items-center">
                                    <svg
                                        className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 9 4-4-4-4"
                                        />
                                    </svg>
                                    <Link
                                        href={`/software/kategorie/${software.software_category.slug}`}
                                        className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        {software.software_category.name}
                                    </Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg
                                        className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 9 4-4-4-4"
                                        />
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                                        {software.name}
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div className="pt-6 pr-6 pl-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-row">
                            <div className="w-28 h-28 mb-3 mr-5 shadow-lg bg-white flex items-center justify-center">
                                <img
                                    className="w-24 h-24 object-contain scale-90"
                                    src={software.logo_url}
                                    alt={`${software.name} Logo`}
                                />
                            </div>

                            <div>
                                <h1 className="mb-1 text-3xl font-medium text-gray-900 dark:text-white">
                                    {software.name}
                                    {/*  <svg className="w-6 h-6 text-blue-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd" />
                                    </svg> */}

                                </h1>
                                {scoreSnippet}
                                <Button className="focus:outline-none" target="_blank" size="lg" color="blue" as={Link} href={software.website_url}>
                                    <CiShare1 className="mr-2 h-5 w-5" />
                                    {software.name} {software.cta_text}
                                </Button>

                            </div>

                        </div>

                        <div className="border-b border-gray-200 dark:border-gray-700">
                            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                                <li className="me-2">
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                                        aria-current="page"
                                    >
                                        <svg
                                            className="w-4 h-4 me-2 text-blue-600 dark:text-blue-500"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 18 18"
                                        >
                                            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                        </svg>
                                        Produktübersicht
                                    </a>
                                </li>
                                {expertRatingTab}
                            </ul>
                        </div>

                    </div>

                </div>
            </section>


            <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row gap-6 mb-8">

                <div className="border border-gray-200 w-full md:w-3/4 bg-white p-6 rounded-lg ">
                    <h1 className="mb-8 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Was ist {software.name}?</h1>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                        {software.description_headline}
                    </h2>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{software.description}</p>


                    <h1 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Welche Probleme löst {software.name}?</h1>
                    <ul className="mb-8 max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                        {software.problems.map(problem => {
                            return (
                                <li key={problem.id} className="flex items-center">
                                    <svg
                                        className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    {problem.name}
                                </li>
                            );
                        })}

                    </ul>

                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                        {software.problems_text}
                    </p>


                    <h1 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Was für Features hat {software.name}?</h1>

                    <ul className="mb-8 max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                        {software.software_feature.map(feature => {
                            return (
                                <li key={feature.id} className="flex items-center">
                                    <svg
                                        className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    {feature.name}
                                </li>
                            )
                        })}
                    </ul>

                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                        {software.features_text}
                    </p>

                    <h1 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Für wen ist {software.name} geeignet?</h1>

                    <div class="mb-4">
                        {software.software_suitability.map(suitability => {
                            return (

                                <span key={suitability.id} className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                                    {mapTypeToRevenue(suitability.type)}
                                </span>);
                        })}
                    </div>

                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                        {software.for_text}
                    </p>



                    {/*<div id="default-carousel" className="mt-8 relative w-full" data-carousel="slide">
           
                        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                          
                            <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                                <img
                                    src="/images/branding.png"
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt="..."
                                />
                            </div>
                         
                            <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                                <img
                                    src="/images/checklist.png"
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt="..."
                                />
                            </div>
                           
                            <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                                <img
                                    src="/images/dashboard.png"
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt="..."
                                />
                            </div>
                           
                            <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                                <img
                                    src="/images/influencer.png"
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt="..."
                                />
                            </div>
                         
                            <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                                <img
                                    src="/images/hub.png"
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt="..."
                                />
                            </div>
                        </div>
                   
                        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button
                                type="button"
                                className="w-3 h-3 rounded-full"
                                aria-current="true"
                                aria-label="Slide 1"
                                data-carousel-slide-to={0}
                            />
                            <button
                                type="button"
                                className="w-3 h-3 rounded-full"
                                aria-current="false"
                                aria-label="Slide 2"
                                data-carousel-slide-to={1}
                            />
                            <button
                                type="button"
                                className="w-3 h-3 rounded-full"
                                aria-current="false"
                                aria-label="Slide 3"
                                data-carousel-slide-to={2}
                            />
                            <button
                                type="button"
                                className="w-3 h-3 rounded-full"
                                aria-current="false"
                                aria-label="Slide 4"
                                data-carousel-slide-to={3}
                            />
                            <button
                                type="button"
                                className="w-3 h-3 rounded-full"
                                aria-current="false"
                                aria-label="Slide 5"
                                data-carousel-slide-to={4}
                            />
                        </div>
                       
                        <button
                            type="button"
                            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-prev=""
                        >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg
                                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 1 1 5l4 4"
                                    />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button
                            type="button"
                            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-next=""
                        >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg
                                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div> */}


                </div>

                <div className="md:w-1/4 w-full bg-white rounded-lg ">
                    <div className="mb-8 max-w p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Vorteile & Nachteile
                        </h5>
                        {proCons}
                    </div>
                    <div className="max-w mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Geeignet für Shops
                        </h5>
                        {software.software_suitability.map(suitability => {
                            return (
                                <div>
                                    <span key={suitability.id} className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                                        {mapTypeToRevenue(suitability.type)}
                                    </span></div>);
                        })}
                    </div>


                    <div className="max-w p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Ähnliche Software
                        </h5>
                        <ul className="my-4 space-y-3">

                            {relatedSoftware.map(relatedSoftwareItem => {
                                return (
                                    <li key={relatedSoftwareItem.id}>
                                        <Link
                                            href={`/software/tool/${relatedSoftwareItem.slug}`}
                                            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                                        >
                                            <img
                                                className="w-6 h-6 object-contain"
                                                src={relatedSoftwareItem.logo_url}
                                                alt={`${relatedSoftwareItem.name} Logo`}
                                            />

                                            <span className="flex-1 ms-3 whitespace-nowrap">{relatedSoftwareItem.name}</span>
                                        </Link>
                                    </li>
                                )
                            })}

                        </ul>

                    </div>


                </div>
            </div>

            <div id="ecomthekRating" ></div>
            {expertRatingBox}
            {/*             <section>
                <BlogSnippet title="Unsere Artikel zu Shopify" description="Tiefgehende Analysen, Vergleiche & Strategien für deinen Erfolg." />
            </section>
 */}
            <>
                {/*   <section className="bg-white mb-12 antialiased dark:bg-gray-900 ">
                    <div className="border border-gray-200 mx-auto max-w-screen-xl p-6 rounded-lg">
                        <div className="lg:flex lg:items-start lg:gap-12">
                            <div className="w-full shrink-0 space-y-6 lg:max-w-sm">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Erfahrungen & Reviews
                                </h2>
                                <div className="space-y-8">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <p className="text-3xl font-semibold leading-none text-gray-900 dark:text-white">
                                                4.0
                                            </p>
                                            <div className="flex items-center gap-0.5">
                                                <svg
                                                    className="h-5 w-5 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                </svg>
                                                <svg
                                                    className="h-5 w-5 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                </svg>
                                                <svg
                                                    className="h-5 w-5 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                </svg>
                                                <svg
                                                    className="h-5 w-5 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                </svg>
                                                <svg
                                                    className="h-5 w-5 text-gray-300 dark:text-gray-600"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-base font-medium leading-none text-gray-900 dark:text-white">
                                            based on 23 ratings
                                        </p>
                                    </div>
                                    <div className="min-w-0 flex-1 space-y-3">
                                        <div className="flex items-center gap-2">
                                            <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                                                5
                                            </p>
                                            <svg
                                                className="h-4 w-4 shrink-0 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                            </svg>
                                            <div className="h-3 w-48 max-w-xs rounded-sm bg-gray-200 dark:bg-gray-700">
                                                <div
                                                    className="h-3 rounded-sm bg-green-500"
                                                    style={{ width: "60%" }}
                                                />
                                            </div>
                                            <a
                                                href="#"
                                                className="shrink-0 text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500"
                                            >
                                                {" "}
                                                239 reviews{" "}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                                                4
                                            </p>
                                            <svg
                                                className="h-4 w-4 shrink-0 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                            </svg>
                                            <div className="h-3 w-48 max-w-xs rounded-sm bg-gray-200 dark:bg-gray-700">
                                                <div
                                                    className="h-3 rounded-sm bg-green-400"
                                                    style={{ width: "20%" }}
                                                />
                                            </div>
                                            <a
                                                href="#"
                                                className="shrink-0 text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500"
                                            >
                                                {" "}
                                                75 reviews{" "}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                                                3
                                            </p>
                                            <svg
                                                className="h-4 w-4 shrink-0 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                            </svg>
                                            <div className="h-3 w-48 max-w-xs rounded-sm bg-gray-200 dark:bg-gray-700">
                                                <div
                                                    className="h-3 rounded-sm bg-yellow-300"
                                                    style={{ width: "30%" }}
                                                />
                                            </div>
                                            <a
                                                href="#"
                                                className="shrink-0 text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500"
                                            >
                                                {" "}
                                                106 reviews{" "}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                                                2
                                            </p>
                                            <svg
                                                className="h-4 w-4 shrink-0 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                            </svg>
                                            <div className="h-3 w-48 max-w-xs rounded-sm bg-gray-200 dark:bg-gray-700">
                                                <div
                                                    className="h-3 rounded-sm bg-orange-500"
                                                    style={{ width: "15%" }}
                                                />
                                            </div>
                                            <a
                                                href="#"
                                                className="shrink-0 text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500"
                                            >
                                                {" "}
                                                40 reviews{" "}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                                                1
                                            </p>
                                            <svg
                                                className="h-4 w-4 shrink-0 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                            </svg>
                                            <div className="h-3 w-48 max-w-xs rounded-sm bg-gray-200 dark:bg-gray-700">
                                                <div
                                                    className="h-3 rounded-sm bg-red-600"
                                                    style={{ width: "10%" }}
                                                />
                                            </div>
                                            <a
                                                href="#"
                                                className="shrink-0 text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500"
                                            >
                                                {" "}
                                                20 reviews{" "}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Customer Reviews, including Product Star Ratings, help customers
                                            to learn more about the product and decide whether it is the
                                            right product for them.
                                        </p>
                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                            To calculate the overall rating and percentage breakdown by
                                            star, we don’t use a simple average. Instead, our system
                                            considers things like how recent a review is and if the reviewer
                                            bought the item on Flowbite.
                                        </p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    data-drawer-target="add-review-drawer"
                                    data-drawer-show="add-review-drawer"
                                    data-drawer-placement="right"
                                    className="mb-2 me-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Write a review
                                </button>
                            </div>
                            <div className="mt-6 min-w-0 flex-1 lg:mt-0">
                                <div className="sm:flex sm:items-end sm:justify-between sm:gap-4">
                                    <p className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400">
                                        Showing
                                        <span className="font-medium text-gray-900 dark:text-white">
                                            5,768
                                        </span>
                                        Customer Reviews
                                    </p>
                                    <div className="mt-4 shrink-0 space-y-4 sm:mt-0 sm:flex sm:max-w-sm sm:items-center sm:gap-4 sm:space-y-0">
                                        <div>
                                            <label
                                                htmlFor="reviews"
                                                className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Select review type
                                            </label>
                                            <select
                                                id="reviews"
                                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-2.5 pr-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                            >
                                                <option selected="">All Reviews</option>
                                                <option value="5 stars">5 stars</option>
                                                <option value="4 stars">4 stars</option>
                                                <option value="3 stars">3 stars</option>
                                                <option value="2 stars">2 stars</option>
                                                <option value="4 stars">1 star</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="time"
                                                className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Select time
                                            </label>
                                            <select
                                                id="time"
                                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-2.5 pr-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                            >
                                                <option selected="">Recently Added</option>
                                                <option value="oldest">Oldest</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 divide-y divide-gray-200 border-t border-gray-200 dark:divide-gray-700 dark:border-gray-700">
                                    <div className="gap-8 py-6 sm:flex sm:items-start">
                                        <div className="min-w-0 flex-1 space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                                                        Michael Gough
                                                    </p>
                                                    <div className="flex items-center gap-0.5">
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                    November 18 2023 at 15:35
                                                </p>
                                            </div>
                                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                                My old IMAC was from 2013. This replacement was well needed.
                                                Very fast, and the colour matches my office set up perfectly.
                                            </p>
                                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                                The display is out of this world and I’m very happy with this
                                                purchase.
                                            </p>
                                            <div className="flex items-center gap-6">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline dark:text-white"
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
                                                            d="M14.5 8.046H11V6.119c0-.921-.9-1.446-1.524-.894l-5.108 4.49a1.2 1.2 0 0 0 0 1.739l5.108 4.49c.624.556 1.524.027 1.524-.893v-1.928h2a3.023 3.023 0 0 1 3 3.046V19a5.593 5.593 0 0 0-1.5-10.954Z"
                                                        />
                                                    </svg>
                                                    Reply
                                                </button>
                                                <button
                                                    type="button"
                                                    data-modal-target="report-modal"
                                                    data-modal-toggle="report-modal"
                                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline dark:text-white"
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
                                                            d="M5 14v7M5 4.971v9.541c5.6-5.538 8.4 2.64 14-.086v-9.54C13.4 7.61 10.6-.568 5 4.97Z"
                                                        />
                                                    </svg>
                                                    Report
                                                </button>
                                            </div>
                                            <div className="flex">
                                                <div className="mr-3 shrink-0 hidden sm:block">
                                                    <img
                                                        className="w-9 h-9 rounded-full"
                                                        src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                                        alt="Michael Burry"
                                                    />
                                                </div>
                                                <form className="w-full">
                                                    <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                                                        <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                                                            <label htmlFor="comment" className="sr-only">
                                                                Your comment
                                                            </label>
                                                            <textarea
                                                                id="comment"
                                                                rows={4}
                                                                className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                                                placeholder="Write a comment..."
                                                                required=""
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                        <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                                                            <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                                                                <div className="flex items-center space-x-1 sm:pr-4">
                                                                    <button
                                                                        type="button"
                                                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                                    >
                                                                        <svg
                                                                            className="w-4 h-4"
                                                                            aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="none"
                                                                            viewBox="0 0 12 20"
                                                                        >
                                                                            <path
                                                                                stroke="currentColor"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth={2}
                                                                                d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                                                                            />
                                                                        </svg>
                                                                        <span className="sr-only">Attach file</span>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                                    >
                                                                        <svg
                                                                            className="w-4 h-4"
                                                                            aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 16 20"
                                                                        >
                                                                            <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                                                        </svg>
                                                                        <span className="sr-only">Embed map</span>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                                    >
                                                                        <svg
                                                                            className="w-4 h-4"
                                                                            aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 16 20"
                                                                        >
                                                                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                                                        </svg>
                                                                        <span className="sr-only">Upload image</span>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                                    >
                                                                        <svg
                                                                            className="w-4 h-4"
                                                                            aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 16 20"
                                                                        >
                                                                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                                                            <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                                                                        </svg>
                                                                        <span className="sr-only">Format code</span>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                                    >
                                                                        <svg
                                                                            className="w-4 h-4"
                                                                            aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 20 20"
                                                                        >
                                                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                                                                        </svg>
                                                                        <span className="sr-only">Add emoji</span>
                                                                    </button>
                                                                </div>
                                                                <div className="flex-wrap items-center space-x-1 xl:pl-4 hidden xl:flex">
                                                                    <button
                                                                        type="button"
                                                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                                    >
                                                                        <svg
                                                                            className="w-4 h-4"
                                                                            aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="none"
                                                                            viewBox="0 0 21 18"
                                                                        >
                                                                            <path
                                                                                stroke="currentColor"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth={2}
                                                                                d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
                                                                            />
                                                                        </svg>
                                                                        <span className="sr-only">Add list</span>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                                    >
                                                                        <svg
                                                                            className="w-4 h-4"
                                                                            aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 20 20"
                                                                        >
                                                                            <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                                                                        </svg>
                                                                        <span className="sr-only">Settings</span>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                                    >
                                                                        <svg
                                                                            className="w-4 h-4"
                                                                            aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 20 20"
                                                                        >
                                                                            <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                                                                            <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                                                                        </svg>
                                                                        <span className="sr-only">Timeline</span>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                                    >
                                                                        <svg
                                                                            className="w-4 h-4"
                                                                            aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 20 20"
                                                                        >
                                                                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                                                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                                                        </svg>
                                                                        <span className="sr-only">Download</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                                                    >
                                                        Post comment
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="mt-6 shrink-0 sm:mt-0 md:w-64">
                                            <p className="text-base font-semibold text-gray-900 dark:text-white">
                                                Loved the most
                                            </p>
                                            <ul className="mt-2 space-y-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                <li className="flex items-center gap-1.5">
                                                    <svg
                                                        className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500"
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
                                                            d="M5 11.917 9.724 16.5 19 7.5"
                                                        />
                                                    </svg>
                                                    Great customer support
                                                </li>
                                                <li className="flex items-center gap-1.5">
                                                    <svg
                                                        className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500"
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
                                                            d="M5 11.917 9.724 16.5 19 7.5"
                                                        />
                                                    </svg>
                                                    Fair offer
                                                </li>
                                                <li className="flex items-center gap-1.5">
                                                    <svg
                                                        className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500"
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
                                                            d="M5 11.917 9.724 16.5 19 7.5"
                                                        />
                                                    </svg>
                                                    Premium product
                                                </li>
                                                <li className="flex items-center gap-1.5">
                                                    <svg
                                                        className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500"
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
                                                            d="M5 11.917 9.724 16.5 19 7.5"
                                                        />
                                                    </svg>
                                                    Shipping Cost
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="gap-8 py-6 sm:flex sm:items-start">
                                        <div className="min-w-0 flex-1 space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                                                        Michael Gough
                                                    </p>
                                                    <div className="flex items-center gap-0.5">
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                    November 18 2023 at 15:35
                                                </p>
                                            </div>
                                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                                It’s fancy, amazing keyboard, matching accessories. Super
                                                fast, batteries last more than usual, everything runs perfect
                                                in this computer. Highly recommend!
                                            </p>
                                            <div className="flex items-center gap-6">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline dark:text-white"
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
                                                            d="M14.5 8.046H11V6.119c0-.921-.9-1.446-1.524-.894l-5.108 4.49a1.2 1.2 0 0 0 0 1.739l5.108 4.49c.624.556 1.524.027 1.524-.893v-1.928h2a3.023 3.023 0 0 1 3 3.046V19a5.593 5.593 0 0 0-1.5-10.954Z"
                                                        />
                                                    </svg>
                                                    Reply
                                                </button>
                                                <button
                                                    type="button"
                                                    data-modal-target="report-modal"
                                                    data-modal-toggle="report-modal"
                                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline dark:text-white"
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
                                                            d="M5 14v7M5 4.971v9.541c5.6-5.538 8.4 2.64 14-.086v-9.54C13.4 7.61 10.6-.568 5 4.97Z"
                                                        />
                                                    </svg>
                                                    Report
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-6 shrink-0 sm:mt-0 md:w-64">
                                            <p className="text-base font-semibold text-gray-900 dark:text-white">
                                                Loved the most
                                            </p>
                                            <ul className="mt-2 space-y-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                <li className="flex items-center gap-1.5">
                                                    <svg
                                                        className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500"
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
                                                            d="M5 11.917 9.724 16.5 19 7.5"
                                                        />
                                                    </svg>
                                                    Top-notch peripherals
                                                </li>
                                                <li className="flex items-center gap-1.5">
                                                    <svg
                                                        className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500"
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
                                                            d="M5 11.917 9.724 16.5 19 7.5"
                                                        />
                                                    </svg>
                                                    Fair offer
                                                </li>
                                                <li className="flex items-center gap-1.5">
                                                    <svg
                                                        className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500"
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
                                                            d="M5 11.917 9.724 16.5 19 7.5"
                                                        />
                                                    </svg>
                                                    Extended warranty
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="gap-8 py-6 sm:flex sm:items-start">
                                        <div className="min-w-0 flex-1 space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                                                        Bonnie Green
                                                    </p>
                                                    <div className="flex items-center gap-0.5">
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-gray-300 dark:text-gray-600"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-gray-300 dark:text-gray-600"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                    November 18 2023 at 15:35
                                                </p>
                                            </div>
                                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                                I would have expected it to have more premium materials,
                                                considering the costs, there is also a problem with delivery
                                                times when you place the order, it says it will be delivered
                                                in 2-3 working days, but I received it after 1 week half.
                                            </p>
                                            <div className="flex items-center gap-6">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline dark:text-white"
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
                                                            d="M14.5 8.046H11V6.119c0-.921-.9-1.446-1.524-.894l-5.108 4.49a1.2 1.2 0 0 0 0 1.739l5.108 4.49c.624.556 1.524.027 1.524-.893v-1.928h2a3.023 3.023 0 0 1 3 3.046V19a5.593 5.593 0 0 0-1.5-10.954Z"
                                                        />
                                                    </svg>
                                                    Reply
                                                </button>
                                                <button
                                                    type="button"
                                                    data-modal-target="report-modal"
                                                    data-modal-toggle="report-modal"
                                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline dark:text-white"
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
                                                            d="M5 14v7M5 4.971v9.541c5.6-5.538 8.4 2.64 14-.086v-9.54C13.4 7.61 10.6-.568 5 4.97Z"
                                                        />
                                                    </svg>
                                                    Report
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-6 shrink-0 sm:mt-0 md:w-64">
                                            <p className="text-base font-semibold text-gray-900 dark:text-white">
                                                Disliked the most
                                            </p>
                                            <ul className="mt-2 space-y-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                <li className="flex items-center gap-1.5" />
                                                <li className="flex items-center gap-1.5">
                                                    <svg
                                                        className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500"
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
                                                    Shipping time
                                                </li>
                                                <li className="flex items-center gap-1.5" />
                                                <li className="flex items-center gap-1.5">
                                                    <svg
                                                        className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500"
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
                                                    Lack of premium materials
                                                </li>
                                                <li className="flex items-center gap-1.5" />
                                                <li className="flex items-center gap-1.5">
                                                    <svg
                                                        className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500"
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
                                                    Does not come with OS installed
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="gap-8 py-6 sm:flex sm:items-start">
                                        <div className="min-w-0 flex-1 space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                                                        Michael Gough
                                                    </p>
                                                    <div className="flex items-center gap-0.5">
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                    November 18 2023 at 15:35
                                                </p>
                                            </div>
                                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                                Basic tools such as a browser (Safari) and a mail client are
                                                included in the system. Microsoft Office apps can be
                                                downloaded from the App Store though they may only work in
                                                read-only mode unless you take out a subscription. The
                                                instruction manual that comes with it is the size of a piece
                                                of toilet paper but the proper user guide is on-line.
                                            </p>
                                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                                Basic tools such as a browser (Safari) and a mail client are
                                                included in the system. Microsoft Office apps can be
                                                downloaded from the App Store though they may only work in
                                                read-only mode unless you take out a subscription. The
                                                instruction manual that comes with it is the size of a piece
                                                of toilet paper but the proper user guide is on-line.
                                            </p>
                                            <div className="flex items-center gap-6">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline dark:text-white"
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
                                                            d="M14.5 8.046H11V6.119c0-.921-.9-1.446-1.524-.894l-5.108 4.49a1.2 1.2 0 0 0 0 1.739l5.108 4.49c.624.556 1.524.027 1.524-.893v-1.928h2a3.023 3.023 0 0 1 3 3.046V19a5.593 5.593 0 0 0-1.5-10.954Z"
                                                        />
                                                    </svg>
                                                    Reply
                                                </button>
                                                <button
                                                    type="button"
                                                    data-modal-target="report-modal"
                                                    data-modal-toggle="report-modal"
                                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline dark:text-white"
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
                                                            d="M5 14v7M5 4.971v9.541c5.6-5.538 8.4 2.64 14-.086v-9.54C13.4 7.61 10.6-.568 5 4.97Z"
                                                        />
                                                    </svg>
                                                    Report
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-6 shrink-0 sm:mt-0 md:w-64">
                                            <p className="text-base font-semibold text-gray-900 dark:text-white">
                                                Loved the most
                                            </p>
                                            <ul className="mt-2 space-y-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                <li className="flex items-center gap-1.5">
                                                    <svg
                                                        className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500"
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
                                                            d="M5 11.917 9.724 16.5 19 7.5"
                                                        />
                                                    </svg>
                                                    Great customer support
                                                </li>
                                                <li className="flex items-center gap-1.5">
                                                    <svg
                                                        className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500"
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
                                                            d="M5 11.917 9.724 16.5 19 7.5"
                                                        />
                                                    </svg>
                                                    Fair offer
                                                </li>
                                                <li className="flex items-center gap-1.5">
                                                    <svg
                                                        className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500"
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
                                                            d="M5 11.917 9.724 16.5 19 7.5"
                                                        />
                                                    </svg>
                                                    Premium product
                                                </li>
                                                <li className="flex items-center gap-1.5">
                                                    <svg
                                                        className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500"
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
                                                            d="M5 11.917 9.724 16.5 19 7.5"
                                                        />
                                                    </svg>
                                                    Shipping Cost
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="gap-8 py-6 sm:flex sm:items-start">
                                        <div className="min-w-0 flex-1 space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                                                        Michael Gough
                                                    </p>
                                                    <div className="flex items-center gap-0.5">
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-gray-300 dark:text-gray-600"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-gray-300 dark:text-gray-600"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-gray-300 dark:text-gray-600"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                        <svg
                                                            className="h-4 w-4 shrink-0 text-gray-300 dark:text-gray-600"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                    November 18 2023 at 15:35
                                                </p>
                                            </div>
                                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                                I actually waited 2 weeks for my order to arrive, no one
                                                answered the phone, the product is ok but the waiting times
                                                are huge.
                                            </p>
                                            <div className="flex items-center gap-6">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline dark:text-white"
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
                                                            d="M14.5 8.046H11V6.119c0-.921-.9-1.446-1.524-.894l-5.108 4.49a1.2 1.2 0 0 0 0 1.739l5.108 4.49c.624.556 1.524.027 1.524-.893v-1.928h2a3.023 3.023 0 0 1 3 3.046V19a5.593 5.593 0 0 0-1.5-10.954Z"
                                                        />
                                                    </svg>
                                                    Reply
                                                </button>
                                                <button
                                                    type="button"
                                                    data-modal-target="report-modal"
                                                    data-modal-toggle="report-modal"
                                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline dark:text-white"
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
                                                            d="M5 14v7M5 4.971v9.541c5.6-5.538 8.4 2.64 14-.086v-9.54C13.4 7.61 10.6-.568 5 4.97Z"
                                                        />
                                                    </svg>
                                                    Report
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-6 shrink-0 sm:mt-0 md:w-64">
                                            <p className="text-base font-semibold text-gray-900 dark:text-white">
                                                Dislike the most
                                            </p>
                                            <ul className="mt-2 space-y-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                <li className="flex items-center gap-1.5" />
                                                <li className="flex items-center gap-1.5">
                                                    <svg
                                                        className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500"
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
                                                    Waiting times for delivery
                                                </li>
                                                <li className="flex items-center gap-1.5">
                                                    <svg
                                                        className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500"
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
                                                    Non-existent customer support
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center justify-center sm:mt-8 lg:mt-12">
                                    <button
                                        type="button"
                                        className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                                    >
                                        View more reviews
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    id="add-review-drawer"
                    className="fixed right-0 top-0 z-40 h-screen w-full max-w-md translate-x-full overflow-y-auto bg-white p-4 antialiased transition-transform dark:bg-gray-800"
                    tabIndex={-1}
                    aria-labelledby="add-review-drawer-label"
                    aria-hidden="true"
                >
                    <h5
                        id="add-review-drawer-label"
                        className="mb-6 inline-flex items-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400"
                    >
                        Add a review
                    </h5>
                    <button
                        type="button"
                        data-drawer-dismiss="add-review-drawer"
                        aria-controls="add-review-drawer"
                        className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <svg
                            aria-hidden="true"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                    <form action="#">
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <svg
                                    className="h-6 w-6 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="ms-2 h-6 w-6 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="ms-2 h-6 w-6 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="ms-2 h-6 w-6 text-gray-300 dark:text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="ms-2 h-6 w-6 text-gray-300 dark:text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <span className="ms-2 text-lg font-bold text-gray-900 dark:text-white">
                                    3.0 out of 5
                                </span>
                            </div>
                            <div>
                                <label
                                    htmlFor="title"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Review title{" "}
                                    <span className="dark:text-gay-400 font-normal text-gray-500">
                                        (30-150 characters)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                    placeholder="Type review title"
                                    required=""
                                />
                            </div>
                            <div>
                                <p className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                    Title suggestions
                                </p>
                                <div className="flex space-x-2">
                                    <button
                                        type="button"
                                        className="me-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-800"
                                    >
                                        Awesome specifications
                                    </button>
                                    <button
                                        type="button"
                                        className="me-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-800"
                                    >
                                        Best price
                                    </button>
                                    <button
                                        type="button"
                                        className="me-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-800"
                                    >
                                        Great battery
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="review"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Review{" "}
                                    <span className="dark:text-gay-400 font-normal text-gray-500">
                                        (150-3000 characters)
                                    </span>
                                </label>
                                <textarea
                                    id="review"
                                    rows={5}
                                    className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                    required=""
                                    defaultValue={""}
                                />
                                <p className="ms-auto text-xs text-gray-500 dark:text-gray-400">
                                    Problems with the product or delivery?{" "}
                                    <a
                                        href="#"
                                        className="text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Send a report
                                    </a>
                                    .
                                </p>
                            </div>
                            <div>
                                <label
                                    htmlFor="likes"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    What did you like?
                                </label>
                                <input
                                    type="text"
                                    name="likes"
                                    id="likes-1"
                                    className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                    defaultValue="Great customer support"
                                    required=""
                                />
                                <input
                                    type="text"
                                    name="likes-2"
                                    id="likes-2"
                                    className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                    defaultValue="Fair pricing"
                                    required=""
                                />
                                <input
                                    type="text"
                                    name="likes-2"
                                    id="likes-2"
                                    className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                    placeholder="What you like about this product?"
                                    required=""
                                />
                                <button
                                    type="button"
                                    className="py-2.5 px-5 w-full inline-flex justify-center items-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    {" "}
                                    <svg
                                        className="w-5 h-5 me-2"
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
                                            d="M5 12h14m-7 7V5"
                                        />
                                    </svg>
                                    Add another
                                </button>
                            </div>
                            <div>
                                <label
                                    htmlFor="dislikes"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    What did you dislike?
                                </label>
                                <input
                                    type="text"
                                    name="dislikes"
                                    id="dislikes-1"
                                    className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                    defaultValue="Product arrived later than expected"
                                    required=""
                                />
                                <input
                                    type="text"
                                    name="dislikes-2"
                                    id="dislikes-2"
                                    className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                    placeholder="What you dislike about this product?"
                                    required=""
                                />
                                <button
                                    type="button"
                                    className="py-2.5 px-5 w-full inline-flex justify-center items-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    {" "}
                                    <svg
                                        className="w-5 h-5 me-2"
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
                                            d="M5 12h14m-7 7V5"
                                        />
                                    </svg>
                                    Add another
                                </button>
                            </div>
                            <div>
                                <p className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                    Add photos of the product to help other customers{" "}
                                    <span className="text-gray-500 dark:text-gray-400">(Optional)</span>
                                </p>
                                <div className="flex w-full items-center justify-center">
                                    <label
                                        htmlFor="dropzone-file"
                                        className="dark:hover:bg-bray-800 flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                    >
                                        <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                            <svg
                                                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span> or drag
                                                and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                                            </p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
                            <div className="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
                                <button
                                    type="submit"
                                    className="w-full justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Submit review
                                </button>
                                <button
                                    type="button"
                                    data-drawer-dismiss="add-review-drawer"
                                    aria-controls="add-review-drawer"
                                    className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 w-full"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
    
                <div
                    id="report-modal"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased antialiased md:inset-0"
                >
                    <div className="relative max-h-full w-full max-w-lg p-4">
                       
                        <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
                           
                            <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    File a report
                                </h3>
                                <button
                                    type="button"
                                    className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-toggle="report-modal"
                                >
                                    <svg
                                        className="h-3 w-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                           
                            <form className="p-4 md:p-5">
                                <div className="mb-4 grid grid-cols-2 gap-4">
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="issue-radio"
                                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            What kind of issue you're having?
                                        </label>
                                        <div className="mb-2 flex items-center">
                                            <input
                                                id="issue-radio"
                                                type="radio"
                                                defaultValue=""
                                                name="issue-radio"
                                                className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                htmlFor="issue-radio"
                                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                Report listing abuse
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                defaultChecked=""
                                                id="issue-radio-2"
                                                type="radio"
                                                defaultValue=""
                                                name="issue-radio"
                                                className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                htmlFor="issue-radio-2"
                                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                Report a violation
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="reason"
                                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Report reason
                                        </label>
                                        <input
                                            type="text"
                                            name="reason"
                                            id="reason"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="description"
                                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Describe your issue
                                        </label>
                                        <textarea
                                            id="description"
                                            rows={6}
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                            required=""
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                            htmlFor="file_input"
                                        >
                                            Add an attachment
                                        </label>
                                        <input
                                            className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400"
                                            id="file_input"
                                            type="file"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <div className="flex items-center">
                                            <input
                                                id="link-checkbox"
                                                type="checkbox"
                                                defaultValue=""
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                htmlFor="link-checkbox"
                                                className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                            >
                                                I have read and agree with the{" "}
                                                <a
                                                    href="#"
                                                    className="text-primary-600 hover:underline dark:text-primary-500"
                                                >
                                                    terms and conditions
                                                </a>
                                                .
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
                                    <button
                                        type="submit"
                                        className="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Send report
                                    </button>
                                    <button
                                        type="button"
                                        data-modal-toggle="report-modal"
                                        className="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> */}
            </>




        </div>

    )
}


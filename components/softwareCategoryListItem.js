import Link from 'next/link';
import { mapTypeToRevenue } from '../utils/textUtils';
export default function SoftwareCategoryListItem({ software }) {

    let expertRating = null;
    let scoreSnippet = null;

    if (software.expert_software_rating.length > 0) {
        expertRating = software.expert_software_rating[0];
    }

    if (expertRating !== null) {

    
        scoreSnippet = (
            <div className="text-sm flex items-center">

                <p className="bg-blue-100 text-blue-800 text-m font-semibold inline-flex items-center p-1.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                    {expertRating.overall_score}/10
                </p>
                <p className="ms-2 font-medium text-gray-900 dark:text-white">Ecomthek Score</p>

            </div>
        );
    }

    return (
        <div className="relative rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">

            <div className="space-y-6 p-6">
                <div className="flex items-center">

                    <div className="w-18 h-18 mr-5 shadow-lg bg-white flex items-center justify-center">
                        <img
                            className="w-16 h-16 object-contain scale-90"
                            src={software.logo_url}
                            alt={`${software.name} Logo`}
                        />
                    </div>

                    <h2 className="text-3xl font-semibold text-gray-900">
                        <Link
                            href={`/software/tool/${software.slug}`}
                            className="hover:text-gray-600 leading-tight text-gray-900"
                        >
                            {software.name}
                        </Link>

                        {scoreSnippet}
                    </h2>


                </div>
                <div>
                    {software.software_suitability.map(suitability => {
                        return <span key={suitability.id} className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                            {mapTypeToRevenue(suitability.type)}
                        </span>

                    })}
                </div>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{software.description}
                {" "}
                <Link href={`/software/tool/${software.slug}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Mehr erfahren</Link>

                </p>
                <button
                    type="button"
                    className="absolute top-0 right-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >

                    <svg className="rtl:rotate-180 w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                    </svg>

                    {software.name} {software.cta_text}

                </button>

            </div>
        </div>

    )
}
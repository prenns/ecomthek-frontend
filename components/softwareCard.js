import Link from 'next/link';
import { mapTypeToRevenue } from '../utils/textUtils';
import { Button } from "flowbite-react";
import { CiShare1 } from "react-icons/ci";

export default function SoftwareCategoryListItem({ software }) {

    let expertRating = null;
    let scoreSnippet = null;

    if (software.expert_software_rating && software.expert_software_rating.length > 0) {
        expertRating = software.expert_software_rating[0];
    }

    if (expertRating !== null) {

    
        scoreSnippet = (
            <div className="text-xs flex items-center">

                <p className="bg-blue-100 text-blue-800 text-m font-semibold inline-flex items-center p-1.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                    {expertRating.overall_score}/10
                </p>
    
            </div>
        );
    }

    return (
        <div className="relative rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">

            <div className="space-y-6 p-6">
                <div className="flex items-center">

                    <div className="w-18 h-18 mr-5 shadow-lg bg-white flex items-center justify-center">
                        <img
                            className="w-14 h-14 object-contain scale-90"
                            src={software.logo_url}
                            alt={`${software.name} Logo`}
                        />
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-900">
                        <Link
                            href={`/software/tool/${software.slug}`}
                            className="hover:text-gray-600 leading-tight text-gray-900"
                        >
                            {software.name}
                        </Link>

                        {scoreSnippet}
                    </h2>


                </div>
{/*                 <div>
                    {software.software_suitability.map(suitability => {
                        return <span key={suitability.id} className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                            {mapTypeToRevenue(suitability.type)}
                        </span>

                    })}
                </div> */}
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                {" "}
                <Link href={`/software/tool/${software.slug}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Mehr erfahren</Link>

                </p>
                <Button
                    as={Link}
                    size="sm"
                    target="_blank"
                    color="blue"
                    href={software.website_url}
                    className="hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium"
                >
                    <CiShare1 className="mr-2 h-5 w-5" />
                    {software.name} {software.cta_text}

                </Button>

            </div>
        </div>

    )
}
import Link from 'next/link';
import { mapTypeToRevenue } from '../lib/utils/textUtils';
import { Button } from "flowbite-react";
import { CiShare1 } from "react-icons/ci";


export default function SoftwareCategoryListItem({ software }) {

    let expertRating = null;
    let scoreSnippet = null;

    let problemList = null;
    let featureList = null;

    if (software.expert_software_rating.length > 0) {
        expertRating = software.expert_software_rating[0];
    }

    if (software.software_feature.length > 0) {
        featureList = (
            <div>
                <h2 className="mb-2 text-xl font-semibold text-gray-900">Funktionen</h2>
                <ul className="mb-2 max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
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
            </div>
        );
    }

    if (software.problems.length > 0) {
        problemList = (
            <div>
                <h2 className="mb-2 text-xl font-semibold text-gray-900">Hilft bei</h2>
                <ul className="mb-2 max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
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
                                {problem.solution}
                            </li>
                        );
                    })}

                </ul>
            </div>

        );
    }

    if (expertRating !== null) {


        scoreSnippet = (
            <div className="text-sm flex items-center">

                <p className="bg-primary-100 text-primary-800 text-m font-semibold inline-flex items-center p-1.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
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

                    <h2 className="text-lg lg:text-3xl font-semibold text-gray-900">
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
                        return <span key={suitability.id} className="bg-primary-100 text-primary-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                            {mapTypeToRevenue(suitability.type)}
                        </span>
                    })}
                </div>
                <p className="font-normal text-gray-500 dark:text-gray-400">{software.description}
                </p>
                <Link href={`/software/tool/${software.slug}`} className="block font-medium text-primary-600 dark:text-blue-500 hover:underline">Mehr erfahren</Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {featureList}
                    {problemList}
                </div>


                <Button
                    as={Link}
                    href={software.website_url}
                    target="_blank"
                    className="absolute font-bold font-sm lg:text-base top-0 right-5 bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 inline-flex items-center"
                >

                    <CiShare1 className="mr-2 h-5 w-5" />

                    {software.name} {software.cta_text}

                </Button>

            </div>
        </div>

    )
}
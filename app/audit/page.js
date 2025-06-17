import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';

export const metadata = {
    title: 'E-Commerce Audit | Ecomthek',
    description: '',
}

export default function LandingAuditPage() {

    return (<>
        <section className="relative bg-white overflow-hidden">


            <div className="container mx-auto px-4 py-24 md:py-30 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left Side: Company Info */}

                    <div className="w-full md:w-3/4 mb-12 md:mb-0">
                        <a
                            href="#"
                            className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-primary-800 bg-primary-100 rounded-full dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
                        >
                            {" "}
                            <span className="ml-5 text-sm font-medium">
                                Für Onlineshops & Brands mit &gt; 10k € Monatsumsatz
                            </span>
                            <svg
                                className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
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
                        </a>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Wir helfen dir, dein E-Commerce Business zu
                            <span className="ml-3 tmx-1 relative inline-block stroke-current">
                                {" "} skalieren
                                <svg className="text-primary-600  absolute -bottom-0.1 w-full max-h-1.8" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none">
                                    <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
                                </svg>
                            </span>
                        </h1>
                        <p className="text-xl mb-8 mt-12">
                            Wir nehmen dein Business unter die Lupe und erstellen einen individuellen Handlungsplan, damit du:

                        </p>

                        <ul role="list" className=" text-xl mb-8 space-y-4">
                            <li className="flex space-x-2.5">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-7 h-7 text-green-500 dark:text-green-400"
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
                                <span className="font-light leading-tight">
                                    deine Umsätze planbar und profitabel steigern kannst
                                </span>
                            </li>
                            <li className="flex space-x-2.5">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-7 h-7 text-green-500 dark:text-green-400"
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
                                <span className="font-light leading-tight">
                                    deine Fixkosten auf ein Minimum reduzierst
                                </span>
                            </li>
                            <li className="flex space-x-2.5">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-7 h-7 text-green-500 dark:text-green-400"
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
                                <span className="font-light leading-tight">
                                    dein Leben unabhängig und finanziell frei leben kannst
                                </span>
                            </li>
                        </ul>

                        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <a
                                href="https://calendly.com/a-prennsberger/30min"
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                            >
                               Jetzt kostenloses Erstgespräch buchen
                                <svg
                                    className="ml-2 -mr-1 w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>

                        </div>
                    </div>
                    <div className="h-auto max-w-xl md:w-2/4 md:pl-12">

                        <svg
                            className="animated"
                            id="freepik_stories-investment-data"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 500 500"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlnsSvgjs="http://svgjs.com/svgjs"
                        >
                            <style
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "svg#freepik_stories-investment-data:not(.animated) .animable {opacity:\n        0;}svg#freepik_stories-investment-data.animated #freepik--Arrow--inject-699 {animation: 1s 1\n        forwards ease-in slideUp,1.5s Infinite linear floating;animation-delay: 0s,1s;} @keyframes\n        slideUp { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform:\n        inherit; } } @keyframes floating { 0% { opacity: 1; transform: translateY(0px); } 50% {\n        transform: translateY(-10px); } 100% { opacity: 1; transform: translateY(0px); } } "
                                }}
                            />
                            <g
                                id="freepik--Floor--inject-699"
                                className="animable"
                                style={{ transformOrigin: "249.996px 321.54px" }}
                            >
                                <path
                                    id="freepik--floor--inject-699"
                                    d="M76,437.23c-96.1-63.89-96.1-167.49,0-231.38s251.92-63.9,348,0,96.1,167.49,0,231.38S172.09,501.13,76,437.23Z"
                                    style={{
                                        fill: "rgb(245, 245, 245)",
                                        transformOrigin: "249.996px 321.54px"
                                    }}
                                    className="animable"
                                />
                            </g>
                            <g
                                id="freepik--Plant--inject-699"
                                className="animable"
                                style={{ transformOrigin: "448.989px 203.105px" }}
                            >
                                <g
                                    id="freepik--Plants--inject-699"
                                    className="animable"
                                    style={{ transformOrigin: "448.989px 203.105px" }}
                                >
                                    <path
                                        d="M436.39,237.69l-8.78-5.07s-5.22-21.69-3.14-41.21c2.93-27.45,21-37.78,27.86-35.41s8.86,10.35-2.5,26.7C443.12,192.35,434.88,212.44,436.39,237.69Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "440.947px 196.681px" }}
                                        id="ela4e5xjvz5lw"
                                        className="animable"
                                    />
                                    <g id="el50wyf5v9ili">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "440.947px 196.681px" }}
                                            className="animable"
                                            id="elttd2e27r1o"
                                        >
                                            <path
                                                d="M436.39,237.69l-8.78-5.07s-5.22-21.69-3.14-41.21c2.93-27.45,21-37.78,27.86-35.41s8.86,10.35-2.5,26.7C443.12,192.35,434.88,212.44,436.39,237.69Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    transformOrigin: "440.947px 196.681px"
                                                }}
                                                id="elo5ibcipj1x7"
                                                className="animable"
                                            />
                                        </g>
                                    </g>
                                    <path
                                        d="M432.75,227h.08a.63.63,0,0,0,.49-.72c-4.81-25.31,4-53.76,15-65.6a.6.6,0,0,0,0-.86.61.61,0,0,0-.86,0c-11.15,12.05-20.17,41-15.29,66.65A.62.62,0,0,0,432.75,227Z"
                                        style={{
                                            fill: "rgb(255, 255, 255)",
                                            transformOrigin: "439.657px 193.321px"
                                        }}
                                        id="elisllez7arf"
                                        className="animable"
                                    />
                                    <path
                                        d="M458.46,250.44c1.31.67,4.8-2.31,5.77-3a12.19,12.19,0,0,0,3.81-4.84,11.4,11.4,0,0,0,.67-6.9,28.33,28.33,0,0,0-1-3.59c-.4-1.16-.8-2.32-1.19-3.48a8.91,8.91,0,0,1-.7-3.54c.19-2.43,2.24-4.23,4.12-5.78,2.07-1.73,4.21-4,4.05-6.88a10.21,10.21,0,0,0-2.87-5.95c-1.48-1.7-3.21-3.17-4.56-5a7.19,7.19,0,0,1-1.69-4.45,7.38,7.38,0,0,1,.85-2.87c.93-1.94,2.19-3.75,2.8-5.81s.38-4.6-1.28-6c-1.37-1.13-3.31-1.2-5.07-1a11.44,11.44,0,0,0-4.57,1.88c-4.49,2.8-6.85,8.4-11.64,10.62a50.7,50.7,0,0,1-5.86,1.75c-1.94.61-3.9,1.72-4.72,3.59-1.62,3.68,1.94,7.94.87,11.81-.95,3.43-4.16,4.89-5.85,8a7.26,7.26,0,0,0-.63,4.46,21.25,21.25,0,0,0,2.23,7.37,67.24,67.24,0,0,0,4.44,6.81S458.26,250.34,458.46,250.44Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "451.829px 215.9px" }}
                                        id="el1wnv70bojzo"
                                        className="animable"
                                    />
                                    <g id="el1rpoh2yb1cv">
                                        <g
                                            style={{ opacity: "0.65", transformOrigin: "451.829px 215.9px" }}
                                            className="animable"
                                            id="elv71ttdkpgu"
                                        >
                                            <path
                                                d="M458.46,250.44c1.31.67,4.8-2.31,5.77-3a12.19,12.19,0,0,0,3.81-4.84,11.4,11.4,0,0,0,.67-6.9,28.33,28.33,0,0,0-1-3.59c-.4-1.16-.8-2.32-1.19-3.48a8.91,8.91,0,0,1-.7-3.54c.19-2.43,2.24-4.23,4.12-5.78,2.07-1.73,4.21-4,4.05-6.88a10.21,10.21,0,0,0-2.87-5.95c-1.48-1.7-3.21-3.17-4.56-5a7.19,7.19,0,0,1-1.69-4.45,7.38,7.38,0,0,1,.85-2.87c.93-1.94,2.19-3.75,2.8-5.81s.38-4.6-1.28-6c-1.37-1.13-3.31-1.2-5.07-1a11.44,11.44,0,0,0-4.57,1.88c-4.49,2.8-6.85,8.4-11.64,10.62a50.7,50.7,0,0,1-5.86,1.75c-1.94.61-3.9,1.72-4.72,3.59-1.62,3.68,1.94,7.94.87,11.81-.95,3.43-4.16,4.89-5.85,8a7.26,7.26,0,0,0-.63,4.46,21.25,21.25,0,0,0,2.23,7.37,67.24,67.24,0,0,0,4.44,6.81S458.26,250.34,458.46,250.44Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    transformOrigin: "451.829px 215.9px"
                                                }}
                                                id="elm86m0hk76xs"
                                                className="animable"
                                            />
                                        </g>
                                    </g>
                                    <path
                                        d="M445.77,243.82h0a.57.57,0,0,0,.53-.62c-2.1-22.77,7.38-48.51,14.83-56.22a.58.58,0,0,0-.83-.8c-7.6,7.87-17.28,34-15.15,57.12A.58.58,0,0,0,445.77,243.82Z"
                                        style={{
                                            fill: "rgb(255, 255, 255)",
                                            transformOrigin: "453.05px 214.934px"
                                        }}
                                        id="elkk3ftho07k"
                                        className="animable"
                                    />
                                    <path
                                        d="M448,215.75l.17,0a77.59,77.59,0,0,1,16.42-3.5.57.57,0,0,0,.52-.63.56.56,0,0,0-.63-.52,78.57,78.57,0,0,0-16.71,3.57.57.57,0,0,0-.34.74A.58.58,0,0,0,448,215.75Z"
                                        style={{
                                            fill: "rgb(255, 255, 255)",
                                            transformOrigin: "456.253px 213.423px"
                                        }}
                                        id="ele4fd2a1p3sm"
                                        className="animable"
                                    />
                                </g>
                            </g>
                            <g
                                id="freepik--Shadows--inject-699"
                                className="animable"
                                style={{ transformOrigin: "245.013px 345.829px" }}
                            >
                                <ellipse
                                    id="freepik--Shadow--inject-699"
                                    cx="417.68"
                                    cy="258.71"
                                    rx="48.01"
                                    ry="27.72"
                                    style={{
                                        fill: "rgb(224, 224, 224)",
                                        transformOrigin: "417.68px 258.71px"
                                    }}
                                    className="animable"
                                />
                                <path
                                    id="freepik--shadow--inject-699"
                                    d="M108.09,358.28c-19.16-11.06-50.22-11.06-69.38,0s-19.17,29,0,40.06,50.22,11.06,69.38,0S127.25,369.34,108.09,358.28Z"
                                    style={{
                                        fill: "rgb(224, 224, 224)",
                                        transformOrigin: "73.3981px 378.31px"
                                    }}
                                    className="animable"
                                />
                                <path
                                    id="freepik--shadow--inject-699"
                                    d="M177.44,410.44c-19.9-11.49-52.16-11.49-72.07,0s-19.9,30.12,0,41.61,52.17,11.49,72.07,0S197.34,421.93,177.44,410.44Z"
                                    style={{
                                        fill: "rgb(224, 224, 224)",
                                        transformOrigin: "141.403px 431.245px"
                                    }}
                                    className="animable"
                                />
                            </g>
                            <g
                                id="freepik--Gears--inject-699"
                                className="animable"
                                style={{ transformOrigin: "418.642px 85.9632px" }}
                            >
                                <g
                                    id="freepik--Gear--inject-699"
                                    className="animable"
                                    style={{ transformOrigin: "418.642px 85.9632px" }}
                                >
                                    <path
                                        id="freepik--gear--inject-699"
                                        d="M432.32,60.65V52.87a.5.5,0,0,0-.76-.5l-6,2.71a.71.71,0,0,1-1-.47,13,13,0,0,0-1.33-3,1.61,1.61,0,0,1-.09-1.45l4-8.06a.9.9,0,0,0-.35-1.17l-4.34-2.5a.89.89,0,0,0-1.19.28l-5,7.48a1.66,1.66,0,0,1-1.3.65,13.29,13.29,0,0,0-3.25.33.71.71,0,0,1-.9-.63L410.17,40a.5.5,0,0,0-.81-.41l-6.74,3.89a1.8,1.8,0,0,0-.8,1.25l-.68,7.5a2.53,2.53,0,0,1-.7,1.4,39.22,39.22,0,0,0-3.74,4,1.28,1.28,0,0,1-1.32.37l-4.33-1.51a1.06,1.06,0,0,0-1.21.45l-4.95,8.58a1.05,1.05,0,0,0,.22,1.28l3.47,3a1.3,1.3,0,0,1,.33,1.34,40.86,40.86,0,0,0-1.56,5.22,2.46,2.46,0,0,1-.86,1.3L380.34,82a1.82,1.82,0,0,0-.69,1.33v7.78a.5.5,0,0,0,.77.49l6-2.7a.71.71,0,0,1,1,.46,13.46,13.46,0,0,0,1.34,3,1.7,1.7,0,0,1,.09,1.46l-4,8.05a.91.91,0,0,0,.36,1.17l4.33,2.51a.92.92,0,0,0,1.2-.28l5-7.49a1.64,1.64,0,0,1,1.3-.65,13.21,13.21,0,0,0,3.24-.33.72.72,0,0,1,.9.64l.66,6.54a.5.5,0,0,0,.81.42l6.74-3.89a1.84,1.84,0,0,0,.8-1.26l.67-7.49a2.47,2.47,0,0,1,.7-1.4,41.47,41.47,0,0,0,3.74-4,1.31,1.31,0,0,1,1.33-.38l4.32,1.51a1.05,1.05,0,0,0,1.21-.45l5-8.57a1.06,1.06,0,0,0-.22-1.28l-3.47-3a1.29,1.29,0,0,1-.34-1.33,40.22,40.22,0,0,0,1.56-5.22,2.48,2.48,0,0,1,.86-1.31L431.64,62A1.81,1.81,0,0,0,432.32,60.65ZM406,85.1c-6.29,3.63-11.38.69-11.38-6.57S399.7,62.45,406,58.82s11.38-.68,11.38,6.57S412.27,81.47,406,85.1Z"
                                        style={{
                                            fill: "rgb(235, 235, 235)",
                                            transformOrigin: "405.985px 71.9872px"
                                        }}
                                        className="animable"
                                    />
                                    <path
                                        id="freepik--gear--inject-699"
                                        d="M457.62,94.47l-.72-4.16a.69.69,0,0,0-1.14-.5L452,92.32a1.11,1.11,0,0,1-1.54-.34,8.37,8.37,0,0,0-.74-.91,1.89,1.89,0,0,1-.45-1.82L451.17,84a1,1,0,0,0-.71-1.31L447.58,82a1.55,1.55,0,0,0-1.63.76l-2.71,5.15a2.8,2.8,0,0,1-1.63,1.23,13.72,13.72,0,0,0-1.78.59,1,1,0,0,1-1.36-.63l-1-3.22a.72.72,0,0,0-1.22-.39L432,88.91a2.43,2.43,0,0,0-.82,1.83l.26,4.1a3.25,3.25,0,0,1-.67,2,30.63,30.63,0,0,0-2,2.65,2.23,2.23,0,0,1-1.76.89l-2.77-.14a1.77,1.77,0,0,0-1.59,1L420,107.05a1.12,1.12,0,0,0,.58,1.48l2.24,1a1.37,1.37,0,0,1,.77,1.54,25.46,25.46,0,0,0-.48,2.79,3.46,3.46,0,0,1-.93,1.89l-3.83,3.52a2.32,2.32,0,0,0-.64,1.88l.72,4.17a.69.69,0,0,0,1.14.49l3.82-2.51a1.1,1.1,0,0,1,1.53.34,8.37,8.37,0,0,0,.74.91,1.9,1.9,0,0,1,.45,1.82l-1.95,5.27a1,1,0,0,0,.72,1.31l2.87.64a1.55,1.55,0,0,0,1.63-.75l2.71-5.16a2.83,2.83,0,0,1,1.64-1.23,13.6,13.6,0,0,0,1.77-.59,1,1,0,0,1,1.36.63l1,3.23a.72.72,0,0,0,1.22.38l4.31-3.39a2.43,2.43,0,0,0,.82-1.83l-.26-4.1a3.25,3.25,0,0,1,.67-2,32.92,32.92,0,0,0,2-2.65,2.21,2.21,0,0,1,1.75-.89l2.77.14a1.8,1.8,0,0,0,1.6-1l2.6-5.84a1.1,1.1,0,0,0-.58-1.48l-2.24-1a1.38,1.38,0,0,1-.77-1.54,23.28,23.28,0,0,0,.48-2.79,3.47,3.47,0,0,1,.94-1.89L457,96.35A2.29,2.29,0,0,0,457.62,94.47ZM439.2,116.68c-4.67,3.67-9.15,2.67-10-2.24s2.26-11.86,6.93-15.54,9.15-2.67,10,2.24S443.88,113,439.2,116.68Z"
                                        style={{
                                            fill: "rgb(235, 235, 235)",
                                            transformOrigin: "437.667px 107.795px"
                                        }}
                                        className="animable"
                                    />
                                </g>
                            </g>
                            <g
                                id="freepik--coins-2--inject-699"
                                className="animable"
                                style={{ transformOrigin: "418.43px 246.331px" }}
                            >
                                <g
                                    id="freepik--Coins--inject-699"
                                    className="animable"
                                    style={{ transformOrigin: "418.43px 246.331px" }}
                                >
                                    <path
                                        d="M460,248.38A27.42,27.42,0,0,0,449.83,239c-16.58-9.57-43.46-9.57-60,0a27.34,27.34,0,0,0-10.14,9.37h-2.3v8.68h0c.31,6,4.44,12,12.41,16.61,16.57,9.57,43.45,9.57,60,0,8-4.61,12.13-10.58,12.43-16.61h0v-8.68Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "419.81px 256.33px" }}
                                        id="elpena0mch6qh"
                                        className="animable"
                                    />
                                    <g id="elnuay3ohujqj">
                                        <g
                                            style={{ opacity: "0.25", transformOrigin: "419.81px 256.33px" }}
                                            className="animable"
                                            id="ellxi6ct8sb88"
                                        >
                                            <path
                                                d="M460,248.38A27.42,27.42,0,0,0,449.83,239c-16.58-9.57-43.46-9.57-60,0a27.34,27.34,0,0,0-10.14,9.37h-2.3v8.68h0c.31,6,4.44,12,12.41,16.61,16.57,9.57,43.45,9.57,60,0,8-4.61,12.13-10.58,12.43-16.61h0v-8.68Z"
                                                id="el5b79j2akvlt"
                                                className="animable"
                                                style={{ transformOrigin: "419.81px 256.33px" }}
                                            />
                                        </g>
                                    </g>
                                    <g id="elld6k5nkocuj">
                                        <path
                                            d="M419.82,231.83c-10.87,0-21.73,2.39-30,7.18a27.34,27.34,0,0,0-10.14,9.37h-2.3v8.68h0c.31,6,4.44,12,12.41,16.61,8.29,4.78,19.15,7.17,30,7.17Z"
                                            style={{ opacity: "0.1", transformOrigin: "398.6px 256.335px" }}
                                            className="animable"
                                            id="elfip5wbk3pwi"
                                        />
                                    </g>
                                    <g id="el5gvwidh8tr">
                                        <path
                                            d="M396.63,235.81a45.54,45.54,0,0,0-6.83,3.2,27.34,27.34,0,0,0-10.14,9.37h-2.3v8.68h0c.31,6,4.44,12,12.41,16.61a47.6,47.6,0,0,0,6.83,3.2Z"
                                            style={{ opacity: "0.1", transformOrigin: "386.995px 256.34px" }}
                                            className="animable"
                                            id="el15jg49rctfx"
                                        />
                                    </g>
                                    <g id="elqrcu6e823c">
                                        <path
                                            d="M443,235.81a46,46,0,0,1,6.83,3.2A27.42,27.42,0,0,1,460,248.38h2.29v8.68h0c-.3,6-4.46,12-12.43,16.61a48.11,48.11,0,0,1-6.83,3.2Z"
                                            style={{
                                                fill: "#1A56DB",
                                                opacity: "0.5",
                                                transformOrigin: "452.645px 256.34px"
                                            }}
                                            className="animable"
                                            id="el401d1fbc69"
                                        />
                                    </g>
                                    <path
                                        d="M449.83,231.06c-16.58-9.57-43.46-9.57-60,0s-16.58,25.09,0,34.66,43.45,9.57,60,0S466.41,240.63,449.83,231.06Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "419.832px 248.39px" }}
                                        id="elxcuxtlktjtf"
                                        className="animable"
                                    />
                                    <g id="elsvsm0raeiwl">
                                        <path
                                            d="M449.83,231.06c-16.58-9.57-43.46-9.57-60,0s-16.58,25.09,0,34.66,43.45,9.57,60,0S466.41,240.63,449.83,231.06Z"
                                            style={{ opacity: "0.2", transformOrigin: "419.832px 248.39px" }}
                                            className="animable"
                                            id="elwy8oylxfyg"
                                        />
                                    </g>
                                    <path
                                        d="M439.36,237.4c-5.25-2.69-12.19-4.17-19.55-4.17s-14.3,1.48-19.54,4.17c-5.56,2.85-8.62,6.75-8.62,11s3.06,8.14,8.62,11c5.24,2.7,12.19,4.18,19.54,4.18s14.3-1.48,19.55-4.18c5.55-2.84,8.61-6.74,8.61-11S444.91,240.25,439.36,237.4Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "419.81px 248.405px" }}
                                        id="elemfmyk9iinv"
                                        className="animable"
                                    />
                                    <g id="eleocsgph7fzw">
                                        <path
                                            d="M439.36,237.4c-5.25-2.69-12.19-4.17-19.55-4.17s-14.3,1.48-19.54,4.17c-5.56,2.85-8.62,6.75-8.62,11s3.06,8.14,8.62,11c5.24,2.7,12.19,4.18,19.54,4.18s14.3-1.48,19.55-4.18c5.55-2.84,8.61-6.74,8.61-11S444.91,240.25,439.36,237.4Z"
                                            style={{ opacity: "0.4", transformOrigin: "419.81px 248.405px" }}
                                            className="animable"
                                            id="el2hkr485ki1r"
                                        />
                                    </g>
                                    <path
                                        d="M448.91,232.66c-7.74-4.47-18.08-6.94-29.1-6.94s-21.35,2.47-29.09,6.94c-7.42,4.29-11.5,9.86-11.5,15.73s4.08,11.44,11.5,15.73c7.74,4.46,18.07,6.93,29.09,6.93s21.36-2.47,29.1-6.93c7.41-4.29,11.51-9.87,11.51-15.73S456.32,237,448.91,232.66Zm-9.55,26.71c-5.25,2.7-12.19,4.18-19.55,4.18s-14.3-1.48-19.54-4.18c-5.56-2.84-8.62-6.74-8.62-11s3.06-8.14,8.62-11c5.24-2.69,12.19-4.17,19.54-4.17s14.3,1.48,19.55,4.17c5.55,2.85,8.61,6.75,8.61,11S444.91,256.53,439.36,259.37Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "419.82px 248.385px" }}
                                        id="elerbrqiev6qb"
                                        className="animable"
                                    />
                                    <g id="elwkq3l3dbp8a">
                                        <path
                                            d="M448.91,232.66c-7.74-4.47-18.08-6.94-29.1-6.94s-21.35,2.47-29.09,6.94c-7.42,4.29-11.5,9.86-11.5,15.73s4.08,11.44,11.5,15.73c7.74,4.46,18.07,6.93,29.09,6.93s21.36-2.47,29.1-6.93c7.41-4.29,11.51-9.87,11.51-15.73S456.32,237,448.91,232.66Zm-9.55,26.71c-5.25,2.7-12.19,4.18-19.55,4.18s-14.3-1.48-19.54-4.18c-5.56-2.84-8.62-6.74-8.62-11s3.06-8.14,8.62-11c5.24-2.69,12.19-4.17,19.54-4.17s14.3,1.48,19.55,4.17c5.55,2.85,8.61,6.75,8.61,11S444.91,256.53,439.36,259.37Z"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.3",
                                                transformOrigin: "419.82px 248.385px"
                                            }}
                                            className="animable"
                                            id="elg5m8h2egd3e"
                                        />
                                    </g>
                                    <g id="elgck8pps85zb">
                                        <path
                                            d="M438.69,258.07c10.43-5.35,10.43-14,0-19.37s-27.33-5.35-37.76,0-10.42,14,0,19.37S428.27,263.42,438.69,258.07Z"
                                            style={{ opacity: "0.2", transformOrigin: "419.812px 248.385px" }}
                                            className="animable"
                                            id="elmybw0qvhswb"
                                        />
                                    </g>
                                    <path
                                        d="M438.69,258.07c10.43-5.35,10.43-14,0-19.37s-27.33-5.35-37.76,0-10.42,14,0,19.37S428.27,263.42,438.69,258.07Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "419.812px 248.385px" }}
                                        id="elypjskxoj7v"
                                        className="animable"
                                    />
                                    <g id="elgwm6tsnwyhm">
                                        <path
                                            d="M438.69,258.07c10.43-5.35,10.43-14,0-19.37s-27.33-5.35-37.76,0-10.42,14,0,19.37S428.27,263.42,438.69,258.07Z"
                                            style={{ opacity: "0.45", transformOrigin: "419.812px 248.385px" }}
                                            className="animable"
                                            id="elldgtt259kks"
                                        />
                                    </g>
                                    <path
                                        d="M438.69,242.33c-10.43-5.35-27.33-5.35-37.76,0-4.31,2.21-6.83,5-7.58,7.87.75,2.88,3.27,5.66,7.58,7.87,10.43,5.35,27.34,5.35,37.76,0,4.31-2.21,6.84-5,7.58-7.87C445.53,247.32,443,244.54,438.69,242.33Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "419.81px 250.2px" }}
                                        id="eldfkelunfh4"
                                        className="animable"
                                    />
                                    <g id="elbqpcrq1o6z">
                                        <path
                                            d="M438.69,242.33c-10.43-5.35-27.33-5.35-37.76,0-4.31,2.21-6.83,5-7.58,7.87.75,2.88,3.27,5.66,7.58,7.87,10.43,5.35,27.34,5.35,37.76,0,4.31-2.21,6.84-5,7.58-7.87C445.53,247.32,443,244.54,438.69,242.33Z"
                                            style={{ opacity: "0.3", transformOrigin: "419.81px 250.2px" }}
                                            className="animable"
                                            id="elgd59f73462m"
                                        />
                                    </g>
                                    <polygon
                                        points="422.34 238.91 422.34 242.82 421 244.23 418.53 246.82 418.53 242.75 422.34 238.91"
                                        style={{ fill: "#1A56DB", transformOrigin: "420.435px 242.865px" }}
                                        id="elueciel1qjf"
                                        className="animable"
                                    />
                                    <g id="el84rx3ippx6">
                                        <polygon
                                            points="422.34 238.91 422.34 242.82 421 244.23 418.53 246.82 418.53 242.75 422.34 238.91"
                                            style={{ opacity: "0.3", transformOrigin: "420.435px 242.865px" }}
                                            className="animable"
                                            id="elp61xgub2ecg"
                                        />
                                    </g>
                                    <path
                                        d="M418.53,242.74v2.31a20.38,20.38,0,0,1-3.8,1.08,3.93,3.93,0,0,1-1.62-.06,3.29,3.29,0,0,1-.78-.32c-.94-.56-1.09-1.4.7-2.43A6.25,6.25,0,0,1,418.53,242.74Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "415.088px 244.271px" }}
                                        id="elfvvmn78jlri"
                                        className="animable"
                                    />
                                    <g id="el2ee5r37zp0f">
                                        <path
                                            d="M418.53,242.74v2.31a20.38,20.38,0,0,1-3.8,1.08,3.93,3.93,0,0,1-1.62-.06,3.29,3.29,0,0,1-.78-.32c-.94-.56-1.09-1.4.7-2.43A6.25,6.25,0,0,1,418.53,242.74Z"
                                            style={{ opacity: "0.45", transformOrigin: "415.088px 244.271px" }}
                                            className="animable"
                                            id="el3olm74v5bmi"
                                        />
                                    </g>
                                    <path
                                        d="M436.25,253.86v3.38L432,259.71l-3.16-1.83a16.13,16.13,0,0,1-12.27.55v-3.38l1.95-1.93-1.95.54a12.54,12.54,0,0,1-9.55-1.1c-1.92-1.1-2.81-2.32-2.81-3.56v-3.29l.35-1.44-1.17-.68v-3.38l3.17,1.83c-1.55,1.2-2.37,2.43-2.35,3.63v0c0,1.21.94,2.39,2.81,3.48,4.17,2.4,8.29,1.61,12.07.39,3.52-1.14,6.08-2.49,8.1-1.32,1.26.73.88,1.61-.53,2.43a7,7,0,0,1-6,.35l-4,4a14.93,14.93,0,0,0,2.24.66,16.77,16.77,0,0,0,10-1.21l3.16,1.83Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "419.82px 249.96px" }}
                                        id="elfmls6qu20vg"
                                        className="animable"
                                    />
                                    <g id="elunhwce4ytx">
                                        <path
                                            d="M404.18,245.67v0c0,1.21.94,2.39,2.81,3.48,4.17,2.4,8.29,1.61,12.07.39,3.52-1.14,6.08-2.49,8.1-1.32,1.26.73.88,1.61-.53,2.43a7,7,0,0,1-6,.35l-4,4a14.93,14.93,0,0,0,2.24.66,16.77,16.77,0,0,0,10-1.21l3.16,1.83,4.28-2.47v3.38L432,259.71l-3.16-1.83a16.13,16.13,0,0,1-12.27.55v-3.38l1.95-1.93-1.95.54a12.54,12.54,0,0,1-9.55-1.1c-1.92-1.1-2.81-2.32-2.81-3.56v-3.29l.35-1.44"
                                            style={{ opacity: "0.2", transformOrigin: "420.245px 251.99px" }}
                                            className="animable"
                                            id="elsyspd5ro7t"
                                        />
                                    </g>
                                    <g id="elwlhks8nj5y">
                                        <path
                                            d="M403.36,240.21v3.38l1.17.68h0a7,7,0,0,1,2-2.24Z"
                                            style={{ opacity: "0.45", transformOrigin: "404.945px 242.24px" }}
                                            className="animable"
                                            id="elu69t8iiynx"
                                        />
                                    </g>
                                    <path
                                        d="M435.55,251.65a4.08,4.08,0,0,1-.32,1.61L433.08,252a4.2,4.2,0,0,0,2.43-3.25C435.53,249.71,435.55,251.56,435.55,251.65Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "434.315px 251.005px" }}
                                        id="elsmwvwo0atef"
                                        className="animable"
                                    />
                                    <g id="eltckn0qwtwe">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "434.315px 251.005px" }}
                                            className="animable"
                                            id="el2j5muq2gcyf"
                                        >
                                            <path
                                                d="M435.55,251.65a4.08,4.08,0,0,1-.32,1.61L433.08,252a4.2,4.2,0,0,0,2.43-3.25C435.53,249.71,435.55,251.56,435.55,251.65Z"
                                                id="elphd12iriyzk"
                                                className="animable"
                                                style={{ transformOrigin: "434.315px 251.005px" }}
                                            />
                                        </g>
                                    </g>
                                    <path
                                        d="M435.54,253.45,433.09,252a4.18,4.18,0,0,0,2.45-3.76c0-.11,0-.22,0-.33-.11-1.16-1-2.3-2.74-3.32h0a11.27,11.27,0,0,0-5.7-1.48h-.54l-.51,0-.44,0-.18,0-.34.05a21.9,21.9,0,0,0-2.77.57c-.44.12-.87.24-1.29.38-.62.19-1.23.39-1.8.59l-.68.23a21.36,21.36,0,0,1-3.79,1.08,4,4,0,0,1-1.64-.06,3.61,3.61,0,0,1-.76-.32c-1-.55-1.11-1.39.69-2.43a6.25,6.25,0,0,1,5.5-.57l3.81-3.84a16.32,16.32,0,0,0-11.49.63l-3.17-1.82-4.32,2.49,3.18,1.83c-1.55,1.19-2.38,2.44-2.36,3.63v0c0,1.22.93,2.39,2.81,3.48,4.17,2.4,8.3,1.61,12.07.39,3.52-1.15,6.07-2.49,8.1-1.33,1.26.73.88,1.61-.53,2.43a7,7,0,0,1-6,.35l-4,4a15.29,15.29,0,0,0,2.24.66,14.89,14.89,0,0,0,3.9.29,18.28,18.28,0,0,0,6.12-1.5l3.17,1.84,4.28-2.48Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "419.87px 246.88px" }}
                                        id="elgzl6lkdzan"
                                        className="animable"
                                    />
                                    <g id="el1sg7rcytw17">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "419.87px 246.88px" }}
                                            className="animable"
                                            id="el8sm906h8ga7"
                                        >
                                            <path
                                                d="M435.54,253.45,433.09,252a4.18,4.18,0,0,0,2.45-3.76c0-.11,0-.22,0-.33-.11-1.16-1-2.3-2.74-3.32h0a11.27,11.27,0,0,0-5.7-1.48h-.54l-.51,0-.44,0-.18,0-.34.05a21.9,21.9,0,0,0-2.77.57c-.44.12-.87.24-1.29.38-.62.19-1.23.39-1.8.59l-.68.23a21.36,21.36,0,0,1-3.79,1.08,4,4,0,0,1-1.64-.06,3.61,3.61,0,0,1-.76-.32c-1-.55-1.11-1.39.69-2.43a6.25,6.25,0,0,1,5.5-.57l3.81-3.84a16.32,16.32,0,0,0-11.49.63l-3.17-1.82-4.32,2.49,3.18,1.83c-1.55,1.19-2.38,2.44-2.36,3.63v0c0,1.22.93,2.39,2.81,3.48,4.17,2.4,8.3,1.61,12.07.39,3.52-1.15,6.07-2.49,8.1-1.33,1.26.73.88,1.61-.53,2.43a7,7,0,0,1-6,.35l-4,4a15.29,15.29,0,0,0,2.24.66,14.89,14.89,0,0,0,3.9.29,18.28,18.28,0,0,0,6.12-1.5l3.17,1.84,4.28-2.48Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    transformOrigin: "419.87px 246.88px"
                                                }}
                                                id="elacei77o0roq"
                                                className="animable"
                                            />
                                        </g>
                                    </g>
                                    <polygon
                                        points="428.8 254.5 428.8 257.88 431.98 259.71 431.98 256.33 428.8 254.5"
                                        style={{ fill: "#1A56DB", transformOrigin: "430.39px 257.105px" }}
                                        id="el284x72ts9jz"
                                        className="animable"
                                    />
                                    <g id="el5blmy2kaoi">
                                        <polygon
                                            points="428.8 254.5 428.8 257.88 431.98 259.71 431.98 256.33 428.8 254.5"
                                            style={{ opacity: "0.45", transformOrigin: "430.39px 257.105px" }}
                                            className="animable"
                                            id="ela0lm6mj9g9h"
                                        />
                                    </g>
                                    <g id="eliwsz344kpbh">
                                        <polygon
                                            points="403.36 240.21 407.68 237.72 410.85 239.54 407.71 238.23 403.36 240.21"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "407.105px 238.965px"
                                            }}
                                            className="animable"
                                            id="el74hdr1smyow"
                                        />
                                    </g>
                                    <g id="el1kxo5lris13">
                                        <path
                                            d="M413,243.32a6.25,6.25,0,0,1,5.5-.57l3.81-3.84-3.81,3.44A5.76,5.76,0,0,0,413,243.32Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "417.655px 241.115px"
                                            }}
                                            className="animable"
                                            id="el3a7kk312awy"
                                        />
                                    </g>
                                    <g id="elwxl8ow4exm8">
                                        <path
                                            d="M416.54,255.05a15.29,15.29,0,0,0,2.24.66,14.89,14.89,0,0,0,3.9.29,13.76,13.76,0,0,1-5.5-1.1l3.41-3.87Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "419.61px 253.527px"
                                            }}
                                            className="animable"
                                            id="el46kx5hx06kg"
                                        />
                                    </g>
                                    <g id="el99d8f2fvv7m">
                                        <polygon
                                            points="428.8 254.5 431.98 255.93 436.25 253.86 431.98 256.33 428.8 254.5"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "432.525px 255.095px"
                                            }}
                                            className="animable"
                                            id="elryskth0xoih"
                                        />
                                    </g>
                                    <g id="elv0omdr17asg">
                                        <path
                                            d="M391.05,233.23c11.24-6.83,28.76-7.51,28.76-7.51-11,0-21.35,2.47-29.09,6.94-7.42,4.29-11.5,9.86-11.5,15.73C379.22,248.39,379.62,240.17,391.05,233.23Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "399.515px 237.055px"
                                            }}
                                            className="animable"
                                            id="eluomuodgwo1o"
                                        />
                                    </g>
                                    <g id="elf4xp53a775s">
                                        <path
                                            d="M416.54,272.82c11.93.53,24.17-1.84,33.29-7.1,9.49-5.48,13.54-12.9,12.17-20.05,0,0,1.77,11.64-12.89,19.61S416.54,272.82,416.54,272.82Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "439.4px 259.281px"
                                            }}
                                            className="animable"
                                            id="el2mt6zysgfzy"
                                        />
                                    </g>
                                    <path
                                        d="M457.18,236.36A27.28,27.28,0,0,0,447,227c-16.58-9.57-43.45-9.57-60,0a27.36,27.36,0,0,0-10.14,9.38h-2.29V245h0c.3,6,4.43,12,12.4,16.61,16.58,9.57,43.45,9.57,60,0,8-4.6,12.13-10.58,12.44-16.61h0v-8.67Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "416.99px 244.305px" }}
                                        id="elqqln2gs5ia"
                                        className="animable"
                                    />
                                    <g id="elzfge7ejlnoc">
                                        <g
                                            style={{ opacity: "0.25", transformOrigin: "416.99px 244.305px" }}
                                            className="animable"
                                            id="elpi3rin37y2"
                                        >
                                            <path
                                                d="M457.18,236.36A27.28,27.28,0,0,0,447,227c-16.58-9.57-43.45-9.57-60,0a27.36,27.36,0,0,0-10.14,9.38h-2.29V245h0c.3,6,4.43,12,12.4,16.61,16.58,9.57,43.45,9.57,60,0,8-4.6,12.13-10.58,12.44-16.61h0v-8.67Z"
                                                id="el3ytemo11vgf"
                                                className="animable"
                                                style={{ transformOrigin: "416.99px 244.305px" }}
                                            />
                                        </g>
                                    </g>
                                    <g id="elpsbg7mk1nr">
                                        <path
                                            d="M417,219.8c-10.87,0-21.73,2.39-30,7.18a27.36,27.36,0,0,0-10.14,9.38h-2.29V245h0c.3,6,4.43,12,12.4,16.61,8.29,4.79,19.15,7.18,30,7.18Z"
                                            style={{ opacity: "0.1", transformOrigin: "395.785px 244.295px" }}
                                            className="animable"
                                            id="el5bowi3wvynf"
                                        />
                                    </g>
                                    <g id="elezdhyynv8ye">
                                        <path
                                            d="M393.84,223.78A47,47,0,0,0,387,227a27.36,27.36,0,0,0-10.14,9.38h-2.29V245h0c.3,6,4.43,12,12.4,16.61a46,46,0,0,0,6.83,3.2Z"
                                            style={{ opacity: "0.1", transformOrigin: "384.205px 244.295px" }}
                                            className="animable"
                                            id="ellgr2k5l0bqa"
                                        />
                                    </g>
                                    <g id="elbdfwsx1yp7q">
                                        <path
                                            d="M440.21,223.78A46.55,46.55,0,0,1,447,227a27.28,27.28,0,0,1,10.14,9.38h2.3V245h0c-.31,6-4.47,12-12.44,16.61a45.54,45.54,0,0,1-6.83,3.2Z"
                                            style={{
                                                fill: "#1A56DB",
                                                opacity: "0.5",
                                                transformOrigin: "449.805px 244.295px"
                                            }}
                                            className="animable"
                                            id="el99gnfg0he8n"
                                        />
                                    </g>
                                    <path
                                        d="M447,219c-16.58-9.57-43.45-9.57-60,0s-16.58,25.09,0,34.66,43.45,9.57,60,0S463.62,228.6,447,219Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "417.008px 236.33px" }}
                                        id="elhoc97o2zk8h"
                                        className="animable"
                                    />
                                    <g id="elbr7s4jg6akh">
                                        <path
                                            d="M447,219c-16.58-9.57-43.45-9.57-60,0s-16.58,25.09,0,34.66,43.45,9.57,60,0S463.62,228.6,447,219Z"
                                            style={{ opacity: "0.2", transformOrigin: "417.008px 236.33px" }}
                                            className="animable"
                                            id="elw4ldvgrdd7n"
                                        />
                                    </g>
                                    <path
                                        d="M436.57,225.37c-5.25-2.68-12.18-4.17-19.55-4.17s-14.3,1.49-19.54,4.17c-5.56,2.85-8.62,6.76-8.62,11s3.06,8.14,8.62,11c5.24,2.69,12.19,4.18,19.54,4.18s14.3-1.49,19.55-4.18c5.55-2.85,8.61-6.75,8.61-11S442.12,228.22,436.57,225.37Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "417.02px 236.375px" }}
                                        id="elvqef8p3j8rg"
                                        className="animable"
                                    />
                                    <g id="ellc4mtp2corj">
                                        <path
                                            d="M436.57,225.37c-5.25-2.68-12.18-4.17-19.55-4.17s-14.3,1.49-19.54,4.17c-5.56,2.85-8.62,6.76-8.62,11s3.06,8.14,8.62,11c5.24,2.69,12.19,4.18,19.54,4.18s14.3-1.49,19.55-4.18c5.55-2.85,8.61-6.75,8.61-11S442.12,228.22,436.57,225.37Z"
                                            style={{ opacity: "0.4", transformOrigin: "417.02px 236.375px" }}
                                            className="animable"
                                            id="ely50bjmzsc5"
                                        />
                                    </g>
                                    <path
                                        d="M446.12,220.63c-7.74-4.47-18.08-6.93-29.1-6.93s-21.34,2.46-29.08,6.93c-7.43,4.29-11.51,9.87-11.51,15.73s4.08,11.45,11.51,15.74C395.68,256.56,406,259,417,259s21.36-2.46,29.1-6.92c7.42-4.29,11.51-9.88,11.51-15.74S453.54,224.92,446.12,220.63Zm-9.55,26.72c-5.25,2.69-12.18,4.18-19.55,4.18s-14.3-1.49-19.54-4.18c-5.56-2.85-8.62-6.75-8.62-11s3.06-8.14,8.62-11c5.24-2.68,12.19-4.17,19.54-4.17s14.3,1.49,19.55,4.17c5.55,2.85,8.61,6.76,8.61,11S442.12,244.5,436.57,247.35Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "417.02px 236.35px" }}
                                        id="elwetxawylzxa"
                                        className="animable"
                                    />
                                    <g id="el7771xck9evi">
                                        <path
                                            d="M446.12,220.63c-7.74-4.47-18.08-6.93-29.1-6.93s-21.34,2.46-29.08,6.93c-7.43,4.29-11.51,9.87-11.51,15.73s4.08,11.45,11.51,15.74C395.68,256.56,406,259,417,259s21.36-2.46,29.1-6.92c7.42-4.29,11.51-9.88,11.51-15.74S453.54,224.92,446.12,220.63Zm-9.55,26.72c-5.25,2.69-12.18,4.18-19.55,4.18s-14.3-1.49-19.54-4.18c-5.56-2.85-8.62-6.75-8.62-11s3.06-8.14,8.62-11c5.24-2.68,12.19-4.17,19.54-4.17s14.3,1.49,19.55,4.17c5.55,2.85,8.61,6.76,8.61,11S442.12,244.5,436.57,247.35Z"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.3",
                                                transformOrigin: "417.02px 236.35px"
                                            }}
                                            className="animable"
                                            id="elzf9c2gcbh5o"
                                        />
                                    </g>
                                    <g id="el3jsykpctrpi">
                                        <path
                                            d="M435.9,246.05c10.43-5.35,10.43-14,0-19.38s-27.33-5.35-37.75,0-10.43,14,0,19.38S425.48,251.4,435.9,246.05Z"
                                            style={{ opacity: "0.2", transformOrigin: "417.027px 236.36px" }}
                                            className="animable"
                                            id="elnrtqwsd2hla"
                                        />
                                    </g>
                                    <path
                                        d="M435.9,246.05c10.43-5.35,10.43-14,0-19.38s-27.33-5.35-37.75,0-10.43,14,0,19.38S425.48,251.4,435.9,246.05Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "417.027px 236.36px" }}
                                        id="eliyu2usbvvk"
                                        className="animable"
                                    />
                                    <g id="elw2jb45foq3h">
                                        <path
                                            d="M435.9,246.05c10.43-5.35,10.43-14,0-19.38s-27.33-5.35-37.75,0-10.43,14,0,19.38S425.48,251.4,435.9,246.05Z"
                                            style={{ opacity: "0.45", transformOrigin: "417.027px 236.36px" }}
                                            className="animable"
                                            id="el281q2x21esa"
                                        />
                                    </g>
                                    <path
                                        d="M435.9,230.3c-10.42-5.35-27.33-5.35-37.75,0-4.31,2.21-6.84,5-7.58,7.87.74,2.88,3.27,5.67,7.58,7.88,10.42,5.35,27.33,5.35,37.75,0,4.32-2.21,6.84-5,7.59-7.87C442.74,235.3,440.22,232.51,435.9,230.3Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "417.03px 238.175px" }}
                                        id="elxuy5hhyjktm"
                                        className="animable"
                                    />
                                    <g id="elgyc7u25avlq">
                                        <path
                                            d="M435.9,230.3c-10.42-5.35-27.33-5.35-37.75,0-4.31,2.21-6.84,5-7.58,7.87.74,2.88,3.27,5.67,7.58,7.88,10.42,5.35,27.33,5.35,37.75,0,4.32-2.21,6.84-5,7.59-7.87C442.74,235.3,440.22,232.51,435.9,230.3Z"
                                            style={{ opacity: "0.3", transformOrigin: "417.03px 238.175px" }}
                                            className="animable"
                                            id="elms71i8z0q3"
                                        />
                                    </g>
                                    <polygon
                                        points="419.55 226.88 419.55 230.79 418.22 232.21 415.75 234.79 415.75 230.72 419.55 226.88"
                                        style={{ fill: "#1A56DB", transformOrigin: "417.65px 230.835px" }}
                                        id="elphi86y74fdn"
                                        className="animable"
                                    />
                                    <g id="elns36nb3p1t9">
                                        <polygon
                                            points="419.55 226.88 419.55 230.79 418.22 232.21 415.75 234.79 415.75 230.72 419.55 226.88"
                                            style={{ opacity: "0.3", transformOrigin: "417.65px 230.835px" }}
                                            className="animable"
                                            id="elx8dvn3zb86"
                                        />
                                    </g>
                                    <path
                                        d="M415.75,230.72V233a22.58,22.58,0,0,1-3.8,1.08,3.53,3.53,0,0,1-2.41-.38c-.94-.57-1.09-1.4.7-2.44A6.27,6.27,0,0,1,415.75,230.72Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "412.303px 232.233px" }}
                                        id="el396eagko5u7"
                                        className="animable"
                                    />
                                    <g id="el30j3dj0bgrr">
                                        <path
                                            d="M415.75,230.72V233a22.58,22.58,0,0,1-3.8,1.08,3.53,3.53,0,0,1-2.41-.38c-.94-.57-1.09-1.4.7-2.44A6.27,6.27,0,0,1,415.75,230.72Z"
                                            style={{ opacity: "0.45", transformOrigin: "412.303px 232.233px" }}
                                            className="animable"
                                            id="elueof8n3uaxi"
                                        />
                                    </g>
                                    <path
                                        d="M433.47,241.84v3.37l-4.28,2.48L426,245.85a16.15,16.15,0,0,1-12.26.56V243l1.94-1.93-1.94.54a12.56,12.56,0,0,1-9.56-1.09c-1.92-1.11-2.81-2.32-2.8-3.57v-3.29l.34-1.44-1.16-.68v-3.38l3.16,1.83c-1.54,1.2-2.36,2.44-2.34,3.63v0c0,1.22.93,2.4,2.8,3.48,4.17,2.4,8.29,1.61,12.07.4,3.52-1.15,6.08-2.5,8.11-1.33,1.25.73.87,1.61-.54,2.43a7,7,0,0,1-6,.35l-4,4a13.45,13.45,0,0,0,2.23.66,16.61,16.61,0,0,0,10-1.21l3.17,1.84Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "417.015px 237.925px" }}
                                        id="elo2fg0l3n1cb"
                                        className="animable"
                                    />
                                    <g id="elx5qmd7qlvdc">
                                        <path
                                            d="M401.4,233.64v0c0,1.22.93,2.4,2.8,3.48,4.17,2.4,8.29,1.61,12.07.4,3.52-1.15,6.08-2.5,8.11-1.33,1.25.73.87,1.61-.54,2.43a7,7,0,0,1-6,.35l-4,4a13.45,13.45,0,0,0,2.23.66,16.61,16.61,0,0,0,10-1.21l3.17,1.84,4.28-2.47v3.37l-4.28,2.48L426,245.85a16.15,16.15,0,0,1-12.26.56V243l1.94-1.93-1.94.54a12.56,12.56,0,0,1-9.56-1.09c-1.92-1.11-2.81-2.32-2.8-3.57v-3.29l.34-1.44"
                                            style={{ opacity: "0.2", transformOrigin: "417.45px 239.93px" }}
                                            className="animable"
                                            id="el3qj1vqxzukl"
                                        />
                                    </g>
                                    <g id="elolvxfcnw8zb">
                                        <path
                                            d="M400.58,228.18v3.38l1.16.68h0a7,7,0,0,1,2-2.24Z"
                                            style={{ opacity: "0.45", transformOrigin: "402.16px 230.21px" }}
                                            className="animable"
                                            id="elu4agcqwv3xj"
                                        />
                                    </g>
                                    <path
                                        d="M432.76,239.63a3.91,3.91,0,0,1-.32,1.61L430.29,240a4.25,4.25,0,0,0,2.44-3.26C432.74,237.68,432.76,239.53,432.76,239.63Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "431.525px 238.99px" }}
                                        id="eli30wdjggbas"
                                        className="animable"
                                    />
                                    <g id="elzi67az5ug6">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "431.525px 238.99px" }}
                                            className="animable"
                                            id="elhod7c0hcd9w"
                                        >
                                            <path
                                                d="M432.76,239.63a3.91,3.91,0,0,1-.32,1.61L430.29,240a4.25,4.25,0,0,0,2.44-3.26C432.74,237.68,432.76,239.53,432.76,239.63Z"
                                                id="eljbfqqd7sz6m"
                                                className="animable"
                                                style={{ transformOrigin: "431.525px 238.99px" }}
                                            />
                                        </g>
                                    </g>
                                    <path
                                        d="M432.75,241.42,430.3,240a4.16,4.16,0,0,0,2.45-3.75c0-.12,0-.22,0-.33-.11-1.17-1-2.3-2.74-3.32h0a11.27,11.27,0,0,0-5.69-1.49h-.55l-.5,0-.45,0-.18,0-.34,0a24.24,24.24,0,0,0-2.77.57c-.43.12-.87.25-1.29.39l-1.8.58-.67.23a20,20,0,0,1-3.8,1.08,3.86,3.86,0,0,1-1.64-.06,3.15,3.15,0,0,1-.76-.32c-.95-.55-1.1-1.39.69-2.43a6.27,6.27,0,0,1,5.51-.57l3.8-3.84a16.24,16.24,0,0,0-11.48.64l-3.18-1.83-4.31,2.5,3.17,1.82c-1.55,1.2-2.38,2.44-2.36,3.64v0c0,1.22.94,2.4,2.81,3.48,4.17,2.41,8.3,1.61,12.08.39,3.51-1.14,6.06-2.49,8.09-1.32,1.26.73.88,1.61-.53,2.43a7,7,0,0,1-6,.35l-4.05,4a15.22,15.22,0,0,0,2.24.65,14.93,14.93,0,0,0,3.91.29,18.22,18.22,0,0,0,6.11-1.49l3.18,1.83,4.27-2.47Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "417.06px 234.835px" }}
                                        id="elwc10t17c3e"
                                        className="animable"
                                    />
                                    <g id="elzfgmhvzkpgb">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "417.06px 234.835px" }}
                                            className="animable"
                                            id="elqtdrqrokzvi"
                                        >
                                            <path
                                                d="M432.75,241.42,430.3,240a4.16,4.16,0,0,0,2.45-3.75c0-.12,0-.22,0-.33-.11-1.17-1-2.3-2.74-3.32h0a11.27,11.27,0,0,0-5.69-1.49h-.55l-.5,0-.45,0-.18,0-.34,0a24.24,24.24,0,0,0-2.77.57c-.43.12-.87.25-1.29.39l-1.8.58-.67.23a20,20,0,0,1-3.8,1.08,3.86,3.86,0,0,1-1.64-.06,3.15,3.15,0,0,1-.76-.32c-.95-.55-1.1-1.39.69-2.43a6.27,6.27,0,0,1,5.51-.57l3.8-3.84a16.24,16.24,0,0,0-11.48.64l-3.18-1.83-4.31,2.5,3.17,1.82c-1.55,1.2-2.38,2.44-2.36,3.64v0c0,1.22.94,2.4,2.81,3.48,4.17,2.41,8.3,1.61,12.08.39,3.51-1.14,6.06-2.49,8.09-1.32,1.26.73.88,1.61-.53,2.43a7,7,0,0,1-6,.35l-4.05,4a15.22,15.22,0,0,0,2.24.65,14.93,14.93,0,0,0,3.91.29,18.22,18.22,0,0,0,6.11-1.49l3.18,1.83,4.27-2.47Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    transformOrigin: "417.06px 234.835px"
                                                }}
                                                id="elp5wcpnzjhg"
                                                className="animable"
                                            />
                                        </g>
                                    </g>
                                    <polygon
                                        points="426.02 242.47 426.02 245.85 429.19 247.69 429.19 244.31 426.02 242.47"
                                        style={{ fill: "#1A56DB", transformOrigin: "427.605px 245.08px" }}
                                        id="elztebw5or1q"
                                        className="animable"
                                    />
                                    <g id="eltrxx7oodx5m">
                                        <polygon
                                            points="426.02 242.47 426.02 245.85 429.19 247.69 429.19 244.31 426.02 242.47"
                                            style={{ opacity: "0.45", transformOrigin: "427.605px 245.08px" }}
                                            className="animable"
                                            id="eldnwskeni379"
                                        />
                                    </g>
                                    <g id="elk3t0xpfcfs">
                                        <polygon
                                            points="400.58 228.19 404.89 225.69 408.06 227.52 404.92 226.2 400.58 228.19"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "404.32px 226.94px"
                                            }}
                                            className="animable"
                                            id="el1f31mzojk86"
                                        />
                                    </g>
                                    <g id="elkpzbdrwrnbd">
                                        <path
                                            d="M410.24,231.29a6.27,6.27,0,0,1,5.51-.57l3.8-3.84-3.8,3.44A5.81,5.81,0,0,0,410.24,231.29Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "414.895px 229.085px"
                                            }}
                                            className="animable"
                                            id="el7n5497w5ik"
                                        />
                                    </g>
                                    <g id="eloc76i4rd04l">
                                        <path
                                            d="M413.75,243a15.22,15.22,0,0,0,2.24.65,14.93,14.93,0,0,0,3.91.29,13.8,13.8,0,0,1-5.51-1.1L417.8,239Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "416.825px 241.482px"
                                            }}
                                            className="animable"
                                            id="elevoow6t9tjc"
                                        />
                                    </g>
                                    <g id="elkxbka8cf4d">
                                        <polygon
                                            points="426.02 242.47 429.19 243.91 433.46 241.84 429.19 244.31 426.02 242.47"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "429.74px 243.075px"
                                            }}
                                            className="animable"
                                            id="elbfrjwfclrcj"
                                        />
                                    </g>
                                    <g id="eljdynywsnt7m">
                                        <path
                                            d="M388.26,221.2c11.24-6.82,28.76-7.5,28.76-7.5-11,0-21.34,2.46-29.08,6.93-7.43,4.29-11.51,9.87-11.51,15.73C376.43,236.36,376.83,228.15,388.26,221.2Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "396.725px 225.03px"
                                            }}
                                            className="animable"
                                            id="ellnw1pq71uja"
                                        />
                                    </g>
                                    <g id="el9b88vz3nw3l">
                                        <path
                                            d="M413.75,260.8c11.93.53,24.17-1.84,33.29-7.11,9.49-5.48,13.55-12.9,12.18-20,0,0,1.77,11.64-12.89,19.6S413.75,260.8,413.75,260.8Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "436.615px 247.281px"
                                            }}
                                            className="animable"
                                            id="elh3pny0cvuiv"
                                        />
                                    </g>
                                </g>
                            </g>
                            <g
                                id="freepik--Arrow--inject-699"
                                className="animable"
                                style={{ transformOrigin: "215.315px 150.58px" }}
                            >
                                <g
                                    id="freepik--arrow--inject-699"
                                    className="animable"
                                    style={{ transformOrigin: "215.315px 150.58px" }}
                                >
                                    <polygon
                                        points="338.94 48.07 334.65 45.57 297.39 58.97 305.62 66.67 200.22 179.22 178.26 158.49 173.96 155.99 91.69 243.84 101.56 253.08 105.86 255.59 177.48 179.11 197.94 197.89 204.38 201.65 318.96 79.3 323.71 83.61 328.01 86.12 338.94 48.07"
                                        style={{ fill: "#1A56DB", transformOrigin: "215.315px 150.58px" }}
                                        id="el1dbeftif72t"
                                        className="animable"
                                    />
                                    <g id="el6z9rdvpqpzk">
                                        <polygon
                                            points="338.94 48.07 334.65 45.57 297.39 58.97 305.62 66.67 200.22 179.22 178.26 158.49 173.96 155.99 91.69 243.84 101.56 253.08 105.86 255.59 177.48 179.11 197.94 197.89 204.38 201.65 318.96 79.3 323.71 83.61 328.01 86.12 338.94 48.07"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.25",
                                                transformOrigin: "215.315px 150.58px"
                                            }}
                                            className="animable"
                                            id="el43erh075779"
                                        />
                                    </g>
                                    <polygon
                                        points="338.94 48.07 328.01 86.12 319.78 78.42 204.38 201.65 178.88 177.61 105.86 255.59 95.98 246.34 178.26 158.49 203.75 182.53 309.91 69.17 301.69 61.47 338.94 48.07"
                                        style={{ fill: "#1A56DB", transformOrigin: "217.46px 151.83px" }}
                                        id="el8zk1yikgl8"
                                        className="animable"
                                    />
                                    <polygon
                                        points="178.88 177.61 177.48 179.11 197.94 197.89 204.38 201.65 178.88 177.61"
                                        style={{ fill: "#1A56DB", transformOrigin: "190.93px 189.63px" }}
                                        id="elsdtfrxm260g"
                                        className="animable"
                                    />
                                    <g id="elbiu3ibayhcu">
                                        <polygon
                                            points="178.88 177.61 177.48 179.11 197.94 197.89 204.38 201.65 178.88 177.61"
                                            style={{ opacity: "0.2", transformOrigin: "190.93px 189.63px" }}
                                            className="animable"
                                            id="el9o8tgqcf9sv"
                                        />
                                    </g>
                                    <polygon
                                        points="305.62 66.67 309.91 69.17 301.69 61.47 297.39 58.97 305.62 66.67"
                                        style={{ fill: "#1A56DB", transformOrigin: "303.65px 64.07px" }}
                                        id="elwxe37j8acnk"
                                        className="animable"
                                    />
                                    <g id="el7h4531wn2sy">
                                        <polygon
                                            points="305.62 66.67 309.91 69.17 301.69 61.47 297.39 58.97 305.62 66.67"
                                            style={{ opacity: "0.2", transformOrigin: "303.65px 64.07px" }}
                                            className="animable"
                                            id="el4ulei89yy6i"
                                        />
                                    </g>
                                    <polygon
                                        points="318.96 79.3 319.78 78.42 328.01 86.12 323.71 83.61 318.96 79.3"
                                        style={{ fill: "#1A56DB", transformOrigin: "323.485px 82.27px" }}
                                        id="eldk3q0vahs3r"
                                        className="animable"
                                    />
                                    <g id="elke7tkv46zt">
                                        <polygon
                                            points="318.96 79.3 319.78 78.42 328.01 86.12 323.71 83.61 318.96 79.3"
                                            style={{ opacity: "0.2", transformOrigin: "323.485px 82.27px" }}
                                            className="animable"
                                            id="elji14ypc00va"
                                        />
                                    </g>
                                    <polygon
                                        points="91.69 243.84 95.98 246.34 105.86 255.59 101.56 253.08 91.69 243.84"
                                        style={{ fill: "#1A56DB", transformOrigin: "98.775px 249.715px" }}
                                        id="elal9cudmvm9m"
                                        className="animable"
                                    />
                                    <g id="elet0qo5tv2r">
                                        <polygon
                                            points="91.69 243.84 95.98 246.34 105.86 255.59 101.56 253.08 91.69 243.84"
                                            style={{ opacity: "0.2", transformOrigin: "98.775px 249.715px" }}
                                            className="animable"
                                            id="elcda7hdwbril"
                                        />
                                    </g>
                                    <g id="elooysxsg3u3p">
                                        <polygon
                                            points="123.1 217.39 178.26 160.31 203.75 182.53 178.26 158.49 123.1 217.39"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.5",
                                                transformOrigin: "163.425px 187.94px"
                                            }}
                                            className="animable"
                                            id="elzja9zsryv1k"
                                        />
                                    </g>
                                    <g id="el4t70xyapi0u">
                                        <polygon
                                            points="252.39 130.6 311.16 69.17 303.24 61.85 338.94 48.07 301.69 61.47 309.91 69.17 252.39 130.6"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.5",
                                                transformOrigin: "295.665px 89.335px"
                                            }}
                                            className="animable"
                                            id="el77ojwirvbom"
                                        />
                                    </g>
                                </g>
                            </g>
                            <g
                                id="freepik--bar-chart--inject-699"
                                className="animable"
                                style={{ transformOrigin: "266.22px 259.585px" }}
                            >
                                <g
                                    id="freepik--bar-graph--inject-699"
                                    className="animable"
                                    style={{ transformOrigin: "266.22px 259.585px" }}
                                >
                                    <g id="elm2kf1z8b0q8">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "346.27px 292.37px" }}
                                            className="animable"
                                            id="el64bg81wewdn"
                                        >
                                            <path
                                                d="M340.94,320.78a.63.63,0,0,1-.33-.09L297.91,296a.68.68,0,0,1-.33-.57.66.66,0,0,1,.33-.57l53.37-30.81a.65.65,0,0,1,.66,0l42.7,24.65a.65.65,0,0,1,.32.57.67.67,0,0,1-.32.57l-53.37,30.81A.68.68,0,0,1,340.94,320.78Zm-41.38-25.31,41.38,23.89L393,289.31l-41.38-23.89Z"
                                                style={{ fill: "#1A56DB", transformOrigin: "346.27px 292.37px" }}
                                                id="elto92s37mslo"
                                                className="animable"
                                            />
                                        </g>
                                    </g>
                                    <polygon
                                        points="340.94 313.96 340.93 149.09 308.91 130.6 308.92 295.47 340.94 313.96"
                                        style={{ fill: "#1A56DB", transformOrigin: "324.925px 222.28px" }}
                                        id="el0n64q6z2kue"
                                        className="animable"
                                    />
                                    <g id="elp1f9ilc5jde">
                                        <polygon
                                            points="340.94 313.96 340.93 149.09 308.91 130.6 308.92 295.47 340.94 313.96"
                                            style={{ opacity: "0.2", transformOrigin: "324.925px 222.28px" }}
                                            className="animable"
                                            id="eljgmi8kup07"
                                        />
                                    </g>
                                    <polygon
                                        points="340.94 313.96 383.63 289.31 383.64 124.44 340.93 149.09 340.94 313.96"
                                        style={{ fill: "#1A56DB", transformOrigin: "362.285px 219.2px" }}
                                        id="elbkztifqh2ab"
                                        className="animable"
                                    />
                                    <polygon
                                        points="383.64 124.44 351.62 105.95 308.91 130.6 340.93 149.09 383.64 124.44"
                                        style={{ fill: "#1A56DB", transformOrigin: "346.275px 127.52px" }}
                                        id="elip26pky32n"
                                        className="animable"
                                    />
                                    <g id="elrn00mui7id">
                                        <polygon
                                            points="383.64 124.44 351.62 105.95 308.91 130.6 340.93 149.09 383.64 124.44"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.25",
                                                transformOrigin: "346.275px 127.52px"
                                            }}
                                            className="animable"
                                            id="elfsg8a8qvz79"
                                        />
                                    </g>
                                    <g id="elibb7aa6pafb">
                                        <path
                                            d="M383.64,124.44l-43.13,23.78-14-7.82-17.59-9.8,17.28,10.34,14.17,8.46c-.34,4.8-.43,87.56-.37,92.37s.31,67.28.95,72.19c.64-4.91.86-67.28.93-72.19.07-4.65,0-87.26-.34-91.91Z"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.3",
                                                transformOrigin: "346.28px 219.2px"
                                            }}
                                            className="animable"
                                            id="elg3silsldtmn"
                                        />
                                    </g>
                                    <g id="el1w02nr3sf8p">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "266.22px 338.612px" }}
                                            className="animable"
                                            id="elqb0ktpu3oa"
                                        >
                                            <path
                                                d="M260.88,367a.68.68,0,0,1-.33-.09l-42.69-24.65a.68.68,0,0,1-.33-.57.66.66,0,0,1,.33-.57l53.37-30.81a.65.65,0,0,1,.66,0L314.58,335a.66.66,0,0,1,.33.57.68.68,0,0,1-.33.57l-53.37,30.81A.63.63,0,0,1,260.88,367ZM219.5,341.69l41.38,23.89,52.06-30.05-41.38-23.89Z"
                                                style={{ fill: "#1A56DB", transformOrigin: "266.22px 338.612px" }}
                                                id="elkm77inxakq"
                                                className="animable"
                                            />
                                        </g>
                                    </g>
                                    <polygon
                                        points="260.88 360.18 260.88 227.75 228.86 209.26 228.86 341.69 260.88 360.18"
                                        style={{ fill: "#1A56DB", transformOrigin: "244.87px 284.72px" }}
                                        id="el5a9m9iule04"
                                        className="animable"
                                    />
                                    <g id="el6mxhyxqnxzf">
                                        <polygon
                                            points="260.88 360.18 260.88 227.75 228.86 209.26 228.86 341.69 260.88 360.18"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.1",
                                                transformOrigin: "244.87px 284.72px"
                                            }}
                                            className="animable"
                                            id="elntilj5n5aib"
                                        />
                                    </g>
                                    <polygon
                                        points="260.88 360.18 303.58 335.53 303.58 203.1 260.88 227.75 260.88 360.18"
                                        style={{ fill: "#1A56DB", transformOrigin: "282.23px 281.64px" }}
                                        id="ell9jmcb9tqy"
                                        className="animable"
                                    />
                                    <g id="el4uxl0wizr2x">
                                        <polygon
                                            points="260.88 360.18 303.58 335.53 303.58 203.1 260.88 227.75 260.88 360.18"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.3",
                                                transformOrigin: "282.23px 281.64px"
                                            }}
                                            className="animable"
                                            id="el303rfasxj8x"
                                        />
                                    </g>
                                    <polygon
                                        points="303.58 203.1 271.56 184.62 228.86 209.26 260.88 227.75 303.58 203.1"
                                        style={{ fill: "#1A56DB", transformOrigin: "266.22px 206.185px" }}
                                        id="el3zm72796yop"
                                        className="animable"
                                    />
                                    <g id="elrx5s9kpe9yd">
                                        <polygon
                                            points="303.58 203.1 271.56 184.62 228.86 209.26 260.88 227.75 303.58 203.1"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.55",
                                                transformOrigin: "266.22px 206.185px"
                                            }}
                                            className="animable"
                                            id="elmg9fabyam8e"
                                        />
                                    </g>
                                    <g id="el7uydl6spd0h">
                                        <path
                                            d="M261.45,228.08l42.13-25-42.7,24c-4.65-2.64-9.76-5.47-14.43-8.07l-17.59-9.79,17.28,10.33c4.72,2.83,9.44,5.67,14.18,8.46-.15,5,.24,127,.56,132.12C261.21,355.09,261.59,232.9,261.45,228.08Z"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.3",
                                                transformOrigin: "266.22px 281.605px"
                                            }}
                                            className="animable"
                                            id="el9qoyzbksyxv"
                                        />
                                    </g>
                                    <g id="el90ptdx856eh">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "186.165px 384.83px" }}
                                            className="animable"
                                            id="el1d6to0am3zwi"
                                        >
                                            <path
                                                d="M180.83,413.22a.66.66,0,0,1-.33-.09l-42.7-24.65a.67.67,0,0,1-.32-.57.65.65,0,0,1,.32-.57l53.37-30.81a.65.65,0,0,1,.66,0l42.7,24.65a.65.65,0,0,1,.32.57.67.67,0,0,1-.32.57l-53.37,30.81A.68.68,0,0,1,180.83,413.22Zm-41.38-25.31,41.38,23.89,52-30.05L191.5,357.86Z"
                                                style={{ fill: "#1A56DB", transformOrigin: "186.165px 384.83px" }}
                                                id="el2pk12uzyu4d"
                                                className="animable"
                                            />
                                        </g>
                                    </g>
                                    <polygon
                                        points="180.83 406.4 180.82 317.24 148.8 298.75 148.81 387.91 180.83 406.4"
                                        style={{ fill: "#1A56DB", transformOrigin: "164.815px 352.575px" }}
                                        id="el30jkps8xh8x"
                                        className="animable"
                                    />
                                    <g id="el8ahay0vy87">
                                        <polygon
                                            points="180.83 406.4 180.82 317.24 148.8 298.75 148.81 387.91 180.83 406.4"
                                            style={{ opacity: "0.45", transformOrigin: "164.815px 352.575px" }}
                                            className="animable"
                                            id="eldjtavwry4zt"
                                        />
                                    </g>
                                    <polygon
                                        points="180.83 406.4 223.52 381.75 223.53 292.59 180.82 317.24 180.83 406.4"
                                        style={{ fill: "#1A56DB", transformOrigin: "202.175px 349.495px" }}
                                        id="elzf5vpi48ysh"
                                        className="animable"
                                    />
                                    <g id="elho96kv3nzd">
                                        <polygon
                                            points="180.83 406.4 223.52 381.75 223.53 292.59 180.82 317.24 180.83 406.4"
                                            style={{ opacity: "0.3", transformOrigin: "202.175px 349.495px" }}
                                            className="animable"
                                            id="elyj02gbk5e8"
                                        />
                                    </g>
                                    <polygon
                                        points="223.53 292.59 191.51 274.1 148.8 298.75 180.82 317.24 223.53 292.59"
                                        style={{ fill: "#1A56DB", transformOrigin: "186.165px 295.67px" }}
                                        id="elh2jnp5lyy7r"
                                        className="animable"
                                    />
                                    <g id="el5xv0n6z27o">
                                        <polygon
                                            points="223.53 292.59 191.51 274.1 148.8 298.75 180.82 317.24 223.53 292.59"
                                            style={{ opacity: "0.15", transformOrigin: "186.165px 295.67px" }}
                                            className="animable"
                                            id="elz610vkomzo"
                                        />
                                    </g>
                                    <g id="el10azj8gl989c">
                                        <path
                                            d="M223.53,292.59l-42.71,24-14.43-8.05-17.59-9.8,17.28,10.34L180.24,318s-.05,85.4.59,88.43c.64-3,.62-88.41.62-88.41Z"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.3",
                                                transformOrigin: "186.165px 349.51px"
                                            }}
                                            className="animable"
                                            id="else0wa03w9th"
                                        />
                                    </g>
                                </g>
                            </g>
                            <g
                                id="freepik--pie-charts--inject-699"
                                className="animable"
                                style={{ transformOrigin: "343.31px 375.9px" }}
                            >
                                <g
                                    id="freepik--pie-chart--inject-699"
                                    className="animable"
                                    style={{ transformOrigin: "272.75px 416.632px" }}
                                >
                                    <path
                                        d="M272.75,443.13c-10.87,0-21.74-2.39-30-7.17-8.13-4.69-12.6-11-12.6-17.65s4.47-13,12.6-17.65c16.56-9.56,43.5-9.56,60,0h0c8.13,4.69,12.6,11,12.6,17.65s-4.47,13-12.6,17.65S283.63,443.13,272.75,443.13Zm0-48.56c-10.68,0-21.36,2.34-29.49,7-7.77,4.49-12.05,10.42-12.05,16.71s4.28,12.22,12.05,16.71c16.26,9.38,42.71,9.38,59,0,7.77-4.49,12.05-10.42,12.05-16.71S310,406.09,302.24,401.6h0C294.11,396.91,283.43,394.57,272.76,394.57Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "272.75px 418.31px" }}
                                        id="eltilgtoykcje"
                                        className="animable"
                                    />
                                    <g
                                        id="freepik--pie-chart--inject-699"
                                        className="animable"
                                        style={{ transformOrigin: "272.737px 414.488px" }}
                                    >
                                        <path
                                            d="M273.88,409.43v7.08l-7-19v-7.07h0Z"
                                            style={{
                                                fill: "rgb(38, 50, 56)",
                                                transformOrigin: "270.38px 403.475px"
                                            }}
                                            id="el8qnhpv8g75w"
                                            className="animable"
                                        />
                                        <polygon
                                            points="273.88 409.43 273.88 416.51 302.73 406.5 302.73 399.43 273.88 409.43"
                                            style={{
                                                fill: "rgb(55, 71, 79)",
                                                transformOrigin: "288.305px 407.97px"
                                            }}
                                            id="elx0dha9bnch"
                                            className="animable"
                                        />
                                        <path
                                            d="M266.89,390.43l7,19,28.85-10C294.81,392.52,281,389.06,266.89,390.43Z"
                                            style={{
                                                fill: "rgb(69, 90, 100)",
                                                transformOrigin: "284.815px 399.782px"
                                            }}
                                            id="el7v5mobcqdav"
                                            className="animable"
                                        />
                                        <path
                                            d="M236.75,410.75a1.48,1.48,0,0,0,0,.21v-.21Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "236.748px 410.855px" }}
                                            id="elatx32grbivj"
                                            className="animable"
                                        />
                                        <path
                                            d="M271,418.36l-4.29,20.15c-17.48-1.71-30.11-10.55-30-20.66V411c0,10,12.61,18.78,30,20.48l2.95-13.85Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "253.855px 424.755px" }}
                                            id="eliqs3jn16r8"
                                            className="animable"
                                        />
                                        <g id="el56r4yuw7del">
                                            <path
                                                d="M271,418.36l-4.29,20.15c-17.48-1.71-30.11-10.55-30-20.66V411c0,10,12.61,18.78,30,20.48l2.95-13.85Z"
                                                style={{ opacity: "0.4", transformOrigin: "253.855px 424.755px" }}
                                                className="animable"
                                                id="el0akevv44qtel"
                                            />
                                        </g>
                                        <path
                                            d="M270,431.67v7.08a55.9,55.9,0,0,0,21.28-2.91c8.25-2.86,14.07-7.41,16.4-12.79a13,13,0,0,0,1.08-4.94c0-.67,0-7.32,0-7.32s-2-.15-4.34-2.65L299,410l-24.74,8.58Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "289.38px 423.491px" }}
                                            id="elwilbjjsqzgq"
                                            className="animable"
                                        />
                                        <g id="eld433dvecpj8">
                                            <path
                                                d="M270,431.67v7.08a55.9,55.9,0,0,0,21.28-2.91c8.25-2.86,14.07-7.41,16.4-12.79a13,13,0,0,0,1.08-4.94c0-.67,0-7.32,0-7.32s-2-.15-4.34-2.65L299,410l-24.74,8.58Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    opacity: "0.6",
                                                    transformOrigin: "289.38px 423.491px"
                                                }}
                                                className="animable"
                                                id="elchdu6y2d93"
                                            />
                                        </g>
                                        <polygon
                                            points="248.48 402.66 269.97 415.06 269.97 407.99 248.48 395.58 248.48 402.66"
                                            style={{ fill: "#1A56DB", transformOrigin: "259.225px 405.32px" }}
                                            id="eltp7sborw54"
                                            className="animable"
                                        />
                                        <g id="eljjk1kdhyje">
                                            <polygon
                                                points="248.48 402.66 269.97 415.06 269.97 407.99 248.48 395.58 248.48 402.66"
                                                style={{ opacity: "0.1", transformOrigin: "259.225px 405.32px" }}
                                                className="animable"
                                                id="el4zg7swiasxs"
                                            />
                                        </g>
                                        <path
                                            d="M237,408.41c-2.35,11.06,10.87,21.19,29.71,23L271,411.29l-24.87-14.36C241,400.18,238,404,237,408.41Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "253.865px 414.17px" }}
                                            id="elax29603xop9"
                                            className="animable"
                                        />
                                        <g id="el03y4iyo81rdk">
                                            <path
                                                d="M237,408.41c-2.35,11.06,10.87,21.19,29.71,23L271,411.29l-24.87-14.36C241,400.18,238,404,237,408.41Z"
                                                style={{ opacity: "0.3", transformOrigin: "253.865px 414.17px" }}
                                                className="animable"
                                                id="elpo4yeckqsvc"
                                            />
                                        </g>
                                        <path
                                            d="M270.13,431.08l-.12.59a55.71,55.71,0,0,0,21.28-2.91c8.25-2.86,14.07-7.4,16.4-12.79,2.19-5.08,1-10.33-3.26-14.9l-5.4,1.87-24.74,8.58Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "289.388px 416.417px" }}
                                            id="elcffln4n0w0u"
                                            className="animable"
                                        />
                                        <g id="eloyt5744prxk">
                                            <path
                                                d="M270.13,431.08l-.12.59a55.71,55.71,0,0,0,21.28-2.91c8.25-2.86,14.07-7.4,16.4-12.79,2.19-5.08,1-10.33-3.26-14.9l-5.4,1.87-24.74,8.58Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    opacity: "0.75",
                                                    transformOrigin: "289.388px 416.417px"
                                                }}
                                                className="animable"
                                                id="eltbtrzivz3n8"
                                            />
                                        </g>
                                        <path
                                            d="M248.48,395.58,270,408l-6.32-17.17A44.25,44.25,0,0,0,248.48,395.58Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "259.24px 399.415px" }}
                                            id="elbft1ozj3cp"
                                            className="animable"
                                        />
                                        <polygon
                                            points="271.01 418.36 271.01 411.29 266.72 431.44 266.72 438.51 271.01 418.36"
                                            style={{ fill: "#1A56DB", transformOrigin: "268.865px 424.9px" }}
                                            id="el6j6hqbomlpc"
                                            className="animable"
                                        />
                                        <g id="ela7ozifvz54">
                                            <polygon
                                                points="271.01 418.36 271.01 411.29 266.72 431.44 266.72 438.51 271.01 418.36"
                                                style={{ opacity: "0.55", transformOrigin: "268.865px 424.9px" }}
                                                className="animable"
                                                id="eljk1lpgeo44"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g
                                    id="freepik--pie-chart--inject-699"
                                    className="animable"
                                    style={{ transformOrigin: "343.345px 375.899px" }}
                                >
                                    <path
                                        d="M343.32,402.4c-10.88,0-21.75-2.39-30-7.17s-12.6-11-12.6-17.66,4.47-13,12.6-17.65c16.56-9.56,43.5-9.56,60.06,0h0c8.12,4.69,12.59,11,12.59,17.65s-4.47,13-12.6,17.66S354.19,402.4,343.32,402.4Zm0-48.57c-10.68,0-21.36,2.35-29.48,7-7.78,4.49-12.06,10.42-12.06,16.7s4.28,12.22,12.06,16.71c16.25,9.38,42.7,9.38,59,0,7.77-4.49,12.05-10.42,12.05-16.71s-4.28-12.21-12.05-16.7h0C364.67,356.18,354,353.83,343.32,353.83Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "343.345px 377.575px" }}
                                        id="el33ugryylio7"
                                        className="animable"
                                    />
                                    <g
                                        id="freepik--pie-chart--inject-699"
                                        className="animable"
                                        style={{ transformOrigin: "343.319px 373.699px" }}
                                    >
                                        <path
                                            d="M378,371.61v-7.06c-13.62-7.87-44.75-10.1-58.83-2.68l24.73,14.29,26.44-3.53Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "348.585px 366.745px" }}
                                            id="el9y6fz9ghyp"
                                            className="animable"
                                        />
                                        <g id="eldvmk5ol2no6">
                                            <path
                                                d="M378,371.61v-7.06c-13.62-7.87-44.75-10.1-58.83-2.68l24.73,14.29,26.44-3.53Z"
                                                style={{ opacity: "0.1", transformOrigin: "348.585px 366.745px" }}
                                                className="animable"
                                                id="el74tq3anj8la"
                                            />
                                        </g>
                                        <path
                                            d="M378,364.55c-1.68-3.57-4.56-6.4-9.2-9.08-13.63-7.87-35.55-8.09-49.63-.66l24.73,14.28,26.44-3.52Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "348.585px 359.244px" }}
                                            id="el65iaeaa6afe"
                                            className="animable"
                                        />
                                        <polygon
                                            points="343.89 376.15 343.89 369.09 319.15 354.81 319.15 361.87 343.89 376.15"
                                            style={{ fill: "#1A56DB", transformOrigin: "331.52px 365.48px" }}
                                            id="elgjbo8zyk6f4"
                                            className="animable"
                                        />
                                        <g id="elosccqz6lt8">
                                            <polygon
                                                points="343.89 376.15 343.89 369.09 319.15 354.81 319.15 361.87 343.89 376.15"
                                                style={{ opacity: "0.2", transformOrigin: "331.52px 365.48px" }}
                                                className="animable"
                                                id="elqcwynq9d2l8"
                                            />
                                        </g>
                                        <path
                                            d="M351.46,397.42c9.35-1.25,17.3-4.52,22.39-9.22,3.6-3.32,5.46-7.08,5.48-10.9v-7.16l-22.28,6.22-12,1.59,1.21,19.94C348,397.81,349.67,397.66,351.46,397.42Z"
                                            style={{
                                                fill: "rgb(55, 71, 79)",
                                                transformOrigin: "362.19px 384.015px"
                                            }}
                                            id="elbyei8u2bash"
                                            className="animable"
                                        />
                                        <path
                                            d="M351.46,390.36c9.35-1.25,17.3-4.52,22.39-9.23,4.8-4.42,6.5-9.62,4.88-14.72l-21.68,2.88-12,1.6,1.21,19.93C348,390.74,349.67,390.6,351.46,390.36Z"
                                            style={{
                                                fill: "rgb(69, 90, 100)",
                                                transformOrigin: "362.188px 378.615px"
                                            }}
                                            id="elzhzqapqu7w"
                                            className="animable"
                                        />
                                        <path
                                            d="M311.75,387.06l29-10.05-23.89-13.79c-4.41,2.78-9.51,6.73-9.51,6.73s0,5.73,0,7.25C307.33,380.54,308.79,383.92,311.75,387.06Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "324.05px 375.14px" }}
                                            id="elv1nu0dc6jog"
                                            className="animable"
                                        />
                                        <g id="elcxmhwvwytag">
                                            <path
                                                d="M311.75,387.06l29-10.05-23.89-13.79c-4.41,2.78-9.51,6.73-9.51,6.73s0,5.73,0,7.25C307.33,380.54,308.79,383.92,311.75,387.06Z"
                                                style={{ opacity: "0.4", transformOrigin: "324.05px 375.14px" }}
                                                className="animable"
                                                id="el0dl1rksamnjh"
                                            />
                                        </g>
                                        <path
                                            d="M311.75,380l29-10.05-23.89-13.79C306.32,362.76,304.33,372.13,311.75,380Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "324.029px 368.08px" }}
                                            id="elqrm16mcwzwf"
                                            className="animable"
                                        />
                                        <g id="elyl2i5zkm0s">
                                            <path
                                                d="M311.75,380l29-10.05-23.89-13.79C306.32,362.76,304.33,372.13,311.75,380Z"
                                                style={{ opacity: "0.3", transformOrigin: "324.029px 368.08px" }}
                                                className="animable"
                                                id="eligrjcnl6do"
                                            />
                                        </g>
                                        <polygon
                                            points="311.75 387.06 311.75 380 340.71 369.95 340.71 377.01 311.75 387.06"
                                            style={{ fill: "#1A56DB", transformOrigin: "326.23px 378.505px" }}
                                            id="el8vrs3z3jz3c"
                                            className="animable"
                                        />
                                        <g id="el2xlmbzah49r">
                                            <polygon
                                                points="311.75 387.06 311.75 380 340.71 369.95 340.71 377.01 311.75 387.06"
                                                style={{ opacity: "0.55", transformOrigin: "326.23px 378.505px" }}
                                                className="animable"
                                                id="el6khi7rjf22"
                                            />
                                        </g>
                                        <path
                                            d="M343,398v-7.06l-1.16-12-28.37,2.78v7.07C320.16,394.58,330.78,397.91,343,398Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "328.235px 388.47px" }}
                                            id="el8iffxms5g8b"
                                            className="animable"
                                        />
                                        <g id="elajtm9wss1ym">
                                            <path
                                                d="M343,398v-7.06l-1.16-12-28.37,2.78v7.07C320.16,394.58,330.78,397.91,343,398Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    opacity: "0.6",
                                                    transformOrigin: "328.235px 388.47px"
                                                }}
                                                className="animable"
                                                id="elovp3hlar6qd"
                                            />
                                        </g>
                                        <path
                                            d="M343,390.89l-1.16-19.1-21.48,7.45-6.89,2.39C320.16,387.52,330.78,390.84,343,390.89Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "328.235px 381.34px" }}
                                            id="el7gnv5wuykkk"
                                            className="animable"
                                        />
                                        <g id="elmc6yornctnp">
                                            <path
                                                d="M343,390.89l-1.16-19.1-21.48,7.45-6.89,2.39C320.16,387.52,330.78,390.84,343,390.89Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    opacity: "0.75",
                                                    transformOrigin: "328.235px 381.34px"
                                                }}
                                                className="animable"
                                                id="elwo31ep1lzu9"
                                            />
                                        </g>
                                        <polygon
                                            points="345.07 370.89 345.07 377.95 346.28 397.89 346.28 390.82 345.07 370.89"
                                            style={{
                                                fill: "rgb(38, 50, 56)",
                                                transformOrigin: "345.675px 384.39px"
                                            }}
                                            id="elbs1k8a4o6qm"
                                            className="animable"
                                        />
                                    </g>
                                </g>
                                <g
                                    id="freepik--pie-chart--inject-699"
                                    className="animable"
                                    style={{ transformOrigin: "413.87px 335.17px" }}
                                >
                                    <path
                                        d="M413.87,361.67c-10.87,0-21.74-2.39-30-7.17s-12.6-11-12.6-17.66,4.47-13,12.6-17.65c16.56-9.56,43.5-9.56,60,0h0c8.13,4.69,12.6,11,12.6,17.65s-4.47,13-12.6,17.66S424.75,361.67,413.87,361.67Zm0-48.57c-10.67,0-21.35,2.35-29.48,7-7.77,4.49-12.05,10.42-12.05,16.7s4.28,12.22,12.05,16.71c16.26,9.38,42.71,9.38,59,0,7.77-4.49,12.05-10.42,12.05-16.71s-4.28-12.21-12.05-16.7h0C435.23,315.45,424.55,313.1,413.87,313.1Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "413.87px 336.845px" }}
                                        id="elzj51slnnz2"
                                        className="animable"
                                    />
                                    <g
                                        id="freepik--pie-chart--inject-699"
                                        className="animable"
                                        style={{ transformOrigin: "413.855px 332.962px" }}
                                    >
                                        <path
                                            d="M389.7,314.09l22.43,13L411,308.74C402.78,309.09,395.78,310.85,389.7,314.09Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "400.915px 317.915px" }}
                                            id="elfebvtxvywh"
                                            className="animable"
                                        />
                                        <polygon
                                            points="412.13 327.04 412.13 334.1 389.7 321.15 389.7 314.09 412.13 327.04"
                                            style={{ fill: "#1A56DB", transformOrigin: "400.915px 324.095px" }}
                                            id="eljps04j31gt"
                                            className="animable"
                                        />
                                        <g id="elu5z21ive5km">
                                            <polygon
                                                points="412.13 327.04 412.13 334.1 389.7 321.15 389.7 314.09 412.13 327.04"
                                                style={{ opacity: "0.2", transformOrigin: "400.915px 324.095px" }}
                                                className="animable"
                                                id="el0za4g0yxp3y"
                                            />
                                        </g>
                                        <polygon
                                            points="441.2 315.91 415.46 327.52 415.46 334.58 441.2 322.97 441.2 315.91"
                                            style={{
                                                fill: "rgb(55, 71, 79)",
                                                transformOrigin: "428.33px 325.245px"
                                            }}
                                            id="elesc6koihgja"
                                            className="animable"
                                        />
                                        <path
                                            d="M441.2,315.91c-6.93-4.72-16.16-7.21-26.88-7.24l.7,11.44.44,7.41Z"
                                            style={{
                                                fill: "rgb(69, 90, 100)",
                                                transformOrigin: "427.76px 318.095px"
                                            }}
                                            id="elija91b06bm8"
                                            className="animable"
                                        />
                                        <polygon
                                            points="414.32 308.67 414.32 315.73 415.46 334.58 415.46 327.52 414.32 308.67"
                                            style={{
                                                fill: "rgb(38, 50, 56)",
                                                transformOrigin: "414.89px 321.625px"
                                            }}
                                            id="eld4vfr7bbbd6"
                                            className="animable"
                                        />
                                        <path
                                            d="M420.68,341.12l13.15,12.64c.74-.28,1.43-.57,2.22-.93,9.07-4.08,13.81-10.2,13.8-16.37v-7c-1-2.66-3.74-2.66-6.62-5L416.36,336.6l-.27.12Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "432.97px 339.11px" }}
                                            id="el19hso1ir1p3"
                                            className="animable"
                                        />
                                        <g id="el4egoot13cwj">
                                            <path
                                                d="M420.68,341.12l13.15,12.64c.74-.28,1.43-.57,2.22-.93,9.07-4.08,13.81-10.2,13.8-16.37v-7c-1-2.66-3.74-2.66-6.62-5L416.36,336.6l-.27.12Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    opacity: "0.6",
                                                    transformOrigin: "432.97px 339.11px"
                                                }}
                                                className="animable"
                                                id="elp2wxpcq6e4"
                                            />
                                        </g>
                                        <path
                                            d="M420.68,334.06l13.15,12.64c.74-.28,1.43-.57,2.22-.93,15.18-6.84,18.23-19.38,7.18-28.36l-26.87,12.12-.27.12Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "432.969px 332.055px" }}
                                            id="elqljd6z0sqp"
                                            className="animable"
                                        />
                                        <g id="elsl78w7tfr6e">
                                            <path
                                                d="M420.68,334.06l13.15,12.64c.74-.28,1.43-.57,2.22-.93,15.18-6.84,18.23-19.38,7.18-28.36l-26.87,12.12-.27.12Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    opacity: "0.75",
                                                    transformOrigin: "432.969px 332.055px"
                                                }}
                                                className="animable"
                                                id="elnwh3b6xsfdk"
                                            />
                                        </g>
                                        <polygon
                                            points="433.83 353.76 433.83 346.7 416.09 329.65 416.09 336.72 433.83 353.76"
                                            style={{ fill: "#1A56DB", transformOrigin: "424.96px 341.705px" }}
                                            id="el2fez9bww2ro"
                                            className="animable"
                                        />
                                        <g id="elusmwixelo9g">
                                            <polygon
                                                points="433.83 353.76 433.83 346.7 416.09 329.65 416.09 336.72 433.83 353.76"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    opacity: "0.4",
                                                    transformOrigin: "424.96px 341.705px"
                                                }}
                                                className="animable"
                                                id="elorvbt0ncx3"
                                            />
                                        </g>
                                        <path
                                            d="M387.37,322.5c-3.78,2.38-8,3.88-9.51,6.78v7.07c0,3.68,1.71,7.41,5.26,10.82,4.95,4.75,12.8,8.11,22.11,9.45A59.5,59.5,0,0,0,431,354.74v-7.06l-11.58-4.07-6.8-6.53Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "404.43px 339.877px" }}
                                            id="elrudpf35123"
                                            className="animable"
                                        />
                                        <g id="el7v1srxi21nx">
                                            <path
                                                d="M387.37,322.5c-3.78,2.38-8,3.88-9.51,6.78v7.07c0,3.68,1.71,7.41,5.26,10.82,4.95,4.75,12.8,8.11,22.11,9.45A59.5,59.5,0,0,0,431,354.74v-7.06l-11.58-4.07-6.8-6.53Z"
                                                style={{ opacity: "0.4", transformOrigin: "404.43px 339.877px" }}
                                                className="animable"
                                                id="elsq2upjztnaf"
                                            />
                                        </g>
                                        <path
                                            d="M387.37,315.44c-10.86,6.84-12.61,16.63-4.25,24.67,4.95,4.75,12.8,8.1,22.11,9.44A59.35,59.35,0,0,0,431,347.68l-11.58-11.13-6.8-6.54Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "404.431px 332.815px" }}
                                            id="elbxp3fggxazd"
                                            className="animable"
                                        />
                                        <g id="elfwakcnsz0bi">
                                            <path
                                                d="M387.37,315.44c-10.86,6.84-12.61,16.63-4.25,24.67,4.95,4.75,12.8,8.1,22.11,9.44A59.35,59.35,0,0,0,431,347.68l-11.58-11.13-6.8-6.54Z"
                                                style={{ opacity: "0.3", transformOrigin: "404.431px 332.815px" }}
                                                className="animable"
                                                id="elc33zn9phpff"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g
                                id="freepik--coins-1--inject-699"
                                className="animable"
                                style={{ transformOrigin: "106.85px 378.303px" }}
                            >
                                <g
                                    id="freepik--coins--inject-699"
                                    className="animable"
                                    style={{ transformOrigin: "73.2098px 350.583px" }}
                                >
                                    <path
                                        d="M113.09,364.63A27.28,27.28,0,0,0,103,355.25c-16.58-9.57-43.45-9.57-60,0a27.36,27.36,0,0,0-10.14,9.38H30.49v8.67h0c.3,6,4.43,12,12.4,16.61,16.58,9.57,43.45,9.57,60,0,8-4.6,12.13-10.58,12.44-16.61h0v-8.67Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "72.91px 372.58px" }}
                                        id="elbdbaspa9ryg"
                                        className="animable"
                                    />
                                    <g id="els2yex88443a">
                                        <g
                                            style={{ opacity: "0.25", transformOrigin: "72.91px 372.58px" }}
                                            className="animable"
                                            id="el3kdd57fidfv"
                                        >
                                            <path
                                                d="M113.09,364.63A27.28,27.28,0,0,0,103,355.25c-16.58-9.57-43.45-9.57-60,0a27.36,27.36,0,0,0-10.14,9.38H30.49v8.67h0c.3,6,4.43,12,12.4,16.61,16.58,9.57,43.45,9.57,60,0,8-4.6,12.13-10.58,12.44-16.61h0v-8.67Z"
                                                id="elduqwfazdmv"
                                                className="animable"
                                                style={{ transformOrigin: "72.91px 372.58px" }}
                                            />
                                        </g>
                                    </g>
                                    <g id="ellalhzv58tu">
                                        <path
                                            d="M72.94,348.07c-10.87,0-21.73,2.39-30,7.18a27.36,27.36,0,0,0-10.14,9.38H30.49v8.67h0c.3,6,4.43,12,12.4,16.61,8.29,4.78,19.15,7.18,30,7.18Z"
                                            style={{ opacity: "0.1", transformOrigin: "51.715px 372.58px" }}
                                            className="animable"
                                            id="elzbt26hhs2nh"
                                        />
                                    </g>
                                    <g id="el76m0di40sto">
                                        <path
                                            d="M49.75,352.05a46,46,0,0,0-6.83,3.2,27.36,27.36,0,0,0-10.14,9.38H30.49v8.67h0c.3,6,4.43,12,12.4,16.61a47,47,0,0,0,6.83,3.2Z"
                                            style={{ opacity: "0.1", transformOrigin: "40.12px 372.58px" }}
                                            className="animable"
                                            id="elps1a7almxyq"
                                        />
                                    </g>
                                    <g id="elj5t5jrqhyz">
                                        <path
                                            d="M96.12,352.05a45.54,45.54,0,0,1,6.83,3.2,27.28,27.28,0,0,1,10.14,9.38h2.3v8.67h0c-.31,6-4.47,12-12.44,16.61a46.55,46.55,0,0,1-6.83,3.2Z"
                                            style={{
                                                fill: "#1A56DB",
                                                opacity: "0.5",
                                                transformOrigin: "105.755px 372.58px"
                                            }}
                                            className="animable"
                                            id="elxj7sjrtwkh"
                                        />
                                    </g>
                                    <path
                                        d="M103,347.3c-16.58-9.57-43.45-9.57-60,0s-16.58,25.09,0,34.66,43.45,9.57,60,0S119.53,356.87,103,347.3Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "72.9906px 364.63px" }}
                                        id="elh8xz7ar6wmo"
                                        className="animable"
                                    />
                                    <g id="el941cn2ou78">
                                        <path
                                            d="M103,347.3c-16.58-9.57-43.45-9.57-60,0s-16.58,25.09,0,34.66,43.45,9.57,60,0S119.53,356.87,103,347.3Z"
                                            style={{ opacity: "0.2", transformOrigin: "72.9906px 364.63px" }}
                                            className="animable"
                                            id="elyq6hymf5el9"
                                        />
                                    </g>
                                    <path
                                        d="M92.48,353.64c-5.25-2.69-12.18-4.17-19.55-4.17s-14.3,1.48-19.54,4.17c-5.56,2.85-8.62,6.76-8.62,11s3.06,8.14,8.62,11c5.24,2.69,12.19,4.17,19.54,4.17s14.3-1.48,19.55-4.17c5.55-2.85,8.61-6.75,8.61-11S98,356.49,92.48,353.64Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "72.93px 364.64px" }}
                                        id="el595y4rt0naw"
                                        className="animable"
                                    />
                                    <g id="elson4s1w9dzt">
                                        <path
                                            d="M92.48,353.64c-5.25-2.69-12.18-4.17-19.55-4.17s-14.3,1.48-19.54,4.17c-5.56,2.85-8.62,6.76-8.62,11s3.06,8.14,8.62,11c5.24,2.69,12.19,4.17,19.54,4.17s14.3-1.48,19.55-4.17c5.55-2.85,8.61-6.75,8.61-11S98,356.49,92.48,353.64Z"
                                            style={{ opacity: "0.4", transformOrigin: "72.93px 364.64px" }}
                                            className="animable"
                                            id="elx7ucseprflb"
                                        />
                                    </g>
                                    <path
                                        d="M102,348.9C94.29,344.43,84,342,72.93,342s-21.34,2.46-29.08,6.93c-7.43,4.29-11.51,9.87-11.51,15.73s4.08,11.45,11.51,15.73c7.74,4.46,18.06,6.93,29.08,6.93s21.36-2.47,29.1-6.93c7.42-4.28,11.51-9.87,11.51-15.73S109.45,353.19,102,348.9Zm-9.55,26.72c-5.25,2.69-12.18,4.17-19.55,4.17s-14.3-1.48-19.54-4.17c-5.56-2.85-8.62-6.75-8.62-11s3.06-8.14,8.62-11c5.24-2.69,12.19-4.17,19.54-4.17s14.3,1.48,19.55,4.17c5.55,2.85,8.61,6.76,8.61,11S98,372.77,92.48,375.62Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "72.94px 364.66px" }}
                                        id="el3rlcshnnpud"
                                        className="animable"
                                    />
                                    <g id="elqqrk6sf6k3k">
                                        <path
                                            d="M102,348.9C94.29,344.43,84,342,72.93,342s-21.34,2.46-29.08,6.93c-7.43,4.29-11.51,9.87-11.51,15.73s4.08,11.45,11.51,15.73c7.74,4.46,18.06,6.93,29.08,6.93s21.36-2.47,29.1-6.93c7.42-4.28,11.51-9.87,11.51-15.73S109.45,353.19,102,348.9Zm-9.55,26.72c-5.25,2.69-12.18,4.17-19.55,4.17s-14.3-1.48-19.54-4.17c-5.56-2.85-8.62-6.75-8.62-11s3.06-8.14,8.62-11c5.24-2.69,12.19-4.17,19.54-4.17s14.3,1.48,19.55,4.17c5.55,2.85,8.61,6.76,8.61,11S98,372.77,92.48,375.62Z"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.3",
                                                transformOrigin: "72.94px 364.66px"
                                            }}
                                            className="animable"
                                            id="eln81q0w54hx"
                                        />
                                    </g>
                                    <g id="eldrxigxh0w9h">
                                        <path
                                            d="M91.81,374.32c10.43-5.35,10.43-14,0-19.38s-27.33-5.35-37.75,0-10.43,14,0,19.38S81.39,379.67,91.81,374.32Z"
                                            style={{ opacity: "0.2", transformOrigin: "72.9369px 364.63px" }}
                                            className="animable"
                                            id="ely2z0g3a4ydh"
                                        />
                                    </g>
                                    <path
                                        d="M91.81,374.32c10.43-5.35,10.43-14,0-19.38s-27.33-5.35-37.75,0-10.43,14,0,19.38S81.39,379.67,91.81,374.32Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "72.9369px 364.63px" }}
                                        id="el9s5i2lsec3f"
                                        className="animable"
                                    />
                                    <g id="elmll0jipvcx">
                                        <path
                                            d="M91.81,374.32c10.43-5.35,10.43-14,0-19.38s-27.33-5.35-37.75,0-10.43,14,0,19.38S81.39,379.67,91.81,374.32Z"
                                            style={{ opacity: "0.45", transformOrigin: "72.9369px 364.63px" }}
                                            className="animable"
                                            id="elkp8xpc78x4q"
                                        />
                                    </g>
                                    <path
                                        d="M91.81,358.57c-10.42-5.35-27.33-5.35-37.75,0-4.31,2.21-6.84,5-7.58,7.87.74,2.88,3.27,5.66,7.58,7.88,10.42,5.35,27.33,5.35,37.75,0,4.32-2.22,6.84-5,7.59-7.88C98.65,363.56,96.13,360.78,91.81,358.57Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "72.94px 366.445px" }}
                                        id="el8cu3bb0z8uk"
                                        className="animable"
                                    />
                                    <g id="elqfv2sojaxz">
                                        <path
                                            d="M91.81,358.57c-10.42-5.35-27.33-5.35-37.75,0-4.31,2.21-6.84,5-7.58,7.87.74,2.88,3.27,5.66,7.58,7.88,10.42,5.35,27.33,5.35,37.75,0,4.32-2.22,6.84-5,7.59-7.88C98.65,363.56,96.13,360.78,91.81,358.57Z"
                                            style={{ opacity: "0.3", transformOrigin: "72.94px 366.445px" }}
                                            className="animable"
                                            id="el3hnnyzswmdb"
                                        />
                                    </g>
                                    <polygon
                                        points="75.47 355.15 75.47 359.06 74.13 360.48 71.66 363.06 71.66 358.99 75.47 355.15"
                                        style={{ fill: "#1A56DB", transformOrigin: "73.565px 359.105px" }}
                                        id="el384l9ds7z8g"
                                        className="animable"
                                    />
                                    <g id="elrsv3oexhth">
                                        <polygon
                                            points="75.47 355.15 75.47 359.06 74.13 360.48 71.66 363.06 71.66 358.99 75.47 355.15"
                                            style={{ opacity: "0.3", transformOrigin: "73.565px 359.105px" }}
                                            className="animable"
                                            id="elx1r1d9peufg"
                                        />
                                    </g>
                                    <path
                                        d="M71.66,359v2.31a22.58,22.58,0,0,1-3.8,1.08,4.16,4.16,0,0,1-1.63-.07,3.73,3.73,0,0,1-.78-.31c-.94-.57-1.09-1.4.7-2.44A6.27,6.27,0,0,1,71.66,359Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "68.2129px 360.525px" }}
                                        id="elkt7vztcql1s"
                                        className="animable"
                                    />
                                    <g id="el6yh61plzy4v">
                                        <path
                                            d="M71.66,359v2.31a22.58,22.58,0,0,1-3.8,1.08,4.16,4.16,0,0,1-1.63-.07,3.73,3.73,0,0,1-.78-.31c-.94-.57-1.09-1.4.7-2.44A6.27,6.27,0,0,1,71.66,359Z"
                                            style={{ opacity: "0.45", transformOrigin: "68.2129px 360.525px" }}
                                            className="animable"
                                            id="el4acoluh8f1v"
                                        />
                                    </g>
                                    <path
                                        d="M89.38,370.1v3.38L85.1,376l-3.17-1.83a16.15,16.15,0,0,1-12.26.56v-3.39l1.94-1.93-1.94.54a12.56,12.56,0,0,1-9.56-1.09c-1.92-1.11-2.81-2.32-2.8-3.57V362l.34-1.44-1.16-.68v-3.38l3.16,1.83c-1.54,1.2-2.36,2.43-2.34,3.63v0c0,1.22.93,2.4,2.8,3.48,4.17,2.4,8.29,1.61,12.07.4,3.52-1.15,6.08-2.5,8.11-1.33,1.25.73.87,1.61-.54,2.43a7,7,0,0,1-6,.35l-4,4a14.48,14.48,0,0,0,2.23.66,16.61,16.61,0,0,0,10-1.21l3.17,1.83Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "72.935px 366.25px" }}
                                        id="elpvqlkikjdp"
                                        className="animable"
                                    />
                                    <g id="el283qlfgvreu">
                                        <path
                                            d="M57.31,361.91v0c0,1.22.93,2.4,2.8,3.48,4.17,2.4,8.29,1.61,12.07.4,3.52-1.15,6.08-2.5,8.11-1.33,1.25.73.87,1.61-.54,2.43a7,7,0,0,1-6,.35l-4,4a14.48,14.48,0,0,0,2.23.66,16.61,16.61,0,0,0,10-1.21l3.17,1.83,4.28-2.47v3.38L85.1,376l-3.17-1.83a16.15,16.15,0,0,1-12.26.56v-3.39l1.94-1.93-1.94.54a12.56,12.56,0,0,1-9.56-1.09c-1.92-1.11-2.81-2.32-2.8-3.57V362l.34-1.44"
                                            style={{ opacity: "0.2", transformOrigin: "73.37px 368.28px" }}
                                            className="animable"
                                            id="el0dsm5oorpuf7"
                                        />
                                    </g>
                                    <g id="elxlh875oswu8">
                                        <path
                                            d="M56.49,356.45v3.38l1.16.68h0a6.86,6.86,0,0,1,2-2.24Z"
                                            style={{ opacity: "0.45", transformOrigin: "58.07px 358.48px" }}
                                            className="animable"
                                            id="elxu0g6rs156e"
                                        />
                                    </g>
                                    <path
                                        d="M88.67,367.89a4,4,0,0,1-.32,1.62l-2.15-1.24A4.22,4.22,0,0,0,88.64,365C88.65,366,88.67,367.8,88.67,367.89Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "87.4352px 367.255px" }}
                                        id="eliz0n9n4ht0f"
                                        className="animable"
                                    />
                                    <g id="elqxip54jq6k">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "87.4352px 367.255px" }}
                                            className="animable"
                                            id="elq6kf17di44o"
                                        >
                                            <path
                                                d="M88.67,367.89a4,4,0,0,1-.32,1.62l-2.15-1.24A4.22,4.22,0,0,0,88.64,365C88.65,366,88.67,367.8,88.67,367.89Z"
                                                id="el98jy74yuuns"
                                                className="animable"
                                                style={{ transformOrigin: "87.4352px 367.255px" }}
                                            />
                                        </g>
                                    </g>
                                    <path
                                        d="M88.66,369.69l-2.45-1.42a4.18,4.18,0,0,0,2.45-3.75,3.25,3.25,0,0,0,0-.33c-.11-1.17-1-2.3-2.74-3.32h0a11.17,11.17,0,0,0-5.69-1.49h-.54l-.51,0a3.44,3.44,0,0,0-.45,0l-.18,0-.34,0a24.24,24.24,0,0,0-2.77.57l-1.29.38-1.8.59-.67.23a20.81,20.81,0,0,1-3.8,1.08,3.86,3.86,0,0,1-1.64-.06,3.15,3.15,0,0,1-.76-.32c-.95-.55-1.1-1.39.69-2.43a6.27,6.27,0,0,1,5.51-.57l3.8-3.84a16.24,16.24,0,0,0-11.48.64L60.8,354l-4.31,2.49,3.17,1.83c-1.55,1.2-2.38,2.44-2.36,3.64v0c0,1.22.94,2.4,2.81,3.48,4.17,2.41,8.3,1.61,12.08.39,3.51-1.14,6.06-2.49,8.09-1.32,1.26.73.88,1.61-.53,2.42a6.93,6.93,0,0,1-6,.35l-4,4a16.55,16.55,0,0,0,2.24.65,14.93,14.93,0,0,0,3.91.29,18,18,0,0,0,6.11-1.5l3.18,1.84,4.27-2.47Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "72.975px 363.28px" }}
                                        id="elct7upd9e73"
                                        className="animable"
                                    />
                                    <g id="el85gusqqk1ao">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "72.975px 363.28px" }}
                                            className="animable"
                                            id="elnjo6g943mk"
                                        >
                                            <path
                                                d="M88.66,369.69l-2.45-1.42a4.18,4.18,0,0,0,2.45-3.75,3.25,3.25,0,0,0,0-.33c-.11-1.17-1-2.3-2.74-3.32h0a11.17,11.17,0,0,0-5.69-1.49h-.54l-.51,0a3.44,3.44,0,0,0-.45,0l-.18,0-.34,0a24.24,24.24,0,0,0-2.77.57l-1.29.38-1.8.59-.67.23a20.81,20.81,0,0,1-3.8,1.08,3.86,3.86,0,0,1-1.64-.06,3.15,3.15,0,0,1-.76-.32c-.95-.55-1.1-1.39.69-2.43a6.27,6.27,0,0,1,5.51-.57l3.8-3.84a16.24,16.24,0,0,0-11.48.64L60.8,354l-4.31,2.49,3.17,1.83c-1.55,1.2-2.38,2.44-2.36,3.64v0c0,1.22.94,2.4,2.81,3.48,4.17,2.41,8.3,1.61,12.08.39,3.51-1.14,6.06-2.49,8.09-1.32,1.26.73.88,1.61-.53,2.42a6.93,6.93,0,0,1-6,.35l-4,4a16.55,16.55,0,0,0,2.24.65,14.93,14.93,0,0,0,3.91.29,18,18,0,0,0,6.11-1.5l3.18,1.84,4.27-2.47Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    transformOrigin: "72.975px 363.28px"
                                                }}
                                                id="eltdg78rzg35k"
                                                className="animable"
                                            />
                                        </g>
                                    </g>
                                    <polygon
                                        points="81.93 370.74 81.93 374.12 85.1 375.95 85.1 372.57 81.93 370.74"
                                        style={{ fill: "#1A56DB", transformOrigin: "83.515px 373.345px" }}
                                        id="elric5myrhh3j"
                                        className="animable"
                                    />
                                    <g id="el8iezxo7jm68">
                                        <polygon
                                            points="81.93 370.74 81.93 374.12 85.1 375.95 85.1 372.57 81.93 370.74"
                                            style={{ opacity: "0.45", transformOrigin: "83.515px 373.345px" }}
                                            className="animable"
                                            id="elx7nybrchyeq"
                                        />
                                    </g>
                                    <g id="el1qklnj7k035">
                                        <polygon
                                            points="56.49 356.45 60.8 353.96 63.98 355.79 60.83 354.47 56.49 356.45"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "60.235px 355.205px"
                                            }}
                                            className="animable"
                                            id="el9encmbeo2pg"
                                        />
                                    </g>
                                    <g id="el4q54prh2nfj">
                                        <path
                                            d="M66.15,359.56a6.27,6.27,0,0,1,5.51-.57l3.8-3.84-3.8,3.44A5.78,5.78,0,0,0,66.15,359.56Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "70.805px 357.355px"
                                            }}
                                            className="animable"
                                            id="elodzule6qoq"
                                        />
                                    </g>
                                    <g id="elj44rsneudp">
                                        <path
                                            d="M69.66,371.3a16.55,16.55,0,0,0,2.24.65,14.93,14.93,0,0,0,3.91.29,13.8,13.8,0,0,1-5.51-1.1l3.41-3.87Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "72.735px 369.767px"
                                            }}
                                            className="animable"
                                            id="elavu9hpi15jb"
                                        />
                                    </g>
                                    <g id="elenkl4lrbmlu">
                                        <polygon
                                            points="81.93 370.74 85.1 372.17 89.37 370.11 85.1 372.57 81.93 370.74"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "85.65px 371.34px"
                                            }}
                                            className="animable"
                                            id="el2bj9w6mhyih"
                                        />
                                    </g>
                                    <g id="elebz8btvbpmq">
                                        <path
                                            d="M44.17,349.47c11.24-6.83,28.76-7.5,28.76-7.5-11,0-21.34,2.46-29.08,6.93-7.43,4.29-11.51,9.87-11.51,15.73C32.34,364.63,32.74,356.42,44.17,349.47Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "52.635px 353.3px"
                                            }}
                                            className="animable"
                                            id="elcxqse9gjqb"
                                        />
                                    </g>
                                    <g id="eldpplr8983zj">
                                        <path
                                            d="M69.66,389.07c11.93.53,24.17-1.84,33.29-7.11,9.49-5.48,13.55-12.9,12.18-20,0,0,1.77,11.65-12.89,19.61S69.66,389.07,69.66,389.07Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "92.5246px 375.551px"
                                            }}
                                            className="animable"
                                            id="elv7auvnur3a"
                                        />
                                    </g>
                                    <path
                                        d="M110.3,352.6a27.36,27.36,0,0,0-10.14-9.38c-16.57-9.57-43.45-9.57-60,0A27.44,27.44,0,0,0,30,352.6H27.7v8.67h0c.3,6,4.43,12,12.4,16.61,16.58,9.57,43.46,9.57,60,0,8-4.6,12.13-10.58,12.44-16.61h0V352.6Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "70.12px 360.55px" }}
                                        id="els58n1hi80m"
                                        className="animable"
                                    />
                                    <g id="elweu0nmvwpd">
                                        <g
                                            style={{ opacity: "0.25", transformOrigin: "70.12px 360.55px" }}
                                            className="animable"
                                            id="el0co7tsn51b2h"
                                        >
                                            <path
                                                d="M110.3,352.6a27.36,27.36,0,0,0-10.14-9.38c-16.57-9.57-43.45-9.57-60,0A27.44,27.44,0,0,0,30,352.6H27.7v8.67h0c.3,6,4.43,12,12.4,16.61,16.58,9.57,43.46,9.57,60,0,8-4.6,12.13-10.58,12.44-16.61h0V352.6Z"
                                                id="elntk0tikpwan"
                                                className="animable"
                                                style={{ transformOrigin: "70.12px 360.55px" }}
                                            />
                                        </g>
                                    </g>
                                    <g id="elofalv7oevx">
                                        <path
                                            d="M70.15,336c-10.86,0-21.73,2.4-30,7.18A27.44,27.44,0,0,0,30,352.6H27.7v8.67h0c.3,6,4.43,12,12.4,16.61,8.29,4.79,19.16,7.18,30,7.18Z"
                                            style={{ opacity: "0.1", transformOrigin: "48.925px 360.53px" }}
                                            className="animable"
                                            id="elu7k2pz15g9a"
                                        />
                                    </g>
                                    <g id="el6ictsqz39ha">
                                        <path
                                            d="M47,340a48.11,48.11,0,0,0-6.83,3.2A27.44,27.44,0,0,0,30,352.6H27.7v8.67h0c.3,6,4.43,12,12.4,16.61a46,46,0,0,0,6.83,3.2Z"
                                            style={{ opacity: "0.1", transformOrigin: "37.35px 360.54px" }}
                                            className="animable"
                                            id="ely8qgye35eca"
                                        />
                                    </g>
                                    <g id="elgqr290wruyd">
                                        <path
                                            d="M93.33,340a47.6,47.6,0,0,1,6.83,3.2,27.36,27.36,0,0,1,10.14,9.38h2.3v8.67h0c-.31,6-4.46,12-12.44,16.61a45.54,45.54,0,0,1-6.83,3.2Z"
                                            style={{
                                                fill: "#1A56DB",
                                                opacity: "0.5",
                                                transformOrigin: "102.965px 360.53px"
                                            }}
                                            className="animable"
                                            id="elg1gy6922n6"
                                        />
                                    </g>
                                    <path
                                        d="M100.16,335.27c-16.57-9.57-43.45-9.57-60,0s-16.58,25.09,0,34.66,43.46,9.58,60,0S116.74,344.85,100.16,335.27Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "70.1581px 352.602px" }}
                                        id="el8ud1n1u5q14"
                                        className="animable"
                                    />
                                    <g id="elupwlukigqvl">
                                        <path
                                            d="M100.16,335.27c-16.57-9.57-43.45-9.57-60,0s-16.58,25.09,0,34.66,43.46,9.58,60,0S116.74,344.85,100.16,335.27Z"
                                            style={{ opacity: "0.2", transformOrigin: "70.1581px 352.602px" }}
                                            className="animable"
                                            id="elfbb61uiw4o9"
                                        />
                                    </g>
                                    <path
                                        d="M89.7,341.62c-5.25-2.69-12.19-4.17-19.55-4.17s-14.3,1.48-19.55,4.17c-5.55,2.84-8.61,6.75-8.61,11s3.06,8.13,8.61,11c5.25,2.7,12.19,4.18,19.55,4.18s14.3-1.48,19.55-4.18c5.55-2.85,8.61-6.75,8.61-11S95.25,344.46,89.7,341.62Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "70.15px 352.625px" }}
                                        id="el5h9oazk4crv"
                                        className="animable"
                                    />
                                    <g id="eljc7hyiob6l">
                                        <path
                                            d="M89.7,341.62c-5.25-2.69-12.19-4.17-19.55-4.17s-14.3,1.48-19.55,4.17c-5.55,2.84-8.61,6.75-8.61,11s3.06,8.13,8.61,11c5.25,2.7,12.19,4.18,19.55,4.18s14.3-1.48,19.55-4.18c5.55-2.85,8.61-6.75,8.61-11S95.25,344.46,89.7,341.62Z"
                                            style={{ opacity: "0.4", transformOrigin: "70.15px 352.625px" }}
                                            className="animable"
                                            id="elulhemin2ffs"
                                        />
                                    </g>
                                    <path
                                        d="M99.24,336.88c-7.74-4.47-18.07-6.94-29.09-6.94s-21.35,2.47-29.09,6.94c-7.43,4.28-11.51,9.86-11.51,15.73s4.08,11.44,11.51,15.73c7.74,4.46,18.07,6.93,29.09,6.93s21.35-2.47,29.09-6.93c7.42-4.29,11.51-9.88,11.51-15.73S106.66,341.16,99.24,336.88ZM89.7,363.59c-5.25,2.7-12.19,4.18-19.55,4.18s-14.3-1.48-19.55-4.18c-5.55-2.85-8.61-6.75-8.61-11s3.06-8.15,8.61-11c5.25-2.69,12.19-4.17,19.55-4.17s14.3,1.48,19.55,4.17c5.55,2.84,8.61,6.75,8.61,11S95.25,360.74,89.7,363.59Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "70.15px 352.605px" }}
                                        id="els59y7rfuix"
                                        className="animable"
                                    />
                                    <g id="elx9cax94o6nj">
                                        <path
                                            d="M99.24,336.88c-7.74-4.47-18.07-6.94-29.09-6.94s-21.35,2.47-29.09,6.94c-7.43,4.28-11.51,9.86-11.51,15.73s4.08,11.44,11.51,15.73c7.74,4.46,18.07,6.93,29.09,6.93s21.35-2.47,29.09-6.93c7.42-4.29,11.51-9.88,11.51-15.73S106.66,341.16,99.24,336.88ZM89.7,363.59c-5.25,2.7-12.19,4.18-19.55,4.18s-14.3-1.48-19.55-4.18c-5.55-2.85-8.61-6.75-8.61-11s3.06-8.15,8.61-11c5.25-2.69,12.19-4.17,19.55-4.17s14.3,1.48,19.55,4.17c5.55,2.84,8.61,6.75,8.61,11S95.25,360.74,89.7,363.59Z"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.3",
                                                transformOrigin: "70.15px 352.605px"
                                            }}
                                            className="animable"
                                            id="eln3cem33o0wf"
                                        />
                                    </g>
                                    <g id="el92asu9nhokr">
                                        <path
                                            d="M89,362.29c10.42-5.35,10.42-14,0-19.38s-27.33-5.35-37.76,0-10.43,14,0,19.38S78.6,367.64,89,362.29Z"
                                            style={{ opacity: "0.2", transformOrigin: "70.1163px 352.6px" }}
                                            className="animable"
                                            id="el4nqw2mc9ijh"
                                        />
                                    </g>
                                    <path
                                        d="M89,362.29c10.42-5.35,10.42-14,0-19.38s-27.33-5.35-37.76,0-10.43,14,0,19.38S78.6,367.64,89,362.29Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "70.1163px 352.6px" }}
                                        id="elwczt5x1v45"
                                        className="animable"
                                    />
                                    <g id="el98nkfjqv3in">
                                        <path
                                            d="M89,362.29c10.42-5.35,10.42-14,0-19.38s-27.33-5.35-37.76,0-10.43,14,0,19.38S78.6,367.64,89,362.29Z"
                                            style={{ opacity: "0.45", transformOrigin: "70.1163px 352.6px" }}
                                            className="animable"
                                            id="elwoi1es2iujq"
                                        />
                                    </g>
                                    <path
                                        d="M89,346.54c-10.43-5.35-27.33-5.35-37.76,0-4.31,2.22-6.84,5-7.58,7.88.74,2.88,3.27,5.66,7.58,7.87,10.43,5.35,27.33,5.35,37.76,0,4.31-2.21,6.83-5,7.58-7.87C95.86,351.54,93.34,348.76,89,346.54Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "70.12px 354.415px" }}
                                        id="elnlm7wrc0cc"
                                        className="animable"
                                    />
                                    <g id="ely7igr53mj6">
                                        <path
                                            d="M89,346.54c-10.43-5.35-27.33-5.35-37.76,0-4.31,2.22-6.84,5-7.58,7.88.74,2.88,3.27,5.66,7.58,7.87,10.43,5.35,27.33,5.35,37.76,0,4.31-2.21,6.83-5,7.58-7.87C95.86,351.54,93.34,348.76,89,346.54Z"
                                            style={{ opacity: "0.3", transformOrigin: "70.12px 354.415px" }}
                                            className="animable"
                                            id="elfccepfdqm0j"
                                        />
                                    </g>
                                    <polygon
                                        points="72.68 343.12 72.68 347.04 71.34 348.45 68.87 351.04 68.87 346.96 72.68 343.12"
                                        style={{ fill: "#1A56DB", transformOrigin: "70.775px 347.08px" }}
                                        id="elvxmx778lkvk"
                                        className="animable"
                                    />
                                    <g id="elr7u20labya8">
                                        <polygon
                                            points="72.68 343.12 72.68 347.04 71.34 348.45 68.87 351.04 68.87 346.96 72.68 343.12"
                                            style={{ opacity: "0.3", transformOrigin: "70.775px 347.08px" }}
                                            className="animable"
                                            id="elwnn0r18xqx"
                                        />
                                    </g>
                                    <path
                                        d="M68.87,347v2.31a22.32,22.32,0,0,1-3.8,1.08,4,4,0,0,1-1.63-.06,3.69,3.69,0,0,1-.77-.32c-1-.56-1.1-1.4.7-2.43A6.25,6.25,0,0,1,68.87,347Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "65.4139px 348.53px" }}
                                        id="el6tfvs6wrf4e"
                                        className="animable"
                                    />
                                    <g id="elw9puj5ss5fc">
                                        <path
                                            d="M68.87,347v2.31a22.32,22.32,0,0,1-3.8,1.08,4,4,0,0,1-1.63-.06,3.69,3.69,0,0,1-.77-.32c-1-.56-1.1-1.4.7-2.43A6.25,6.25,0,0,1,68.87,347Z"
                                            style={{ opacity: "0.45", transformOrigin: "65.4139px 348.53px" }}
                                            className="animable"
                                            id="elxoay54l72do"
                                        />
                                    </g>
                                    <path
                                        d="M86.59,358.08v3.38l-4.28,2.47-3.17-1.83a16.15,16.15,0,0,1-12.26.55v-3.38l1.94-1.93-1.94.53a12.49,12.49,0,0,1-9.55-1.09c-1.92-1.1-2.81-2.32-2.81-3.57v-3.28l.35-1.44-1.17-.68v-3.39l3.17,1.84c-1.55,1.19-2.37,2.43-2.35,3.63v0c0,1.21.93,2.39,2.81,3.47,4.16,2.41,8.29,1.61,12.07.4,3.51-1.15,6.07-2.49,8.1-1.33,1.26.73.87,1.62-.54,2.43a7,7,0,0,1-6,.35l-4.05,4a14,14,0,0,0,2.23.65,16.67,16.67,0,0,0,10-1.2l3.17,1.83Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "70.145px 354.175px" }}
                                        id="el6teeorbzpng"
                                        className="animable"
                                    />
                                    <g id="elh8ht4qx9afa">
                                        <path
                                            d="M54.52,349.89v0c0,1.21.93,2.39,2.81,3.47,4.16,2.41,8.29,1.61,12.07.4,3.51-1.15,6.07-2.49,8.1-1.33,1.26.73.87,1.62-.54,2.43a7,7,0,0,1-6,.35l-4.05,4a14,14,0,0,0,2.23.65,16.67,16.67,0,0,0,10-1.2l3.17,1.83,4.28-2.47v3.38l-4.28,2.47-3.17-1.83a16.15,16.15,0,0,1-12.26.55v-3.38l1.94-1.93-1.94.53a12.49,12.49,0,0,1-9.55-1.09c-1.92-1.1-2.81-2.32-2.81-3.57v-3.28l.35-1.44"
                                            style={{ opacity: "0.2", transformOrigin: "70.555px 356.15px" }}
                                            className="animable"
                                            id="eldhajfob4oz"
                                        />
                                    </g>
                                    <g id="el6oph4mgae5">
                                        <path
                                            d="M53.7,344.42v3.39l1.17.68h0a6.79,6.79,0,0,1,2-2.24Z"
                                            style={{ opacity: "0.45", transformOrigin: "55.285px 346.455px" }}
                                            className="animable"
                                            id="elzk0naqp2z7"
                                        />
                                    </g>
                                    <path
                                        d="M85.88,355.87a3.91,3.91,0,0,1-.32,1.61l-2.14-1.23A4.2,4.2,0,0,0,85.85,353C85.86,353.92,85.88,355.78,85.88,355.87Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "84.6502px 355.24px" }}
                                        id="el01rfn4eanavt"
                                        className="animable"
                                    />
                                    <g id="eld0w8vz8exdm">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "84.6502px 355.24px" }}
                                            className="animable"
                                            id="elx4gqx0c5tyh"
                                        >
                                            <path
                                                d="M85.88,355.87a3.91,3.91,0,0,1-.32,1.61l-2.14-1.23A4.2,4.2,0,0,0,85.85,353C85.86,353.92,85.88,355.78,85.88,355.87Z"
                                                id="el02lf2ciemeae"
                                                className="animable"
                                                style={{ transformOrigin: "84.6502px 355.24px" }}
                                            />
                                        </g>
                                    </g>
                                    <path
                                        d="M85.87,357.67l-2.45-1.42a4.18,4.18,0,0,0,2.45-3.76c0-.12,0-.22,0-.33-.1-1.17-1-2.3-2.73-3.32h0a11.27,11.27,0,0,0-5.7-1.48h-.54l-.51,0-.45,0-.18,0-.34,0a22.66,22.66,0,0,0-2.77.58c-.43.11-.87.24-1.29.38-.62.19-1.22.39-1.79.58l-.68.24a21.19,21.19,0,0,1-3.8,1.08,4,4,0,0,1-1.63-.07,3.65,3.65,0,0,1-.77-.31c-1-.56-1.1-1.39.69-2.43a6.27,6.27,0,0,1,5.51-.58l3.81-3.84a16.37,16.37,0,0,0-11.49.64L58,341.94l-4.32,2.49,3.17,1.82c-1.55,1.2-2.38,2.44-2.35,3.64v0c0,1.22.93,2.4,2.81,3.48,4.17,2.41,8.29,1.62,12.07.4,3.51-1.15,6.07-2.5,8.09-1.33,1.27.73.88,1.61-.53,2.43a7,7,0,0,1-6,.35l-4.06,4a15.66,15.66,0,0,0,2.24.66,15,15,0,0,0,3.91.28,18,18,0,0,0,6.12-1.49l3.17,1.83,4.27-2.47Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "70.135px 351.22px" }}
                                        id="el20vhzkab8ad"
                                        className="animable"
                                    />
                                    <g id="el7gt4des5ig5">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "70.135px 351.22px" }}
                                            className="animable"
                                            id="elpv3gqh0xzbq"
                                        >
                                            <path
                                                d="M85.87,357.67l-2.45-1.42a4.18,4.18,0,0,0,2.45-3.76c0-.12,0-.22,0-.33-.1-1.17-1-2.3-2.73-3.32h0a11.27,11.27,0,0,0-5.7-1.48h-.54l-.51,0-.45,0-.18,0-.34,0a22.66,22.66,0,0,0-2.77.58c-.43.11-.87.24-1.29.38-.62.19-1.22.39-1.79.58l-.68.24a21.19,21.19,0,0,1-3.8,1.08,4,4,0,0,1-1.63-.07,3.65,3.65,0,0,1-.77-.31c-1-.56-1.1-1.39.69-2.43a6.27,6.27,0,0,1,5.51-.58l3.81-3.84a16.37,16.37,0,0,0-11.49.64L58,341.94l-4.32,2.49,3.17,1.82c-1.55,1.2-2.38,2.44-2.35,3.64v0c0,1.22.93,2.4,2.81,3.48,4.17,2.41,8.29,1.62,12.07.4,3.51-1.15,6.07-2.5,8.09-1.33,1.27.73.88,1.61-.53,2.43a7,7,0,0,1-6,.35l-4.06,4a15.66,15.66,0,0,0,2.24.66,15,15,0,0,0,3.91.28,18,18,0,0,0,6.12-1.49l3.17,1.83,4.27-2.47Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    transformOrigin: "70.135px 351.22px"
                                                }}
                                                id="eltd8vsi26who"
                                                className="animable"
                                            />
                                        </g>
                                    </g>
                                    <polygon
                                        points="79.14 358.72 79.14 362.1 82.31 363.93 82.31 360.55 79.14 358.72"
                                        style={{ fill: "#1A56DB", transformOrigin: "80.725px 361.325px" }}
                                        id="el3lycjz1y67n"
                                        className="animable"
                                    />
                                    <g id="elentcncljetp">
                                        <polygon
                                            points="79.14 358.72 79.14 362.1 82.31 363.93 82.31 360.55 79.14 358.72"
                                            style={{ opacity: "0.45", transformOrigin: "80.725px 361.325px" }}
                                            className="animable"
                                            id="elt8vq53rii8"
                                        />
                                    </g>
                                    <g id="ela3htruikxt4">
                                        <polygon
                                            points="53.7 344.43 58.02 341.94 61.19 343.76 58.04 342.44 53.7 344.43"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "57.445px 343.185px"
                                            }}
                                            className="animable"
                                            id="el6jbe8icf25b"
                                        />
                                    </g>
                                    <g id="elmo6ykbjy85e">
                                        <path
                                            d="M63.36,347.54a6.27,6.27,0,0,1,5.51-.58l3.81-3.84-3.81,3.45A5.78,5.78,0,0,0,63.36,347.54Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "68.02px 345.33px"
                                            }}
                                            className="animable"
                                            id="el0ycas1ejyepa"
                                        />
                                    </g>
                                    <g id="eliif5elg0jl">
                                        <path
                                            d="M66.87,359.27a15.66,15.66,0,0,0,2.24.66,15,15,0,0,0,3.91.28,13.8,13.8,0,0,1-5.51-1.1l3.42-3.86Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "69.945px 357.743px"
                                            }}
                                            className="animable"
                                            id="ella71ipozubc"
                                        />
                                    </g>
                                    <g id="elqf48lg1ul8">
                                        <polygon
                                            points="79.14 358.72 82.31 360.15 86.58 358.08 82.31 360.55 79.14 358.72"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "82.86px 359.315px"
                                            }}
                                            className="animable"
                                            id="el8gseurqzpz6"
                                        />
                                    </g>
                                    <g id="elxei7pcj1z2d">
                                        <path
                                            d="M41.38,337.45c11.24-6.83,28.77-7.51,28.77-7.51-11,0-21.35,2.47-29.09,6.94-7.43,4.28-11.51,9.86-11.51,15.73C29.55,352.61,30,344.39,41.38,337.45Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "49.85px 341.275px"
                                            }}
                                            className="animable"
                                            id="elmlau8fyfpdq"
                                        />
                                    </g>
                                    <g id="eljp6setorcx">
                                        <path
                                            d="M66.87,377c11.93.53,24.17-1.84,33.29-7.11,9.49-5.47,13.55-12.9,12.18-20,0,0,1.77,11.64-12.89,19.61S66.87,377,66.87,377Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "89.7346px 363.481px"
                                            }}
                                            className="animable"
                                            id="el2gt3x9uay3o"
                                        />
                                    </g>
                                    <path
                                        d="M116.38,340.45a27.44,27.44,0,0,0-10.14-9.38c-16.58-9.57-43.46-9.57-60,0a27.36,27.36,0,0,0-10.14,9.38h-2.3v8.67h0c.31,6,4.44,12,12.41,16.61,16.57,9.57,43.45,9.57,60,0,8-4.6,12.13-10.58,12.43-16.61h0v-8.67Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "76.22px 348.4px" }}
                                        id="elkprqpc2ntf"
                                        className="animable"
                                    />
                                    <g id="ele3fx8m53po7">
                                        <g
                                            style={{ opacity: "0.25", transformOrigin: "76.22px 348.4px" }}
                                            className="animable"
                                            id="elk8ryq0sdca"
                                        >
                                            <path
                                                d="M116.38,340.45a27.44,27.44,0,0,0-10.14-9.38c-16.58-9.57-43.46-9.57-60,0a27.36,27.36,0,0,0-10.14,9.38h-2.3v8.67h0c.31,6,4.44,12,12.41,16.61,16.57,9.57,43.45,9.57,60,0,8-4.6,12.13-10.58,12.43-16.61h0v-8.67Z"
                                                id="elkl017yncsa"
                                                className="animable"
                                                style={{ transformOrigin: "76.22px 348.4px" }}
                                            />
                                        </g>
                                    </g>
                                    <g id="el63iemzt4aax">
                                        <path
                                            d="M76.23,323.89c-10.87,0-21.73,2.4-30,7.18a27.36,27.36,0,0,0-10.14,9.38h-2.3v8.67h0c.31,6,4.44,12,12.41,16.61,8.29,4.79,19.15,7.18,30,7.18Z"
                                            style={{ opacity: "0.1", transformOrigin: "55.01px 348.4px" }}
                                            className="animable"
                                            id="el9g7f281hlp"
                                        />
                                    </g>
                                    <g id="elvfxe918b619">
                                        <path
                                            d="M53,327.87a46.55,46.55,0,0,0-6.83,3.2,27.36,27.36,0,0,0-10.14,9.38h-2.3v8.67h0c.31,6,4.44,12,12.41,16.61a45.54,45.54,0,0,0,6.83,3.2Z"
                                            style={{ opacity: "0.1", transformOrigin: "43.365px 348.4px" }}
                                            className="animable"
                                            id="elkzt59astdr"
                                        />
                                    </g>
                                    <g id="elckcojv3eg3l">
                                        <path
                                            d="M99.41,327.87a47,47,0,0,1,6.83,3.2,27.44,27.44,0,0,1,10.14,9.38h2.29v8.67h0c-.3,6-4.46,12-12.43,16.61a46,46,0,0,1-6.83,3.2Z"
                                            style={{
                                                fill: "#1A56DB",
                                                opacity: "0.5",
                                                transformOrigin: "109.04px 348.4px"
                                            }}
                                            className="animable"
                                            id="elwubia344ckd"
                                        />
                                    </g>
                                    <path
                                        d="M106.24,323.12c-16.58-9.57-43.46-9.57-60,0s-16.58,25.09,0,34.66,43.45,9.58,60,0S122.82,332.7,106.24,323.12Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "76.2419px 340.452px" }}
                                        id="elkcssdd812mg"
                                        className="animable"
                                    />
                                    <g id="el1rtsexkre5d">
                                        <path
                                            d="M106.24,323.12c-16.58-9.57-43.46-9.57-60,0s-16.58,25.09,0,34.66,43.45,9.58,60,0S122.82,332.7,106.24,323.12Z"
                                            style={{ opacity: "0.2", transformOrigin: "76.2419px 340.452px" }}
                                            className="animable"
                                            id="elllwwh7nykw"
                                        />
                                    </g>
                                    <path
                                        d="M95.77,329.47c-5.25-2.69-12.19-4.17-19.55-4.17s-14.3,1.48-19.54,4.17c-5.56,2.84-8.62,6.75-8.62,11s3.06,8.13,8.62,11c5.24,2.7,12.19,4.18,19.54,4.18s14.3-1.48,19.55-4.18c5.55-2.85,8.61-6.75,8.61-11S101.32,332.31,95.77,329.47Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "76.22px 340.475px" }}
                                        id="elhkvn0o3zjj8"
                                        className="animable"
                                    />
                                    <g id="elaub4kmsjhht">
                                        <path
                                            d="M95.77,329.47c-5.25-2.69-12.19-4.17-19.55-4.17s-14.3,1.48-19.54,4.17c-5.56,2.84-8.62,6.75-8.62,11s3.06,8.13,8.62,11c5.24,2.7,12.19,4.18,19.54,4.18s14.3-1.48,19.55-4.18c5.55-2.85,8.61-6.75,8.61-11S101.32,332.31,95.77,329.47Z"
                                            style={{ opacity: "0.4", transformOrigin: "76.22px 340.475px" }}
                                            className="animable"
                                            id="elzku6jqc9i1r"
                                        />
                                    </g>
                                    <path
                                        d="M105.32,324.73c-7.74-4.47-18.08-6.94-29.1-6.94s-21.35,2.47-29.09,6.94c-7.42,4.28-11.51,9.86-11.51,15.73s4.09,11.44,11.51,15.73c7.74,4.46,18.07,6.92,29.09,6.92s21.36-2.46,29.1-6.92c7.41-4.29,11.51-9.88,11.51-15.73S112.73,329,105.32,324.73Zm-9.55,26.71c-5.25,2.7-12.19,4.18-19.55,4.18s-14.3-1.48-19.54-4.18c-5.56-2.85-8.62-6.75-8.62-11s3.06-8.15,8.62-11c5.24-2.69,12.19-4.17,19.54-4.17s14.3,1.48,19.55,4.17c5.55,2.84,8.61,6.75,8.61,11S101.32,348.59,95.77,351.44Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "76.225px 340.45px" }}
                                        id="el6w1zl8r6c8f"
                                        className="animable"
                                    />
                                    <g id="el3pvoks37g3t">
                                        <path
                                            d="M105.32,324.73c-7.74-4.47-18.08-6.94-29.1-6.94s-21.35,2.47-29.09,6.94c-7.42,4.28-11.51,9.86-11.51,15.73s4.09,11.44,11.51,15.73c7.74,4.46,18.07,6.92,29.09,6.92s21.36-2.46,29.1-6.92c7.41-4.29,11.51-9.88,11.51-15.73S112.73,329,105.32,324.73Zm-9.55,26.71c-5.25,2.7-12.19,4.18-19.55,4.18s-14.3-1.48-19.54-4.18c-5.56-2.85-8.62-6.75-8.62-11s3.06-8.15,8.62-11c5.24-2.69,12.19-4.17,19.54-4.17s14.3,1.48,19.55,4.17c5.55,2.84,8.61,6.75,8.61,11S101.32,348.59,95.77,351.44Z"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.3",
                                                transformOrigin: "76.225px 340.45px"
                                            }}
                                            className="animable"
                                            id="elb9068xncgz7"
                                        />
                                    </g>
                                    <g id="el83tgz321h5i">
                                        <path
                                            d="M95.1,350.14c10.43-5.35,10.43-14,0-19.38s-27.33-5.35-37.76,0-10.42,14,0,19.38S84.68,355.49,95.1,350.14Z"
                                            style={{ opacity: "0.2", transformOrigin: "76.2219px 340.45px" }}
                                            className="animable"
                                            id="elffik5vt6nko"
                                        />
                                    </g>
                                    <path
                                        d="M95.1,350.14c10.43-5.35,10.43-14,0-19.38s-27.33-5.35-37.76,0-10.42,14,0,19.38S84.68,355.49,95.1,350.14Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "76.2219px 340.45px" }}
                                        id="eldcnxwdrpxg5"
                                        className="animable"
                                    />
                                    <g id="elesjemzszute">
                                        <path
                                            d="M95.1,350.14c10.43-5.35,10.43-14,0-19.38s-27.33-5.35-37.76,0-10.42,14,0,19.38S84.68,355.49,95.1,350.14Z"
                                            style={{ opacity: "0.45", transformOrigin: "76.2219px 340.45px" }}
                                            className="animable"
                                            id="el7u11nofgw3r"
                                        />
                                    </g>
                                    <path
                                        d="M95.1,334.39c-10.43-5.35-27.33-5.35-37.76,0-4.31,2.22-6.83,5-7.58,7.88.75,2.88,3.27,5.66,7.58,7.87,10.43,5.35,27.34,5.35,37.76,0,4.31-2.21,6.84-5,7.58-7.87C101.94,339.39,99.41,336.61,95.1,334.39Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "76.22px 342.265px" }}
                                        id="elfvqf6b7zs78"
                                        className="animable"
                                    />
                                    <g id="el9g43tpral1i">
                                        <path
                                            d="M95.1,334.39c-10.43-5.35-27.33-5.35-37.76,0-4.31,2.22-6.83,5-7.58,7.88.75,2.88,3.27,5.66,7.58,7.87,10.43,5.35,27.34,5.35,37.76,0,4.31-2.21,6.84-5,7.58-7.87C101.94,339.39,99.41,336.61,95.1,334.39Z"
                                            style={{ opacity: "0.3", transformOrigin: "76.22px 342.265px" }}
                                            className="animable"
                                            id="eln7tkxyxrn8g"
                                        />
                                    </g>
                                    <polygon
                                        points="78.75 330.97 78.75 334.89 77.42 336.3 74.94 338.89 74.94 334.81 78.75 330.97"
                                        style={{ fill: "#1A56DB", transformOrigin: "76.845px 334.93px" }}
                                        id="elnzw4w9ktu08"
                                        className="animable"
                                    />
                                    <g id="elkeo8sc9oox8">
                                        <polygon
                                            points="78.75 330.97 78.75 334.89 77.42 336.3 74.94 338.89 74.94 334.81 78.75 330.97"
                                            style={{ opacity: "0.3", transformOrigin: "76.845px 334.93px" }}
                                            className="animable"
                                            id="elmty73t3b8l"
                                        />
                                    </g>
                                    <path
                                        d="M74.94,334.81v2.31a22.07,22.07,0,0,1-3.8,1.08,3.93,3.93,0,0,1-1.62-.06,3.77,3.77,0,0,1-.78-.32c-.94-.56-1.09-1.4.7-2.43A6.25,6.25,0,0,1,74.94,334.81Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "71.4979px 336.341px" }}
                                        id="elkfcc7dmk2qa"
                                        className="animable"
                                    />
                                    <g id="eljx2noet505">
                                        <path
                                            d="M74.94,334.81v2.31a22.07,22.07,0,0,1-3.8,1.08,3.93,3.93,0,0,1-1.62-.06,3.77,3.77,0,0,1-.78-.32c-.94-.56-1.09-1.4.7-2.43A6.25,6.25,0,0,1,74.94,334.81Z"
                                            style={{ opacity: "0.45", transformOrigin: "71.4979px 336.341px" }}
                                            className="animable"
                                            id="elyhspcxz3ew"
                                        />
                                    </g>
                                    <path
                                        d="M92.66,345.93v3.38l-4.28,2.47L85.22,350A16.18,16.18,0,0,1,73,350.5v-3.38l2-1.93-2,.53a12.49,12.49,0,0,1-9.55-1.09c-1.92-1.11-2.81-2.32-2.81-3.57v-3.29l.35-1.43-1.17-.68v-3.39l3.17,1.84c-1.55,1.19-2.37,2.43-2.35,3.63v0c0,1.22.94,2.4,2.81,3.48,4.17,2.41,8.29,1.61,12.07.4,3.52-1.15,6.08-2.49,8.1-1.33,1.26.73.88,1.62-.53,2.43a7,7,0,0,1-6,.35l-4,4a13.79,13.79,0,0,0,2.24.65,16.69,16.69,0,0,0,10-1.2l3.16,1.83Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "76.24px 342.025px" }}
                                        id="elnlu6dn5styn"
                                        className="animable"
                                    />
                                    <g id="elrxa88jqib4e">
                                        <path
                                            d="M60.59,337.74v0c0,1.22.94,2.4,2.81,3.48,4.17,2.41,8.29,1.61,12.07.4,3.52-1.15,6.08-2.49,8.1-1.33,1.26.73.88,1.62-.53,2.43a7,7,0,0,1-6,.35l-4,4a13.79,13.79,0,0,0,2.24.65,16.69,16.69,0,0,0,10-1.2l3.16,1.83,4.28-2.47v3.38l-4.28,2.47L85.22,350A16.18,16.18,0,0,1,73,350.5v-3.38l2-1.93-2,.53a12.49,12.49,0,0,1-9.55-1.09c-1.92-1.11-2.81-2.32-2.81-3.57v-3.29l.35-1.43"
                                            style={{ opacity: "0.2", transformOrigin: "76.655px 344.035px" }}
                                            className="animable"
                                            id="elxvadlkt5fnr"
                                        />
                                    </g>
                                    <g id="el8r1tlcjbepl">
                                        <path
                                            d="M59.77,332.27v3.39l1.17.68h0a6.93,6.93,0,0,1,2-2.24Z"
                                            style={{ opacity: "0.45", transformOrigin: "61.355px 334.305px" }}
                                            className="animable"
                                            id="el5tplp7nmg7i"
                                        />
                                    </g>
                                    <path
                                        d="M92,343.72a4.09,4.09,0,0,1-.31,1.61l-2.15-1.23a4.2,4.2,0,0,0,2.43-3.26C91.94,341.77,92,343.63,92,343.72Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "90.7701px 343.085px" }}
                                        id="elsafybqg1gcs"
                                        className="animable"
                                    />
                                    <g id="elmt7ugph7drk">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "90.7701px 343.085px" }}
                                            className="animable"
                                            id="el30udhpclm9h"
                                        >
                                            <path
                                                d="M92,343.72a4.09,4.09,0,0,1-.31,1.61l-2.15-1.23a4.2,4.2,0,0,0,2.43-3.26C91.94,341.77,92,343.63,92,343.72Z"
                                                id="elcf8cddefzab"
                                                className="animable"
                                                style={{ transformOrigin: "90.7701px 343.085px" }}
                                            />
                                        </g>
                                    </g>
                                    <path
                                        d="M92,345.52,89.5,344.1A4.18,4.18,0,0,0,92,340.34c0-.12,0-.22,0-.33-.11-1.17-1-2.3-2.74-3.32h0a11.27,11.27,0,0,0-5.7-1.48H83l-.51,0-.44,0-.18,0-.34,0a21.9,21.9,0,0,0-2.77.58c-.44.11-.87.24-1.3.38l-1.79.58-.68.24a21.36,21.36,0,0,1-3.79,1.08,4,4,0,0,1-1.64-.07,3.57,3.57,0,0,1-.76-.31c-1-.56-1.11-1.39.69-2.43a6.26,6.26,0,0,1,5.5-.58L78.75,331a16.32,16.32,0,0,0-11.49.64l-3.17-1.83-4.32,2.5,3.17,1.82c-1.54,1.2-2.37,2.44-2.35,3.64v0c0,1.22.93,2.4,2.81,3.48,4.17,2.41,8.3,1.62,12.07.4,3.51-1.15,6.07-2.5,8.1-1.33,1.26.73.88,1.61-.53,2.43a7,7,0,0,1-6,.35l-4,4a14.57,14.57,0,0,0,6.14.94,18,18,0,0,0,6.12-1.49l3.17,1.83,4.28-2.47Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "76.26px 339.095px" }}
                                        id="el3ed6n5blrpw"
                                        className="animable"
                                    />
                                    <g id="eliksiy2dgxy">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "76.26px 339.095px" }}
                                            className="animable"
                                            id="elhofijgi3a5k"
                                        >
                                            <path
                                                d="M92,345.52,89.5,344.1A4.18,4.18,0,0,0,92,340.34c0-.12,0-.22,0-.33-.11-1.17-1-2.3-2.74-3.32h0a11.27,11.27,0,0,0-5.7-1.48H83l-.51,0-.44,0-.18,0-.34,0a21.9,21.9,0,0,0-2.77.58c-.44.11-.87.24-1.3.38l-1.79.58-.68.24a21.36,21.36,0,0,1-3.79,1.08,4,4,0,0,1-1.64-.07,3.57,3.57,0,0,1-.76-.31c-1-.56-1.11-1.39.69-2.43a6.26,6.26,0,0,1,5.5-.58L78.75,331a16.32,16.32,0,0,0-11.49.64l-3.17-1.83-4.32,2.5,3.17,1.82c-1.54,1.2-2.37,2.44-2.35,3.64v0c0,1.22.93,2.4,2.81,3.48,4.17,2.41,8.3,1.62,12.07.4,3.51-1.15,6.07-2.5,8.1-1.33,1.26.73.88,1.61-.53,2.43a7,7,0,0,1-6,.35l-4,4a14.57,14.57,0,0,0,6.14.94,18,18,0,0,0,6.12-1.49l3.17,1.83,4.28-2.47Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    transformOrigin: "76.26px 339.095px"
                                                }}
                                                id="elrrmhg6dk4hm"
                                                className="animable"
                                            />
                                        </g>
                                    </g>
                                    <polygon
                                        points="85.21 346.57 85.21 349.95 88.38 351.78 88.38 348.4 85.21 346.57"
                                        style={{ fill: "#1A56DB", transformOrigin: "86.795px 349.175px" }}
                                        id="els2ag9x3l8i"
                                        className="animable"
                                    />
                                    <g id="elxqhug4np4g">
                                        <polygon
                                            points="85.21 346.57 85.21 349.95 88.38 351.78 88.38 348.4 85.21 346.57"
                                            style={{ opacity: "0.45", transformOrigin: "86.795px 349.175px" }}
                                            className="animable"
                                            id="el3dtacgydh8j"
                                        />
                                    </g>
                                    <g id="ella4j7tpfnli">
                                        <polygon
                                            points="59.77 332.28 64.09 329.79 67.26 331.61 64.12 330.29 59.77 332.28"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "63.515px 331.035px"
                                            }}
                                            className="animable"
                                            id="el3l2pkjcrooe"
                                        />
                                    </g>
                                    <g id="el9mpk8rikeq7">
                                        <path
                                            d="M69.44,335.39a6.26,6.26,0,0,1,5.5-.58L78.75,331l-3.81,3.45A5.76,5.76,0,0,0,69.44,335.39Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "74.095px 333.195px"
                                            }}
                                            className="animable"
                                            id="el9i8uq0u6ef8"
                                        />
                                    </g>
                                    <g id="el8zggsi9jf1j">
                                        <path
                                            d="M73,347.12a14.57,14.57,0,0,0,6.14.94,13.76,13.76,0,0,1-5.5-1.1L77,343.1Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "76.07px 345.594px"
                                            }}
                                            className="animable"
                                            id="elmsbjvpjft1"
                                        />
                                    </g>
                                    <g id="el7wm7a9lznnk">
                                        <polygon
                                            points="85.21 346.57 88.38 348 92.66 345.93 88.38 348.4 85.21 346.57"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "88.935px 347.165px"
                                            }}
                                            className="animable"
                                            id="elk9fmx8zj5ot"
                                        />
                                    </g>
                                    <g id="elurbcd7hluj">
                                        <path
                                            d="M47.46,325.3c11.24-6.83,28.76-7.51,28.76-7.51-11,0-21.35,2.47-29.09,6.94-7.42,4.28-11.51,9.86-11.51,15.73C35.62,340.46,36,332.24,47.46,325.3Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "55.92px 329.125px"
                                            }}
                                            className="animable"
                                            id="ell3xfxrhaj4k"
                                        />
                                    </g>
                                    <g id="elvnpyrkgino">
                                        <path
                                            d="M73,364.89c11.93.53,24.17-1.84,33.29-7.11,9.49-5.47,13.54-12.9,12.17-20,0,0,1.77,11.64-12.89,19.61S73,364.89,73,364.89Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "95.8598px 351.371px"
                                            }}
                                            className="animable"
                                            id="el8abaatyfzqr"
                                        />
                                    </g>
                                    <path
                                        d="M112.22,328.58a27.44,27.44,0,0,0-10.14-9.38c-16.57-9.57-43.45-9.57-60,0a27.52,27.52,0,0,0-10.14,9.38H29.62v8.67h0c.3,6,4.43,12,12.4,16.61,16.58,9.58,43.46,9.58,60,0,8-4.6,12.13-10.58,12.44-16.61h0v-8.67Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "72.04px 336.534px" }}
                                        id="elqs9n7a9wo69"
                                        className="animable"
                                    />
                                    <g id="elf3wlhdq0lv4">
                                        <g
                                            style={{ opacity: "0.25", transformOrigin: "72.04px 336.534px" }}
                                            className="animable"
                                            id="elbput1djwvra"
                                        >
                                            <path
                                                d="M112.22,328.58a27.44,27.44,0,0,0-10.14-9.38c-16.57-9.57-43.45-9.57-60,0a27.52,27.52,0,0,0-10.14,9.38H29.62v8.67h0c.3,6,4.43,12,12.4,16.61,16.58,9.58,43.46,9.58,60,0,8-4.6,12.13-10.58,12.44-16.61h0v-8.67Z"
                                                id="elraydtxl938a"
                                                className="animable"
                                                style={{ transformOrigin: "72.04px 336.534px" }}
                                            />
                                        </g>
                                    </g>
                                    <g id="elpuz1nk496rp">
                                        <path
                                            d="M72.07,312c-10.86,0-21.73,2.39-30,7.17a27.52,27.52,0,0,0-10.14,9.38H29.62v8.67h0c.3,6,4.43,12,12.4,16.61,8.29,4.79,19.16,7.18,30,7.18Z"
                                            style={{ opacity: "0.1", transformOrigin: "50.845px 336.505px" }}
                                            className="animable"
                                            id="eljdzyuz34ee"
                                        />
                                    </g>
                                    <g id="elkjw6wlmaj0c">
                                        <path
                                            d="M48.88,316a48.11,48.11,0,0,0-6.83,3.2,27.52,27.52,0,0,0-10.14,9.38H29.62v8.67h0c.3,6,4.43,12,12.4,16.61a46,46,0,0,0,6.83,3.2Z"
                                            style={{ opacity: "0.1", transformOrigin: "39.25px 336.53px" }}
                                            className="animable"
                                            id="el19hsnxe2pv8"
                                        />
                                    </g>
                                    <g id="elwhwrfy39br">
                                        <path
                                            d="M95.25,316a47.6,47.6,0,0,1,6.83,3.2,27.44,27.44,0,0,1,10.14,9.38h2.3v8.67h0c-.31,6-4.46,12-12.44,16.61a45.54,45.54,0,0,1-6.83,3.2Z"
                                            style={{
                                                fill: "#1A56DB",
                                                opacity: "0.5",
                                                transformOrigin: "104.885px 336.53px"
                                            }}
                                            className="animable"
                                            id="el2oqhwz0p0lv"
                                        />
                                    </g>
                                    <path
                                        d="M102.08,311.26c-16.57-9.58-43.45-9.58-60,0s-16.58,25.08,0,34.66,43.46,9.57,60,0S118.66,320.83,102.08,311.26Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "72.0781px 328.588px" }}
                                        id="elxledqgyztil"
                                        className="animable"
                                    />
                                    <g id="el6rjvnhit9q">
                                        <path
                                            d="M102.08,311.26c-16.57-9.58-43.45-9.58-60,0s-16.58,25.08,0,34.66,43.46,9.57,60,0S118.66,320.83,102.08,311.26Z"
                                            style={{ opacity: "0.2", transformOrigin: "72.0781px 328.588px" }}
                                            className="animable"
                                            id="el42vgp12iv8z"
                                        />
                                    </g>
                                    <path
                                        d="M91.62,317.6c-5.25-2.69-12.19-4.17-19.55-4.17s-14.3,1.48-19.55,4.17c-5.55,2.85-8.61,6.75-8.61,11s3.06,8.13,8.61,11c5.25,2.7,12.19,4.18,19.55,4.18s14.3-1.48,19.55-4.18c5.55-2.85,8.61-6.75,8.61-11S97.17,320.45,91.62,317.6Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "72.07px 328.605px" }}
                                        id="el361ngl3a42d"
                                        className="animable"
                                    />
                                    <g id="el9xcmmhs2i9">
                                        <path
                                            d="M91.62,317.6c-5.25-2.69-12.19-4.17-19.55-4.17s-14.3,1.48-19.55,4.17c-5.55,2.85-8.61,6.75-8.61,11s3.06,8.13,8.61,11c5.25,2.7,12.19,4.18,19.55,4.18s14.3-1.48,19.55-4.18c5.55-2.85,8.61-6.75,8.61-11S97.17,320.45,91.62,317.6Z"
                                            style={{ opacity: "0.4", transformOrigin: "72.07px 328.605px" }}
                                            className="animable"
                                            id="elv93aqobavs8"
                                        />
                                    </g>
                                    <path
                                        d="M101.16,312.86c-7.74-4.47-18.07-6.94-29.09-6.94S50.72,308.39,43,312.86c-7.43,4.28-11.51,9.86-11.51,15.73S35.55,340,43,344.32c7.74,4.46,18.07,6.93,29.09,6.93s21.35-2.47,29.09-6.93c7.42-4.29,11.51-9.88,11.51-15.73S108.58,317.14,101.16,312.86Zm-9.54,26.71c-5.25,2.7-12.19,4.18-19.55,4.18s-14.3-1.48-19.55-4.18c-5.55-2.85-8.61-6.75-8.61-11s3.06-8.14,8.61-11c5.25-2.69,12.19-4.17,19.55-4.17s14.3,1.48,19.55,4.17c5.55,2.85,8.61,6.75,8.61,11S97.17,336.72,91.62,339.57Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "72.09px 328.585px" }}
                                        id="elie9ome6f5a"
                                        className="animable"
                                    />
                                    <g id="el73646j1tnt3">
                                        <path
                                            d="M101.16,312.86c-7.74-4.47-18.07-6.94-29.09-6.94S50.72,308.39,43,312.86c-7.43,4.28-11.51,9.86-11.51,15.73S35.55,340,43,344.32c7.74,4.46,18.07,6.93,29.09,6.93s21.35-2.47,29.09-6.93c7.42-4.29,11.51-9.88,11.51-15.73S108.58,317.14,101.16,312.86Zm-9.54,26.71c-5.25,2.7-12.19,4.18-19.55,4.18s-14.3-1.48-19.55-4.18c-5.55-2.85-8.61-6.75-8.61-11s3.06-8.14,8.61-11c5.25-2.69,12.19-4.17,19.55-4.17s14.3,1.48,19.55,4.17c5.55,2.85,8.61,6.75,8.61,11S97.17,336.72,91.62,339.57Z"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.3",
                                                transformOrigin: "72.09px 328.585px"
                                            }}
                                            className="animable"
                                            id="elae40rakvwfh"
                                        />
                                    </g>
                                    <g id="el716mdz738ov">
                                        <path
                                            d="M91,338.27c10.42-5.35,10.42-14,0-19.37s-27.33-5.36-37.76,0-10.43,14,0,19.37S80.52,343.62,91,338.27Z"
                                            style={{ opacity: "0.2", transformOrigin: "72.1163px 328.583px" }}
                                            className="animable"
                                            id="elix7urp9yzch"
                                        />
                                    </g>
                                    <path
                                        d="M91,338.27c10.42-5.35,10.42-14,0-19.37s-27.33-5.36-37.76,0-10.43,14,0,19.37S80.52,343.62,91,338.27Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "72.1163px 328.583px" }}
                                        id="elzxw1ikgsw4i"
                                        className="animable"
                                    />
                                    <g id="eluzc84y5w83">
                                        <path
                                            d="M91,338.27c10.42-5.35,10.42-14,0-19.37s-27.33-5.36-37.76,0-10.43,14,0,19.37S80.52,343.62,91,338.27Z"
                                            style={{ opacity: "0.45", transformOrigin: "72.1163px 328.583px" }}
                                            className="animable"
                                            id="eljwtugmcldqd"
                                        />
                                    </g>
                                    <path
                                        d="M91,322.53c-10.43-5.36-27.33-5.36-37.76,0-4.31,2.21-6.84,5-7.58,7.87.74,2.88,3.27,5.66,7.58,7.87,10.43,5.35,27.33,5.35,37.76,0,4.31-2.21,6.83-5,7.58-7.87C97.78,327.52,95.26,324.74,91,322.53Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "72.12px 330.396px" }}
                                        id="elqcyhu6norlk"
                                        className="animable"
                                    />
                                    <g id="el5lwl6iufev4">
                                        <path
                                            d="M91,322.53c-10.43-5.36-27.33-5.36-37.76,0-4.31,2.21-6.84,5-7.58,7.87.74,2.88,3.27,5.66,7.58,7.87,10.43,5.35,27.33,5.35,37.76,0,4.31-2.21,6.83-5,7.58-7.87C97.78,327.52,95.26,324.74,91,322.53Z"
                                            style={{ opacity: "0.3", transformOrigin: "72.12px 330.396px" }}
                                            className="animable"
                                            id="elg25bl8b6sd"
                                        />
                                    </g>
                                    <polygon
                                        points="74.6 319.11 74.6 323.02 73.26 324.43 70.79 327.02 70.79 322.94 74.6 319.11"
                                        style={{ fill: "#1A56DB", transformOrigin: "72.695px 323.065px" }}
                                        id="el7agb66y1c3y"
                                        className="animable"
                                    />
                                    <g id="elmc0gk1n3sro">
                                        <polygon
                                            points="74.6 319.11 74.6 323.02 73.26 324.43 70.79 327.02 70.79 322.94 74.6 319.11"
                                            style={{ opacity: "0.3", transformOrigin: "72.695px 323.065px" }}
                                            className="animable"
                                            id="elknglmgdahp"
                                        />
                                    </g>
                                    <path
                                        d="M70.79,322.94v2.31a22.32,22.32,0,0,1-3.8,1.08,4,4,0,0,1-1.63-.06,3.69,3.69,0,0,1-.77-.32c-1-.56-1.1-1.4.7-2.43A6.25,6.25,0,0,1,70.79,322.94Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "67.3339px 324.47px" }}
                                        id="elr9n0dhwgszp"
                                        className="animable"
                                    />
                                    <g id="el47bzgjxpewc">
                                        <path
                                            d="M70.79,322.94v2.31a22.32,22.32,0,0,1-3.8,1.08,4,4,0,0,1-1.63-.06,3.69,3.69,0,0,1-.77-.32c-1-.56-1.1-1.4.7-2.43A6.25,6.25,0,0,1,70.79,322.94Z"
                                            style={{ opacity: "0.45", transformOrigin: "67.3339px 324.47px" }}
                                            className="animable"
                                            id="elu6eyoqjci"
                                        />
                                    </g>
                                    <path
                                        d="M88.51,334.06v3.38l-4.28,2.47-3.17-1.83a16.15,16.15,0,0,1-12.26.55v-3.38l1.94-1.93-1.94.53a12.49,12.49,0,0,1-9.55-1.09c-1.92-1.1-2.81-2.32-2.81-3.56v-3.29l.35-1.44-1.17-.68v-3.38l3.17,1.83c-1.55,1.2-2.37,2.43-2.35,3.63v0c0,1.21.93,2.39,2.81,3.47,4.16,2.41,8.29,1.61,12.07.4,3.51-1.15,6.07-2.49,8.1-1.32,1.26.72.87,1.61-.54,2.42a7,7,0,0,1-6,.35l-4,4a14,14,0,0,0,2.23.65,16.67,16.67,0,0,0,10-1.2l3.17,1.83Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "72.065px 330.16px" }}
                                        id="elnwjvdvkngce"
                                        className="animable"
                                    />
                                    <g id="elcxp5wv3fn7d">
                                        <path
                                            d="M56.44,325.87v0c0,1.21.93,2.39,2.81,3.47,4.16,2.41,8.29,1.61,12.07.4,3.51-1.15,6.07-2.49,8.1-1.32,1.26.72.87,1.61-.54,2.42a7,7,0,0,1-6,.35l-4,4a14,14,0,0,0,2.23.65,16.67,16.67,0,0,0,10-1.2l3.17,1.83,4.28-2.47v3.38l-4.28,2.47-3.17-1.83a16.15,16.15,0,0,1-12.26.55v-3.38l1.94-1.93-1.94.53a12.49,12.49,0,0,1-9.55-1.09c-1.92-1.1-2.81-2.32-2.81-3.56v-3.29l.35-1.44"
                                            style={{ opacity: "0.2", transformOrigin: "72.5px 332.13px" }}
                                            className="animable"
                                            id="eltzvmswaba9"
                                        />
                                    </g>
                                    <g id="eli5ur1p7bili">
                                        <path
                                            d="M55.62,320.41v3.38l1.17.68h0a6.79,6.79,0,0,1,2-2.24Z"
                                            style={{ opacity: "0.45", transformOrigin: "57.205px 322.44px" }}
                                            className="animable"
                                            id="elnwdpz5j5r7"
                                        />
                                    </g>
                                    <path
                                        d="M87.8,331.85a3.91,3.91,0,0,1-.32,1.61l-2.14-1.23A4.2,4.2,0,0,0,87.77,329C87.78,329.9,87.8,331.76,87.8,331.85Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "86.5702px 331.23px" }}
                                        id="eloiqjtac8p0s"
                                        className="animable"
                                    />
                                    <g id="eluf1gn82rtyr">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "86.5702px 331.23px" }}
                                            className="animable"
                                            id="eln8c6gweijkh"
                                        >
                                            <path
                                                d="M87.8,331.85a3.91,3.91,0,0,1-.32,1.61l-2.14-1.23A4.2,4.2,0,0,0,87.77,329C87.78,329.9,87.8,331.76,87.8,331.85Z"
                                                id="elfs96ft9hhmp"
                                                className="animable"
                                                style={{ transformOrigin: "86.5702px 331.23px" }}
                                            />
                                        </g>
                                    </g>
                                    <path
                                        d="M87.79,333.65l-2.45-1.42a4.18,4.18,0,0,0,2.45-3.76c0-.12,0-.22,0-.33-.1-1.16-1-2.3-2.74-3.32h0a11.21,11.21,0,0,0-5.69-1.48H78.8l-.51,0-.45,0-.18,0a2,2,0,0,0-.34.05,20.91,20.91,0,0,0-2.77.57c-.43.11-.87.24-1.29.38-.62.19-1.22.39-1.79.58l-.68.24a21.19,21.19,0,0,1-3.8,1.08,4.16,4.16,0,0,1-1.63-.06,4.31,4.31,0,0,1-.77-.32c-1-.55-1.1-1.39.69-2.43a6.27,6.27,0,0,1,5.51-.58l3.81-3.84a16.37,16.37,0,0,0-11.49.64l-3.17-1.82-4.32,2.49,3.17,1.82c-1.55,1.2-2.38,2.44-2.36,3.64v0c0,1.22.94,2.4,2.82,3.48,4.17,2.41,8.29,1.62,12.07.4,3.51-1.15,6.07-2.5,8.09-1.33,1.27.73.88,1.61-.53,2.43a7,7,0,0,1-6,.35l-4.06,4a15.66,15.66,0,0,0,2.24.66,14.56,14.56,0,0,0,3.91.28,18,18,0,0,0,6.12-1.49l3.17,1.83,4.27-2.47Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "72.075px 327.11px" }}
                                        id="elvr84qr99w6h"
                                        className="animable"
                                    />
                                    <g id="elpoq5j2f4ll">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "72.075px 327.11px" }}
                                            className="animable"
                                            id="eld8jj1gddth"
                                        >
                                            <path
                                                d="M87.79,333.65l-2.45-1.42a4.18,4.18,0,0,0,2.45-3.76c0-.12,0-.22,0-.33-.1-1.16-1-2.3-2.74-3.32h0a11.21,11.21,0,0,0-5.69-1.48H78.8l-.51,0-.45,0-.18,0a2,2,0,0,0-.34.05,20.91,20.91,0,0,0-2.77.57c-.43.11-.87.24-1.29.38-.62.19-1.22.39-1.79.58l-.68.24a21.19,21.19,0,0,1-3.8,1.08,4.16,4.16,0,0,1-1.63-.06,4.31,4.31,0,0,1-.77-.32c-1-.55-1.1-1.39.69-2.43a6.27,6.27,0,0,1,5.51-.58l3.81-3.84a16.37,16.37,0,0,0-11.49.64l-3.17-1.82-4.32,2.49,3.17,1.82c-1.55,1.2-2.38,2.44-2.36,3.64v0c0,1.22.94,2.4,2.82,3.48,4.17,2.41,8.29,1.62,12.07.4,3.51-1.15,6.07-2.5,8.09-1.33,1.27.73.88,1.61-.53,2.43a7,7,0,0,1-6,.35l-4.06,4a15.66,15.66,0,0,0,2.24.66,14.56,14.56,0,0,0,3.91.28,18,18,0,0,0,6.12-1.49l3.17,1.83,4.27-2.47Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    transformOrigin: "72.075px 327.11px"
                                                }}
                                                id="el964frnbmev6"
                                                className="animable"
                                            />
                                        </g>
                                    </g>
                                    <polygon
                                        points="81.06 334.7 81.06 338.08 84.23 339.91 84.23 336.53 81.06 334.7"
                                        style={{ fill: "#1A56DB", transformOrigin: "82.645px 337.305px" }}
                                        id="elbyvrcy7ppxt"
                                        className="animable"
                                    />
                                    <g id="elkzd4mzzsij">
                                        <polygon
                                            points="81.06 334.7 81.06 338.08 84.23 339.91 84.23 336.53 81.06 334.7"
                                            style={{ opacity: "0.45", transformOrigin: "82.645px 337.305px" }}
                                            className="animable"
                                            id="ele5lmtmjzaej"
                                        />
                                    </g>
                                    <g id="el7lak9tjsefv">
                                        <polygon
                                            points="55.62 320.41 59.94 317.92 63.11 319.74 59.96 318.43 55.62 320.41"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "59.365px 319.165px"
                                            }}
                                            className="animable"
                                            id="elayhujei331u"
                                        />
                                    </g>
                                    <g id="elgi9jg2m1hvr">
                                        <path
                                            d="M65.28,323.52a6.27,6.27,0,0,1,5.51-.58l3.81-3.84-3.81,3.45A5.78,5.78,0,0,0,65.28,323.52Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "69.94px 321.31px"
                                            }}
                                            className="animable"
                                            id="elhc1eu8joop"
                                        />
                                    </g>
                                    <g id="elu8mhwwohvp">
                                        <path
                                            d="M68.79,335.25a15.66,15.66,0,0,0,2.24.66,14.56,14.56,0,0,0,3.91.28,13.8,13.8,0,0,1-5.51-1.1l3.42-3.86Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "71.865px 333.725px"
                                            }}
                                            className="animable"
                                            id="elvj4sf9ae35"
                                        />
                                    </g>
                                    <g id="el6ov1l3r3jfn">
                                        <polygon
                                            points="81.06 334.7 84.23 336.13 88.5 334.06 84.23 336.53 81.06 334.7"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "84.78px 335.295px"
                                            }}
                                            className="animable"
                                            id="el4wd4cb84835"
                                        />
                                    </g>
                                    <g id="el4juev6ab2z6">
                                        <path
                                            d="M43.3,313.43c11.24-6.83,28.77-7.51,28.77-7.51-11,0-21.35,2.47-29.09,6.94-7.43,4.28-11.51,9.86-11.51,15.73C31.47,328.59,31.87,320.37,43.3,313.43Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "51.77px 317.255px"
                                            }}
                                            className="animable"
                                            id="eli5agsbi2kvo"
                                        />
                                    </g>
                                    <g id="el3xwk1h8mrv3">
                                        <path
                                            d="M68.79,353c11.93.53,24.17-1.84,33.29-7.1,9.49-5.48,13.55-12.91,12.18-20.05,0,0,1.77,11.64-12.89,19.61S68.79,353,68.79,353Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "91.6546px 339.461px"
                                            }}
                                            className="animable"
                                            id="el8dsi2169h7x"
                                        />
                                    </g>
                                </g>
                                <g
                                    id="freepik--coins--inject-699"
                                    className="animable"
                                    style={{ transformOrigin: "142.15px 418.036px" }}
                                >
                                    <path
                                        d="M183.69,420.07a27.28,27.28,0,0,0-10.14-9.38c-16.57-9.57-43.45-9.57-60,0a27.36,27.36,0,0,0-10.14,9.38h-2.29v8.67h0c.3,6,4.43,12,12.4,16.61,16.58,9.57,43.46,9.57,60,0,8-4.6,12.13-10.58,12.44-16.61h0v-8.67Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "143.54px 428.02px" }}
                                        id="elhrt9on8zfgo"
                                        className="animable"
                                    />
                                    <g id="elbchkjdo35lv">
                                        <g
                                            style={{ opacity: "0.25", transformOrigin: "143.54px 428.02px" }}
                                            className="animable"
                                            id="el0a2rh4rkpl7e"
                                        >
                                            <path
                                                d="M183.69,420.07a27.28,27.28,0,0,0-10.14-9.38c-16.57-9.57-43.45-9.57-60,0a27.36,27.36,0,0,0-10.14,9.38h-2.29v8.67h0c.3,6,4.43,12,12.4,16.61,16.58,9.57,43.46,9.57,60,0,8-4.6,12.13-10.58,12.44-16.61h0v-8.67Z"
                                                id="el7q6182r0dkt"
                                                className="animable"
                                                style={{ transformOrigin: "143.54px 428.02px" }}
                                            />
                                        </g>
                                    </g>
                                    <g id="elftd0o3jxgnp">
                                        <path
                                            d="M143.54,403.51c-10.86,0-21.73,2.39-30,7.18a27.36,27.36,0,0,0-10.14,9.38h-2.29v8.67h0c.3,6,4.43,12,12.4,16.61,8.29,4.79,19.16,7.18,30,7.18Z"
                                            style={{ opacity: "0.1", transformOrigin: "122.325px 428.02px" }}
                                            className="animable"
                                            id="elvwdue8qlvf"
                                        />
                                    </g>
                                    <g id="el21afzji0u1">
                                        <path
                                            d="M120.35,407.49a47,47,0,0,0-6.83,3.2,27.36,27.36,0,0,0-10.14,9.38h-2.29v8.67h0c.3,6,4.43,12,12.4,16.61a46,46,0,0,0,6.83,3.2Z"
                                            style={{ opacity: "0.1", transformOrigin: "110.72px 428.02px" }}
                                            className="animable"
                                            id="elw5tv1dj69uq"
                                        />
                                    </g>
                                    <g id="elzq1rcr11wj">
                                        <path
                                            d="M166.72,407.49a46.55,46.55,0,0,1,6.83,3.2,27.28,27.28,0,0,1,10.14,9.38H186v8.67h0c-.31,6-4.46,12-12.44,16.61a45.54,45.54,0,0,1-6.83,3.2Z"
                                            style={{
                                                fill: "#1A56DB",
                                                opacity: "0.5",
                                                transformOrigin: "176.36px 428.02px"
                                            }}
                                            className="animable"
                                            id="ele9nsb5m1qk"
                                        />
                                    </g>
                                    <path
                                        d="M173.55,402.74c-16.57-9.57-43.45-9.57-60,0s-16.58,25.09,0,34.66,43.46,9.57,60,0S190.13,412.31,173.55,402.74Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "143.548px 420.07px" }}
                                        id="elumlxjpyw2re"
                                        className="animable"
                                    />
                                    <g id="el3epg0i4yqfu">
                                        <path
                                            d="M173.55,402.74c-16.57-9.57-43.45-9.57-60,0s-16.58,25.09,0,34.66,43.46,9.57,60,0S190.13,412.31,173.55,402.74Z"
                                            style={{ opacity: "0.2", transformOrigin: "143.548px 420.07px" }}
                                            className="animable"
                                            id="elsb5az1fowjg"
                                        />
                                    </g>
                                    <path
                                        d="M163.09,409.08c-5.26-2.68-12.19-4.17-19.55-4.17s-14.3,1.49-19.55,4.17c-5.55,2.85-8.61,6.76-8.61,11s3.06,8.14,8.61,11c5.25,2.69,12.19,4.18,19.55,4.18s14.29-1.49,19.55-4.18c5.55-2.85,8.61-6.75,8.61-11S168.64,411.93,163.09,409.08Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "143.54px 420.085px" }}
                                        id="el4334dg08hp9"
                                        className="animable"
                                    />
                                    <g id="elme1hj7syvnj">
                                        <path
                                            d="M163.09,409.08c-5.26-2.68-12.19-4.17-19.55-4.17s-14.3,1.49-19.55,4.17c-5.55,2.85-8.61,6.76-8.61,11s3.06,8.14,8.61,11c5.25,2.69,12.19,4.18,19.55,4.18s14.29-1.49,19.55-4.18c5.55-2.85,8.61-6.75,8.61-11S168.64,411.93,163.09,409.08Z"
                                            style={{ opacity: "0.4", transformOrigin: "143.54px 420.085px" }}
                                            className="animable"
                                            id="elg0bwt94g90a"
                                        />
                                    </g>
                                    <path
                                        d="M172.63,404.34c-7.74-4.47-18.07-6.93-29.09-6.93s-21.35,2.46-29.09,6.93c-7.43,4.29-11.51,9.87-11.51,15.73s4.08,11.45,11.51,15.74c7.74,4.46,18.07,6.92,29.09,6.92s21.35-2.46,29.09-6.92c7.42-4.29,11.51-9.88,11.51-15.74S180.05,408.63,172.63,404.34Zm-9.54,26.72c-5.26,2.69-12.19,4.18-19.55,4.18s-14.3-1.49-19.55-4.18c-5.55-2.85-8.61-6.75-8.61-11s3.06-8.14,8.61-11c5.25-2.68,12.19-4.17,19.55-4.17s14.29,1.49,19.55,4.17c5.55,2.85,8.61,6.76,8.61,11S168.64,428.21,163.09,431.06Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "143.54px 420.07px" }}
                                        id="el5wwbj331qzm"
                                        className="animable"
                                    />
                                    <g id="el9nszzhs3du">
                                        <path
                                            d="M172.63,404.34c-7.74-4.47-18.07-6.93-29.09-6.93s-21.35,2.46-29.09,6.93c-7.43,4.29-11.51,9.87-11.51,15.73s4.08,11.45,11.51,15.74c7.74,4.46,18.07,6.92,29.09,6.92s21.35-2.46,29.09-6.92c7.42-4.29,11.51-9.88,11.51-15.74S180.05,408.63,172.63,404.34Zm-9.54,26.72c-5.26,2.69-12.19,4.18-19.55,4.18s-14.3-1.49-19.55-4.18c-5.55-2.85-8.61-6.75-8.61-11s3.06-8.14,8.61-11c5.25-2.68,12.19-4.17,19.55-4.17s14.29,1.49,19.55,4.17c5.55,2.85,8.61,6.76,8.61,11S168.64,428.21,163.09,431.06Z"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.3",
                                                transformOrigin: "143.54px 420.07px"
                                            }}
                                            className="animable"
                                            id="ele1ef4o39wzc"
                                        />
                                    </g>
                                    <g id="elhismgr1jgzg">
                                        <path
                                            d="M162.42,429.76c10.42-5.35,10.42-14,0-19.38s-27.33-5.35-37.76,0-10.43,14,0,19.38S152,435.11,162.42,429.76Z"
                                            style={{ opacity: "0.2", transformOrigin: "143.536px 420.07px" }}
                                            className="animable"
                                            id="el8vhwgbp6jf8"
                                        />
                                    </g>
                                    <path
                                        d="M162.42,429.76c10.42-5.35,10.42-14,0-19.38s-27.33-5.35-37.76,0-10.43,14,0,19.38S152,435.11,162.42,429.76Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "143.536px 420.07px" }}
                                        id="elu2fsm848ek"
                                        className="animable"
                                    />
                                    <g id="elav2h7qiypi">
                                        <path
                                            d="M162.42,429.76c10.42-5.35,10.42-14,0-19.38s-27.33-5.35-37.76,0-10.43,14,0,19.38S152,435.11,162.42,429.76Z"
                                            style={{ opacity: "0.45", transformOrigin: "143.536px 420.07px" }}
                                            className="animable"
                                            id="el96u4teucrts"
                                        />
                                    </g>
                                    <path
                                        d="M162.42,414c-10.43-5.35-27.33-5.35-37.76,0-4.31,2.21-6.84,5-7.58,7.88.74,2.87,3.27,5.66,7.58,7.87,10.43,5.35,27.33,5.35,37.76,0,4.31-2.21,6.83-5,7.58-7.87C169.25,419,166.73,416.22,162.42,414Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "143.54px 421.875px" }}
                                        id="elhe8ws4ozuh"
                                        className="animable"
                                    />
                                    <g id="elw6v6iff9dk">
                                        <path
                                            d="M162.42,414c-10.43-5.35-27.33-5.35-37.76,0-4.31,2.21-6.84,5-7.58,7.88.74,2.87,3.27,5.66,7.58,7.87,10.43,5.35,27.33,5.35,37.76,0,4.31-2.21,6.83-5,7.58-7.87C169.25,419,166.73,416.22,162.42,414Z"
                                            style={{ opacity: "0.3", transformOrigin: "143.54px 421.875px" }}
                                            className="animable"
                                            id="el3h8tr6bvk8m"
                                        />
                                    </g>
                                    <polygon
                                        points="146.07 410.59 146.07 414.51 144.73 415.92 142.26 418.5 142.26 414.43 146.07 410.59"
                                        style={{ fill: "#1A56DB", transformOrigin: "144.165px 414.545px" }}
                                        id="eln6l0zcdas7g"
                                        className="animable"
                                    />
                                    <g id="elu637vvlwckg">
                                        <polygon
                                            points="146.07 410.59 146.07 414.51 144.73 415.92 142.26 418.5 142.26 414.43 146.07 410.59"
                                            style={{ opacity: "0.3", transformOrigin: "144.165px 414.545px" }}
                                            className="animable"
                                            id="el7kvgcnqzqdo"
                                        />
                                    </g>
                                    <path
                                        d="M142.26,414.43v2.31a22.32,22.32,0,0,1-3.8,1.08,4.37,4.37,0,0,1-1.63-.06,4.31,4.31,0,0,1-.77-.32c-.95-.56-1.1-1.4.7-2.43A6.25,6.25,0,0,1,142.26,414.43Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "138.814px 415.957px" }}
                                        id="el3ws49kzquhc"
                                        className="animable"
                                    />
                                    <g id="el7jpmrho4jbj">
                                        <path
                                            d="M142.26,414.43v2.31a22.32,22.32,0,0,1-3.8,1.08,4.37,4.37,0,0,1-1.63-.06,4.31,4.31,0,0,1-.77-.32c-.95-.56-1.1-1.4.7-2.43A6.25,6.25,0,0,1,142.26,414.43Z"
                                            style={{ opacity: "0.45", transformOrigin: "138.814px 415.957px" }}
                                            className="animable"
                                            id="el2wj81n3k3wn"
                                        />
                                    </g>
                                    <path
                                        d="M160,425.55v3.38l-4.28,2.47-3.17-1.84a16.1,16.1,0,0,1-12.26.56v-3.39l1.94-1.92-1.94.53a12.49,12.49,0,0,1-9.55-1.09c-1.92-1.11-2.81-2.32-2.81-3.57v-3.29l.35-1.44-1.17-.68v-3.38l3.17,1.83c-1.55,1.2-2.37,2.44-2.35,3.63v0c0,1.22.93,2.4,2.81,3.48,4.16,2.41,8.29,1.61,12.07.4,3.51-1.15,6.07-2.5,8.1-1.33,1.26.73.87,1.61-.54,2.43a7,7,0,0,1-6,.35l-4,4a14,14,0,0,0,2.23.66,16.67,16.67,0,0,0,10-1.2L155.7,428Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "143.555px 421.645px" }}
                                        id="elzqlk0qsax5m"
                                        className="animable"
                                    />
                                    <g id="el596qbr7xqgs">
                                        <path
                                            d="M127.91,417.35v0c0,1.22.93,2.4,2.81,3.48,4.16,2.41,8.29,1.61,12.07.4,3.51-1.15,6.07-2.5,8.1-1.33,1.26.73.87,1.61-.54,2.43a7,7,0,0,1-6,.35l-4,4a14,14,0,0,0,2.23.66,16.67,16.67,0,0,0,10-1.2L155.7,428l4.28-2.47v3.38l-4.28,2.47-3.17-1.84a16.1,16.1,0,0,1-12.26.56v-3.39l1.94-1.92-1.94.53a12.49,12.49,0,0,1-9.55-1.09c-1.92-1.11-2.81-2.32-2.81-3.57v-3.29l.35-1.44"
                                            style={{ opacity: "0.2", transformOrigin: "143.945px 423.655px" }}
                                            className="animable"
                                            id="elzxlgnrs455"
                                        />
                                    </g>
                                    <g id="elf4o0oz2zlg9">
                                        <path
                                            d="M127.09,411.89v3.38l1.17.68h0a6.89,6.89,0,0,1,2-2.24Z"
                                            style={{ opacity: "0.45", transformOrigin: "128.675px 413.92px" }}
                                            className="animable"
                                            id="elab3hkienhi"
                                        />
                                    </g>
                                    <path
                                        d="M159.27,423.34A3.91,3.91,0,0,1,159,425l-2.14-1.23a4.22,4.22,0,0,0,2.43-3.26C159.25,421.39,159.27,423.24,159.27,423.34Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "158.075px 422.755px" }}
                                        id="el92b7sgcpj7g"
                                        className="animable"
                                    />
                                    <g id="el6cjmvk4hvau">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "158.075px 422.755px" }}
                                            className="animable"
                                            id="ell1qx8z0q42l"
                                        >
                                            <path
                                                d="M159.27,423.34A3.91,3.91,0,0,1,159,425l-2.14-1.23a4.22,4.22,0,0,0,2.43-3.26C159.25,421.39,159.27,423.24,159.27,423.34Z"
                                                id="elywi26ifys1m"
                                                className="animable"
                                                style={{ transformOrigin: "158.075px 422.755px" }}
                                            />
                                        </g>
                                    </g>
                                    <path
                                        d="M159.26,425.14l-2.45-1.43a4.16,4.16,0,0,0,2.45-3.75c0-.12,0-.22,0-.33-.1-1.17-1-2.3-2.74-3.32h0a11.22,11.22,0,0,0-5.69-1.49h-.54l-.51,0-.45,0-.18,0-.34,0a24.24,24.24,0,0,0-2.77.57c-.43.12-.87.25-1.29.39-.62.19-1.22.39-1.79.58l-.68.23a20.55,20.55,0,0,1-3.8,1.09,4,4,0,0,1-1.63-.07,3.22,3.22,0,0,1-.77-.32c-.95-.55-1.1-1.39.69-2.43a6.27,6.27,0,0,1,5.51-.57l3.81-3.84a16.27,16.27,0,0,0-11.49.64l-3.17-1.83-4.32,2.5,3.17,1.82c-1.55,1.2-2.38,2.44-2.36,3.64v0c0,1.22.94,2.4,2.82,3.48,4.16,2.41,8.29,1.61,12.07.39,3.51-1.14,6.07-2.49,8.09-1.32,1.26.73.88,1.61-.53,2.43a7,7,0,0,1-6,.35l-4.06,4a15.58,15.58,0,0,0,2.24.65,15,15,0,0,0,3.91.29,18.27,18.27,0,0,0,6.12-1.49L155.7,428l4.27-2.47Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "143.54px 418.63px" }}
                                        id="elqx1kyn310aa"
                                        className="animable"
                                    />
                                    <g id="elwlt1pn2mr6t">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "143.54px 418.63px" }}
                                            className="animable"
                                            id="elfh94oyg4gh"
                                        >
                                            <path
                                                d="M159.26,425.14l-2.45-1.43a4.16,4.16,0,0,0,2.45-3.75c0-.12,0-.22,0-.33-.1-1.17-1-2.3-2.74-3.32h0a11.22,11.22,0,0,0-5.69-1.49h-.54l-.51,0-.45,0-.18,0-.34,0a24.24,24.24,0,0,0-2.77.57c-.43.12-.87.25-1.29.39-.62.19-1.22.39-1.79.58l-.68.23a20.55,20.55,0,0,1-3.8,1.09,4,4,0,0,1-1.63-.07,3.22,3.22,0,0,1-.77-.32c-.95-.55-1.1-1.39.69-2.43a6.27,6.27,0,0,1,5.51-.57l3.81-3.84a16.27,16.27,0,0,0-11.49.64l-3.17-1.83-4.32,2.5,3.17,1.82c-1.55,1.2-2.38,2.44-2.36,3.64v0c0,1.22.94,2.4,2.82,3.48,4.16,2.41,8.29,1.61,12.07.39,3.51-1.14,6.07-2.49,8.09-1.32,1.26.73.88,1.61-.53,2.43a7,7,0,0,1-6,.35l-4.06,4a15.58,15.58,0,0,0,2.24.65,15,15,0,0,0,3.91.29,18.27,18.27,0,0,0,6.12-1.49L155.7,428l4.27-2.47Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    transformOrigin: "143.54px 418.63px"
                                                }}
                                                id="elb5tsdq54g7q"
                                                className="animable"
                                            />
                                        </g>
                                    </g>
                                    <polygon
                                        points="152.53 426.19 152.53 429.56 155.7 431.39 155.7 428.02 152.53 426.19"
                                        style={{ fill: "#1A56DB", transformOrigin: "154.115px 428.79px" }}
                                        id="elyfnpx045e6m"
                                        className="animable"
                                    />
                                    <g id="elbowctklgzif">
                                        <polygon
                                            points="152.53 426.19 152.53 429.56 155.7 431.39 155.7 428.02 152.53 426.19"
                                            style={{ opacity: "0.45", transformOrigin: "154.115px 428.79px" }}
                                            className="animable"
                                            id="eluggv5zwualq"
                                        />
                                    </g>
                                    <g id="elgrub7rzxxw">
                                        <polygon
                                            points="127.09 411.9 131.41 409.4 134.58 411.23 131.43 409.91 127.09 411.9"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "130.835px 410.65px"
                                            }}
                                            className="animable"
                                            id="elye9v9snil9"
                                        />
                                    </g>
                                    <g id="elfmdt3ztxedp">
                                        <path
                                            d="M136.75,415a6.27,6.27,0,0,1,5.51-.57l3.81-3.84L142.26,414A5.79,5.79,0,0,0,136.75,415Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "141.41px 412.795px"
                                            }}
                                            className="animable"
                                            id="elnh2jz0nwtlt"
                                        />
                                    </g>
                                    <g id="el2vhka3p9iv5">
                                        <path
                                            d="M140.26,426.74a15.58,15.58,0,0,0,2.24.65,15,15,0,0,0,3.91.29,13.8,13.8,0,0,1-5.51-1.1l3.42-3.86Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "143.335px 425.212px"
                                            }}
                                            className="animable"
                                            id="elol1ghi4q8i"
                                        />
                                    </g>
                                    <g id="elmvcbo87zcar">
                                        <polygon
                                            points="152.53 426.19 155.7 427.62 159.97 425.55 155.7 428.02 152.53 426.19"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "156.25px 426.785px"
                                            }}
                                            className="animable"
                                            id="el1gs8k3hge77"
                                        />
                                    </g>
                                    <g id="el9gjt6mcalrd">
                                        <path
                                            d="M114.77,404.91c11.24-6.82,28.77-7.5,28.77-7.5-11,0-21.35,2.46-29.09,6.93-7.43,4.29-11.51,9.87-11.51,15.73C102.94,420.07,103.34,411.86,114.77,404.91Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "123.24px 408.74px"
                                            }}
                                            className="animable"
                                            id="elkzml5su4hg"
                                        />
                                    </g>
                                    <g id="eljo5d05h3ut">
                                        <path
                                            d="M140.26,444.51c11.93.53,24.17-1.84,33.29-7.11,9.49-5.47,13.55-12.9,12.18-20,0,0,1.77,11.64-12.89,19.61S140.26,444.51,140.26,444.51Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "163.125px 430.991px"
                                            }}
                                            className="animable"
                                            id="elof1ecss9wo"
                                        />
                                    </g>
                                    <path
                                        d="M180.91,408a27.42,27.42,0,0,0-10.14-9.37c-16.58-9.58-43.46-9.58-60,0A27.42,27.42,0,0,0,100.59,408H98.3v8.68h0c.31,6,4.43,12,12.4,16.61,16.58,9.57,43.46,9.57,60,0,8-4.61,12.12-10.58,12.43-16.61h0V408Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "140.715px 415.956px" }}
                                        id="elmf83m1lewd"
                                        className="animable"
                                    />
                                    <g id="elqv7qc7t895">
                                        <g
                                            style={{ opacity: "0.25", transformOrigin: "140.715px 415.956px" }}
                                            className="animable"
                                            id="elxb6ln989hm"
                                        >
                                            <path
                                                d="M180.91,408a27.42,27.42,0,0,0-10.14-9.37c-16.58-9.58-43.46-9.58-60,0A27.42,27.42,0,0,0,100.59,408H98.3v8.68h0c.31,6,4.43,12,12.4,16.61,16.58,9.57,43.46,9.57,60,0,8-4.61,12.12-10.58,12.43-16.61h0V408Z"
                                                id="elvrayjv7tow"
                                                className="animable"
                                                style={{ transformOrigin: "140.715px 415.956px" }}
                                            />
                                        </g>
                                    </g>
                                    <g id="el3u1rn7ig6dw">
                                        <path
                                            d="M140.75,391.49c-10.86,0-21.73,2.39-30,7.18A27.42,27.42,0,0,0,100.59,408H98.3v8.68h0c.31,6,4.43,12,12.4,16.61,8.29,4.78,19.16,7.17,30,7.17Z"
                                            style={{ opacity: "0.1", transformOrigin: "119.525px 415.975px" }}
                                            className="animable"
                                            id="elrkaeczqo9i"
                                        />
                                    </g>
                                    <g id="el7es048p3dv">
                                        <path
                                            d="M117.57,395.47a46.12,46.12,0,0,0-6.84,3.2A27.42,27.42,0,0,0,100.59,408H98.3v8.68h0c.31,6,4.43,12,12.4,16.61a47.12,47.12,0,0,0,6.84,3.19Z"
                                            style={{ opacity: "0.1", transformOrigin: "107.935px 415.975px" }}
                                            className="animable"
                                            id="elkid9n0441a"
                                        />
                                    </g>
                                    <g id="elb3l2czmknbt">
                                        <path
                                            d="M163.93,395.47a46.12,46.12,0,0,1,6.84,3.2A27.42,27.42,0,0,1,180.91,408h2.29v8.68h0c-.31,6-4.46,12-12.43,16.61a47.12,47.12,0,0,1-6.84,3.19Z"
                                            style={{
                                                fill: "#1A56DB",
                                                opacity: "0.5",
                                                transformOrigin: "173.565px 415.975px"
                                            }}
                                            className="animable"
                                            id="el1jl2iwa5piz"
                                        />
                                    </g>
                                    <path
                                        d="M170.77,390.72c-16.58-9.57-43.46-9.57-60,0s-16.57,25.09,0,34.66,43.46,9.57,60,0S187.34,400.29,170.77,390.72Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "140.77px 408.05px" }}
                                        id="el5beqv35ck5r"
                                        className="animable"
                                    />
                                    <g id="elklytckuxg3e">
                                        <path
                                            d="M170.77,390.72c-16.58-9.57-43.46-9.57-60,0s-16.57,25.09,0,34.66,43.46,9.57,60,0S187.34,400.29,170.77,390.72Z"
                                            style={{ opacity: "0.2", transformOrigin: "140.77px 408.05px" }}
                                            className="animable"
                                            id="eltrvamzjm2dk"
                                        />
                                    </g>
                                    <path
                                        d="M160.3,397.06c-5.25-2.69-12.19-4.17-19.55-4.17s-14.3,1.48-19.54,4.17c-5.56,2.85-8.62,6.75-8.62,11s3.06,8.13,8.62,11c5.24,2.7,12.18,4.18,19.54,4.18s14.3-1.48,19.55-4.18c5.55-2.85,8.61-6.74,8.61-11S165.85,399.91,160.3,397.06Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "140.75px 408.065px" }}
                                        id="elvbfq37js8mm"
                                        className="animable"
                                    />
                                    <g id="elcne6h92eam6">
                                        <path
                                            d="M160.3,397.06c-5.25-2.69-12.19-4.17-19.55-4.17s-14.3,1.48-19.54,4.17c-5.56,2.85-8.62,6.75-8.62,11s3.06,8.13,8.62,11c5.24,2.7,12.18,4.18,19.54,4.18s14.3-1.48,19.55-4.18c5.55-2.85,8.61-6.74,8.61-11S165.85,399.91,160.3,397.06Z"
                                            style={{ opacity: "0.4", transformOrigin: "140.75px 408.065px" }}
                                            className="animable"
                                            id="elgszlgrp1ikc"
                                        />
                                    </g>
                                    <path
                                        d="M169.84,392.32c-7.74-4.47-18.07-6.94-29.09-6.94s-21.35,2.47-29.09,6.94c-7.43,4.28-11.51,9.86-11.51,15.73s4.08,11.44,11.51,15.73c7.74,4.46,18.07,6.93,29.09,6.93s21.35-2.47,29.09-6.93c7.42-4.29,11.51-9.87,11.51-15.73S177.26,396.6,169.84,392.32ZM160.3,419c-5.25,2.7-12.19,4.18-19.55,4.18s-14.3-1.48-19.54-4.18c-5.56-2.85-8.62-6.74-8.62-11s3.06-8.14,8.62-11c5.24-2.69,12.18-4.17,19.54-4.17s14.3,1.48,19.55,4.17c5.55,2.85,8.61,6.75,8.61,11S165.85,416.18,160.3,419Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "140.75px 408.045px" }}
                                        id="elhrsm78imowf"
                                        className="animable"
                                    />
                                    <g id="el6ety7z1otrn">
                                        <path
                                            d="M169.84,392.32c-7.74-4.47-18.07-6.94-29.09-6.94s-21.35,2.47-29.09,6.94c-7.43,4.28-11.51,9.86-11.51,15.73s4.08,11.44,11.51,15.73c7.74,4.46,18.07,6.93,29.09,6.93s21.35-2.47,29.09-6.93c7.42-4.29,11.51-9.87,11.51-15.73S177.26,396.6,169.84,392.32ZM160.3,419c-5.25,2.7-12.19,4.18-19.55,4.18s-14.3-1.48-19.54-4.18c-5.56-2.85-8.62-6.74-8.62-11s3.06-8.14,8.62-11c5.24-2.69,12.18-4.17,19.54-4.17s14.3,1.48,19.55,4.17c5.55,2.85,8.61,6.75,8.61,11S165.85,416.18,160.3,419Z"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.3",
                                                transformOrigin: "140.75px 408.045px"
                                            }}
                                            className="animable"
                                            id="elhsao3yg2vtj"
                                        />
                                    </g>
                                    <g id="el7r4eoh9i1w3">
                                        <path
                                            d="M159.63,417.73c10.43-5.35,10.43-14,0-19.37s-27.33-5.35-37.76,0-10.43,14,0,19.37S149.2,423.08,159.63,417.73Z"
                                            style={{ opacity: "0.2", transformOrigin: "140.75px 408.045px" }}
                                            className="animable"
                                            id="elqj4ao02avsj"
                                        />
                                    </g>
                                    <path
                                        d="M159.63,417.73c10.43-5.35,10.43-14,0-19.37s-27.33-5.35-37.76,0-10.43,14,0,19.37S149.2,423.08,159.63,417.73Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "140.75px 408.045px" }}
                                        id="el8nshduhxucd"
                                        className="animable"
                                    />
                                    <g id="el8dd6r5dlcnu">
                                        <path
                                            d="M159.63,417.73c10.43-5.35,10.43-14,0-19.37s-27.33-5.35-37.76,0-10.43,14,0,19.37S149.2,423.08,159.63,417.73Z"
                                            style={{ opacity: "0.45", transformOrigin: "140.75px 408.045px" }}
                                            className="animable"
                                            id="elf44f7rock4"
                                        />
                                    </g>
                                    <path
                                        d="M159.63,402c-10.43-5.35-27.33-5.35-37.76,0-4.31,2.21-6.83,5-7.58,7.87.75,2.88,3.27,5.66,7.58,7.87,10.43,5.35,27.33,5.35,37.76,0,4.31-2.21,6.83-5,7.58-7.87C166.46,407,163.94,404.2,159.63,402Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "140.75px 409.87px" }}
                                        id="eljge7p2srb6o"
                                        className="animable"
                                    />
                                    <g id="elpaxzjypqb6e">
                                        <path
                                            d="M159.63,402c-10.43-5.35-27.33-5.35-37.76,0-4.31,2.21-6.83,5-7.58,7.87.75,2.88,3.27,5.66,7.58,7.87,10.43,5.35,27.33,5.35,37.76,0,4.31-2.21,6.83-5,7.58-7.87C166.46,407,163.94,404.2,159.63,402Z"
                                            style={{ opacity: "0.3", transformOrigin: "140.75px 409.87px" }}
                                            className="animable"
                                            id="elhuz1u2438d9"
                                        />
                                    </g>
                                    <polygon
                                        points="143.28 398.57 143.28 402.48 141.94 403.89 139.47 406.48 139.47 402.41 143.28 398.57"
                                        style={{ fill: "#1A56DB", transformOrigin: "141.375px 402.525px" }}
                                        id="el2sy9zx1otyp"
                                        className="animable"
                                    />
                                    <g id="el1z3lnxr5wag">
                                        <polygon
                                            points="143.28 398.57 143.28 402.48 141.94 403.89 139.47 406.48 139.47 402.41 143.28 398.57"
                                            style={{ opacity: "0.3", transformOrigin: "141.375px 402.525px" }}
                                            className="animable"
                                            id="el0at77xmfbil"
                                        />
                                    </g>
                                    <path
                                        d="M139.47,402.4v2.31a21.42,21.42,0,0,1-3.8,1.08,4,4,0,0,1-1.63-.06,3.4,3.4,0,0,1-.77-.32c-.94-.56-1.1-1.4.7-2.43A6.25,6.25,0,0,1,139.47,402.4Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "136.026px 403.93px" }}
                                        id="elg2nxjd8qte8"
                                        className="animable"
                                    />
                                    <g id="elwxrikzjh6jm">
                                        <path
                                            d="M139.47,402.4v2.31a21.42,21.42,0,0,1-3.8,1.08,4,4,0,0,1-1.63-.06,3.4,3.4,0,0,1-.77-.32c-.94-.56-1.1-1.4.7-2.43A6.25,6.25,0,0,1,139.47,402.4Z"
                                            style={{ opacity: "0.45", transformOrigin: "136.026px 403.93px" }}
                                            className="animable"
                                            id="elgwn2o6l2s6d"
                                        />
                                    </g>
                                    <path
                                        d="M157.19,413.52v3.38l-4.28,2.47-3.17-1.83a16.1,16.1,0,0,1-12.26.55v-3.38l2-1.93-2,.54a12.54,12.54,0,0,1-9.55-1.1c-1.92-1.1-2.81-2.32-2.81-3.56v-3.29l.35-1.44-1.17-.68v-3.38l3.17,1.83c-1.55,1.2-2.37,2.43-2.35,3.63v0c0,1.21.94,2.39,2.81,3.47,4.16,2.41,8.29,1.62,12.07.4,3.51-1.14,6.07-2.49,8.1-1.32,1.26.73.88,1.61-.54,2.43a7.05,7.05,0,0,1-6,.35l-4.05,4a14.93,14.93,0,0,0,2.24.66,16.73,16.73,0,0,0,10-1.21l3.17,1.83Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "140.745px 409.62px" }}
                                        id="eldek0lgoljst"
                                        className="animable"
                                    />
                                    <g id="eloyzd00vlbha">
                                        <path
                                            d="M125.12,405.33v0c0,1.21.94,2.39,2.81,3.47,4.16,2.41,8.29,1.62,12.07.4,3.51-1.14,6.07-2.49,8.1-1.32,1.26.73.88,1.61-.54,2.43a7.05,7.05,0,0,1-6,.35l-4.05,4a14.93,14.93,0,0,0,2.24.66,16.73,16.73,0,0,0,10-1.21l3.17,1.83,4.28-2.47v3.38l-4.28,2.47-3.17-1.83a16.1,16.1,0,0,1-12.26.55v-3.38l2-1.93-2,.54a12.54,12.54,0,0,1-9.55-1.1c-1.92-1.1-2.81-2.32-2.81-3.56v-3.29l.35-1.44"
                                            style={{ opacity: "0.2", transformOrigin: "141.16px 411.6px" }}
                                            className="animable"
                                            id="elh5e8o1d57sj"
                                        />
                                    </g>
                                    <g id="elv8hyclgpem">
                                        <path
                                            d="M124.3,399.87v3.38l1.17.68h0a6.91,6.91,0,0,1,2-2.24Z"
                                            style={{ opacity: "0.45", transformOrigin: "125.885px 401.9px" }}
                                            className="animable"
                                            id="elmdff8p8a7d"
                                        />
                                    </g>
                                    <path
                                        d="M156.48,411.31a3.91,3.91,0,0,1-.32,1.61L154,411.69a4.2,4.2,0,0,0,2.43-3.25C156.47,409.36,156.48,411.22,156.48,411.31Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "155.24px 410.68px" }}
                                        id="el8jemt5hzx1d"
                                        className="animable"
                                    />
                                    <g id="el031j0v3pzstc">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "155.24px 410.68px" }}
                                            className="animable"
                                            id="elwm09vpwi5d"
                                        >
                                            <path
                                                d="M156.48,411.31a3.91,3.91,0,0,1-.32,1.61L154,411.69a4.2,4.2,0,0,0,2.43-3.25C156.47,409.36,156.48,411.22,156.48,411.31Z"
                                                id="elba0h5yigtfh"
                                                className="animable"
                                                style={{ transformOrigin: "155.24px 410.68px" }}
                                            />
                                        </g>
                                    </g>
                                    <path
                                        d="M156.48,413.11,154,411.69a4.18,4.18,0,0,0,2.45-3.76c0-.11,0-.22,0-.33-.1-1.16-1-2.3-2.73-3.32h0a11.27,11.27,0,0,0-5.7-1.48h-.54l-.51,0-.45,0-.18,0a1.75,1.75,0,0,0-.33.05,21.9,21.9,0,0,0-2.77.57c-.44.12-.87.24-1.3.38l-1.79.58-.68.24a21.19,21.19,0,0,1-3.8,1.08,4,4,0,0,1-1.63-.06,3.4,3.4,0,0,1-.76-.32c-1-.55-1.11-1.39.68-2.43a6.27,6.27,0,0,1,5.51-.57l3.81-3.84a16.32,16.32,0,0,0-11.49.63l-3.17-1.82-4.32,2.49,3.17,1.83c-1.55,1.19-2.37,2.44-2.35,3.63v0c0,1.22.93,2.39,2.81,3.48,4.17,2.4,8.29,1.61,12.07.39,3.51-1.15,6.07-2.5,8.09-1.33,1.27.73.89,1.61-.53,2.43a7,7,0,0,1-6,.35l-4.05,4a15.17,15.17,0,0,0,2.23.66,15,15,0,0,0,3.91.29,18.28,18.28,0,0,0,6.12-1.5l3.17,1.84,4.28-2.48Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "140.76px 406.57px" }}
                                        id="elfm8vwguneh"
                                        className="animable"
                                    />
                                    <g id="elxrd7p540dyd">
                                        <g
                                            style={{ opacity: "0.3", transformOrigin: "140.76px 406.57px" }}
                                            className="animable"
                                            id="eligrxpvbia6"
                                        >
                                            <path
                                                d="M156.48,413.11,154,411.69a4.18,4.18,0,0,0,2.45-3.76c0-.11,0-.22,0-.33-.1-1.16-1-2.3-2.73-3.32h0a11.27,11.27,0,0,0-5.7-1.48h-.54l-.51,0-.45,0-.18,0a1.75,1.75,0,0,0-.33.05,21.9,21.9,0,0,0-2.77.57c-.44.12-.87.24-1.3.38l-1.79.58-.68.24a21.19,21.19,0,0,1-3.8,1.08,4,4,0,0,1-1.63-.06,3.4,3.4,0,0,1-.76-.32c-1-.55-1.11-1.39.68-2.43a6.27,6.27,0,0,1,5.51-.57l3.81-3.84a16.32,16.32,0,0,0-11.49.63l-3.17-1.82-4.32,2.49,3.17,1.83c-1.55,1.19-2.37,2.44-2.35,3.63v0c0,1.22.93,2.39,2.81,3.48,4.17,2.4,8.29,1.61,12.07.39,3.51-1.15,6.07-2.5,8.09-1.33,1.27.73.89,1.61-.53,2.43a7,7,0,0,1-6,.35l-4.05,4a15.17,15.17,0,0,0,2.23.66,15,15,0,0,0,3.91.29,18.28,18.28,0,0,0,6.12-1.5l3.17,1.84,4.28-2.48Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    transformOrigin: "140.76px 406.57px"
                                                }}
                                                id="elycll98ttmom"
                                                className="animable"
                                            />
                                        </g>
                                    </g>
                                    <polygon
                                        points="149.74 414.16 149.74 417.54 152.91 419.37 152.91 415.99 149.74 414.16"
                                        style={{ fill: "#1A56DB", transformOrigin: "151.325px 416.765px" }}
                                        id="eleuojufwqkg8"
                                        className="animable"
                                    />
                                    <g id="elzu2k0dzi1p">
                                        <polygon
                                            points="149.74 414.16 149.74 417.54 152.91 419.37 152.91 415.99 149.74 414.16"
                                            style={{ opacity: "0.45", transformOrigin: "151.325px 416.765px" }}
                                            className="animable"
                                            id="el63orl42rawe"
                                        />
                                    </g>
                                    <g id="elqt6m9p52uem">
                                        <polygon
                                            points="124.3 399.87 128.62 397.38 131.79 399.2 128.65 397.89 124.3 399.87"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "128.045px 398.625px"
                                            }}
                                            className="animable"
                                            id="el9mv8t7tj42o"
                                        />
                                    </g>
                                    <g id="elnqviksfkvm">
                                        <path
                                            d="M134,403a6.27,6.27,0,0,1,5.51-.57l3.81-3.84L139.47,402A5.78,5.78,0,0,0,134,403Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "138.66px 400.795px"
                                            }}
                                            className="animable"
                                            id="el2o43l8tbxdq"
                                        />
                                    </g>
                                    <g id="elphjkiz4v3xm">
                                        <path
                                            d="M137.48,414.71a15.17,15.17,0,0,0,2.23.66,15,15,0,0,0,3.91.29,13.64,13.64,0,0,1-5.5-1.11l3.41-3.86Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "140.55px 413.187px"
                                            }}
                                            className="animable"
                                            id="el7my8s1t4329"
                                        />
                                    </g>
                                    <g id="el25mnvyr4ybn">
                                        <polygon
                                            points="149.74 414.16 152.91 415.59 157.19 413.52 152.91 415.99 149.74 414.16"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "153.465px 414.755px"
                                            }}
                                            className="animable"
                                            id="elunoup02o2r"
                                        />
                                    </g>
                                    <g id="ely4x4syw9u1">
                                        <path
                                            d="M112,392.89c11.23-6.83,28.76-7.51,28.76-7.51-11,0-21.35,2.47-29.09,6.94-7.43,4.28-11.51,9.86-11.51,15.73C100.15,408.05,100.55,399.83,112,392.89Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "120.46px 396.715px"
                                            }}
                                            className="animable"
                                            id="elpwr6p83ptjp"
                                        />
                                    </g>
                                    <g id="ely26o5ubntf">
                                        <path
                                            d="M137.47,432.48c11.93.53,24.17-1.84,33.3-7.1,9.48-5.48,13.54-12.91,12.17-20.05,0,0,1.77,11.64-12.89,19.61S137.47,432.48,137.47,432.48Z"
                                            style={{
                                                fill: "rgb(245, 245, 245)",
                                                opacity: "0.5",
                                                transformOrigin: "160.335px 418.941px"
                                            }}
                                            className="animable"
                                            id="eldin2jdrbmj7"
                                        />
                                    </g>
                                </g>
                            </g>
                            <g
                                id="freepik--magnifying-glass--inject-699"
                                className="animable"
                                style={{ transformOrigin: "71.55px 203.649px" }}
                            >
                                <g
                                    id="freepik--Glass--inject-699"
                                    className="animable"
                                    style={{ transformOrigin: "71.55px 203.649px" }}
                                >
                                    <path
                                        d="M61.28,224.53h0a3.18,3.18,0,0,1,1.86-2.61,10,10,0,0,1,9,0,3.18,3.18,0,0,1,1.88,2.6h0l2.68,66.42h0c.1,1.39-.76,2.79-2.59,3.85a13.93,13.93,0,0,1-12.62,0c-1.83-1.05-2.69-2.44-2.61-3.83h0Z"
                                        style={{
                                            fill: "rgb(69, 90, 100)",
                                            transformOrigin: "67.7914px 258.576px"
                                        }}
                                        id="el8nuphprperu"
                                        className="animable"
                                    />
                                    <path
                                        d="M72.17,221.9c2.5,1.44,2.51,3.77,0,5.22a10,10,0,0,1-9,0c-2.5-1.44-2.51-3.77,0-5.22A10,10,0,0,1,72.17,221.9Z"
                                        style={{ fill: "rgb(55, 71, 79)", transformOrigin: "67.67px 224.51px" }}
                                        id="elznis76e43zq"
                                        className="animable"
                                    />
                                    <path
                                        d="M64.89,206.68a6,6,0,0,1,5.46,0,1.91,1.91,0,0,1,1.13,1.58h0l0,16.26h0a1.94,1.94,0,0,1-1.13,1.58,6,6,0,0,1-5.46,0,1.92,1.92,0,0,1-1.14-1.57l0-16.27h0A1.92,1.92,0,0,1,64.89,206.68Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "67.615px 216.39px" }}
                                        id="elbqtyzc7fi5p"
                                        className="animable"
                                    />
                                    <g id="elrxpqd38q6t">
                                        <path
                                            d="M64.89,206.68a6,6,0,0,1,5.46,0,1.91,1.91,0,0,1,1.13,1.58h0l0,16.26h0a1.94,1.94,0,0,1-1.13,1.58,6,6,0,0,1-5.46,0,1.92,1.92,0,0,1-1.14-1.57l0-16.27h0A1.92,1.92,0,0,1,64.89,206.68Z"
                                            style={{ opacity: "0.2", transformOrigin: "67.615px 216.39px" }}
                                            className="animable"
                                            id="ellqbv7ea7bd"
                                        />
                                    </g>
                                    <g id="elyxmbl19gl8i">
                                        <path
                                            d="M63.78,217.3l.62.08h.35a11.52,11.52,0,0,0,1.17.09,14.24,14.24,0,0,0,1.46,0,11.24,11.24,0,0,0,1.29-.06,4.91,4.91,0,0,0,.67-.08,4.55,4.55,0,0,0,.73-.09,6.13,6.13,0,0,0,.73-.11,5,5,0,0,0,.53-.11l.17,0,0-8.77h0a1.91,1.91,0,0,0-1.13-1.58,4.82,4.82,0,0,0-1-.39,26.15,26.15,0,0,1-5.63,3.65Z"
                                            style={{ opacity: "0.2", transformOrigin: "67.62px 211.884px" }}
                                            className="animable"
                                            id="el4e90aqtrsp5"
                                        />
                                    </g>
                                    <g id="eluveoyey2q3t">
                                        <path
                                            d="M69.53,228l1.86,67.81a11.11,11.11,0,0,0,2.74-1.08c1.83-1.06,2.69-2.46,2.59-3.85h0l-2.68-66.41a3.18,3.18,0,0,1-1.86,2.61A8.54,8.54,0,0,1,69.53,228Z"
                                            style={{ opacity: "0.15", transformOrigin: "73.1289px 260.14px" }}
                                            className="animable"
                                            id="els168sf87dfi"
                                        />
                                    </g>
                                    <path
                                        d="M113,140.35c0-.46,0-.9-.07-1.35s0-.87-.09-1.31c0-.29-.06-.58-.1-.87-.07-.75-.18-1.5-.3-2.21l-.18-1c-.06-.32-.13-.61-.19-.91-.19-.83-.39-1.63-.63-2.4-.12-.37-.23-.73-.35-1.09a.49.49,0,0,1-.06-.17c-.13-.35-.25-.7-.39-1s-.31-.78-.49-1.15a8.59,8.59,0,0,0-.39-.81,4.41,4.41,0,0,0-.28-.58c-.12-.23-.24-.47-.37-.69l-.09-.15c-.11-.2-.24-.4-.36-.6s-.16-.26-.24-.38a19.31,19.31,0,0,0-1.92-2.55l-.35-.4c-.1-.12-.2-.21-.31-.32s-.25-.25-.39-.39a11,11,0,0,0-1.15-1c-.19-.17-.39-.32-.59-.47s-.4-.3-.61-.44a11.19,11.19,0,0,0-1-.65l-.27-.17,0,0h0l-6.22-3.66h0l-.09,0A19.77,19.77,0,0,0,85.55,111c-5.16,0-11,1.69-17.18,5.26C47.16,128.5,30,158.3,30,182.81c0,12.22,4.28,20.82,11.19,24.85l.06,0h0l6.24,3.65s0,0,0,0l.07,0h0l.09.05.1.05a9.84,9.84,0,0,0,.91.48c.38.19.77.36,1.16.51a9.58,9.58,0,0,0,1.06.39,5.18,5.18,0,0,0,.56.17,6.13,6.13,0,0,0,.61.18c.21.06.41.11.62.15a2.63,2.63,0,0,0,.47.1c.26.06.55.11.83.15a.58.58,0,0,0,.19,0l1,.14c5.72.6,12.38-1,19.5-5.13,21.23-12.25,38.44-42.06,38.44-66.56C113.06,141.51,113.05,140.93,113,140.35ZM43,198.18a37.56,37.56,0,0,1-1.3-10.06c0-23.22,17-52.66,37.11-64.27a35.75,35.75,0,0,1,9.41-3.9,20.62,20.62,0,0,1,4.84-.61,14.79,14.79,0,0,1,2.46.19l.06,0c4.12,4.86,4.73,12.67,4.73,16.84,0,23.22-17,52.66-37.1,64.26-5.12,3-10,4.52-14.26,4.52a9.44,9.44,0,0,1-2.59-.34h0A18.3,18.3,0,0,1,43,198.18Z"
                                        style={{
                                            fill: "rgb(55, 71, 79)",
                                            transformOrigin: "71.55px 162.401px"
                                        }}
                                        id="el1f0w0m35ln8"
                                        className="animable"
                                    />
                                    <g id="elorknpqmq0oc">
                                        <path
                                            d="M107.53,140.45c0,12.34-4.79,26.42-12.3,38.67-.36.58-.72,1.15-1.09,1.72s-.63,1-1,1.47c-.71,1.05-1.42,2.08-2.17,3.09q-.53.73-1.08,1.44c-.39.51-.79,1-1.2,1.54-.77,1-1.57,1.92-2.38,2.85-.53.62-1.08,1.22-1.63,1.81a62.41,62.41,0,0,1-14.29,11.67c-1,.56-1.91,1.06-2.85,1.52a28.47,28.47,0,0,1-9.78,2.92c-.55,0-1.1.08-1.62.08q-.42,0-.81,0h0a12.39,12.39,0,0,1-1.53-.15l-.73-.13a5.53,5.53,0,0,1-.7-.18,11.15,11.15,0,0,1-6-3.9,9.51,9.51,0,0,0,2.59.33c4.22,0,9.14-1.55,14.26-4.51,20.12-11.6,37.09-41,37.09-64.26,0-4.17-.6-12-4.72-16.85l-.07,0c5.25.84,8.23,4.41,9.91,8.53a23.53,23.53,0,0,1,1.15,3.6,1.94,1.94,0,0,0,.05.2c0,.22.1.45.14.67s.09.43.13.65l0,.16c0,.24.09.47.12.7.14.86.24,1.7.32,2.5,0,.24,0,.46,0,.68s0,.34,0,.5v.21c0,.18,0,.35,0,.53v.15c0,.22,0,.44,0,.65C107.53,139.68,107.53,140.08,107.53,140.45Z"
                                            style={{ opacity: "0.25", transformOrigin: "76.95px 164.405px" }}
                                            className="animable"
                                            id="eluiwiwdd9znj"
                                        />
                                    </g>
                                    <path
                                        d="M46.9,211l-5.76-3.39C34.22,203.61,30,195,30,182.82c0-10.93,3.43-22.91,9.09-33.91l6.58,3.78c-5.68,11-9.44,22.85-9.44,33.78C36.18,198.42,40.25,206.9,46.9,211Z"
                                        style={{
                                            fill: "rgb(38, 50, 56)",
                                            transformOrigin: "38.45px 179.955px"
                                        }}
                                        id="elnq8uafe1ieb"
                                        className="animable"
                                    />
                                    <path
                                        d="M101.86,117.26l0-.05h0l-6.22-3.66h0l-.09,0A19.75,19.75,0,0,0,85.55,111c-5.16,0-11,1.69-17.18,5.25-11.76,6.8-22.28,19-29.33,32.67l6.54,3.85c0,.09-.09.18-.14.27,7.07-13.54,17.54-25.79,29.18-33.12,10.53-6.64,20.52-6.73,27.5-2.49Z"
                                        style={{
                                            fill: "rgb(69, 90, 100)",
                                            transformOrigin: "70.58px 132.019px"
                                        }}
                                        id="eldfozhggkj0j"
                                        className="animable"
                                    />
                                    <g id="el39robkex6gv">
                                        <path
                                            d="M104.19,138.48c0,23.22-17,52.66-37.11,64.27a35.75,35.75,0,0,1-9.41,3.9,20.62,20.62,0,0,1-4.84.61,13.73,13.73,0,0,1-4.92-.84A16.57,16.57,0,0,1,43,198.18a37.56,37.56,0,0,1-1.3-10.06c0-23.22,17-52.66,37.11-64.27a35.75,35.75,0,0,1,9.41-3.9,20.62,20.62,0,0,1,4.84-.61,13.73,13.73,0,0,1,4.92.84,16.53,16.53,0,0,1,4.91,8.24A37.56,37.56,0,0,1,104.19,138.48Z"
                                            style={{
                                                fill: "#1A56DB",
                                                opacity: "0.1",
                                                transformOrigin: "72.945px 163.3px"
                                            }}
                                            className="animable"
                                            id="elckg6tb3rn9o"
                                        />
                                    </g>
                                    <g id="elc09f9t5stz6">
                                        <path
                                            d="M52.83,207.26a20.62,20.62,0,0,0,4.84-.61,35.75,35.75,0,0,0,9.41-3.9c20.12-11.61,37.11-41.05,37.11-64.27a37.56,37.56,0,0,0-1.3-10.06A16.53,16.53,0,0,0,98,120.19l-.24-.08-.67-.22-.4-.11c-.23-.06-.46-.11-.7-.15l-.41-.09h0c4.12,4.87,4.72,12.68,4.72,16.85,0,23.22-17,52.66-37.09,64.26-5.12,3-10,4.51-14.26,4.51a9.51,9.51,0,0,1-2.59-.33l0,0a11.49,11.49,0,0,0,1.51,1.53A13.73,13.73,0,0,0,52.83,207.26Z"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.3",
                                                transformOrigin: "75.2755px 163.4px"
                                            }}
                                            className="animable"
                                            id="elon80pr9q5sn"
                                        />
                                    </g>
                                </g>
                            </g>
                            <g
                                id="freepik--Character--inject-699"
                                className="animable"
                                style={{ transformOrigin: "238.411px 187.752px" }}
                            >
                                <g
                                    id="freepik--character--inject-699"
                                    className="animable"
                                    style={{ transformOrigin: "238.411px 187.752px" }}
                                >
                                    <g
                                        id="freepik--character--inject-699"
                                        className="animable"
                                        style={{ transformOrigin: "238.411px 187.752px" }}
                                    >
                                        <g
                                            id="freepik--character--inject-699"
                                            className="animable"
                                            style={{ transformOrigin: "238.411px 187.752px" }}
                                        >
                                            <path
                                                d="M241.46,221.67a4.86,4.86,0,0,1,3.28.58,15,15,0,0,1,2.55,5.33c.74,2.67,1.08,3.73,2.79,5a18.89,18.89,0,0,1,5.48,6,18.39,18.39,0,0,1,2.3,11.8c-.63,4.74-2.57,6.61-4.35,7.49a8.46,8.46,0,0,1-3.34.6Z"
                                                style={{
                                                    fill: "rgb(38, 50, 56)",
                                                    transformOrigin: "249.751px 240.034px"
                                                }}
                                                id="el5bi47g6zmoi"
                                                className="animable"
                                            />
                                            <path
                                                d="M232.72,221.19l.95.87a14,14,0,0,1,1.58,1.39c2,2.18,1.65,7,1.52,8.32a3,3,0,0,0-2.36.66c-1.55,1.1-4.08,3.25-3.87,4.12s4.47,2.74,8.5,7.72a39.42,39.42,0,0,1,5.56,9.25c1.12,2.29,3.31,6,6.87,4.69,1.85-.64,5.8-4.91,4.75-12.88-1-7.46-4.88-10.21-7.52-12.14s-2.93-4-4.39-7.61c-.64-1.59-1.07-2.85-2.85-3.91-2.35-.68-4.69-.06-6.42-.24C233.63,221.28,233.12,220.45,232.72,221.19Z"
                                                style={{
                                                    fill: "rgb(55, 71, 79)",
                                                    transformOrigin: "243.461px 239.685px"
                                                }}
                                                id="elouecx23kuwo"
                                                className="animable"
                                            />
                                            <path
                                                d="M237.32,169.84a4.8,4.8,0,0,1-2.9,2.67c-8,2.65-18.33,6-28.1,10.17-12.12,5.19-15.7,8.25-18.64,13.51-1.79,3.22-1.56,7.66-.58,10.71s3.45,7.31,9.68,10.8c12.38,6.94,19.56,11.21,27.07,14.77,0,0,6.68-7.14,7.39-13.31l-10.91-9.95,25.76-12.14,33-29.93Z"
                                                style={{
                                                    fill: "rgb(69, 90, 100)",
                                                    transformOrigin: "232.719px 199.805px"
                                                }}
                                                id="elxsk5yjmtya"
                                                className="animable"
                                            />
                                            <path
                                                d="M219.88,207.48a15.88,15.88,0,0,0-6.56,9.94c-.44,2.07-1.07,5.67-1.57,8.71,4.44,2.44,8.25,4.51,12.1,6.34,0,0,6.68-7.14,7.39-13.31l-10.91-9.95,1.5-.7Z"
                                                style={{
                                                    fill: "rgb(55, 71, 79)",
                                                    transformOrigin: "221.495px 219.975px"
                                                }}
                                                id="el21xbiqg9flmh"
                                                className="animable"
                                            />
                                            <path
                                                d="M246.09,197.07,239,175.16l-3.6,5.45a28.5,28.5,0,0,0,2.74,10.57s-12,9.21-13.42,10.09c-5.32,3.31-6,2.85-9,.7a12.11,12.11,0,0,0-11.05-1.72c7.44-.53,9.27,2.55,15.73,9l25.76-12.14Z"
                                                style={{
                                                    fill: "rgb(55, 71, 79)",
                                                    transformOrigin: "225.415px 192.205px"
                                                }}
                                                id="elw8v1abinoxq"
                                                className="animable"
                                            />
                                            <path
                                                d="M212.09,281c0,2.39.88,5.94-.48,8.68a8,8,0,0,1-4.57,4A10.31,10.31,0,0,0,204.1,295c-1,.84-2,1.69-3,2.52a35.6,35.6,0,0,0-4.28,3.44c-3.49,3.73-9,4.89-14,4.53a18.07,18.07,0,0,1-7.09-1.79c-1.59-.78-3.51-2.29-3.5-4.23s1.53-2.72,3-3.78a41,41,0,0,1,6-3.35,31.06,31.06,0,0,0,6.07-3.8c1.94-1.7,7.38-5,10.69-12.13,1.51-3.26,6.51-17.84,6.51-17.84l17.69,5.3S212.1,278.6,212.09,281Z"
                                                style={{
                                                    fill: "rgb(255, 189, 167)",
                                                    transformOrigin: "197.21px 282.061px"
                                                }}
                                                id="elsbnga3on7js"
                                                className="animable"
                                            />
                                            <path
                                                d="M212.16,290.41a5.37,5.37,0,0,1-.69,3.58,16.46,16.46,0,0,1-5.88,2.68c-2.93.76-4.1,1.12-5.49,3a16.67,16.67,0,0,1-5.94,5.61A19.6,19.6,0,0,1,179,307.07c-4.67-1.19-6.24-3.72-6.59-4.42a5.31,5.31,0,0,1-.37-3.1Z"
                                                style={{
                                                    fill: "rgb(38, 50, 56)",
                                                    transformOrigin: "192.09px 299.128px"
                                                }}
                                                id="ela0trwxz0fa"
                                                className="animable"
                                            />
                                            <path
                                                d="M212.57,279.48a17.94,17.94,0,0,0-.68,1.86,4.19,4.19,0,0,1-1.63,2.07c-2.42,1.64-5.86,1.6-7.28,1.43a2.94,2.94,0,0,0-1.63-3.1c-2.81-1.41-5.48-2.32-6.39-1.94-2.1.88-.48,1.72-7,7.13a59,59,0,0,1-11,7.36c-2.44,1.36-5.79,3.62-4.74,6.36.67,2,5.23,6.31,13.66,5.57,7.78-.68,11.39-5.26,13.55-8.1s4.39-3.18,8.39-4.72c1.75-.67,3.13-1.06,4.33-3,.78-2.55.35-6,.58-7.92C212.93,281,213.36,279.94,212.57,279.48Z"
                                                style={{
                                                    fill: "rgb(55, 71, 79)",
                                                    transformOrigin: "192.525px 292.892px"
                                                }}
                                                id="eldwe17w0vbq"
                                                className="animable"
                                            />
                                            <path
                                                d="M234.36,174.52l5-5L287,175.8c.08,4.75-.88,14.86-2.78,19.94-1.74,4.65-4,9.62-15,15.52S245,223.12,242.32,224.62c-3.85,2.18-3.75,2.27-4.66,9.08-.93,7-4.27,14.85-8.93,21.85-3.65,5.48-14,22.8-14,22.8-6.81,1.35-12.36-2.57-15.42-6.32,0,0,13.9-44,15.31-51.26.79-4.05,1.57-7.69,6.42-12.27,4.16-3.92,20.29-17.67,20.29-17.67S234.91,185.19,234.36,174.52Z"
                                                style={{
                                                    fill: "rgb(69, 90, 100)",
                                                    transformOrigin: "243.157px 224.071px"
                                                }}
                                                id="eluyocqz8kh2q"
                                                className="animable"
                                            />
                                            <path
                                                d="M278.88,179.87c.52,10.1.83,16.2-12.95,23.24-4.15,2.12-8.47,4.13-12.64,6.08-12.38,5.79-20.81,12.07-21.47,16.67-.25,1.75-.39,3.84-.56,6.27-.4,5.72-.73,10.46-5.44,19.52-3.29,6.3-10.14,19.29-13.57,24.56l1.26.13c3.34-5.35,9.66-17,13.28-24.06,4.83-9.4,5.2-14.3,5.6-20.08.17-2.39.32-4.47.56-6.18.57-4,9.72-10.61,20.82-15.8,4.18-1.95,8.51-4,12.68-6.1,14.44-7.37,14.09-14.11,13.56-24.3,0-1-.09-2-.13-3l-1.15-.22C278.77,177.72,278.82,178.82,278.88,179.87Z"
                                                style={{
                                                    fill: "rgb(55, 71, 79)",
                                                    transformOrigin: "246.222px 226.47px"
                                                }}
                                                id="elig1wih577zl"
                                                className="animable"
                                            />
                                            <path
                                                d="M270.29,201.73c-.17-.13-4.24-3.18-2.35-10.53A42.16,42.16,0,0,0,269.27,174l1.13-.11A43.42,43.42,0,0,1,269,191.48c-1.69,6.61,1.88,9.3,1.92,9.32Z"
                                                style={{
                                                    fill: "rgb(55, 71, 79)",
                                                    transformOrigin: "269.18px 187.81px"
                                                }}
                                                id="elnlhjwx6paz"
                                                className="animable"
                                            />
                                            <path
                                                d="M200.88,267c1.67,2.82,11.79,8.33,16.78,6.65l-2.91,5c-3.7,1.7-12-1.62-16-5.84Z"
                                                style={{
                                                    fill: "rgb(55, 71, 79)",
                                                    transformOrigin: "208.205px 273.052px"
                                                }}
                                                id="elh7vrdfv6z"
                                                className="animable"
                                            />
                                            <g
                                                id="freepik--Top--inject-699"
                                                className="animable"
                                                style={{ transformOrigin: "245.758px 138.684px" }}
                                            >
                                                <g
                                                    id="freepik--Arm--inject-699"
                                                    className="animable"
                                                    style={{ transformOrigin: "241.32px 139.42px" }}
                                                >
                                                    <path
                                                        id="freepik--arm--inject-699"
                                                        d="M250.16,112.36c-8.36,0-13.28,3.63-13.28,10.63,0,6.07,2.27,25,2.27,25l-12.5,9.84,7.22,8.65s12.34-6.26,16.61-8.59c6.51-3.56,5.69-4.92,5.16-13.16S250.16,112.36,250.16,112.36Z"
                                                        style={{
                                                            fill: "rgb(235, 235, 235)",
                                                            transformOrigin: "241.32px 139.42px"
                                                        }}
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M229,156l4.28-3.36a12.8,12.8,0,0,1,4.86,5.45,13.27,13.27,0,0,1,1.23,5.61l-4.55,2.32S234.11,158.78,229,156Z"
                                                        style={{
                                                            fill: "rgb(224, 224, 224)",
                                                            transformOrigin: "234.185px 159.33px"
                                                        }}
                                                        id="elnil4rxp40h"
                                                        className="animable"
                                                    />
                                                </g>
                                                <path
                                                    id="freepik--Chest--inject-699"
                                                    d="M262.45,112.34c7.06.48,10.16,1.87,18.64,3.65,2,1.85,5,9.68,5.94,19.5,1.17,12.8,1.24,17.74.9,33.38a117.34,117.34,0,0,1-1.27,16.36c-12.56,7.59-44.42,3.48-53.4-12.44,2.23-3.38,3.2-14,3.68-37.37.29-13.73,8-22.89,13.34-23.07C252.93,112.29,257.92,112,262.45,112.34Z"
                                                    style={{
                                                        fill: "rgb(245, 245, 245)",
                                                        transformOrigin: "260.684px 150.548px"
                                                    }}
                                                    className="animable"
                                                />
                                                <g
                                                    id="freepik--Head--inject-699"
                                                    className="animable"
                                                    style={{ transformOrigin: "258.169px 96.5933px" }}
                                                >
                                                    <path
                                                        d="M242.29,87.26a7.74,7.74,0,0,1-3.06-3.66,12.16,12.16,0,0,1-.87-5.3,6,6,0,0,1,.44-1.84,2.66,2.66,0,0,1,2-1c.49-.09,1-.16,1.47-.23A9.6,9.6,0,0,1,240,72.09a5,5,0,0,1-.24-2.87,1.46,1.46,0,0,1,.3-.71,1.66,1.66,0,0,1,1.66-.26,32.26,32.26,0,0,0,10.54.54c2.79-.23,4.18-.6,8-1.06s10.72,1.12,12.09,8.32c5.16.72,6,9,4.66,12.53-2.54,6.51-5,10.83-6.26,15.51-.27-.18-17.75-9.7-21.77-12.39l-4.52-3C243.69,88.18,243,87.74,242.29,87.26Z"
                                                        style={{
                                                            fill: "rgb(38, 50, 56)",
                                                            transformOrigin: "257.957px 85.8733px"
                                                        }}
                                                        id="el0756m4glfia"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M275.58,99.19c-3,2.38-5,.24-5,.24l.5,14.71c-1.54,2.12-8.08,3.56-11.06,5.51-1.15.75-3,3.74-4.93,5.88-1.12-2.44-3.54-8.29-.18-12.34l-.08-2.81a25.26,25.26,0,0,1-4.7-.07,7.77,7.77,0,0,1-2.76-.93,8.41,8.41,0,0,1-3.88-4.9,41,41,0,0,1-1.77-11.15c-.15-4.54.13-10.42,1.54-13.5,2.64-2.48,10.72-3,17.57-1.22.18,1.69,0,3.18,1.46,5a7.26,7.26,0,0,0,2.66,2c.29,3.29.45,4.18,1.1,5.62.37.82,1.08,2.06,2.74,1.4.78-.31,1.31-2.08,2.1-3.27,1-1.6,4.49-2.44,6.27.9A7.45,7.45,0,0,1,275.58,99.19Z"
                                                        style={{
                                                            fill: "rgb(255, 189, 167)",
                                                            transformOrigin: "259.842px 101.543px"
                                                        }}
                                                        id="el3zs6x0ve538"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M254.79,110.38c3.42-.45,9.5-1.94,11.2-4.09s2.93-7,2.93-7-.51,5.46-1.78,7.86-4.21,3.45-6.35,4.17a37.53,37.53,0,0,1-5.94,1.17Z"
                                                        style={{
                                                            fill: "rgb(240, 153, 122)",
                                                            transformOrigin: "261.855px 105.89px"
                                                        }}
                                                        id="ele4zoi28c5z5"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M255.65,87.58l3.49-.78a1.88,1.88,0,0,0-2.2-1.39A1.75,1.75,0,0,0,255.65,87.58Z"
                                                        style={{
                                                            fill: "rgb(38, 50, 56)",
                                                            transformOrigin: "257.363px 86.4761px"
                                                        }}
                                                        id="ellsjccuser1"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M247.19,86.11l-2.84,2.18a1.87,1.87,0,0,1,.35-2.57A1.74,1.74,0,0,1,247.19,86.11Z"
                                                        style={{
                                                            fill: "rgb(38, 50, 56)",
                                                            transformOrigin: "245.59px 86.8252px"
                                                        }}
                                                        id="elrlour18l5ka"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M256.54,100.2l-3.69,1.55a2.1,2.1,0,0,0,2.69,1.1A2,2,0,0,0,256.54,100.2Z"
                                                        style={{
                                                            fill: "rgb(177, 102, 104)",
                                                            transformOrigin: "254.784px 101.598px"
                                                        }}
                                                        id="elauslnf7uokb"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M256.45,101a2,2,0,0,0-1.89,2,2.07,2.07,0,0,0,1-.13,1.94,1.94,0,0,0,1.19-1.84Z"
                                                        style={{
                                                            fill: "rgb(255, 168, 167)",
                                                            transformOrigin: "255.655px 102.007px"
                                                        }}
                                                        id="elovv0cmvdvu"
                                                        className="animable"
                                                    />
                                                    <polygon
                                                        points="253.05 88.5 252.3 99.26 246.68 97.1 253.05 88.5"
                                                        style={{
                                                            fill: "rgb(240, 153, 122)",
                                                            transformOrigin: "249.865px 93.88px"
                                                        }}
                                                        id="eljno7x18gtqd"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M258.83,90.67a1.47,1.47,0,1,1-1.53-1.39A1.47,1.47,0,0,1,258.83,90.67Z"
                                                        style={{
                                                            fill: "rgb(38, 50, 56)",
                                                            transformOrigin: "257.362px 90.7487px"
                                                        }}
                                                        id="elrb58vx2qjm"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M247.85,91.06a1.46,1.46,0,0,1-1.47,1.46A1.48,1.48,0,0,1,244.92,91a1.46,1.46,0,0,1,1.48-1.45A1.45,1.45,0,0,1,247.85,91.06Z"
                                                        style={{
                                                            fill: "rgb(38, 50, 56)",
                                                            transformOrigin: "246.385px 91.035px"
                                                        }}
                                                        id="eld8h5wc6u8yq"
                                                        className="animable"
                                                    />
                                                </g>
                                                <g
                                                    id="freepik--Laptop--inject-699"
                                                    className="animable"
                                                    style={{ transformOrigin: "227.104px 179.9px" }}
                                                >
                                                    <path
                                                        d="M267.56,191.89l0,.89a2.54,2.54,0,0,1-1.22,2.21l-23.75,14.36a2.55,2.55,0,0,1-1.25.36,2.49,2.49,0,0,1-1.27-.31l-44.66-24.52a2.54,2.54,0,0,1-1.31-2.16v-.61L241.32,208Z"
                                                        style={{
                                                            fill: "rgb(235, 235, 235)",
                                                            transformOrigin: "230.83px 195.91px"
                                                        }}
                                                        id="ellbcro8lv64p"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M194.11,182.11l25.83-15.66a1.53,1.53,0,0,1,1.51,0l45.93,25.23a.33.33,0,0,1,0,.58L241.32,208Z"
                                                        style={{
                                                            fill: "rgb(250, 250, 250)",
                                                            transformOrigin: "230.831px 187.125px"
                                                        }}
                                                        id="eljp060ydt3dl"
                                                        className="animable"
                                                    />
                                                    <polygon
                                                        points="241.51 205.81 255.45 197.37 213.69 174.44 199.68 182.83 241.51 205.81"
                                                        style={{
                                                            fill: "rgb(224, 224, 224)",
                                                            transformOrigin: "227.565px 190.125px"
                                                        }}
                                                        id="elhzbshu0ddtv"
                                                        className="animable"
                                                    />
                                                    <polygon
                                                        points="247.96 183.03 247.71 183.18 240.88 187.32 228.43 180.48 228.17 180.34 235.26 176.05 247.96 183.03"
                                                        style={{
                                                            fill: "rgb(224, 224, 224)",
                                                            transformOrigin: "238.065px 181.685px"
                                                        }}
                                                        id="elnsss2ujg1wk"
                                                        className="animable"
                                                    />
                                                    <polygon
                                                        points="247.71 183.18 240.88 187.32 228.43 180.48 235.26 176.34 247.71 183.18"
                                                        style={{
                                                            fill: "rgb(230, 230, 230)",
                                                            transformOrigin: "238.07px 181.83px"
                                                        }}
                                                        id="el0712ue6awdz7"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M241.32,208l0,1.68a2.49,2.49,0,0,1-1.27-.31l-44.66-24.52a2.54,2.54,0,0,1-1.31-2.16v-.61Z"
                                                        style={{
                                                            fill: "rgb(235, 235, 235)",
                                                            transformOrigin: "217.7px 195.88px"
                                                        }}
                                                        id="elnek6t0rqou"
                                                        className="animable"
                                                    />
                                                    <g id="elhow2byf2ogd">
                                                        <g
                                                            style={{
                                                                opacity: "0.5",
                                                                mixBlendMode: "multiply",
                                                                transformOrigin: "217.7px 195.88px"
                                                            }}
                                                            className="animable"
                                                            id="ell9nb8t3j6d"
                                                        >
                                                            <path
                                                                d="M241.32,208l0,1.68a2.49,2.49,0,0,1-1.27-.31l-44.66-24.52a2.54,2.54,0,0,1-1.31-2.16v-.61Z"
                                                                style={{
                                                                    fill: "rgb(224, 224, 224)",
                                                                    transformOrigin: "217.7px 195.88px"
                                                                }}
                                                                id="elxavqvsbd1q"
                                                                className="animable"
                                                            />
                                                        </g>
                                                    </g>
                                                    <path
                                                        d="M229.37,155.74a27.41,27.41,0,0,1-7.89,4.64c-5.41,1.94-6.53,1.9-10.77,5.15a37,37,0,0,0-4.11,3.9c-1.23,2.18-3,4-4.35,6.13-1.12,1.24.27,1.6,1.36,1.42,3-.64,4.79-3.52,7.21-5.11a10.4,10.4,0,0,0,.22,3c.18.81.23,1.82,1.06,2.24a6.27,6.27,0,0,0,1.83.31,1.26,1.26,0,0,0,.51.7,2.12,2.12,0,0,0,1.51,0,6.49,6.49,0,0,0,.78-.31,1.52,1.52,0,0,0,1.17.95,6.73,6.73,0,0,0,3.44-.66c.15-.11,1.26-1.09,1.59-1.37s.92-.67,1.07-1.07-.81-1.27-1.49-1.22a6.53,6.53,0,0,0-2.14.64,7.92,7.92,0,0,0,.21-2c.37-1.08,4.88-.52,8.52-2,2.75-1.16,3.48-3.93,4.77-4.59l1.15-.58C235,160.93,232.64,157.35,229.37,155.74Z"
                                                        style={{
                                                            fill: "rgb(255, 189, 167)",
                                                            transformOrigin: "218.428px 167.259px"
                                                        }}
                                                        id="el2nip4jq6xe"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M240.62,208.42a3,3,0,0,1-2.58-.14l-44.46-24.42a3,3,0,0,1-1.5-2.06l-5.42-28.57a2.63,2.63,0,0,1,0-.49,2.94,2.94,0,0,1,.84-2.14L233.65,176a2.22,2.22,0,0,1,1.11,1.52Z"
                                                        style={{
                                                            fill: "#1A56DB",
                                                            transformOrigin: "213.634px 179.623px"
                                                        }}
                                                        id="eluod6wu0k5t"
                                                        className="animable"
                                                    />
                                                    <g id="el2jniccc9l0b">
                                                        <g
                                                            style={{
                                                                opacity: "0.7",
                                                                transformOrigin: "213.634px 179.623px"
                                                            }}
                                                            className="animable"
                                                            id="elg4mlktrl9e"
                                                        >
                                                            <path
                                                                d="M240.62,208.42a3,3,0,0,1-2.58-.14l-44.46-24.42a3,3,0,0,1-1.5-2.06l-5.42-28.57a2.63,2.63,0,0,1,0-.49,2.94,2.94,0,0,1,.84-2.14L233.65,176a2.22,2.22,0,0,1,1.11,1.52Z"
                                                                style={{
                                                                    fill: "rgb(255, 255, 255)",
                                                                    transformOrigin: "213.634px 179.623px"
                                                                }}
                                                                id="elkf54ujjp2u"
                                                                className="animable"
                                                            />
                                                        </g>
                                                    </g>
                                                    <path
                                                        d="M241.32,208l-.3.18a3,3,0,0,1-.4.21l-5.86-30.92a2.22,2.22,0,0,0-1.11-1.52l-46.2-25.38a2.88,2.88,0,0,1,.6-.48l46.29,25.43a2.19,2.19,0,0,1,1.11,1.52Z"
                                                        style={{
                                                            fill: "rgb(250, 250, 250)",
                                                            transformOrigin: "214.385px 179.24px"
                                                        }}
                                                        id="el10kquhrz2ksm"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M215.32,182.48c-.37-1.91-2.4-4.42-4.55-5.6s-3.6-.59-3.24,1.33,2.4,4.42,4.55,5.6S215.68,184.39,215.32,182.48Z"
                                                        style={{
                                                            fill: "#1A56DB",
                                                            transformOrigin: "211.425px 180.344px"
                                                        }}
                                                        id="el4ztb9l7mvs8"
                                                        className="animable"
                                                    />
                                                </g>
                                                <g
                                                    id="freepik--arm--inject-699"
                                                    className="animable"
                                                    style={{ transformOrigin: "271.47px 153.47px" }}
                                                >
                                                    <path
                                                        d="M303.1,156.38c-2.61-11.08-7.24-23.68-10.2-31.94-1.58-4.38-4-6.21-10.92-8-4.84,7.13-3.53,18.28-1.78,22.4l6.65,18.7s-6.05,5.57-11.75,9.81c-4.82,3.57-7.3,5.64-13,5.6-6.64,0-7.57.21-10.54,1.53-1.58.69-5.66,3-7.25,3.87-1.21.65-3.43,3-5.47,4.5s.47,2.21,2,1.76a22.55,22.55,0,0,0,4.89-2.29,26.48,26.48,0,0,1,3.84-1.49,23.07,23.07,0,0,0-.79,4.5c0,.82-.17,1.81.54,2.41a6.35,6.35,0,0,0,1.73.7,1.2,1.2,0,0,0,.34.79,2,2,0,0,0,1.46.37,6.15,6.15,0,0,0,.84-.13,1.5,1.5,0,0,0,.93,1.18,6.6,6.6,0,0,0,3.5.1c.17-.07,1.47-.78,1.85-1a3.41,3.41,0,0,0,1.28-.82c.29-.42-.52-1.41-1.19-1.51a6.7,6.7,0,0,0-2.23.16,7.68,7.68,0,0,0,.64-1.93c.61-1,5,0,8.88-.7,2.94-.53,5.05-3.33,6.37-3.93,8.44-3.86,14.89-6.57,23.4-11.77C304.85,164.5,304.51,162.34,303.1,156.38Z"
                                                        style={{
                                                            fill: "rgb(255, 189, 167)",
                                                            transformOrigin: "270.985px 153.69px"
                                                        }}
                                                        id="el729mhjo46a5"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M248.77,181.07c.44-1.12,1.13-2.44,2-2.75a10.26,10.26,0,0,0-1.22,2.48Z"
                                                        style={{
                                                            fill: "rgb(240, 153, 122)",
                                                            transformOrigin: "249.77px 179.695px"
                                                        }}
                                                        id="elfgreqbd4vyc"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M251,188.41a8.9,8.9,0,0,1-.09-2.42,21.26,21.26,0,0,1,.3-2.4,10.24,10.24,0,0,1,.64-2.35,4.4,4.4,0,0,1,1.44-2,3.59,3.59,0,0,0-.66,1,7.36,7.36,0,0,0-.45,1.09,19.37,19.37,0,0,0-.52,2.31c-.14.79-.27,1.57-.4,2.36A19,19,0,0,0,251,188.41Z"
                                                        style={{
                                                            fill: "rgb(240, 153, 122)",
                                                            transformOrigin: "252.078px 183.825px"
                                                        }}
                                                        id="elyk2g0tafe5i"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M253.64,189.44a11.14,11.14,0,0,1,0-2.38,18.76,18.76,0,0,1,.35-2.35,15.35,15.35,0,0,1,.63-2.3,4.52,4.52,0,0,1,1.21-2,2.89,2.89,0,0,0-.53,1c-.13.37-.24.74-.34,1.12-.19.75-.37,1.52-.52,2.28C254.11,186.34,253.81,187.87,253.64,189.44Z"
                                                        style={{
                                                            fill: "rgb(240, 153, 122)",
                                                            transformOrigin: "254.703px 184.925px"
                                                        }}
                                                        id="elggdc9q9d5hc"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M260,187.41a4.13,4.13,0,0,0-1,.14c-.32.08-.54.24-.94.37l.16-.26a1,1,0,0,1-.06.47,1.21,1.21,0,0,1-.22.37,1.34,1.34,0,0,1-.67.44,3.54,3.54,0,0,0,.4-.61,1.21,1.21,0,0,0,.09-.31.92.92,0,0,0,0-.27l0-.18.19-.08a2.56,2.56,0,0,1,.92-.2A2,2,0,0,1,260,187.41Z"
                                                        style={{
                                                            fill: "rgb(240, 153, 122)",
                                                            transformOrigin: "258.635px 188.098px"
                                                        }}
                                                        id="eli42s5rnllv"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M281.09,116c2.61.42,7.8.89,10.57,4.94s4.28,9.23,6.51,16.07,5.68,18.43,6.43,22.09,0,5.71-3.3,8-13,7.9-17.8,9.45a14.64,14.64,0,0,0-3.3-7.15,15.1,15.1,0,0,0-3.67-3.21l9.9-8.72s-6.38-18.27-7.48-21S276.42,123.06,281.09,116Z"
                                                        style={{
                                                            fill: "rgb(235, 235, 235)",
                                                            transformOrigin: "290.698px 146.275px"
                                                        }}
                                                        id="ela9w91950ds"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M277.84,165.08l-4.65,3.65a15.65,15.65,0,0,1,4.44,4.49,11.83,11.83,0,0,1,2,5.1l6-2.52S284.82,166.72,277.84,165.08Z"
                                                        style={{
                                                            fill: "rgb(224, 224, 224)",
                                                            transformOrigin: "279.41px 171.7px"
                                                        }}
                                                        id="eldttumi36eyw"
                                                        className="animable"
                                                    />
                                                </g>
                                                <g
                                                    id="freepik--Tie--inject-699"
                                                    className="animable"
                                                    style={{ transformOrigin: "261.452px 136.926px" }}
                                                >
                                                    <path
                                                        d="M255.05,125.53a43.33,43.33,0,0,0,3.68-6.5c1-2,4.38-2.43,7.86-4.61a12.26,12.26,0,0,0,4.31-4.31l-.08-2.26c1.22,0,1.24,1,1.78,2.25s2.37,4.15,3.81,4.55c-1.54,4.33-6.81,9.43-12.51,11.79-2-4.53-4.12-5.86-4.79-5C257.49,123.39,256.64,124.61,255.05,125.53Z"
                                                        style={{
                                                            fill: "rgb(230, 230, 230)",
                                                            transformOrigin: "265.73px 117.145px"
                                                        }}
                                                        id="elrw0hzb4irgq"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M255.05,125.53c-.77-1.84-.59-4.85-1.08-7.72-.18-1.1.9-4.62.9-4.62l-.08-2.81-1.68.08a7.36,7.36,0,0,1-1.51,1.85c-2.12,1.87-3.74,8.18-3,10.72.68-2.34,2.48-4,3.53-3.56S253.64,124.11,255.05,125.53Z"
                                                        style={{
                                                            fill: "rgb(230, 230, 230)",
                                                            transformOrigin: "251.734px 117.955px"
                                                        }}
                                                        id="ellaqx7tm4o6"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M256.26,130c0,5.75.66,20.78,1.17,25,.4,3.35-4.37,10.8-5.8,11-.87.13-4.94-6.56-5.13-11.32-.17-4.33,3.48-18.89,6.2-25.49A1.87,1.87,0,0,1,256.26,130Z"
                                                        style={{
                                                            fill: "#1A56DB",
                                                            transformOrigin: "251.974px 147.061px"
                                                        }}
                                                        id="ellktq9j9py38"
                                                        className="animable"
                                                    />
                                                    <path
                                                        d="M253.06,123.8c-1-1.29-.68-4.15-.68-4.15-.55-.65-1.88,0-2.75,1.27,0,0,.38,4,2.75,5.85Z"
                                                        style={{
                                                            fill: "#1A56DB",
                                                            transformOrigin: "251.345px 123.082px"
                                                        }}
                                                        id="el3acz8b34iq9"
                                                        className="animable"
                                                    />
                                                    <g id="elr4gk6il75ft">
                                                        <path
                                                            d="M252.38,126.77l.68-3a2.91,2.91,0,0,1-.2-.35h0A2.88,2.88,0,0,0,251.6,126,5.17,5.17,0,0,0,252.38,126.77Z"
                                                            style={{
                                                                opacity: "0.15",
                                                                transformOrigin: "252.327px 125.095px"
                                                            }}
                                                            className="animable"
                                                            id="elk97bzmh2m1h"
                                                        />
                                                    </g>
                                                    <g id="elgs3u5yegl7">
                                                        <path
                                                            d="M252.38,119.65c-.55-.65-1.88,0-2.75,1.27a10.77,10.77,0,0,0,.29,1.55c.41-1.13,1.38-2.26,2-2.11a1.33,1.33,0,0,1,.46.23C252.34,120,252.38,119.65,252.38,119.65Z"
                                                            style={{
                                                                opacity: "0.15",
                                                                transformOrigin: "251.005px 120.932px"
                                                            }}
                                                            className="animable"
                                                            id="elgpy5lnk3yjw"
                                                        />
                                                    </g>
                                                    <path
                                                        d="M257.18,124.81c1.54-.76,3.23-3.35,3.23-3.35a9.55,9.55,0,0,1,2.58,3.17,13.17,13.17,0,0,1-5.19,2.44Z"
                                                        style={{
                                                            fill: "#1A56DB",
                                                            transformOrigin: "260.085px 124.265px"
                                                        }}
                                                        id="elovkgvtc6ni8"
                                                        className="animable"
                                                    />
                                                    <g id="elnrs9t8o2va">
                                                        <path
                                                            d="M260.41,121.46,260,122a9.35,9.35,0,0,1,2.25,3.16,7.7,7.7,0,0,0,.7-.52A9.55,9.55,0,0,0,260.41,121.46Z"
                                                            style={{
                                                                opacity: "0.15",
                                                                transformOrigin: "261.475px 123.31px"
                                                            }}
                                                            className="animable"
                                                            id="el2j8gjvjkwhy"
                                                        />
                                                    </g>
                                                    <path
                                                        d="M255.13,123.64c-2.33-.45-2.59.74-3,1.89-.28.72-.08,3.05.6,3.71a3.76,3.76,0,0,1,3.56.75c.9-.9,1.81-2.5,1.66-3.48A3.36,3.36,0,0,0,255.13,123.64Z"
                                                        style={{
                                                            fill: "#1A56DB",
                                                            transformOrigin: "254.987px 126.766px"
                                                        }}
                                                        id="elm2ltlop9zfd"
                                                        className="animable"
                                                    />
                                                    <g id="elxuz0ym25lr">
                                                        <path
                                                            d="M256.26,130c.9-.9,1.81-2.5,1.66-3.48a3.42,3.42,0,0,0-1.42-2.31,3.48,3.48,0,0,1,.25,3.59c-.65.83-.95.69-1.89.58s-2.16.49-2.16.87A3.76,3.76,0,0,1,256.26,130Z"
                                                            style={{
                                                                opacity: "0.15",
                                                                transformOrigin: "255.318px 127.105px"
                                                            }}
                                                            className="animable"
                                                            id="elw7tlg2lkpyn"
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g
                                id="freepik--curve-chart--inject-699"
                                className="animable"
                                style={{ transformOrigin: "178.532px 91.9773px" }}
                            >
                                <g
                                    id="freepik--speech-bubble--inject-699"
                                    className="animable"
                                    style={{ transformOrigin: "178.532px 91.9773px" }}
                                >
                                    <path
                                        d="M222,130.35c-13.93,0-21.29-7.08-21.29-20.49h.72c0,12.93,7.11,19.77,20.57,19.77Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "211.355px 120.105px" }}
                                        id="eluytt42uhcpj"
                                        className="animable"
                                    />
                                    <g id="elmrpzx640qx">
                                        <path
                                            d="M222,130.35c-13.93,0-21.29-7.08-21.29-20.49h.72c0,12.93,7.11,19.77,20.57,19.77Z"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.8",
                                                transformOrigin: "211.355px 120.105px"
                                            }}
                                            className="animable"
                                            id="elv6g4jpeo3fo"
                                        />
                                    </g>
                                    <path
                                        d="M134,148.42a1.07,1.07,0,0,1-.48-1V82.15A2.73,2.73,0,0,1,134.79,80l77-44.43a1.06,1.06,0,0,1,1.08-.07,1.07,1.07,0,0,1,.48,1v65.29a2.73,2.73,0,0,1-1.25,2.16l-77,44.43a1.38,1.38,0,0,1-.65.19A.92.92,0,0,1,134,148.42Zm78-112.31-77,44.43a2.07,2.07,0,0,0-.93,1.61v65.29a.36.36,0,0,0,.62.35l77-44.43a2.1,2.1,0,0,0,.93-1.61V36.46a.5.5,0,0,0-.16-.43.28.28,0,0,0-.13,0A.71.71,0,0,0,212.06,36.11Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "173.435px 91.9773px" }}
                                        id="ell52yvobfttd"
                                        className="animable"
                                    />
                                    <g id="elgb45nn2vhac">
                                        <path
                                            d="M134,148.42a1.07,1.07,0,0,1-.48-1V82.15A2.73,2.73,0,0,1,134.79,80l77-44.43a1.06,1.06,0,0,1,1.08-.07,1.07,1.07,0,0,1,.48,1v65.29a2.73,2.73,0,0,1-1.25,2.16l-77,44.43a1.38,1.38,0,0,1-.65.19A.92.92,0,0,1,134,148.42Zm78-112.31-77,44.43a2.07,2.07,0,0,0-.93,1.61v65.29a.36.36,0,0,0,.62.35l77-44.43a2.1,2.1,0,0,0,.93-1.61V36.46a.5.5,0,0,0-.16-.43.28.28,0,0,0-.13,0A.71.71,0,0,0,212.06,36.11Z"
                                            style={{
                                                fill: "rgb(255, 255, 255)",
                                                opacity: "0.8",
                                                transformOrigin: "173.435px 91.9773px"
                                            }}
                                            className="animable"
                                            id="el91c6nfmmek"
                                        />
                                    </g>
                                    <circle
                                        cx="221.98"
                                        cy="130.01"
                                        r="1.57"
                                        style={{ fill: "#1A56DB", transformOrigin: "221.98px 130.01px" }}
                                        id="elxtlsmhy56f"
                                        className="animable"
                                    />
                                    <path
                                        d="M141.83,129.38h-.11a.47.47,0,0,1-.36-.57l.54-2.52c2.23-10.24,5.28-24.27,9.59-26.76,2.31-1.34,3.69.85,4.91,2.77,1.58,2.5,2.69,3.93,4.82,2.7,2.3-1.33,3.67-7.55,5.12-14.13,1.8-8.22,3.85-17.54,8.44-20.19a2.81,2.81,0,0,1,2.63-.25c2.88,1.27,4.33,7.83,5.86,14.78,1.34,6,2.72,12.28,4.85,13.22a1.49,1.49,0,0,0,1.41-.16c2.22-1.29,3.25-5.4,4.25-9.38,1.13-4.5,2.29-9.14,5.26-10.85a1.81,1.81,0,0,1,1.74-.12c2.26,1,3.56,6.88,4.6,12.28l.12.61a.48.48,0,0,1-.95.19l-.12-.62c-.67-3.46-2.05-10.67-4.05-11.58a.89.89,0,0,0-.86.07c-2.61,1.51-3.73,6-4.8,10.25s-2.13,8.49-4.71,10a2.41,2.41,0,0,1-2.28.21c-2.58-1.13-3.95-7.33-5.4-13.89-1.35-6.11-2.88-13-5.31-14.11a1.87,1.87,0,0,0-1.76.21C171,73.94,169,83,167.28,91.07c-1.56,7.09-2.91,13.21-5.57,14.75-3.1,1.79-4.78-.87-6.13-3s-2.25-3.24-3.61-2.46c-3.94,2.28-7.06,16.63-9.12,26.13L142.3,129A.48.48,0,0,1,141.83,129.38Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "173.428px 99.797px" }}
                                        id="ele7s6v8rou6"
                                        className="animable"
                                    />
                                    <path
                                        d="M152.32,98.18a3.56,3.56,0,0,0-1.61,2.79c0,1,.72,1.44,1.61.93a3.55,3.55,0,0,0,1.61-2.79C153.93,98.09,153.21,97.67,152.32,98.18Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "152.32px 100.038px" }}
                                        id="elnk7o3gp4n1m"
                                        className="animable"
                                    />
                                    <g id="el9j2ekkqhi5f">
                                        <g
                                            style={{ opacity: "0.55", transformOrigin: "152.32px 100.038px" }}
                                            className="animable"
                                            id="elvwhwag4l7he"
                                        >
                                            <path
                                                d="M152.32,98.18a3.56,3.56,0,0,0-1.61,2.79c0,1,.72,1.44,1.61.93a3.55,3.55,0,0,0,1.61-2.79C153.93,98.09,153.21,97.67,152.32,98.18Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    transformOrigin: "152.32px 100.038px"
                                                }}
                                                id="elzn3vrw9gus"
                                                className="animable"
                                            />
                                        </g>
                                    </g>
                                    <path
                                        d="M175,69.36a3.55,3.55,0,0,0-1.61,2.79c0,1,.72,1.44,1.61.93a3.56,3.56,0,0,0,1.61-2.79C176.64,69.26,175.92,68.85,175,69.36Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "175px 71.2173px" }}
                                        id="el2uunh2sjz92"
                                        className="animable"
                                    />
                                    <g id="eljaxovs3bxxo">
                                        <g
                                            style={{ opacity: "0.55", transformOrigin: "175px 71.2173px" }}
                                            className="animable"
                                            id="elrjoeu8xpqd"
                                        >
                                            <path
                                                d="M175,69.36a3.55,3.55,0,0,0-1.61,2.79c0,1,.72,1.44,1.61.93a3.56,3.56,0,0,0,1.61-2.79C176.64,69.26,175.92,68.85,175,69.36Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    transformOrigin: "175px 71.2173px"
                                                }}
                                                id="eli4gexq4a59b"
                                                className="animable"
                                            />
                                        </g>
                                    </g>
                                    <path
                                        d="M199.39,76.8a3.55,3.55,0,0,0-1.61,2.78c0,1,.72,1.45,1.61.93A3.55,3.55,0,0,0,201,77.73C201,76.7,200.28,76.29,199.39,76.8Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "199.39px 78.6545px" }}
                                        id="elgkhfsmvws58"
                                        className="animable"
                                    />
                                    <g id="elowwjvt4inx">
                                        <g
                                            style={{ opacity: "0.55", transformOrigin: "199.39px 78.6545px" }}
                                            className="animable"
                                            id="elshc8jw8bdos"
                                        >
                                            <path
                                                d="M199.39,76.8a3.55,3.55,0,0,0-1.61,2.78c0,1,.72,1.45,1.61.93A3.55,3.55,0,0,0,201,77.73C201,76.7,200.28,76.29,199.39,76.8Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    transformOrigin: "199.39px 78.6545px"
                                                }}
                                                id="eltiifpxxv8e"
                                                className="animable"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g
                                id="freepik--speech-bubbles--inject-699"
                                className="animable"
                                style={{ transformOrigin: "243.65px 236.654px" }}
                            >
                                <g
                                    id="freepik--speech-bubble--inject-699"
                                    className="animable"
                                    style={{ transformOrigin: "70.5465px 74.8691px" }}
                                >
                                    <g
                                        id="freepik----inject-699"
                                        className="animable"
                                        style={{ transformOrigin: "70.68px 75.105px" }}
                                    >
                                        <path
                                            d="M76.07,71.2a14.66,14.66,0,0,0-3.82.86c-2.81.92-4.11,1.34-4.11-.19a2.43,2.43,0,0,1,.19-.91,5,5,0,0,1,2.18-2.18c1.85-1.08,2.89-.82,3.15.37l5.07-4.33a3,3,0,0,0-3-2.26,8,8,0,0,0-3.16.74V60.21L70,61.73l-1.56.91v3.1c-3.56,2.58-5.78,6-5.78,9.62a5.4,5.4,0,0,0,.32,2c.78,2,2.93,1.69,5.2,1,.79-.24,1.56-.52,2.25-.75,1.62-.53,2.78-.73,2.78.65a3.92,3.92,0,0,1-2.29,3.13c-2.19,1.27-3,.23-3.22-.78l-5.34,4.52a4.77,4.77,0,0,0,.41,1.11,3,3,0,0,0,3.38,1.47,10.1,10.1,0,0,0,2.62-.79V90l4.15-2.39V84.53C76.51,81.88,79,78.32,79,74.59,79,71.91,77.71,71.17,76.07,71.2Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "70.68px 75.105px" }}
                                            id="el670kg585igm"
                                            className="animable"
                                        />
                                        <g id="el7c9eu3ojc2e">
                                            <path
                                                d="M76.07,71.2a14.66,14.66,0,0,0-3.82.86c-2.81.92-4.11,1.34-4.11-.19a2.43,2.43,0,0,1,.19-.91,5,5,0,0,1,2.18-2.18c1.85-1.08,2.89-.82,3.15.37l5.07-4.33a3,3,0,0,0-3-2.26,8,8,0,0,0-3.16.74V60.21L70,61.73l-1.56.91v3.1c-3.56,2.58-5.78,6-5.78,9.62a5.4,5.4,0,0,0,.32,2c.78,2,2.93,1.69,5.2,1,.79-.24,1.56-.52,2.25-.75,1.62-.53,2.78-.73,2.78.65a3.92,3.92,0,0,1-2.29,3.13c-2.19,1.27-3,.23-3.22-.78l-5.34,4.52a4.77,4.77,0,0,0,.41,1.11,3,3,0,0,0,3.38,1.47,10.1,10.1,0,0,0,2.62-.79V90l4.15-2.39V84.53C76.51,81.88,79,78.32,79,74.59,79,71.91,77.71,71.17,76.07,71.2Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    opacity: "0.55",
                                                    transformOrigin: "70.68px 75.105px"
                                                }}
                                                className="animable"
                                                id="eldnv1nf9he1"
                                            />
                                        </g>
                                    </g>
                                    <g
                                        id="freepik--speech-bubble--inject-699"
                                        className="animable"
                                        style={{ transformOrigin: "70.5465px 74.8691px" }}
                                    >
                                        <path
                                            d="M54,103.21a1.29,1.29,0,0,1-.67-.18,1.66,1.66,0,0,1-.73-1.53V68.58A4.48,4.48,0,0,1,54.62,65L86.06,46.87a1.49,1.49,0,0,1,2.42,1.39V81.18a4.48,4.48,0,0,1-2.06,3.57L74.48,91.64l-3,8.79a1.16,1.16,0,0,1-2.11.2l-2.61-4.51L55,102.9A2.1,2.1,0,0,1,54,103.21ZM87.08,47.28a1.36,1.36,0,0,0-.66.21L55,65.65a3.8,3.8,0,0,0-1.7,2.93V101.5a1,1,0,0,0,.37.91,1,1,0,0,0,1-.13L67,95.13l3,5.14a.42.42,0,0,0,.43.22.42.42,0,0,0,.38-.29l3.13-9,12.17-7a3.8,3.8,0,0,0,1.7-2.94V48.26a1,1,0,0,0-.37-.9A.62.62,0,0,0,87.08,47.28Z"
                                            style={{ fill: "#1A56DB", transformOrigin: "70.5465px 74.8691px" }}
                                            id="el2xvrkxe6tno"
                                            className="animable"
                                        />
                                    </g>
                                </g>
                                <g
                                    id="freepik--speech-bubble--inject-699"
                                    className="animable"
                                    style={{ transformOrigin: "406.303px 410.157px" }}
                                >
                                    <path
                                        d="M399.47,426.78a6.51,6.51,0,0,1-3.18-.77l-16.9-9.76a2.31,2.31,0,0,1,0-4.32L389.65,406c-.66-1.3-2.44-4.83-2.76-5.54a1.54,1.54,0,0,1,0-1.62,1.39,1.39,0,0,1,1.44-.38l11.08,1.93,10.54-6.09a7,7,0,0,1,6.37,0l16.9,9.75a2.32,2.32,0,0,1,0,4.33L402.65,426A6.51,6.51,0,0,1,399.47,426.78Zm-11.74-27.22s0,.18.17.44c.38.84,3,5.92,3,6l.24.47L380,412.9c-.59.34-.93.77-.93,1.19a1.56,1.56,0,0,0,.93,1.2l16.9,9.75a5.91,5.91,0,0,0,5.25,0l30.52-17.62a1.24,1.24,0,0,0,0-2.39l-16.9-9.75a5.88,5.88,0,0,0-5.25,0l-10.9,6.29-11.47-2A1,1,0,0,0,387.73,399.56Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "406.303px 410.157px" }}
                                        id="elsp7p9h1qfo"
                                        className="animable"
                                    />
                                    <g id="elfg2vs2btotk">
                                        <g
                                            style={{ opacity: "0.4", transformOrigin: "406.303px 410.157px" }}
                                            className="animable"
                                            id="el02ms6k5xhnm6"
                                        >
                                            <path
                                                d="M399.47,426.78a6.51,6.51,0,0,1-3.18-.77l-16.9-9.76a2.31,2.31,0,0,1,0-4.32L389.65,406c-.66-1.3-2.44-4.83-2.76-5.54a1.54,1.54,0,0,1,0-1.62,1.39,1.39,0,0,1,1.44-.38l11.08,1.93,10.54-6.09a7,7,0,0,1,6.37,0l16.9,9.75a2.32,2.32,0,0,1,0,4.33L402.65,426A6.51,6.51,0,0,1,399.47,426.78Zm-11.74-27.22s0,.18.17.44c.38.84,3,5.92,3,6l.24.47L380,412.9c-.59.34-.93.77-.93,1.19a1.56,1.56,0,0,0,.93,1.2l16.9,9.75a5.91,5.91,0,0,0,5.25,0l30.52-17.62a1.24,1.24,0,0,0,0-2.39l-16.9-9.75a5.88,5.88,0,0,0-5.25,0l-10.9,6.29-11.47-2A1,1,0,0,0,387.73,399.56Z"
                                                style={{
                                                    fill: "rgb(255, 255, 255)",
                                                    transformOrigin: "406.303px 410.157px"
                                                }}
                                                id="el57aloefanj"
                                                className="animable"
                                            />
                                        </g>
                                    </g>
                                    <path
                                        d="M400.46,408.17c.4.2.75.38,1,.55s.6.36.93.58a1.71,1.71,0,0,1,.95,1.69,2.85,2.85,0,0,1-1.58,1.75,6.86,6.86,0,0,1-3,.92,5.83,5.83,0,0,1-2.93-.55c-.38-.19-.71-.37-1-.54s-.61-.37-1-.6c-.77-.51-1.11-1.07-1-1.67s.64-1.2,1.64-1.78a6.74,6.74,0,0,1,3.08-.95A5.7,5.7,0,0,1,400.46,408.17Zm-2,3.25a1.65,1.65,0,0,0,.56.17.78.78,0,0,0,.55-.12c.18-.1.25-.2.21-.31a.85.85,0,0,0-.31-.33,13.44,13.44,0,0,0-1.69-1,1.57,1.57,0,0,0-.57-.18.8.8,0,0,0-.54.12c-.18.1-.25.2-.21.31a.72.72,0,0,0,.31.33A15.41,15.41,0,0,0,398.49,411.42Zm4.57-7.29a.56.56,0,0,1,0-.34.71.71,0,0,1,.33-.31l2.12-1.22a1.12,1.12,0,0,1,.46-.14.83.83,0,0,1,.43.1s0,0,.08.07a.21.21,0,0,1,.06.1l3.17,13.43a.53.53,0,0,1,0,.33c0,.1-.14.2-.33.31l-2.12,1.22a.86.86,0,0,1-.46.14.74.74,0,0,1-.43-.09l-.08-.07a.24.24,0,0,1-.06-.11Zm14,2.67c.41.21.76.39,1,.56s.6.36.92.58c.75.51,1.07,1.07,1,1.69s-.64,1.2-1.59,1.75a6.86,6.86,0,0,1-3,.92,5.79,5.79,0,0,1-2.92-.56c-.38-.18-.72-.36-1-.53s-.61-.37-1-.6c-.78-.51-1.12-1.07-1-1.68s.63-1.2,1.63-1.77a6.77,6.77,0,0,1,3.08-1A5.77,5.77,0,0,1,417,406.8Zm-2,3.25a1.57,1.57,0,0,0,.57.18.91.91,0,0,0,.55-.12c.17-.1.24-.2.2-.31a.72.72,0,0,0-.31-.33,15.66,15.66,0,0,0-1.68-1,1.77,1.77,0,0,0-.57-.17.84.84,0,0,0-.55.12c-.18.1-.24.2-.2.31a.75.75,0,0,0,.3.33A14,14,0,0,0,415.07,410.05Z"
                                        style={{ fill: "#1A56DB", transformOrigin: "406.385px 409.971px" }}
                                        id="el7zgeo5wigq2"
                                        className="animable"
                                    />
                                </g>
                            </g>
                            <defs>
                                <filter id="active" height="200%">
                                    <feMorphology
                                        in="SourceAlpha"
                                        result="DILATED"
                                        operator="dilate"
                                        radius={2}
                                    />
                                    <feFlood floodColor="#32DFEC" floodOpacity={1} result="PINK" />
                                    <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE" />
                                    <feMerge>
                                        <feMergeNode in="OUTLINE" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                                <filter id="hover" height="200%">
                                    <feMorphology
                                        in="SourceAlpha"
                                        result="DILATED"
                                        operator="dilate"
                                        radius={2}
                                    />
                                    <feFlood floodColor="#ff0000" floodOpacity="0.5" result="PINK" />
                                    <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE" />
                                    <feMerge>
                                        <feMergeNode in="OUTLINE" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                    <feColorMatrix
                                        type="matrix"
                                        values="0   0   0   0   0                0   1   0   0   0                0   0   0   0   0                0   0   0   1   0 "
                                    />
                                </filter>
                            </defs>
                        </svg>

                    </div>


                </div>

                <div className="w-full flex-1 flex flex-wrap grow justify-center gap-20">
                    <img width={300} className="h-auto max-w-full" src="/images/wunderklein-logo-audit.png" />
                    <img width={250} className="h-auto max-w-full" src="/images/daykroud-logo-audit.png" />
                </div>

            </div>


        </section>




        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Du hast Probleme, auf das nächste Level zu kommen?
                    </h2>
                    <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
                        Gerade am Anfang ist es schwierig, die richtigen Hebel zu finden. Man kommt nicht weiter und weiß gar nicht, wo man anfangen soll. Die Vielzahl an Lösungsansätzen im Internet kann dich zusätzlich verunsichern.
                        Vermutlich kennst du mindestens eines dieser Probleme:
                    </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 xl:gap-8 md:space-y-0">



                    <div className="p-6 bg-white rounded shadow dark:bg-gray-800">
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded bg-red-100 lg:h-12 lg:w-12 dark:bg-primary-900">


                            <svg className="w-8 h-8 text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 10l4 4 4-4 5 5m0 0h-3.207M20 15v-3.207" />
                            </svg>


                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Umsatzschwankungen</h3>
                        <p className="font-light text-gray-500 dark:text-gray-400">
                            Du schaffest es nicht, regelmäßige Bestellungen zu generieren. Manche Tage laufen sehr gut und dann läuft es für lange Zeit wieder gar nicht und du weißt nicht warum.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded shadow dark:bg-gray-800">
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded bg-red-100 lg:h-12 lg:w-12 dark:bg-primary-900">


                            <svg className="w-8 h-8 text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 10l4 4 4-4 5 5m0 0h-3.207M20 15v-3.207" />
                            </svg>


                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Schlechter ROAS</h3>
                        <p className="font-light text-gray-500 dark:text-gray-400">
                        Dein ROAS ist zu niedrig und du weißt nicht, wie du stabil einen guten ROAS erreichen kannst, während du gleichzeitig deine Werbeausgaben skalierst.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded shadow dark:bg-gray-800">
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded bg-red-100 lg:h-12 lg:w-12 dark:bg-primary-900">


                            <svg className="w-8 h-8 text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
                            </svg>



                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">
                            Hohe Fixkosten
                        </h3>
                        <p className="font-light text-gray-500 dark:text-gray-400">
                            Du gibst zu viel Geld für Mitarbeiter, Agenturen oder Software aus und es geht sich gerade so aus, dass alle Kosten gedeckt sind. Das stresst dich.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded shadow dark:bg-gray-800">
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded bg-red-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg class="w-8 h-8 text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Zu wenige Creatives</h3>
                        <p className="font-light text-gray-500 dark:text-gray-400">
                            Im Internet sprechen immer alle davon, wie wichtig es ist gute Creatives zu haben. Du denkst dir, dass ihr nicht genügend Ressourcen oder Know-How habt,
                            um hier mithalten zu können.
                        </p>
                    </div>



                </div>
            </div>
        </section>

        <section className="bg-white dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="flex flex-col gap-8 sm:gap-12 xl:gap-16 xl:flex-row xl:items-start">
                    <div>
                        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                            Wir kennen deine Probleme
                        </h2>
                        <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                            Wir besitzen selbst mehrere E-Commerce Brands, darunter wunderklein.com, welche 7-stellige
                            Jahresumsätze generieren.
                        </p>
                        <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                            Die oben genannten Probleme kennen wir nur zu gut. Wir möchten dir mit unserer Expertise helfen, damit du Zeit und Kosten sparst und wieder mehr Freude an deinem Business hast.
                        </p>

                    </div>
                    <div className="grid w-full grid-cols-1 gap-4 xl:max-w-3xl shrink-0 sm:grid-cols-2 md:grid-cols-3">
                        <div className="relative overflow-hidden rounded-lg group">
                            <img
                                className="object-cover w-full h-[320px] lg:h-auto scale-100 ease-in duration-300 group-hover:scale-125"
                                src="/images/alex-prennsberger.png"
                                alt=""
                            />
                            <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                                <div className="text-center">
                                    <p className="text-xl font-bold text-white">Alex Prennsberger</p>
                                    <p className="text-base font-medium text-gray-300">
                                        CEO &amp; Co-Founder
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg group">
                            <img
                                className="object-cover w-full h-[320px] lg:h-auto scale-100 ease-in duration-300 group-hover:scale-125"
                                src="/images/tina-prennsberger.jpg"
                                alt=""
                            />
                            <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                                <div className="text-center">
                                    <p className="text-xl font-bold text-white">Tina Prennsberger</p>
                                    <p className="text-base font-medium text-gray-300">
                                        CEO &amp; Co-Founder
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>


        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-3xl mx-auto mt-8 text-center">
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    Das ermöglicht dir der E-Commerce Audit
                </h2>
                <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                    Eine E-Commerce Brand zu haben, ist eine der besten Möglichkeiten Cashflow zu generieren und gleichzeitig
                    eine wertvolles Asset aufzubauen.
                </p>
            </div>
            <div className="py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6">
                {/* Row */}
                <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Endlich wieder Gewinne erzielen
                        </h2>
                        <p className="mb-8 font-light lg:text-xl">
                            Umsatz ist nicht gleich Gewinn und das wird von vielen oft ignoriert, wenn sie davon sprechen zu skalieren.
                            Du kannst kein nachhaltig erfolgreiches Unternehmen aufbauen, welches dir sowohl in guten als auch in schlechten Zeiten einen stabilen Cashflow ermöglicht, wenn du
                            dich nicht auf die Gewinne fokussierst.
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
                                    Stabiles Fundament mit Fokus auf Gewinn
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
                                    Cashflow und Finanzplan
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
                                    Krisenzeiten überstehen
                                </span>
                            </li>
                        </ul>
                        <p className="mb-8 font-light lg:text-xl">
                            Der E-Commerce Audit ermöglicht es dir, ein gesundes Unternehmen mit Fokus auf Gewinn aufzubauen.
                        </p>
                    </div>
                    <img

                        className="h-auto max-w-xl rounded-lg"
                        src="/images/profit-chart.png"
                        alt="office feature image"
                    />

                </div>
                {/* Row */}
                <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
                    <img

                        className="h-auto rounded-lg"
                        src="/images/widget-data.png"
                        alt="office feature image"
                    />
                    <div className="text-gray-500 mt-8 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Ein solides Trafficsystem, welches dein Wachstum garantiert
                        </h2>
                        <p className="mb-8 font-light lg:text-xl">
                            Ohne Traffic keine Sales. Das ist der wichtigste Hebel in jedem E-Commerce Business.
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
                                    Nutze die Kanäle welche am besten zu deinem Business passen
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
                                    Nachhaltiges Wachstum durch konstanten Neukundenstrom
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
                                    Gesunder ROAS
                                </span>
                            </li>

                        </ul>
                        <p className="font-light lg:text-xl">
                            Mit dem E-Commcerce Audit Handlungsplan hast du eine Anleitung, um ein Trafficsystem für dein spezifisches Business aufzubauen, welches dir
                            ein gesundes und profitables Wachstum ermöglicht.
                        </p>
                    </div>
                </div>
                <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Ein Onlineshop, der konvertiert
                        </h2>
                        <p className="mb-8 font-light lg:text-xl">
                            Wenn dein Onlineshop schlecht aufgebaut ist, dann bringt dir der beste Traffic auch nichts. Selbst kleine Verbesserungen der Website
                            können einen große Wirkung auf die Conversion Rate und letztlich auch den Umsatz haben.
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
                                    Onlineshop mit einer guten Conversion Rate
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
                                    Einmal umgesetzt, arbeitet dein Onlineshop für dich und nicht umgekehrt
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
                                    Mit Best Practices das Vertrauen in deinen Shop erhöhen
                                </span>
                            </li>
                        </ul>
                        <p className="mb-8 font-light lg:text-xl">
                            Verschwende nicht zu viel Zeit damit, zu raten welche für Elemente in deinem Shop gut ankommen könnten. Verwende
                            stattdessen bewährte Elemente und Taktiken aus dem Handlungsplan.
                        </p>
                    </div>
                    <img

                        className="h-auto max-w-xl rounded-lg"
                        src="/images/website.png"
                        alt="office feature image"
                    />

                </div>
            </div>
        </section>

        <section className="bg-white dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        So hilft dir der E-Commerce Audit dein Business
                        <span className="mx-1 relative inline-block stroke-current">
                            profitabel
                            <svg className="text-primary-600 absolute -bottom-0.1 w-full max-h-1.8" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none">
                                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
                            </svg>
                        </span>
                        zu skalieren
                    </h2>
                    <p className="mt-6 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                        Wie genau können wir dir jetzt helfen? Wir begleiten dich von der Analyse bis zur Umsetzung mit einem Plan, der perfekt
                        auf dein Business und deine Probleme abgestimmt ist.
                    </p>
                    <div className="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div>
                            <svg className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                            </svg>


                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Business Analyse
                            </h3>
                            <p className="mb-4 text-gray-500 dark:text-gray-400">
                                Wir analysieren dein Business und identifizieren die Bereiche mit dem größten Verbesserungspotenzial
                            </p>

                        </div>
                        <div>
                            <svg
                                className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path
                                    fillRule="evenodd"
                                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Handlungsplan</h3>
                            <p className="mb-4 text-gray-500 dark:text-gray-400">
                                Danach erstellen wir einen Handlungsplan für dich, welcher konkrete Schritte für die Umsetzung enthält
                            </p>

                        </div>
                        <div>
                            <svg
                                className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Umsetzung
                            </h3>
                            <p className="mb-4 text-gray-500 dark:text-gray-400">
                                Wir unterstützen dich bei der Umsetzung und stehen dir mit Rat in Live Calls und Chat zur Verfügung
                            </p>

                        </div>
                    </div>


                </div>




            </div>
        </section>



        <section className="bg-white dark:bg-gray-900 antialiased">

            <div className="mb-20 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    Du bekommst einen Handlungsplan,
                    perfekt auf <span className="mx-1 relative inline-block stroke-current">
                        dein Business
                        <svg className="text-primary-600 absolute -bottom-0.1 w-full max-h-1.8" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none">
                            <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
                        </svg>
                    </span> abgestimmt
                </h2>
                <p className="mt-10 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                    Mit dem Handlungsplan bekommst du eine Checkliste, welche dir detailliert alle Schritte zur
                    Verbesserung deines Business beschreibt.
                </p>

                <div className="mt-8 flex justify-center items-center">
                    <img

                        className="h-auto rounded-lg"
                        src="/images/checklist.png"
                        alt="office feature image"
                    />
                </div>


            </div>


        </section>

        <section className="bg-white dark:bg-gray-900 antialiased">

            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        Was beinhaltet der Handlungsplan?
                    </h2>
                    <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                        Wir betrachten dein Business ganzheitlich. Es bringt nichts, nur einen Bereich (z.B. Performance Marketing) zu optimieren.
                        Deshalb ist der Handlungsplan auch in verschiedene Bereiche unterteilt und bietet empfiehlt dir umfassende Maßnahmen zu jedem Thema.
                    </p>
                </div>
                <div className="p-4 mt-2 rounded-lg sm:p-12 lg:mt-16 bg-gray-50 dark:bg-gray-800">
                    <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
                        <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">


                                <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                    <path fill-rule="evenodd" d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clip-rule="evenodd" />
                                    <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                                </svg>


                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                                    Branding Strategie
                                </h3>
                                <p className="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                                    Baue dir eine profitable Brand auf, welche für
                                    viele Jahre am Markt bestehen wird.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">

                                <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z" />
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>

                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                                    Operations & Logistics
                                </h3>
                                <p className="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                                    Senke deine Produktkosten, optimiere Prozessabläufe und minimiere deine Fixkosten.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">

                                <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z" />
                                </svg>

                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                                    Produkt & Offer
                                </h3>
                                <p className="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                                    Ein erstklassiges Produkt ist die Grundlage für jede erfolgreiche E-Commerce Brand.
                                    Lerne wie du optimale Angebote erstellst, welche die Bedürfnisse deines Zielmarkts abdecken.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">

                                <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5" />
                                </svg>

                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                                    Traffic Systeme & Performance Marketing
                                </h3>
                                <p className="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                                    Werbekosten werden höher und es wird immer schwieriger, profitable Kampagnen zu schalten.
                                    Lerne, wie du dich trotzdem gegen die Konkurrenz durchsetzen kannst.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">


                                <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm16 7H4v7h16v-7ZM5 8a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Zm4-1a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2H9Zm2 1a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                                </svg>


                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                                    Website Optimierung
                                </h3>
                                <p className="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                                    Wir analysieren deinen Onlineshop und geben dir einen konkreten Plan, welche Anpassung nötig sind, um
                                    die Conversion Rate deines Shops zu steigern.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">

                                <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                                </svg>

                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                                    E-Mail System
                                </h3>
                                <p className="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                                    Ein effektives E-Mail Marketing System ist ein Muss für jede E-Commerce Brand. Wir zeigen dir was du tun kannst, um
                                    deine Umsätze über E-Mail Marketing zu erhöhen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 sm:py-16 lg:px-6 ">
                <img
                    className="mb-4 w-full lg:mb-0 rounded-lg"
                    src="/images/together.png"
                    alt="feature image"
                />
                <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Gemeinsame Umsetzung
                    </h2>
                    <p className="mb-8 font-light lg:text-xl">
                        Wir lassen dich mit deinem Handlungsplan natürlich nicht alleine. Wir arbeiten gemeinsam an der Umsetzung
                        aller Punkte und stehen dir für Fragen jederzeit zur Verfügung*
                    </p>
                    <div className="py-8 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                        <div className="flex">
                            <div className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 shrink-0">
      
                                <svg  className="w-5 h-5 text-primary-600 dark:text-primary-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 5a7 7 0 0 0-7 7v1.17c.313-.11.65-.17 1-.17h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-6a9 9 0 0 1 18 0v6a3 3 0 0 1-3 3h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2c.35 0 .687.06 1 .17V12a7 7 0 0 0-7-7Z" clip-rule="evenodd"/>
</svg>

                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                    Live Calls
                                </h3>
                                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                                    In mehreren Live Calls besprechen wir gemeinsam alle deine Fragen und geben Feedback
                                    zu der Umsetzung der Punkte im Handlungsplan
                                </p>

                            </div>
                        </div>
                        <div className="flex pt-8">
                            <div className="flex justify-center items-center mr-4 w-8 h-8 bg-primary-100 rounded-full dark:bg-purple-900 shrink-0">

                                <svg  className="w-5 h-5 text-primary-600 dark:text-primary-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z"/>
</svg>

                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                    Chat
                                </h3>
                                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                                    Du bekommst einen eigenen Chat Kanal, in dem du jederzeit mit uns kommunizieren kannst und sofort Antworten auf deine Fragen erhältst
                                </p>

                            </div>
                        </div>
                    </div>
                    <p className="text-sm">
                        *In der Regel dauert unsere Zusammenarbeit 1 Monat. 
                        In diesem Zeitraum ist es möglich, alle Punkte umzusetzen.
                    </p>
                </div>
            </div>
        </section>


        <section className="bg-white mt-12 dark:bg-gray-900 antialiased">

            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    Was sind die nächsten Schritte?
                </h2>
                <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                    Du willst endlich ein Business aufbauen, welches dich dein Leben so leben lässt wie du es dir schon immer erträumt hast?
                    Dann buche jetzt dein kostenloses Erstgespräch und du bist deinem Ziel schon einen Schritt näher.
                </p>
            </div>

            <div className="flex flex-wrap justify-center mt-10 mb-10">

                <div className="p-4 max-w-sm">
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clip-rule="evenodd" />
                        </svg>
                        <a href="#booking">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Schritt 1: Erstgespräch buchen
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Buche ein unverbindliches & kostenloses Erstgespräch mit uns, um deine Situation zu besprechen
                        </p>

                    </div>
                </div>

                <div className="p-4 max-w-sm">
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clip-rule="evenodd" />
                            <path fill-rule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clip-rule="evenodd" />
                        </svg>


                        <a href="#booking">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Schritt 2: Fülle deine Daten aus
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Du bekommst nach der Buchung einen Fragebogen, welchen du mit deinen Daten ausfüllst
                        </p>

                    </div>
                </div>

                <div className="p-4 max-w-sm">
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M9 15a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm3.845-1.855a2.4 2.4 0 0 1 1.2-1.226 1 1 0 0 1 1.992-.026c.426.15.809.408 1.111.749a1 1 0 1 1-1.496 1.327.682.682 0 0 0-.36-.213.997.997 0 0 1-.113-.032.4.4 0 0 0-.394.074.93.93 0 0 0 .455.254 2.914 2.914 0 0 1 1.504.9c.373.433.669 1.092.464 1.823a.996.996 0 0 1-.046.129c-.226.519-.627.94-1.132 1.192a1 1 0 0 1-1.956.093 2.68 2.68 0 0 1-1.227-.798 1 1 0 1 1 1.506-1.315.682.682 0 0 0 .363.216c.038.009.075.02.111.032a.4.4 0 0 0 .395-.074.93.93 0 0 0-.455-.254 2.91 2.91 0 0 1-1.503-.9c-.375-.433-.666-1.089-.466-1.817a.994.994 0 0 1 .047-.134Zm1.884.573.003.008c-.003-.005-.003-.008-.003-.008Zm.55 2.613s-.002-.002-.003-.007a.032.032 0 0 1 .003.007ZM4 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm3-2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm6.5-8a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-.796l-2.341 2.049a1 1 0 0 1-1.24.06l-2.894-2.066L6.614 9.29a1 1 0 1 1-1.228-1.578l4.5-3.5a1 1 0 0 1 1.195-.025l2.856 2.04L15.34 5h-.84a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                        </svg>

                        <a href="#booking">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Schritt 3: Skaliere dein Business
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Du setzt gemeinsam mit uns alle Punkte um und siehst die ersten Früchte deiner Arbeit
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 lg:py-16 lg:px-6">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Ist dein E-Commerce Business richtig aufgebaut?
                    </h2>
                    <p className="mb-8 font-light lg:text-xl dark:text-gray-400">
                        Wir finden es für dich heraus und helfen dir mit dem bestmöglichen Plan, aus deinem Onlineshop eine profitable E-Commerce Brand zu machen.
                    </p>
                    <div className="grid gap-8 py-8 border-t border-gray-200 lg:grid-cols-1 dark:border-gray-700 sm:grid-cols-2">
              
                        <div className="flex">
                            <div className="flex justify-center items-center mr-4 w-12 h-12 bg-white rounded shadow shrink-0 dark:bg-gray-700">
                                <svg className="w-7 h-7 text-gray-900 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                                    Spare Zeit und Geld
                                </h3>
                                <p className="font-light text-gray-500 dark:text-gray-400">
                                    Aus eigener Erfahrung wissen wir, dass man Anfang gar nicht so genau weiß was man tut.
                                    Man lernt meistens aus Fehlern. Und die kosten Zeit und Geld. Verkürze diesen Prozess indem du
                                    deine Ressourcen in unsere Hilfe investierst. Wir haben diese Fehler bereits für dich gemacht.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex justify-center items-center mr-4 w-12 h-12 bg-white rounded shadow shrink-0 dark:bg-gray-700">
                                <svg className="w-7 h-7 text-gray-900 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                                    Baue eine Inhouse Kompetenz auf
                                </h3>
                                <p className="font-light text-gray-500 dark:text-gray-400">
                                    Investiere in dein Wissen und erlerne Fähigkeiten, mit denen du den Erfolg deines Unternehmens maßgeblich beeinflussen kannst, anstatt dich von Agenturen abhängig zu machen.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex justify-center items-center mr-4 w-12 h-12 bg-white rounded shadow shrink-0 dark:bg-gray-700">


                                <svg className="w-7 h-7 text-gray-900 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd" />
                                </svg>


                            </div>
                            <div>
                                <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                                    Erfahrungen von echten E-Commerce Unternehmern
                                </h3>
                                <p className="font-light text-gray-500 dark:text-gray-400">
                                    Wir sind selbst E-Commerce Unternehmer mit eigenen Onlineshops und wissen was notwendig ist, um eine erfolgreiche Brand aufzubauen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pricing Card */}
                <div id="booking" className="flex flex-col p-6 bg-white rounded-lg shadow xl:p-8 dark:bg-gray-800">
                    <div className="justify-between items-center md:flex">
                        <div>
                            <div className="flex justify-between mb-2">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    E-Commerce Audit & Strategieplan
                                </h3>
                                <div className="flex items-center md:hidden">
                                    <div className="mr-1 text-2xl font-extrabold text-gray-900 lg:text-5xl dark:text-white">
                                    <span className="mx-1 relative inline-block stroke-current">
                                    1.997€
                                    <svg className="text-primary-600 absolute -bottom-0.1 w-full max-h-1.8" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="none">
                                        <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
                                    </svg>
                                </span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-lg font-light text-gray-500 dark:text-gray-400 md:mr-2">
                                Bringe dein E-Commerce Business nachhaltig auf das nächste Level.
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <div className="text-2xl font-extrabold text-gray-900 lg:text-5xl dark:text-white">

                                <span className="mx-1 relative inline-block stroke-current">
                                    1.997€
                                    <svg className="text-primary-600 absolute -bottom-0.1 w-full max-h-1.8" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="none">
                                        <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://calendly.com/a-prennsberger/30min"
                        className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-5 lg:my-8 dark:focus:ring-primary-900"
                    >
                        Jetzt kostenloses Erstgespräch buchen

                    </a>
                    <div className="justify-between space-y-4 sm:space-y-0 sm:flex">
                        {/* List */}
                        <ul role="list" className="space-y-4">
                            <li className="flex space-x-2.5">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                <span className="font-light leading-tight text-gray-500 dark:text-gray-400">
                                    Fixkosten senken
                                </span>
                            </li>
                            <li className="flex space-x-2.5">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                <span className="font-light leading-tight text-gray-500 dark:text-gray-400">
                                    Website optimieren
                                </span>
                            </li>
                            <li className="flex space-x-2.5">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                <span className="font-light leading-tight text-gray-500 dark:text-gray-400">
                                    Ad & Creative Templates
                                </span>
                            </li>
                            <li className="flex space-x-2.5">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                <span className="font-light leading-tight text-gray-500 dark:text-gray-400">
                                    Inhouse Knowledge
                                </span>
                            </li>
                            <li className="flex space-x-2.5">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                <span className="font-light leading-tight text-gray-500 dark:text-gray-400">
                                    E-Mail Marketing System
                                </span>
                            </li>
                        </ul>
                        {/* List */}
                        <ul role="list" className="space-y-4">
                            <li className="flex space-x-2.5">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                <span className="font-light leading-tight text-gray-500 dark:text-gray-400">
                                    Werbebotschaften erstellen
                                </span>
                            </li>
                            <li className="flex space-x-2.5">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                <span className="font-light leading-tight text-gray-500 dark:text-gray-400">
                                    Offer Creation & Produktoptimierung
                                </span>
                            </li>
                            <li className="flex space-x-2.5">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                <span className="font-light leading-tight text-gray-500 dark:text-gray-400">
                                    Tracking & Controlling Dashboard
                                </span>
                            </li>
                            <li className="flex space-x-2.5">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                <span className="font-light leading-tight text-gray-500 dark:text-gray-400">
                                    Marketing & Traffic Template
                                </span>
                            </li>
                            <li className="flex space-x-2.5">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                <span className="font-light leading-tight text-gray-500 dark:text-gray-400">
                                    Interne Organisation
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>



        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:py-12">

                <div className="p-4 mt-3 rounded-lg sm:p-12 lg:mt-3 bg-gray-50 dark:bg-gray-800">
                    <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">




                            <svg className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd" />
                            </svg>



                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                                100% Geld zurück, wenn du nicht zufrieden bist
                            </h3>
                            <p className="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                                Wir sind keine blutsaugende Agentur, welche dir monatlich dein hart verdientes Geld aus der Tasche ziehen will. Wir sind genau so wie du auch E-Commerce Unternehmer und
                                wissen ganz genau wie wichtig es ist, seine Ressourcen richtig einzusetzen. Deshalb versprechen wir dir, dass du dein Geld zurück bekommst, solltest du mit unserer Hilfe keine Verbesserung
                                in deinem Business sehen.
                            </p>
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
                        <AccordionTitle>Warum ein kostenloses Erstgespräch?</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                               In dem kostenlosen Erstgespräch erörtern wir mit dir gemeinsam deine aktuelle Situation
                               und besprechen den Status Quo deines Business. Nur so können wir auch sicherstellen, ob der E-Commerce
                               Audit für dich und dein Business ein sinnvolles Investment ist.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>Warum muss ich vor dem Erstgespräch meine Daten ausfüllen?</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                               Wir möchten dir den bestmöglichen Service bieten und
                               damit wir uns schon vorab gut auf das Gespräch vorbereiten können, benötigen wir ein paar Daten
                               über dein Business. Du bekommst nach der Buchung des Erstgesprächs einen Link zu einem Google Forms Formular, welches du noch
                               vor dem Gespräch ausfüllst. Nur so können wir uns optimal auf dich & dein Business vorbereiten und dir sagen ob ein Investment in den E-Commerce Audit lohnenswert ist.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>Wie lange läuft unsere Zusammenarbeit?</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Nach dem Erstgespräch starten wir sofort mit einer sorgfältigen Analyse deines Business. Dabei schauen wir uns alle Bereiche genau an. Von Internen Prozessen, Finanzen, externen Dienstleistern,
                                bis hin zum technischen Setup, Creatives und Software. Diese Analyse dauert ca. eine Woche. Danach bekommst du den Handlungsplan elektronisch zur Verfügung gestellt und wir besprechen alle
                                Punkte im Detail während eines Live Calls.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Nun liegt es an dir, die empfohlenen Handlungen umzusetzen. Wir stehen dir dann noch 3 Wochen zur Verfügung und beantworten alle deine
                                Fragen über Chat, Whatsapp oder Live Calls (so wie du möchtest). 
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                In der Regel läuft unsere Zusammenarbeit also ca. ein Monat.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>Kann ich Raten bezahlen?</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                               In jedem Business, aber gerade eben in einem E-Commerce Business gilt: Cash ist King. Das wissen wir nur zu gut. Um deinen Cashflow zu schonen bieten wir dir folgende Zahlungskonditionen an:
                               50% Anzahlung bevor wir starten und 50% am Ende unserer Zusammenarbeit.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>Gib es eine Geld-Zurück-Garantie?</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Ja. Es gibt eine Geld-Zurück-Garantie. Solltest du wirklich nicht zufrieden sein und keine entsprechenden Verbesserungen nach der Umsetzung
                                erzielen, bekommst du dein Geld zurück.
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
                        Wir sind Tina & Alex und sind seit über 5 Jahren in der E-Commerce Branche tätig. Wir besitzen selbst mehrere D2C Brands mit 7-stelligen Jahresumsätzen.
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

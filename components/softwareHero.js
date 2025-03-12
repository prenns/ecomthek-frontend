'use client'
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import SearchBar from './searchbar';

const SoftwareHero = () => {

    const typedElement = useRef(null);

    useEffect(() => {
        if (typedElement.current) {
            const typed = new Typed(typedElement.current, {
                strings: ["dein Wachstum", "höhere Conversion Rates", "mehr Umsatz", "bessere Kundenbindung"],
                typeSpeed: 80,
                backSpeed: 80,
                backDelay: 2500,
                startDelay: 500,
                loop: true,
            });

            return () => typed.destroy();
        }
    }, []);


    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-8">
                <div className="mt-4 mb-8 lg:mb-16 text-center">
                    <div className="col-span-1 sm:mb-6 lg:mb-0">

                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
                            Finde die perfekte Software für <span ref={typedElement} className="text-blue-600"></span>
                        </h1>
                        <p className="max-w-xl mx-auto mb-6 font-light text-gray-500 text-xl">
                            Finde die passenden Tools für dein Business. Vergleiche Software, entdecke Expertenbewertungen und wähle die perfekte Lösung – einfach & effizient
                        </p>
                        <div className="mx-auto max-w-3xl">
                            <SearchBar />
                        </div>

                    </div>

                </div>
                <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
                    <div className="flex justify-center">
                        <svg className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>

                        <div>
                            <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                                Software finden & vergleichen
                            </h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">
                                Finde die beste E-Commerce-Software für dein Business. Vergleiche Tools direkt nach Funktionen, Bewertungen und Preis – alles auf einen Blick.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <svg className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>

                        <div>
                            <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                                Echte Bewertungen von Experten
                            </h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">
                                Triff fundierte Entscheidungen mit ehrlichen Bewertungen von E-Commerce-Profis. Erfahre, welche Tools wirklich funktionieren – ohne Marketing-Blabla.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <svg className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd" />
                        </svg>

                        <div>
                            <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                                Die passende Lösung für dein Problem
                            </h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">
                                Suche gezielt nach einer Lösung – egal, ob du die Conversion-Rate steigern oder Prozesse automatisieren willst. Finde die Software, die dein Problem löst.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SoftwareHero;
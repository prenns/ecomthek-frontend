import {
  CubeIcon,
  MagnifyingGlassCircleIcon,
  DocumentDuplicateIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16 lg:px-6">
        {/* Headline */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            So können wir Dein Business unterstützen
          </h2>
          <p className="mt-4 text-base font-normal text-gray-700 sm:text-xl dark:text-gray-300">
            Entdecke unsere Services und Produkte, um deinen Onlineshop auf das nächste Level zu bringen.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-8">
          {/* Tools */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-6 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-primary-100 bg-primary-50 text-primary-600 dark:border-primary-200/40">
                <CubeIcon className="h-12 w-12" />
              </div>
            </div>

            <Link href="/software">
              <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                Die besten Tools für deinen Shop
              </h5>
            </Link>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Finde die besten Tools für deinen Onlineshop – von Versand bis E-Mail-Marketing. Vergleiche Funktionen,
              entdecke Expertenbewertungen und wähle die Software, die wirklich zu dir passt.
            </p>

            <Link
              href="/software"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
            >
              Mehr erfahren
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Audit */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-6 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-primary-100 bg-primary-50 text-primary-600 dark:border-primary-200/40">
                <MagnifyingGlassCircleIcon className="h-12 w-12" />
              </div>
            </div>

            <Link href="/audit">
              <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                Shop Audit
              </h5>
            </Link>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Wir nehmen deinen Onlineshop unter die Lupe und erstellen einen individuellen Handlungsplan, damit du auf
              das nächste Level skalieren kannst.
            </p>

            <Link
              href="/audit"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
            >
              Mehr erfahren
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Templates */}
          {/* <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-6 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-primary-100 bg-primary-50 text-primary-600 dark:border-primary-200/40">
                <DocumentDuplicateIcon className="h-12 w-12" />
              </div>
            </div>

            <Link href="/notion-templates/marketing-calendar">
              <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                Templates
              </h5>
            </Link>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Wir haben für dich nützliche Ressourcen und Templates erstellt, welche dir helfen dein E-Commerce Business
              besser zu organisieren.
            </p>

            <Link
              href="/notion-templates/marketing-calendar"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
            >
              Mehr erfahren
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div> */}

          {/* Wissen & Lernen */}
          {/* <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-6 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-primary-100 bg-primary-50 text-primary-600 dark:border-primary-200/40">
                <BookOpenIcon className="h-12 w-12" />
              </div>
            </div>

            <Link href="/blog">
              <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                Wissen & Lernen
              </h5>
            </Link>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Bleib up to date mit fundierten Artikeln zu Tools, Versand, Shop-Optimierung und mehr. Ideal für wachsende
              Marken, die effizient skalieren wollen.
            </p>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
            >
              Mehr erfahren
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}

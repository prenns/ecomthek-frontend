import {
  SparklesIcon,
  ChartBarIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";


export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/30 dark:to-gray-900">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-200 blur-3xl opacity-40 dark:bg-indigo-700/30" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-40 dark:bg-indigo-600/20" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 dark:bg-indigo-900/40 dark:text-indigo-200 dark:ring-indigo-700/40">
            <SparklesIcon className="h-4 w-4" aria-hidden="true" />
            Über uns
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Wir bauen Marken, denen Menschen vertrauen.
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Hinter Ecomthek stehen echte Operator:{" "}
            <span className="font-medium">WUNDERklein</span> und{" "}
            <span className="font-medium">Dakykroud</span> – zwei Eigenmarken, mit denen wir{" "}
            <span className="font-semibold text-indigo-700 dark:text-indigo-300">
              jährlich siebenstellige Umsätze
            </span>{" "}
            erzielen – <span className="font-semibold">profitabel</span>. Dieses Know-how bringen
            wir in jedes Projekt ein.
          </p>
        </div>

        {/* Trust / KPIs */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm dark:border-indigo-900/40 dark:bg-gray-900">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 dark:bg-indigo-800/60 dark:text-indigo-200">
              <ChartBarIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Performance</p>
              <p className="text-base font-semibold text-gray-900 dark:text-white">
                7-stellige Jahresumsätze
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm dark:border-indigo-900/40 dark:bg-gray-900">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 dark:bg-indigo-800/60 dark:text-indigo-200">
              <BanknotesIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Wirtschaftlichkeit</p>
              <p className="text-base font-semibold text-gray-900 dark:text-white">
                Nachhaltig profitabel
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm dark:border-indigo-900/40 dark:bg-gray-900">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 dark:bg-indigo-800/60 dark:text-indigo-200">
              <ShieldCheckIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Vertrauen</p>
              <p className="text-base font-semibold text-gray-900 dark:text-white">
                Operator statt Theorie
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mx-auto mt-14 max-w-6xl">
          <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">Das Team</h3>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Person: Alex */}
            <article className="group relative overflow-hidden rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-indigo-900/40 dark:bg-gray-900">
              <div className="flex items-center gap-4">
                <img
                  src="/images/alex-prennsberger.png"
                  alt="Foto von Alex"
                  className="h-14 w-14 rounded-xl object-cover ring-2 ring-indigo-100 dark:ring-indigo-900/60"
                />
                <div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white">Alex</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Prozesse &amp; Marketing</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                Optimiert Prozesse, steuert Finanzen und stellt sicher, dass unsere Produkte wirtschaftlich stark aufgestellt sind – von der Kalkulation bis zur Umsetzung.
              </p>
              
            </article>

            {/* Person: Tina */}
            <article className="group relative overflow-hidden rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-indigo-900/40 dark:bg-gray-900">
              <div className="flex items-center gap-4">
                <img
                  src="/images/tina-prennsberger.jpg"
                  alt="Foto von Tina"
                  className="h-14 w-14 rounded-xl object-cover ring-2 ring-indigo-100 dark:ring-indigo-900/60"
                />
                <div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white">Tina</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CX &amp; Creative</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                Verbindet Brand-Storytelling mit messbarer Conversion – vom Content bis zur
                Post-Purchase Experience.
              </p>
             
            </article>
          </div>
        </div>

        {/* Brand Logos */}
        <div className="mx-auto mt-14 max-w-6xl">
          <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">
            Unsere Marken
          </h3>
          <div className="mt-6 grid grid-cols-2 items-center gap-6 sm:grid-cols-4">
            <a
              href="https://wunderklein.com"
              className="group flex h-20 items-center justify-center rounded-2xl border border-indigo-100 bg-white p-4 transition dark:border-indigo-900/40 dark:bg-gray-900"
              
            >
              <img
                src="/images/wunderklein-logo-audit.png"
                alt="Logo WUnderklein"
                className="max-h-12 opacity-80 transition group-hover:opacity-100 dark:invert-0"
              />
            </a>
           

            <a
              href="https://daykroud.com"
              className="group flex h-20 items-center justify-center rounded-2xl border border-indigo-100 bg-white p-4 transition hover:shadow-sm dark:border-indigo-900/40 dark:bg-gray-900"
             
            >
              <img
                src="/images/daykroud-logo-audit.png"
                alt="Logo Dakykroud"
                className="max-h-12 opacity-80 transition group-hover:opacity-100 dark:invert-0"
              />
            </a>
           

            {/* optional Platzhalter für Presse/Partner */}
           
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Wir bauen Marken langfristig – mit sauberer Unit Economics, klaren Prozessen und starken
            Produkten.
          </p>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 dark:bg-indigo-900/40 dark:text-indigo-200 dark:ring-indigo-800/50">
            Bereit für den nächsten Schritt?
          </div>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-indigo-600/10 transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Zum Audit
               <span className="inline-flex h-5 w-5 ml-2 items-center justify-center rounded-full bg-white/20">
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
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
            In 72 geliefert · Sichere Zahlungen · ROI Garantie oder Geld zurück
          </p>
        </div>
      </div>


      <div
        id="bio-alex"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden fixed inset-0 z-50 overflow-y-auto overflow-x-hidden"
      >
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
            <button
              type="button"
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-800"
              data-modal-hide="bio-alex"
              aria-label="Schließen"
            >
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Über Alex</h3>
            <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
              Setzt auf pragmatische Prozesse, transparente Supplier-Relations und resiliente
              Logistik für stabile Margen.
            </p>
          </div>
        </div>
      </div>

      {/* Bio: Tina */}
      <div
        id="bio-tina"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden fixed inset-0 z-50 overflow-y-auto overflow-x-hidden"
      >
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
            <button
              type="button"
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-800"
              data-modal-hide="bio-tina"
              aria-label="Schließen"
            >
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Über Tina</h3>
            <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
              Entwickelt kreative Konzepte, die Markencharakter, Vertrauen und Conversion
              miteinander verbinden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

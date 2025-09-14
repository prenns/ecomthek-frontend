import Link from 'next/link';
import BlogSnippet from '../components/blog/blogSnippet';
import ServicesSection from '../components/homepage/servicesSection';
import AboutSection from '../components/homepage/aboutSection';

export const metadata = {
    title: 'Dein Growth Hub für E-Comemrce | Ecomthek',
    description: 'Hochwertige Inhalte und praktische Ratschläge zu den Themen Performance Marketing, E-Mail Marketing, Produktentwicklung und vielen mehr. Unser Ziel ist es, dir dabei zu helfen, dein E-Commerce Business erfolgreich aufzubauen und zu skalieren.',
};

export default async function Home() {

    return (
        <div>
            <section className="relative overflow-hidden bg-white dark:bg-gray-950">
                {/* Layer: soft gradient background */}
                <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-950 dark:via-gray-950 dark:to-black" />

                {/* Layer: subtle grid with radial mask */}
                <div
                    className="
      pointer-events-none absolute inset-0 -z-10
      [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]
      bg-[linear-gradient(to_right,theme(colors.gray.200/.25)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.gray.200/.25)_1px,transparent_1px)]
      bg-[size:32px_32px]
      dark:bg-[linear-gradient(to_right,theme(colors.gray.800/.45)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.gray.800/.45)_1px,transparent_1px)]
    "
                />

                {/* Layer: AI-ish glow blobs */}
                <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full blur-3xl 
                  bg-[radial-gradient(closest-side,theme(colors.primary.500/.18),transparent)]" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-3xl 
                  bg-[radial-gradient(closest-side,theme(colors.indigo.500/.16),transparent)] animate-pulse" />
                <div className="pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full blur-3xl 
                  bg-[radial-gradient(closest-side,theme(colors.cyan.400/.18),transparent)] motion-safe:animate-pulse" />

                <div className="relative py-14 px-4 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12">
                    {/* Promo badge */}
                    <Link
                        href="/audit"
                        className="inline-flex items-center gap-2 rounded-full border border-gray-200/60 bg-white/70 px-2 py-1 pr-3 text-gray-700 shadow-sm backdrop-blur
                 hover:bg-white dark:border-gray-800/60 dark:bg-gray-900/60 dark:text-gray-100 dark:hover:bg-gray-900"
                        role="alert"
                    >
                        <span className="text-xs bg-primary-600 rounded-full text-white px-3 py-1.5">Neu</span>
                        <span className="text-sm font-medium">Finde deine größten Umsatz-Leaks in nur 72h</span>
                        <svg className="ml-1 h-5 w-5 opacity-80" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </Link>

                    {/* Heading */}
                    <h1 className="mt-6 mb-4 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Dein AI Automation Hub für profitableres{" "}
                        <span className="relative mx-1 inline-block">
                            <span className="bg-gradient-to-r from-gray-900 via-primary-700 to-cyan-600 bg-clip-text text-transparent dark:from-white dark:via-primary-400 dark:to-cyan-300">
                                E-Commerce
                            </span>
                        </span>
                    </h1>

                    <p className="mx-auto mb-8 mt-8 max-w-3xl text-lg text-gray-600 lg:text-xl dark:text-gray-400">
                      Wir verbinden Services, Wissen und AI-gestützte Automatisierungen, damit du weniger operativen Ballast hast, jederzeit deine Zahlen im Griff behältst – und dein Business profitabel wächst
                    </p>

                    {/* CTAs (optional) */}
                    <div className="flex items-center justify-center gap-3">
                        <Link
                            href="/audit"
                            className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-5 py-3 text-sm font-medium text-white shadow-md hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
                        >
                            Mehr erfahren
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
                </div>
            </section>



            <ServicesSection />

            <AboutSection />

      



            <BlogSnippet title="Du möchtest Dein E-Commerce Wissen erweitern?" description="Entdecke unsere neuesten Beiträge zum Thema E-Commerce" />

        </div>
    );
}

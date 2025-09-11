import Link from 'next/link';
import { Button, Tooltip } from "flowbite-react";
import { CiShare1 } from "react-icons/ci";
import { mapTypeToRevenue } from '../../../../lib/utils/textUtils';
import { getSoftwareBySlug, getAllSoftwareSlugs, getRelatedSoftware, getSupportedShopSystemsForSoftware } from '../../../../lib/api/software';

export const dynamicParams = false;
export const revalidate = 60;

export async function generateMetadata({ params }, parent) {
  const software = await getSoftwareBySlug(params.slug);
  return {
    title: `${software.name} – Erfahrungen und Features | Ecomthek`,
    description: `Erfahre mehr über die Funktionen und Erfahrungen mit ${software.name}. Alle wichtigen Features im Überblick – jetzt entdecken!`
  }
}

export async function generateStaticParams() {
  const data = await getAllSoftwareSlugs();
  return data.map((software) => ({ slug: software.slug }));
}

export default async function Software({ params }) {
  const software = await getSoftwareBySlug(params.slug);
  const relatedSoftware = await getRelatedSoftware(software);
  const supportedShops = await getSupportedShopSystemsForSoftware(software);

  let proCons = null;
  let plusIcon = (
    <svg className="mr-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
  let minusIcon = (
    <svg className="mr-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );

  proCons = software.software_procons.map(procon => {
    let color = "inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700";
    let icon = plusIcon;

    if (procon.type == "CON") {
      color = "inline-flex items-center rounded-full border border-rose-100 bg-rose-50 px-3 py-1 text-sm font-medium text-rose-700";
      icon = minusIcon;
    }
    return (
      <span key={procon.id} className={color}>
        {icon}
        {procon.name}
      </span>
    );
  });

  const isSuitable = (suitability, toCheck) => suitability.type === toCheck;

  const convertToPercentage = (score) => {
    const clampedScore = Math.max(0, Math.min(10, score));
    return Math.round((clampedScore / 10) * 100);
  };

  let expertRating = null;
  let expertRatingBox = null;
  let scoreSnippet = null;
  let expertRatingTab = null;
  let integrationBox = null;
  let integrationTable = null;

  // Integrationsbox nur wenn kein Shopsystem
  if (software.software_category.name !== 'Shopsysteme') {
    integrationBox = (
      <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Integration mit
        </h5>
        <ul className="space-y-3">
          {supportedShops.map(supportedShop => {
            let tooltipText = "Native Integration";
            let shopClassName = "font-medium text-gray-700";
            let icon = (
              <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd" />
              </svg>
            );

            if (supportedShop.integration_type == 'middleware' || supportedShop.integration_type == 'custom') {
              tooltipText = "Integration nur über Middleware oder API";
              icon = (
                <svg className="h-6 w-6 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd" />
                </svg>
              );
            }

            if (supportedShop.integration_type == 'none') {
              shopClassName = "font-medium text-gray-300";
              tooltipText = "Keine direkte Integration"
              icon = (
                <svg className="h-6 w-6 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clipRule="evenodd" />
                </svg>
              );
            }

            return (
              <li key={supportedShop.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img src={supportedShop.logo} alt={supportedShop.name + ' Logo'} className="h-8 w-8 object-contain" />
                  <span className={shopClassName}>{supportedShop.name}</span>
                </div>
                <Tooltip content={tooltipText}>
                  {icon}
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </div>
    );

    integrationTable = (
      <div>
        <h1 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Mit welchen Shopsystemen ist {software.name} kompatibel?
        </h1>
        <div className="w-full overflow-x-auto">
          <div className="min-w-max overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 gap-x-16 border-b border-gray-200 bg-gray-50 p-4 text-sm font-medium text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
              <div className="flex items-center">Shopsystem</div>
              <div>Integration</div>
            </div>

            {supportedShops.map(supportedShop => {
              let tooltipText = "Native Integration";
              let shopClassName = "font-medium text-gray-700";
              let icon = (
                <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd" />
                </svg>
              );

              if (supportedShop.integration_type == 'middleware' || supportedShop.integration_type == 'custom') {
                tooltipText = "Integration nur über Middleware oder API";
                icon = (
                  <svg className="h-6 w-6 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd" />
                  </svg>
                );
              }

              if (supportedShop.integration_type == 'none') {
                shopClassName = "font-medium text-gray-300";
                tooltipText = "Keine direkte Integration";
                icon = (
                  <svg className="h-6 w-6 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clipRule="evenodd" />
                  </svg>
                );
              }

              return (
                <div key={supportedShop.id} className="grid grid-cols-2 gap-x-16 border-b border-gray-200 px-4 py-5 text-sm text-gray-700 last:border-0 dark:border-gray-700">
                  <div className="text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-3">
                      <img src={supportedShop.logo} alt={supportedShop.name + ' Logo'} className="h-8 w-8 object-contain" />
                      <span className={shopClassName}>{supportedShop.name}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {icon}
                    <span className="ml-4">{tooltipText}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (software.expert_software_rating.length > 0) {
    expertRating = software.expert_software_rating[0];
  }

  if (expertRating !== null) {
    expertRatingTab = (
      <li className="me-2">
        <Link
          href="#ecomthekRating"
          className="inline-flex items-center justify-center rounded-t-lg border-b-2 border-transparent p-4 text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
        >
          <svg className="me-2 h-4 w-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clipRule="evenodd" />
          </svg>
          Ecomthek Bewertung
        </Link>
      </li>
    );

    scoreSnippet = (
      <div className="mb-5 flex items-center">
        <p className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-1 text-base font-semibold text-primary-700 ring-1 ring-primary-100">
          {expertRating.overall_score}/10
        </p>
        <p className="ms-2 font-medium text-gray-900 dark:text-white">Ecomthek Score</p>
      </div>
    );

    expertRatingBox = (
      <div className="mx-auto mb-12 max-w-screen-xl md:flex md:flex-row">
        <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h1 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Wie gut ist {software.name}? Unsere Analyse
          </h1>

          <div className="mb-10">
            {/* Score header */}
            <div className="mb-5 flex items-center">
              <p className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1.5 text-xl font-semibold text-primary-700 ring-1 ring-primary-100">
                {expertRating.overall_score}/10
              </p>
              <p className="ms-2 font-medium text-gray-900 dark:text-white">Ecomthek Score</p>
            </div>

            {/* Bars */}
            <div className="grid gap-8 sm:grid-cols-2">
              {[
                ['Funktionsumfang', expertRating.functionality_score],
                ['Benutzerfreundlichkeit', expertRating.usability_score],
                ['Integrationen & Kompatibilität', expertRating.integrations_compatibility_score],
                ['Preis-Leistungs-Verhältnis', expertRating.value_for_money_score],
                ['Support & Community', expertRating.support_community_score],
                ['Performance & Stabilität', expertRating.performance_stability_score],
                ['Innovationsgrad & Zukunftssicherheit', expertRating.innovation_future_proof_score],
              ].map(([label, value], idx) => (
                <dl key={idx}>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</dt>
                  <dd className="mb-3 flex items-center">
                    <div className="me-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-2.5 rounded-full bg-primary-600"
                        style={{ width: `${convertToPercentage(value)}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{value}</span>
                  </dd>
                </dl>
              ))}
            </div>
          </div>

          {/* Textabschnitte */}
          <h2 className="mb-2 flex items-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            <span className="mr-2 inline-flex items-center rounded-full bg-primary-50 px-2.5 py-1 text-sm font-semibold text-primary-700 ring-1 ring-primary-100">
              {expertRating.functionality_score}/10
            </span>
            Funktionsumfang
          </h2>
          <p className="mb-8 font-normal text-gray-600 dark:text-gray-400">{expertRating.functionality_text}</p>

          <h2 className="mb-2 flex items-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            <span className="mr-2 inline-flex items-center rounded-full bg-primary-50 px-2.5 py-1 text-sm font-semibold text-primary-700 ring-1 ring-primary-100">
              {expertRating.usability_score}/10
            </span>
            Benutzerfreundlichkeit
          </h2>
          <p className="mb-8 font-normal text-gray-600 dark:text-gray-400">{expertRating.usability_text}</p>

          <h2 className="mb-2 flex items-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            <span className="mr-2 inline-flex items-center rounded-full bg-primary-50 px-2.5 py-1 text-sm font-semibold text-primary-700 ring-1 ring-primary-100">
              {expertRating.integrations_compatibility_score}/10
            </span>
            Integrationen & Kompatibilität
          </h2>
          <p className="mb-8 font-normal text-gray-600 dark:text-gray-400">{expertRating.integrations_compatibility_text}</p>

          <h2 className="mb-2 flex items-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            <span className="mr-2 inline-flex items-center rounded-full bg-primary-50 px-2.5 py-1 text-sm font-semibold text-primary-700 ring-1 ring-primary-100">
              {expertRating.value_for_money_score}/10
            </span>
            Preis-Leistungs-Verhältnis
          </h2>
          <p className="mb-8 font-normal text-gray-600 dark:text-gray-400">{expertRating.value_for_money_text}</p>

          <h2 className="mb-2 flex items-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            <span className="mr-2 inline-flex items-center rounded-full bg-primary-50 px-2.5 py-1 text-sm font-semibold text-primary-700 ring-1 ring-primary-100">
              {expertRating.support_community_score}/10
            </span>
            Support & Community
          </h2>
          <p className="mb-8 font-normal text-gray-600 dark:text-gray-400">{expertRating.support_community_text}</p>

          <h2 className="mb-2 flex items-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            <span className="mr-2 inline-flex items-center rounded-full bg-primary-50 px-2.5 py-1 text-sm font-semibold text-primary-700 ring-1 ring-primary-100">
              {expertRating.performance_stability_score}/10
            </span>
            Performance & Stabilität
          </h2>
          <p className="mb-8 font-normal text-gray-600 dark:text-gray-400">{expertRating.performance_stability_text}</p>

          <h2 className="mb-2 flex items-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            <span className="mr-2 inline-flex items-center rounded-full bg-primary-50 px-2.5 py-1 text-sm font-semibold text-primary-700 ring-1 ring-primary-100">
              {expertRating.innovation_future_proof_score}/10
            </span>
            Innovationsgrad & Zukunftssicherheit
          </h2>
          <p className="mb-8 font-normal text-gray-600 dark:text-gray-400">{expertRating.innovation_future_proof_text}</p>

          <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Fazit</h2>
          <p className="mb-8 font-normal text-gray-600 dark:text-gray-400">{expertRating.final_verdict}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto mb-8 max-w-screen-xl pt-8 text-left">
          {/* Breadcrumb */}
          <nav className="mb-4 flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  href="/software"
                  className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg className="me-2.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Software
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180" viewBox="0 0 6 10" fill="none">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                  </svg>
                  <Link
                    href={`/software/kategorie/${software.software_category.slug}`}
                    className="ms-1 text-sm font-medium text-gray-600 hover:text-primary-700 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    {software.software_category.name}
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180" viewBox="0 0 6 10" fill="none">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{software.name}</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Header Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex flex-row">
              <div className="mr-5 mb-3 flex h-28 w-28 items-center justify-center rounded-xl bg-white ring-1 ring-gray-200">
                <img className="h-24 w-24 scale-90 object-contain" src={software.logo_url} alt={`${software.name} Logo`} />
              </div>
              <div>
                <h1 className="mb-1 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {software.name}
                </h1>
                {scoreSnippet}
                <Button className="bg-primary-600 hover:bg-primary-700 focus:outline-none" target="_blank" size="lg" as={Link} href={software.website_url}>
                  <CiShare1 className="mr-2 h-5 w-5" />
                  {software.name} {software.cta_text}
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-6 border-b border-gray-200 dark:border-gray-700">
              <ul className="flex -mb-px flex-wrap text-center text-sm font-medium">
                <li className="me-2">
                  <a
                    href="#"
                    className="active inline-flex items-center justify-center rounded-t-lg border-b-2 border-primary-600 p-4 text-primary-700 dark:border-primary-500 dark:text-primary-400"
                    aria-current="page"
                  >
                    <svg className="me-2 h-4 w-4 text-primary-600 dark:text-primary-400" viewBox="0 0 18 18" fill="currentColor">
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

      {/* Main two-column */}
      <div className="mx-auto mb-8 flex max-w-screen-xl flex-col gap-6 md:flex-row">
        {/* Left */}
        <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:w-3/4 dark:border-gray-700 dark:bg-gray-800">
          <h1 className="mb-8 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Was ist {software.name}?</h1>
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{software.description_headline}</h2>
          <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">{software.description}</p>

          <h1 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Welche Probleme löst {software.name}?</h1>
          <ul className="mb-8 max-w-md list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {software.problems.map(problem => (
              <li key={problem.id} className="flex items-center">
                <svg className="me-2 h-4 w-4 shrink-0 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {problem.solution}
              </li>
            ))}
          </ul>
          <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">{software.problems_text}</p>

          <h1 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Was für Features hat {software.name}?</h1>
          <ul className="mb-8 max-w-md list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {software.software_feature.map(feature => (
              <li key={feature.id} className="flex items-center">
                <svg className="me-2 h-4 w-4 shrink-0 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {feature.name}
              </li>
            ))}
          </ul>
          <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">{software.features_text}</p>

          <h1 className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Für wen ist {software.name} geeignet?</h1>
          <div className="mb-4">
            {software.software_suitability.map(suitabilityWrapper => {
              let suitability = suitabilityWrapper.software_suitability;
              let entry = (
                <span key={suitability.id} className="me-2 inline-flex items-center rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
                  <svg className="me-1.5 h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  {mapTypeToRevenue(suitability.type)}
                </span>
              );
              if (!suitabilityWrapper.is_suitable) entry = null;
              return entry;
            })}
          </div>
          <p className="mb-6 font-normal text-gray-600 dark:text-gray-400">{software.for_text}</p>

          <div className="w-full overflow-x-auto">
            <div className="min-w-max overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-x-16 border-b border-gray-200 bg-gray-50 p-4 text-sm font-medium text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                <div className="flex items-center">Jahresumsatz</div>
                <div>Geeignet</div>
              </div>

              {software.software_suitability.map(suitabilityWrapper => {
                let suitability = suitabilityWrapper.software_suitability;
                let icon = (
                  <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd" />
                  </svg>
                );
                if (!suitabilityWrapper.is_suitable) {
                  icon = (
                    <svg className="h-6 w-6 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clipRule="evenodd" />
                    </svg>
                  );
                }
                return (
                  <div key={suitability.id} className="grid grid-cols-2 gap-x-16 border-b border-gray-200 px-4 py-5 text-sm text-gray-700 last:border-0 dark:border-gray-700">
                    <div className="text-gray-600 dark:text-gray-400">
                      {mapTypeToRevenue(suitability.type)}
                    </div>
                    <div className="flex items-center">
                      {icon}
                      <span className="ml-4">{suitabilityWrapper.description}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {integrationTable}
        </div>

        {/* Right */}
        <div className="w-full md:w-1/4">
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Vorteile & Nachteile
            </h5>
            <div className="flex flex-wrap gap-2">{proCons}</div>
          </div>

          {integrationBox}

          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Geeignet für Shops
            </h5>
            <div className="flex flex-wrap gap-2">
              {software.software_suitability.map(suitabilityWrapper => {
                let suitability = suitabilityWrapper.software_suitability;
                let entry = (
                  <span key={suitability.id} className="me-2 inline-flex items-center rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
                    <svg className="me-1.5 h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {mapTypeToRevenue(suitability.type)}
                  </span>
                );
                if (!suitabilityWrapper.is_suitable) entry = null;
                return entry;
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Ähnliche Software
            </h5>
            <ul className="my-4 space-y-3">
              {relatedSoftware.map(relatedSoftwareItem => (
                <li key={relatedSoftwareItem.id}>
                  <Link
                    href={`/software/tool/${relatedSoftwareItem.slug}`}
                    className="group flex items-center rounded-xl bg-gray-50 p-3 font-semibold text-gray-900 ring-1 ring-gray-200 transition hover:bg-white hover:shadow dark:bg-gray-700 dark:text-white"
                  >
                    <img className="h-8 w-8 object-contain" src={relatedSoftwareItem.logo_url} alt={`${relatedSoftwareItem.name} Logo`} />
                    <span className="ms-3 flex-1 whitespace-nowrap">{relatedSoftwareItem.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div id="ecomthekRating" />
      {expertRatingBox}
    </div>
  );
}

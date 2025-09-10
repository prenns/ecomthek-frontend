"use client";

import React from "react";
import Link from "next/link";
import {
  Accordion,
  Alert,
  Badge,
  Button,
  Card,
  Progress,
  Table,
  Tooltip,
} from "flowbite-react";
import {
  CheckCircleIcon,
  XCircleIcon,
  MinusCircleIcon,
  InformationCircleIcon,
  LinkIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

// --- Statische Demo-Daten ---
const data = {
  name: "Shopify",
  logoUrl: "/placeholder-logo.svg",
  claim: "Gehostete All-in-One Plattform für schnelle Setups & hohe Skalierung.",
  score: 9.5,
  tldr:
    "Ideal ab 100k–10 Mio € Umsatz. Top UX & App-Ökosystem, aber Gebühren & Checkout-Limits (ohne Plus).",
  fitBadges: [
    "Gehostet",
    "App-Ökosystem",
    "Transaktionsgebühren",
    "Checkout anpassbar: Plus",
    "Internationalisierung",
    "POS möglich",
    "Headless APIs",
  ],
  quickFacts: {
    priceFrom: "ab 39 €/Monat",
    fees: "zusätzliche Transaktionsgebühren je nach PSP",
    hosting: "SaaS (gehostet)",
    trial: "3 Tage Trial (Beispiel)",
    dataRegion: "Global (CDN); EU-Konfiguration je nach Set-up",
    api: "Storefront & Admin APIs",
    pos: "Ja",
    markets: "Ja (Shopify Markets)",
  },
  suitability: [
    {
      range: "bis 100k €",
      why: "Time-to-Market vor Individualisierung.",
      stack: ["Klaviyo", "Judge.me", "Gorgias"],
    },
    {
      range: "100k – 1 Mio €",
      why: "Apps statt Eigenentwicklung, Fokus auf Wachstum.",
      stack: ["Klaviyo", "Gorgias", "Recharge", "Junip"],
    },
    {
      range: "1 – 10 Mio €",
      why: "Skalierbar, Prozesse und Integrationen reifen.",
      stack: ["Klaviyo", "Schnittstelle ERP", "Reviews.io"],
    },
    {
      range: "> 10 Mio €",
      why: "Plus für Checkout-Erweiterungen & Internationalisierung.",
      stack: ["Shopify Plus", "Markets", "ERP"],
    },
  ],
  tco: {
    plans: [
      { plan: "Basic", monthly: "39 €", txFee: "z. B. 2,0% + 0,25 €", notes: "Statisch – Demo" },
      { plan: "Advanced", monthly: "399 €", txFee: "niedriger", notes: "Statisch – Demo" },
      { plan: "Plus", monthly: "ab 2.000 €", txFee: "verhandelt", notes: "Enterprise" },
    ],
    appCostsHint: "Typisch 50–500 € / Monat zusätzlich (Demo).",
    tcoByRevenue: [
      { range: "≤ 100k €", estimate: "100–250 €/Monat" },
      { range: "100k–1 Mio €", estimate: "250–800 €/Monat" },
      { range: "1–10 Mio €", estimate: "800–3.000 €/Monat" },
      { range: "> 10 Mio €", estimate: "3.000 €+" },
    ],
    pspNote: "Externe PSPs können die effektiven Gebühren reduzieren.",
  },
  features: [
    { name: "Produktvarianten", level: "native" },
    { name: "Mehrsprachigkeit", level: "native" },
    { name: "Steuern", level: "native" },
    { name: "Rabatte", level: "native" },
    { name: "Bundles", level: "via-app" },
    { name: "Subscriptions", level: "via-app" },
    { name: "B2B", level: "via-app" },
    { name: "Headless", level: "native" },
    { name: "Multi-Store", level: "via-app" },
    { name: "POS", level: "native" },
    { name: "Analytics", level: "native" },
    { name: "Gift Cards", level: "native" },
  ],
  integrations: [
    { category: "E-Mail", tool: "Klaviyo", type: "nativ", note: "Standard-Integration" },
    { category: "Support", tool: "Gorgias", type: "nativ", note: "Helpdesk" },
    { category: "Reviews", tool: "Junip", type: "middleware", note: "App" },
    { category: "ERP", tool: "Xentral", type: "middleware", note: "Connector" },
    { category: "Buchhaltung", tool: "sevDesk", type: "middleware", note: "App/Export" },
    { category: "Versand", tool: "ShipStation", type: "nativ", note: "App" },
  ],
  limitations: [
    { title: "Checkout-Anpassung nur mit Plus", workaround: "Extensibility nutzen oder Plus kalkulieren." },
    { title: "App-Bloat & TCO", workaround: "Regelmäßiges App-Audit, Konsolidierung." },
    { title: "Datenhoheit/Export", workaround: "ETL via n8n/Supabase aufsetzen." },
  ],
  performance: {
    vitals: [
      { label: "LCP", value: 88 },
      { label: "CLS", value: 92 },
      { label: "INP", value: 85 },
    ],
    bestPractices: [
      "Schlankes Theme, unnötige Skripte vermeiden",
      "Bild-Pipeline & Lazy-Loading",
      "Apps mit Bedacht – Performance messen",
    ],
  },
  support: {
    channels: ["E-Mail", "Chat", "Telefon"],
    sla: "Antworten i. d. R. schnell; Premium-Support für Plus",
    community: "Aktive Foren & Partner-Ökosystem",
  },
  alternatives: [
    { name: "Shopify", hosting: "SaaS", tco: "mittel–hoch", checkout: "limitiert (Plus frei)", ttm: "sehr schnell", intl: "sehr gut" },
    { name: "WooCommerce", hosting: "Self-hosted", tco: "niedrig–mittel", checkout: "frei", ttm: "mittel", intl: "gut" },
    { name: "Shopware", hosting: "beides", tco: "mittel–hoch", checkout: "frei", ttm: "mittel", intl: "gut" },
  ],
  faq: [
    { q: "Was kostet Shopify insgesamt?", a: "Monatsgebühr + Transaktionsgebühren + Apps (Demo-Schätzung im TCO-Abschnitt)." },
    { q: "Brauche ich Shopify Plus für Checkout-Anpassungen?", a: "Für tiefe Anpassungen ja. Extensibility deckt einfache Fälle ab." },
    { q: "Ist Internationalisierung möglich?", a: "Ja, über Shopify Markets (Domains, Währungen, Sprachen)." },
    { q: "Wie exportiere ich Daten?", a: "APIs & Exporte; für DWH ETL-Strecke nutzen." },
    { q: "Unterstützt Shopify Headless?", a: "Ja: Storefront/API, Headless-Builds sind möglich." },
    { q: "Wie reduziere ich Gebühren?", a: "PSP-Wahl, Best-Practices im Checkout, App-Audit." },
  ],
};

// --- Hilfsfunktionen ---
const badgeColorForFit = (label) => {
  const l = label.toLowerCase();
  if (l.includes("plus")) return "purple";
  if (l.includes("gebühr")) return "yellow";
  if (l.includes("pos")) return "indigo";
  if (l.includes("gehostet") || l.includes("saas")) return "green";
  if (l.includes("headless")) return "cyan";
  if (l.includes("app")) return "blue";
  if (l.includes("international")) return "teal";
  return "gray";
};

const featureLevelMeta = {
  native: { color: "green", label: "nativ", Icon: CheckCircleIcon },
  "via-app": { color: "gray", label: "via App", Icon: MinusCircleIcon },
  none: { color: "red", label: "keine", Icon: XCircleIcon },
};

const typeColor = (type) => {
  switch (type) {
    case "nativ":
      return "success";
    case "middleware":
      return "warning";
    default:
      return "gray";
  }
};

// --- Seite ---
const anchors = [
  { id: "tldr", label: "TL;DR" },
  { id: "eignung", label: "Eignung" },
  { id: "preis", label: "Preis & Gebühren" },
  { id: "features", label: "Features" },
  { id: "integrationen", label: "Integrationen" },
  { id: "limitationen", label: "Limitationen" },
  { id: "performance", label: "Performance" },
  { id: "support", label: "Support" },
  { id: "alternativen", label: "Alternativen" },
  { id: "faq", label: "FAQ" },
];

export default function Page() {
  return (
    <main className="scroll-smooth">
      {/* Sticky Anchor Nav */}
      <div className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <nav
          aria-label="Anker-Navigation"
          className="mx-auto w-full max-w-7xl px-4"
        >
          <div className="flex gap-2 overflow-x-auto py-2">
            {anchors.map((a) => (
              <a
                key={a.id}
                href={`#${a.id}`}
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <LinkIcon className="h-4 w-4" />
                {a.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Header + Sticky Quick Facts */}
      <section className="mx-auto max-w-7xl px-4 pb-28 pt-8 lg:pb-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Left: Header + Badges + CTAs */}
          <div className="lg:col-span-2">
            <Card className="shadow-sm">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                {/* Logo */}
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border bg-gray-50"
                  aria-label="Produkt-Logo Platzhalter"
                >
                  <span className="text-xs text-gray-400">Logo</span>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h1 className="text-2xl font-semibold text-gray-900">
                        {data.name}
                      </h1>
                      <p className="text-gray-600">{data.claim}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Ecomthek Score</span>
                      <Badge color="green" className="text-base">
                        {data.score}/10
                      </Badge>
                    </div>
                  </div>

                  <Alert color="success" rounded>
                    <span className="font-medium">TL;DR:</span>{" "}
                    {data.tldr}
                  </Alert>

                  <div className="flex flex-wrap gap-2">
                    {data.fitBadges.map((b) => (
                      <Badge key={b} color={badgeColorForFit(b)} size="sm">
                        {b}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button color="blue" href="#" as={Link} target="_self">
                      Zur Anbieter-Website
                      <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                    </Button>
                    <Button color="light" href="#alternativen" as={Link}>
                      Mit Alternativen vergleichen
                    </Button>
                    <Button color="light" href="#eignung" as={Link}>
                      Stack-Fit prüfen
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Mobile Quick Facts under header */}
            <div className="mt-6 lg:hidden">
              <QuickFactsCard />
            </div>
          </div>

          {/* Right: Sticky Quick Facts on Desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <QuickFactsCard />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="mx-auto max-w-7xl px-4 pb-28 lg:pb-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2 space-y-10">
            {/* TL;DR – Wofür / Wofür nicht */}
            <section id="tldr" aria-labelledby="tldr-title">
              <h2 id="tldr-title" className="mb-4 text-xl font-semibold">
                TL;DR – Wofür / Wofür nicht
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 text-green-600" />
                    <div>
                      <h3 className="font-medium">Wofür geeignet</h3>
                      <ul className="mt-2 list-inside list-disc text-gray-700">
                        <li>Schnelles Go-Live, wenig Dev-Aufwand</li>
                        <li>Skalierung bis Enterprise mit Plus</li>
                        <li>Starkes App-Ökosystem</li>
                      </ul>
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className="flex items-start gap-3">
                    <XCircleIcon className="mt-0.5 h-5 w-5 text-red-600" />
                    <div>
                      <h3 className="font-medium">Wofür weniger geeignet</h3>
                      <ul className="mt-2 list-inside list-disc text-gray-700">
                        <li>Hochindividueller Checkout (ohne Plus)</li>
                        <li>Komplette Gebührenfreiheit</li>
                        <li>Sehr spezielle Datenprozesse ohne Middleware</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            {/* Eignung */}
            <section id="eignung" aria-labelledby="eignung-title">
              <h2 id="eignung-title" className="mb-4 text-xl font-semibold">
                Eignung nach Umsatzstufen
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {data.suitability.map((s) => (
                  <Card key={s.range}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Umsatzstufe</p>
                        <h3 className="text-lg font-medium">{s.range}</h3>
                        <p className="mt-1 text-gray-700">{s.why}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {s.stack.map((tool) => (
                            <Badge key={tool} color="info">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Badge color="gray">Beispiel-Stack</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Preis & Gebühren */}
            <section id="preis" aria-labelledby="preis-title">
              <div className="mb-2 flex items-center gap-2">
                <h2 id="preis-title" className="text-xl font-semibold">
                  Preis & Gebühren (TCO)
                </h2>
                <Tooltip content="Total Cost of Ownership – Gesamtkosten inkl. Gebühren & Apps" placement="right">
                  <InformationCircleIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                </Tooltip>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <Card>
                  <h3 className="mb-2 font-medium">Pläne & Gebühren</h3>
                  <Table hoverable aria-label="Tabelle der Pläne und Gebühren">
                    <Table.Head>
                      <Table.HeadCell>Plan</Table.HeadCell>
                      <Table.HeadCell>Monatlich</Table.HeadCell>
                      <Table.HeadCell>Transaktionsgebühren</Table.HeadCell>
                      <Table.HeadCell>Notiz</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                      {data.tco.plans.map((p) => (
                        <Table.Row key={p.plan}>
                          <Table.Cell className="font-medium">{p.plan}</Table.Cell>
                          <Table.Cell>{p.monthly}</Table.Cell>
                          <Table.Cell>{p.txFee}</Table.Cell>
                          <Table.Cell className="text-gray-500">{p.notes}</Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                  <p className="mt-2 text-sm text-gray-600">
                    {data.tco.appCostsHint}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2">
                    <Tooltip content={data.tco.pspNote}>
                      <Badge color="warning">Gebühren via PSP reduzierbar</Badge>
                    </Tooltip>
                  </div>
                </Card>

                <Card>
                  <h3 className="mb-2 font-medium">TCO je Umsatzstufe (Schätzung)</h3>
                  <div className="space-y-3">
                    {data.tco.tcoByRevenue.map((t) => (
                      <div key={t.range} className="flex items-center justify-between rounded-md border p-3">
                        <div>
                          <p className="text-sm text-gray-500">Umsatz</p>
                          <p className="font-medium">{t.range}</p>
                        </div>
                        <Badge color="gray">{t.estimate}</Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </section>

            {/* Features */}
            <section id="features" aria-labelledby="features-title">
              <h2 id="features-title" className="mb-4 text-xl font-semibold">
                Features (Raster)
              </h2>
              <Card>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm text-gray-600">nativ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-gray-400" />
                    <span className="text-sm text-gray-600">via App</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-red-500" />
                    <span className="text-sm text-gray-600">keine</span>
                  </div>
                  <Tooltip content="Legende: Ausstattungsgrad der Kernfeatures">
                    <InformationCircleIcon className="h-5 w-5 text-gray-500" />
                  </Tooltip>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {data.features.map((f) => {
                    const meta = featureLevelMeta[f.level] || featureLevelMeta["none"];
                    const Icon = meta.Icon;
                    return (
                      <div
                        key={f.name}
                        className="flex items-center justify-between rounded-md border p-3"
                      >
                        <div className="flex items-center gap-2">
                          <Icon
                            className={`h-5 w-5 ${
                              meta.color === "green"
                                ? "text-green-600"
                                : meta.color === "gray"
                                ? "text-gray-500"
                                : "text-red-600"
                            }`}
                          />
                          <span className="font-medium">{f.name}</span>
                        </div>
                        <Badge color={meta.color}>{meta.label}</Badge>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </section>

            {/* Integrationen */}
            <section id="integrationen" aria-labelledby="integrationen-title">
              <h2 id="integrationen-title" className="mb-4 text-xl font-semibold">
                Integrationen & Kompatibilität
              </h2>
              <Card>
                <Table hoverable aria-label="Tabelle der Integrationen">
                  <Table.Head>
                    <Table.HeadCell>Kategorie</Table.HeadCell>
                    <Table.HeadCell>Tool</Table.HeadCell>
                    <Table.HeadCell>Integration</Table.HeadCell>
                    <Table.HeadCell>Hinweis</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    {data.integrations.map((i, idx) => (
                      <Table.Row key={`${i.tool}-${idx}`}>
                        <Table.Cell className="font-medium">{i.category}</Table.Cell>
                        <Table.Cell>{i.tool}</Table.Cell>
                        <Table.Cell>
                          <Badge color={typeColor(i.type)}>{i.type}</Badge>
                        </Table.Cell>
                        <Table.Cell className="text-gray-600">{i.note}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </Card>
            </section>

            {/* Limitationen */}
            <section id="limitationen" aria-labelledby="limitationen-title">
              <h2 id="limitationen-title" className="mb-4 text-xl font-semibold">
                Limitationen & Workarounds
              </h2>
              <div className="space-y-3">
                {data.limitations.map((l) => (
                  <Alert key={l.title} color="warning" icon={InformationCircleIcon}>
                    <span className="font-medium">{l.title}:</span> {l.workaround}
                  </Alert>
                ))}
              </div>
            </section>

            {/* Performance */}
            <section id="performance" aria-labelledby="performance-title">
              <h2 id="performance-title" className="mb-4 text-xl font-semibold">
                Performance & Stabilität
              </h2>
              <Card>
                <p className="text-gray-700">
                  Gute Core Web Vitals sind erreichbar – Theme-Disziplin und App-Auswahl sind
                  entscheidend.
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {data.performance.vitals.map((v) => (
                    <div key={v.label}>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="font-medium">{v.label}</span>
                        <span className="text-sm text-gray-500">{v.value}%</span>
                      </div>
                      <Progress
                        progress={v.value}
                        color={v.value >= 90 ? "green" : v.value >= 80 ? "yellow" : "red"}
                      />
                    </div>
                  ))}
                </div>
                <ul className="prose mt-4 list-disc pl-5 text-gray-700">
                  {data.performance.bestPractices.map((bp) => (
                    <li key={bp}>{bp}</li>
                  ))}
                </ul>
              </Card>
            </section>

            {/* Support */}
            <section id="support" aria-labelledby="support-title">
              <h2 id="support-title" className="mb-4 text-xl font-semibold">
                Support & Community
              </h2>
              <Card>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-sm text-gray-500">Kanäle</p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {data.support.channels.map((c) => (
                        <Badge key={c} color="info">
                          {c}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">SLA</p>
                    <p className="mt-1 text-gray-700">{data.support.sla}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Community</p>
                    <p className="mt-1 text-gray-700">{data.support.community}</p>
                  </div>
                </div>
                <Alert color="purple" className="mt-4" icon={InformationCircleIcon}>
                  <span className="font-medium">Hinweis:</span> Premium-Support nur für Plus.
                </Alert>
              </Card>
            </section>

            {/* Alternativen */}
            <section id="alternativen" aria-labelledby="alternativen-title">
              <div className="mb-4 flex items-center justify-between">
                <h2 id="alternativen-title" className="text-xl font-semibold">
                  Alternativen (Mini-Vergleich)
                </h2>
                <Button color="light" as={Link} href="#">
                  Vollvergleich öffnen
                </Button>
              </div>
              <Card>
                <Table hoverable aria-label="Mini-Vergleichstabelle">
                  <Table.Head>
                    <Table.HeadCell>Tool</Table.HeadCell>
                    <Table.HeadCell>Hosting</Table.HeadCell>
                    <Table.HeadCell>TCO-Tendenz</Table.HeadCell>
                    <Table.HeadCell>Checkout-Freiheit</Table.HeadCell>
                    <Table.HeadCell>Time-to-Market</Table.HeadCell>
                    <Table.HeadCell>Internationalisierung</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    {data.alternatives.map((a) => (
                      <Table.Row key={a.name}>
                        <Table.Cell className="font-medium">{a.name}</Table.Cell>
                        <Table.Cell>{a.hosting}</Table.Cell>
                        <Table.Cell>{a.tco}</Table.Cell>
                        <Table.Cell>{a.checkout}</Table.Cell>
                        <Table.Cell>{a.ttm}</Table.Cell>
                        <Table.Cell>{a.intl}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </Card>
            </section>

            {/* FAQ */}
            <section id="faq" aria-labelledby="faq-title">
              <h2 id="faq-title" className="mb-4 text-xl font-semibold">
                FAQ
              </h2>
              <Card>
                <Accordion collapseAll>
                  {data.faq.map((f, idx) => (
                    <Accordion.Panel key={idx}>
                      <Accordion.Title>{f.q}</Accordion.Title>
                      <Accordion.Content>
                        <p className="text-gray-700">{f.a}</p>
                      </Accordion.Content>
                    </Accordion.Panel>
                  ))}
                </Accordion>
              </Card>
            </section>
          </div>

          {/* Spacer to align with sticky sidebar on desktop */}
          <div className="hidden lg:block" />
        </div>
      </section>

      {/* Footer CTA Leiste */}
      <div
        className="
          fixed bottom-0 left-0 right-0 z-40 border-t bg-white/95 px-4 py-3
          lg:static lg:z-auto lg:border-t lg:bg-transparent lg:py-8
        "
        aria-label="Footer-CTA-Leiste"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-2 lg:flex-row lg:items-center lg:justify-between">
          <p className="hidden text-sm text-gray-700 lg:block">
            Nächster Schritt: Stack-Fit prüfen oder Alternativen vergleichen.
          </p>
          <div className="flex flex-1 flex-wrap items-center justify-center gap-2 lg:justify-end">
            <Button color="light" as={Link} href="#eignung">
              Stack-Fit prüfen
            </Button>
            <Button color="light" as={Link} href="#alternativen">
              Mit Alternativen vergleichen
            </Button>
            <Button color="blue" as={Link} href="#">
              Zur Anbieter-Website
              <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

// --- Quick Facts Sidebar Card ---
function QuickFactsCard() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Quick Facts</h3>
        <Badge color="indigo">Kurzüberblick</Badge>
      </div>
      <dl className="mt-2 grid grid-cols-1 gap-3 text-sm">
        <FactItem term="Preis ab" desc={data.quickFacts.priceFrom} />
        <FactItem
          term="Gebührenmodell"
          desc={
            <span className="inline-flex items-center gap-2">
              {data.quickFacts.fees}
              <Tooltip content="Zusätzliche Kosten je PSP/Payment Provider möglich">
                <InformationCircleIcon className="h-4 w-4 text-gray-500" />
              </Tooltip>
            </span>
          }
        />
        <FactItem term="Hosting" desc={data.quickFacts.hosting} />
        <FactItem term="Trial" desc={data.quickFacts.trial} />
        <FactItem
          term="Datenspeicherung/EU"
          desc={data.quickFacts.dataRegion}
        />
        <FactItem term="API/Headless" desc={data.quickFacts.api} />
        <FactItem term="POS" desc={data.quickFacts.pos} />
        <FactItem term="Internationalisierung" desc={data.quickFacts.markets} />
      </dl>
      <div className="mt-3">
        <Button color="light" as={Link} href="#preis" size="sm">
          Details zu Preisen
        </Button>
      </div>
    </Card>
  );
}

function FactItem({ term, desc }) {
  return (
    <div className="rounded-md border p-3">
      <dt className="text-gray-500">{term}</dt>
      <dd className="font-medium text-gray-900">
        {typeof desc === "string" ? <span>{desc}</span> : desc}
      </dd>
    </div>
  );
}

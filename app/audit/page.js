
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle, Card, Button, Badge, Tooltip } from 'flowbite-react';
import {
    ArrowTrendingDownIcon,
    BanknotesIcon,
    FireIcon,
    PhotoIcon,
    CheckCircleIcon,
    ReceiptPercentIcon,
    ChartBarIcon,
    EnvelopeOpenIcon,
    VideoCameraIcon,
    PhoneIcon,
    ClipboardDocumentCheckIcon,
    BoltIcon,
    QueueListIcon,
    ChatBubbleBottomCenterTextIcon,
    EnvelopeIcon,
    ShieldCheckIcon,
    CalendarDaysIcon,
    MagnifyingGlassIcon,
    DocumentTextIcon,
    CheckBadgeIcon,
    ClockIcon,
    ArrowTrendingUpIcon,
    TrophyIcon,
    StarIcon
} from "@heroicons/react/24/solid";
import Image from 'next/image';
import FBInitiateCheckoutButton from '../../components/FBInitiateCheckoutButton'
export const metadata = {
    title: 'E-Commerce Audit | Ecomthek',
    description: '',
}

const CHECKOUT_URL = process.env.LEAK_FINDER_CHECKOUT_URL;

const steps = [
    {
        icon: CalendarDaysIcon,
        time: "T+0h",
        title: "Du buchst den Revenue Leak Finder",
        desc: "Slot sichern, Onboarding-Fragen beantworten (5–7 Min).",
        tags: ["Start heute", "Dauer: 7 Min."],
    },
    {
        icon: MagnifyingGlassIcon,
        time: "T+0–48h",
        title: "Wir analysieren Shop, Ads & Email",
        desc: "Tiefen-Audit deiner Kanäle mit Fokus auf Conversion-Hebel, AOV & ROAS.",
        tags: ["Leak-Analyse", "Impact-Score"],
    },
    {
        icon: DocumentTextIcon,
        time: "T+48–66h",
        title: "Du erhältst Video + PDF mit Action Plan",
        desc: "Screen-Recording mit Time-Stamps + klarer PDF-Plan mit Prioritäten.",
        tags: ["Video (15–25 Min.)", "PDF Action Plan"],
    },
    {
        icon: VideoCameraIcon,
        time: "T+66–72h",
        title: "30-Min Call → wir priorisieren & klären Fragen",
        desc: "Gemeinsam Quick Wins umsetzen und nächste Schritte fixieren.",
        tags: ["Quick Wins live", "Aufnahme verfügbar"],
    },
];


const weCheck = [
    {
        title: "Shop & Funnel Analyse",
        intro:
            "Wir finden die Conversion-Leaks, die dir täglich Geld rausziehen.",
        outcome: "Mehr CR, höherer AOV, weniger Reibung im Checkout.",
        Icon: ChartBarIcon,
    },
    {
        title: "Ad-Account Quick Check",
        intro:
            "Wir zeigen dir, wo Budget verbrennt – Kampagnen, Gebote, Attribution.",
        outcome: "Stabilerer ROAS statt Zufallstreffer.",
        Icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        title: "Email Money Map",
        intro:
            "Flows & Kampagnen, die Umsatz liegen lassen, werden neu priorisiert.",
        outcome: "Mehr Wiederkäufe, planbarer Cashflow.",
        Icon: EnvelopeIcon,
    },
    {
        title: "30-Tage Prioritätenplan",
        intro:
            "Klarer Fahrplan mit Reihenfolge, Owner und Impact-Schätzung.",
        outcome: "Du weißt exakt, was als Nächstes Geld bringt.",
        Icon: QueueListIcon,
    },
];


const valueItems = [
    { label: "Shop & Funnel Analyse", value: "1.000 €" },
    { label: "Email Money Map", value: "500 €" },
    { label: "Video-Analyse + PDF Report", value: "500 €" },
    { label: "30-Min 1:1 Call mit uns", value: "500 €" },
    { label: "Bonus: Conversion-Checkliste", value: "200 €" },
];

const items = [
    {
        title: "Shop & Funnel Analyse",
        desc:
            "Wir bohren in Produktseiten, Checkout, AOV-Hebel & Funnel-Gaps – mit klaren Fixes.",
        value: "1.000 €",
        Icon: ChartBarIcon,
    },
    {
        title: "Email Money Map",
        desc:
            "Klarer Flow-Plan (Welcome, Abandon, Winback, UGC) + Betreffzeilen, die öffnen.",
        value: "500 €",
        Icon: EnvelopeOpenIcon,
    },
    {
        title: "Video-Analyse + PDF Report",
        desc:
            "Screen-Recording mit Time-Stamps + kurzer Report. Kein Blabla. Nur To-dos.",
        value: "500 €",
        Icon: VideoCameraIcon,
    },
    {
        title: "30-Min 1:1 Call",
        desc:
            "Wir gehen live durch die Hebel, priorisieren und nehmen dir die nächsten Schritte ab.",
        value: "500 €",
        Icon: PhoneIcon,
    },
    {
        title: "Bonus: Conversion-Checkliste",
        desc:
            "Sofort-Check für Produktseiten & Cart – in 10 Min. mehr Klarheit als in 10 Blogs.",
        value: "200 €",
        Icon: ClipboardDocumentCheckIcon,
    },
];

const pains = [
    {
        title: "Umsatzschwankungen",
        text:
            "Ein Tag ballern die Bestellungen rein – am nächsten Tag Totenstille. Dein Cashflow zerbricht – und du schläfst schlecht.",
        Icon: ArrowTrendingDownIcon,
    },
    {
        title: "Schlechter ROAS",
        text:
            "Du verbrennst Geld in Ads. Je mehr du skalierst, desto schneller blutest du aus.",
        Icon: FireIcon,
    },
    {
        title: "Hohe Fixkosten",
        text:
            "Du arbeitest nur noch, um deine Agenturen, Mitarbeiter und Tools zu bezahlen – am Ende bleibt dir fast nichts.",
        Icon: BanknotesIcon,
    },
    {
        title: "Zu wenige Creatives",
        text:
            "Deine Ads sterben nach wenigen Tagen, weil dir frische Creatives fehlen. Wachstum? Unmöglich.",
        Icon: PhotoIcon,
    },
];

function Stars5({
    className = "h-8 w-8 text-yellow-400"
}) {
    return (
        <div className="flex items-center gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className={className} />
            ))}
        </div>
    );
}

export default function LandingAuditPage() {

    return (<>
        <section className="relative bg-white overflow-hidden bg-gradient-to-b from-blue-50 to-white">


            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">

                <div className="mx-auto max-w-3xl text-center">

                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700 ring-1 ring-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700">
                        <span className="font-semibold">Revenue Leak Finder</span>
                        <span className="h-1 w-1 rounded-full bg-gray-400"></span>
                        <span>Shop-Audit in 72h</span>
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Dein Shop verliert jeden Tag Geld – wir zeigen dir in 72h die 3 größten Leaks, die dich am meisten Profit kosten.

                    </h1>
                    <p class="mt-6 text-lg text-gray-600">Statt mehr Ads zu schalten, zeigen wir dir, wie du mit den bestehenden Besuchern sofort mehr Umsatz holst – schwarz auf weiß in deinem Action Plan.</p>

                    <div className="mt-8 flex flex-col items-center justify-center text-center">
                        <FBInitiateCheckoutButton
                            href={CHECKOUT_URL}
                            ariaLabel="Jetzt Audit starten"
                            gradientDuoTone="purpleToBlue"
                            size="lg"
                            className="inline-flex"
                        >
                            Jetzt Audit buchen – 72h geliefert oder gratis
                        </FBInitiateCheckoutButton>

                        <p className="mt-3 text-sm text-gray-500">
                            299€ Fixpreis • 72h garantiert • ROI Garantie oder Geld zurück
                        </p>
                    </div>

                </div>



            </div>


        </section>


        <section className="bg-gray-50 py-20 dark:bg-gray-900">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Headline */}

                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Dein Umsatz stagniert – und du weißt nicht, warum.
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Du probierst neue Ads, Tools, Agenturen. Nichts beißt. Jede Woche
                        ohne Lösung kostet dich Geld, Fokus und Nerven – während die
                        Konkurrenz vorbeizieht.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {pains.map(({ title, text, Icon }) => (
                        <Card
                            key={title}
                            className="border border-gray-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:border-gray-700"
                            theme={{
                                root: {
                                    children: "flex flex-col gap-3 p-6",
                                },
                            }}
                        >
                            <div className="flex items-start gap-4">
                                <span className="inline-flex rounded-xl bg-rose-100 p-2 text-rose-600 ring-1 ring-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:ring-rose-900/50">
                                    <Icon className="h-6 w-6" />
                                </span>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {title}
                                    </h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">{text}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* <section className="bg-gray-50 dark:bg-gray-900">
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
        </section> */}




        <section className="py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Headline + Subline */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Was wir prüfen – und warum es dir Geld bringt
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Klarer Fokus auf <span className="font-semibold text-gray-800 dark:text-white">Gewinn</span>:
                        Wir identifizieren die größten Leaks in deinem Funnel und geben dir die
                        schnellsten Hebel zuerst.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {weCheck.map(({ title, intro, outcome, Icon }) => (
                        <Card
                            key={title}
                            className="border border-gray-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:border-gray-700"
                            theme={{ root: { children: "flex gap-4 p-6" } }}
                        >
                            {/* Icon */}
                            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:ring-indigo-900/60">
                                <Icon className="h-6 w-6" />
                            </span>

                            {/* Copy */}
                            <div className="flex min-w-0 flex-col">
                                <div className="flex items-center gap-3">
                                    <h3 className="truncate text-lg font-semibold text-gray-900 dark:text-white">
                                        {title}
                                    </h3>
                                    <Badge color="success" className="rounded-md">ROI-Hebel</Badge>
                                </div>
                                <p className="mt-1 text-gray-600 dark:text-gray-300">{intro}</p>
                                <div className="mt-3 rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700 ring-1 ring-inset ring-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:ring-emerald-800">
                                    Ergebnis: <span className="font-medium">{outcome}</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Micro-proof bar (optional, passt zum Rest) */}
                <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                    <span>Kanalübergreifend</span>
                    <span>•</span>
                    <span>Priorisiert nach Impact</span>
                    <span>•</span>
                    <span>Lieferung in 72h</span>
                </div>
            </div>
        </section>

        <section className="bg-white py-16 dark:bg-gray-900">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Warum du uns vertrauen kannst
                    </h2>
                    <div className="mt-2 flex justify-center">
                        <Stars5 />
                    </div>
                    <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
                        Keine leeren Testimonials. Wir zeigen dir die Hebel, die in unseren eigenen
                        E-Commerce-Brands Profit bringen – 1:1 auf deinen Shop übertragen.
                    </p>
                    <div className="mx-auto max-w-4xl px-4">
                        <Image
                            src="/images/revenue-chart.png"
                            width={1600}           // großes Ausgangsmaß
                            height={900}
                            alt="Revenue Chart"
                            className="w-full h-auto rounded-xl shadow-lg"
                            priority               // falls above the fold
                        />
                    </div>


                </div>

                {/* Trust pills */}
                <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2 text-sm">
                    <span className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1.5 text-emerald-700 ring-1 ring-inset ring-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:ring-emerald-800">
                        <TrophyIcon className="h-5 w-5" />
                        Eigene 7-Figure Brands
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 text-gray-700 ring-1 ring-inset ring-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700">
                        <ChartBarIcon className="h-5 w-5" />
                        &gt;100.000 Bestellungen
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-1.5 text-indigo-700 ring-1 ring-inset ring-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:ring-indigo-900/60">
                        <BoltIcon className="h-5 w-5" />
                        72h Diagnose-SLA
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1.5 text-emerald-700 ring-1 ring-inset ring-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:ring-emerald-800">
                        <ShieldCheckIcon className="h-5 w-5" />
                        ROI-Garantie
                    </span>
                </div>

                {/* Content grid */}
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {/* Left: Authority + Was du siehst */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Operatoren, nicht Theoretiker
                        </h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                            Wir führen mehrere eigene D2C-Shops mit{" "}
                            <span className="font-semibold">7-stelligen Jahresumsätzen</span>.
                            Die Systeme, die dort CR, AOV & ROAS stabilisieren, erhältst du in deinem
                            Audit <span className="font-semibold">eins-zu-eins</span> – ohne Agentur-Bla.
                        </p>

                        {/* Was du siehst */}
                        <div className="mt-5 rounded-xl bg-gray-50 p-4 ring-1 ring-inset ring-gray-200 dark:bg-gray-900 dark:ring-gray-700">
                            <p className="font-medium text-gray-900 dark:text-white">Was du im Audit siehst</p>
                            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                <li>Video-Analyse (15–25 Min.) mit Kapitelmarken & Time-Stamps</li>
                                <li>PDF-Action Plan: Top-3 Hebel mit Priorität, Aufwand (S/M/L) & €-Impact</li>
                                <li>Konkrete Maßnahmen: Checkout-Trust-Row, Winback-Flow, Bundle-AOV</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Visual Proof (Screens/Mockups) */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            So sieht dein Audit aus (Beispiel)
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                            Echte, greifbare Artefakte – kein Blabla.
                        </p>

                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            {/* Screenshot 1 – Video */}
                            <figure className="group">
                                <div className="relative overflow-hidden rounded-lg ring-1 ring-gray-200 dark:ring-gray-700">
                                    {/* Next/Image Variante */}
                                    <div className="relative h-40 w-full sm:h-36">
                                        <Image
                                            src="/images/screen-recording-audit.png"
                                            alt="Video-Analyse – Beispiel mit Kapitelmarken"
                                            fill
                                            className="object-cover transition group-hover:scale-105"
                                            sizes="(max-width: 640px) 100vw, 50vw"
                                        />
                                    </div>
                                    {/* Overlay label */}
                                    <span className="absolute left-2 top-2 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white">
                                        Video
                                    </span>
                                </div>
                                <figcaption className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                    Screen-Recording mit Time-Stamps. Spring direkt zu den Hebeln.
                                </figcaption>
                            </figure>

                            {/* Screenshot 2 – PDF */}
                            <figure className="group">
                                <div className="relative overflow-hidden rounded-lg ring-1 ring-gray-200 dark:ring-gray-700">
                                    <div className="relative h-40 w-full sm:h-36">
                                        <Image
                                            src="/images/checklist.png"
                                            alt="PDF Action Plan – Top-3 Hebel mit Aufwand & Impact"
                                            fill
                                            className="object-cover transition group-hover:scale-105"
                                            sizes="(max-width: 640px) 100vw, 50vw"
                                        />
                                    </div>
                                    <span className="absolute left-2 top-2 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white">
                                        PDF
                                    </span>
                                </div>
                                <figcaption className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                    Priorisierte Maßnahmen inkl. Aufwand (S/M/L) & €-Impact-Schätzung.
                                </figcaption>
                            </figure>

                            {/* Screenshot 3 – Checklist */}
                            <figure className="group sm:col-span-2">
                                <div className="relative overflow-hidden rounded-lg ring-1 ring-gray-200 dark:ring-gray-700">
                                    <div className="relative h-44 w-full">
                                        <Image
                                            src="/images/audit-checklist.png"
                                            alt="Conversion-Checkliste – schnelle Quick Wins"
                                            fill
                                            className="object-cover transition group-hover:scale-105"
                                            sizes="100vw"
                                        />
                                    </div>
                                    <span className="absolute left-2 top-2 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white">
                                        Checkliste
                                    </span>
                                </div>
                                <figcaption className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                    Sofort umsetzbare To-dos für Produktseite & Checkout.
                                </figcaption>
                            </figure>
                        </div>

                        {/* CTA (optional, konsistent) */}
                        <div className="mt-5 text-center">
                            <FBInitiateCheckoutButton
                                    href={CHECKOUT_URL}
                                    ariaLabel="Jetzt Audit starten"
                                    gradientDuoTone="purpleToBlue"
                                    size="lg"
                                    className="inline-flex"
                                >
                                    Jetzt Audit buchen – 72h geliefert oder gratis
                                </FBInitiateCheckoutButton>

                            <p className="mt-3 text-sm text-gray-500">
                                299€ Fixpreis • 72h garantiert • ROI Garantie oder Geld zurück
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="bg-gray-50 py-20 dark:bg-gray-900">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        So läuft’s ab – in 72h hast du Klarheit & einen Plan
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
                        Kein Blabla. Vier Schritte. Konkrete Ergebnisse nach jedem Schritt.
                    </p>

                    <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700 ring-1 ring-inset ring-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:ring-emerald-800">
                        <CheckBadgeIcon className="h-5 w-5" />
                        Lieferung garantiert innerhalb von <strong className="ml-1">72h</strong>
                    </div>
                </div>

                {/* Timeline */}
                <div className="mt-12 space-y-10">
                    {steps.map(({ icon: Icon, time, title, desc, tags }) => (
                        <div key={title} className="relative pl-12">
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:ring-indigo-900/60">
                                <Icon className="h-5 w-5" />
                            </div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{time}</p>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                            <p className="mt-1 text-gray-600 dark:text-gray-300">{desc}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {tags.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-12 text-center">

                    <FBInitiateCheckoutButton
                        href={CHECKOUT_URL}
                        ariaLabel="Jetzt Audit starten"
                        gradientDuoTone="purpleToBlue"
                        size="lg"
                        className="inline-flex"
                    >
                        Jetzt Audit buchen – 72h geliefert oder gratis
                    </FBInitiateCheckoutButton>
                    <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                        Fixpreis 299 € • Lieferung in 72h • Kein Retainer
                    </p>
                </div>
            </div>
        </section>


        <section className="bg-white py-20 dark:bg-gray-900">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Top Headline */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Genau das bekommst du – mit klarem <span className="text-emerald-600 dark:text-emerald-400">€-Wert</span>.
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                        Keine Theorie. Nur Hebel, die sofort Geld auf den Tisch legen. Du weißt nach diesem Audit
                        exakt, <span className="font-semibold text-gray-800 dark:text-white">was du tust</span>,
                        <span className="font-semibold text-gray-800 dark:text-white"> warum</span> und
                        <span className="font-semibold text-gray-800 dark:text-white"> in welcher Reihenfolge</span>.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* LEFT: Value-Stack mit tough copy */}
                    <Card className="border border-gray-200 shadow-sm dark:border-gray-700">
                        <div className="flex items-start justify-between">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                Das steckt im Revenue Leak Finder
                            </h3>
                            <Badge color="success" className="rounded-md" icon={CheckCircleIcon}>
                                Sofort umsetzbar
                            </Badge>
                        </div>

                        <ul className="mt-4 space-y-5">
                            {items.map(({ title, desc, value, Icon }) => (
                                <li key={title} className="flex items-start gap-4">
                                    <span className="inline-flex rounded-xl bg-emerald-100 p-2 text-emerald-600 ring-1 ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-900/50">
                                        <Icon className="h-6 w-6" />
                                    </span>
                                    <div className="flex w-full flex-col">
                                        <div className="flex items-baseline justify-between gap-3">
                                            <p className="text-lg font-semibold text-gray-900 dark:text-white">{title}</p>
                                            <span className="shrink-0 rounded-md bg-emerald-50 px-2 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:ring-emerald-800">
                                                Wert: {value}
                                            </span>
                                        </div>
                                        <p className="mt-1 text-gray-600 dark:text-gray-300">{desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/50 dark:bg-emerald-900/20">
                            <p className="text-sm text-emerald-800 dark:text-emerald-300">
                                👉 <span className="font-semibold">Gesamtwert: 2.700 €</span> – dein Preis:{" "}
                                <span className="font-semibold">nur 299 €</span>. Wenn du nur{" "}
                                <span className="underline decoration-emerald-400 decoration-2 underline-offset-2">
                                    einen
                                </span>{" "}
                                Hebel umsetzt, hast du den ROI mehrfach drin.
                            </p>
                        </div>
                    </Card>

                    {/* RIGHT: „Wertbeleg“ / Receipt-Card */}
                    <Card className="border border-gray-200 shadow-sm dark:border-gray-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Wertbeleg (realistisch, nicht aus der Luft)
                                </h3>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    Auf Basis von Benchmarks & Hebelwirkung je Deliverable.
                                </p>
                            </div>
                            <span className="inline-flex items-center gap-2 rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 dark:bg-indigo-950/30 dark:text-indigo-300 dark:ring-indigo-900/60">
                                <ReceiptPercentIcon className="h-5 w-5" />
                                ROI-Fokus
                            </span>
                        </div>

                        <div className="mt-4 divide-y divide-gray-100 rounded-lg border border-gray-100 dark:divide-gray-800 dark:border-gray-800">
                            {items.map(({ title, value }) => (
                                <div
                                    key={title}
                                    className="flex items-center justify-between bg-white px-4 py-3 dark:bg-gray-900"
                                >
                                    <span className="text-sm text-gray-700 dark:text-gray-300">{title}</span>
                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                        {value}
                                    </span>
                                </div>
                            ))}
                            <div className="flex items-center justify-between bg-gray-50 px-4 py-3 font-semibold dark:bg-gray-800">
                                <span className="text-gray-900 dark:text-white">Gesamtwert</span>
                                <span className="text-emerald-600 dark:text-emerald-400">2.700 €</span>
                            </div>
                            <div className="flex items-center justify-between bg-gray-50 px-4 py-3 dark:bg-gray-800">
                                <span className="text-gray-500 dark:text-gray-400">Dein Preis</span>
                                <span className="text-gray-900 dark:text-white">299 € (einmalig)</span>
                            </div>
                            <div className="flex items-center justify-between rounded-b-lg bg-emerald-50 px-4 py-3 dark:bg-emerald-900/20">
                                <span className="text-emerald-700 dark:text-emerald-300">Effektiver Hebel</span>
                                <span className="text-emerald-700 dark:text-emerald-300">&gt; 9x Wert</span>
                            </div>
                        </div>

                        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                            Keine langen Projekte. Du bekommst klare, priorisierte Maßnahmen – die{" "}
                            <span className="font-semibold">in 72h</span> bei dir liegen.
                        </p>
                    </Card>
                </div>
            </div>
        </section>

        {/* <section className="bg-white dark:bg-gray-900">
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
                       
                        <ul
                            role="list"
                            className="pt-8 my-7 space-y-5 border-t border-gray-200 dark:border-gray-700"
                        >
                            <li className="flex space-x-3">
                              
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
                     
                        <ul
                            role="list"
                            className="pt-8 my-7 space-y-5 border-t border-gray-200 dark:border-gray-700"
                        >
                            <li className="flex space-x-3">
                                
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
                        
                        <ul
                            role="list"
                            className="pt-8 my-7 space-y-5 border-t border-gray-200 dark:border-gray-700"
                        >
                            <li className="flex space-x-3">
                               
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
        </section> */}

        {/* <section className="bg-white dark:bg-gray-900 antialiased">
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
        </section> */}



        {/* <section className="bg-white dark:bg-gray-900 antialiased">

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
        </section> */}

        {/* <section className="bg-white dark:bg-gray-900">
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

                                <svg className="w-5 h-5 text-primary-600 dark:text-primary-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12 5a7 7 0 0 0-7 7v1.17c.313-.11.65-.17 1-.17h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-6a9 9 0 0 1 18 0v6a3 3 0 0 1-3 3h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2c.35 0 .687.06 1 .17V12a7 7 0 0 0-7-7Z" clip-rule="evenodd" />
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

                                <svg className="w-5 h-5 text-primary-600 dark:text-primary-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z" />
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
        </section> */}

        <section className="bg-white py-20 dark:bg-gray-900">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 md:grid-cols-2 md:items-center">
                    {/* LEFT: Copy + Proof badges */}
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Wir verdienen am Markt – nicht an deinem Retainer.
                        </h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Wir führen eigene E-Commerce-Brands mit <span className="font-semibold">7-stelligen Jahresumsätzen</span>.
                            Die Hebel, die bei uns Profit bringen, bekommst du 1:1 – ohne Bullshit.
                            Ziel: <span className="font-semibold">mehr Gewinn, schneller.</span>
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            <Badge color="success" icon={BanknotesIcon} className="rounded-md">
                                Eigene Brands (7-stellig)
                            </Badge>
                            <Badge color="indigo" icon={ChartBarIcon} className="rounded-md">
                                ROAS stabilisiert
                            </Badge>
                            <Badge color="gray" icon={ShieldCheckIcon} className="rounded-md">
                                Fixkosten runter
                            </Badge>
                            <Badge color="purple" icon={BoltIcon} className="rounded-md">
                                72h Audit
                            </Badge>
                        </div>

                        <div className="mt-8 mb-8 space-y-3">
                            {[
                                "Stabile Umsätze statt Achterbahn (ROAS & AOV als Treiber).",
                                "Fixkostenquote senken – Cashflow planbar machen.",
                                "Creatives, die länger leben – Testing-System statt Zufall.",
                                "30-Tage-Plan mit klarer Reihenfolge (du weißt genau, was als Nächstes kommt).",
                            ].map((line) => (
                                <div key={line} className="flex items-start gap-3">
                                    <CheckCircleIcon className="mt-0.5 h-6 w-6 text-emerald-600" />
                                    <p className="text-gray-700 dark:text-gray-300">{line}</p>
                                </div>
                            ))}
                        </div>

                        <FBInitiateCheckoutButton
                                href={CHECKOUT_URL}
                                ariaLabel="Jetzt Audit starten"
                                className="inline-flex"
                                gradientDuoTone="purpleToBlue"
                                size="lg"
                            >
                                Jetzt Audit buchen – 72h geliefert oder gratis
                            </FBInitiateCheckoutButton>
                    </div>

                    {/* RIGHT: Founder cards with skin-in-the-game overlay */}
                    <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {[
                            {
                                name: "Alex Prennsberger",
                                role: "E-Com Profit Strategist, Founder mehrerer 7-stelliger Brands",
                                img: "/images/alex-prennsberger.png",
                            },
                            {
                                name: "Tina Prennsberger",
                                role: "Retention & Growth Expert, Operator 7-Figure Stores",
                                img: "/images/tina-prennsberger.jpg",
                            },
                        ].map((f) => (
                            <Card
                                key={f.name}
                                className="overflow-hidden border border-gray-200 p-0 shadow-sm dark:border-gray-700"
                                imgSrc={f.img}
                                horizontal={false}
                            >
                                <div className="relative px-4 pb-4">
                                    <h3 className="text-lg font-semiboldrop-shadow">{f.name}</h3>
                                    <p className="text-sm">{f.role}</p>
                                    <Tooltip content="Wir stehen im Risiko – deshalb nur Hebel, die bei uns profitabel sind.">
                                        <span className="mt-2 inline-flex items-center gap-1 rounded-md bg-emerald-500/90 px-2 py-1 text-xs font-medium text-white ring-1 ring-emerald-400/60">
                                            <ShieldCheckIcon className="h-4 w-4" />
                                            Skin in the game
                                        </span>
                                    </Tooltip>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Logos + Trust bar */}
                <div className="mt-12 border-t border-gray-100 pt-8 dark:border-gray-800">
                    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-80">
                        <img src="/images/wunderklein-logo-audit.png" alt="WUNDERklein" className="h-10" />
                        <img src="/images/daykroud-logo-audit.png" alt="daykroud" className="h-10" />
                        {/* weitere Logos */}
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                        <span>Eigene E-Com-Brands</span>
                        <span>•</span>
                        <span>Kein Retainer</span>
                        <span>•</span>
                        <span>72h Audit</span>
                    </div>
                </div>
            </div>
        </section>


        {/* <section className="bg-white dark:bg-gray-900 antialiased">
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

                <div className="mt-20 w-full flex-1 flex flex-wrap grow justify-center gap-20">
                    <img width={300} className="h-auto max-w-full" src="/images/wunderklein-logo-audit.png" />
                    <img width={250} className="h-auto max-w-full" src="/images/daykroud-logo-audit.png" />
                </div>
            </div>


        </section> */}

        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Revenue Leak Finder
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Jeder Tipp ist sofort umsetzbar und bringt dir mehrfachen ROI.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Linke Spalte: Value-Stack */}
                    <Card className="border border-gray-100 shadow-sm dark:border-gray-700">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            Das bekommst du im Revenue Leak Finder
                        </h3>

                        <ul className="mt-4 space-y-4">
                            {valueItems.map((item) => (
                                <li key={item.label} className="flex items-start gap-3">
                                    {/* <CheckCircleIcon className="mt-0.5 h-6 w-6 flex-none text-emerald-500" /> */}
                                    <CheckIcon className="h-4 w-4 text-green-600" />
                                    <div className="flex w-full items-baseline justify-between gap-2">
                                        <span className="text-gray-800 dark:text-gray-200">{item.label}</span>
                                        <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                            Wert: {item.value}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 rounded-lg border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900/50 dark:bg-emerald-900/20">
                            <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
                                👉 <span className="font-semibold">Gesamtwert: 2.700 €</span> – dein Preis:{" "}
                                <span className="font-semibold">nur 299 €</span>
                            </p>
                        </div>
                    </Card>

                    {/* Rechte Spalte: Preisbox */}
                    <Card className="flex h-full flex-col justify-between border border-gray-100 shadow-sm dark:border-gray-700">
                        <div>
                            <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                Einmalige Zahlung
                            </div>
                            <div className="flex items-end gap-2">
                                <span className="text-5xl font-bold leading-none text-gray-900 dark:text-white">
                                    299€
                                </span>
                                <span className="pb-1 text-gray-500 dark:text-gray-400">einmalig</span>
                            </div>

                            <p className="mt-4 inline-flex items-center gap-2 rounded-md bg-indigo-50 px-3 py-2 text-sm text-indigo-700 ring-1 ring-inset ring-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:ring-indigo-900">
                                <ClockIcon className="h-5 w-5" />
                                Lieferung innerhalb von <strong className="ml-1 font-semibold">72h</strong>
                            </p>

                            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                                Präzises Audit mit klaren Handlungs-Empfehlungen – sofort umsetzbar für
                                maximalen ROI.
                            </p>
                        </div>

                        <div className="mt-8">
                            <Button
                                href={CHECKOUT_URL}
                                aria-label="Jetzt Audit starten"
                                className="w-full"
                                gradientDuoTone="purpleToBlue"
                                size="lg"
                            >
                                Jetzt Audit buchen – 72h geliefert oder gratis
                            </Button>
                            <p className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
                                Sicherer Checkout • Keine laufenden Kosten • ROI Garantie
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>

        {/* <section className="bg-gray-50 dark:bg-gray-900">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 lg:py-16 lg:px-6">
                <div className="text-gray-500 sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                       Was du bekommst und wie du davon profitierst
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

                <div id="booking" className="flex flex-col p-6 bg-white rounded-lg shadow xl:p-8 dark:bg-gray-800">
                    <div className="justify-between items-center md:flex">
                        <div>
                            <div className="flex justify-between mb-2">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Revenue Leak Finder
                                </h3>
                                <div className="flex items-center md:hidden">
                                    <div className="mr-1 text-2xl font-extrabold text-gray-900 lg:text-5xl dark:text-white">
                                        <span className="mx-1 relative inline-block stroke-current">
                                            299€
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
                                    299€
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
                     
                        <ul role="list" className="space-y-4">
                            <li className="flex space-x-2.5">
                           
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
                      
                        <ul role="list" className="space-y-4">
                            <li className="flex space-x-2.5">
                               
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
        </section> */}

        <section className="bg-gray-50 py-16 dark:bg-gray-900">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-8">
                    <div className="flex items-start gap-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:ring-emerald-800">
                            <ShieldCheckIcon className="h-7 w-7" />
                        </span>
                        <div className="flex-1">
                            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
                                Wir tragen das Risiko: <span className="text-emerald-600 dark:text-emerald-400">72h oder gratis</span>. Kein ROI? Geld zurück.
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">
                                Keine weiche Zufriedenheitsfloskel. Eine klare Garantie mit messbaren Ergebnissen.
                            </p>

                            {/* 2-Säulen-Garantie */}
                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-700">
                                    <div className="flex items-center gap-3">
                                        <ClockIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                            72h On-Time-or-Free
                                        </p>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                        Wir liefern das komplette Audit innerhalb von 72 Stunden.
                                        Wenn nicht: <span className="font-semibold">Audit ist kostenlos</span> – du behältst Video, PDF & Checklisten.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-700">
                                    <div className="flex items-center gap-3">
                                        <ArrowTrendingUpIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                            ROI-Garantie (14 Tage)
                                        </p>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                        Setze unsere <span className="font-medium">Top-3 Hebel</span> um. Falls du danach keinen
                                        der folgenden Lifts erreichst, erstatten wir <span className="font-semibold">100%</span>:
                                    </p>
                                    <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start gap-2">
                                            <CheckCircleIcon className="mt-0.5 h-5 w-5 text-emerald-600" />
                                            <span><span className="font-medium">+5% Conversion Rate relativ</span></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircleIcon className="mt-0.5 h-5 w-5 text-emerald-600" />
                                            <span><span className="font-medium">+5-10% AOV</span></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircleIcon className="mt-0.5 h-5 w-5 text-emerald-600" />
                                            <span><span className="font-medium">+299 € zusätzlicher Umsatz</span> (E-Mail/Shop) innerhalb von 14 Tagen</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Wie claimen? */}
                            <div className="mt-6 rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm dark:border-gray-700 dark:bg-gray-900">
                                <div className="flex items-center gap-2 font-medium text-gray-900 dark:text-white">
                                    <ClipboardDocumentCheckIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                                    So einfach löst du die Garantie ein
                                </div>
                                <ol className="mt-2 list-inside list-decimal space-y-1 text-gray-600 dark:text-gray-300">
                                    <li>Top-3 Hebel aus unserem Plan umsetzen (wie beschrieben).</li>
                                    <li>Vorher/Nachher-Screenshots oder Zahlen aus Shop/Ad-Manager/E-Mail-Tool senden.</li>
                                    <li>Wenn keiner der oben genannten Lifts erreicht wird → <span className="font-medium">100% Rückerstattung</span>. Du behältst alle Materialien.</li>
                                </ol>
                            </div>

                            {/* Micro-CTA */}
                            <div className="mt-6">
                                <FBInitiateCheckoutButton
                                    href={CHECKOUT_URL}
                                    ariaLabel="Jetzt Audit starten"
                                    gradientDuoTone="purpleToBlue"
                                    size="lg"
                                    className="inline-flex"
                                >
                                    Jetzt Audit buchen – 72h geliefert oder gratis
                                </FBInitiateCheckoutButton>

                                <p className="mt-3 text-sm text-gray-500">
                                    299€ Fixpreis • 72h garantiert • ROI Garantie oder Geld zurück
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <section className="bg-white dark:bg-gray-900">
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
        </section> */}

        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 sm:text-4xl dark:text-white">
                    Hast du noch Fragen?
                </h2>
                <Accordion>
                    <AccordionPanel>
                        <AccordionTitle>Wie schnell bekomme ich mein Audit?</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Du erhältst dein komplettes Audit innerhalb von 72 Stunden nach Buchung – garantiert. Sollte es länger dauern, bekommst du dein Geld zurück und behältst trotzdem alle Materialien.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>Was genau bekomme ich geliefert?</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Du erhältst:

                                ein Video-Recording mit klarer Analyse deiner größten Umsatz-Leaks,

                                einen PDF Action Plan mit den Top-3 Hebeln, die sofort mehr Gewinn bringen,

                                einen 30-Min Call, in dem wir alle Fragen durchgehen und nächste Schritte priorisieren.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>Für wen ist der Revenue Leak Finder geeignet?</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Für jeden E-Commerce-Shop mit mind. 50 Bestellungen pro Monat, der mehr aus seinem Traffic machen will, ohne das Ad-Budget zu erhöhen.
                                Wenn du das Gefühl hast, dass du Umsatz liegen lässt, ist das Audit genau für dich.
                            </p>

                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>Was passiert, wenn ich unzufrieden bin?</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Ganz einfach: 100% Geld-zurück-Garantie.
                                Wenn du unsere Top-3 Hebel umsetzt und keinen messbaren Lift siehst, erstatten wir dir dein Geld – du behältst trotzdem Video, PDF und Checklisten.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>Muss ich danach noch etwas buchen?</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Nein. Das Audit ist ein in sich abgeschlossenes Produkt.
                                Du kannst die Empfehlungen komplett selbst umsetzen.
                                Wenn du danach Unterstützung willst, bieten wir dir ein weiterführendes Programm an – aber das ist optional.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>Wie läuft der Prozess ab?</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Du buchst deinen Slot und beantwortest 5–7 Onboarding-Fragen.

                                Wir analysieren Shop, Ads & E-Mail Flows.

                                Du erhältst Video + PDF Action Plan in 72h.

                                Wir klären offene Fragen im 30-Min Call und priorisieren die nächsten Schritte.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>Warum kostet das Audit nur 299 €, wenn der Wert 2.700 € ist?</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Weil es unser Einstiegs-Angebot ist. Wir wollen dir schnell beweisen, dass wir Ergebnisse liefern.
                                Viele Kunden entscheiden sich danach für eine weiterführende Zusammenarbeit – deshalb kalkulieren wir das Audit als No-Brainer.
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

        <section className="relative">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
                <div className="rounded-2xl px-8 py-12 text-center text-gray-900 shadow-lg">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Bist du bereit, mehr Umsatz aus deinem Shop zu holen?
                    </h2>
                    <div className="mt-6">
                            <FBInitiateCheckoutButton
                                href={CHECKOUT_URL}
                                ariaLabel="Jetzt Audit starten"
                                gradientDuoTone="purpleToBlue"
                                size="lg"
                                className="inline-flex"
                            >
                                Jetzt Audit buchen – 72h geliefert oder gratis
                            </FBInitiateCheckoutButton>

                        <p className="mt-3 text-sm text-gray-900">
                            299€ Fixpreis • 72h garantiert • ROI Garantie oder Geld zurück
                        </p>
                    </div>

                </div>
            </div>
        </section>


    </>
    )
}

function CheckIcon(props) {
    return (
        <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
            <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.457 9.543l2.543 2.543 6.543-6.543a1 1 0 011.414 0z"
                clipRule="evenodd"
            />
        </svg>
    );
}
function ShopIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M3 7h18l-1 13a2 2 0 01-2 2H6a2 2 0 01-2-2L3 7zm2-4h14l2 4H3l2-4z" />
        </svg>
    );
}
function AdIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M4 5h16a1 1 0 011 1v8a1 1 0 01-1 1h-7l-4 4v-4H4a1 1 0 01-1-1V6a1 1 0 011-1z" />
        </svg>
    );
}
function MailIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.511l-10 6.25-10-6.25V6zm0 2.489V18a2 2 0 002 2h16a2 2 0 002-2V8.489l-9.445 5.896a2 2 0 01-2.11 0L2 8.489z" />
        </svg>
    );
}
function PlanIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M7 4h10a2 2 0 012 2v2H5V6a2 2 0 012-2zm-2 6h14v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8zm4 2v2h6v-2H9z" />
        </svg>
    );
}

export default function AnimatedBackground() {
  return (
    <div
      className="
        pointer-events-none absolute inset-0 overflow-hidden
        [mask-image:radial-gradient(120%_80%_at_50%_20%,_#000_42%,_transparent_100%)]
        md:[mask-image:none]
      "
      aria-hidden="true"
    >
      {/* Base & Grid */}
      <div className="absolute inset-0 bg-white dark:bg-gray-950" />
      <div className="absolute inset-0 opacity-20 md:opacity-25 [background-size:28px_28px] md:[background-size:24px_24px] bg-grid-s dark:bg-grid-s-dark" />

      {/* ===== Mobile blobs (dezent) ===== */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[22rem] w-[22rem] rounded-full blur-2xl opacity-35 bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-400 animate-aurora-x mix-blend-multiply dark:mix-blend-screen md:hidden" />
      <div className="absolute bottom-[-6rem] right-[-4rem] h-[16rem] w-[16rem] rounded-full blur-xl opacity-30 bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 animate-aurora-y mix-blend-multiply dark:mix-blend-screen md:hidden" />
      <div className="absolute left-[-3rem] bottom-10 h-[10rem] w-[10rem] rounded-full blur-lg opacity-25 bg-gradient-to-br from-cyan-400 to-indigo-500 mix-blend-multiply dark:mix-blend-screen md:hidden" />

      {/* ===== Desktop/Laptop layout ===== */}
      {/* großer „Beam“ mittig – nur ab lg */}
      <div className="hidden lg:block absolute left-1/2 top-1/2 h-[85vmax] w-[85vmax] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] opacity-30 animate-spin-slow bg-[conic-gradient(at_50%_50%,_rgba(56,189,248,.30),_rgba(99,102,241,.30),_rgba(236,72,153,.30),_rgba(56,189,248,.30))]" />

      {/* kalte Fläche rechts-oben – näher zur Headline ziehen */}
      <div className="hidden md:block absolute -top-32 right-[-10rem] lg:right-[-2rem] h-[32rem] w-[32rem] lg:h-[44rem] lg:w-[44rem] rounded-full blur-[70px] opacity-45 bg-gradient-to-br from-indigo-400 via-sky-300 to-cyan-300 animate-aurora-x mix-blend-multiply dark:mix-blend-screen" />

      {/* warme Fläche rechts-unten – größer & weiter ins Zentrum */}
      <div className="hidden md:block absolute bottom-[-10rem] right-[-8rem] lg:right-0 h-[30rem] w-[30rem] lg:h-[42rem] lg:w-[42rem] rounded-full blur-[80px] opacity-40 bg-gradient-to-tr from-rose-400 via-fuchsia-400 to-amber-300 animate-aurora-y mix-blend-multiply dark:mix-blend-screen" />

      {/* leichter Gegenakzent links – füllt die „leere“ Seite */}
      <div className="hidden md:block absolute -left-24 top-[25%] h-[22rem] w-[22rem] lg:h-[30rem] lg:w-[30rem] rounded-full blur-[70px] opacity-30 bg-gradient-to-br from-cyan-300 via-indigo-300 to-transparent mix-blend-multiply dark:mix-blend-screen" />

      {/* optionales Noise */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(0,0,0,.08)_1px,transparent_1px)] [background-size:6px_6px] dark:opacity-[0.05]" />

      {/* A11y: Motion reduzieren */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-aurora-x, .animate-aurora-y, .animate-spin-slow { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
export default function Particles({ className = "" }) {
  const dots = Array.from({ length: 40 });
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      {dots.map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 md:h-1.5 md:w-1.5 rounded-full
                     bg-gray-800/30 dark:bg-white/30 animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
}
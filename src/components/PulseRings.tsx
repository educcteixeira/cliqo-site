import { motion } from "framer-motion";

export function PulseRings({ className = "", color = "var(--primary)" }: { className?: string; color?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full border"
          style={{ borderColor: color, translateX: "-50%", translateY: "-50%" }}
          initial={{ width: 40, height: 40, opacity: 0.6 }}
          animate={{ width: [40, 320], height: [40, 320], opacity: [0.55, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, delay: i * 1.2, ease: "easeOut" }}
        />
      ))}
      <span
        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export function PulseRingsStatic({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden>
      <circle cx="100" cy="100" r="20" stroke="currentColor" strokeOpacity="0.9" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="50" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="85" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="4" fill="currentColor" />
    </svg>
  );
}
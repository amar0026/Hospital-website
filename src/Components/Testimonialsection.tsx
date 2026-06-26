import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDarkMode } from "../Context/Darkmodecontext";

const TESTIMONIALS = [
  {
    id: 1,
    text: "I have lost my past 3 babies (died) the 4th baby has got new life due to Dr. Prabir bhaumik on shusrusha shi shu seva Niketan. Thanks God, thanks to Dr prabir bhaumik & team.",
    name: "Diego Morata",
  },
  {
    id: 2,
    text: "Nice hospital for child care at kolaghat. All type of pediatrics treatment done by the eminent doctors. Dr prabir bhoumick is owner of this hospital. All type of medical service done under one umbrella.",
    name: "Milon Mal",
  },
  {
    id: 3,
    text: "Providing better services than larger hospitals. Very affordable and quality treatment. Highly recommended for mothers and children.",
    name: "Robi Ghosh",
  },
  {
    id: 4,
    text: "Excellent care and compassionate staff. Dr. Bhowmik is truly a blessing for our community. My child recovered so quickly under his supervision.",
    name: "Anita Das",
  },
  {
    id: 5,
    text: "Best pediatric care in the region. The facility is clean, modern, and the doctors are extremely knowledgeable. Very satisfied with the treatment.",
    name: "Suresh Kumar",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCount(1);
      else if (window.innerWidth < 1024) setCount(2);
      else setCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

export default function TestimonialsSection() {
  const { ref, inView } = useInView();
  const visibleCount = useVisibleCount();
  const darkMode = useDarkMode();
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState<"left" | "right" | null>(null);
  const [animating, setAnimating] = useState(false);

  const maxIndex = TESTIMONIALS.length - visibleCount;

  const go = (dir: "left" | "right") => {
    if (animating) return;
    setAnimDir(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) =>
        dir === "right"
          ? Math.min(prev + 1, maxIndex)
          : Math.max(prev - 1, 0)
      );
      setAnimating(false);
      setAnimDir(null);
    }, 280);
  };

  const visibleCards = TESTIMONIALS.slice(current, current + visibleCount);

  const accentColor = darkMode ? "#FF007A" : "#f97316";
  const btnGradient = darkMode
    ? "linear-gradient(to bottom right, #FF007A, #FA6BB8)"
    : "linear-gradient(to bottom right, #fb923c, #ef4444)";
  const bannerGradient = darkMode
    ? "linear-gradient(to right, #FF007A, #FA6BB8)"
    : "linear-gradient(to right, #f97316, #dc2626)";

  return (
    <section ref={ref} className="w-full bg-white pt-14 sm:pt-16 md:pt-20 overflow-hidden">

      {/* ── Heading ── */}
      <div
        className="max-w-3xl mx-auto text-center px-5"
        style={{
          transition: "opacity 0.7s ease, transform 0.7s ease",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <p
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide"
          style={{ color: accentColor }}
        >
          Testimonials
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-medium  text-slate-900">
          What Our Patients Say
        </h2>
      </div>

      {/* ── Cards ── */}
      <div
        className="max-w-6xl mx-auto mt-10 px-5 sm:px-8"
        style={{
          transition: "opacity 0.7s ease 0.2s",
          opacity: inView ? 1 : 0,
        }}
      >
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
            opacity: animating ? 0 : 1,
            transform: animating
              ? `translateX(${animDir === "right" ? "-30px" : "30px"})`
              : "translateX(0)",
            transition: "opacity 0.28s ease, transform 0.28s ease",
          }}
        >
          {visibleCards.map((t) => (
            <div
              key={t.id}
              className="relative bg-white border border-gray-100 rounded-2xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              <span
                className="text-5xl font-serif leading-none select-none"
                style={{ color: accentColor }}
              >
                "
              </span>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-1 -mt-3">
                {t.text}
              </p>
              <p className="text-slate-800 font-semibold text-sm mt-2">{t.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Nav buttons ── */}
      <div
        className="flex justify-center gap-4 mt-8 px-5"
        style={{
          transition: "opacity 0.7s ease 0.4s",
          opacity: inView ? 1 : 0,
        }}
      >
        <button
          onClick={() => go("left")}
          disabled={current === 0}
          aria-label="Previous"
          className="w-11 h-11 rounded-full text-white flex items-center justify-center shadow-md hover:scale-110 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
          style={{ background: btnGradient }}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => go("right")}
          disabled={current >= maxIndex}
          aria-label="Next"
          className="w-11 h-11 rounded-full text-white flex items-center justify-center shadow-md hover:scale-110 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
          style={{ background: btnGradient }}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* ── Dot indicators ── */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => { if (!animating) setCurrent(i); }}
            className="rounded-full transition-all duration-300"
            style={{
              width: current === i ? "24px" : "8px",
              height: "8px",
              background: current === i ? accentColor : "#d1d5db",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Add Feedback banner ── */}
      <div
        className="mt-12 w-full py-5 px-6 flex flex-col sm:flex-row items-center justify-center gap-4"
        style={{
          background: bannerGradient,
          transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div className="hidden sm:flex gap-1 mr-4 opacity-40">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-1 h-8 bg-white rounded-sm rotate-12" />
          ))}
        </div>
        <h3 className="text-white font-bold text-lg sm:text-xl text-center">
          Add Your Feedbacks
        </h3>
        <a
        
          href="#feedback"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-colors duration-200 shadow-md whitespace-nowrap"
        >
          Add Feedback
        </a>

        <div className="hidden sm:flex gap-1 ml-4 opacity-40">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-1 h-8 bg-white rounded-sm rotate-12" />
          ))}
        </div>
      </div>
    </section>
  );
}
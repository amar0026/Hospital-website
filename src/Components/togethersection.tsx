import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";
import { useDarkMode } from "../Context/Darkmodecontext";

const COLLAGE_FRAME =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1782374852/Frame_33633_tr5klk.png";

const BULLET_POINTS = [
  "Get the latest information on the novel virus disease of nowadays, learn how to protect yourself and take advantage of our convenient services.",
  "We're working hard to reduce the lead times and we will let you know if your order is delayed. Please wait to be updated by email rather than calling our customer services team as we prioritise our most vulnerable patients at this time.",
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function TogetherSection() {
  const { ref, inView } = useInView();
  const darkMode = useDarkMode();

  const bgGradient = darkMode
    ? "linear-gradient(to bottom right, #FF007A, #FA6BB8, #FF007A)"
    : "linear-gradient(to bottom right, #dc2626, #f97316, #f97316)";

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden"
      style={{ background: bgGradient }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-0 py-10 md:py-0">

        {/* ── LEFT: Single collage frame ── */}
        <div
          className="flex-shrink-0 w-full md:w-[50%] flex items-center justify-center px-4 md:px-8 py-6 md:py-10"
          style={{
            transition: "opacity 0.8s ease, transform 0.8s ease",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-40px)",
          }}
        >
          <img
            src={COLLAGE_FRAME}
            alt="Shusrusha team and facility collage"
            className="w-full max-w-[480px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* ── RIGHT: Text content ── */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-10 pb-10 md:py-16">

          {/* Eyebrow */}
          <div
            style={{
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
            }}
            className="flex items-center gap-2"
          >
            <img
              src="https://res.cloudinary.com/dquki4xol/image/upload/v1782217168/94c29ad4ea33d94b0f44ebe7d3ede96579fef262_jfkggs.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <p className="text-black font-bold text-4xl tracking-wide">
              We're in this together
            </p>
          </div>

          {/* Headline */}
          <h2
            style={{
              transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              color: darkMode ? "#f0abfc" : "#473BF0",
            }}
            className="mt-3 text-2xl sm:text-3xl md:text-4xl font-regular leading-tight"
          >
            Helping You And Your Family Through the Pandemic
          </h2>

          {/* Bullets */}
          <ul className="mt-6 space-y-5">
            {BULLET_POINTS.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3"
                style={{
                  transition: `opacity 0.7s ease ${0.5 + i * 0.15}s, transform 0.7s ease ${0.5 + i * 0.15}s`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <Heart
                  size={14}
                  className="text-red-200 fill-red-200 mt-1 shrink-0"
                />
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
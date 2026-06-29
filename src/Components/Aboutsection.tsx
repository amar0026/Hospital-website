import { useEffect, useRef, useState,} from "react";
import type { ReactNode } from "react";
import { useDarkMode } from "../Context/Darkmodecontext";

interface Testimonial {
  id: string;
  badge: string;
  imageUrl: string;
}

const whatWeDoPoints: string[] = [
  "Shusrusha is a premier healthcare institute based in Kolkata, West Bengal.",
  "It is now an ISO 9001:2018 certified healthcare organization.",
  "Shusrusha is a healthcare brand that everyone trusts.",
  "It is a multi-specialty doctor and child care unit.",
  "Shusrusha has been serving mankind for the last 20+ years.",
];

const collageImages: string[] = [
  "https://res.cloudinary.com/dquki4xol/image/upload/v1782566989/5d0bd8e3e27d38fad1e26247fc26432466db6927_kgme7e.png",
  "https://res.cloudinary.com/dquki4xol/image/upload/v1782553912/e6d0c1a1d3352d311e18791db38a4d1a33010842_men1ho.png",
];

const teamPhoto =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1782372599/283d7ba2f5693f731a0adea3b447458db0539729_r6npsc.png";

const heroBanner =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1782221221/c66f33b8a6a59e9dac600c5f8c12ab0bfd642c7b_zmugzm.png";

const testimonials: Testimonial[] = [
  {
    id: "founder",
    badge: "Some Valuable Words from the Founder",
    imageUrl:
      "https://res.cloudinary.com/dquki4xol/image/upload/v1782566996/5f6e8189731b1143cc05062c8563feefd11bc0be_duu1aa.png",
  },
  {
    id: "co-founder",
    badge: "Some Valuable Words from the Co-Founder",
    imageUrl:
      "https://res.cloudinary.com/dquki4xol/image/upload/v1782566991/4716ed347f7132c471cf9c4a8258b656b7a4d192_bxqc7x.png",
  },
];

/* ─────────────────────── helpers ─────────────────────── */

function getGradient(darkMode: boolean) {
  return darkMode
    ? "linear-gradient(to right, #FF007A, #FA6BB8)"
    : "linear-gradient(to right, #dc2626, #f97316)";
}

function getTestimonialGradient(darkMode: boolean) {
  return darkMode
    ? "linear-gradient(to right, #0f766e, #14b8a6)"
    : "linear-gradient(to right, #15803d, #22c55e)";
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2.2}
      className="h-4 w-4 shrink-0"
    >
      <path
        d="M5 12l4.5 4.5L19 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, prefersReduced]);

  return [ref, visible] as const;
}
type AnimVariant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "fade" | "scaleUp";

interface AnimateInProps {
  children: ReactNode;
  variant?: AnimVariant;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  threshold?: number;
}

const variantTransforms: Record<AnimVariant, string> = {
  fadeUp:    "translateY(36px)",
  fadeDown:  "translateY(-36px)",
  fadeLeft:  "translateX(-40px)",
  fadeRight: "translateX(40px)",
  fade:      "none",
  scaleUp:   "scale(0.95)",
};

function AnimateIn({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 600,
  className = "",
  style = {},
  threshold,
}: AnimateInProps) {
  const [ref, visible] = useReveal(threshold);

  const baseStyle: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : variantTransforms[variant],
    transition: `opacity ${duration}ms cubic-bezier(.22,.68,0,1.2) ${delay}ms, transform ${duration}ms cubic-bezier(.22,.68,0,1.2) ${delay}ms`,
    willChange: "opacity, transform",
    ...style,
  };

  return (
    <div ref={ref} className={className} style={baseStyle}>
      {children}
    </div>
  );
}


function TopBar() {
  const darkMode = useDarkMode();
  const gradient = getGradient(darkMode);

  return (
    <AnimateIn variant="fadeDown" duration={550}>
      <div
        className="relative mt-5 overflow-hidden py-5"
        style={{ background: gradient }}
      >
        <div className="absolute left-[-3%] top-0 h-full w-[7%] -skew-x-[20deg] bg-white" />
        <div className="absolute left-[7%]  top-0 h-full w-[3%] -skew-x-[20deg] bg-white" />
        <div className="absolute right-[7%] top-0 h-full w-[3%] -skew-x-[20deg] bg-white" />
        <div className="absolute right-[-3%] top-0 h-full w-[7%] -skew-x-[20deg] bg-white" />
        <h2 className="relative z-10 text-center text-xl sm:text-2xl font-bold text-white tracking-wide">
          About Us
        </h2>
      </div>
    </AnimateIn>
  );
}

function Hero() {
  return (
    <AnimateIn variant="scaleUp" duration={800} threshold={0.1}>
      <div
        className="overflow-hidden mt-2 rounded-2xl"
        style={{ background: "#ffffff" }}
      >
        <img
          src={heroBanner}
          alt="Shusrusha hospital building and doctors"
          loading="lazy"
          className="block w-full h-auto"
          style={{ transition: "transform 8s ease-out", transformOrigin: "center center" }}
        />
      </div>
    </AnimateIn>
  );
}

/* ─────────────────────── WhatWeDo ─────────────────────── */

function WhatWeDo() {
  const darkMode = useDarkMode();
  const eyebrow    = darkMode ? "#FA6BB8" : "#ea580c";
  const heading    = darkMode ? "#f1f5f9" : "#0f172a";
  const muted      = darkMode ? "#94a3b8" : "#64748b";
  const checkColor = darkMode ? "#4ade80" : "#16a34a";
  const frameBg    = "#ffffff";

  return (
    <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
      <AnimateIn variant="fadeUp" delay={0} duration={500}>
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: eyebrow }}>
          About Us
        </p>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={80} duration={520}>
        <h2 className="mt-1 text-2xl font-bold sm:text-3xl" style={{ color: heading }}>
          What We Do
        </h2>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={150} duration={540}>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: muted }}>
          Find the right care you need, when you need it. Start by choosing your
          reason for visit, and we&apos;ll help you find the right care.
        </p>
      </AnimateIn>

      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="grid grid-cols-2 gap-3">
            {collageImages.map((src, i) => (
              <AnimateIn key={i} variant="fadeLeft" delay={i * 120} duration={600}>
                <div
                  className="flex h-32 items-center justify-center overflow-hidden rounded-lg sm:h-40"
                  style={{ backgroundColor: frameBg }}
                >
                  <img
                    src={src}
                    alt="Shusrusha highlight"
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn variant="fadeLeft" delay={280} duration={650}>
            <div
              className="mt-3 flex h-44 items-center justify-center overflow-hidden rounded-lg sm:h-52"
              style={{ backgroundColor: frameBg }}
            >
              <img
                src={teamPhoto}
                alt="Shusrusha team"
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          </AnimateIn>
        </div>

        <ul className="space-y-4">
          {whatWeDoPoints.map((point, i) => (
            <AnimateIn key={i} variant="fadeRight" delay={i * 100} duration={560}>
              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: darkMode ? "#14532d" : "#dcfce7" }}
                >
                  <CheckIcon color={checkColor} />
                </span>
                <span className="text-sm leading-relaxed" style={{ color: heading }}>
                  {point}
                </span>
              </li>
            </AnimateIn>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─────────────────────── Testimonials ─────────────────────── */

function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: Testimonial;
  delay: number;
}) {
  const darkMode = useDarkMode();
  const cardBg   = "#ffffff";
  const border   = darkMode ? "#334155" : "#e2e8f0";
  const frameBg  = "#ffffff";
  const gradient = getTestimonialGradient(darkMode);

  return (
    <AnimateIn variant="fadeUp" delay={delay} duration={620}>
      <div
        className="overflow-hidden rounded-xl shadow-sm h-full"
        style={{ backgroundColor: cardBg, border: `1px solid ${border}` }}
      >
        <div className="px-5 py-3" style={{ background: gradient }}>
          <h3 className="text-center text-sm font-bold text-white sm:text-base">
            {testimonial.badge}
          </h3>
        </div>

        <div className="p-4" style={{ backgroundColor: frameBg }}>
          <img
            src={testimonial.imageUrl}
            alt={testimonial.badge}
            className="block w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </AnimateIn>
  );
}

function Testimonials() {
  return (
    <div className="mx-auto max-w-5xl px-5 pb-12 sm:px-8">
      <div className="grid gap-6 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.id} testimonial={t} delay={i * 150} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────── Section root ─────────────────────── */

export default function AboutSection() {
  const darkMode = useDarkMode();
  const sectionBg = darkMode ? "#ffffff" : "#f8fafc";

  return (
    <section
      className="w-full transition-colors duration-300"
      style={{ backgroundColor: sectionBg }}
    >
      <TopBar />
      <Hero />
      <WhatWeDo />
      <Testimonials />
    </section>
  );
}
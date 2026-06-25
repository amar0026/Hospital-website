import { useEffect, useRef, useState } from "react";
import { Heart, Clock, Smartphone } from "lucide-react";

const BG_IMAGE =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1782383553/ChatGPT_Image_Jun_25_2026_04_02_03_PM_sh0lpm.png";

const WHATSAPP_LINK = "https://wa.me/91XXXXXXXXXX"; // 🔁 Replace with your WhatsApp number

const CATCHLINES = [
  {
    icon: Heart,
    title: "Health is the Greatest Wealth",
    desc: "Health is the biggest wealth for a human being in his/her entire lifetime.",
  },
  {
    icon: Clock,
    title: "Good Health is Essential for Survival",
    desc: "One can survive without excess money but can't survive without good health.",
  },
  {
    icon: Smartphone,
    title: "Health Matters",
    desc: "Never neglect your health; it is your most valuable asset.",
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

export default function CatchLinesSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="w-full overflow-hidden">

      {/* ── Top: Background image area ── */}
      <div
        className="relative w-full py-14 sm:py-16 md:py-20 px-5 mt-5 sm:px-8"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark teal overlay */}
        <div className="absolute inset-0 bg-teal-900/70" />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* Heading */}
          <h2
            className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-10"
            style={{
              transition: "opacity 0.7s ease, transform 0.7s ease",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Catch Lines
          </h2>

          {/* Three columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {CATCHLINES.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col gap-3"
                  style={{
                    transition: `opacity 0.7s ease ${0.2 + i * 0.15}s, transform 0.7s ease ${0.2 + i * 0.15}s`,
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(28px)",
                  }}
                >
                  <Icon size={28} className="text-white/90" strokeWidth={1.5} />
                  <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Bottom: Info banner ── */}
      <div
        className="w-full bg-gradient-to-r from-orange-500 to-red-600 mt-6 py-4 px-6 flex flex-col sm:flex-row items-center justify-center gap-4"
        style={{
          transition: "opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
        }}
      >
        {/* Slash decorations left */}
        <div className="hidden sm:flex gap-1 mr-2 opacity-40">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-1 h-7 bg-white rounded-sm rotate-12" />
          ))}
        </div>

        {/* NEW badge + text */}
        <div className="flex items-center gap-3">
          <span className="bg-white text-orange-600 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
            NEW
          </span>
          <p className="text-white font-bold text-base sm:text-lg">
            Get the latest information
          </p>
        </div>

        {/* Enquire Now button */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors duration-200 shadow-md whitespace-nowrap"
        >
          {/* WhatsApp icon */}
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Enquire Now
        </a>

        {/* Slash decorations right */}
        <div className="hidden sm:flex gap-1 ml-2 opacity-40">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-1 h-7 bg-white rounded-sm rotate-12" />
          ))}
        </div>
      </div>
    </section>
  );
}
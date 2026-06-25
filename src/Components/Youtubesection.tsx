import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

// 🔁 Replace with your actual YouTube video URLs
const VIDEOS = [
  {
    id: 1,
    thumbnail:
      "https://res.cloudinary.com/dquki4xol/image/upload/v1782381207/ChatGPT_Image_Jun_25_2026_03_23_07_PM_btnyyj.png",
    url: "https://www.youtube.com/@shusrushaofficial",
  },
  {
    id: 2,
    thumbnail:
      "https://res.cloudinary.com/dquki4xol/image/upload/v1782381207/ChatGPT_Image_Jun_25_2026_03_23_07_PM_btnyyj.png",
    url: "https://www.youtube.com/@shusrushaofficial",
  },
];

const CHANNEL_URL = "https://www.youtube.com/@shusrushaofficial";

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

export default function YoutubeSection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className="w-full bg-white py-14 sm:py-16 md:py-20 px-5 sm:px-8"
    >
      {/* ── Heading ── */}
      <div
        className="max-w-2xl mx-auto text-center"
        style={{
          transition: "opacity 0.7s ease, transform 0.7s ease",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-orange-500">
          Visit Our channel and learn!
        </h2>
        <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
          Visit our YouTube channel for expert health tips, informative videos,
          and the latest updates.
        </p>
      </div>

      {/* ── Video thumbnails ── */}
      <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {VIDEOS.map((video, i) => (
          <a
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            style={{
              transition: `opacity 0.7s ease ${0.2 + i * 0.15}s, transform 0.7s ease ${0.2 + i * 0.15}s, box-shadow 0.3s ease`,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(32px)",
            }}
          >
            {/* Thumbnail */}
            <img
              src={video.thumbnail}
              alt={`Video ${video.id}`}
              className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg">
                <Play
                  size={22}
                  className="text-red-600 fill-red-600 ml-1"
                />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* ── Visit Channel button ── */}
      <div
        className="mt-10 flex justify-center"
        style={{
          transition: "opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Visit Channel
        </a>
      </div>
    </section>
  );
}
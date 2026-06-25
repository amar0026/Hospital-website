import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const SLIDES = [
  {
    image:
      "https://res.cloudinary.com/dquki4xol/image/upload/v1782221221/c66f33b8a6a59e9dac600c5f8c12ab0bfd642c7b_zmugzm.png", // 🔁 replace with your hosted image 1
  },
  {
    image:
      "https://res.cloudinary.com/dquki4xol/image/upload/v1782221231/ChatGPT_Image_Jun_23_2026_06_41_47_PM_eczyrz.png", // 🔁 replace with your hosted image 2
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // auto-play every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % SLIDES.length);

  return (
    <section className="relative w-full h-[460px] sm:h-[520px] md:h-[600px] lg:h-[650px] overflow-hidden">
      {/* Background image slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Banner background ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-5 sm:px-10 md:px-16">
        <div key={current} className="max-w-xl animate-fadeInUp">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Medical Care Now <br className="hidden sm:block" />
            Simplified For{" "}
            <span className="text-orange-500">Everyone</span>
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-200">
            At Medical Recover, we are dedicated to helping you uncover your
            most beautiful smile. Our expert team provides personalized care
            and advanced treatments to ensure your smile is healthy, radiant,
            and confident. Trust us to guide you on your journey to a
            brighter, more beautiful smile.
          </p>

          <div className="mt-6 sm:mt-7 flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-red-600  text-white font-semibold px-6 py-3 rounded-md transition-all">
              Get Doctors
            </button>
            <button className="border-2 border-blue-400 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-500/20 transition-all">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              index === current ? "w-6 bg-orange-500" : "w-2.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
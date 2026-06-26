import { useDarkMode } from "../Context/Darkmodecontext";

const STETHOSCOPE_IMAGE =
  "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80";

export default function PrenatalCareSection() {
  const darkMode = useDarkMode();

  const btnGradient = darkMode
    ? "linear-gradient(to right, #FF007A, #FA6BB8)"
    : "linear-gradient(to right, #f97316, #dc2626)";

  const blobGradient = darkMode
    ? "linear-gradient(to bottom right, #FF007A, #FA6BB8)"
    : "linear-gradient(to bottom right, #f9a8d4, #fb923c)";

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* ---------- Left: Image + blob ---------- */}
        <div className="relative z-0 flex justify-center md:justify-start animate-fadeIn">
          <div
            className="absolute -left-3 -top-3 w-[88%] h-[88%] rounded-2xl -z-10 animate-pulseSlow"
            style={{ background: blobGradient }}
          />
          <img
            src={STETHOSCOPE_IMAGE}
            alt="Stethoscope"
            className="relative z-10 w-[240px] sm:w-[300px] md:w-[360px] rounded-2xl object-cover shadow-lg animate-float"
          />
        </div>

        {/* ---------- Right: Text content ---------- */}
        <div className="animate-fadeInUp">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight"
            style={{ color: darkMode ? "#1e293b" : "#0f172a" }}
          >
            Comprehensive Prenatal, Neonatal, And Pediatric Care Ensures
            Healthy Mothers And{" "}
            <span
              className="underline decoration-[3px] underline-offset-4"
              style={{
                color: darkMode ? "#FA6BB8" : "#dc2626",
                textDecorationColor: darkMode ? "#FA6BB8" : "#dc2626",
              }}
            >
              Thriving Children
            </span>
          </h2>

          <p
            className="mt-5 italic text-sm sm:text-base max-w-lg"
            style={{ color: darkMode ? "#475569" : "#6b7280" }}
          >
            "We use the best quality materials to provide top-notch care for
            mothers and children, ensuring their health and wellness. Book
            your appointment today and leave your worries behind."
          </p>

          <button
            style={{ background: btnGradient }}
            className="mt-7 text-white font-semibold px-7 py-3 rounded-md transition-all"
          >
            See Available Doctor
          </button>
        </div>

      </div>
    </section>
  );
}
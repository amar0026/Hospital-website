import { Phone } from "lucide-react";
import { useDarkMode } from "../Context/Darkmodecontext";

const DOCTOR_IMAGE_LIGHT =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1782288647/Frame_1000004056_ils04u.png";

const DOCTOR_IMAGE_DARK =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1782459090/Frame_1000004056_1_kikxo3.png";

export default function CareUnitSection() {
  const darkMode = useDarkMode();

  const btnGradient = darkMode
    ? "linear-gradient(to right, #FF007A, #FA6BB8)"
    : "linear-gradient(to right, #f97316, #dc2626)";

  const accentColor = darkMode ? "#FA6BB8" : "#f97316";
  const borderColor = darkMode ? "#FA6BB8" : "#fb923c";
  const doctorImage = darkMode ? DOCTOR_IMAGE_DARK : DOCTOR_IMAGE_LIGHT;

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-center">

        {/* ---------- Left: Text content ---------- */}
        <div className="animate-fadeInUp">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Get Your Best Multispecialty{" "}
            <span className="text-blue-600 underline decoration-blue-400 decoration-[3px] underline-offset-4">
              Mother And Child
            </span>{" "}
            Care Unit
          </h2>

          <p className="mt-5 text-gray-500 text-sm sm:text-base max-w-md">
            We use only the best quality materials on the market in order to
            provide the best products to our patients, So don't worry about
            anything and book yourself.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-6">
            <button
              style={{ background: btnGradient }}
              className="text-white font-semibold px-7 py-3 rounded-md transition-all"
            >
              Get Our Services
            </button>

            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center w-11 h-11 rounded-full shrink-0 border-2"
                style={{ borderColor: borderColor, color: accentColor }}
              >
                <Phone size={18} />
              </div>
              <div>
                <p
                  className="font-semibold text-sm leading-tight"
                  style={{ color: accentColor }}
                >
                  24H Emergency
                </p>
                <p className="text-slate-700 text-sm leading-tight">
                  6294220411
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Right: single composed image ---------- */}
        <div className="relative z-0 flex justify-center md:justify-end animate-fadeIn">
          <img
            src={doctorImage}
            alt="Female doctor with happy customers rating card"
            className="w-[clamp(220px,55vw,440px)] max-w-full aspect-[776/476] object-cover object-top animate-float"
          />
        </div>
      </div>
    </section>
  );
}
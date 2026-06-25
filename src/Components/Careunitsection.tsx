import { Phone } from "lucide-react";

// 🔁 replace with your hosted image — doctor + orange blob + "Happy Customers"
// card are already baked into this single PNG, so no separate blob/card
// markup is needed anymore (that was duplicating what's already in the image).
const DOCTOR_IMAGE =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1782288647/Frame_1000004056_ils04u.png";

export default function CareUnitSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-center">
        {/* ---------- Left: Text content ---------- */}
        <div className="animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
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
            <button className="bg-linear-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-7 py-3 rounded-md transition-all">
              Get Our Services
            </button>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-orange-400 text-orange-500 shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-orange-500 font-semibold text-sm leading-tight">
                  24H Emergency
                </p>
                <p className="text-slate-700 text-sm leading-tight">
                  6294220411
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Right: single composed image (doctor + blob + card baked in) ---------- */}
        <div className="relative z-0 flex justify-center md:justify-end animate-fadeIn">
          <img
            src={DOCTOR_IMAGE}
            alt="Female doctor with happy customers rating card"
            className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[440px] aspect-[776/476] object-cover object-top animate-float"
          />
        </div>
      </div>
    </section>
  );
}
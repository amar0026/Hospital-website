// 🔁 replace with your hosted stethoscope image URL
const STETHOSCOPE_IMAGE =
  "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80";

export default function PrenatalCareSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* ---------- Left: Image + blob ---------- */}
        <div className="relative z-0 flex justify-center md:justify-start animate-fadeIn">
          <div className="absolute -left-3 -top-3 w-[88%] h-[88%] bg-gradient-to-br from-pink-300 to-orange-400 rounded-2xl -z-10 animate-pulseSlow" />
          <img
            src={STETHOSCOPE_IMAGE}
            alt="Stethoscope"
            className="relative z-10 w-[240px] sm:w-[300px] md:w-[360px] rounded-2xl object-cover shadow-lg animate-float"
          />
        </div>

        {/* ---------- Right: Text content ---------- */}
        <div className="animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Comprehensive Prenatal, Neonatal, And Pediatric Care Ensures
            Healthy Mothers And{" "}
            <span className="text-red-600 underline decoration-red-500 decoration-[3px] underline-offset-4">
              Thriving Children
            </span>
          </h2>

          <p className="mt-5 italic text-gray-500 text-sm sm:text-base max-w-lg">
            "We use the best quality materials to provide top-notch care for
            mothers and children, ensuring their health and wellness. Book
            your appointment today and leave your worries behind."
          </p>

          <button className="mt-7 bg-linear-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-7 py-3 rounded-md transition-all">
            See Available Doctor
          </button>
        </div>
      </div>
    </section>
  );
}
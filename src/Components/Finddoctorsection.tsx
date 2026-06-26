import { CheckCircle2, Star } from "lucide-react";
import { useDarkMode } from "../Context/Darkmodecontext";

const DOCTOR_IMAGE =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1782287093/3905051fd99bb0eee983da45905acfc0a0db3e77_vdgolp.png";

const DOCTORS_PREVIEW = [
  {
    name: "Prof. Rajiv Sinha",
    specialty: "Paediatric Nephrologist (UK)",
    avatar: "https://i.pravatar.cc/40?img=15",
  },
  {
    name: "Dr Prabir Bhowmik",
    specialty: "Child Specialist",
    avatar: "https://i.pravatar.cc/40?img=33",
  },
];

export default function FindDoctorSection() {
  const darkMode = useDarkMode();

  const btnGradient = darkMode
    ? "linear-gradient(to right, #FF007A, #FA6BB8)"
    : "linear-gradient(to right, #f97316, #dc2626)";

  const imgGradient = darkMode
    ? "linear-gradient(to bottom right, #FF007A, #FA6BB8)"
    : "linear-gradient(to bottom right, #fb923c, #dc2626)";

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 items-center">

        {/* ---------- Left: Text content ---------- */}
        <div className="animate-fadeInUp">
          <p
            className="font-semibold text-sm"
            style={{ color: darkMode ? "#FA6BB8" : "#dc2626" }}
          >
            Find Doctor
          </p>

          <h2
            className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight"
            style={{ color: darkMode ? "#1e293b" : "#0f172a" }}
          >
            Find the right doctor according to your complaint
          </h2>

          <p
            className="mt-4 text-sm sm:text-base max-w-lg"
            style={{ color: darkMode ? "#475569" : "#6b7280" }}
          >
            Connect with top specialists at Shusrusha Multispeciality Mother
            and Child Care Unit. Our expert doctors provide personalized care
            for both mothers and children, ensuring comprehensive health
            solutions. Schedule an appointment today and experience
            compassionate, professional healthcare tailored to your family's
            unique needs. Your health is our priority.
          </p>

          <ul className="mt-5 space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-blue-600 mt-0.5 shrink-0" />
              <span
                className="text-sm"
                style={{ color: darkMode ? "#334155" : "#334155" }}
              >
                Designed to help you find the right doctor for your unique
                medical and personal needs.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-blue-600 mt-0.5 shrink-0" />
              <span
                className="text-sm"
                style={{ color: darkMode ? "#334155" : "#334155" }}
              >
                Available 20+ doctors specialist
              </span>
            </li>
          </ul>

          <button
            style={{ background: btnGradient }}
            className="mt-7 text-white font-semibold px-7 py-3 rounded-md transition-all"
          >
            See Doctors
          </button>
        </div>

        {/* ---------- Right: Doctor image + floating cards ---------- */}
        <div className="relative z-0 flex justify-center md:justify-end animate-fadeIn">

          {/* image frame gradient switches */}
          <div
            className="relative w-[240px] sm:w-[300px] md:w-[340px] aspect-[4/5] rounded-3xl overflow-hidden"
            style={{ background: imgGradient }}
          >
            <img
              src={DOCTOR_IMAGE}
              alt="Doctor"
              className="w-full h-full object-cover animate-float"
            />
          </div>

          {/* Available Doctors card — bg white dono modes mein */}
          <div className="absolute top-8 ml-12 sm:-left-4 md:-left-8 bg-white rounded-xl shadow-xl p-4 w-52 sm:w-56 z-20 animate-fadeInUp">
            <p className="text-sm font-semibold text-slate-800">
              Available Doctors
            </p>
            <p className="text-xs text-gray-400">Select Doctors</p>

            <div className="mt-3 space-y-3">
              {DOCTORS_PREVIEW.map((doc) => (
                <div key={doc.name} className="flex items-center gap-2">
                  <img
                    src={doc.avatar}
                    alt={doc.name}
                    className="w-8 h-8 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <p className="text-xs font-semibold text-slate-800 leading-tight">
                      {doc.name}
                    </p>
                    <p className="text-[11px] text-gray-400 leading-tight">
                      {doc.specialty}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-3 w-full bg-indigo-100 text-indigo-700 text-xs font-semibold py-2 rounded-md hover:bg-indigo-200 transition-colors">
              Find Doctor
            </button>
          </div>

          {/* Best Certified badge — bg white dono modes mein */}
          <div className="absolute bottom-4 sm:right-2 bg-white rounded-4xl shadow-lg px-4 py-2 flex items-center gap-2 z-20 animate-fadeInUp max-w-60">
            <Star size={14} className="text-blue-500 fill-blue-500 shrink-0" />
            <span className="text-xs font-semibold text-slate-700">
              Best Certified Team of Specialists
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
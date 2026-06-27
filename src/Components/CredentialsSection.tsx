import { useState } from "react";
import { useDarkMode } from "../Context/Darkmodecontext";
import { X } from "lucide-react";

interface Credential {
  id: string;
  url: string;   // your outside/external hosted image link
  label: string; // text shown on the pill below the certificate
}

const CREDENTIALS: Credential[] = [
  {
    id: "c1",
    url: "https://res.cloudinary.com/dquki4xol/image/upload/v1782563360/071b8afb7e7b399dd4d2e959ec3984b5e8acc8b7_swoyoe.png", // replace with your outside link
    label: "ISO Certificate Nursing Home Shusrusha Sishu Sewa Niketan",
  },
  {
    id: "c2",
    url: "https://res.cloudinary.com/dquki4xol/image/upload/v1782563360/51eb9cd68d68619a3c74433a82586687b2fec75e_e5uxdu.png", // replace with your outside link
    label: "ISO Certificate (Lab)",
  },
];

export default function Credentials() {
  const darkMode = useDarkMode();
  const [lightbox, setLightbox] = useState<string | null>(null);

  const bg         = "#ffffff";
  const border     = darkMode ? "#334155" : "#e2e8f0";
  const headingClr = darkMode ? "#FA6BB8" : "#ea580c";
  const gradient   = darkMode
    ? "linear-gradient(to right, #FF007A, #FA6BB8)"
    : "linear-gradient(to right, #dc2626, #f97316)";
  const pillBorder = darkMode ? "#FA6BB8" : "#fdba74";

  return (
    <section className="w-full mt-5 transition-colors duration-300" style={{ backgroundColor: bg }}>

      {/* Banner */}
      <div className="relative overflow-hidden py-5" style={{ background: gradient }}>
        <div className="absolute left-[-3%] top-0 h-full w-[7%] -skew-x-[20deg] bg-white" />
        <div className="absolute left-[7%]  top-0 h-full w-[3%] -skew-x-[20deg] bg-white" />
        <div className="absolute right-[7%] top-0 h-full w-[3%] -skew-x-[20deg] bg-white" />
        <div className="absolute right-[-3%] top-0 h-full w-[7%] -skew-x-[20deg] bg-white" />
        <h2 className="relative z-10 text-center text-xl sm:text-2xl font-bold text-white tracking-wide">
          Credentials
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10">
        <h3 className="text-center text-2xl sm:text-3xl font-extrabold mb-10" style={{ color: headingClr }}>
          Our Credentials
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
          {CREDENTIALS.map((cred) => (
            <div key={cred.id} className="flex flex-col items-center">
              <div
                className="w-full rounded-lg overflow-hidden shadow-md cursor-pointer"
                style={{ border: `1px solid ${border}` }}
                onClick={() => setLightbox(cred.url)}
              >
                <img
                  src={cred.url}
                  alt={cred.label}
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/600x850?text=Certificate"; }}
                  className="w-full h-auto object-contain"
                />
              </div>

              <span
                className="mt-5 inline-block rounded-full px-5 py-2 text-center text-[11px] sm:text-xs font-bold uppercase tracking-wide text-white"
                style={{ background: gradient, border: `2px solid ${pillBorder}` }}
              >
                {cred.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.88)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setLightbox(null)}
          >
            <X size={22} />
          </button>
          <img
            src={lightbox}
            alt="Certificate enlarged"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
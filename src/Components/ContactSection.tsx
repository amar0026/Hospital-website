import { useDarkMode } from "../Context/Darkmodecontext";
import { MapPin, Phone, Mail, type LucideIcon } from "lucide-react";
interface ContactColumn {
  id: string;
  icon: LucideIcon;
  label: string;
  hours: string;
  lines: string[];
}
const CONTACT_INFO: ContactColumn[] = [
  {
    id: "address",
    icon: MapPin,
    label: "Address",
    hours: "Mon-Sat: 9am to 5pm.",
    lines: ["Barisha-Kolaghat-", "Purbamedinipore-", "Pin-721134(Near Haldia", "More- NH-6)"],
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    hours: "Mon-Fri: 9am to 5pm.",
    lines: ["6294220411/9641520183", "03228256261/262"],
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    hours: "Everyday",
    lines: ["shushrushassn@gmail.com"],
  },
];
export default function ContactUs() {
  const darkMode = useDarkMode();
  const bg        = "#ffffff";
  const border    = darkMode ? "#334155" : "#e2e8f0";
  const text      = "#0f172a";
  const muted     = darkMode ? "#94a3b8" : "#64748b";
  const accent    = darkMode ? "#FA6BB8" : "#2563eb";
  const infoColor = darkMode ? "#FA6BB8" : "#ea580c";
  const gradient  = darkMode
    ? "linear-gradient(to right, #FF007A, #FA6BB8)"
    : "linear-gradient(to right, #dc2626, #f97316)";
  return (
    <section className="w-full mt-5 transition-colors duration-300" style={{ backgroundColor: bg }}>
      {/* Banner */}
      <div className="relative overflow-hidden py-5" style={{ background: gradient }}>
        <div className="absolute left-[-3%] top-0 h-full w-[7%] -skew-x-[20deg] bg-white" />
        <div className="absolute left-[7%]  top-0 h-full w-[3%] -skew-x-[20deg] bg-white" />
        <div className="absolute right-[7%] top-0 h-full w-[3%] -skew-x-[20deg] bg-white" />
        <div className="absolute right-[-3%] top-0 h-full w-[7%] -skew-x-[20deg] bg-white" />
        <h2 className="relative z-10 text-center text-xl sm:text-2xl font-bold text-white tracking-wide">
          Contact Us
        </h2>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-10">
        {/* Map */}
        <div className="w-full rounded-xl overflow-hidden shadow-sm" style={{ border: `1px solid ${border}` }}>
          <iframe
            title="Location map"
            src="https://www.google.com/maps?q=Kolaghat,Purba+Medinipur,West+Bengal&output=embed"
            className="w-full"
            style={{ height: "320px", border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {CONTACT_INFO.map(({ id, icon: Icon, label, hours, lines }) => (
            <div key={id} className="flex flex-col items-center">
              <Icon size={22} style={{ color: accent }} />
              <h4 className="mt-2 text-base font-bold" style={{ color: text }}>
                {label}
              </h4>
              <p className="mt-1 text-xs" style={{ color: muted }}>
                {hours}
              </p>
              <div className="mt-3 space-y-0.5">
                {lines.map((line, i) => (
                  <p key={i} className="text-sm font-semibold" style={{ color: infoColor }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { ArrowRight } from "lucide-react";
import { useDarkMode } from "../Context/Darkmodecontext";

interface Service {
  title: string;
  image: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    title: "Paediatric Division",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782469658/1ec51a650e83c8773c06d7834968d4c8dca6c8f1_etwnmk.png",
    description:
      "Consists of level 'III' NICU and PICU with ventilation backup. 1st and largest NICU setup in rural Bengal.",
  },
  {
    title: "Maternity Division",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782469660/488a8cef5419b5d09553778408b18252c8b50fba_rjaxiu.png",
    description:
      "A maternity hospital specializes in providing care for women throughout their pregnancy and deliveries. Additionally, it offers care for newborn...",
  },
  {
    title: "I.C.U. Division",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782469657/e8319c5bfaa8463e7fc92020ab37c1899d9bec1d_bvpiak.png",
    description:
      "A hospital's or healthcare facility's intensive care unit (ICU), often referred to as an intense therapy unit (ITU), intensive treatment unit (ITU), or cr...",
  },
  {
    title: "Dialysis Division",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782469656/ad1e297d26e18eb59607c7ab7df5c05c26914a10_fj0dhn.png",
    description:
      "When the kidneys cease functioning properly, a treatment called dialysis is used to eliminate waste materials and extra fluid from the blood. Blood is...",
  },
  {
    title: "General O.T. Division",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782469656/44cd4487d60b4ee97ff85a385c97785ed1cac2f6_mzwwp5.png",
    description:
      "Here the child's any surgery is done. NICU-Baby Care Unit, PICU. The hospital has operating rooms that can accommodate various types of...",
  },
  {
    title: "UltraModern ISO Certified Pathology",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782469656/3cbc299a71f4b2cb0313a95cc8299b699daa95f1_z8ywhh.png",
    description: "Medical laboratories can be accredited to ISO 9001:2015.",
  },
  {
    title: "Digital X-Ray",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782469658/afc94aa4d9824aec3cce40a1be463712133f7b87_hawiiu.png",
    description:
      "A digital X-ray, or digital radiography, is a modern type of X-ray that utilizes digital sensors instead of photographic film, as with a traditional X-ray.",
  },
  {
    title: "EEG, ECG, VEP BERA, EMG, NCV, ROP",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782469656/65448c5c5e613166d6ee520f2c35a01df53a7735_txj3ay.png",
    description:
      "Neuropolygraph EEG is installed which gives highly synchronized raw EEG with video. Brain map for frequency, voltage and spectrum.",
  },
  {
    title: "Medicine Shop Service",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782469655/ce9519e1f1f588f2ab78f8c9b0493a42db22c0f2_go8fsk.png",
    description:
      "Model pharmacies were established to prevent aberrant medicine dispensing patterns and ensure proper medication dispensing practices and medicine intake.",
  },
  {
    title: "24x7 Ambulance service available",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782469654/00d489a66e620840eb7f2d26f89fc34e2859921f_rbv13u.png",
    description:
      "24x7 ambulance service available. Quick, reliable emergency response. Trained professionals. Immediate care and transport.",
  },
  {
    title: "24x7 RMO (Paediatric experience)",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782469655/3c351d16bd77984de9d944697837ce4b56abb2a6_qj1hfn.png",
    description:
      "24x7 RMO with paediatric experience available. Comprehensive care, immediate response, child-friendly approach.",
  },
  {
    title: "Vaccination for all age-group",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782469659/52fb5dce08df89c32befb225580f770e2c3873e4_gmhgyy.png",
    description:
      "Vaccination for all age groups available. Safe, effective, and timely immunizations. Protect your health today.",
  },
];

export default function ServicesSection() {
  const darkMode = useDarkMode();

  const sectionBg = darkMode ? "#ffffff" : "#ffffff";
  const cardBg = darkMode ? "#ffffff" : "#ffffff";
  const cardBorder = darkMode ? "#334155" : "#334155";
  const titleColor = darkMode ? "#0f172a" : "#0f172a";
  const descColor = darkMode ? "#94a3b8" : "#6b7280";
  const accentColor = darkMode ? "#FA6BB8" : "#2563eb";

  const bannerGradient = darkMode
    ? "linear-gradient(to right, #FF007A, #FA6BB8)"
    : "linear-gradient(to right, #dc2626, #f97316)";

  return (
    <section
      className="w-full mt-5 transition-colors duration-300"
      style={{ backgroundColor: sectionBg }}
    >
      {/* ---------- Top banner ---------- */}
<div
  className="relative overflow-hidden py-5 transition-colors duration-300"
  style={{ background: bannerGradient }}
>
  {/* Left stripes */}
  <div className="absolute left-[-3%] top-0 h-full w-[7%] -skew-x-[20deg] bg-white" />
  <div className="absolute left-[7%] top-0 h-full w-[3%] -skew-x-[20deg] bg-white" />

  {/* Right stripes (mirrored) */}
  <div className="absolute right-[7%] top-0 h-full w-[3%] -skew-x-[20deg] bg-white" />
  <div className="absolute right-[-3%] top-0 h-full w-[7%] -skew-x-[20deg] bg-white" />

  <h2 className="relative z-10 text-center text-xl sm:text-2xl font-bold text-white tracking-wide">
    Services
  </h2>
</div>

      {/* ---------- Services grid ---------- */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="h-full flex flex-col rounded-xl border p-4 sm:p-5 shadow-sm transition-colors duration-300"
              style={{ backgroundColor: cardBg, borderColor: cardBorder }}
            >
              <h3
                className="font-semibold text-[15px] sm:text-base mb-3 line-clamp-2 min-h-[2.6rem] sm:min-h-[3rem] transition-colors duration-300"
                style={{ color: titleColor }}
              >
                {service.title}
              </h3>

              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-40 object-cover rounded-md mb-3 shrink-0"
              />

              <p
                className="text-sm leading-relaxed mb-3 line-clamp-3 flex-1 transition-colors duration-300"
                style={{ color: descColor }}
              >
                {service.description}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm w-fit mt-auto transition-colors duration-300"
                style={{ color: accentColor, outlineColor: accentColor }}
              >
                View More <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
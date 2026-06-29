import { useDarkMode } from "../Context/Darkmodecontext";

/**
 * ShopSection
 * ------------------------------------------------------------------
 * Top bar, brand banner, and a 2x2 grid of service cards
 * (Blood collection, Ambulance Booking, Medicine Order,
 * Emergency Doctor Booking).
 *
 * - Dark mode: TopBar + "Book Now" buttons use a gradient that
 *   switches with useDarkMode(), same pattern as ContactUs.
 * - Hero banner: a single full-width image (no crop).
 * - Service card images use object-contain inside a fixed-height
 *   frame so nothing gets cut off, regardless of the image's
 *   original aspect ratio.
 * ------------------------------------------------------------------
 */

interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    id: "blood-collection",
    title: "Blood collection",
    description:
      "It is most often done for laboratory testing. Blood is drawn from a vein (venipuncture), usually from the inside of the elbow or the back of the hand.",
    imageUrl:
      "https://res.cloudinary.com/dquki4xol/image/upload/v1782543139/ab92f5a9a5e3474ea5c297f461acbbde61f31a0c_uywsuq.jpg",
  },
  {
    id: "ambulance-booking",
    title: "Ambulance Booking",
    description:
      "Ambulances are used to respond to medical emergencies by emergency medical services (EMS). For this purpose, they are generally equipped...",
    imageUrl:
      "https://res.cloudinary.com/dquki4xol/image/upload/v1782543139/5a664c58b7feaf6fc06852a590f570442f44b492_njs7dl.jpg",
  },
  {
    id: "medicine-order",
    title: "Medicine Order",
    description:
      "Buy a wide range of products with lightning-fast delivery to your doorstep from us. Order prescription / OTC medicines online.",
    imageUrl:
      "https://res.cloudinary.com/dquki4xol/image/upload/v1782543139/d3657eac7e1c95d7cf6703cf1afb1adc98aaf97c_igggsf.jpg",
  },
  {
    id: "emergency-doctor",
    title: "Emergency Doctor Booking",
    description:
      "Book Doctor's Appointment Online. Connect with us through WhatsApp and we'll answer every question.",
    imageUrl:
      "https://res.cloudinary.com/dquki4xol/image/upload/v1782543139/054265ad4ba505a6113671a8ecf24ece5abc666c_oldjjn.jpg",
  },
];

function getGradient(darkMode: boolean) {
  return darkMode
    ? "linear-gradient(to right, #FF007A, #FA6BB8)"
    : "linear-gradient(to right, #dc2626, #f97316)";
}

/* ---------------------------- Top bar ---------------------------- */

function TopBar() {
  const darkMode = useDarkMode();
  const gradient = getGradient(darkMode);

  return (
    <div className="relative overflow-hidden mt-5 py-5" style={{ background: gradient }}>
      <div className="absolute left-[-3%] top-0 h-full w-[7%] -skew-x-[20deg] bg-white" />
      <div className="absolute left-[7%]  top-0 h-full w-[3%] -skew-x-[20deg] bg-white" />
      <div className="absolute right-[7%] top-0 h-full w-[3%] -skew-x-[20deg] bg-white" />
      <div className="absolute right-[-3%] top-0 h-full w-[7%] -skew-x-[20deg] bg-white" />
      <h2 className="relative z-10 text-center text-xl sm:text-2xl font-bold text-white tracking-wide">
        Shop
      </h2>
    </div>
  );
}

/* ---------------------------- Hero / brand banner ---------------------------- */

function Hero() {
  const darkMode = useDarkMode();
  const heroBg = darkMode ? "#ffffff" : "#ffffff";

  return (
    <div
      className="overflow-hidden mt-2 rounded-2xl"
      style={{ background: heroBg }}
    >
      <img
        src="https://res.cloudinary.com/dquki4xol/image/upload/v1782543140/8fb0c1c5cf812de355d8c2770df281d32ab4ded5_fpzmjq.png"
        alt="Healthcare Banner"
        loading="lazy"
        className="block w-full h-auto"
      />
    </div>
  );
}

/* ---------------------------- Service card ---------------------------- */

function ServiceCard({ service }: { service: Service }) {
  const darkMode = useDarkMode();
  const border = darkMode ? "#334155" : "#e2e8f0";
  const text = darkMode ? "#0f172a" : "#0f172a";
  const muted = darkMode ? "#94a3b8" : "#64748b";
  const cardBg = darkMode ? "#ffffff" : "#ffffff";
  const frameBg = darkMode ? "#f1f5f9" : "#f1f5f9";
  const gradient = getGradient(darkMode);

  return (
    <div
      className="flex flex-col overflow-hidden rounded-xl shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      style={{ backgroundColor: cardBg, border: `1px solid ${border}` }}
    >
      <div className="p-5 pb-0">
        <h3 className="text-base font-semibold" style={{ color: text }}>
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: muted }}>
          {service.description}
        </p>
      </div>

      {/* Fixed-height frame + object-contain so the image is never cropped */}
      <div className="mt-4 h-48 w-full overflow-hidden" style={{ backgroundColor: frameBg }}>
        <img
          src={service.imageUrl}
          alt={service.title}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <button
          type="button"
          className="rounded-md px-5 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-sm transition hover:brightness-110 active:scale-95"
          style={{ background: gradient }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

/* ---------------------------- Section ---------------------------- */

export default function ShopSection() {
  const darkMode = useDarkMode();
  const sectionBg = darkMode ? "#f8fafc" : "#f8fafc";
  const heading = darkMode ? "#FA6BB8" : "#ea580c";

  return (
    <section
      className="w-full transition-colors duration-300"
      style={{ backgroundColor: sectionBg }}
    >
      <TopBar />
      <Hero />

      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold" style={{ color: heading }}>
          Store of our services
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
import {
  MessageSquare,
  CalendarDays,
  FileText,
  ClipboardCheck,
  SquarePlus,
} from "lucide-react";
import { useDarkMode } from "../Context/Darkmodecontext";

const SERVICES = [
  {
    icon: MessageSquare,
    title: "Mediclaim facility available",
    desc: "Medical expense protection is offered by Mediclaim insurance. The network hospitals offer a cashless payment option.",
  },
  {
    icon: CalendarDays,
    title: "Paediatric Surgery",
    desc: "Children are seen by paediatric surgeons from birth. They decide to focus their medical practice on providing paediatric care.",
  },
  {
    icon: FileText,
    title: "Prescriptions",
    desc: "Receive and renew prescriptions digitally after your consultation with our specialists.",
  },
  {
    icon: ClipboardCheck,
    title: "Vaccination for all age-group",
    desc: "The best defense against 16 potentially hazardous disease that can be quite serious, necessitate hospitalization, or even be fatal.",
  },
  {
    icon: SquarePlus,
    title: "24*7 RMO Available",
    desc: "RMOs provide day and overnight cover at hospitals, providing safe practice care.",
  },
];

function ServiceCard({
  icon: Icon,
  title,
  desc,
  index,
  darkMode,
}: {
  icon: typeof MessageSquare;
  title: string;
  desc: string;
  index: number;
  darkMode: boolean;
}) {
  return (
    <div
      className="h-full bg-white border border-sky-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <Icon
        size={28}
        style={{ color: darkMode ? "#FA6BB8" : "#2563eb" }}
      />
      <h3
        className="mt-4 font-semibold text-base sm:text-lg"
        style={{ color: darkMode ? "#FF007A" : "#1d4ed8" }}
      >
        {title}
      </h3>
      <p className="mt-2 text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function ServicesSection() {
  const darkMode = useDarkMode();

  const headingGradient = darkMode
    ? "linear-gradient(to right, #FF007A, #FA6BB8)"
    : "linear-gradient(to right, #dc2626, #f97316)";

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold opacity-0 animate-fadeInUp bg-clip-text text-transparent"
          style={{
            backgroundImage: headingGradient,
            animationDelay: "0s",
          }}
        >
          Top services we offer
        </h2>
        <p
          className="mt-4 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.1s" }}
        >
          Get the latest information on the novel virus disease of nowadays,
          learn how to protect yourself and take advantage of our convenient
          services.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 text-left">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
            >
              <ServiceCard {...service} index={index} darkMode={darkMode} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
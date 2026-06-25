import {
  MessageSquare,
  CalendarDays,
  FileText,
  ClipboardCheck,
  SquarePlus,
} from "lucide-react";

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
  offset,
}: {
  icon: typeof MessageSquare;
  title: string;
  desc: string;
  index: number;
  offset?: boolean;
}) {
  return (
    <div
      className={`bg-white border border-sky-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fadeInUp ${
        offset ? "md:mt-8" : ""
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <Icon size={28} className="text-blue-600" />
      <h3 className="mt-4 text-blue-700 font-semibold text-base sm:text-lg">
        {title}
      </h3>
      <p className="mt-2 text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0s" }}
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

        {/* Row 1: 2 cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
          <ServiceCard {...SERVICES[0]} index={0} />
          <ServiceCard {...SERVICES[1]} index={1} offset />
        </div>

        {/* Row 2: 3 cards */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
          <ServiceCard {...SERVICES[2]} index={2} />
          <ServiceCard {...SERVICES[3]} index={3} offset />
          <ServiceCard {...SERVICES[4]} index={4} />
        </div>
      </div>
    </section>
  );
}
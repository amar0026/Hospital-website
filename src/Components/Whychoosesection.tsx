const NUMBERED_LIST = [
  {
    title: "Trustworthy Brand",
    desc: 'Backed by renowned Pediatrician "Dr. Prabir Bhowmik," ensuring quality and reliability.',
  },
  {
    title: "Modern Equipment",
    desc: "Equipped with the latest modern machinery for advanced medical treatments.",
  },
  {
    title: "Skilled Staff",
    desc: "Our trained and skilled staff provide exceptional care and support.",
  },
  {
    title: "24/7 Quality Services",
    desc: "Round-the-clock quality services ensuring continuous and comprehensive care.",
  },
  {
    title: "Affordable Rates",
    desc: "Competitive pricing to ensure accessible and affordable healthcare for all.",
  },
  {
    title: "High Accuracy Treatment",
    desc: "Delivering precise and effective treatments for optimal health outcomes.",
  },
  {
    title: "Special Discounts",
    desc: "Exclusive discounts available for BPL patients, making healthcare accessible.",
  },
  {
    title: "Flexible Payment Options",
    desc: "Accepting all payment modes for your convenience and ease.",
  },
];

const IMG_RECEPTION =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1782295409/0a7dc14b00df8f826b922030d5be32e62ac75bbb_e9vej1.png";
const IMG_SHELF =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1782295409/699f181f3a913c550488d14046c1e7a689755425_wglear.png";
const IMG_DRUG_SHOP =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1782295409/a45eb4c735580d4ac50e8838ca69283ef39c402e_rzrjrp.png";
const IMG_WARD =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1782295408/69173a4efe83559525ef82fc614dc78cc437102a_orbp0t.png";
const LOGO_BLUE =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1782217168/f3d532215994532d9135a01f42c4fa6d7763dc8e_rhr0v4.png";
const LOGO_PINK =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1782217168/94c29ad4ea33d94b0f44ebe7d3ede96579fef262_jfkggs.png";

function WaveLines({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 120 30"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[2, 11, 20].map((y) => (
        <path
          key={y}
          d={`M0 ${y + 4} Q 10 ${y - 4}, 20 ${y + 4} T 40 ${y + 4} T 60 ${
            y + 4
          } T 80 ${y + 4} T 100 ${y + 4} T 120 ${y + 4}`}
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 px-5 sm:px-8 overflow-hidden">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 opacity-0 animate-fadeInUp">
          Why you should choose Shusrusha?
        </h2>
        <p
          className="mt-4 text-gray-500 text-sm sm:text-base opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.1s" }}
        >
          Choose Shusrusha for expert, compassionate care tailored to the unique
          needs of mothers and children.
        </p>
      </div>

      {/* 
        KEY FIX: items-stretch on the grid so both columns stretch to equal height.
        Left column uses flex-col to fill height, right column uses flex-col + justify-between
        so items spread top-to-bottom exactly matching left column height.
      */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

        {/* ── Left: image collage ── */}
        <div className="relative flex flex-col">
          <WaveLines className="absolute -top-5 -left-2 w-16 h-7 text-red-400 hidden sm:block" />

          {/*
            Two columns inside the collage.
            Left col: 1 wide photo + 2 logos stacked.
            Right col: 3 equal photos.
            All images use aspect-ratio so they scale uniformly regardless of screen size.
          */}
          <div className="grid grid-cols-2 gap-3 flex-1">

            {/* Col A */}
            <div
              className="flex flex-col gap-3 opacity-0 animate-fadeInUp"
            >
              {/* Wide photo – taller to compensate for only having 1 vs 3 */}
              <div className="rounded-xl overflow-hidden" style={{ flex: "1.4" }}>
                <img
                  src={IMG_RECEPTION}
                  alt="Reception area"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Two logos, equal flex */}
              <div className="rounded-xl overflow-hidden flex items-center justify-center bg-gray-50" style={{ flex: "0.8" }}>
                <img
                  src={LOGO_BLUE}
                  alt="Shusrusha Shishu Seva Niketan logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="rounded-xl overflow-hidden flex items-center justify-center bg-gray-50" style={{ flex: "0.8" }}>
                <img
                  src={LOGO_PINK}
                  alt="Shusrusha Maternity logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </div>

            {/* Col B — three equal photos */}
            <div
              className="flex flex-col gap-3 opacity-0 animate-fadeInUp"
              style={{ animationDelay: "0.15s" }}
            >
              <div className="rounded-xl overflow-hidden" style={{ flex: "1" }}>
                <img
                  src={IMG_SHELF}
                  alt="Pharmacy shelf"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden" style={{ flex: "1" }}>
                <img
                  src={IMG_DRUG_SHOP}
                  alt="Shusrusha Drug Shop"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden" style={{ flex: "1" }}>
                <img
                  src={IMG_WARD}
                  alt="Hospital ward"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <WaveLines className="absolute -bottom-5 right-2 w-16 h-7 text-orange-400 hidden sm:block" />
        </div>

        {/* ── Right: numbered list ──
            justify-between spreads items so first item aligns with top of collage
            and last item aligns with bottom, matching visually on large screens.
        */}
        <div className="flex flex-col justify-between gap-2">
          {NUMBERED_LIST.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-4 opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="shrink-0 w-9 h-9 rounded-full bg-teal-50 border border-teal-200 text-teal-700 font-semibold flex items-center justify-center text-sm">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
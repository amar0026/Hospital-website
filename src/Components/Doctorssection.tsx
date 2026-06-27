import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../Context/Darkmodecontext";

interface HospitalDoctor {
  name: string;
  specialty: string;
  image: string;
}

interface OutdoorDoctor {
  id: string;
  name: string;
  specialty: string;
  description: string;
  image: string;
}

const HOSPITAL_DOCTORS: HospitalDoctor[] = [
  {
    name: "Dr. Probir Bhowmik",
    specialty: "(Senior Paediatrician)",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782475812/Mask_group_1_sug8tc.png",
  },
  {
    name: "Dr. Swetarka Bhowmik",
    specialty: "(Child Specialist)",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782475812/Mask_group_2_waphdh.png",
  },
  {
    name: "Dr. Ananya Sen",
    specialty: "(Neonatologist)",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782475812/Mask_group_3_p4ivsu.png",
  },
  {
    name: "Dr. Rajesh Kumar",
    specialty: "(Paediatric Surgeon)",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782475812/Mask_group_4_wdauth.png",
  },
  {
    name: "Dr. Priya Mukherjee",
    specialty: "(Paediatric Cardiologist)",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782475812/Mask_group_6_g4vupf.png",
  },
  {
    name: "Dr. Arjun Das",
    specialty: "(General Physician)",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782475812/Mask_group_5_q8rlaq.png",
  },
  {
    name: "Dr. Sneha Roy",
    specialty: "(Gynaecologist)",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782475812/Mask_group_6_g4vupf.png",
  },
  {
    name: "Dr. Vikram Singh",
    specialty: "(Orthopaedic Surgeon)",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782475811/Mask_group_7_hxargg.png",
  },
  {
    name: "Dr. Meera Iyer",
    specialty: "(Dermatologist)",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782475811/Mask_group_8_ivsjhw.png",
  },
  {
    name: "Dr. Kabir Chatterjee",
    specialty: "(ENT Specialist)",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782475811/2894d1d6e0552dea8a81ea28910e5534807d076c_v47tpw.jpg",
  },
];

export const OUTDOOR_DOCTORS: OutdoorDoctor[] = [
  {
    id: "probir-bhowmik",
    name: "Dr. Probir Bhowmik",
    specialty: "Senior Paediatrician",
    description:
      "Over 20 years of experience in newborn and child care, specializing in NICU and high-risk deliveries.",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782476709/images_2_k3y3ap.jpg",
  },
  {
    id: "swetarka-bhowmik",
    name: "Dr. Swetarka Bhowmik",
    specialty: "Child Specialist",
    description:
      "Focused on early childhood development, vaccinations, and routine paediatric checkups for all age groups.",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782476709/images_vmv7wv.jpg",
  },
  {
    id: "ananya-sen",
    name: "Dr. Ananya Sen",
    specialty: "Neonatologist",
    description:
      "Specializes in the care of premature and critically ill newborns, with extensive NICU experience.",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782476709/images_1_lkhrmv.jpg",
  },
  {
    id: "rajesh-kumar",
    name: "Dr. Rajesh Kumar",
    specialty: "Paediatric Surgeon",
    description:
      "Performs a wide range of paediatric surgical procedures with a gentle, child-friendly approach.",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782476709/istockphoto-2153805399-612x612_jlutmc.jpg",
  },
  {
    id: "priya-mukherjee",
    name: "Dr. Priya Mukherjee",
    specialty: "Paediatric Cardiologist",
    description:
      "Diagnoses and treats heart conditions in infants and children, including congenital heart defects.",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782476708/images_3_iklgk5.jpg",
  },
  {
    id: "arjun-das",
    name: "Dr. Arjun Das",
    specialty: "General Physician",
    description:
      "Provides comprehensive family healthcare, from routine checkups to management of chronic conditions.",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782476708/images_3_iklgk5.jpg",
  },
  {
    id: "sneha-roy",
    name: "Dr. Sneha Roy",
    specialty: "Gynaecologist",
    description:
      "Specializes in maternal health, prenatal care, and safe delivery for expecting mothers.",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782476709/istockphoto-2153805399-612x612_jlutmc.jpg",
  },
  {
    id: "vikram-singh",
    name: "Dr. Vikram Singh",
    specialty: "Orthopaedic Surgeon",
    description:
      "Treats bone, joint, and muscle conditions in children and adults with modern surgical techniques.",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782476709/images_1_lkhrmv.jpg",
  },
  {
    id: "meera-iyer",
    name: "Dr. Meera Iyer",
    specialty: "Dermatologist",
    description:
      "Manages skin conditions in children and adults, including allergies, infections, and skincare guidance.",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782476709/images_vmv7wv.jpg",
  },
  {
    id: "kabir-chatterjee",
    name: "Dr. Kabir Chatterjee",
    specialty: "ENT Specialist",
    description:
      "Treats ear, nose, and throat conditions in children, including hearing and speech-related concerns.",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782476709/images_2_k3y3ap.jpg",
  },
];

type Tab = "hospital" | "outdoor";

export default function DoctorsSection() {
  const darkMode = useDarkMode();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("hospital");

  const sectionBg = "#ffffff";
  const cardBg = "#ffffff";
  const cardBorder = "#334155";
  const nameColor = "#0f172a";
  const descColor = darkMode ? "#94a3b8" : "#6b7280";
  const accentColor = darkMode ? "#FA6BB8" : "#2563eb";
  const inactiveTabColor = "#475569";

  const bannerGradient = darkMode
    ? "linear-gradient(to right, #FF007A, #FA6BB8)"
    : "linear-gradient(to right, #dc2626, #f97316)";

  const ribbonGradient = darkMode
    ? "linear-gradient(to right, #FF007A, #FA6BB8)"
    : "linear-gradient(to right, #dc2626, #f97316)";

  const buttonGradient = darkMode
    ? "linear-gradient(to right, #FF007A, #FA6BB8)"
    : "linear-gradient(to right, #dc2626, #f97316)";

  const handleBookAppointment = (doctorId: string) => {
    navigate(`/appointment/${doctorId}`);
  };

  const handleDoctorDetails = (doctorId: string) => {
    navigate(`/appointment/${doctorId}`);
  };

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
        <div className="absolute left-[-3%] top-0 h-full w-[7%] -skew-x-[20deg] bg-white" />
        <div className="absolute left-[7%] top-0 h-full w-[3%] -skew-x-[20deg] bg-white" />
        <div className="absolute right-[7%] top-0 h-full w-[3%] -skew-x-[20deg] bg-white" />
        <div className="absolute right-[-3%] top-0 h-full w-[7%] -skew-x-[20deg] bg-white" />
        <h2 className="relative z-10 text-center text-xl sm:text-2xl font-bold text-white tracking-wide">
          Doctors
        </h2>
      </div>

      {/* ---------- Tabs ---------- */}
      <div
        className="flex items-center justify-center gap-8 sm:gap-12 border-b px-5 py-4 transition-colors duration-300"
        style={{ borderColor: cardBorder }}
      >
        <button
          onClick={() => setActiveTab("hospital")}
          className="text-sm sm:text-base font-semibold pb-2 border-b-2 transition-colors duration-300"
          style={{
            color: activeTab === "hospital" ? accentColor : inactiveTabColor,
            borderColor: activeTab === "hospital" ? accentColor : "transparent",
          }}
        >
          Hospital Doctors
        </button>
        <button
          onClick={() => setActiveTab("outdoor")}
          className="text-sm sm:text-base font-semibold pb-2 border-b-2 transition-colors duration-300"
          style={{
            color: activeTab === "outdoor" ? accentColor : inactiveTabColor,
            borderColor: activeTab === "outdoor" ? accentColor : "transparent",
          }}
        >
          Outdoor Doctors (Availability)
        </button>
      </div>

      {/* ---------- Content ---------- */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 py-10 sm:py-12">
        {activeTab === "hospital" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {HOSPITAL_DOCTORS.map((doc) => (
              <div
                key={doc.name}
                className="relative rounded-md overflow-hidden shadow-sm"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                <div
                  className="absolute bottom-3 left-0 pl-4 pr-9 py-2 max-w-[85%]"
                  style={{
                    background: ribbonGradient,
                    clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                  }}
                >
                  <p className="text-white font-semibold text-sm leading-tight">
                    {doc.name}
                  </p>
                  <p className="text-white/90 text-xs leading-tight">
                    {doc.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {OUTDOOR_DOCTORS.map((doc) => (
              <div
                key={doc.id}
                className="flex gap-4 sm:gap-5 items-start pb-6 border-b transition-colors duration-300"
                style={{ borderColor: cardBorder }}
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  loading="lazy"
                  className="w-28 h-32 rounded-md object-cover shrink-0"
                />

                <div
                  className="flex-1 rounded-md p-1 transition-colors duration-300"
                  style={{ backgroundColor: cardBg }}
                >
                  <h3
                    className="font-semibold text-sm sm:text-base transition-colors duration-300"
                    style={{ color: nameColor }}
                  >
                    {doc.name}
                  </h3>
                  <p
                    className="text-xs sm:text-sm font-medium mb-1 transition-colors duration-300"
                    style={{ color: accentColor }}
                  >
                    {doc.specialty}
                  </p>
                  <p
                    className="text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2 transition-colors duration-300"
                    style={{ color: descColor }}
                  >
                    {doc.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <button
                      style={{ background: buttonGradient }}
                      className="text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-md transition-all"
                      onClick={() => handleBookAppointment(doc.id)}
                    >
                      Book Appointment
                    </button>
                    <button
                      onClick={() => handleDoctorDetails(doc.id)}
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium hover:underline transition-colors duration-300 bg-transparent border-none cursor-pointer p-0"
                      style={{ color: accentColor }}
                    >
                      Doctor Details <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
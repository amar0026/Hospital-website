import { useDarkMode } from "../Context/Darkmodecontext";
import { Search, Phone,Sparkles, Check } from "lucide-react";

interface PricingPlan {
    id: string;
    label: string;
    price: string;
    billing: string;
    feature: string;
}

const PLANS: PricingPlan[] = [
    {
        id: "p1",
        label: "Basic plan",
        price: "Rs 1200/mth",
        billing: "Billed annually.",
        feature:
            "The patient will get instant 15% Discount on Nursing home Bill on Admission During Scheme Validity Duration (Except Doctor Fees)",
    },
    {
        id: "p2",
        label: "Basic plan",
        price: "Rs 2000/mth",
        billing: "Billed annually.",
        feature:
            "The patient will get instant 15% Discount on Nursing home Bill on Admission During Scheme Validity Duration (Except Doctor Fees)",
    },
    {
        id: "p3",
        label: "Basic plan",
        price: "Rs 3750/mth",
        billing: "Billed annually.",
        feature:
            "The patient will get instant 15% Discount on Nursing home Bill on Admission During Scheme Validity Duration (Except Doctor Fees)",
    },
];

export default function HealthScheme() {
    const darkMode = useDarkMode();

    const bg = "#ffffff";
    const cardBg = darkMode ? "#ffffff" : "#ffffff";
    const border = darkMode ? "#e2e8f0" : "#e2e8f0";
    const text = darkMode ? "#0f172a" : "#0f172a";
    const muted = darkMode ? "#94a3b8" : "#64748b";
    const gradient = darkMode
        ? "linear-gradient(to right, #FF007A, #FA6BB8)"
        : "linear-gradient(to right, #dc2626, #f97316)";
    const accentPurple = darkMode ? "#FA6BB8" : "#4f46e5";
    const pricingBg = darkMode ? "#dbeafe" : "#dbeafe";
    const pricingBand = darkMode ? "#bfdbfe" : "#bfdbfe";

    return (
        <section className="w-full mt-5 transition-colors duration-300" style={{ backgroundColor: bg }}>

            {/* Banner */}
            <div className="relative overflow-hidden py-5" style={{ background: gradient }}>
                <div className="absolute left-[-3%] top-0 h-full w-[7%] -skew-x-[20deg] bg-white" />
                <div className="absolute left-[7%]  top-0 h-full w-[3%] -skew-x-[20deg] bg-white" />
                <div className="absolute right-[7%] top-0 h-full w-[3%] -skew-x-[20deg] bg-white" />
                <div className="absolute right-[-3%] top-0 h-full w-[7%] -skew-x-[20deg] bg-white" />
                <h2 className="relative z-10 text-center text-xl sm:text-2xl font-bold text-white tracking-wide">
                    Health Scheme
                </h2>
            </div>

            {/* Hero */}
            <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left: copy */}
                <div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                        <span style={{ color: darkMode ? "#FA6BB8" : "#f97316" }}>We care</span>
                        <br />
                        <span style={{ color: text }}>about your health</span>
                    </h3>
                    <p className="mt-3 text-sm sm:text-base" style={{ color: muted }}>
                        Good health is the state of mental, physical and social well being
                        and it does not just mean absence of diseases.
                    </p>

                    {/* Ribbon badge */}
                    <div
                        className="inline-flex items-center mt-6 px-6 py-2.5 text-white font-semibold text-sm sm:text-base"
                        style={{
                            background: gradient,
                            clipPath: "polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)",
                        }}
                    >
                        Scheme Benefit
                    </div>

                    <p className="mt-4 text-sm sm:text-base font-semibold leading-relaxed" style={{ color: text }}>
                        The patient will get instant{" "}
                        <span style={{ color: accentPurple }}>15% Discount</span> on Nursing
                        home Bill on Admission During Scheme Validity Duration{" "}
                        <span style={{ color: accentPurple }}>(Except Doctor Fees)</span>
                    </p>
                </div>

                {/* Right: illustration */}
                <div className="relative flex justify-center items-center py-6">
                    {/* Search card */}
                    <div
                        className="absolute -top-2 left-2 sm:left-6 z-20 flex items-center gap-2 rounded-full px-4 py-2.5 shadow-md"
                        style={{ backgroundColor: cardBg, border: `1px solid ${border}` }}
                    >
                        <Search size={16} style={{ color: accentPurple }} />
                        <div>
                            <p className="text-xs font-semibold leading-tight" style={{ color: text }}>
                                Well Qualified doctors
                            </p>
                            <p className="text-[10px] leading-tight" style={{ color: muted }}>
                                Treat with care
                            </p>
                        </div>
                    </div>

                    {/* Avatar circle */}
                    <div
                        className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden flex items-center justify-center"
                        style={{ background: darkMode ? "#33415540" : "#fde7d2" }}
                    >
                        <img
                            src="https://res.cloudinary.com/dquki4xol/image/upload/v1782560039/f9820aae9d84edd49a4bafd4ca8c1790c2b128ba_wcpibj.png"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Contact card */}
                    <div
                        className="absolute bottom-0 right-0 sm:right-4 z-20 flex items-center gap-2 rounded-xl px-3 py-2 shadow-md"
                        style={{ backgroundColor: cardBg, border: `1px solid ${border}` }}
                    >
                        <Phone size={16} style={{ color: accentPurple }} />
                        <div>
                            <p className="text-xs font-semibold leading-tight" style={{ color: accentPurple }}>
                                Contact me
                            </p>
                            <p className="text-[11px] leading-tight" style={{ color: muted }}>
                                +91 98765 43210
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing */}
            <div className="relative overflow-hidden py-12" style={{ backgroundColor: pricingBg }}>
                {/* decorative bands */}
                <div className="absolute -top-10 -right-10 w-[60%] h-32 rotate-10" style={{ backgroundColor: pricingBand, opacity: 0.6 }} />
                <div className="absolute top-20 -right-20 w-[70%] h-24 rotate-10" style={{ backgroundColor: pricingBand, opacity: 0.4 }} />

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 text-center">
                    <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: accentPurple }}>
                        Pricing plans
                    </p>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold" style={{ color: darkMode ? "#0f172a" : "#312e81" }}>
                        Shusrusha Health Scheme
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm font-semibold tracking-wide uppercase" style={{ color: accentPurple }}>
                        Special discount for BPL card holder
                    </p>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {PLANS.map((plan) => (
                            <div
                                key={plan.id}
                                className="rounded-2xl p-6 text-left shadow-sm flex flex-col"
                                style={{ backgroundColor: cardBg, border: `1px solid ${border}` }}
                            >
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center mx-auto"
                                    style={{ backgroundColor: darkMode ? "#33415560" : "#ede9fe" }}
                                >
                                    <Sparkles size={18} style={{ color: accentPurple }} />
                                </div>
                                <p className="mt-4 text-center text-sm font-semibold" style={{ color: accentPurple }}>
                                    {plan.label}
                                </p>
                                <p className="mt-1 text-center text-2xl font-extrabold" style={{ color: text }}>
                                    {plan.price}
                                </p>
                                <p className="mt-1 text-center text-xs" style={{ color: muted }}>
                                    {plan.billing}
                                </p>

                                <div className="mt-5 pt-5 border-t" style={{ borderColor: border }}>
                                    <div className="flex items-start gap-2">
                                        <Check size={16} className="mt-0.5 shrink-0" style={{ color: accentPurple }} />
                                        <p className="text-xs leading-relaxed" style={{ color: muted }}>
                                            {plan.feature}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    className="mt-6 w-full rounded-full py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
                                    style={{ background: gradient }}
                                >
                                    Grab The Deal
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
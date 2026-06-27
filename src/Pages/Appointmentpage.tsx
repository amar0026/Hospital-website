import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { useDarkMode } from "../Context/Darkmodecontext";
import { OUTDOOR_DOCTORS } from "../Components/Doctorssection";

// ── Availability schedule per doctor ──────────────────────────────────────────
const AVAILABILITY: Record<string, string[]> = {
  "probir-bhowmik":   ["Monday", "Wednesday", "Friday"],
  "swetarka-bhowmik": ["Tuesday", "Thursday", "Saturday"],
  "ananya-sen":       ["Monday", "Tuesday", "Friday"],
  "rajesh-kumar":     ["Wednesday", "Thursday", "Saturday"],
  "priya-mukherjee":  ["Monday", "Thursday"],
  "arjun-das":        ["Monday", "Wednesday", "Friday", "Saturday"],
  "sneha-roy":        ["Tuesday", "Friday"],
  "vikram-singh":     ["Monday", "Wednesday", "Saturday"],
  "meera-iyer":       ["Tuesday", "Thursday", "Saturday"],
  "kabir-chatterjee": ["Monday", "Wednesday", "Friday"],
};

const TIME_SLOTS = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
                    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

const BLOOD_GROUPS = ["A+", "A−", "B+", "B−", "AB+", "AB−", "O+", "O−", "Don't Know"];

interface FormData {
  firstName: string;
  lastName: string;
  age: string;
  bloodGroup: string;
  email: string;
  phone: string;
  healthProblem: string;
  preferredDay: string;
  preferredTime: string;
  agree: boolean;
}

// Error messages are always strings, regardless of the field's own data type
type FormErrors = Partial<Record<keyof FormData, string>>;

const EMPTY_FORM: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  bloodGroup: "",
  email: "",
  phone: "",
  healthProblem: "",
  preferredDay: "",
  preferredTime: "",
  agree: false,
};

export default function AppointmentPage() {
  const { doctorId } = useParams<{ doctorId: string }>();
  const navigate = useNavigate();
  const darkMode = useDarkMode();

  const doctor = OUTDOOR_DOCTORS.find((d) => d.id === doctorId);
  const availableDays = AVAILABILITY[doctorId ?? ""] ?? [];

  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // ── Theme tokens ───────────────────────────────────────────────────────────
  const bg        = darkMode ? "#ffffff" : "#f0f4ff";
  const cardBg    = darkMode ? "#ffffff" : "#ffffff";
  const border    = darkMode ? "#334155" : "#e2e8f0";
  const text      = darkMode ? "#0f172a" : "#0f172a";
  const muted     = darkMode ? "#94a3b8" : "#64748b";
  const accent    = darkMode ? "#FA6BB8" : "#2563eb";
  const gradient  = darkMode
    ? "linear-gradient(135deg, #FF007A, #FA6BB8)"
    : "linear-gradient(135deg, #dc2626, #f97316)";
  const inputBg   = darkMode ? "#f8fafc" : "#f8fafc";
  const inputBorder = darkMode ? "#475569" : "#cbd5e1";

  // ── Helpers ────────────────────────────────────────────────────────────────
  const set = (key: keyof FormData, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const validate = () => {
    const e: FormErrors = {};
    if (!form.firstName.trim())    e.firstName    = "First name is required";
    if (!form.lastName.trim())     e.lastName     = "Last name is required";
    if (!form.age.trim())          e.age          = "Age is required";
    if (!form.email.trim())        e.email        = "Email is required";
    if (!form.phone.trim())        e.phone        = "Phone is required";
    if (!form.preferredDay)        e.preferredDay = "Please select a day";
    if (!form.preferredTime)       e.preferredTime= "Please select a time";
    if (!form.agree)               e.agree        = "You must agree to continue";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) setSubmitted(true);
  };

  // ── Doctor not found ───────────────────────────────────────────────────────
  if (!doctor) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-4"
        style={{ backgroundColor: bg, color: text }}
      >
        <p className="text-xl font-semibold">Doctor not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 rounded-md text-white"
          style={{ background: gradient }}
        >
          <ArrowLeft size={16} /> Go Back
        </button>
      </div>
    );
  }

  // ── Success screen ─────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-5 gap-6"
        style={{ backgroundColor: bg, color: text }}
      >
        <div
          className="rounded-2xl p-10 flex flex-col items-center gap-4 shadow-xl max-w-md w-full text-center"
          style={{ backgroundColor: cardBg, border: `1px solid ${border}` }}
        >
          <CheckCircle size={56} color={accent} />
          <h2 className="text-2xl font-bold" style={{ color: text }}>
            Appointment Booked!
          </h2>
          <p style={{ color: muted }}>
            Your appointment with <span className="font-semibold" style={{ color: text }}>{doctor.name}</span> has
            been confirmed for <span className="font-semibold" style={{ color: accent }}>{form.preferredDay}</span> at{" "}
            <span className="font-semibold" style={{ color: accent }}>{form.preferredTime}</span>.
          </p>
          <p className="text-sm" style={{ color: muted }}>
            A confirmation will be sent to {form.email}.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-2 px-6 py-2.5 rounded-md text-white font-semibold"
            style={{ background: gradient }}
          >
            Back to Doctors
          </button>
        </div>
      </div>
    );
  }

  // ── Main page ──────────────────────────────────────────────────────────────
  return (
    <div
      className="min-h-screen mt-5 transition-colors duration-300"
      style={{ backgroundColor: bg, color: text }}
    >
      {/* Header bar */}
      <div
        className="relative overflow-hidden py-5"
        style={{ background: gradient }}
      >
        
        <div className="absolute left-[7%] top-0 h-full w-[3%] -skew-x-[20deg] bg-white" />
        <div className="absolute right-[7%] top-0 h-full w-[3%] -skew-x-[20deg] bg-white" />
        <div className="absolute right-[-3%] top-0 h-full w-[7%] -skew-x-[20deg] bg-white" />
        <h1 className="relative z-10  text-center text-xl sm:text-2xl font-bold text-white tracking-wide">
          Book Appointment
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 space-y-6">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: accent }}
        >
          <ArrowLeft size={16} /> Back to Doctors
        </button>

        {/* ── Doctor profile card ── */}
        <div
          className="rounded-2xl shadow-md overflow-hidden"
          style={{ backgroundColor: cardBg, border: `1px solid ${border}` }}
        >
          <div className="flex flex-col sm:flex-row gap-0">
            {/* Image panel */}
            <div
              className="sm:w-56 shrink-0 flex items-center justify-center p-6"
              style={{ background: gradient }}
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-36 h-40 rounded-xl object-cover shadow-lg"
              />
            </div>

            {/* Info panel */}
            <div className="flex-1 p-6 flex flex-col justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold" style={{ color: text }}>
                  {doctor.name}
                </h2>
                <p className="text-sm font-semibold mt-0.5" style={{ color: accent }}>
                  {doctor.specialty}
                </p>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: muted }}>
                  {doctor.description}
                </p>
              </div>

              {/* Contact chips */}
              <div className="flex flex-wrap gap-3 text-xs" style={{ color: muted }}>
                <span className="flex items-center gap-1.5">
                  <Phone size={13} /> +91 98765 43210
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail size={13} /> {doctorId}@hospital.in
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} /> OPD – Floor 2, Room 204
                </span>
              </div>

              {/* Availability days */}
              <div>
                <p className="text-xs font-semibold mb-2 flex items-center gap-1" style={{ color: muted }}>
                  <Clock size={13} /> Available Days
                </p>
                <div className="flex flex-wrap gap-2">
                  {availableDays.map((day) => (
                    <span
                      key={day}
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ background: gradient }}
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Booking form ── */}
        <div
          className="rounded-2xl shadow-md p-6 sm:p-8 space-y-6"
          style={{ backgroundColor: cardBg, border: `1px solid ${border}` }}
        >
          <h3 className="text-lg font-bold" style={{ color: text }}>
            Patient Details
          </h3>

          {/* Row 1: First & Last name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="First Name" error={errors.firstName}>
              <input
                type="text"
                placeholder="First name"
                value={form.firstName}
                onChange={(e) => set("firstName", e.target.value)}
                style={{ backgroundColor: inputBg, borderColor: errors.firstName ? "#ef4444" : inputBorder, color: text }}
                className="w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </Field>
            <Field label="Last Name" error={errors.lastName}>
              <input
                type="text"
                placeholder="Last name"
                value={form.lastName}
                onChange={(e) => set("lastName", e.target.value)}
                style={{ backgroundColor: inputBg, borderColor: errors.lastName ? "#ef4444" : inputBorder, color: text }}
                className="w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </Field>
          </div>

          {/* Row 2: Age & Blood Group */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Age" error={errors.age}>
              <input
                type="number"
                placeholder="Age"
                min={0}
                max={120}
                value={form.age}
                onChange={(e) => set("age", e.target.value)}
                style={{ backgroundColor: inputBg, borderColor: errors.age ? "#ef4444" : inputBorder, color: text }}
                className="w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </Field>
            <Field label="Blood Group">
              <select
                value={form.bloodGroup}
                onChange={(e) => set("bloodGroup", e.target.value)}
                style={{ backgroundColor: inputBg, borderColor: inputBorder, color: form.bloodGroup ? text : muted }}
                className="w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="">Select blood group</option>
                {BLOOD_GROUPS.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
            </Field>
          </div>

          {/* Row 3: Email */}
          <Field label="Email" error={errors.email}>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              style={{ backgroundColor: inputBg, borderColor: errors.email ? "#ef4444" : inputBorder, color: text }}
              className="w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </Field>

          {/* Row 4: Phone */}
          <Field label="Phone Number" error={errors.phone}>
            <input
              type="tel"
              placeholder="+91 00000 00000"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              style={{ backgroundColor: inputBg, borderColor: errors.phone ? "#ef4444" : inputBorder, color: text }}
              className="w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </Field>

          {/* Row 5: Preferred Day */}
          <Field label="Preferred Day" error={errors.preferredDay}>
            <div className="flex flex-wrap gap-2">
              {availableDays.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => set("preferredDay", day)}
                  className="px-4 py-2 rounded-md text-sm font-semibold border transition-all"
                  style={{
                    backgroundColor: form.preferredDay === day ? undefined : inputBg,
                    background: form.preferredDay === day ? gradient : undefined,
                    color: form.preferredDay === day ? "#ffffff" : muted,
                    borderColor: form.preferredDay === day ? "transparent" : inputBorder,
                  }}
                >
                  {day}
                </button>
              ))}
            </div>
            {errors.preferredDay && (
              <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.preferredDay}</p>
            )}
          </Field>

          {/* Row 6: Preferred Time */}
          <Field label="Preferred Time" error={errors.preferredTime}>
            <div className="flex flex-wrap gap-2">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => set("preferredTime", slot)}
                  className="px-3 py-1.5 rounded-md text-xs font-semibold border transition-all"
                  style={{
                    background: form.preferredTime === slot ? gradient : undefined,
                    backgroundColor: form.preferredTime === slot ? undefined : inputBg,
                    color: form.preferredTime === slot ? "#ffffff" : muted,
                    borderColor: form.preferredTime === slot ? "transparent" : inputBorder,
                  }}
                >
                  {slot}
                </button>
              ))}
            </div>
            {errors.preferredTime && (
              <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.preferredTime}</p>
            )}
          </Field>

          {/* Row 7: Health problem */}
          <Field label="Health Problem in Details (optional)">
            <textarea
              placeholder="Describe your symptoms or reason for visit..."
              value={form.healthProblem}
              onChange={(e) => set("healthProblem", e.target.value)}
              rows={4}
              style={{ backgroundColor: inputBg, borderColor: inputBorder, color: text }}
              className="w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            />
          </Field>

          {/* Privacy checkbox */}
          <div className="flex items-start gap-3">
            <input
              id="agree"
              type="checkbox"
              checked={form.agree}
              onChange={(e) => set("agree", e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded cursor-pointer accent-blue-600"
            />
            <label htmlFor="agree" className="text-xs leading-relaxed" style={{ color: muted }}>
              You agree to our friendly{" "}
              <a href="#" className="underline font-medium" style={{ color: accent }}>
                privacy policy
              </a>.
            </label>
          </div>
          {errors.agree && (
            <p className="text-xs -mt-4" style={{ color: "#ef4444" }}>{errors.agree}</p>
          )}

          {/* Submit */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-3 rounded-md text-white font-bold text-sm tracking-wide transition-opacity hover:opacity-90 active:scale-[0.98]"
            style={{ background: gradient }}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Small helper component ──────────────────────────────────────────────────
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide">
        {label}
      </label>
      {children}
      {error && <p className="text-xs" style={{ color: "#ef4444" }}>{error}</p>}
    </div>
  );
}
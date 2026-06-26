import { Phone, MapPin, Mail } from "lucide-react";
import { useDarkMode } from "../Context/Darkmodecontext";

const LOGO = "https://res.cloudinary.com/dquki4xol/image/upload/v1782217168/94c29ad4ea33d94b0f44ebe7d3ede96579fef262_jfkggs.png";
const PHONE = "02894220411";
const ADDRESS = "Borisha-Kolaghat-Purbasthali pore- Pin-721134, Near Haldia More- N-1-2";
const EMAIL = "Office@shusrusha.com";

const SOCIAL_LINKS = {
  facebook: "#",
  twitter: "#",
  youtube: "#",
  linkedin: "#",
};

const USEFUL_PAGES = [
  { label: "Doctors", href: "#doctors" },
  { label: "Services", href: "#services" },
  { label: "Scheme", href: "#scheme" },
  { label: "User Strategy", href: "#strategy" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
  { label: "Scheme", href: "#scheme" },
  { label: "User Strategy", href: "#strategy" },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function Footer() {
  const darkMode = useDarkMode();

  const footerGradient = darkMode
    ? "linear-gradient(to bottom right, #FF007A, #be185d, #FA6BB8)"
    : "linear-gradient(to bottom right, #f97316, #f97316, #dc2626)";

  return (
    <footer
      className="w-full mt-5 text-white"
      style={{ background: footerGradient }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Col 1: Logo + tagline + phone ── */}
          <div className="flex flex-col gap-4">
            <img
              src={LOGO}
              alt="Shusrusha logo"
              className="w-20 h-20 rounded-full object-cover"
            />
            <p className="text-white/85 text-sm leading-relaxed">
              If you're in need of medicines – we're here by your side. Stay safe and buy online!
            </p>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 text-white text-sm font-semibold hover:text-white/70 transition-colors"
            >
              <Phone size={14} className="shrink-0" />
              {PHONE}
            </a>
          </div>

          {/* ── Col 2: Useful Pages ── */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">Useful Pages</h4>
            <ul className="space-y-3">
              {USEFUL_PAGES.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Company ── */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">Company</h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contacts ── */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">Contacts</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="shrink-0 mt-0.5 text-white/80" />
                <span className="text-white/80 text-sm leading-relaxed">{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="shrink-0 text-white/80" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white/80 text-sm hover:text-white transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>

            {/* Social links */}
            <div className="mt-6">
              <p className="text-white/70 text-xs font-semibold mb-3 uppercase tracking-wide">
                Follow Us On
              </p>
              <div className="flex gap-2">
                {[
                  { href: SOCIAL_LINKS.facebook, Icon: FacebookIcon, bg: "bg-blue-600",  label: "facebook" },
                  { href: SOCIAL_LINKS.twitter,  Icon: TwitterIcon,  bg: "bg-black",     label: "twitter"  },
                  { href: SOCIAL_LINKS.youtube,  Icon: YoutubeIcon,  bg: "bg-red-600",   label: "youtube"  },
                  { href: SOCIAL_LINKS.linkedin, Icon: LinkedinIcon, bg: "bg-blue-700",  label: "linkedin" },
                ].map(({ href, Icon, bg, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 rounded-full ${bg} flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-md`}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/20 py-4 px-5 text-center">
        <p className="text-white/60 text-xs">
          © {new Date().getFullYear()} Shusrusha Multispeciality Mother and Child Care Unit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
import Link from "next/link";
import Image from "next/image";
import logoFull from "@/assets/TouringGO_Logo.png";
import logoText from "@/assets/TouringGO_Logo_Text.png";

function GlobeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15.3 15.3 0 0 1 0 18" />
      <path d="M12 3a15.3 15.3 0 0 0 0 18" />
    </svg>
  );
}

function CameraIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h2.2l1.1-1.4A2 2 0 0 1 11.4 4h1.2a2 2 0 0 1 1.6.6L15.3 6h2.2A2.5 2.5 0 0 1 20 8.5v7A2.5 2.5 0 0 1 17.5 18h-11A2.5 2.5 0 0 1 4 15.5v-7Z" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

function MessageIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 8.5h10" />
      <path d="M7 12h7" />
      <path d="M21 12c0 4.4-4.5 8-10 8-1.1 0-2.1-.2-3.1-.6L3 20.5l.9-3.7A7.8 7.8 0 0 1 3 12c0-4.4 4.5-8 10-8s10 3.6 10 8Z" />
    </svg>
  );
}

function PlayIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 6.5v11l9-5.5-9-5.5Z" />
    </svg>
  );
}

const footerLinks = {
  about: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "/helpcenter" },
    { label: "Booking FAQs", href: "/helpcenter" },
    { label: "Refund Policy", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  explore: [
    { label: "Destinations", href: "/" },
    { label: "Travel Guides", href: "/" },
    { label: "Travel Tips", href: "/helpcenter" },
    { label: "Mobile App", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className=" border-t border-gray-400 ">
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-shrink-0 items-center gap-3">
              <div className="flex items-center gap-2">
                <Image
                  src={logoFull}
                  alt="TouringGO logo"
                  width={230}
                  height={72}
                  priority
                  className="h-10 w-auto md:h-12"
                />
                <Image
                  src={logoText}
                  alt="TouringGO text logo"
                  width={200}
                  height={48}
                  priority
                  className="mt-2 hidden h-6 w-auto md:block"
                />
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
              Travel More, Live Brighter. Discover amazing destinations, book
              unforgettable experiences, and explore the world with TouringGO.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                aria-label="Facebook"
              >
                <GlobeIcon size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                aria-label="Instagram"
              >
                <CameraIcon size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                aria-label="X"
              >
                <MessageIcon size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                aria-label="YouTube"
              >
                <PlayIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-slate-900">
              About
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-blue-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-slate-900">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-blue-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-slate-900">
              Explore
            </h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-blue-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 md:flex-row">
          <p className="text-sm text-slate-500">
            © 2025 TouringGO. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-slate-500 transition hover:text-blue-700"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-slate-500 transition hover:text-blue-700"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-slate-500 transition hover:text-blue-700"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

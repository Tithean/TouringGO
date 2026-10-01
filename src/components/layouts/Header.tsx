"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logoFull from "@/assets/TouringGO_Logo.png";
import logoText from "@/assets/TouringGO_Logo_Text.png";
import MobileMenu from "./MobileMenu";

type IconProps = {
  size?: number;
  className?: string;
};

const Globe = ({ size = 16, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a15.3 15.3 0 0 1 0 18M12 3a15.3 15.3 0 0 0 0 18" />
  </svg>
);

const Heart = ({ size = 20, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 20.25s-7.5-4.35-9.5-8.68C1.3 9.28 3.1 4.5 7.43 4.5A4.96 4.96 0 0 1 12 7.08 4.96 4.96 0 0 1 16.57 4.5c4.33 0 6.13 4.78 4.93 7.07-2 4.33-9.5 8.68-9.5 8.68Z" />
  </svg>
);

const Menu = ({ size = 24, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

const X = ({ size = 24, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const ChevronDown = ({ size = 14, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Destinations", href: "/destination" },
  { label: "Tours", href: "/" },
  { label: "Help Center", href: "/helpcenter" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/80 backdrop-blur-xl shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-[76px]">
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

            <nav className="hidden items-center gap-1 rounded-full border border-sky-100 bg-sky-50/60 p-1.5 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-white hover:text-blue-700 hover:shadow-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 md:gap-3">
              <button className="hidden items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-700 md:flex">
                <Globe size={16} />
                <span>EN</span>
              </button>

              <button
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-blue-200 hover:text-blue-700 md:flex"
                aria-label="Favorites"
              >
                <Heart size={18} />
              </button>
              <Link
                href="/auth?tab=register"
                className="hidden items-center px-5 py-2.5 text-sm text-slate-700 hover:text-blue-700  md:inline-flex"
              >
                Register
              </Link>

              <button
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700 lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

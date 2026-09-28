"use client";

import type { SVGProps } from "react";
import Link from "next/link";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function GlobeIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15.5 15.5 0 0 1 0 18" />
      <path d="M12 3a15.5 15.5 0 0 0 0 18" />
    </svg>
  );
}

function HeartIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 20.5s-7.5-4.35-9.17-8.23C1.6 9.72 3.15 5.5 7.12 5.5c2.05 0 3.27 1.1 4.08 2.28.81-1.18 2.03-2.28 4.08-2.28 3.97 0 5.52 4.22 4.29 6.77C19.5 16.15 12 20.5 12 20.5Z" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Destinations", href: "/" },
  { label: "Tours", href: "/" },
  { label: "Help Center", href: "/helpcenter" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-16 z-40 overflow-y-auto bg-slate-50/95 backdrop-blur-lg lg:hidden md:top-[76px]">
      <div className="space-y-2 px-4 py-6">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            {link.label}
          </Link>
        ))}

        <div className="my-4 h-px bg-slate-200" />

        <div className="flex items-center gap-4 px-4 py-2 text-slate-700">
          <button className="flex items-center gap-1.5 text-sm font-medium">
            <GlobeIcon size={16} />
            <span>EN</span>
          </button>
          <button className="text-sm font-medium">USD</button>
          <button aria-label="Favorites">
            <HeartIcon size={18} />
          </button>
        </div>

        <div className="space-y-3 px-4 pt-4">
          <Link
            href="/auth?tab=login"
            onClick={onClose}
            className="block w-full rounded-2xl border border-blue-200 bg-white px-4 py-3 text-center font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Sign In
          </Link>
          <Link
            href="/auth?tab=register"
            onClick={onClose}
            className="block w-full rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-3 text-center font-semibold text-white shadow-lg shadow-blue-500/30"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

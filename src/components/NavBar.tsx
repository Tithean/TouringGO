"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("touringgo_token");
    const userJson = localStorage.getItem("touringgo_current_user");

    if (token) {
      setIsLoggedIn(true);
      if (userJson) {
        try {
          const user = JSON.parse(userJson);
          setUserName(user.name || "User");
        } catch {
          setUserName("User");
        }
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("touringgo_token");
    localStorage.removeItem("touringgo_current_user");
    setIsLoggedIn(false);
    setUserName("");
    router.push("/auth");
    router.refresh();
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-2.5 flex items-center justify-between text-xs text-gray-600 font-sans shadow-sm">
      {/* Left Branding Logo */}
      <div className="flex items-center">
        <Link href="/">
          <img src="/TouringGO_Logo_Text.png" alt="TouringGO Logo" className="h-8 w-auto cursor-pointer" />
        </Link>
      </div>

      {/* Center - Travel Document Categories Links */}
      <div className="hidden md:flex items-center gap-6 font-medium text-[11px] text-gray-500">
        <Link href="#" className="hover:text-blue-600 transition-colors">Stays</Link>
        <Link href="#" className="hover:text-blue-600 transition-colors">Tours & Activities</Link>
        <Link href="#" className="hover:text-blue-600 transition-colors">Flights</Link>
        <Link href="#" className="hover:text-blue-600 transition-colors">Transport</Link>
        <Link href="#" className="hover:text-blue-600 transition-colors">Car Rental</Link>
        <Link href="#" className="hover:text-blue-600 transition-colors">Travel Guides</Link>
      </div>

      {/* Right Core Framework Dynamic Trigger Buttons */}
      <div className="flex items-center gap-4 text-[11px] font-medium text-gray-500">
        <div className="flex items-center gap-2">
          <span className="cursor-pointer hover:text-blue-600">🌐 EN ▾</span>
          <span className="cursor-pointer hover:text-blue-600">USD ▾</span>
          <span className="cursor-pointer hover:text-blue-600 text-sm">♡</span>
        </div>

        <span className="text-gray-200">|</span>

        {isLoggedIn ? (
          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-semibold flex items-center gap-1">
              👤 សួស្តី, {userName}!
            </span>
            <button onClick={handleLogout} className="text-red-500 hover:text-red-700 font-medium transition-colors">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link href="/auth" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              <span className="text-sm">👤</span> Sign In
            </Link>
            <Link href="/auth" className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 font-semibold shadow-sm transition-all">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
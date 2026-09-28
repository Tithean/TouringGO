"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Login from "../components/Login";
import Register from "../components/Register";

interface AuthenticationProps {
  defaultTab?: "login" | "register";
}

export default function Auth({ defaultTab = "login" }: AuthenticationProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"login" | "register">(defaultTab);

  const handleSuccess = () => {
    router.push("/");
    router.refresh();
  };

  return (
    <div className="w-full min-h-screen flex bg-gray-50 text-black font-sans relative">
      <div className="hidden md:flex md:w-[45%] lg:w-[42%] relative overflow-hidden bg-blue-600 self-stretch">
        <div className="absolute inset-0 bg-blue-950/25 z-10" />

        <div className="relative z-20 p-12 flex flex-col justify-between h-full w-full text-white">
          <div className="my-auto space-y-3 pt-20">
            <div className="relative inline-block">
              <p className="text-5xl lg:text-5xl font-normal tracking-wide leading-tight font-serif italic drop-shadow-sm">
                Travel More
                <br />
                <span className="not-italic block mt-1 font-sans font-bold tracking-normal text-4xl lg:text-5xl">
                  Live Brighter
                </span>
              </p>
              <div className="w-[85%] h-[3px] bg-white mt-3 rounded-full opacity-90 transform -rotate-1 origin-left shadow-sm" />
            </div>

            <p className="text-xs opacity-85 leading-relaxed font-light pt-3 max-w-xs drop-shadow-sm">
              Discover unforgettable experiences around the world with
              TouringGO.
            </p>
          </div>

          <p className="text-xs opacity-75 font-light tracking-wide italic drop-shadow-sm">
            &ldquo;Collect moments, not things.&rdquo;
          </p>
        </div>
      </div>

      <div className="w-full md:w-[55%] lg:w-[58%] flex flex-col justify-between p-6 md:p-16 bg-white">
        <div className="w-full h-2 invisible md:block" />

        <div className="w-full max-w-sm mx-auto my-auto space-y-6 py-6">
          <div className="flex bg-gray-100 p-1 rounded-xl text-xs">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-2.5 rounded-lg font-medium transition-all duration-150 ${
                activeTab === "login"
                  ? "bg-white text-blue-600 shadow-sm font-semibold"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 py-2.5 rounded-lg font-medium transition-all duration-150 ${
                activeTab === "register"
                  ? "bg-white text-blue-600 shadow-sm font-semibold"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Register
            </button>
          </div>

          {activeTab === "login" ? (
            <Login onSuccess={handleSuccess} />
          ) : (
            <Register onSuccess={handleSuccess} />
          )}

          <div className="flex items-center gap-3 my-2">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-[11px] text-gray-400 font-light">
              or continue with
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 transition shadow-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-10.986 0-.746-.08-1.32-.176-1.884H12.24z"
                />
              </svg>
              <span>Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 transition shadow-sm">
              <svg
                className="w-4 h-4 fill-current text-black"
                viewBox="0 0 24 24"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94 1.07.08 2.16-.52 2.82-1.33z" />
              </svg>
              <span>Apple</span>
            </button>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4 font-light">
            {activeTab === "login" ? (
              <>
                Don&apos;t have an account?{" "}
                <button
                  onClick={() => setActiveTab("register")}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setActiveTab("login")}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Sign In
                </button>
              </>
            )}
          </p>
        </div>

        {/* 🛡️  Features  Form */}
        <div className="grid grid-cols-3 gap-2 pt-6 border-t border-gray-100 text-center text-xs text-gray-600">
          <div className="flex flex-col items-center gap-1">
            <div className="text-blue-600 text-lg bg-blue-50 w-9 h-9 flex items-center justify-center rounded-full">
              🛡️
            </div>
            <p className="font-semibold text-gray-700 text-[10px] pt-0.5">
              Secure & Safe
            </p>
            <p className="text-[9px] text-gray-400 font-light">
              Your data is protected
            </p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="text-blue-600 text-lg bg-blue-50 w-9 h-9 flex items-center justify-center rounded-full">
              🎧
            </div>
            <p className="font-semibold text-gray-700 text-[10px] pt-0.5">
              24/7 Support
            </p>
            <p className="text-[9px] text-gray-400 font-light">
              We&apos;re here for you
            </p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="text-blue-600 text-lg bg-blue-50 w-9 h-9 flex items-center justify-center rounded-full">
              🌐
            </div>
            <p className="font-semibold text-gray-700 text-[10px] pt-0.5">
              Global Access
            </p>
            <p className="text-[9px] text-gray-400 font-light">
              Explore the world
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

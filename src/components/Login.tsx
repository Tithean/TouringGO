"use client";

import { useState } from "react";

interface LoginProps {
  onSuccess?: () => void;
}

export default function Login({ onSuccess }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const users = JSON.parse(
        localStorage.getItem("touringgo_users") || "[]",
      );

      const found = users.find(
        (u: { email: string; password: string }) =>
          u.email === email && u.password === password,
      );

      if (!found) {
        setError("Invalid email or password.");
        return;
      }

      localStorage.setItem(
        "touringgo_current_user",
        JSON.stringify({ name: found.name, email: found.email }),
      );

      onSuccess?.();
    } catch {
      setError("Sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-1">Welcome Back</h2>
      <p className="text-gray-500 mb-6">Sign in to continue your journey</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" defaultChecked />
            Remember me
          </label>
          <a href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>

        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
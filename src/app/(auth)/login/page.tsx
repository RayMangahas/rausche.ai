"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0ECF6] via-[#E8E0F0] to-[#DDD4EB] flex items-center justify-center px-4">
      <div className="w-full max-w-[420px]">
        {/* Logo + Brand */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="font-display font-bold text-3xl text-[#4A3070] tracking-tight">
              Rausche
            </span>
            <Image
              src="/logo.png"
              alt="Rausche logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <p className="text-[#8B7BA8] text-sm font-medium">
            Where real conversations happen
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-purple-900/5 p-8 border border-[#E8E0F0]">
          <h1 className="font-display font-bold text-xl text-[#4A3070] mb-1">Welcome back</h1>
          <p className="text-sm text-[#8B7BA8] mb-6">Sign in to your account</p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#6B5B8A] mb-1.5 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#F8F5FC] border border-[#E8E0F0] text-[#4A3070] text-sm font-medium placeholder:text-[#C4B8D9] outline-none focus:border-[#9B6BC2] focus:ring-2 focus:ring-[#9B6BC2]/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#6B5B8A] mb-1.5 uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#F8F5FC] border border-[#E8E0F0] text-[#4A3070] text-sm font-medium placeholder:text-[#C4B8D9] outline-none focus:border-[#9B6BC2] focus:ring-2 focus:ring-[#9B6BC2]/20 transition-all"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm font-medium">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#9B6BC2] to-[#7B4FA2] text-white text-sm font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>

        {/* Sign up link */}
        <p className="text-center text-sm text-[#8B7BA8] mt-6 font-medium">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#9B6BC2] font-bold hover:text-[#7B4FA2] no-underline transition-colors">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

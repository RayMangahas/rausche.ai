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

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-r-black flex items-center justify-center px-4">
      <div className="w-full max-w-[420px]">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="font-display font-bold text-3xl text-r-text tracking-tight">Rausche</span>
            <Image src="/logo.png" alt="Rausche logo" width={40} height={40} className="object-contain" />
          </div>
          <p className="text-r-text-muted text-sm font-medium">Where real conversations happen</p>
        </div>

        <div className="bg-r-card rounded-3xl shadow-xl shadow-black/40 p-8 border border-r-border">
          <h1 className="font-display font-bold text-xl text-r-text mb-1">Welcome back</h1>
          <p className="text-sm text-r-text-muted mb-6">Sign in to your account</p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-r-text-secondary mb-1.5 uppercase tracking-wider">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com" required
                className="w-full px-4 py-3 rounded-xl bg-r-elevated border border-r-border text-r-text text-sm font-medium placeholder:text-r-text-dim outline-none focus:border-r-orange focus:ring-2 focus:ring-r-orange/20 transition-all" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-r-text-secondary mb-1.5 uppercase tracking-wider">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" required
                className="w-full px-4 py-3 rounded-xl bg-r-elevated border border-r-border text-r-text text-sm font-medium placeholder:text-r-text-dim outline-none focus:border-r-orange focus:ring-2 focus:ring-r-orange/20 transition-all" />
            </div>
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm font-medium">{error}</div>
            )}
            <button type="submit" disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-r-orange to-r-orange-dark text-white text-sm font-bold shadow-lg shadow-r-orange/20 hover:shadow-r-orange/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-r-text-muted mt-6 font-medium">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-r-orange font-bold hover:text-r-orange-light no-underline transition-colors">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

const EMOJI_OPTIONS = ["😊", "🌙", "🔥", "🎸", "🦋", "☕", "🌿", "✨", "💜", "🎧", "📚", "🧠"];

export default function SignupPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [emoji, setEmoji] = useState("😊");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password.length < 6) { setError("Password must be at least 6 characters"); return; }
    if (password !== confirmPassword) { setError("Passwords don't match"); return; }
    setStep(2);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!displayName.trim()) { setError("Please enter your name"); return; }
    if (!username.trim()) { setError("Please choose a username"); return; }
    if (username.includes(" ")) { setError("Username can't have spaces"); return; }

    setLoading(true);

    const { data: existing } = await supabase
      .from("profiles").select("username").eq("username", username.toLowerCase()).single();

    if (existing) { setError("Username is already taken"); setLoading(false); return; }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email, password,
      options: { data: { display_name: displayName.trim(), username: username.toLowerCase().trim(), avatar_emoji: emoji } },
    });

    if (signUpError) { setError(signUpError.message); setLoading(false); return; }

    if (data.user) {
      const { error: profileError } = await supabase.from("profiles").insert({
        id: data.user.id, email, display_name: displayName.trim(),
        username: username.toLowerCase().trim(), avatar_emoji: emoji,
        avatar_color: "#E88B3E", avatar_type: "emoji",
      });
      if (profileError && !profileError.message.includes("duplicate")) {
        console.error("Profile creation error:", profileError);
      }
    }

    router.push("/");
    router.refresh();
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-r-elevated border border-r-border text-r-text text-sm font-medium placeholder:text-r-text-dim outline-none focus:border-r-orange focus:ring-2 focus:ring-r-orange/20 transition-all";

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
          {step === 1 ? (
            <>
              <h1 className="font-display font-bold text-xl text-r-text mb-1">Create your account</h1>
              <p className="text-sm text-r-text-muted mb-6">Step 1 of 2 — set up your login</p>
              <form onSubmit={handleStep1} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold text-r-text-secondary mb-1.5 uppercase tracking-wider">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" required className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-r-text-secondary mb-1.5 uppercase tracking-wider">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" required className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-r-text-secondary mb-1.5 uppercase tracking-wider">Confirm password</label>
                  <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••" required className={inputClass} />
                </div>
                {error && <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm font-medium">{error}</div>}
                <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-r-orange to-r-orange-dark text-white text-sm font-bold shadow-lg shadow-r-orange/20 hover:shadow-r-orange/30 transition-all cursor-pointer">Continue</button>
              </form>
            </>
          ) : (
            <>
              <h1 className="font-display font-bold text-xl text-r-text mb-1">Make it yours</h1>
              <p className="text-sm text-r-text-muted mb-6">Step 2 of 2 — set up your profile</p>
              <form onSubmit={handleSignup} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold text-r-text-secondary mb-2 uppercase tracking-wider">Pick your avatar</label>
                  <div className="flex flex-wrap gap-2">
                    {EMOJI_OPTIONS.map((e) => (
                      <button key={e} type="button" onClick={() => setEmoji(e)}
                        className={`w-11 h-11 rounded-xl text-xl flex items-center justify-center transition-all cursor-pointer border-2
                          ${emoji === e ? "border-r-orange bg-r-orange/10 scale-110 shadow-md shadow-r-orange/10" : "border-r-border bg-r-elevated hover:border-r-border-light"}`}>
                        {e}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-r-text-secondary mb-1.5 uppercase tracking-wider">Display name</label>
                  <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Your name" required maxLength={30} className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-r-text-secondary mb-1.5 uppercase tracking-wider">Username</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-r-text-dim text-sm font-medium">@</span>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value.replace(/\s/g, "").toLowerCase())}
                      placeholder="yourname" required maxLength={20} className={`${inputClass} pl-8`} />
                  </div>
                </div>
                {error && <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm font-medium">{error}</div>}
                <button type="submit" disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-r-orange to-r-orange-dark text-white text-sm font-bold shadow-lg shadow-r-orange/20 hover:shadow-r-orange/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                  {loading ? "Creating account..." : "Let's go 🚀"}
                </button>
                <button type="button" onClick={() => { setStep(1); setError(""); }}
                  className="text-sm text-r-text-muted hover:text-r-text font-medium bg-transparent border-none cursor-pointer">← Back</button>
              </form>
            </>
          )}
        </div>

        <p className="text-center text-sm text-r-text-muted mt-6 font-medium">
          Already have an account?{" "}
          <Link href="/login" className="text-r-orange font-bold hover:text-r-orange-light no-underline transition-colors">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

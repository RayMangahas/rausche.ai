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
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    setStep(2);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!displayName.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!username.trim()) {
      setError("Please choose a username");
      return;
    }
    if (username.includes(" ")) {
      setError("Username can't have spaces");
      return;
    }

    setLoading(true);

    // Check if username is taken
    const { data: existing } = await supabase
      .from("profiles")
      .select("username")
      .eq("username", username.toLowerCase())
      .single();

    if (existing) {
      setError("Username is already taken");
      setLoading(false);
      return;
    }

    // Create the auth account
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName.trim(),
          username: username.toLowerCase().trim(),
          avatar_emoji: emoji,
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    // Insert the profile row
    if (data.user) {
      const { error: profileError } = await supabase.from("profiles").insert({
        id: data.user.id,
        email: email,
        display_name: displayName.trim(),
        username: username.toLowerCase().trim(),
        avatar_emoji: emoji,
        avatar_color: "#9B6BC2",
        avatar_type: "emoji",
      });

      if (profileError && !profileError.message.includes("duplicate")) {
        console.error("Profile creation error:", profileError);
      }
    }

    router.push("/");
    router.refresh();
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
          {step === 1 ? (
            <>
              <h1 className="font-display font-bold text-xl text-[#4A3070] mb-1">Create your account</h1>
              <p className="text-sm text-[#8B7BA8] mb-6">Step 1 of 2 — set up your login</p>

              <form onSubmit={handleStep1} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#6B5B8A] mb-1.5 uppercase tracking-wider">Email</label>
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
                  <label className="block text-xs font-semibold text-[#6B5B8A] mb-1.5 uppercase tracking-wider">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F5FC] border border-[#E8E0F0] text-[#4A3070] text-sm font-medium placeholder:text-[#C4B8D9] outline-none focus:border-[#9B6BC2] focus:ring-2 focus:ring-[#9B6BC2]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6B5B8A] mb-1.5 uppercase tracking-wider">Confirm password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F5FC] border border-[#E8E0F0] text-[#4A3070] text-sm font-medium placeholder:text-[#C4B8D9] outline-none focus:border-[#9B6BC2] focus:ring-2 focus:ring-[#9B6BC2]/20 transition-all"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm font-medium">{error}</div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#9B6BC2] to-[#7B4FA2] text-white text-sm font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all cursor-pointer"
                >
                  Continue
                </button>
              </form>
            </>
          ) : (
            <>
              <h1 className="font-display font-bold text-xl text-[#4A3070] mb-1">Make it yours</h1>
              <p className="text-sm text-[#8B7BA8] mb-6">Step 2 of 2 — set up your profile</p>

              <form onSubmit={handleSignup} className="flex flex-col gap-4">
                {/* Emoji picker */}
                <div>
                  <label className="block text-xs font-semibold text-[#6B5B8A] mb-2 uppercase tracking-wider">Pick your avatar</label>
                  <div className="flex flex-wrap gap-2">
                    {EMOJI_OPTIONS.map((e) => (
                      <button
                        key={e}
                        type="button"
                        onClick={() => setEmoji(e)}
                        className={`w-11 h-11 rounded-xl text-xl flex items-center justify-center transition-all cursor-pointer border-2 ${
                          emoji === e
                            ? "border-[#9B6BC2] bg-[#F0E8F8] scale-110 shadow-md"
                            : "border-[#E8E0F0] bg-[#F8F5FC] hover:border-[#C4B8D9]"
                        }`}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6B5B8A] mb-1.5 uppercase tracking-wider">Display name</label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Your name"
                    required
                    maxLength={30}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F5FC] border border-[#E8E0F0] text-[#4A3070] text-sm font-medium placeholder:text-[#C4B8D9] outline-none focus:border-[#9B6BC2] focus:ring-2 focus:ring-[#9B6BC2]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6B5B8A] mb-1.5 uppercase tracking-wider">Username</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C4B8D9] text-sm font-medium">@</span>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value.replace(/\s/g, "").toLowerCase())}
                      placeholder="yourname"
                      required
                      maxLength={20}
                      className="w-full pl-8 pr-4 py-3 rounded-xl bg-[#F8F5FC] border border-[#E8E0F0] text-[#4A3070] text-sm font-medium placeholder:text-[#C4B8D9] outline-none focus:border-[#9B6BC2] focus:ring-2 focus:ring-[#9B6BC2]/20 transition-all"
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm font-medium">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#9B6BC2] to-[#7B4FA2] text-white text-sm font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {loading ? "Creating account..." : "Let's go 🚀"}
                </button>

                <button
                  type="button"
                  onClick={() => { setStep(1); setError(""); }}
                  className="text-sm text-[#8B7BA8] hover:text-[#6B5B8A] font-medium bg-transparent border-none cursor-pointer"
                >
                  ← Back
                </button>
              </form>
            </>
          )}
        </div>

        {/* Login link */}
        <p className="text-center text-sm text-[#8B7BA8] mt-6 font-medium">
          Already have an account?{" "}
          <Link href="/login" className="text-[#9B6BC2] font-bold hover:text-[#7B4FA2] no-underline transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

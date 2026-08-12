"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!data.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!data.password) {
      newErrors.password = "Please enter your password.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Replace this with your actual login API
    setTimeout(() => {
      setLoading(false);

      alert("Login successful!");

      router.push("/");
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4 py-5 relative overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />

      <div className="relative w-full max-w-[440px]">

        {/* Card */}
        <div className="bg-white border border-gray-100 rounded-3xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] px-6 sm:px-8 py-8">

          {/* Header */}
          <div className="text-center mb-7">

            {/* Logo */}
            <div className="flex justify-center mb-3">
              <img
                src="/logonew.png"
                alt="Local Lens AI"
                className="w-11 h-11 object-contain"
              />
            </div>

            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Welcome back
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              Sign in to continue to Local Lens AI.
            </p>
          </div>

          <form onSubmit={handleOnSubmit} className="space-y-3">

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <div className="relative">

                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />

                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={`w-full h-12 rounded-xl border ${
                    errors.email
                      ? "border-red-300 focus:ring-red-100"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                  } bg-gray-50/50 pl-11 pr-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:ring-4 transition`}
                />

              </div>

              {errors.email && (
                <p className="text-xs text-red-500 mt-1.5">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">

                <label className="block text-sm font-semibold text-gray-700">
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs font-medium text-blue-600 hover:text-blue-700 transition"
                >
                  Forgot password?
                </Link>

              </div>

              <div className="relative">

                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className={`w-full h-12 rounded-xl border ${
                    errors.password
                      ? "border-red-300"
                      : "border-gray-200 focus:border-blue-500"
                  } bg-gray-50/50 pl-11 pr-12 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:ring-4 focus:ring-blue-100 transition`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff className="w-[18px] h-[18px]" />
                  ) : (
                    <Eye className="w-[18px] h-[18px]" />
                  )}
                </button>

              </div>

              {errors.password && (
                <p className="text-xs text-red-500 mt-1.5">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="group w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-sm shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-200 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

          </form>

          {/* Register */}
          <div className="relative my-3">

            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100" />
            </div>

            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-xs text-gray-400">
                Don't have an account?
              </span>
            </div>

          </div>

          <Link
            href="/register"
            className="flex items-center justify-center w-full h-11 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition"
          >
            Create an account
          </Link>

        </div>
      </div>
    </main>
  );
}
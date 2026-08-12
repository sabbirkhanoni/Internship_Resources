"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  MapPin,
  Check,
  ArrowRight,
} from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

  const getPasswordStrength = () => {
    const password = data.password;

    if (!password) {
      return {
        label: "",
        width: "0%",
      };
    }

    if (password.length < 6) {
      return {
        label: "Weak",
        width: "33%",
      };
    }

    if (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password)
    ) {
      return {
        label: "Strong",
        width: "100%",
      };
    }

    return {
      label: "Medium",
      width: "66%",
    };
  };

  const passwordStrength = getPasswordStrength();

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!data.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!data.password) {
      newErrors.password = "Please create a password.";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!data.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    alert("Account created successfully!");
    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4 py-5 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />

      <div className="relative w-full max-w-[440px]">
        {/* Card */}
        <div className="bg-white border border-gray-100 rounded-3xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] px-6 sm:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="flex justify-center mb-2">
              {" "}
              <img
                src="/logonew.png"
                alt="Logo"
                className="w-10 h-10 object-contain"
              />{" "}
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Create your account
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              Discover better places with Local Lens AI.
            </p>
          </div>

          <form onSubmit={handleOnSubmit} className="space-y-2">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />

                <input
                  type="text"
                  name="fullName"
                  value={data.fullName}
                  onChange={handleOnChange}
                  placeholder="John Doe"
                  className={`w-full h-12 rounded-xl border ${
                    errors.fullName
                      ? "border-red-300 focus:ring-red-100"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                  } bg-gray-50/50 pl-11 pr-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:ring-4 transition`}
                />
              </div>

              {errors.fullName && (
                <p className="text-xs text-red-500 mt-1.5">{errors.fullName}</p>
              )}
            </div>

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
                  className={`w-full h-12 rounded-xl border ${
                    errors.email
                      ? "border-red-300 focus:ring-red-100"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                  } bg-gray-50/50 pl-11 pr-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:ring-4 transition`}
                />
              </div>

              {errors.email && (
                <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  placeholder="Create a password"
                  className={`w-full h-12 rounded-xl border ${
                    errors.password
                      ? "border-red-300"
                      : "border-gray-200 focus:border-blue-500"
                  } bg-gray-50/50 pl-11 pr-12 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:ring-4 focus:ring-blue-100 transition`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? (
                    <EyeOff className="w-[18px] h-[18px]" />
                  ) : (
                    <Eye className="w-[18px] h-[18px]" />
                  )}
                </button>
              </div>

              {/* Password Strength */}
              {data.password && (
                <div className="mt-2">
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-300"
                      style={{
                        width: passwordStrength.width,
                      }}
                    />
                  </div>

                  <p className="text-[11px] text-gray-500 mt-1">
                    Password strength:{" "}
                    <span className="font-semibold text-gray-700">
                      {passwordStrength.label}
                    </span>
                  </p>
                </div>
              )}

              {errors.password && (
                <p className="text-xs text-red-500 mt-1.5">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  placeholder="Confirm your password"
                  className={`w-full h-12 rounded-xl border ${
                    errors.confirmPassword
                      ? "border-red-300"
                      : "border-gray-200 focus:border-blue-500"
                  } bg-gray-50/50 pl-11 pr-12 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:ring-4 focus:ring-blue-100 transition`}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-[18px] h-[18px]" />
                  ) : (
                    <Eye className="w-[18px] h-[18px]" />
                  )}
                </button>
              </div>

              {data.confirmPassword &&
                data.password === data.confirmPassword && (
                  <p className="flex items-center gap-1 text-xs text-green-600 mt-1.5">
                    <Check className="w-3.5 h-3.5" />
                    Passwords match
                  </p>
                )}

              {errors.confirmPassword && (
                <p className="text-xs text-red-500 mt-1.5">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Terms */}
            <p className="text-[11px] leading-relaxed text-gray-500">
              By creating an account, you agree to our{" "}
              <span className="text-blue-600 font-medium cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-blue-600 font-medium cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="group w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-sm shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-200 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Login */}
          <Link
            href="/login"
            className="flex mt-3 items-center justify-center w-full text-sm font-semibold text-gray-700 transition"
          >
            Sign in to your account
          </Link>
        </div>
      </div>
    </main>
  );
}

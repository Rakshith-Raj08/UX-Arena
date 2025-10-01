import { useTheme } from "../ThemeContext";
import { Github } from "lucide-react";
import { FcGoogle } from "react-icons/fc"; // Google logo comes from react-icons

export default function Signup() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 transition-colors duration-300 ${
        darkMode ? "bg-[#0A0F1A] text-[#F8FAFF]" : "bg-[#F8FAFF] text-[#0F1B4C]"
      }`}
    >
      <div
        className={`max-w-md w-full p-8 rounded-lg shadow-lg transition-colors duration-300 ${
          darkMode ? "bg-[#1A2138]" : "bg-white border border-gray-200"
        }`}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Create your account</h2>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ff6600] transition-colors duration-300 ${
              darkMode
                ? "bg-[#0A0F1A] border border-gray-600 text-white"
                : "bg-gray-100 border border-gray-300 text-black"
            }`}
          />
          <input
            type="email"
            placeholder="Email"
            className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ff6600] transition-colors duration-300 ${
              darkMode
                ? "bg-[#0A0F1A] border border-gray-600 text-white"
                : "bg-gray-100 border border-gray-300 text-black"
            }`}
          />
          <input
            type="password"
            placeholder="Password"
            className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ff6600] transition-colors duration-300 ${
              darkMode
                ? "bg-[#0A0F1A] border border-gray-600 text-white"
                : "bg-gray-100 border border-gray-300 text-black"
            }`}
          />

          <button
            type="submit"
            className="w-full bg-[#ff6600] hover:bg-[#ff2500] text-white cursor-pointer font-semibold py-3 rounded-lg"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="px-3 text-sm text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>

        {/* Social Sign Up */}
        <div className="space-y-3">
          <button
            className={`w-full flex items-center justify-center gap-3 py-3 rounded-lg font-medium border cursor-pointer transition-colors duration-300 ${
              darkMode
                ? "bg-[#0A0F1A] border-gray-600 hover:bg-[#1f2937]"
                : "bg-white border-gray-300 hover:bg-gray-100"
            }`}
          >
            <FcGoogle size={22} />
            Sign up with Google
          </button>

          <button
            className={`w-full flex items-center justify-center gap-3 py-3 rounded-lg font-medium border cursor-pointer transition-colors duration-300 ${
              darkMode
                ? "bg-[#0A0F1A] border-gray-600 hover:bg-[#1f2937]"
                : "bg-white border-gray-300 hover:bg-gray-100"
            }`}
          >
            <Github size={22} />
            Sign up with GitHub
          </button>
        </div>

        <p className="mt-6 text-sm text-center transition-colors duration-300">
          Already have an account?{" "}
          <a href="/login" className="text-[#ff6600] hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

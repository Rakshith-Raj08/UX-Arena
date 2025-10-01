import { useTheme } from "../ThemeContext";
import { Github } from "lucide-react";


export default function Login() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 ${
        darkMode ? "bg-[#0A0F1A] text-white" : "bg-[#F8FAFF] text-[#0F1B4C]"
      }`}
    >
      <div
        className={`max-w-md w-full p-8 rounded-lg shadow-lg ${
          darkMode ? "bg-[#1A2138]" : "bg-white border border-gray-200"
        }`}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Email or Username"
            className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ff6600] ${
              darkMode
                ? "bg-[#0A0F1A] border border-gray-600"
                : "bg-gray-50 border border-gray-300"
            }`}
          />
          <input
            type="password"
            placeholder="Password"
            className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ff6600] ${
              darkMode
                ? "bg-[#0A0F1A] border border-gray-600"
                : "bg-gray-50 border border-gray-300"
            }`}
          />
          <button
            type="submit"
            className="w-full bg-[#ff6600] hover:bg-[#ff2500] text-white font-semibold py-3 cursor-pointer rounded-lg"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-500"></div>
          <span className="px-4 text-gray-400 text-sm">or</span>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        {/* Social login */}
        <div className="space-y-3">
          {/* Google Button with SVG */}
          <button
            className={`w-full flex items-center justify-center gap-3 py-3 rounded-lg font-medium border cursor-pointer transition-colors duration-300 ${
              darkMode
                ? "bg-[#0A0F1A] border-gray-600 hover:bg-[#1f2937]"
                : "bg-white border-gray-300 hover:bg-gray-100"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.3 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
              />
              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14.7 15.5 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.3 29.4 4 24 4 16.2 4 9.4 8.5 6.3 14.7z"
              />
              <path
                fill="#4CAF50"
                d="M24 44c5.2 0 10.1-2 13.7-5.3l-6.3-5.3C29.4 35.7 26.8 37 24 37c-5.3 0-9.7-3.4-11.3-8l-6.6 5.1C9.4 39.5 16.2 44 24 44z"
              />
              <path
                fill="#1976D2"
                d="M43.6 20.5H42V20H24v8h11.3c-1 3-3.1 5.6-5.9 7.1l6.3 5.3c3.6-3.3 6.3-8.1 6.3-13.4 0-1.3-.1-2.7-.4-3.5z"
              />
            </svg>
            Log in with Google
          </button>

          {/* GitHub Button */}
          <button
            className={`w-full flex items-center justify-center gap-3 py-3 rounded-lg font-medium border cursor-pointer transition-colors duration-300 ${
              darkMode
                ? "bg-[#0A0F1A] border-gray-600 hover:bg-[#1f2937]"
                : "bg-white border-gray-300 hover:bg-gray-100"
            }`}
          >
            <Github size={22} />
            Log in with GitHub
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-400 text-center">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#ff6600] hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Landing() {
  const [darkMode, setDarkMode] = useState(false);

  // Typewriter animation
  const phrases = [
    "Learn UX/UI by competing 🎨",
    "Get instant AI feedback 🤖",
    "Climb the leaderboard 🏆",
  ];
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(120);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length - 1));
        setSpeed(50);
      }, speed);
    } else {
      timer = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length + 1));
        setSpeed(120);
      }, speed);
    }

    if (!isDeleting && text === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  // SaaSland-inspired colors
  const bgClass = darkMode ? "bg-[#0A0F1A] text-[#F8FAFF]" : "bg-[#F8FAFF] text-[#0F1B4C]";
  const headerClass = darkMode ? "bg-[#0A0F1A] text-[#F8FAFF]" : "bg-[#F8FAFF] text-[#0F1B4C]";
  const footerClass = darkMode ? "border-[#1A2138] text-[#F8FAFF]" : "border-[#E5E7EB] text-[#4B5563]";

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${bgClass}`}>
      {/* Header */}
      <header className={`flex items-center px-8 py-4 shadow-md transition-colors duration-300 ${headerClass}`}>
        {/* Left: logo */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold tracking-wide">UX Arena</h1>
        </div>

        {/* Middle: nav */}
        <nav className="flex-1 flex justify-center gap-6 font-medium">
          <a href="#about" className="hover:text-[#ff2500] transition-colors">About</a>
          <a href="#docs" className="hover:text-[#ff2500] transition-colors">Docs</a>
          <a href="/signup" className="hover:text-[#ff2500] transition-colors">Sign Up</a>
        </nav>

        {/* Right: toggle */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors cursor-pointer duration-300 ${
              darkMode ? "bg-[#ff6600] hover:bg-[#ff2500] text-[#F8FAFF]" : "bg-[#ff6600] hover:bg-[#ff2500] text-white"
            }`}
          >
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 h-24">
          {text.split("").map((char, index) => {
            const half = Math.floor(text.length / 2);
            return (
              <span
                key={index}
                className={index < half ? (darkMode ? "text-[#F8FAFF]" : "text-[#0F1B4C]") : "text-[#ff6600]"}
              >
                {char}
              </span>
            );
          })}
          <span className="inline-block w-1 ml-1 bg-current animate-pulse"></span>
        </h2>

        <p className={`text-lg md:text-xl max-w-2xl ${darkMode ? "text-[#F8FAFF]" : "text-[#4B5563]"}`}>
          A gamified platform to practice UX/UI, compete with others, and get instant AI-powered feedback.
        </p>

        <a
          href="/signup"
          className={`mt-8 px-8 py-3 rounded-lg font-semibold shadow-lg transition-colors duration-300 ${
            darkMode ? "bg-[#ff6600] hover:bg-[#ff2500] text-[#F8FAFF]" : "bg-[#ff6600] hover:bg-[#ff2500] text-white"
          }`}
        >
          Get Started
        </a>
      </main>

      {/* Footer */}
      <footer className={`py-6 text-center border-t transition-colors duration-300 ${footerClass}`}>
        © 2025 UX Arena. Built by Rakshith Raj
      </footer>
    </div>
  );
}

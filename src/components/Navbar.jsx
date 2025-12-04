import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50 transition-all">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          MyPortfolio
        </h1>

        <div className="flex items-center gap-6">
          {/* Navigation Links */}
          <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300 font-medium">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#resume" className="hover:text-blue-600">Resume</a></li>
            <li><a href="#qualifications" className="hover:text-blue-600">Qualifications</a></li>

            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>

          {/* 🌐 Social Media Icons */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/robert.azinec.9"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.19 8.44 9.93v-7.03H8.1v-2.9h2.34V9.41c0-2.32 1.38-3.6 3.49-3.6.99 0 2.03.18 2.03.18v2.25h-1.14c-1.12 0-1.47.69-1.47 1.39v1.67h2.5l-.4 2.9h-2.1V22c4.78-.74 8.44-4.91 8.44-9.93z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/robzzy_23/"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm4.5-.25c-.69 0-1.25.56-1.25 1.25S15.81 9.5 16.5 9.5s1.25-.56 1.25-1.25S17.19 6.75 16.5 6.75z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/robert69657"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.91-.65.07-.64.07-.64 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05A9.38 9.38 0 0112 6.8c.85.01 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.96-2.34 4.83-4.57 5.08.36.32.69.94.69 1.9v2.8c0 .25.18.57.69.47A10.26 10.26 0 0022 12.26C22 6.58 17.52 2 12 2z" />
              </svg>
            </a>
          </div>

          {/* 🌗 Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 flex items-center justify-center rounded-full
                       bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-800
                       transition-all"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}

import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen flex flex-col justify-center items-center 
             bg-gray-50 dark:bg-gray-900 
             text-center px-4 transition-all"
>
  <img
    src={profile}
    alt="Profile"
    className="w-40 h-40 rounded-full shadow-lg mb-6 animate-fadeIn"
  />

  <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400 animate-fadeIn">
    Hi, I'm Robert
  </h1>

  <p className="text-xl mt-4 text-gray-700 dark:text-gray-300 animate-fadeIn delay-200">
    A Passionate Web Developer
  </p>

  <a
    href="#projects"
    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg 
               hover:bg-blue-700 transition-all duration-300 animate-fadeIn"
  >
    View My Work
  </a>
</section>

  );
}

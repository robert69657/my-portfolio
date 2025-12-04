export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      desc: "A fully responsive portfolio built with React and Tailwind CSS featuring dark mode, smooth animations, and reusable components.",
    },
    {
      title: "Attendance Logging System (Laravel)",
      desc: "A full CRUD web application with RFID scanning, Excel export, and real-time timestamp conversion built using Laravel and Bootstrap.",
    },
    {
      title: "Quiz Mobile App (Android Studio)",
      desc: "An offline quiz app built with Kotlin featuring score tracking, multiple activities, and instant answer feedback.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-white dark:bg-gray-800 transition-all text-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="p-6 shadow bg-gray-50 dark:bg-gray-700 rounded-lg transition-all"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {p.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

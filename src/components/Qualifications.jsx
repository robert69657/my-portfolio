export default function Qualifications() {
  const education = [
    {
      school: "North Eastern Mindanao State University",
      degree: "Bachelor of Science in Computer Science",
      year: "2022 – Present",
    },
  ];

  const experience = [
    {
      role: "Frontend Web Developer (Freelance)",
      desc: "Developed modern UI websites using React + Tailwind.",
      year: "2023 – Present",
    },
    {
      role: "IT Intern at Area51",
      desc: "Developed smart digital library system using laravel.",
      year: "2024",
    },
  ];

  return (
    <section
      id="qualifications"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-all"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
        Qualifications
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        
        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow transition"
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {edu.school}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">{edu.degree}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Experience
          </h3>
          <div className="space-y-4">
            {experience.map((job, index) => (
              <div
                key={index}
                className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow transition"
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {job.role}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">{job.desc}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {job.year}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

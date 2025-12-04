export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js","laravel"];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-all text-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((s) => (
          <span
            key={s}
            className="px-6 py-3 bg-white dark:bg-gray-700 shadow 
                       rounded-lg text-gray-800 dark:text-gray-200 font-medium"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

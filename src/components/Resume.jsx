import resumeFile from "../assets/resume.pdf";

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-20 px-6 bg-white dark:bg-gray-800 text-center transition-all"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Resume
      </h2>

      <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
        You can download my complete resume below. It includes my education,
        work experience, skills, and certifications.
      </p>

      <a
        href={resumeFile}
        download="Robert-Ceniza-Resume.pdf"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
      >
        Download Resume
      </a>
    </section>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 
                 transition-all text-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Contact Me
      </h2>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Email: robertceniza524@gmail.com
        <br />
        Cellphone#: 09925659922
      </p>

      <a
        href="mailto:robertceniza524@gmail.com"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg 
                   hover:bg-blue-700 transition-all inline-block"
      >
        Send Message
      </a>
    </section>
  );
}

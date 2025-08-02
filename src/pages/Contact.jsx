import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 text-center" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-10 text-primary">Get in Touch</h2>

      <div className="flex justify-center gap-8 text-4xl">
        {/* Gmail */}
        <a
          href="mailto:deepakr0923@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-white hover:text-primary transition transform hover:scale-110"
          title="Email"
        >
          <FaEnvelope />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/deepak-r-874b35292"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-white hover:text-primary transition transform hover:scale-110"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Deepak-0923"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-white hover:text-primary transition transform hover:scale-110"
          title="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Contact;

import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const About = () => (
  <section id="about" className="py-20 px-4 sm:px-6" data-aos="fade-up">
    <h2 className="text-3xl font-bold text-center mb-8 text-primary">About Me</h2>

    <div className="max-w-3xl mx-auto text-center">
      <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        I'm Deepak R, a highly motivated and detail-oriented software engineer with a strong foundation in computer science principles.
        I have hands-on experience in frontend development, WordPress customization, and backend integration. I’m passionate about
        building innovative applications and solving real-world problems through code.
      </p>

      <ul className="space-y-5">
        <li className="flex justify-center items-center gap-3">
          <FaBriefcase className="text-primary text-xl" />
          <span className="text-sm sm:text-base">
            Web Developer Intern – Sadhvi Software Solution (Jan–May 2025)
          </span>
        </li>
        <li className="flex justify-center items-center gap-3">
          <FaGraduationCap className="text-primary text-xl" />
          <span className="text-sm sm:text-base">
            B.E. Computer Science – Adithya Institute of Technology (2020–2024)
          </span>
        </li>
      </ul>
    </div>
  </section>
);

export default About;

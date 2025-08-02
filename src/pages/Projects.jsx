import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaAndroid,
  FaChartLine,
} from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { WiDaySunny } from "react-icons/wi"; 
import { motion } from "framer-motion";

const projects = [
  {
    title: "WeatherNow – React Weather App",
    description:
      "A modern, responsive weather app built with React.js. It fetches real-time data from OpenWeatherMap API and displays condition-specific icons using local images.",
    tech: [<FaReact key="react" />, <WiDaySunny key="sunny" />],
    github:
      "https://github.com/Deepak-0923/Deepak-0923-WeatherNow---React-Weather-App.git",
    live: "#",
  },
  {
    title: "Simple Line Chart – React + Recharts",
    description:
      "An interactive, responsive line chart built using React and Recharts. Perfect for dashboards, reports, and data visualization.",
    tech: [<FaReact key="react" />, <FaChartLine key="chart" />],
    github: "https://github.com/Deepak-0923/SimpleLineChart.git",
    live: "#",
  },
  {
    title: "QR Code Generator – React + Vite",
    description:
      "A lightweight and fast QR code generator built with React + Vite. Supports HMR and comes with ESLint for clean code.",
    tech: [<FaReact key="react" />, <SiVite key="vite" />],
    github: "https://github.com/Deepak-0923/QrCodeGenerator.git",
    live: "#",
  },
  {
    title: "Event Application – Android App",
    description:
      "An Android app to manage event bookings, schedule announcements, and certificate downloads. Designed for campus/club events.",
    tech: [<FaAndroid key="android" />],
    github: "https://github.com/Deepak-0923/Event-Applicaton.git",
    live: "#",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="py-20 px-4 sm:px-6 bg-white dark:bg-slate-900"
    data-aos="fade-up"
  >
    <h2 className="text-3xl font-bold text-center mb-12 text-primary">Projects</h2>

    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {projects.map((proj, index) => (
        <div
          key={index}
          className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-transparent hover:border-primary"
        >
          <h3 className="text-xl font-semibold mb-2 text-primary">{proj.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{proj.description}</p>

          <div className="flex gap-3 text-2xl text-primary mb-4">
            {proj.tech.map((icon, i) => (
              <span key={i}>{icon}</span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-primary transition"
            >
              <FaGithub /> GitHub
            </a>
            {proj.live !== "#" && (
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-primary transition"
              >
                <FaExternalLinkAlt /> Live
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;

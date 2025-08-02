import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaWordpress,
  FaNodeJs,
  FaDatabase,
  FaAndroid,
} from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: <FaJs />, category: "Programming" },
  { name: "HTML", icon: <FaHtml5 />, category: "Frontend" },
  { name: "CSS", icon: <FaCss3Alt />, category: "Frontend" },
  { name: "React", icon: <FaReact />, category: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend" },
  { name: "Firebase", icon: <FaDatabase />, category: "Database" },
  { name: "Git", icon: <FaGitAlt />, category: "Tools" },
  { name: "WordPress", icon: <FaWordpress />, category: "CMS" },
  { name: "Android Studio", icon: <FaAndroid />, category: "Mobile" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="animated-border"
          >
            <div className="p-5">
              <div className="flex items-center gap-4">
                <div className="text-3xl text-primary">{skill.icon}</div>
                <div>
                  <p className="font-semibold text-slate-200">{skill.name}</p>
                  <p className="text-sm text-slate-400">{skill.category}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

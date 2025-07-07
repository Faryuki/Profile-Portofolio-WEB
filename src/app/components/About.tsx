"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJava,
  faJs,
  faAndroid,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  faShieldAlt,
  faBug,
  faCode,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutSection() {
  const skills = [
    { name: "Laravel", icon: faCode },
    { name: "Python", icon: faPython },
    { name: "Java", icon: faJava },
    { name: "JavaScript", icon: faJs },
    { name: "Firebase", icon: faGoogle },
    { name: "Android Studio", icon: faAndroid },
    { name: "Kali Linux", icon: faShieldAlt },
    { name: "Cyber Tools", icon: faBug },
  ];

  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          About Me
        </h2>

        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          {/* Foto dengan animasi */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/profil.png"
              alt="Foto Dhio"
              width={280}
              height={280}
              className="object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Deskripsi */}
          <div className="text-gray-800 md:w-2/3 space-y-4">
            <h3 className="text-xl font-semibold">
              Hi, I'm Dhio Zahwan Aryasetyo 👋
            </h3>
            <p>
              I'm an Informatics undergraduate at Universitas Pembangunan
              Nasional Veteran Jakarta with a strong passion for web
              development, mobile development, and cybersecurity. I enjoy
              building both frontend and backend systems, and I actively explore
              projects that involve full development workflows and secure
              architecture.
            </p>
            <p>
              Over the past semesters, I've worked on various dynamic websites,
              RESTful APIs, and mobile apps using technologies like Laravel,
              Next.js, Express.js, and Java. I also participate in Capture The
              Flag (CTF) challenges to sharpen my cybersecurity skills and
              problem-solving abilities.
            </p>
            <p>
              I'm always eager to learn, contribute to impactful projects, and
              grow as a developer in a collaborative environment.
            </p>
            <a
              href="https://drive.google.com/file/d/1fJcL_KVYDZkFzgSa_N9dkkLNC4eHUCjj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition"
            >
              <FontAwesomeIcon icon={faDownload} className="text-white" />
              Download CV
            </a>

          </div>
        </div>

        {/* Skills Section with Animations */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center bg-gray-100 py-4 rounded-lg shadow hover:bg-gray-200 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FontAwesomeIcon
                icon={skill.icon}
                className="text-3xl text-indigo-500 mb-2"
              />
              <p className="font-medium text-gray-800">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

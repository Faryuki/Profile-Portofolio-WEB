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

const experienceList = [
  { img: "/experience/ksm1.jpg", title: "Research and Development Staff at KSM CyberSecurity" },
  { img: "/experience/ukm1.jpg", title: "Vice President of Public Relations at UKM Cuvetja" },
  { img: "/experience/bootcamp1.jpg", title: "Head of Assistant Mentors by KSM CyberSecurity" },
  { img: "/experience/ksm2.jpg", title: "Research and Development Staff at KSM CyberSecurity" },
  { img: "/experience/ukm2.jpg", title: "Vice President of Public Relations at UKM Cuvetja" },
  { img: "/experience/bootcamp2.jpg", title: "Head of Assistant Mentors by KSM CyberSecurity" },
  { img: "/experience/ksm3.jpg", title: "Research and Development Staff at KSM CyberSecurity" },
  { img: "/experience/ukm3.jpg", title: "Vice President of Public Relations at UKM Cuvetja" },
  { img: "/experience/bootcamp3.jpg", title: "Head of Assistant Mentors at Bootcamp by KSM CyberSecurity" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          About Me
        </h2>

        {/* About Description */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
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
              href="https://drive.google.com/file/d/1ELR8TehW6UADMlgzSAYkmZKqxTxttjb4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition"
            >
              <FontAwesomeIcon icon={faDownload} className="text-white" />
              Download CV
            </a>
          </div>
        </div>

        {/* Experience Section */}
        <motion.div className="mt-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Experience
          </h2>

          <div className="overflow-hidden relative">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }} 
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {[...experienceList, ...experienceList].map((exp, idx) => (
                <div
                  key={idx}
                  className="relative w-[300px] shrink-0 rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={exp.img}
                    alt={exp.title}
                    width={300}
                    height={200}
                    className="object-cover w-full h-60"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-opacity-30 flex items-start justify-center p-3">
                    <p className="text-sm font-semibold text-white text-center backdrop-blur-sm bg-opacity-10 rounded-md">
                      {exp.title}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

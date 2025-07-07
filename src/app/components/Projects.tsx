"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MyPortfolio Website",
    description: "A personal portfolio website showcasing my profile, skills, and projects in Android and web development. Built with Next.js and Tailwind CSS, it features a clean design and highlights works",
    thumbnail: "/images/project1-1.jpg",
    images: ["/images/project1-1.jpg", "/images/project1-2.jpg", "/images/project1-3.jpg", "/images/project1-4.jpg", "/images/project1-5.jpg"],
    type: "web",
  },
  {
    title: "SMART",
    description: "An integrated productivity app designed to help users manage tasks, set priorities, and stay organized. Built using Android Studio (Kotlin) for the frontend and PHP + MySQL for the backend.",
    thumbnail: "/images/project2-1.jpg",
    images: ["/images/project2-1.jpg", "/images/project2-2.jpg", "/images/project2-3.jpg", "/images/project2-4.jpg", "/images/project2-5.jpg", "/images/project2-6.jpg", "/images/project2-7.jpg", "/images/project2-8.jpg", "/images/project2-9.jpg", "/images/project2-10.jpg", "/images/project2-11.jpg", "/images/project2-12.jpg"],
    type: "android",
  },
  {
    title: "File Integrity Verifier",
    description: "A Python-based desktop tool that verifies file integrity using SHA-256 hashing. This application allows users to check if files have been altered or corrupted. Built with Tkinter for the user interface",
    thumbnail: "/images/project3-1.jpg",
    images: ["/images/project3-1.jpg", "/images/project3-2.jpg", "/images/project3-3.jpg", "/images/project3-4.jpg", "/images/project3-5.jpg", "/images/project3-6.jpg"],
    type: "web",
  },
  {
    title: "Hotel Reservation System",
    description: "A web application developed for SMKN 24 to facilitate online hotel room reservations. This system built using Laravel",
    thumbnail: "/images/project4-1.jpg",
    images: ["/images/project4-1.jpg", "/images/project4-2.jpg", "/images/project4-3.jpg", "/images/project4-4.jpg", "/images/project4-5.jpg", "/images/project4-6.jpg", "/images/project4-7.jpg", "/images/project4-8.jpg"],
    type: "web",
  },
  {
    title: "Pemula Travel",
    description: "An online ticket booking website built using React.js to simplify the process of finding and purchasing event tickets. It features a user-friendly interface with seat selection, booking history, and real-time availability. Designed with responsiveness in mind, the platform offers a smooth experience across devices.",
    thumbnail: "/images/project5-1.jpg",
    images: ["/images/project5-1.jpg", "/images/project5-2.jpg", "/images/project5-3.jpg", "/images/project5-4.jpg", "/images/project5-5.jpg", "/images/project5-6.jpg", "/images/project5-7.jpg", "/images/project5-8.jpg", "/images/project5-9.jpg", "/images/project5-10.jpg"],
    type: "web",
  },
  {
    title: "SkillCheck",
    description: "A desktop application built with Java Swing to test and improve various human cognitive skills. It includes interactive games like Typing Speed, Reaction Time, Number Memory, and Visual Memory. Designed with a clean UI, the app offers an engaging and user-friendly experience.",
    thumbnail: "/images/project6-1.jpg",
    images: ["/images/project6-1.jpg", "/images/project6-2.jpg", "/images/project6-3.jpg", "/images/project6-4.jpg", "/images/project6-5.jpg", "/images/project6-6.jpg", "/images/project6-7.jpg", "/images/project6-8.jpg", "/images/project6-9.jpg", "/images/project6-10.jpg"],
    type: "java",
  },
  // Tambahkan project lainnya
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >


              <Image
                src={project.thumbnail}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4" >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
                  >
                    See More
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      </div>
    </section>
  );
}

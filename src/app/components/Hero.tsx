"use client";

import Image from "next/image";
import profilePic from "../assets/poto.png"; // pastikan file ada di /src/app/assets
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#2e2e2e] text-white"
    >
      
      {/* Foto dengan animasi */}
      <motion.div
        className="w-[250px] h-[250px] relative rounded-full overflow-hidden shadow-lg border-4 border-blue-600"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image src={profilePic} alt="Profile" fill className="object-cover" />
      </motion.div>

      {/* Deskripsi teks dengan animasi bertahap */}
      <motion.div
        className="text-center md:text-left max-w-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Hi, I'm Dhio 👋
        </motion.h1>

        <motion.p
          className="text-xl text-gray-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Cyber Security Analyst & Android/Web Developer
        </motion.p>

        <motion.p
          className="text-lg italic text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          "I'm not saying I'm a superhero, but I do fix problems that no one else can see. My cape is just a hoodie."
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Hire Me
        </motion.a>
      </motion.div>
    </section>
  );
}

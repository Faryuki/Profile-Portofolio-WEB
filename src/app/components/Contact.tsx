"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Contact() {
  const links = [
    {
      href: "https://www.instagram.com/dhio_zhwn/",
      icon: faInstagram,
      text: "Instagram",
      hover: "hover:text-pink-600",
    },
    {
      href: "https://www.linkedin.com/in/dhio-zahwan-aryasetyo/",
      icon: faLinkedin,
      text: "LinkedIn",
      hover: "hover:text-blue-600",
    },
    {
      href: "https://github.com/Faryuki",
      icon: faGithub,
      text: "GitHub",
      hover: "hover:text-gray-900",
    },
    {
      href: "https://wa.me/+6281281693654",
      icon: faWhatsapp,
      text: "WhatsApp",
      hover: "hover:text-green-600",
    },
    {
      href: "mailto:dhiozahwan@gmail.com",
      icon: faEnvelope,
      text: "Email",
      hover: "hover:text-red-600",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="bg-gray-100 py-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl font-bold text-center text-gray-900 mb-10"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me!
      </motion.h2>

      <div className="flex justify-center flex-wrap gap-10 text-lg text-gray-800">
        {links.map((item, i) => (
          <motion.a
            key={item.text}
            href={item.href}
            target="_blank"
            className={`flex items-center gap-2 transition ${item.hover}`}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.2, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <FontAwesomeIcon icon={item.icon} className="text-2xl" />
            {item.text}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

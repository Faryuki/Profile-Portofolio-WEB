"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      title: "Software & Tools",
      description:
        "I use Visual Studio Code as my main code editor to build modern, scalable, and clean applications. Combined with extensions and developer tools, I ensure my workflow is efficient and organized. I also use Git, browser dev tools, and frameworks like React or Next.js.",
      image: "/skills/vscode.png",
    },
    {
      title: "Web Development",
      description:
        "I build responsive web apps using technologies like HTML, CSS, JavaScript, Next.js, and Tailwind CSS. I enjoy both frontend and backend development, focusing on usability and performance.",
      image: "/skills/web.png",
    },
    {
      title: "Android Development",
      description:
        "I develop Android apps using Java and Android Studio. I'm comfortable with activity lifecycles, XML layouts, and integrating backend APIs.",
      image: "/skills/android.png",
    },
    {
      title: "Kali Linux & Cyber Tools",
      description:
        "I use Kali Linux and tools like Nmap, Burp Suite, Hydra, and Wireshark for penetration testing, CTF challenges, and cybersecurity research.",
      image: "/skills/kali.png",
    },
    {
      title: "Microsoft Office",
      description:
        "I'm proficient in Word, Excel, PowerPoint for academic, organizational, and professional tasks—such as documentation, data analysis, and presentations.",
      image: "/skills/office.png",
    },
  ];

  return (
    <section id="skills" className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Skills
        </h2>

        {skills.map((item, i) => {
          const from = i % 2 === 0 ? -100 : 100; // kiri jika genap, kanan jika ganjil
          return (
            <motion.div
              key={i}
              className={`flex flex-col md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-8 bg-white p-6 rounded-xl shadow-md`}
              initial={{ x: from, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-1/3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="rounded-xl object-contain shadow"
                />
              </div>
              <div className="md:w-2/3 text-gray-800">
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

export default function ProjectModal({ isOpen, onClose, project }: any) {
  const overlayRef = useRef(null);

  if (!isOpen) return null;

  const handleClickOutside = (e: any) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        onClick={handleClickOutside}
        className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 rounded-xl shadow-xl relative"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Tombol close tetap ada sebagai cadangan */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
          >
            &times;
          </button>

          {/* Konten Modal */}
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((img: string, i: number) => (
              <div
                key={i}
                className={`${
                  project.type === "android"
                    ? "w-[220px] h-[440px]" // portrait
                    : project.type === "java"
                    ? "w-[350px] h-[350px]" // square-like for Java GUI
                    : "w-full h-[200px]"     // landscape for web
                } relative overflow-hidden rounded-xl bg-white/30 backdrop-blur-sm shadow-lg border border-white/20`}
              >
                <Image
                  src={img}
                  alt={`Screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

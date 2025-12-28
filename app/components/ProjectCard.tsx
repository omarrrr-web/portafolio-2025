"use client";
import { FaGithub, FaLayerGroup, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  role: string;
  techStack: string[];
  type: string; // Ej: "Escritorio", "Web"
}

export default function ProjectCard({ title, description, role, techStack, type }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}

      className="w-full bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-colors"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          {type && (
            <span className="px-2 py-1 text-xs font-medium text-slate-400 bg-slate-800 rounded-full border border-slate-700">
              {type}
            </span>
          )}
        </div>
        <p className="text-slate-400 mb-6">
          {description}
        </p>

        <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-4 mb-6 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
          <h4 className="text-sm font-bold text-slate-200 mb-1 flex items-center gap-2">
            <FaLayerGroup className="text-blue-500" /> Mi Rol:
          </h4>
          <p className="text-sm text-slate-400">
            {role}
          </p>
        </div>

        {/* Footer: Tecnologías y Botón */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-800/50">

          {/* Lista de tecnologías (Tags) */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span key={index} className="px-3 py-1 text-xs font-medium text-slate-400 bg-slate-800 rounded-lg flex items-center gap-1">
                {index === 0 && <FaDatabase className="text-xs" />} {/* Icono solo en el primero como adorno */}
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
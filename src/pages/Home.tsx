import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { PROJECTS } from "../data";

export function Home() {
  return (
    <div className="pt-16 min-h-screen flex flex-col">
      <main className="flex-grow px-mobile-margin md:px-desktop-margin py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/${project.id}`} className="group block relative overflow-hidden bg-surface-dim">
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.coverUrl}
                    alt={project.title}
                    draggable="false"
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 ease-out"
                    whileHover={{ scale: 1.02 }}
                  />
                </div>
                
                {/* Overlay with Title */}
                <div className="absolute bottom-4 left-4 bg-black px-4 py-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <h3 className="text-white text-[13px] font-medium tracking-wider uppercase">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "../data";

export function ProjectPage() {
  const { projectId } = useParams();
  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="pt-16 min-h-screen">
      <main className="px-mobile-margin md:px-desktop-margin py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-label-md text-foreground/60 hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Retour aux projets
        </Link>

        <header className="max-w-2xl mb-16">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[48px] font-normal mb-6 tracking-tight"
          >
            {project.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-body-lg text-foreground/80"
          >
            {project.description}
          </motion.p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {project.photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={`/photo/${photo.id}`} className="block group">
                <div className="aspect-[3/2] overflow-hidden bg-surface-dim">
                  <motion.img
                    src={photo.url}
                    alt={photo.title}
                    draggable="false"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

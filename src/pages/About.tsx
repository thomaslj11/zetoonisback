import { motion } from "motion/react";

export function About() {
  return (
    <div className="pt-16 min-h-screen flex flex-col">
      <main className="flex-grow px-mobile-margin md:px-desktop-margin pt-12 pb-24 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-display-lg mb-16"
        >
          À propos
        </motion.h1>
        
        <div className="max-w-3xl space-y-12">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-body-lg leading-[1.8]"
          >
            La photographie, pour moi, n'est pas simplement l'acte de capturer une image, mais celui de sculpter la lumière pour révéler une vérité silencieuse. Mon travail explore l'intersection entre le minimalisme architectural et la vulnérabilité humaine, cherchant à isoler des moments de calme absolu au sein d'un monde en mouvement perpétuel. Chaque composition est une quête d'équilibre, où le vide est aussi significatif que le sujet.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-body-lg leading-[1.8]"
          >
            Basé dans une approche de design suisse, je privilégie la clarté et l'intégrité structurelle. Mes séries photographiques sont conçues comme des expositions de galerie numérique : un espace blanc où l'œil peut respirer et où chaque détail porte une intention précise. Que ce soit à travers des paysages désertiques ou des portraits intimes, mon objectif reste le même : transformer le complexe en essentiel, et le fugace en éternel.
          </motion.p>
        </div>
      </main>
    </div>
  );
}

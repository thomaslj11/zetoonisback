import { useParams, Link, useNavigate } from "react-router-dom";
import { MouseEvent, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS, Photo } from "../data";

export function PhotoDetail() {
  const { photoId } = useParams();
  const navigate = useNavigate();
  
  const allPhotos = PROJECTS.flatMap(p => p.photos);
  const photoIndex = allPhotos.findIndex(p => p.id === photoId);
  const photo = allPhotos[photoIndex];

  if (!photo) return <div>Photo not found</div>;

  const project = PROJECTS.find(p => p.id === photo.projectId);

  const goToNext = () => {
    const nextIndex = (photoIndex + 1) % allPhotos.length;
    navigate(`/photo/${allPhotos[nextIndex].id}`);
  };

  const goToPrev = () => {
    const prevIndex = (photoIndex - 1 + allPhotos.length) % allPhotos.length;
    navigate(`/photo/${allPhotos[prevIndex].id}`);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "Escape") navigate(`/${photo.projectId}`);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [photoIndex, allPhotos, navigate, photo.projectId]);

  // Handle right-click prevention
  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 bg-background z-[100] overflow-y-auto flex flex-col no-select">
      {/* Header */}
      <header className="px-mobile-margin md:px-desktop-margin py-4 flex justify-between items-start">
        <div className="text-2xl font-medium tracking-tight">Zetoon is back</div>
        <button 
          onClick={() => navigate(`/${photo.projectId}`)}
          className="p-2 hover:bg-surface-dim/20 transition-colors"
        >
          <X size={24} />
        </button>
      </header>

      {/* Main content */}
      <main className="flex-grow flex items-center justify-between px- mobile-margin md:px-desktop-margin relative group">
        <button 
          onClick={goToPrev}
          className="absolute left-mobile-margin md:left-desktop-margin z-10 opacity-0 group-hover:opacity-100 transition-opacity p-4 hover:bg-surface-dim/10"
        >
          <ChevronLeft size={32} />
        </button>

        <div className="w-full flex items-center justify-center py-6 px-12 md:px-24">
          <AnimatePresence mode="wait">
            <motion.img
              key={photo.id}
              src={photo.url}
              alt={photo.title}
              draggable="false"
              onContextMenu={handleContextMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="max-w-full max-h-[75vh] md:max-h-[85vh] object-contain shadow-2xl"
            />
          </AnimatePresence>
        </div>

        <button 
          onClick={goToNext}
          className="absolute right-mobile-margin md:right-desktop-margin z-10 opacity-0 group-hover:opacity-100 transition-opacity p-4 hover:bg-surface-dim/10"
        >
          <ChevronRight size={32} />
        </button>
      </main>

      {/* Footer Info */}
      <footer className="px-mobile-margin md:px-desktop-margin py-12 border-t border-surface-dim/30">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-xl">
            <div className="text-label-md text-foreground/40">{project?.title} Series</div>
            <h2 className="text-xl font-medium">{photo.title} — {photo.location}</h2>
            {photo.story && (
              <p className="text-foreground/70 leading-relaxed">{photo.story}</p>
            )}
            {photo.exif && (
              <div className="text-label-md text-foreground/40 font-mono">{photo.exif}</div>
            )}
          </div>
          
          <div className="text-label-md text-foreground/40">
            {String(photoIndex + 1).padStart(2, '0')} / {String(allPhotos.length).padStart(2, '0')}
          </div>
        </div>
        
        <div className="mt-12 flex justify-between items-center gap-4 text-[13px] opacity-40">
           <p>© 2026 Zetoon is back — Thomas Le Jouan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Index = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      image: "/lovable-uploads/35f6a41e-c865-4b1b-a995-84b96191e7c8.png",
      title: "Investidor Blindado",
      description: "Plataforma educacional para investimentos seguros"
    },
    {
      id: 2,
      image: "/lovable-uploads/4a898c52-82e8-4997-b981-7646f0b6f1d4.png", 
      title: "Além da Imagem",
      description: "Curso de fotografia profissional"
    },
    {
      id: 3,
      image: "/lovable-uploads/9063e202-ab38-4379-8b40-aac3a32dce39.png",
      title: "Crypto Platform",
      description: "Plataforma de investimentos em criptomoedas"
    },
    {
      id: 4,
      image: "/lovable-uploads/417e1f3f-b36d-4ed1-b328-f4269b136eab.png",
      title: "Insta Domination",
      description: "Curso de marketing digital para Instagram"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {!showGallery ? (
        <motion.section 
          className="relative h-screen flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://i.postimg.cc/3rcsSPnG/Captura-de-tela-2025-01-11-151228.png')" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <motion.button
            className="relative px-8 py-4 text-lg font-medium text-black bg-white rounded-md hover:bg-white/90 transition-transform hover:scale-105"
            onClick={() => setShowGallery(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver projetos Webibox
          </motion.button>
        </motion.section>
      ) : (
        <motion.section 
          className="min-h-screen p-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8 text-white/80">
              <p className="text-lg">Arraste para explorar os projetos</p>
              <span className="animate-bounce">👆</span>
            </div>
            
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="relative min-w-[350px] cursor-pointer overflow-hidden rounded-lg bg-zinc-900 shadow-xl snap-start"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-white/80">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Project preview"
              className="w-full h-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Index;
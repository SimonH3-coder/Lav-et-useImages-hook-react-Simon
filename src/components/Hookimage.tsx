import { useState, useEffect } from "react";

export function useImage() {
  const [images, setImages] = useState<{ name: string; src: string }[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      // Når billeder er i publice mappen.
      const imageModules = import.meta.glob("/public/img/*.{jpg,svg}", { eager: true });

      const imagePaths = Object.keys(imageModules).map((path) => {
        // Fjern '/public/' og filtypen fra stien for at få billednavnet
        const imageName = path.replace("/public/", "").replace(/\.(jpg|svg)$/, "");
        return { name: imageName, src: (imageModules[path] as { default: string }).default };
      });

      setImages(imagePaths);
    };

    loadImages();
  }, []);

  return images;
}

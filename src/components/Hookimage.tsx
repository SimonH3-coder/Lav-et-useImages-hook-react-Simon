import path from "path";
import { useState, useEffect } from "react";

export function Hookimage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imageModules = import.meta.glob("../assets/*.jpg", { eager: true });

      const imagePaths = Object.keys(imageModules).map((path) => {
        // Fjern '../assets/' og '.jpg' fra stien for at få billednavnet
        const imageName = path.replace("../assets/", "").replace(".jpg", "");
        return { name: imageName, src: imageModules[path].default };
      });

      setImages(imagePaths);
    };

    loadImages();
  }, []);

  return images;
}

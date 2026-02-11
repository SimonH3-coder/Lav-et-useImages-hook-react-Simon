import { useImage } from "../components/Hookimage";
import styles from "./Imagecomponent.module.scss";

export function Imagecomponent() {
  const images = useImage();
  return (
    <div className={styles.gallery}>
      <h1>Galleri til billeder</h1>
      <div className={styles.imageGrid}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageCard}>
            <img src={image.src} alt={`Billede ${index + 1}`} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

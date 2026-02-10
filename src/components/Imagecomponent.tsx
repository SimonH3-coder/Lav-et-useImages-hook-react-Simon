import { Hookimage } from "./components/Hookimage";
import styles from "./Imagecomponent.module.scss";

export function Imagecomponent() {
  const images = Hookimage();
  return (
    <div className={styles.gallery}>
      <h1>Galleri til billeder</h1>
      <div className={styles.imageGrid}>
        {images.map((imagePath, index) => (
          <div key={index} className={styles.imageCard}>
            <img src={imagePath} alt={`Billede ${index + 1}`} />
            <p>{imagePath.split("/").pop()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

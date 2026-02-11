import { useImage } from "./components/Hookimage";
import { Imagecomponent } from "./components/Imagecomponent";

import "./App.css";

export function App() {
  const images = useImage();
  return (
    <div>
      {images.map((image) => (
        <Imagecomponent key={image.name} src={image.src} alt={image.name} />
      ))}
    </div>
  );
}

export default App;

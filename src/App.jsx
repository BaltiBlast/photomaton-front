import { useState } from "react";
import CameraPreview from "./components/CameraPreview";
import CaptureButton from "./components/CaptureButton";
import EmailForm from "./components/EmailForm";
import "./styles.css";

function App() {
  const [photo, setPhoto] = useState(null);

  return (
    <div className="photomaton-container">
      <h1 className="title">📸 Kawaii Photomaton 🎀</h1>
      <CameraPreview />
      {photo ? <EmailForm photo={photo} /> : <CaptureButton onCapture={setPhoto} />}
    </div>
  );
}

export default App;

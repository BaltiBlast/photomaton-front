const CaptureButton = ({ onCapture }) => {
  const handleCapture = () => {
    // Ici, on simule une capture (on branchera la vraie caméra plus tard)
    onCapture("fake-photo-url.jpg");
  };

  return (
    <button className="capture-button" onClick={handleCapture}>
      📸 Prendre une photo !
    </button>
  );
};

export default CaptureButton;

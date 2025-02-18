const CameraPreview = () => {
  return (
    <div className="camera-container">
      <video className="camera-feed" autoPlay playsInline></video>
      <div className="frame">🎀 Kawaii Frame 🎀</div>
    </div>
  );
};

export default CameraPreview;

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => (document.getElementById("video").srcObject = stream))
  .catch((error) => console.error("Erreur : ", error));

document.addEventListener("keydown", async (event) => {
  try {
    if (event.code === "Space") {
      const response = await fetch("http://localhost:3000/capture");
      const data = await response.json();

      if (!data.imageUrl) {
        throw new Error("L'URL de l'image est invalide !");
      }
      photo.src = data.imageUrl + "?t=" + new Date().getTime();
    }
  } catch (error) {
    status.textContent = "Erreur de capture";
    console.error(error);
  }
});

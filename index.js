const capture = "http://localhost:3000/capture";

const app = {
  init: () => {
    displayCamera();
    takePicture();
  },

  displayCamera: () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => (document.getElementById("video").srcObject = stream))
      .catch((error) => console.error("Erreur : ", error));
  },

  takePicture: () => {
    document.addEventListener("keydown", async (event) => {
      try {
        if (event.code === "Space") {
          const response = await fetch(capture);
          const data = await response.json();

          if (!data.imageUrl) {
            throw new Error("L'URL de l'image est invalide !");
          }
          photo.src = data.imageUrl + "?t=" + new Date().getTime();
        }
      } catch (error) {
        console.error("Erreur : ", error);
      }
    });
  },
};

const { displayCamera, takePicture } = app;

document.addEventListener("DOMContentLoaded", app.init);

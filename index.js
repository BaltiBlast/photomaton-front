const capture = "http://localhost:3000/capture";
const form = document.getElementById("driveForm");

const app = {
  init: () => {
    displayCamera();
    takePicture();
    addMailToDriveFolder();
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

  addMailToDriveFolder: () => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.getElementById("email").value;

      fetch("http://localhost:3000/add-to-drive", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Email was added !");
            form.reset();
          } else {
            alert("Error adding email  : " + data.message);
          }
        });
    });
  },
};

const { displayCamera, takePicture, addMailToDriveFolder } = app;

document.addEventListener("DOMContentLoaded", app.init);

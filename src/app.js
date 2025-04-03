//console.log("workout-tracker app");
const express = require("express"); // Import express
const app = require('./config/env'); 
const app = express();// Create an instance of express


// Inicializacion del servidor y primera ruta
app.get("/", (req, res) => {
  res.send("Hola mi server en Express");

  app.get("/api", (req, res) => {
    res.send("pagina de informacion");
  });
});

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
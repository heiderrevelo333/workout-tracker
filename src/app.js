const express = require("express"); 
const app = express(); 
const { port } = require('./config/env'); 

// Inicializacion del servidor y primera ruta
app.get("/", (req, res) => {
    res.send("Hola mi server en Express");
});

app.get('/about', (req, res) => {
    res.send('Página de información');
});

// Ruta con un parámetro
app.get('/usuario/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Usuario con ID: ${userId}`);
});

// Ruta con múltiples parámetros
app.get('/blog/:year/:month', (req, res) => {
    const { year, month } = req.params;
    res.send(`Mostrando entradas del blog para ${month}/${year}`);
});

// Ruta que utiliza parámetros query
app.get('/busqueda', (req, res) => {
  // Se acceden los parámetros query a través de req.query
    const { term, page } = req.query;

  // Validamos que se haya enviado el término de búsqueda
    if (!term) {
    return res.send('Debes proporcionar un término de búsqueda (?term=valor)');
    }

    res.send(`Buscando: ${term} en la página: ${page || 1}`);
});


// Inicio del servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
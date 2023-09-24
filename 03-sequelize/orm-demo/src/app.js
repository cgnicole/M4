const express = require("express");
const morgan = require("morgan");

const { Band, Album, Genero } = require("./db");

const server = express();

module.exports = server;

// Configuración CORS
server.use(express.json());
server.use(morgan("dev"));

server.post("/albums", async (req, res) => {
  try {
    const { name, created } = req.body;
    const newAlbum = await Album.create({ name, created });
    res.status(201).json(newAlbum);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

server.get("/albums", async (req, res) => {
  try {
    const albums = await Album.findAll();

    res.status(200).json(albums);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

server.put("/albums/:id", async (req, res) => {
  try {
    const { created } = req.body;
    const { id } = req.params;
    await Album.update(
      { created },
      {
        where: { id },
      }
    );
    const modifiedAlbum = await Album.findByPk(id);
    res.status(200).json(modifiedAlbum);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

server.post("/bands", async (req, res) => {
  try {
    const { name, origin } = req.body;
    const newBand = await Band.create({ name, origin });
    res.status(201).json(newBand);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

server.delete("/bands/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const band = await Band.findByPk(id);

    await band.destroy();
    res.status(200).json({ message: "Banda eliminada correctamente" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

server.get("/generos/bulk", async (req, res) => {
  const generos = [
    {
      type: "pop",
    },
    {
      type: "rock",
    },
    {
      type: "reggae",
    },
    {
      type: "trash",
    },
  ];
  try {
    const allGeneros = await Genero.bulkCreate(generos);
    res.status(200).json(allGeneros);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

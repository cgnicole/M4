const server = require("./app");
const PORT = 3001;
const { sequelize } = require("./db");

// se conecta la base de datos aca

server.listen(PORT, async () => {
  // force true se utiliza para cuando estamos desarollando
  await sequelize.sync({ force: false });
  console.log(`"Server Listenig on http://localhost:${PORT}"`);
});

// El async await se utiliza para iniciar un servidor y asegurarse de que la conexión a la base de datos esté establecida antes de que el servidor comience a escuchar las solicitudes.

// 1. server.listen(PORT, async () => { ... }) indica que el servidor debe comenzar a escuchar las solicitudes en un determinado puerto (representado por PORT).

// 2. async () => { ... } define una función asíncrona, lo que significa que puede contener operaciones que pueden tomar algún tiempo en completarse, como la conexión a la base de datos.

// 3. await sequelize.sync(); se utiliza para esperar a que la sincronización de Sequelize con la base de datos se complete

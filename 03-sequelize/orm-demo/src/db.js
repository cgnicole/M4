const { Sequelize } = require("Sequelize");
const Band = require("../Models/Band");
const Album = require("../Models/Album");
const Genero = require("../Models/Genero");
const Web = require("../Models/Web");

const user = "postgres";
const pass = "sofia123";
const port = "5432";
const dbname = "demo";

// CONECCION BASE DE DATOS

// 1. que DBMS USO, 2.Mi usuario de postgres, 3. Mi contraseña, 3. mi puerto, 4. Mi puerto 4. Base de datos a la que me coonecto

const sequelize = new Sequelize(
  `postgres://${user}:${pass}@localhost:${port}/${dbname}`,
  { logging: false }
);
// ejecucion del modelo

Band(sequelize);
Genero(sequelize);
Album(sequelize);
Web(sequelize);

// metodo de para verificar que la conexion de bs es exitosa por medio de una promesas

sequelize
  .authenticate()
  .then(() => console.log("se logro conectar la base de datos 💖"))
  .catch((error) => console.log(error.message));

// ...sequelize.models: Este es un uso de la sintaxis de desestructuración en JavaScript. sequelize.models hace referencia a un objeto que contiene todos los modelos definidos en Sequelize. Al usar ... antes de sequelize.models, se está expandiendo el objeto sequelize.models y agregando todas sus propiedades al objeto exportado
module.exports = { sequelize, ...sequelize.models };

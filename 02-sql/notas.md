SQL 🖥

- SQL es el lenguaje de consultas utilizado en los sistemas de gestión de bases de datos.
- Un sistema de gestión de bases de datos (SGBD) es una herramienta que permite administrar y manipular bases de datos.
- En una base de datos con SQL, todos los datos se almacenan en una misma base de datos y están conectados.

🗂 Base de datos con aplicación

- Cuando no trabajamos con SQL, podemos tener varias bases de datos y conectarlas entre sí para extraer la información que necesitamos.
- Esta forma de organizar las bases de datos puede resultar más rápida en la lectura de datos.
- Si una base de datos falla, no perdemos toda la información, ya que tenemos varias bases de datos interconectadas.

⌨️ Comandos útiles

- \l: Muestra una lista de las bases de datos creadas.
- \q: Desconecta de una base de datos.
- CREATE DATABASE ejemplo;: Crea una nueva base de datos llamada "ejemplo".
- \c ejemplo: Conecta a la base de datos "ejemplo".
- \dt: Muestra las tablas de la base de datos actual.
- SELECT \* FROM personas;: Obtiene todos los datos de la tabla "personas".
- \d: Muestra la estructura de una tabla.
- CREATE TABLE ejemplo();: Crea una tabla llamada "ejemplo".

- psql -U postgres: me conecto a postgress desde la terminal

CREATE TABLE personas
(
apellido varchar(255) NOT NULL,
nombre varchar(255) UNIQUE,
ciudad integer references ciudades (id)
);

💾 Manipulación de datos

2. INSERT INTO nombreDeLaTabla (atributo) VALUES (...);: Agrega un valor específico a uno de los atributos de la tabla.
3. SELECT \* FROM nombreDeLaTabla WHERE atributo = ...;: Muestra todas las filas de una tabla que coinciden con un atributo específico.
4. DELETE FROM nombreDeLaTabla WHERE atributo = ...;: Elimina las filas de una tabla que coinciden con un atributo específico.

📊 Ejemplo de creación de tabla

CREATE TABLE ciudades (
id serial PRIMARY KEY,
nombre varchar(255) UNIQUE
);

🤝 JOIN

- JOIN permite unir datos de diferentes tablas según una coincidencia.

* Ejemplo de consulta con JOIN:

SELECT personas.nombre, personas.apellido, ciudades.nombre (si queremos traer unos datos específicos de las tablas y luego unirlos en este caso dejando los Aidi por lado y que solamente nos aparezcan nombre apellido y ciudad tendríamos que hacer esto)

SELECT \* FROM personas
JOIN ciudades
ON ciudades.id = personas.ciudad
ORDER BY personas.id ASC;

- ESTO ES LO MISMO QUE ARRIBA - Se hace para que sea mas parctico y corto

SELECT p.nombre, p.apellido, c.nombre as ciudad
FROM personas as p
JOIN ciudades as c
ON c.id = p.ciudad;

- el "AS" en la consulta se utiliza para asignar alias a las columnas y tablas, lo que proporciona nombres alternativos más legibles y facilita la escritura y comprensión de la consulta.

🔐 Primary key y Foreign key

- Primary key (clave primaria): Identifica de manera única cada fila en una tabla. Evita duplicados y permite un acceso rápido a los datos.
- Foreign key (clave foránea): Establece una relación entre tablas al hacer referencia a la primary key de otra tabla. Mantiene la integridad referencial y la consistencia de los datos entre las tablas.

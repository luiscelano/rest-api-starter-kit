# rest-api-starter-kit

Este proyecto contiene todo lo necesario para construir una aplicación de servidor con Node.js y Express.

## Technology Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/es/)
- [express-validator](https://express-validator.github.io/)
- [Sequelize](https://sequelize.org)
- [jsonwebtoken](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [Jest](https://jestjs.io/)

## Cómo instalarlo

Es necesario tener instalado [node](https://nodejs.org/es/download) primero

abre la consóla de comandos y asegurate de estar en el directorio del proyecto `rest-api-starter-kit`

corre el siguiente comando para generar las variables de entorno e instalar los paquetes

windows:

```shell
bash startup.sh
```

mac:

```shell
sh startup.sh
```

correr el proyecto(modo desarrollo):

```shell
npm run start:dev
```

correr el proyecto(modo producción):

```shell
npm run start
```

## Uso de Git

Para usar git, se debe crear una rama especifica para los cambios, y luego se hace un [Pull Request](https://docs.github.com/articles/about-pull-requests) a la rama `main`

## Cómo funciona una REST API

## Autenticación

Cada consulta al servidor, requerirá de una llave por la cual sabrémos que usuario está realizando una petición. Cada sesión se almacenará en una base de datos en Redis y las contraseñas se almacenarán en la base de datos de forma encriptada agregando el método Salt.

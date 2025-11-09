import Sequelize from 'sequelize';
import dotenv from "dotenv";
dotenv.config()

/*para conectar a la base de datos:
Creamos una nueva instancia de sequelize.
new Sequelize()

Luego dentro de esa nueva instancia debemos colocar los parametros que son necesarios para realizar la conexion:

1. Nombre de la base de datos 'agenciaviajes'
2. El usuario definido en la conexion de mysql
3. La contraseña
4. Objeto con las siguientes configuraciones de lugar.
*/

const db = new Sequelize(process.env.DATABASE_URL, {
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;
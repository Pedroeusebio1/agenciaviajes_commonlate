//asi se importaba express en commondjs en nuestro proyecto luego de instalarlo como dependencia de desarrollo en nuestro package.json con npm install express

// const express = require('express'); 

//Actualmente se utiliza imports y exports segun como sigue

import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

//De esta forma utilizamos el framework de express luego de guardarlo en una variable se ejecuta como si es una función

const app = express();

//Conectar la base de datos
db.authenticate()
    .then(()=>console.log('Base de datos conectada') )
    .catch(error => console.log(error))

//Definir puerto
// process.env.PORT es una variable de entorno que no es mas configuraciones externas a nuestro codigo que maneja informaciones entre el sistema operativo y Node.

const port = process.env.PORT || 3000;

//Habilitar PUG ademas de esta sintaxis se debe instalar pug como dependencia de producción con npm install PUG
app.set('view engine', 'pug')

//Obtener el año actual
app.use((req, res, next)=>{ // De esta forma se pasan variables hacia las vistas
    const year = new Date()
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next();
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica
app.use(express.static('public'));

app.use('/', router);

app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})

//Para arrancar el servidor nesecita definirlo en en la parte de script del package.json en la parte de script de esta forma  
// "scripts": {
//    "dev": "nodemon index.js"
//  }

//Nodemon es una depencia de desarrollo que funciona como liveserver en frontend actualizando la pagina automaticamente nodemon hace lo mismo en el servidor y actualiza la terminal.

//Luego en la terminal colocamos el siguiente comando siempre ubicandonos en la carpeta donde se encuentre index.js, colocamos npm run dev

//PS C:\Users\pedro\Programacion\Curso JS Moderno\54-Agencia-De-Viajes> npm run dev asi se veria en terminal ejecutado desde la carpeta correcta.
const express = require('express');
const mongoose = require('mongoose');
const members = require('./Controller/memberController');

//Acceso a la variables de entorno
const app = express();
require("dotenv").config();

//Cadena de conexion a la base de datos segun .env
const conn = process.env.DATABASE_URL;
const port = 8000;

//Conexion a la base de datos
mongoose.connect(conn);
const database=mongoose.connection;

//Verificar la conexion con la base de datos
database.on("error",(error)=>{
    console.log(error);
});

database.once("connected", ()=>{
    console.log("succesfully connected");
});


app.use(express.json());
app.use("/members", members);
app.listen(port, () => {
    console.log('Server running at http://localhost:'+port);
});
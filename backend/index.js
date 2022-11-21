let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

const studentRoute = require("../backend/routes/student.route");
const  db = require("../backend/database/db").mongoURI;


//conexion con base de datos desde mongodb hacia mongoatlas
mongoose
    .connect(db,{useNewUrlParser:true})
    .then(()=>console.log("mongodb conectado satisfactoriamente"))
    .catch((err)=>console.log(err));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true,
}));

app.use(cors());
app.use("/students",studentRoute);

const port = process.env.PORT || 4000; //aqui se establece el puerto en el que trabaja la aplicacion
const server = app.listen(port,()=>{
    console.log("connected to port " + port);
});

app.use(function(err,req,res,next){
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});


let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();
let studentSchema = require("../models/Student");//es un objeto del modelo student

//ruta para crear student
router.route("/create-student").post((req, res, next)=>{
    studentSchema.create(req.body, (error, data)=>{
        if (error) {
            return next(error);
        }else{
            console.log(data);
            res.json(data);
        }
    });
});
 
//ruta para leer student
router.route("/").get((req, res, next)=>{
    // eslint-disable-next-line array-callback-return
    studentSchema.find((error, data)=>{
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

//ruta para obtener un student
router.route("/edit-student/:id").get((req, res, next)=>{
    studentSchema.findById(req.params.id, (error,data)=>{
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

//ruta para actualizar un student
router.route("/update-student/:id").put((req, res, next)=>{
    studentSchema.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body,
        },
        (error, data)=>{
            if (error) {
                console.log(error);
                return next(error);
            } else {
                res.json(data);
                console.log("Estudiante actualizado con exito");
            }
        }
    );
});

//ruta para borrar un student
router.route("/delete-student/:id").delete((req, res, next)=>{
    studentSchema.findByIdAndDelete(req.params.id, (error, data)=>{
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg:data,
            });
        }
    });
});

module.exports=router;
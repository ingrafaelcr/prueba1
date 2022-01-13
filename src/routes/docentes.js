const express= require('express');
const router= express.Router();


const mysqlConnection=require('../database');


router.get('/',(req,res)=>{
mysqlConnection.query('SELECT * FROM prueba',(err,rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


router.get('/:id',(req,res)=>{
    const {id}=req.params;
    mysqlConnection.query('SELECT * FROM prueba WHERE id=?',[id],(err,rows, fields)=>{
            if(!err){
                res.json(rows[0]);
            }else{
                console.log(err);
            }
        });
    });


    router.post('/',(req,res)=>{
        mysqlConnection.query('INSERT INTO prueba set ?', [req.body],(err,rows, fields)=>{
            if(!err){
                res.json({Status:'Guardado'});
            }else{
                console.log(err);
            }
        });
    });


    router.put('/:id',(req,res)=>{
        const {id}=req.params;
        mysqlConnection.query('UPDATE prueba set ? WHERE id=?',[req.body,id],(err,rows, fields)=>{
            if(!err){
                res.json({Status:'Actualizado'});
            }else{
                console.log(err);
            }
        });
    })

    router.delete('/:id',(req,res)=>{
        const {id}=req.params;
        mysqlConnection.query('DELETE FROM prueba WHERE id = ?',[id],(err,rows, fields)=>{
                if(!err){
                    res.json({Status:'eliminado'});
                }else{
                    console.log(err);
                }
            });
        });


module.exports=router;
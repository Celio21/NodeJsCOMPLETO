const { response, request } = require('express');
var terreno=require('./ModelosTerreno');
express=require('express'),
rutas=express.Router();
rutas.post('/obtenerTodos',(request,response)=>{
    terreno.find({},(err,datos)=> {
        if(err){
            console.log(err);
            throw err;
        }
        response.status(200).json(datos);
    })
   
    
})
rutas.post('/crear',(request,response)=>{
    var body=request.body;
    terreno.insertMany({
        idTerreno:body.idTerreno,
        dimencion:body.dimencion,
        barrio:body.barrio,
        callePrincipal:body.callePrincipal
    },(err,resp)=>{
        
        if(err){
            console.log(err);
            throw err;
        }
        response.status(200).json(resp);
    })
   
    
})
rutas.post('/editar',(request,response)=>{
var body=request.body;
terreno.update({idTerreno:body.idTerreno},
    {
        dimencion:body.dimencion,
        barrio:body.barrio,
        callePrincipal:body.callePrincipal
    },(err,resp)=>{
        
        if(err){
            console.log(err);
            throw err;
        }
        response.status(200).json(resp);

    })

})
rutas.post('/eliminar',(request,response)=>{
    var body=request.body;
    terreno.remove({idTerreno:body.idTerreno},(err,resp)=>{
        
        if(err){
            console.log(err);
            throw err;
        }
        response.status(200).json(resp);

    })


})
module.exports=rutas;
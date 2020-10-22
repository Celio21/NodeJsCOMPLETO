node 
var mongoose= require('mongoose');
Schema= mongoose.Schema;
var atributos =new  Schema({
    idTerreno:{type:Number,trim:true},
    dimencion:{type:Number,trim:true},
    barrio:{type:String,trim:true},
    CallePrincipal:{type:String,trim:true},

});
var terreno =mongoose.model('terreno',atributos);
module.exports=terreno;
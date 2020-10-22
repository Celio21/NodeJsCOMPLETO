var mongoose=require('mongoose');
var connection=mongoose.connect('mongodb+srv://admin:admin@cluster0.sgoqi.mongodb.net/Celiodb?retryWrites=true&w=majority');
mongoose.connection.on('open',(ref)=>{
    console.log('Se conecto correctamente ');

});
module.exports=connection;
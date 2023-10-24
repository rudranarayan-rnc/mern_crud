const mongoose=require('mongoose');

const docotrScheema= new mongoose.Schema({
    name:String,
    specialisation:String,
    email:String,
    city:String
})
module.exports=mongoose.model("doctors",docotrScheema);
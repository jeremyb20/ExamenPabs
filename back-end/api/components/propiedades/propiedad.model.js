//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var PropiedadSchema = new mongoose.Schema({
  id:String,
  posistion:String,
  price:String,
  rent:String,
  housecost:String,
  group:String,
  ownedby:String,
  mortgaged:String,
  ohousecost:String,
  oprice:String



});

module.exports = mongoose.model('Propiedade', PropiedadSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
//

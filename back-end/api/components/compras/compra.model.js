//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var CompraSchema = new mongoose.Schema({
  id:{
    type: String,
    unique: true,
    required: true
  },
  namePlayer: String,
  proprietary:String,
  price: String,
  moneyPrincipal:String



});

module.exports = mongoose.model('Compra', CompraSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
//

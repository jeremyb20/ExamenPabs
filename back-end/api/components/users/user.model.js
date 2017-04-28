//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var UserSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  name: String,
  alias:String,
  money: String,
  photo:String,
  bio:String


});

module.exports = mongoose.model('User', UserSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
//

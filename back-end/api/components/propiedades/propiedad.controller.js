//Requerimos el modelo  de usuarios
var Propiedade = require('./propiedad.model.js');
var config = require('../../config/database');

module.exports.comprar = function(req,res){ //exporta el controlador
    var nuevaPropiedad = new Propiedad({
      idPlayer:req.body.idPlayer,
      posistion:req.body.posistion,
      price:req.body.price,
      rent:req.body.rent,
      housecost:req.body.housecost,
      group:req.body.group,
      ownedby:req.body.ownedby,
      mortgaged:req.body.mortgaged,
      ohousecost:req.body.ohousecost,
      oprice:req.body.oprice
    });
console.log(nuevaPropiedad);
    nuevaPropiedad.comprar(function(err){
      if(err){
        res.json({success:false,msg:'la compra ya existe en el sistema.'});
      }else {
        res.json({success:true,msg:'Compra agregada exitosamente'});
      }
    });
}
    //Extraer datos
    module.exports.findAll = function(req, res){
      Propiedade.find().then(function(propiedades){
        res.send(propiedades);
      });
    };




//Requerimos el modelo  de usuarios
var Compra = require('./compra.model.js');
var config = require('../../config/database');


module.exports.save = function(req,res){ //exporta el controlador

    var nuevaCompra = new Compra({
      id:req.body.id,
      namePlayer:req.body.namePlayer,
      proprietary:req.body.proprietary,
      money:req.body.money,
      price:req.body.price,
      moneyPrincipal:req.body.moneyPrincipal,
    });

    nuevaCompra.save(function(err){
      if(err){
        res.json({success:false,msg:'El codigo o usuario ya existe en el sistema.' + err});
      }else {
        res.json({success:true,msg:'Usuario agregado exitosamente'});
      }
    });
}
    //Extraer datos
    module.exports.findAll = function(req, res){
      Compra.find().then(function(compras){
        res.send(compras);
      });
    };

    module.exports.remove = function(req,res){
      console.log(req.body.id);
      Compra.findByIdAndRemove({_id:req.body.id}).then(function(data){
        res.json({success:true,msg:'Se ha eliminado correctamente.'});
      });

    };
    module.exports.update = function(req,res){
      console.log(req.body.id);
      Compra.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
        res.json({success:true,msg:'Se ha actualizado correctamente.'});
      });

}

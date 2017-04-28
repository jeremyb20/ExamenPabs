//Requerimos el modelo  de usuarios
var User = require('./user.model.js');
var config = require('../../config/database');


module.exports.save = function(req,res){ //exporta el controlador

    var nuevaUser = new User({
      id:req.body.id,
      name:req.body.name,
      alias:req.body.alias,
      money:req.body.money,
      photo:req.body.photo,
      bio:req.body.bio
    });

    nuevaUser.save(function(err){
      if(err){
        res.json({success:false,msg:'El codigo o usuario ya existe en el sistema.' + err});
      }else {
        res.json({success:true,msg:'Usuario agregado exitosamente'});
      }
    });
}
    //Extraer datos
    module.exports.findAll = function(req, res){
      User.find().then(function(users){
        res.send(users);
      });
    };

    module.exports.remove = function(req,res){
      console.log(req.body.id);
      User.findByIdAndRemove({_id:req.body.id}).then(function(data){
        res.json({success:true,msg:'Se ha eliminado correctamente.'});
      });

    };
    module.exports.update = function(req,res){
      console.log(req.body.id);
      User.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
        res.json({success:true,msg:'Se ha actualizado correctamente.'});
      });

}



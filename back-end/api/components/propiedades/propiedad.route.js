var express = require('express');
var	router = express.Router();
var propiedadeController = require('./propiedad.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/propiedades')
  .post(function(req, res){
    propiedadeController.save(req,res);
 	});

router.route('/propiedades')
  .get(function(req, res){
    propiedadeController.findAll(req,res);
  });




// Se exporta el modulo
module.exports = router;
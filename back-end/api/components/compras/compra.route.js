var express = require('express');
var	router = express.Router();
var compraController = require('./compra.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/compras')
  .post(function(req, res){
    compraController.comprar(req,res);
 	});

router.route('/compras')
  .get(function(req, res){
    compraController.findAll(req,res);
  });
router.route('/compras/:id')
  .delete(function(req, res){
    compraController.remove(req,res);
 });
router.route('/compras')
  .put(function(req, res){
    compraController.update(req,res);
 	});




// Se exporta el modulo
module.exports = router;
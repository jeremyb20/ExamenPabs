(function(){
  angular
    .module('myApp')
    .controller('compraController', compraController);
    function compraController(comprasService,$scope,propiedadService,usersService){ 
      //se inyecta el service usersService en el controlador para que se tenga acceso
      //controlador
      var comprasCtrl = this;

       comprasCtrl.btnadd = true;
       comprasCtrl.btnedit = false;


      // comprasCtrl.propiedades = propiedadService.getPropiedades(); //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
         comprasService.getUsers()
          .success(function(data){
            comprasCtrl.users = data;

          });

          comprasService.getCompras()
          .success(function(data){
            comprasCtrl.compras = data;

          });
          comprasService.getPropiedades()
          .success(function(data){
            comprasCtrl.propiedades = data;

          });
      }init();
  

      comprasCtrl.save = function(pObjetoCompras){
        var newCompra ={
          id : usersService.setId(),
          namePlayer : comprasCtrl.namePlayer,
          proprietary : comprasCtrl.proprietary ,
          price : propiedadService.getPropiedades(),
          moneyPrincipal : comprasCtrl.moneyPrincipal
        }

        comprasService.setCompras(newCompra)
        .success(function(data){
          console.log(data);
        });

        comprasService.setId(newCompra.id);
        console.log(newCompra);
      }


      comprasCtrl.delete = function(id){
        console.log(id);
        comprasService.deleteUsers(id)
        .success(function(data){
          init();
        })
      }
    }
    
     //se establece un objeto de angular normal


})();
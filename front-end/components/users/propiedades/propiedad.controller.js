(function(){
  angular
    .module('myApp')
    .controller('propiedadController', propiedadController);
    function propiedadController(propiedadService){ 

   	var propiedadCtrl = this;

   function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
         propiedadService.getUsers()
          .success(function(data){
            propiedadCtrl.users = data;

          });

          propiedadService.getCompras()
          .success(function(data){
            propiedadCtrl.compras = data;

          });
          propiedadService.getPropiedades()
          .success(function(data){
            propiedadCtrl.propiedades = data;

          });
     }init();

     	propiedadCtrl.comprar = function(pObjetoCompras){
        var newPropiedad ={
          idPlayer : propiedadCtrl.idPlayer,
          compraNamePlayer : propiedadCtrl.compraNamePlayer,
          name : propiedadService.getPropiedades(),
          price : propiedadService.getPropiedades(),
          moneyPrincipal : propiedadCtrl.moneyPrincipal
        }

        propiedadService.setCompras(newPropiedad)
        .success(function(data){
          console.log(data);
        });

        propiedadService.setId(newPropiedad.idPlayer);
        console.log(newPropiedad);
      }

	}    
     //se establece un objeto de angular normal


})();    	
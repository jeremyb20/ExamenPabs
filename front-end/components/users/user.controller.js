(function(){
  angular
    .module('myApp')
    .controller('userController', userController);
    function userController(usersService,$scope,ImageService,Upload){ 
      //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var usersCtrl = this;
      var url='';

       usersCtrl.btnadd = true;
       usersCtrl.btnedit = false;


      // usersCtrl.propiedades = propiedadService.getPropiedades(); //binding del controlador con el html, solo en el controlador
      usersCtrl.cloudObj=ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
         usersService.getUsers()
          .success(function(data){
            usersCtrl.users = data;

          });

        
      }init();

      var client = filestack.init('AbBWEvegjQauVRz6RWyB6z');
        $scope.showPicker =  function() {
            client.pick({
            }).then(function(result) {
              urlBio=result.filesUploaded[0].url;
              console.log(result);
                console.log(JSON.stringify(result.filesUploaded))
            });
        };

       usersCtrl.presave= function(formulario){
        usersCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(usersCtrl.cloudObj)
          .success(function(data){
            save(data.url, formulario);
          });
       }  

      function save(url, formulario){
        var newUsers ={
          id : usersCtrl.id,
          name : usersCtrl.name,
          alias : usersCtrl.alias,
          money : usersCtrl.money,
          photo : url,
          bio : urlBio
        }

        usersService.setUsers(newUsers)
        .success(function(data){
          console.log(data);

          usersCtrl.id = null;
          usersCtrl.name = null;
          usersCtrl.alias = null;
          usersCtrl.money = null;
          init();


        })
        usersService.setId(newUsers.id);
        console.log(newUsers);

      }


      usersCtrl.delete = function(id){
        console.log(id);
        usersService.deleteUsers(id)
        .success(function(data){
          init();
        })
      }

    }
    
     //se establece un objeto de angular normal


})();
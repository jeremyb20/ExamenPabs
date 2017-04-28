(function(){
  angular
  .module('myApp')
  .service('comprasService', comprasService);

  function comprasService($http){

    var publicAPI = {
      setUsers : _setUsers,
      getUsers : _getUsers,
      setPropiedades : _setPropiedades,
      getPropiedades : _getPropiedades,
      setCompras : _setCompras,
      getCompras : _getCompras,
      deleteUsers : _deleteUsers,
      getId : _getId,
      setId: _setId
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _setUsers(pUser){
      // users.push(pUser);
      // console.log(pUser);
      return $http.post('http://localhost:8000/api/users',pUser);
    }

    function _getUsers(){
      return $http.get('http://localhost:8000/api/users');
    }
    function _setPropiedades(pPropiedad){
      return $http.post('http://localhost:8000/api/propiedades',pPropiedad);
    }

    function _getPropiedades(){
      return $http.get('http://localhost:8000/api/propiedades');
    }

    function _setCompras(pCompra){
      // users.push(pUser);
      console.log(pCompra);
      return $http.post('http://localhost:8000/api/compras',pCompra);
    }
    function _getCompras(){
      return $http.get('http://localhost:8000/api/compras');
    }

    function _deleteUsers(id){
      // console.log(pId)
      return $http.delete('http://localhost:8000/api/compras/' + id);
    }
    function _setId(id){
      return $http.post('http://localhost:8000/api/users'+id);

    }
    function _getId(){
      return $http.get('http://localhost:8000/api/users');
    }
    

 }

})();
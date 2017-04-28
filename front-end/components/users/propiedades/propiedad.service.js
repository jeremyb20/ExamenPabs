(function(){
  angular
  .module('myApp')
  .service('propiedadService', propiedadService);

  function propiedadService($http){

	
var publicAPI = {
    setUsers : _setUsers,
    getUsers : _getUsers,
    setPropiedades : _setPropiedades,
    getPropiedades : _getPropiedades,
    setCompras : _setCompras,
    getCompras : _getCompras,
    setId: _setId,
    getId : _getId
  };

  return publicAPI;


    function _setUsers(pUser){
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
    function _setId(idPlayer){
      return $http.post('http://localhost:8000/api/users'+idPlayer);

    }
    function _getId(){
      return $http.get('http://localhost:8000/api/users');
    }

  }

})();
(function(){
  angular
    .module('myApp')
    .config(configuration);
    function configuration($stateProvider, $urlRouterProvider){ //stateProvider
      $stateProvider
        .state('users',{
          url: '/users',
          templateUrl: 'components/users/user.view.html',
          controller: 'userController',
          controllerAs: 'usersCtrl'
        })
        .state('compras',{
          url: '/compras',
          templateUrl: 'components/users/compras/compra.view.html',
          controller: 'compraController',
          controllerAs: 'comprasCtrl'
        })
        .state('propiedades',{
          url: '/propiedades',
          templateUrl: 'components/users/propiedades/propiedad.view.html',
          controller: 'propiedadController',
          controllerAs: 'propiedadCtrl'
        })
        // .state('task',{
        //   url: '/task',
        //   templateUrl: 'components/principal/tasks/task.view.html',
        //   controller: 'taskController',
        //   controllerAs: 'taskCtrl'
        // })
        $urlRouterProvider.otherwise('/users');
    }
})();
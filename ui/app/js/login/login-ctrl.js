angular.module( 'login', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    templateUrl: 'login/login.tpl',
    controller: 'LoginCtrl'
  } );
} ).controller( 'LoginCtrl', function( $scope, $state, BaseService, localStorageService, Constants, AppUtils ) {
  $scope.loginCtrl = {};
  $scope.submitForm = function( loginForm ) {
    if ( loginForm.$valid ) {
      console.log( " loginForm", loginForm, $scope.loginCtrl.loginDto );
      BaseService.post( "auth/admin", $scope.loginCtrl.loginDto ).then( function success( response ) {
        console.log( " login success", response );
        localStorageService.add( Constants.AUTH_TOKEN, response.data.data.token );
        //localStorageService.add( Constants.USER_LOGIN, response.data.data );
        $state.go( 'dashboard' );
      }, function error( response ) {
        console.error( " login failed", response );
        loginForm.$setPristine();
        $scope.loginCtrl.loginDto = {};
        AppUtils.errorToast( response.data.errorMessage );
      } );
    }
  };
} );

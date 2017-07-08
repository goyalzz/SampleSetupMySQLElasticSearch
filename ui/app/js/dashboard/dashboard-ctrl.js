angular.module( 'dashboard', [] ).config( function ( $stateProvider ) {
  $stateProvider.state( 'dashboard', {
    url : '/dashboard',
    parent : 'home',
    templateUrl : 'dashboard/dashboard.tpl',
    controller : 'DashboardCtrl'
  } );
} ).controller( 'DashboardCtrl', function ( $scope, $http ) {

} );

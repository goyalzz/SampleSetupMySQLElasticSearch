angular.module( 'home', [ 'dashboard', 'course', 'test' ] ).config( function( $stateProvider, Constants ) {
  $stateProvider.state( 'home', {
    url: '/home',
    templateUrl: 'home/home.tpl',
    controller: 'HomeCtrl',
  } );
} ).controller( 'HomeCtrl', function( $scope, $mdSidenav, BaseService, $state, localStorageService, Constants ) {
  $scope.hctrl = {
    removeSideNav: false,
    menu: [ {
      id: 1,
      link: 'dashboard',
      title: 'Dashboard',
      icon: '',
    }, {
      id: 2,
      link: 'all-course',
      title: 'Course Management',
      root: 'all-course',
      icon: '',
    }, {
      id: 3,
      link: 'usr-mgnt',
      title: 'User Management',
      root: 'usr-mgnt',
      icon: '',
    }, {
      id: 4,
      link: 'manage-home',
      title: 'Manage Home Page',
      root: 'manage-home',
      icon: '',
    }, {
      id: 5,
      link: 'referal',
      title: 'Referal',
      root: 'referal',
      icon: '',
    }, {
      id: 6,
      link: 'all-transaction',
      title: 'All Transaction',
      root: 'all-transaction',
      icon: '',
    }, {
      id: 7,
      link: 'discussion-forum',
      title: 'Discussion Forum',
      root: 'discussion-forum',
      icon: '',
    }, {
      id: 8,
      link: 'test',
      title: 'Test',
      root: 'test',
      icon: '',
    } ],
  };
  // side-nav
  $scope.$on( 'removeSideNav', function() {
    $scope.hctrl.removeSideNav = true;
  } );
  /**
   * Supplies a function that will continue to operate until the
   * time is up.
   */
  function debounce( func, wait, context ) {
    var timer;
    return function debounced() {
      var context = $scope,
        args = Array.prototype.slice.call( arguments );
      $timeout.cancel( timer );
      timer = $timeout( function() {
        timer = undefined;
        func.apply( context, args );
      }, wait || 10 );
    };
  }
  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  function buildDelayedToggler( navID ) {
    return debounce( function() {
      $mdSidenav( navID ).toggle().then( function() {} );
    }, 200 );
  }

  function buildToggler( navID ) {
    return function() {
      $mdSidenav( navID ).toggle().then( function() {} );
    };
  }
  $scope.closeSideNav = function() {
    $mdSidenav( 'left' ).close().then( function() {} );
  };
  $scope.onClickMenu = function() {
    $mdSidenav( 'left' ).toggle();
  };
  $scope.toggleLeft = buildDelayedToggler( 'left' );
  $scope.lockLeft = true;
  $scope.toggleLock = function( isTrue ) {
    if ( isTrue ) {
      $scope.lockLeft = !$scope.lockLeft;
    }
  };
  BaseService.post( 'auth/validate-token', {} ).then( function success( response ) {
    $scope.user = response.data.data;
  }, function error( response ) {
    $state.go( 'login' );
  } );
  $scope.logout = function() {
    localStorageService.remove( Constants.AUTH_TOKEN );
    $state.go( 'login' );
  };
} ).controller( 'LeftCtrl', function( $scope, $timeout, $mdSidenav, $log ) {
  $scope.close = function() {
    $mdSidenav( 'left' ).close().then( function() {} );
  };
} );

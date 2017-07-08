angular.module( 'app', [ 'ui.router', 'md.data.table', 'constants', 'login', 'home', 'ngMessages', 'ngMaterial',
  'ngAnimate', 'templates', 'LocalStorageModule'
] ).config( function ( $locationProvider, $mdThemingProvider, $urlRouterProvider, $httpProvider ) {

  $locationProvider.html5Mode( true );
  $urlRouterProvider.otherwise( '/home/dashboard' );
  $httpProvider.interceptors.push( 'SessionInjector' );
  $httpProvider.interceptors.push( 'ResponseInterceptor' );
  var customPrimary = {
    '50' : '#404040',
    '100' : '#333333',
    '200' : '#262626',
    '300' : '#1a1a1a',
    '400' : '#0d0d0d',
    '500' : '#000000',
    '600' : '#000000',
    '700' : '#000000',
    '800' : '#000000',
    '900' : '#000000',
    'A100' : '#4d4d4d',
    'A200' : '#595959',
    'A400' : '#666666',
    'A700' : '#000000'
  };
  $mdThemingProvider.definePalette( 'customPrimary', customPrimary );
  var customAccent = {
    '50' : '#794f05',
    '100' : '#925e06',
    '200' : '#aa6e07',
    '300' : '#c37e08',
    '400' : '#db8e09',
    '500' : '#f49e0a',
    '600' : '#f7b239',
    '700' : '#f8bb52',
    '800' : '#f9c56a',
    '900' : '#face83',
    'A100' : '#f7b239',
    'A200' : '#f6a821',
    'A400' : '#f49e0a',
    'A700' : '#fbd89c'
  };
  $mdThemingProvider.definePalette( 'customAccent', customAccent );
  var customWarn = {
    '50' : '#ffb280',
    '100' : '#ffa266',
    '200' : '#ff934d',
    '300' : '#ff8333',
    '400' : '#ff741a',
    '500' : '#ff6400',
    '600' : '#e65a00',
    '700' : '#cc5000',
    '800' : '#b34600',
    '900' : '#993c00',
    'A100' : '#ffc199',
    'A200' : '#ffd1b3',
    'A400' : '#ffe0cc',
    'A700' : '#803200'
  };
  $mdThemingProvider.definePalette( 'customWarn', customWarn );
  var customBackground = {
    '50' : '#ffffff',
    '100' : '#ffffff',
    '200' : '#ffffff',
    '300' : '#ffffff',
    '400' : '#ffffff',
    '500' : '#ffffff',
    '600' : '#f2f2f2',
    '700' : '#e6e6e6',
    '800' : '#d9d9d9',
    '900' : '#cccccc',
    'A100' : '#ffffff',
    'A200' : '#ffffff',
    'A400' : '#ffffff',
    'A700' : '#bfbfbf'
  };
  $mdThemingProvider.definePalette( 'customBackground', customBackground );
  $mdThemingProvider.theme( 'default' ).primaryPalette( 'customPrimary' ).accentPalette( 'customAccent' ).warnPalette(
      'customWarn' ).backgroundPalette( 'customBackground' );
} ).run( [
  function () {
  }
] );

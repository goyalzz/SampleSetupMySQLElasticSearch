var app = angular.module( 'app' );
app.factory( 'SessionInjector', [ '$q', 'localStorageService', 'Constants', '$rootScope',
  function( $q, localStorageService, Constants, $rootScope ) {
    var sessionInjector = {
      request: function( config ) {
        $rootScope.$broadcast( 'loadingStarted', {} );
        if ( localStorageService.get( Constants.AUTH_TOKEN ) && ( config.url.indexOf( 'facebook.com' ) == -1 ) &&
          ( config.url.indexOf( 'maps.googleapis.com' ) == -1 ) ) {
          config.headers[ Constants.AUTH_TOKEN ] = localStorageService.get( Constants.AUTH_TOKEN );
        } else {
          if ( ( config.url.indexOf( 'maps.googleapis.com' ) > -1 ) || ( config.url.indexOf( 'facebook.com' ) >
              -1 ) ) {
            config.headers = [];
          }
        }
        return config;
      }
    };
    return sessionInjector;
  }
] );
app.factory( 'ResponseInterceptor', [ '$q', '$injector', '$rootScope',
  function( $q, $injector, $rootScope ) {
    return {
      response: function( response ) {
        $rootScope.$broadcast( 'loadingFinished', {} );
        // do something on success
        return response;
      },
      responseError: function( response ) {
        $rootScope.$broadcast( 'loadingFinished', {} );
        // do something on error
        var status = response.status;
        if ( status === 401 || status === 403 ) {
          $injector.get( '$state' ).go( 'login' );
        }
        return $q.reject( response );
      }
    };
  }
] );

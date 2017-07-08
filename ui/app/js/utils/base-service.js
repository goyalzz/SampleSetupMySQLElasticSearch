angular.module( 'app' ).factory( 'BaseService', [ '$http', 'Constants', 'localStorageService', function( $http,
  Constants, localStorageService ) {
  return {
    post: function( url, data ) {
      return $http.post( Constants.APP_URL + url, data );
    },
    get: function( url, data ) {
      return $http.get( Constants.APP_URL + url, data );
    },
    put: function( url, data ) {
      return $http.put( Constants.APP_URL + url, data );
    },
    delete: function( url, data ) {
      return $http.delete( Constants.APP_URL + url, data );
    }
  };
} ] );

angular.module( 'app' ).factory( 'HomeService', [ 'Constants', 'BaseService', '$q', 'AppUtils', '$http', '$state',
  function( Constants, BaseService, $q, AppUtils, $http, $state ) {
    return {
      uploadSingleImage: function( file ) {
        var defer = $q.defer();
        $http.post( Constants.APP_URL + 'upload', file, {
          transformRequest: angular.identity,
          headers: {
            'Content-Type': undefined
          }
        } ).success( function( response ) {
          if ( response && response.data && response.data[ 0 ] ) {
            AppUtils.successToast( 'Image uploaded successfully.' );
            defer.resolve( response );
          } else {
            AppUtils.errorToast( "Unable to upload image." );
            defer.reject( response );
          }
        } ).error( function( response ) {
          AppUtils.errorToast( response.errorMessage );
          defer.resolve( response );
        } );
        return defer.promise;
      },
      uploadImage: function( file ) {
        var defer = $q.defer();
        $http.post( Constants.APP_URL + 'upload/multi', file, {
          transformRequest: angular.identity,
          headers: {
            'Content-Type': undefined
          }
        } ).success( function( response ) {
          if ( response && response.data && response.data[ 0 ] ) {
            AppUtils.successToast( 'Image uploaded successfully.' );
            defer.resolve( response );
          } else {
            AppUtils.errorToast( "Unable to upload image." );
            defer.reject( response );
          }
        } ).error( function( response ) {
          AppUtils.errorToast( response.errorMessage );
          defer.resolve( response );
        } );
        return defer.promise;
      }
    };
  }
] );

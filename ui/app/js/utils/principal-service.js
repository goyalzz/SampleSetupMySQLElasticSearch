angular.module( 'app' ).factory( 'Principal', function Principal( HomeService ) {
  var user;
  return {
    setUser: function( userObject ) {
      if ( userObject ) {
        user = userObject;
        return user;
      }
    },
    getUser: function() {
      if ( user ) {
        return user;
      }
    },
    getUserRole: function() {
      if ( user && user.role ) {
        return user.role;
      }
      return false;
    }
  };
} );

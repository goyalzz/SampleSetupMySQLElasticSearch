angular.module( 'app' ).service( 'AppUtils', [ '$mdToast', '$mdDialog',
  function ( $mdToast, $mdDialog ) {
    var self = this;
    self.successToast = function ( msg ) {
      if ( !msg ) {
        return;
      }
      $mdToast.show( {
        template : '<md-toast class="successToast">' + msg + '</md-toast>',
        hideDelay : 6000,
        position : 'top right'
      } );
    };
    self.errorToast = function ( msg ) {
      if ( !msg ) {
        return;
      }

      $mdToast.show( {
        template : '<md-toast class="errorToast">' + msg + '</md-toast>',
        hideDelay : 6000,
        position : 'bottom right'
      } );
    };
    self.showConfirmation = function ( dialogText, successCallBack, errorCallBack, OkButtonText, CancelButtonText ) {
      var dialogBoxText = dialogText || "Are you sure?";
      var successFun = successCallBack || function () {
          };
      var errorFun = errorCallBack || function () {
          };
      var OkText = OkButtonText || "Ok";
      var CancelText = CancelButtonText || "Cancel";
      var confirm = $mdDialog.confirm()
          .title( dialogBoxText )
          .ariaLabel( 'Lucky day' )
          .targetEvent( event )
          .ok( OkText )
          .cancel( CancelText );
      $mdDialog.show( confirm ).then( successFun, errorFun );

    };
    self.showDialogue = function ( options ) {
      $mdDialog.show( options );
    };
  }
] );
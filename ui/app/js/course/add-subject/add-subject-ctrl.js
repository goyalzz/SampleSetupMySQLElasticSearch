angular.module( 'add-subject', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'add-subject', {
    url: '/add-subjects/:id',
    parent: 'course',
    templateUrl: 'course/add-subject/add-subject.tpl',
    controller: 'AddSubjectCtrl',
  } );
} ).controller( 'AddSubjectCtrl', function( $scope, HomeService, BaseService, AppUtils, CourseService, $stateParams ) {
  $scope.submitSubjectForm = submitSubjectForm;
  $scope.addSubjectCtrl = {
    subjectDto: {
      courseId: $stateParams.id
    }
  };

  function submitSubjectForm( form ) {
    if ( form.$valid ) {
      CourseService.submitSubjectForm( $scope.addSubjectCtrl.subjectDto ).then( function( response ) {
        if ( response.status ) {
          console.log( "subject create" );
          $scope.addSubjectCtrl.subjectDto = {};
          $state.go( "manage-subject" );
        }

        function error( response ) {
          console.error( "subject create failed", response, $scope.addSubjectCtrl.subjectDto );
        }
      } );
    }
  }
  // $scope.submitSubjectForm = function( addSubjectForm ) {
  //   if ( addSubjectForm.$valid ) {
  //     console.log( " addSubjectForm", addSubjectForm, $scope.createSubject.subjectDto );
  //     BaseService.post( "subject/create/", $scope.createSubject.subjectDto ).then( function success( response ) {
  //       console.log( " create success", response );
  //     }, function error( response ) {
  //       console.error( " create failed", response );
  //       $scope.createSubject.subjectDto = {};
  //       AppUtils.errorToast( response.data.errorMessage );
  //     } );
  //   }
  // };
} );

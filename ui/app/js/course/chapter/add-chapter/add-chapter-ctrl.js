angular.module( 'add-chapter', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'add-chapter', {
    url: '/add-chapter/:id',
    parent: 'course',
    templateUrl: 'course/chapter/add-chapter/add-chapter.tpl',
    controller: 'AddChapterCtrl',
  } );
} ).controller( 'AddChapterCtrl', function( $scope, HomeService, BaseService, AppUtils, CourseService, $stateParams ) {
  $scope.submitChapterForm = submitChapterForm;
  $scope.addChapterCtrl = {
    chapterDto: {
      subjectId: $stateParams.id
    }
  };

  function submitChapterForm( form ) {
    if ( form.$valid ) {
      CourseService.submitChapterForm( $scope.addChapterCtrl.chapterDto ).then( function( response ) {
        if ( response.status ) {
          console.log( "subject create" );
        }

        function error( response ) {
          console.error( "subject create failed", response, $scope.addChapterCtrl.chapterDto );
        }
      } );
    }
  }
} );

angular.module( 'chapter', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'chapter', {
    url: '/manage-subject/chapter/:id',
    parent: 'course',
    templateUrl: 'course/chapter/chapter.tpl',
    controller: 'ChapterCtrl',
    resolve: {
      chapters: [ 'CourseService', '$stateParams',
        function( CourseService, $stateParams ) {
          return CourseService.getChapters( $stateParams.id, 0, 10 );
        }
      ]
    }
  } );
} ).controller( 'ChapterCtrl', function( $scope, HomeService, $stateParams, chapters ) {
  $scope.chapterCtrl = {
    chapters: chapters.data.content || {},
    totalElements: chapters.data.totalElements,
    totalPages: chapters.data.totalPages,
    subjectId: $stateParams.id
  };
  console.log( "chapters",chapters );
} );

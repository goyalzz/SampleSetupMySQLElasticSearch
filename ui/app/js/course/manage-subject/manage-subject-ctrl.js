angular.module( 'manage-subject', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'manage-subject', {
    url: '/manage-subject/:id',
    parent: 'course',
    templateUrl: 'course/manage-subject/manage-subject.tpl',
    controller: 'ManageSubjectCtrl',
    resolve: {
      subjects: [ 'CourseService', '$stateParams',
        function( CourseService, $stateParams ) {
          console.log( $stateParams );
          return CourseService.getSubjects( $stateParams.id, 0, 10 );
        }
      ]
    }
  } );
} ).controller( 'ManageSubjectCtrl', function( $scope, HomeService, subjects, $stateParams ) {
  $scope.manageSubjectCtrl = {
    subjects: subjects.data.content || {},
    totalElements: subjects.data.totalElements,
    totalPages: subjects.data.totalPages,
    courseId: $stateParams.id
  };
  console.log( "Subjects", subjects );
} );

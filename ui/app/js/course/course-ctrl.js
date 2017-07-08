angular.module( 'course', [ 'all-course', 'create-course', 'manage-subject', 'add-subject', 'chapter', 'add-chapter' ] )
  .config( function( $stateProvider ) {
    $stateProvider.state( 'course', {
      url: '/course',
      parent: 'home',
      abstract: true,
      templateUrl: 'course/course.tpl',
      controller: 'CourseCtrl'
    } );
  } ).controller( 'CourseCtrl', function( $scope ) {} );

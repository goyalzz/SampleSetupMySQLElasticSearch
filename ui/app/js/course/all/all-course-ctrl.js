angular.module( 'all-course', [] ).config( function ( $stateProvider ) {
  $stateProvider.state( 'all-course', {
    url : '/all',
    parent : 'course',
    templateUrl : 'course/all/all-course.tpl',
    controller : 'AllCourseCtrl',
    resolve : {
      courses : [ 'BaseService', function ( BaseService ) {
        return BaseService.get( 'course/all/' + 0 + "/" + 10 );
      } ]
    }
  } );
} ).controller( 'AllCourseCtrl', [ '$scope', 'courses', 'BaseService', function ( $scope, courses, BaseService ) {

  var COURSE_URL = 'course/';
  console.log( "courses :", courses );
  $scope.deleteCourse = deleteCourse;
  $scope.allCourseCtrl = {
    courses : courses.data.data.content || [],
    totalElements : courses.data.data.totalElements,
    totalPages : courses.data.data.totalPages
  };

  function deleteCourse( index, id ) {
    var flag = confirm( " Are you sure!" );
    if ( flag ) {
      BaseService.delete( COURSE_URL + id ).then( function success( response ) {
        if ( response.data.status ) {
          $scope.allCourseCtrl.courses.splice( index, 1 );
        }
      }, function error( response ) {
        console.error( "error while delete course", response );
      } );
    }
  }
} ] );

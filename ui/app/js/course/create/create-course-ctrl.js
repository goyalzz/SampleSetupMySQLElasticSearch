angular.module( 'create-course', [] ).config( function ( $stateProvider ) {
  $stateProvider.state( 'create-course', {
    url : '/:id',
    parent : 'course',
    templateUrl : 'course/create/create-course.tpl',
    controller : 'CreateCourseCtrl',
    resolve : {
      course : [ 'BaseService', '$stateParams', function ( BaseService, $stateParams ) {
        if ( $stateParams.id !== 'new' ) {
          return BaseService.get( 'course/' + $stateParams.id );
        } else {
          return null;
        }
      } ]
    }
  } );
} ).controller( 'CreateCourseCtrl', function ( $scope, $state, BaseService, AppUtils, course, $q ) {

  var COURSE_URL = 'course/';
  console.log( 'cours eis ', course );
  $scope.uploadImage = uploadImage;
  $scope.createCourseCtrl = {};
  $scope.save = save;

  if ( course === null ) {
    $scope.createCourseCtrl.courseDetails = {};
  } else {
    $scope.createCourseCtrl.courseDetails = course.data.data;
  }

  function save( form, course ) {
    if ( form.$valid ) {
      console.log( course );
      if ( course.id ) {
        editCourse( course ).then( function () {
          $state.go( 'all-course' );
        } );
      } else {
        addNewCourse( course ).then( function () {
          $state.go( 'all-course' );
        } );
      }
    }
  }

  function addNewCourse( course ) {
    var defer = $q.defer();
    BaseService.post( COURSE_URL, course ).then( function ( response ) {
      defer.resolve( response );
    }, function ( error ) {
      console.error( "error occured while create course!", error );
      defer.reject( error );
    } );
    return defer.promise;
  }

  function editCourse( course ) {
    var defer = $q.defer();
    BaseService.put( COURSE_URL, course ).then( function ( response ) {
      defer.resolve( response );
    }, function ( error ) {
      console.error( "error occured while create course!", error );
      defer.reject( error );
    } );
    return defer.promise;
  }

  function uploadImage( file ) {
    var fd = new FormData();
    for ( var i = 0 ; i < file.length ; i++ ) {
      fd.append( "file", file[ i ], file[ i ].name );
    }
    $scope.createCourseCtrl.isFileUploading = true;
    HomeService.uploadSingleImage( fd ).then( function ( response ) {
      $scope.createCourseCtrl.isFileUploading = false;
      if ( response && response.status && response.data ) {
        $scope.createCourseCtrl.courseDto.imageUrl = response.data;
      }
    }, function ( error ) {
      $scope.createCourseCtrl.isFileUploading = false;
    } );
  }
} );

angular.module( 'app' ).factory( 'CourseService', [ 'Constants', 'BaseService', '$mdToast', '$q', 'AppUtils',
  function( Constants, BaseService, $mdToast, $q, AppUtils ) {
    return {
      getCourses: function( page, limit ) { // User will get all Courses.
        var defer = $q.defer();
        var url = 'course/all/' + page + "/" + limit;
        BaseService.get( url ).success( function( response ) {
          defer.resolve( response );
        } ).error( function( response ) {
          AppUtils.errorToast( response.errorMessage );
          defer.resolve( response );
        } );
        return defer.promise;
      },
      submitCourseForm: function( createForm ) { // User will be able to create course.
        var defer = $q.defer();
        BaseService.post( 'course/add', createForm ).success( function( response ) {
          console.log( "success----" );
          AppUtils.successToast( createForm + ' successfully registered!' );
          // state.go( 'all-course' );
          defer.resolve( response );
        } ).error( function( response ) {
          console.log( "error------" );
          AppUtils.errorToast( response.errorMessage );
          defer.resolve( response );
        } );
        return defer.promise;
      },
      getSubjects: function( courseId, pageNo, pageSize ) { // User will get all Subjects.
        var defer = $q.defer();
        var url = 'subject/all/' + courseId + "/" + pageNo + "/" + pageSize;
        BaseService.get( url ).success( function( response ) {
          defer.resolve( response );
        } ).error( function( response ) {
          AppUtils.errorToast( response.errorMessage );
          defer.resolve( response );
        } );
        return defer.promise;
      },
      submitSubjectForm: function( createForm ) { // User will be able to create Subject.
        var defer = $q.defer();
        BaseService.post( 'subject/create/', createForm ).success( function( response ) {
          console.log( "success----Subjects" );
          AppUtils.successToast( createForm + ' successfully Created subjects!' );
          // state.go( 'all-course' );
          defer.resolve( response );
        } ).error( function( response ) {
          console.log( "error------" );
          AppUtils.errorToast( response.errorMessage );
          defer.resolve( response );
        } );
        return defer.promise;
      },
      getChapters: function( subjectId, page, size ) { // User will get all chapters.
        var defer = $q.defer();
        var url = 'chapter/all/' + subjectId + "/" + page + "/" + size;
        BaseService.get( url ).success( function( response ) {
          defer.resolve( response );
        } ).error( function( response ) {
          AppUtils.errorToast( response.errorMessage );
          defer.resolve( response );
        } );
        return defer.promise;
      },
      submitChapterForm: function( createForm ) { // User will be able to create chapter.
        var defer = $q.defer();
        BaseService.post( 'chapter/add/', createForm ).success( function( response ) {
          console.log( "success----chapter" );
          AppUtils.successToast( createForm + ' successfully Created chapter!' );
          // state.go( 'all-course' );
          defer.resolve( response );
        } ).error( function( response ) {
          console.log( "error------" );
          AppUtils.errorToast( response.errorMessage );
          defer.resolve( response );
        } );
        return defer.promise;
      },
      delCourse: function( id ) { // User will be able to create chapter.
        var defer = $q.defer();
        var url = 'course/' + id;
        BaseService.delete( url ).success( function( response ) {
          console.log( "Course is Deleted successfully" );
          AppUtils.successToast( createForm + ' successfully Created chapter!' );
          // state.go( 'all-course' );
          defer.resolve( response );
        } ).error( function( response ) {
          console.log( "error------" );
          AppUtils.errorToast( response.errorMessage );
          defer.resolve( response );
        } );
        return defer.promise;
      }
    };
  }
] );

angular.module( 'test', [] ).config( function ( $stateProvider ) {
  $stateProvider.state( 'test', {
    url : '/test',
    parent : 'home',
    templateUrl : 'test/test.tpl',
    controller : 'TestCtrl'
  } );
} ).controller( 'TestCtrl', function ( $scope ) {
  $scope.testCtrl = {
    // testDto: {
    //   val: $scope.testCtrl.testDto.question
    // }
  };
  var MQ = MathQuill.getInterface( 2 );
  var problemSpan = document.getElementById( 'problem' );

  MQ.StaticMath( problemSpan );
  var answerSpan = document.getElementById('answer');
  var answerMathField = MQ.MathField(answerSpan, {
    spaceBehavesLikeTab: true,
    handlers: {
      edit: function() {
        problemSpan.textContent = answerMathField.latex(); // Get entered math in LaTeX format
      }
    }
  });


  $scope.quesList = [ {
    quesText : 'Q1. abs',
    done : false
  } ];
  $scope.submitForm = function () {
    $scope.quesList.push( {
      quesText : $scope.quesInput,
      done : false
    } );
    $scope.quesInput = "";
  };
} );

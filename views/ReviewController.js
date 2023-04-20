app.controller('ReviewController', function($scope, $http) {
    $scope.submitReview = function() {
      $http.post('/submit-review', $scope.review).then(function(response) {
        console.log(response);
      }, function(error) {
        console.log(error);
      });
    };
  });
  
  
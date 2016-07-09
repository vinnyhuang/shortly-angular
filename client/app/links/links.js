angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  Links.getAll()
    .then(function(links) {
      console.log('links', links);
      $scope.data.links = links;
    });

  $scope.search = function(link) {
    // if (!$scope.query || (item.brand.toLowerCase().indexOf($scope.query) != -1) || (item.model.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ){
    if (!$scope.query || link.title.toLowerCase().indexOf($scope.query) !== -1
                      || link.url.toLowerCase().indexOf($scope.query) !== -1
                      || link.code.toLowerCase().indexOf($scope.query) !== -1) {
      return true;
    }
    return false;
  };

});

// angular.module('myFilters', [])
//   .filter('titleurl', function() {
//     return function(links) {
//       return links.filter(function())
//     }
//   })


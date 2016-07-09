angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(longLink) {
    console.log('before add');
    Links.addOne(longLink);
    console.log('added');
  };
});

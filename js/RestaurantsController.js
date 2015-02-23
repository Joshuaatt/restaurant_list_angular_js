bestRestaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = []
  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName },
                            { type: $scope.restaurantType },
                            { price: $scope.restaurantPrice }
    );
    $scope.restaurantName = null;
    $scope.restaurantType = null;
    $scope.restaurantPrice = null;
  };

  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant)
    $scope.restaurants.splice(index, 1);
  };
});

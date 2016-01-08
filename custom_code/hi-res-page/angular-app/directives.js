var hiresDisplay = angular.module("hiresDisplay", []);

hiresDisplay.directive('hiResArray', function() {
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/hi-res-page/angular-app/elements/hi-res-array.html',
		controller: 'HiResInfo',
		controllerAs: 'ctrl'
	};
});

hiresDisplay.directive('hiResImage', function() {
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/hi-res-page/angular-app/elements/hi-res-image.html',
		controller: 'HiResInfo',
		controllerAs: 'ctrl'
	};
});

hiresDisplay.controller('HiResInfo', ["$http", "$scope", "$routeParams", "$location", function($http, $scope, $routeParams, $location) {
	$http.get('http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/hi-res-page/angular-app/api.php').success(function(data) {
		$scope.pictures = data;
		$scope.whichImageId = $routeParams.imageId;		
	});
}]);
var expertsDisplay = angular.module("expertsDisplay", []);

expertsDisplay.directive('expertsArray', function() {
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/experts-guide/angular-app/elements/experts-array.html',
		controller: 'ExpertsInfo',
		controllerAs: 'ctrl'
	};
});

expertsDisplay.directive('expertsProfile', function() {
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/experts-guide/angular-app/elements/experts-profile.html',
		controller: 'ExpertsInfo',
		controllerAs: 'ctrl'
	};
});

expertsDisplay.controller('ExpertsInfo', function($http, $scope, $routeParams, $location) {
	$http.get('http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/experts-guide/angular-app/api.php').success(function(data) {
		$scope.experts = data;
		$scope.whichExpertId = $routeParams.expertId;		
		$scope.whichExpert = $routeParams.expertName;
	});
});
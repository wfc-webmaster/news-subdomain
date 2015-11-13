var magazineControllers = angular.module("magazineControllers", ['ngSanitize']);

magazineControllers.controller("SummaryController", function($scope, $http, $timeout){
	$http.get('http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/magazine-archives/api.php').success(function(data) {
             // here the data from the api is assigned to a variable named users             
        $scope.magazineissues = data;
        $scope.orderMagazineIssues = 'id';
        $scope.direction = 'reverse';
    });
});

magazineControllers.controller("FullArticleController", function($scope, $http, $timeout, $routeParams){
	$http.get('http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/magazine-archives/api.php').success(function(data) {
            // here the data from the api is assigned to a variable named users
        $scope.magazineissues = data;
        $scope.whichItem = $routeParams.itemId;
    });
});
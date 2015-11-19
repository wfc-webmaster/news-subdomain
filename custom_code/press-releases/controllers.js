var pressControllers = angular.module("pressControllers", ['ngSanitize']);

pressControllers.controller("SummaryController", function($scope, $http, $timeout){
	$http.get('http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/press-releases/api.php').success(function(data) {
            // here the data from the api is assigned to a variable named users
        $scope.pressreleases = data;
        $scope.orderPressReleases = 'id';
        $scope.direction = 'reverse';

        //Create pagination
        $scope.currentPage = 0;
        $scope.pageSize = 20;

        $scope.setCurrentPage = function(currentPage) {
            $scope.currentPage = currentPage;
        };

        $scope.numberOfPages = function() {
            return Math.ceil($scope.pressreleases.length / $scope.pageSize);
        };

        $scope.getNumberAsArray = function (num) {
            return new Array(num);
        };


        console.log('Total pages: ' + $scope.numberOfPages());
        console.log('Current page: ' + $scope.currentPage);
        console.log('Number as array: ' + $scope.getNumberAsArray($scope.numberOfPages()));
        console.log('Start from: ' + $scope.currentPage * $scope.pageSize);

    });
});

pressControllers.controller("FullArticleController", function($scope, $http, $timeout, $routeParams){
	$http.get('http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/press-releases/api.php').success(function(data) {
            // here the data from the api is assigned to a variable named users
        $scope.pressreleases = data;
        $scope.whichRelease = $routeParams.releaseId;
    });
});
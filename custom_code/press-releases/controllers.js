var pressControllers = angular.module("pressControllers", ['ngSanitize']);

pressControllers.controller("SummaryController", function($scope, $http, $timeout, $location, $anchorScroll){
	$http.get('http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/press-releases/api.php').success(function(data) {
            // here the data from the api is assigned to a variable named users
        $scope.pressreleases = data;
        $scope.orderPressReleases = 'id';
        $scope.direction = 'reverse';

        //Create pagination
        $scope.currentPage = 0;
        $scope.pageSize = 15;

        $scope.setCurrentPage = function(currentPage) {
            $scope.currentPage = currentPage;
        };

        $scope.numberOfPages = function() {
            return Math.ceil($scope.pressreleases.length / $scope.pageSize);
        };

        $scope.getNumberAsArray = function(num) {
            var numbers = [];
            for(var i = 1; i <= num; i++){
                numbers.push(i);
            };
                return numbers;
        };

        $scope.scrollToHash = function(hashId) {
            $location.hash(hashId);
            $anchorScroll();
            console.log('You Clicked It.');
        };

        $scope.pages = $scope.getNumberAsArray($scope.numberOfPages());        
    });
});

pressControllers.controller("FullArticleController", function($scope, $http, $timeout, $routeParams){
	$http.get('http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/press-releases/api.php').success(function(data) {
            // here the data from the api is assigned to a variable named users
        $scope.pressreleases = data;
        $scope.whichRelease = $routeParams.releaseId;
    });
});
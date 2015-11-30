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


        $scope.numberOfPages = function(dataScope) {
            return Math.ceil(dataScope.length / $scope.pageSize);
        };

        $scope.getNumberAsArray = function(num) {
            var numbers = [];
            for(var i = 1; i <= num; i++){
                numbers.push(i);
            };
                return numbers;
        };
        
        $scope.scrollToTop = function() {
            $anchorScroll();            
        };

        $scope.setCurrentPage = function(currentPage) {
            $scope.currentPage = currentPage;

            if ($scope.currentPage === -1) {
                $scope.currentPage = 0;
            };

            if ($scope.currentPage >= $scope.pageLimit-1) {
                $scope.currentPage = $scope.pageLimit-1;                       
            }; 

            $scope.goToPage = currentPage+1;         
        };

        $scope.currentGoToPage = 1;

        $scope.goToPage = 0;
        
        $scope.pageLimit = $scope.numberOfPages($scope.pressreleases);

        $scope.$watch('goToPage', function(newValue, oldValue){
            
            $scope.currentGoToPage = newValue;
            
            if ($scope.goToPage === null || $scope.goToPage < 1) {
                $scope.goToPage = 1;
            };

            if ($scope.goToPage > $scope.pageLimit) {
                $scope.goToPage = $scope.pageLimit;
            };

        });

        $scope.$watch("currentGoToPage", function(newValue, oldValue) {
                $scope.currentPage = newValue-1;
            });

        $scope.pages = $scope.getNumberAsArray($scope.numberOfPages($scope.pressreleases));        
    });
});

pressControllers.controller("FullArticleController", function($scope, $http, $timeout, $routeParams){
	$http.get('http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/press-releases/api.php').success(function(data) {
            // here the data from the api is assigned to a variable named users
        $scope.pressreleases = data;
        $scope.whichRelease = $routeParams.releaseId;
    });
});
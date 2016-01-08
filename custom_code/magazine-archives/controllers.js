var magazineControllers = angular.module("magazineControllers", ['ngSanitize']);

magazineControllers.controller("SummaryController", ["$scope", "$http", "$timeout", "$location", "$anchorScroll", function($scope, $http, $timeout, $location, $anchorScroll){
	$http.get('http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/magazine-archives/api.php').success(function(data) {
             // here the data from the api is assigned to a variable named users             
        $scope.magazineissues = data;
        $scope.orderMagazineIssues = 'issue';
        $scope.direction = '';
        $scope.$watchCollection('filterMagazineIssues', function(newSearch) {
            if ($scope.filterMagazineIssues == null) {
                $scope.filterMagazineIssues = undefined;
            }
        });

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

        $scope.hidePaginate = function() {
            var select = document.getElementById('mag-selector');
            var pageCounter = document.getElementsByClassName('page-count');
            var pagination = document.getElementsByClassName('archive-pagination');
            var searchSort = document.getElementsByClassName('search-sort');
            
            if (select.selectedIndex === 0) {
                for (var i = 0; i < pageCounter.length; i++) {
                    pageCounter[i].style.display = 'flex';
                }
                for (var i = 0; i < pagination.length; i++) {
                    pagination[i].style.display = 'flex';
                }
                for (var i = 1; i < searchSort.length; i++) {
                    searchSort[i].style.display = '';
                } 
                
            } else {
                for (var i = 0; i < pageCounter.length; i++) {
                    pageCounter[i].style.display = 'none';
                }
                for (var i = 0; i < pagination.length; i++) {
                    pagination[i].style.display = 'none';
                }
                for (var i = 1; i < searchSort.length; i++) {
                    searchSort[i].style.display = 'none';
                }      
                $scope.currentPage = 0;
                $scope.goToPage = 0;                
            }

        };

        $scope.currentGoToPage = 1;

        $scope.goToPage = 0;
        
        $scope.pageLimit = $scope.numberOfPages($scope.magazineissues);

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

        $scope.pages = $scope.getNumberAsArray($scope.numberOfPages($scope.magazineissues));
    });
}]);

magazineControllers.controller("FullArticleController", ["$scope", "$http", "$timeout", "$routeParams", "$location", function($scope, $http, $timeout, $routeParams, $location){
	$http.get('http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/magazine-archives/api.php').success(function(data) {
            // here the data from the api is assigned to a variable named users
        $scope.magazineissues = data;
        $scope.whichArticle = $routeParams.magArticle;
        $scope.whichIssue = $routeParams.magIssue;
        console.log($routeParams);        
        console.log($location);        
    });
}]);
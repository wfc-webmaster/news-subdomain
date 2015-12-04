var featureArchive = angular.module('featureArchive', [
	'ngRoute',
	'featureControllers',
	'wfcFilters'
]);

featureArchive.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/summary', {
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/feature-archives/partials/summary.html',
		controller: 'SummaryController'
	}).
	when('/fullarticles/:featureId/:featureTitle', {
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/feature-archives/partials/fullarticles.html',
		controller: 'FullArticleController'
	}).
	otherwise({
		redirectTo: '/summary'
	});
}]);

featureArchive.directive('paginationTop', function(){
	return {
		restrict: 'E',
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/angular-templates/pagination-top.html'

	};
});

featureArchive.directive('paginationBottom', function(){
	return {
		restrict: 'E',
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/angular-templates/pagination-bottom.html'

	};
});

featureArchive.directive('preventFirstSpace', function(){
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
            angular.element('input').on('keydown', function(e) {
            	if (e.which === 32 &&  e.target.selectionStart === 0) {
            	  return false;
            	} 
            });			
		}
	};
});

featureArchive.directive('hidePagination', function(){
	return {
		restrict: 'A',
		scope: false,
		require: 'ngModel',
		link: function (scope, element, attrs, ngModel) {
				ngModel.$viewChangeListeners.push(function() {
            		
            		var searchField = document.getElementsByClassName('search-archives')[0];
            		var searchFieldValue = searchField.value;
            		var pageCounter = document.getElementsByClassName('page-count');
            		var pagination = document.getElementsByClassName('archive-pagination');
            		var searchSort = document.getElementsByClassName('search-sort');

            		//Hides the pagination when search terms are entered            		                        
            		if (searchFieldValue && searchFieldValue != '') {
            			for (var i = 0; i < pageCounter.length; i++) {
            			    pageCounter[i].style.display = 'none';
            			}
            			for (var i = 0; i < pagination.length; i++) {
            			    pagination[i].style.display = 'none';
            			}
            			for (var i = 1; i < searchSort.length; i++) {
            			    searchSort[i].style.display = 'none';
            			}
            			//Reset features-per-page limit to search all features 
            			scope.pageSize = scope.features.length;
            			//Reset current page to first page so search works
            			scope.setCurrentPage(0);
            			
            		//Re-displays pagination when search input is empty	           		    
            		} else {
            			for (var i = 0; i < pageCounter.length; i++) {
            			    pageCounter[i].style.display = 'flex';
            			}
            			for (var i = 0; i < pagination.length; i++) {
            			    pagination[i].style.display = 'flex';
            			}
            			for (var i = 1; i < searchSort.length; i++) {
            			    searchSort[i].style.display = '';
            			}
            			//Reset features-per-page limit back 
            			scope.pageSize = scope.setPageSize;              			
            		}	
            	});				            	
			}
	};
});
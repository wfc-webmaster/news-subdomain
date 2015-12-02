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
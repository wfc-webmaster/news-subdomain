var pressArchive = angular.module('pressArchive', [
	'ngRoute',
	'pressControllers',
	'wfcFilters'
]);

pressArchive.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/summary', {
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/press-releases/partials/summary.html',
		controller: 'SummaryController'
	}).
	when('/fullarticles/:releaseId/:releaseTitle', {
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/press-releases/partials/fullarticles.html',
		controller: 'FullArticleController'
	}).
	otherwise({
		redirectTo: '/summary'
	});
}]);

pressArchive.directive('paginationTop', function(){
	return {
		restrict: 'E',
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/angular-templates/pagination-top.html'

	};
});

pressArchive.directive('paginationBottom', function(){
	return {
		restrict: 'E',
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/angular-templates/pagination-bottom.html'

	};
});
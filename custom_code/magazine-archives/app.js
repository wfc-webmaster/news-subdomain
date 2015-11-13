var magazineArchive = angular.module('magazineArchive', [
	'ngRoute',
	'magazineControllers'
]);

magazineArchive.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/summary', {
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/magazine-archives/partials/summary.html',
		controller: 'SummaryController'
	}).
	when('/fullarticles/:itemId', {
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/magazine-archives/partials/fullarticles.html',
		controller: 'FullArticleController'
	}).
	otherwise({
		redirectTo: '/summary'
	});
}]);
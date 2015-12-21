var wfcExperts = angular.module('wfcExperts', [
	'wfcFilters',
	'expertsDisplay',
	'ngRoute'
]);

wfcExperts.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/list', {
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/experts-guide/angular-app/partials/list.html',
		controller: 'ExpertsInfo'
	}).
	when('/profile/:expertId/:expertName', {
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/experts-guide/angular-app/partials/profile.html',
		controller: 'ExpertsInfo'
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);
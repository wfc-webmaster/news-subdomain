var wfcHiRes = angular.module('wfcHiRes', [
	'wfcFilters',
	'hiresDisplay',
	'ngRoute'
]);

wfcHiRes.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/images', {
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/hi-res-page/angular-app/partials/images.html',
		controller: 'HiResInfo'
	}).
	when('/single-image/:imageId', {
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/hi-res-page/angular-app/partials/single-image.html',
		controller: 'HiResInfo'
	}).
	otherwise({
		redirectTo: '/images'
	});
}]);
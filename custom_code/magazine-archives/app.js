var magazineArchive = angular.module('magazineArchive', ['ngRoute',	'magazineControllers']);

magazineArchive.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/summary', {
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/magazine-archives/partials/summary.html',
		controller: 'SummaryController'
	}).
	when('/fullarticles/:magIssue/:magArticle/:magTitle', {
		templateUrl: 'http://localhost:8888/wildflower_news/wp-content/themes/wildflowercenter/custom_code/magazine-archives/partials/fullarticles.html',
		controller: 'FullArticleController'
	}).
	otherwise({
		redirectTo: '/summary'
	});
}]);

//Replace spaces with hyphen
magazineArchive.filter('addhyphen', function(){
	return function(input){
		return input.replace(/ /g, '-');
	};
});

//Remove special characters
magazineArchive.filter('specialchars', function(){
	return function(input){
		return input.replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g, "");
	};
});

//Transform text to Title Case
magazineArchive.filter('titlecase', function() {
    return function(s) {
        s = ( s === undefined || s === null ) ? '' : s;
        return s.toString().toLowerCase().replace( /\b([a-z])/g, function(ch) {
            return ch.toUpperCase();
        });
    };
});
var featureArchive = angular.module('featureArchive', [
	'ngRoute',
	'featureControllers'
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

featureArchive.directive('fullArticle', function($compile) {
	return {
		restrict: 'E',
		link: function($scope, element, attr) {
			// Prepend feature article links so they go to wildflower.org pages
			featureLink = $('a[href^="/plants"]');
			// $(featureLink).attr('href', function(i,v) {
   //  			return "http://wildflower.org" + v;
			// });
			// Prepend feature article images so they display
			// Need to change when images are migrated to permanent home
			featureImg = $('img[src^="/_images"');
			// $(featureImg).attr('src', function(i,s) {
			// 	return "http://wildflower.org" + s;
			// });
			// Some image links have ../ in front. That needs to be removed
			featureImgParDir = $('img[src^="../_images"');
			//$(featureImgParDir).attr('src').replace(/\.\.\//g, '');
			console.log('Still works');			
		}
	};
});

//Replace spaces with hyphen
featureArchive.filter('addhyphen', function(){
	return function(input){
		return input.replace(/ /g, '-');
	};
});

//Remove special characters
featureArchive.filter('specialchars', function(){
	return function(input){
		return input.replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g, "");
	};
});

//Transform text to Title Case
featureArchive.filter('titlecase', function() {
    return function(s) {
        s = ( s === undefined || s === null ) ? '' : s;
        return s.toString().toLowerCase().replace( /\b([a-z])/g, function(ch) {
            return ch.toUpperCase();
        });
    };
});
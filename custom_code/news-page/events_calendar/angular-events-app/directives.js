var eventsDisplay = angular.module("eventsDisplay", []);

eventsDisplay.directive('upcomingEvents', function(){
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'wp-content/themes/wildflowercenter/custom_code/news-page/events_calendar/angular-events-app/upcoming-events.html',
		controller: 'UpcomingEventsCtrlNew',
		controllerAs: 'ctrl'
	};
});

eventsDisplay.controller('UpcomingEventsCtrlNew', function($http, $scope) {
	$http.get('wp-content/themes/wildflowercenter/custom_code/news-page/events_calendar/angular-events-app/api.php').success(function(data) {
		$scope.events = data;
		console.log($scope.events[0]['id']);
	});
});
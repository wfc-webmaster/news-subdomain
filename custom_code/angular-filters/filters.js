var wfcFilters = angular.module("wfcFilters", []);

// Start from filter
wfcFilters.filter('startFrom', function() {
    return function(input, start) { 
        if (!input || !input.length) {
        	return;
        }
        return input.slice(start);               
	};
});

//Replace spaces with hyphen
wfcFilters.filter('addhyphen', function() {
	return function(input){
		return input.replace(/ /g, '-');
	};
});

//Remove special characters
wfcFilters.filter('specialchars', function() {
	return function(input){
		return input.replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g, "");
	};
});

//Transform text to Title Case
wfcFilters.filter('titlecase', function() {
    return function(s) {
        s = ( s === undefined || s === null ) ? '' : s;
        return s.toString().toLowerCase().replace( /\b([a-z])/g, function(ch) {
            return ch.toUpperCase();
        });
    };
});
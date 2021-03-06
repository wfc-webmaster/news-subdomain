jQuery(document).ready(function($){

	$.get("../wp-content/themes/wildflowercenter/custom_code/magazine-page/magazine-json.php", function(magData) {
	    
	    //Parse JSON from PHP file
	    var parseFromPHP = jQuery.parseJSON(magData);
	    //console.log(parseFromPHP);
	    
	    //Create objects from JSON
	    var issue1 = JSON.parse(parseFromPHP[0]);
	    var issue2 = JSON.parse(parseFromPHP[1]);
	    var issue3 = JSON.parse(parseFromPHP[2]);
	    var issue4 = JSON.parse(parseFromPHP[3]);
	    
	    //Create an array of magazine issues	    
	    var issues = [issue1, issue2, issue3, issue4];

	    //This is where the magazine content goes
	    var block = document.getElementById('magazine-content');
	    

	    //Set up magazine content to insert into page
	    var i = 0

		var issue_card_featured = [
			'<div id="magazine-featured" class="magazine-current-issue">',
		 	'<a href="' + issues[i].url + '" target="_blank"><img width="320" src="' + issues[i].thumbnail_url.replace('_thumb_medium', '_thumb_large') + '"></a>',
		 	'<p><em>Wildflower</em> magazine educates people about how native wildflowers, plants and landscapes affect our lives, not only through their beauty but also through the benefits they provide to ecosystems everywhere.</p>',
		 	'<p>Published quarterly, the 36-page <em>Wildflower</em> magazine is available by joining the Wildflower Center.</p>',
		 	'<a class="sidebar-button" href="' + issues[i].url + '" target="_blank">Read Current Issue: ' + issues[i].title.replace('Wildflower Magazine - ', '') + '</a>',
		 	'</div>'
		].join('');

		//Insert featured magazine issue
		block.innerHTML += issue_card_featured;
		
		var subBlock = document.getElementById('magazine-featured');
	    var i = 1;
	    var id = 1;
	    

	    while (i <= 3) {
		    var issue_card = [
	    		'<div id="magazine-' + id + '" class="magazine-recent-issues">',
	    		'<a href="' + issues[i].url + '" target="_blank"><img width="230" src="' + issues[i].thumbnail_url.replace('_thumb_medium', '_thumb_large') + '"></a>',
	    		'<h6><a href="' + issues[i].url + '" target="_blank">' + issues[i].title.replace(' - ', '<br />') + '</a></h6>',
	    		'</div>'
		    ].join('');

		    //Insert recent magazine issues
		    block.innerHTML += issue_card;
		    	    	
	    	i++;
	    	id++;
	    }
    
	});

})





// Must be 100 or lower for Wikipedia API to work
const SEARCH_LIMIT = 100;

if(SEARCH_LIMIT > 100) {
	console.log('SEARCH_LIMIT MUST BE 100 OR LOWER.');
}

var search = function() {
	var input = $('#input').val();
	var searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + input + '&limit=' + SEARCH_LIMIT + '&warningsaserror=1&utf8=1';
	var resultsArray = [];
	$('#input').val('');

	// Gets the search results from Wikipedia
	// Adds results to an array
	$.ajax({
		url: searchUrl,
		dataType: 'jsonp'
	})
	.done(function(data) {
		for(var i = 0; i < SEARCH_LIMIT; i++) {
			resultsArray.push({
				'title': data[1][i],
				'extract': data[2][i],
				'url': data[3][i]
			})
		}
		// Displays results with jQuery Templating
		displayArticles(resultsArray);
	});
};

var displayArticles = function(resultsArray) {
	// Displays results with jQuery Templating
	$('#article-view').loadTemplate('#article-template', resultsArray);
};

// Triggers the search function when 'enter' key is pressed
$('#input').keyup(function() {
	if (event.keyCode == 13) {
		$('#submit').trigger('click');
	}
});
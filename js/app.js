var search = function() {
	var input = $('#input').val();
	var searchUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info%7Cextracts&generator=search&redirects=1&callback=&utf8=1&inprop=url&exsentences=3&exlimit=10&exintro=1&explaintext=1&gsrsearch=' + input;
	var resultsArray = [];
	$('#input').val('');

	// Gets the search results from Wikipedia
	// Adds filtered results to an array
	$.ajax({
		url: searchUrl,
		dataType: 'jsonp'
	})
	.done(function(data) {
		$.each(data.query.pages, function(index, value) {
			if (value.extract.toLowerCase().indexOf('may refer to:') < 0) {
				resultsArray.push({
					'title': value.title,
					'extract': value.extract,
					'url': value.canonicalurl
				});
			}
		});
		// Displays results with jQuery Templating
		$('#article-view').loadTemplate('#article-template', resultsArray);
	});
};

// Triggers the search function when 'enter' key is pressed
$('#input').keyup(function() {
	if (event.keyCode == 13) {
		$('#submit').trigger('click');
	}
});
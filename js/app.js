var search = function() {
	var input = $('#input').val();
	var searchUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info%7Cextracts&generator=search&redirects=1&callback=&utf8=1&inprop=url&exsentences=3&exlimit=10&exintro=1&explaintext=1&gsrsearch=' + input;
	$('#input').val('');

	// Gets the search results from Wikipedia
	$.ajax({
		url: searchUrl,
		dataType: 'jsonp'
	})
	.done(function(data) {
		console.log(data);
	});
};

// Triggers the search function when 'enter' key is pressed
$('#input').keyup(function() {
	if (event.keyCode == 13) {
		$('#submit').trigger('click');
	}
});
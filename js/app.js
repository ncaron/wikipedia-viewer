var search = function() {
	var input = $('#input').val();
	var searchUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&callback=test&srprop=snippet&srlimit=10&srsearch=' + input;
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
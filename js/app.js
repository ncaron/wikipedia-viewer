var search = function() {
	var input = $('#input').val();
	$('#input').val('');
};

$('#input').keyup(function() {
	if (event.keyCode == 13) {
		$('#submit').trigger('click');
	}
});
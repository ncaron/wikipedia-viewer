var search = function() {
	var input = document.getElementById('input').value;
	document.getElementById('input').value = '';
};

document.getElementById('input').addEventListener('keyup', function(event) {
	if (event.keyCode == 13) {
		document.getElementById('submit').click();
	}
});
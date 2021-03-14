function search() {
	var input, filter, ul, li, h3, i, txtValue;
	input = document.getElementById('search_882c9b06-0294-4745-ac2b-5ca0ab668504');
	filter = input.value.toUpperCase();
	ul = document.getElementById('articles');
	li = ul.getElementsByTagName('li');
	for (i = 0; i < li.length; i++) {
		h3 = li[i].getElementsByTagName("h3")[0];
		txtValue = h3.textContent;
		if(txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}
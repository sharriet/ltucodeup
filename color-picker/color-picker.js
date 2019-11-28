var els = document.getElementsByClassName("swatch");
var text = document.getElementById("text"); 

for (var i=0;i<els.length;i++) {
	els[i].addEventListener("click", function() {
		text.style.color = this.innerHTML;
	});
}

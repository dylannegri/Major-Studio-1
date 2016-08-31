var slideIndex = 1;

function switchSlide(n) {
	showSlide(slideIndex += n);
}
function currentSlide(n) {
	showSlide(slideIndex = n)
}

function showSlide(n) {

	var slideArray = document.getElementsByClassName('slides');
	var slideArray = document.getElementsByClassName('myDot');

	if (n > slideArray.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slideArray.length;
	}
	for (var i = 0; i < slideArray.length; i++) {
		slideArray[i].className = slideArray[i].className.replace(' fadeImage', '');
	}
	slideArray[slideIndex-1].className += ' fadeImage';

	for (var i = 0; i < dotsArray.length; i++) {
		dotsArray[i].className = dotsArray[i].className.replace(' dot-filled', '');
	}
		slideArray[slideIndex-1].className += ' dot-filled';
}
window.setInterval(
   function(){
   switchSlide(1)
}, 3000);

document.addEventListener('DOMContentLoaded', function(){

var slideIndex = 1;


/*
 * Function switchSlide(): Switching images while clicking arrows.
 */
function switchSlide(n) {
    showSlide(slideIndex += n);
}

/*
 * Function currentSlide(): Switching images while clicking dots.
 */
function currentSlide(n) {
    showSlide(slideIndex = n);
}


function showSlide(n) {

    var slidesArray
        = document.getElementsByClassName('slides');
    var dotsArray
        = document.getElementsByClassName('myDot');

    /*
     * When it goes over the slideIndex, it returns back the first one.
     */
    if (n > slidesArray.length) {
        slideIndex = 1;
    }

    /*
     * When it is lesser than the slideIndex, it goes to the last one.
     */
    if (n < 1) {
        slideIndex = slidesArray.length;
    }

    /*
     * Clear all the fadeImage class
     */
    for (var i = 0; i < slidesArray.length; i++) {
        slidesArray[i].className
        = slidesArray[i].className.replace(" fadeImage", "");
    }
    /*
     * Add fadeImage to show the Image that should appear.
     */
    slidesArray[slideIndex-1].className += " fadeImage";


    /*
     * Clear all the dot-filled class
     */
    for (var i = 0; i < dotsArray.length; i++) {
        dotsArray[i].className = dotsArray[i].className.replace(" dot-filled", "");
    }
    /*
     * Fill the dot for the image according to the slideIndex.
     * i.e, If it is Image02.jpg, then fill the second dot's background.
     */
    dotsArray[slideIndex-1].className += " dot-filled";
}

window.setInterval(
   function(){
   switchSlide(1)
}, 4000);

});
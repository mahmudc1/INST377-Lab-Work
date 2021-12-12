let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

document.getElementbyid('carousel_button--next')
    .addEventListener('click', function() {
        moveToNextSlides();
    });

document
    getElementbyid('carousel_button--prev')
    .addeventlistener('click', function() {
        movetoprevslide();
    });

    function updateslideposition() {
        for (let slide of slides) {
            slide.classlist.remove('carousel_item--visible');
            slide.classlist.add('carousel_item--hidden');
        }
    
        slides[slidePosition].classlist.add('carousel_item--visible');
    
    }
}

function movetonextslide() {
    if (slideposition == totalslides -1) {
        slideposition =0;
    } else {
        slideposition++;
    }
    updateslideposition();
};

function movetoprevslide() {
    if (slideposition === 0) {
        slideposition = totalslides - 1;
    }   else {
        slideposition--;
    }
    updateslideposition();
};

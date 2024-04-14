let meniu = document.getElementById('mobile-nav');


// Burger menu function
function navi() {
    if (meniu.style.display === 'block') {
        meniu.style.display = 'none';
    } else {
        meniu.style.display = 'block';
    }
};


// Burger menu X window closing func
function closeBurgerMenu() {
    let span = document.getElementById('close-burger');
    meniu.style.display = 'none';
    console.log('clicked');
};

// Gallery pictures full screen function
const galleryPics = document.querySelectorAll('.gallery-pic');
const fullscreenDiv = document.getElementById('fullscreen-bg');

galleryPics.forEach((galleryPic) => {
    galleryPic.addEventListener('click', function () {
        fullscreenDiv.style.backgroundImage = 'url(' + galleryPic.src +')';
        fullscreenDiv.style.display = 'block';
    });
});

const closeFullscreen = document.getElementById('close-fullscreen');

closeFullscreen.addEventListener('click', () => {
    fullscreenDiv.style.display = 'none';
})
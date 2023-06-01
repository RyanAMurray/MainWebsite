window.addEventListener('scroll', function() {
    var scrollingImage = document.querySelector('.scrolling-image');
    scrollingImage.style.transform = 'translateY(' + window.pageYOffset + 'px)';
});
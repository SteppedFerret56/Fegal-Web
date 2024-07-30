document.addEventListener('DOMContentLoaded', function () {
    const cityTabs = document.querySelectorAll('.fegal-cities-tab');
    const imgElement = document.querySelector('.fegal-cities-img');

    const scrollContainer = document.querySelector('.scrollContent');
    const scrollLeftButton = document.getElementById('scrollLeft');
    const scrollRightButton = document.getElementById('scrollRight');
    const scrollDownButton = document.getElementById('scrollDown');
    const mediaElement = document.querySelector('.media-element');

    const discoverFegalTitle = document.querySelector('.media-scroller-title');

    const scrollAmount = mediaElement.offsetWidth;

    cityTabs.forEach(tab => {
        tab.addEventListener('mouseover', function () {
            const imageUrl = this.dataset.image;
            imgElement.src = imageUrl;
        });
    });

    scrollLeftButton.addEventListener('click', () => {
        scrollContainer.scrollLeft -= scrollAmount;
    });

    scrollRightButton.addEventListener('click', () => {
        scrollContainer.scrollLeft += scrollAmount;
    });

    scrollDownButton.addEventListener('click', () => {
        discoverFegalTitle.scrollIntoView({ behavior: 'smooth' })});
});
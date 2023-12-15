document.addEventListener('DOMContentLoaded', function () {
    const cityTabs = document.querySelectorAll('.fegal-cities-tab');
    const imgElement = document.querySelector('.fegal-cities-img');

    cityTabs.forEach(tab => {
        tab.addEventListener('mouseover', function () {
            const imageUrl = this.dataset.image;
            imgElement.src = imageUrl;
        });
    });
});

var mouseWheelEvt = function (event) {
    event.preventDefault();
    var delta = Math.sign(event.deltaY);
    this.scrollLeft += (delta * 30);
}
var mediaScroller = document.getElementById('horizontalScroll');
mediaScroller.addEventListener('wheel', mouseWheelEvt);
const map = document.querySelector(".map");
const mapButton = document.querySelector(".shop__show-map");

if (mapButton) {
    mapButton.addEventListener('click', function () {
        map.classList.toggle("map--open")
    })
}
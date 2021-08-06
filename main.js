const parallax = document.getElementsByTagName("body");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax[0].style.backgroundPositionY = offset * 0.05 + "%"
})
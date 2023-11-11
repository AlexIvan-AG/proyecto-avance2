document.addEventListener("DOMContentLoaded", function () {
    var image = document.getElementById("productImage");
    var overlay = document.getElementById("overlay");
    var enlargedImage = document.getElementById("enlargedImage");

    image.addEventListener("click", function () {
        overlay.style.display = "flex";
        enlargedImage.src = image.src;
    });
});

function closeOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

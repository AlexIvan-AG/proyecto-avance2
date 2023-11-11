document.addEventListener("DOMContentLoaded", function() {
    var perifericosLink = document.getElementById("perifericos");
    var submenuPerifericos = document.getElementById("submenuPerifericos");

    perifericosLink.addEventListener("click", function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        toggleSubMenu(submenuPerifericos);
    });

    function toggleSubMenu(submenu) {
        submenu.classList.toggle("active");
    }
});

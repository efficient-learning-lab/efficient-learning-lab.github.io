const button = document.getElementById("navbar-toggle");
const navbar = document.getElementById("navbar");
button.addEventListener("click", function() {
    navbar.classList.toggle("hidden");
});

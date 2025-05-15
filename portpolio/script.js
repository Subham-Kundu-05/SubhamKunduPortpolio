function toggleMenu() {
    let navLinks = document.getElementById("nav-links");

    // Toggle class 'active' to show/hide menu
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
}
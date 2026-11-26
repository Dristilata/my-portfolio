const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

    menuBtn.innerHTML = isOpen ? "&times;" : "☰";

});


// CLOSE MENU AFTER CLICKING A LINK

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.innerHTML = "☰";

    });

});


// AUTOMATIC COPYRIGHT YEAR

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// CONSOLE MESSAGE

console.log("Welcome to Dristilata's Portfolio!");
//To open and close the mobile navigation menu

let navbar = document.getElementById("mobile-navigation");

function showNavbar(){
    if (navbar.style.display ==="flex"){
        navbar.style.display = "none";
    }

    else{
        navbar.style.display ="flex";
    }
};




// To show the current web page

const path = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');


navLinks.forEach(link => {
  if (link.href.includes(`${path}`)){
    link.classList.add("current")
  };
});
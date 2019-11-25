
function closeSideBar() {
    sideNav = document.querySelector(".side-nav");
    sideNav.style.transform = "translateX(100%)";
    document.querySelector(".whole-page-container").style.transform = "translateX(0)";
}

function openSideBar() {
    sideNav = document.querySelector(".side-nav");
    sideNav.style.transform = "translateX(0)";
    document.querySelector(".whole-page-container").style.transform = "translateX(-280px)";
}

function flipCard(){
    document.querySelector(".card")
        .style.transform = "rotateY(180deg)";
}

function flipCardAgain(){
    document.querySelector(".card")
        .style.transform = "rotateY(0)";
}

var products = [];
var filteredProducts = [];

async function getData (){
    var response = await fetch("../js/db.json");
    products = await response.json();

    filteredProducts = products.slice();
};
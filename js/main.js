function closeSideBar() {
    sideNav = document.querySelector(".side-nav");
    sideNav.style.transform = "translateX(100%)";
    document.querySelector(".whole-page-container").style.transform = "translateX(0)";
}

function openSideBar() {
    sideNav = document.querySelector(".side-nav");
    sideNav.style.transform = "translateX(0)";
    document.querySelector(".whole-page-container").style.transform = "translateX(-30%)";
}


function goToProduct(){
    window.location.href = "../pages/one-product.html";

}


function flipCard(){
    document.querySelector(".card")
        .style.transform = "rotateY(180deg)";
}

function flipCardAgain(){
    document.querySelector(".card")
        .style.transform = "rotateY(0)";
}
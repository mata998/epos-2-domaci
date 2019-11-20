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


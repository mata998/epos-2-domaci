
var clickedProduct;

(async function () {
    await getData();

    var name = localStorage.getItem("clicekdProductName");
    console.log(name);

    console.log(products);

    products.forEach(product => {
        if (product.ime == name){
            clickedProduct = product;
        }
    });


    var wholePage = document.querySelector(".whole-page-container");
    
    wholePage.innerHTML = wholePage.innerHTML.replace("%ime%", clickedProduct.ime);
    wholePage.innerHTML = wholePage.innerHTML.replace("%cena%", clickedProduct.cena);
    wholePage.innerHTML = wholePage.innerHTML.replace("%tekst%", clickedProduct.tekst);
    wholePage.innerHTML = wholePage.innerHTML.replace("%tip%", clickedProduct.tip);
    document.getElementById("slika").src = clickedProduct.slika;



    var similarProducts = products.filter(product => {
        if (product.tip == clickedProduct.tip && product.ime != clickedProduct.ime){
            return true;
        }
    });

    similarProducts = similarProducts.slice(0,4);
    
    picturesContainer = document.querySelector(".pictures-container");

    similarProducts.forEach(product => {
        var newElement = document.createElement("div");
        newElement.className = "one-picture-container";
        // newElement.id = product.ime;

        newElement.innerHTML = 
        `
        <img src="${product.slika}" alt="Proizvod"
        id=${product.ime}>
        `
        newElement.firstElementChild.setAttribute("ime", product.ime);
        newElement.firstElementChild.addEventListener("click", goToProduct);
        

        picturesContainer.appendChild(newElement);
    });

    // console.log(similarProducts);
})();



function goToProduct(e){
    const name = e.target.getAttribute("ime");
    
    localStorage.setItem("clicekdProductName", name);
    
    window.location.href = "../pages/one-product.html";
}


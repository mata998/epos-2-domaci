
(async function (){
    var response = await fetch("../js/db.json");
    products = await response.json();

    pageContainer = document.querySelector(".page-container");

    numberOfPages = Math.ceil(products.length / 6);
    makePageNumbers(numberOfPages);

    pages = makePages();

    pages[0].forEach(product => {
        pageContainer.innerHTML = pageContainer.innerHTML + makeProductOuterHtml(product);
    });

})();


function makeProductOuterHtml(product){

    productHtml = document.createElement("div");

    productHtml.className = "product-container";

    productHtml.innerHTML = 
    `
    <img src=${product.slika} alt="proizvod">
    <div class="product-info">
        <div class="name"> ${product.ime}</div>
        <div class="price">${product.cena}din</div>
        <div class="button" onclick="goToProduct()">
            Vise informacija
        </div>
    </div>
    `;

    return productHtml.outerHTML;

}

function makePages(){
    numberOfPages = Math.ceil(products.length / 6);
    lastPageItems = products.length % 6;

    var pages = [];
    let x = 0;

    for (let i = 0; i< numberOfPages-1; i++){
        pages[i] = [];

        for (let j = 0; j<6; j++){
            pages[i].push(products[x++]);
        }
    }


    pages[numberOfPages-1] = [];

    for (let i = 0; i<lastPageItems; i++){
        pages[numberOfPages-1].push(products[x++]);
    }

    return pages;
}

function showPage(e){
    pageIndex = e.target.id-1;

    console.log(pages[pageIndex]);
    pageContainer.innerHTML = "";

    pages[pageIndex].forEach(product => {
        pageContainer.innerHTML = pageContainer.innerHTML + makeProductOuterHtml(product);
    });
}

function makePageNumbers(numberOfPages){
    var pagesContainer = document.querySelector(".pages");

    for (let i = 1; i<=numberOfPages; i++){
        var oneNumber = document.createElement("div");
        oneNumber.className = "page-number";
        oneNumber.id = i;
        oneNumber.innerHTML = i;
        oneNumber.addEventListener("click", showPage);
        pagesContainer.appendChild(oneNumber);
    }


}
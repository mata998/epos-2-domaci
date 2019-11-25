
var pages = [];
var pageContainer = document.querySelector(".page-container");
var pagesContainer = document.querySelector(".pages");


(async function (){
    await getData();

    renderEverything();

})();


function renderEverything(){

    if (filteredProducts.length == 0){
        console.log("Nazalost nema proizvoda koji odgovaraju vasoj pretrazi");

        var errorBox = document.createElement("div");
        errorBox.className = "errorBox";
        errorBox.innerHTML = "Nazalost nema proizvoda koji odgovaraju vasoj pretrazi";

        pageContainer.innerHTML = "";
        pagesContainer.innerHTML = "";
        pageContainer.appendChild(errorBox);

        return;
    }

    var numberOfPages = Math.ceil(filteredProducts.length / 6);
    makePageNumbers(numberOfPages);

    pages = makePages();

    showPage(0);
}


function makeProductOuterHtml(product){

    productHtml = document.createElement("div");

    productHtml.className = "product-container";

    productHtml.innerHTML = 
    `
    <img src=${product.slika} alt="proizvod">
    <div class="product-info">
        <div class="name">${product.ime}</div>
        <div class="price">${product.cena}din</div>
        <div class="button">
            Vise informacija
        </div>
    </div>
    `;

    return productHtml.outerHTML;

}

function makePages(){
    var numberOfPages = Math.ceil(filteredProducts.length / 6);
    var lastPageItems;

    if (filteredProducts.length % 6 == 0){
        lastPageItems = 6;
    }
    else {
        lastPageItems = filteredProducts.length % 6;
    }

    var pages = [];
    let x = 0;

    for (let i = 0; i< numberOfPages-1; i++){
        pages[i] = [];

        for (let j = 0; j<6; j++){
            pages[i].push(filteredProducts[x++]);
        }
    }


    pages[numberOfPages-1] = [];

    for (let i = 0; i<lastPageItems; i++){
        pages[numberOfPages-1].push(filteredProducts[x++]);
    }

    return pages;
}

function pageNumberClick(e){
    document.querySelector(".highlight-page").classList.remove("highlight-page");

    var pageIndex = e.target.id-1;
    e.target.classList.add("highlight-page");
    

    showPage(pageIndex);
}

function showPage(pageIndex){
    pageContainer.innerHTML = "";

    pages[pageIndex].forEach(product => {
        pageContainer.innerHTML = pageContainer.innerHTML + makeProductOuterHtml(product);
    });

    var allButtons = document.querySelectorAll(".product-container .button");

    allButtons.forEach(button => {
        button.addEventListener("click", goToProduct);
    });
}

function makePageNumbers(numberOfPages){
    pagesContainer.innerHTML = "";

    for (let i = 1; i<=numberOfPages; i++){
        var oneNumber = document.createElement("div");
        oneNumber.className = "page-number";
        oneNumber.id = i;
        oneNumber.innerHTML = i;
        oneNumber.addEventListener("click", pageNumberClick);
        pagesContainer.appendChild(oneNumber);
    }

    pagesContainer.firstElementChild.classList.add("highlight-page");
}


function goToProduct(e){
    const btn = e.target;
    const parentDiv = btn.parentNode;
    const name = parentDiv.firstElementChild.innerHTML;
    
    localStorage.setItem("clicekdProductName", name);
    
    // console.log(name);

    window.location.href = "../pages/one-product.html";
}



// GLAVNI FILTER

function mainFilter(){

    searchFilter();

    typeFilter();

    priceFilter();

    renderEverything();
}



// SEARCH FILTER
var searchInput = document.getElementById("search-input");
searchInput.addEventListener("keyup", mainFilter);

function searchFilter(){
    var text = document.getElementById("search-input").value.toLowerCase();

    filteredProducts = products.filter(product => {
        if (product.ime.toLowerCase().includes(text)){
            return true;
        }
    });

}



// TYPE FILTER
function typeFilter(){
    var sel = document.querySelector(".drop-down-type");
    var text = sel.options[sel.selectedIndex].text;

    if (text == "Svi"){
        return;
    }

    if (text == "Protein"){

        filteredProducts = filteredProducts.filter(product => {
            if (product.tip == "protein"){
                return true;
            }
        });

    }

    if (text == "Preworkout"){

        filteredProducts = filteredProducts.filter(product => {
            if (product.tip == "preworkout"){
                return true;
            }
        });

    }

    if (text == "Cokoladica"){

        filteredProducts = filteredProducts.filter(product => {
            if (product.tip == "proteinska cokoladica"){
                return true;
            }
        });

    }

}


// PRICE FILTER

function priceFilter(){
    var sel = document.querySelector(".drop-down-price");
    var text = sel.options[sel.selectedIndex].text;


    if (text == "Izaberite"){
        return;
    }

    if (text == "Opadajuce"){

        filteredProducts = filteredProducts.sort((p1, p2) =>{
            if (p1.cena < p2.cena){
                return 1;
            }
            else {
                return -1;
            }
        });

    }

    if (text == "Rastuce"){

        filteredProducts = filteredProducts.sort((p1, p2) =>{
            if (p1.cena > p2.cena){
                return 1;
            }
            else {
                return -1;
            }
        });

    }

    
}







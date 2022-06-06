let productsPlace = document.getElementById("place-products");
let container = document.getElementById("add-content");
let numberOfItems = document.getElementById("number-items");

const objNumberPage = {
    start : 0,
    final : 10,
    increment : 10,
    max :35
}

productToPage();

function myCreateElement(tag,className,id,src,text){
    let obj = document.createElement(tag);
    obj.className = className;
    obj.id = id;
    obj.src = src;
    obj.innerText = text;
    return obj;
}

function loadButtons(parent,min,max,btnPrev,btnNext){


    while(parent.childNodes.length > 0){
        parent.removeChild(parent.childNodes[0]);
    }
    for(let i = min + 1;i <= max;i++){
        let btn = document.createElement("button");
        btn.innerText = i;
        parent.appendChild(btn);
    }

    if(objNumberPage.start < 10){
        btnPrev.style.backgroundColor = "#058BCB";
        btnPrev.style.color = "#058BCB";
    }else{
        btnPrev.style.backgroundColor = "white";
        btnPrev.style.color = "black";
    }

    if(objNumberPage.final == objNumberPage.max){
        btnNext.style.backgroundColor = "#058BCB";
        btnNext.style.color = "#058BCB";
    }else{
        btnNext.style.backgroundColor = "white";
        btnNext.style.color = "black";
    }

}
function createTable(arrFirstCol,arrSecondCol){
    let table = document.createElement("table");

    let thead = document.createElement("thead");

    let colOne = myCreateElement("td",null,null,null,arrFirstCol[0]);
    let colTwo = myCreateElement("td",null,null,null,arrSecondCol[0]);

    thead.appendChild(colOne);
    thead.appendChild(colTwo);

    let tbody = document.createElement("tbody");

    let rowOne = document.createElement("tr");
    let rowTwo = document.createElement("tr");
    let rowThree = document.createElement("tr");

    let rowOneColOne = myCreateElement("td",null,null,null,arrFirstCol[1]);
    let rowOneColTwo = myCreateElement("td",null,null,null,arrSecondCol[1] + " lei");

    rowOne.appendChild(rowOneColOne);
    rowOne.appendChild(rowOneColTwo);

    let rowTwoColOne = myCreateElement("td",null,null,null,arrFirstCol[2]);
    let rowTwoColTwo = myCreateElement("td",null,null,null,arrSecondCol[2]);

    rowTwo.appendChild(rowTwoColOne);
    rowTwo.appendChild(rowTwoColTwo);

    let rowThreeColOne = myCreateElement("td",null,null,null,arrFirstCol[3]);
    let rowThreeColTwo = myCreateElement("td",null,null,null,arrSecondCol[1] * arrSecondCol[2] + " lei");

    rowThree.appendChild(rowThreeColOne);
    rowThree.appendChild(rowThreeColTwo);

    tbody.appendChild(rowOne);
    tbody.appendChild(rowTwo);
    tbody.appendChild(rowThree);

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;

}
function createTableNutrition(arrFirstCol,arrSecondCol){
    let table = document.createElement("table");

    let thead = document.createElement("thead");

    let colOne = myCreateElement("td",null,null,null,arrFirstCol[0]);
    let colTwo = myCreateElement("td",null,null,null,arrSecondCol[0]);

    thead.appendChild(colOne);
    thead.appendChild(colTwo);

    let tbody = document.createElement("tbody");

    let rowOne = document.createElement("tr");
    let rowTwo = document.createElement("tr");
    let rowThree = document.createElement("tr");
    let rowFour = document.createElement("tr");
    let rowFive = document.createElement("tr");

    let rowOneColOne = myCreateElement("td",null,null,null,arrFirstCol[1]);
    let rowOneColTwo = myCreateElement("td",null,null,null,arrSecondCol[1] );

    rowOne.appendChild(rowOneColOne);
    rowOne.appendChild(rowOneColTwo);

    let rowTwoColOne = myCreateElement("td",null,null,null,arrFirstCol[2]);
    let rowTwoColTwo = myCreateElement("td",null,null,null,arrSecondCol[2]);

    rowTwo.appendChild(rowTwoColOne);
    rowTwo.appendChild(rowTwoColTwo);

    let rowFourColOne = myCreateElement("td",null,null,null,arrFirstCol[4]);
    let rowFourColTwo = myCreateElement("td",null,null,null,arrSecondCol[4]);

    rowFour.appendChild(rowFourColOne);
    rowFour.appendChild(rowFourColTwo);

    let rowFiveColOne = myCreateElement("td",null,null,null,arrFirstCol[5]);
    let rowFiveColTwo = myCreateElement("td",null,null,null,arrSecondCol[5]);

    rowFive.appendChild(rowFiveColOne);
    rowFive.appendChild(rowFiveColTwo);

    let rowThreeColOne = myCreateElement("td",null,null,null,arrFirstCol[3]);
    let rowThreeColTwo = myCreateElement("td",null,null,null,arrSecondCol[3]);

    rowThree.appendChild(rowThreeColOne);
    rowThree.appendChild(rowThreeColTwo);

    tbody.appendChild(rowOne);
    tbody.appendChild(rowTwo);
    tbody.appendChild(rowThree);
    tbody.appendChild(rowFour);
    tbody.appendChild(rowFive);

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;

}
function viewMoreProduct(product){

    let productContainer = myCreateElement("div","product-more",null,null,null);
    let titleProduct = myCreateElement("h2",null,null,null,product[0].title);
    let headContainer = myCreateElement("div","product-details-head",null,null,null);

    let productGalerie = myCreateElement("div","product-galerie",null,null,null);


    let imageArray = product[0].image;
    let mainImage = myCreateElement("img","product-main-img",null,imageArray[0],null);

    let containerImages = myCreateElement("div","product-second-img-group",null,null,null);
    for(let i in imageArray){
        containerImages.appendChild(myCreateElement("img","product-second-img",null,imageArray[i],null));
    }

    productGalerie.appendChild(mainImage);
    productGalerie.appendChild(containerImages);

    headContainer.appendChild(productGalerie);

    productContainer.appendChild(titleProduct);
    productContainer.appendChild(headContainer);

    container.appendChild(productContainer);

    let table = createTable(["Denumire","Pret","Bucati","Total Pret"],["Valoare",product[0].price,1]);

    let headContainerAction = myCreateElement("div","product-action",null,null,null);

    let subTitle = myCreateElement("h2",null,null,null,"Prentru Cos");

    headContainerAction.appendChild(subTitle);
    headContainerAction.appendChild(table);

    let cantity = document.createElement("div");
    cantity.className = "increase-decrease";

    let btnMinus = document.createElement("button");
    btnMinus.innerText = "-";
    

    let value = document.createElement("span");
    value.innerText = 1;

    let btnPlus = document.createElement("button");
    btnPlus.innerText = "+";

    btnMinus.addEventListener("click",()=>{
        if(value.innerText - 1 >= 1){
            value.innerText -= 1;
            updateArray(titleProduct,value);
        }
    })

    btnPlus.addEventListener("click",()=>{
        let val = parseInt(value.innerText);
        val +=1;
        value.innerText = val;

        updateArray(titleProduct.innerText,value);
    })

    cantity.appendChild(btnMinus);
    cantity.appendChild(value);
    cantity.appendChild(btnPlus);


    headContainerAction.appendChild(cantity);

    let addCart = myCreateElement("button","add-cart",null,null,"Adauga in cos");

    addCart.addEventListener("click",()=>{
        let obj = [];
        let val = localStorage.getItem("products");

        if(val.length != 0){
            obj = JSON.parse(val);  
        }

        product[0].number = parseInt(value.innerText);
        obj.push(product[0]);
        localStorage.setItem("products",JSON.stringify(obj));

        let sum = 0;
        for(let i in obj){
            sum += obj[i].number;
        }

        numberOfItems.innerText = sum;

        container.removeChild(productContainer);
        container.style.display = "none";
    })

    headContainerAction.appendChild(addCart);

    headContainer.appendChild(headContainerAction);

    let description = myCreateElement("div","descriere",null,null,null);

    let titleDescription  = myCreateElement("h3",null,null,null,"Descriere");

    let separator = document.createElement("hr");

    let textDescription = myCreateElement("div",null,null,null,product[0].description);

    description.appendChild(titleDescription);
    description.appendChild(separator);
    description.appendChild(textDescription);

    productContainer.appendChild(description);

    let nutrition = myCreateElement("div","nutrition-declarated",null,null,null);
    let titleNutrition = myCreateElement("h3",null,null,null,"Declaratie Nutritionala");
    let separatorSecond = document.createElement("hr");

    let nutritionTable = createTableNutrition(["Denumire","Grasimi","Glucide","Fibre","Proteine","Sare"],
                    ["Valoare",product[1].grasimi,product[1].glucide,product[1].fibre,product[1].proteine,product[1].sare]);
    
    nutrition.appendChild(titleNutrition);
    nutrition.appendChild(separatorSecond);
    nutrition.appendChild(nutritionTable);

    productContainer.appendChild(nutrition);

    let recenziSection = myCreateElement("div","recenzii",null,null,null);

    let recenziiProdus = myCreateElement("h3",null,null,null,"Recenzii Produs ("+product[2].length+")");

    let separatorReviews = document.createElement("hr");

    recenziSection.appendChild(recenziiProdus);
    recenziSection.appendChild(separatorReviews);

    for(let key in product[2]){
        addReview(recenziSection,product[2][key]);
    }

    productContainer.appendChild(recenziSection);

    container.style.display = "block";
}
function addReview(parent,rev){
    let review = myCreateElement("div","recenzie",null,null,null);

    let author = myCreateElement("h4",null,null,null,rev.fullname);

    let groupStar = document.createElement("div");

    for(let i = 0;i< 5 ;i++){
        let star = myCreateElement("img","recenzie-star",null,null,null);
        if(i < rev.star){
            star.src = "../IMG/yellow-star.png";
        }
        else
            star.src = "../IMG/white-star.ico";
        groupStar.appendChild(star);
    }

    review.appendChild(author);
    review.appendChild(groupStar);

    parent.appendChild(review);
}
function productToPage(){
    for(let key in products){
        let obj = products[key][0];
        addProduct(key,obj.title,obj.image[0],obj.description,obj.price);
    }
    addPagination();
}

function addProduct(index,title,src,description,price){

    let product = document.createElement("div");
    product.className = "product";

    let productLeft = document.createElement("div");
    productLeft.className = "product-left";
    
    let img = document.createElement("img");
    img.className = "product-img";
    img.src = src;

    let titleProduct = document.createElement("div");
    titleProduct.innerText = title;

    productLeft.appendChild(img);
    productLeft.appendChild(titleProduct);


    let productCenter = document.createElement("div");
    productCenter.className = "product-center";
    productCenter.innerText = description;


    let productRight = document.createElement("div");
    productRight.className = "product-right";

    let priceProduct = document.createElement("h3");
    priceProduct.innerText = price + " lei ";

    let btnView = document.createElement("button");
    btnView.innerText = "Viziualizeaza";
    btnView.addEventListener("click",()=>{
        viewMoreProduct(products[index]);
    })

    productRight.appendChild(priceProduct);
    productRight.appendChild(btnView);

    product.appendChild(productLeft);
    product.appendChild(productCenter);
    product.appendChild(productRight);

    productsPlace.appendChild(product);
}

function addPagination(){
    let pagination = document.createElement("div");
    pagination.className = "pagination";

    let btnMinus = document.createElement("button");
    btnMinus.className = "page-button-minus"
    btnMinus.id = "prev-btn";
    btnMinus.innerText = "Prev";

    let btnPlus = document.createElement("button");
    btnPlus.className = "page-button-plus"
    btnPlus.id = "next-btn";
    btnPlus.innerText = "Next";

    let pageNumber = document.createElement("div");
    pageNumber.className = "page-number";
    pageNumber.id = "list-number";

    btnPlus.addEventListener("click",()=>{
        objNumberPage.start = objNumberPage.final;
    
        if(objNumberPage.final + objNumberPage.increment < objNumberPage.max)
            objNumberPage.final += objNumberPage.increment;
        else
            objNumberPage.final = objNumberPage.max;
    
        loadButtons(pageNumber,objNumberPage.start,objNumberPage.final ,btnMinus,btnPlus);
        
    })
    btnMinus.addEventListener("click",()=>{
        
        objNumberPage.final = objNumberPage.start;
        objNumberPage.start -= objNumberPage.increment;
    
        loadButtons(pageNumber,objNumberPage.start,objNumberPage.final ,btnMinus,btnPlus);
        
    })

    loadButtons(pageNumber,objNumberPage.start,objNumberPage.final ,btnMinus,btnPlus);

    pagination.appendChild(btnMinus);
    pagination.appendChild(pageNumber);
    pagination.appendChild(btnPlus);

    productsPlace.appendChild(pagination);
}
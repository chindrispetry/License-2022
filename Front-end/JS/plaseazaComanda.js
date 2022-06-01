sectionCart.removeChild(document.getElementById("cart-elem"));
showForm();

function showForm(){
    
    let formComanda = document.createElement("form");
    formComanda.className = "plaseaza-comanda";

    let title = document.createElement("h2");
    title.innerText = "Plaseaza Comanda";

    let subTitleFirst = document.createElement("h5");
    subTitleFirst.innerText = "Datele tale personale";

    let separator = document.createElement("hr");
    
    // personal data
    let divPersonalData = document.createElement("div");
    divPersonalData.className = "date-personale";
    //full name
    let fName = fullName.call();

    //email
    let lblEmail = document.createElement("label");
    lblEmail.innerText="E-mail";

    let inputEmail = document.createElement("input");
    inputEmail.type = "text";

    //number of telephone
    let lblNumberOfPhone = document.createElement("label");
    lblNumberOfPhone.innerText="Numar de telefon";

    let inputNumberOfPhone = document.createElement("input");
    inputNumberOfPhone.type = "number";

    divPersonalData.appendChild(fName);
    divPersonalData.appendChild(lblEmail);
    divPersonalData.appendChild(inputEmail);
    divPersonalData.appendChild(lblNumberOfPhone);
    divPersonalData.appendChild(inputNumberOfPhone);



    formComanda.appendChild(title);
    formComanda.appendChild(subTitleFirst);
    formComanda.appendChild(separator);
    formComanda.appendChild(divPersonalData);


    //section 2

    let divAddress = document.createElement("div");
    divAddress.className = "date-personale";

    let subTitleSecond = document.createElement("h5");
    subTitleSecond.innerText = "Locatie";

    let separator1 = document.createElement("hr");
    //region
    let lblRegion = document.createElement("label");
    lblRegion.innerText="Judetul";

    let inputRegion = document.createElement("input");
    inputRegion.type = "text";

    //village/town/city
    let lblVillage = document.createElement("label");
    lblVillage.innerText="Localitate";

    let inputVillage = document.createElement("input");
    inputVillage.type = "text";
    //Street and number

    let oldText1 = arrOfText[0].text;
    let oldText2 = arrOfText[1].text;

    arrOfText[0].text = "Strada";
    arrOfText[1].text = "Numar";

    let address = fullName.call();

    arrOfText[0].text = oldText1;
    arrOfText[1].text = oldText2;

    //postal code
    let lblCod = document.createElement("label");
    lblCod.innerText="Cod Postal";

    let inputCod = document.createElement("input");
    inputCod.type = "text";


    divAddress.appendChild(lblRegion);
    divAddress.appendChild(inputRegion);
    divAddress.appendChild(lblVillage);
    divAddress.appendChild(inputVillage);
    divAddress.appendChild(address);
    divAddress.appendChild(lblCod);
    divAddress.appendChild(inputCod);

    formComanda.appendChild(subTitleSecond);
    formComanda.appendChild(separator1);
    formComanda.appendChild(divAddress);

    let subTitleThirth = document.createElement("h5");
    subTitleThirth.innerText = "Produsele din Cos";

    let total = document.createElement("div");
    total.className = "total";

    let denumireTotal = document.createElement("h4");
    denumireTotal.className = "title-product final";
    denumireTotal.innerText = "Total comanda";

    let priceTotal = document.createElement("h4");
    priceTotal.className = "title-product";
    priceTotal.innerText = "Pret : 40 lei";

    total.appendChild(denumireTotal);
    total.appendChild(priceTotal);

    formComanda.appendChild(subTitleThirth);


    if(arrOfProduct.length == 0){
        let empty = document.createElement("div");
        empty.innerText = "Nu exista produse in cos!"
        empty.style.color = "red";
        formComanda.appendChild(empty);
    }else{
        for(var key in arrOfProduct)
            productToCart(formComanda,arrOfProduct[key].nume,arrOfProduct[key].nr,arrOfProduct[key].price);
        formComanda.appendChild(total);
    }

    

    //button cancel and plaseaza comanda
    let divBtns = document.createElement("div");
    divBtns.className = "plaseaza-comanda-btns";

    let cancel = document.createElement("button");
    cancel.className = "cancel";
    cancel.innerText = "Cancel";
    cancel.addEventListener("click",()=>{
        content.removeChild(formComanda);
        content.style.display = "none";
        body.style.overflow = "auto";
    })

    let done = document.createElement("button");
    done.className = "done";
    done.innerText = "Plaseaza Comanda";

    divBtns.appendChild(cancel);
    divBtns.appendChild(done);
    

    formComanda.appendChild(divBtns);

    //show a div in page with background black;
    content.style.display = "block";

    //hidden scroll-bar in browser
    body.style.overflow = "hidden";

    content.appendChild(formComanda);
}
//select element from index.html
var content = document.getElementById("add-content");
var sectionCart = document.getElementById("cart-section");
let body = document.querySelector("body");

localStorage.setItem("products",'');

// add event listener to button auth
document.getElementById("auth-btn").addEventListener("click",()=>{
    showAutentificare();
})

document.getElementById("cart").addEventListener("click",()=>{
    showCartShop();
})


//arrays for static test
const arrOfProduct = [{nume : "Fulgi de Ovaz",
                      nr : "2",
                      price : "8.59 lei"
                    },{
                      nume : "Fulgi de Secara",
                      nr : "5",
                      price : "4.59 lei"
                     }
                    ];
const arrOfText = [{text : "Nume"},{text : "Prenume"}];

function showCartShop(){

    let close = document.createElement("span");
    close.innerText = "X";
    close.className = "close";
    close.addEventListener("click",()=>{
        sectionCart.removeChild(cart);
    })

    let cart = document.createElement("div");
    cart.className = "cart-with-objects";
    cart.id = "cart-elem"

    sectionCart.appendChild(cart);
    //title
    let title = document.createElement("h2");
    title.innerText = "Articole";
    
    // button
    let btnComanda = document.createElement("button");
    btnComanda.innerText = "Plaseaza Comanda";
    btnComanda.id = "plaseaza-comanda";
    btnComanda.addEventListener("click",()=>{
        let script = document.createElement("script");
        script.src="../JS/plaseazaComanda.js";
        document.head.appendChild(script);

    })

    cart.appendChild(close);
    cart.appendChild(title);

    let val = localStorage.getItem("products");
    let arr = [];
    if(val.length != 0){
        arr = JSON.parse(val);
    }

    if(arr.length == 0){
        let empty = document.createElement("div");
        empty.innerText = "Nu exista produse in cos!"
        empty.style.textAlign = "center";
        empty.style.color = "red";
        cart.appendChild(empty);
    }else
        for(var key in arr){
            productToCart(cart,arr[key].title,arr[key].number,arr[key].price);
    }
    cart.appendChild(btnComanda);

}

function productToCart(parent,nume,nr,price){

    let productCart = document.createElement("div");
    productCart.className = "product-cart";

    let item = document.createElement("ul");

    //title of product
    let titleProduct = document.createElement("h4");
    titleProduct.className = "title-product";
    titleProduct.innerText = nume;

    // price of product
    let valuePrice = document.createElement("li");
    valuePrice.innerText = "Pret : " + price;

    // increment product by 1 or decrease
    let numberOfProduct = document.createElement("li");

    let cantity = document.createElement("div");
    cantity.className = "increase-decrease-cart";

    let btnMinus = document.createElement("button");
    btnMinus.innerText = "-";
    

    let value = document.createElement("span");
    value.innerText = nr;

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

    numberOfProduct.appendChild(cantity);

    //delete product
    let remove = document.createElement("li");
    let btn = document.createElement("span");
    btn.innerText = "X";
    remove.appendChild(btn);

    item.appendChild(titleProduct);
    item.appendChild(valuePrice);
    item.appendChild(numberOfProduct);
    item.appendChild(remove);

    productCart.appendChild(item);

    parent.appendChild(productCart);
}
function updateArray(denumire,val){
    for(var key in arrOfProduct){
        if(denumire.toString().localeCompare(arrOfProduct[key].nume) == 0){
            arrOfProduct[key].nr = val.innerText;
        }
    }
}
function showAutentificare(){
    //show a div in page with background black;
    content.style.display = "block";

    //hidden scroll-bar in browser
    body.style.overflow = "hidden";

    let formLogin = document.createElement("form");
    formLogin.className = "login";

    //close button
    let close = document.createElement("span");
    close.innerText = "X";
    close.className = "close";
    close.addEventListener("click",()=>{
        content.removeChild(formLogin);
        content.style.display="none";
        body.style.overflow = "auto";
    })
    //title for form
    let title = document.createElement("h2");
    title.innerText="Autentificare";

    //email
    let lblEmail = document.createElement("label");
    lblEmail.innerText="E-mail";

    let inputEmail = document.createElement("input");
    inputEmail.type = "text";

    //password
    let lblPassword = document.createElement("label");
    lblPassword.innerText="Password";

    let inputPassword = document.createElement("input");
    inputPassword.type = "text";


    //links
    let firstLink = document.createElement("a");
    firstLink.innerText = "Ai uitat parola?";

    let secondLink = document.createElement("a");
    secondLink.innerText = "Mergi la Inregistrare !";
    secondLink.style.cursor = "pointer";

    secondLink.addEventListener("click",()=>{
        showInregistrare();
        content.removeChild(formLogin);
    })

    //button for authetification
    let btnLogin = document.createElement("button");
    btnLogin.innerText = "Autentificare";

    //all tag is added to parent form
    formLogin.appendChild(close);
    formLogin.appendChild(title);
    formLogin.appendChild(lblEmail);
    formLogin.appendChild(inputEmail);
    formLogin.appendChild(lblPassword);
    formLogin.appendChild(inputPassword);
    formLogin.appendChild(firstLink);
    formLogin.appendChild(secondLink);
    formLogin.appendChild(btnLogin);

    //form is added to content div
    content.appendChild(formLogin);
}

function showInregistrare(){

    let formRegister = document.createElement("form");
    formRegister.className = "login";

    //close button
    let close = document.createElement("span");
    close.innerText = "X";
    close.className = "close";
    close.addEventListener("click",()=>{
        content.removeChild(formRegister);
        content.style.display="none";
        body.style.overflow = "auto";
    })

    //title for form
    let title = document.createElement("h2");
    title.innerText="Inregistrare";

    //full name
    let grandDiv = fullName.call();

    //email
    let lblEmail = document.createElement("label");
    lblEmail.innerText="E-mail";

    let inputEmail = document.createElement("input");
    inputEmail.type = "text";

    //password
    let lblPassword = document.createElement("label");
    lblPassword.innerText="Password";

    let inputPassword = document.createElement("input");
    inputPassword.type = "password";

    //repeated password
    let lblRepeatedPassword = document.createElement("label");
    lblRepeatedPassword.innerText="Confirm Password";

    let inputRepeteadPassword = document.createElement("input");
    inputRepeteadPassword.type = "password";

    //link
    let firstLink = document.createElement("a");
    firstLink.style.cursor = "pointer";
    firstLink.innerText = "Autentificare";
    firstLink.addEventListener("click",()=>{
        showAutentificare();
        content.removeChild(formRegister);
    })

    //termeni si conditii
    let termAndCond = document.createElement("div");
    termAndCond.className = "termeni-conditii";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let text = document.createElement("p");
    text.innerText = "Sunt de acord cu Termeni & Conditiile";

    termAndCond.appendChild(checkbox);
    termAndCond.appendChild(text);

    //button for register
    let btnRegister = document.createElement("button");
    btnRegister.innerText = "Inregistrare";


    //all tag is added to parent form
    formRegister.appendChild(close);
    formRegister.appendChild(title);
    formRegister.appendChild(grandDiv);

    formRegister.appendChild(lblEmail);
    formRegister.appendChild(inputEmail);

    formRegister.appendChild(lblPassword);
    formRegister.appendChild(inputPassword);

    formRegister.appendChild(lblRepeatedPassword);
    formRegister.appendChild(inputRepeteadPassword);

    formRegister.appendChild(firstLink);
    formRegister.appendChild(termAndCond);

    formRegister.appendChild(btnRegister);

    //form is added to content div
    content.appendChild(formRegister);
}

const fullName = ()=>{
    let grandDiv = document.createElement("div");
    grandDiv.className="full-name";

    let parentDivName = document.createElement("div");
    parentDivName.className="nume";

    let parentDivPrenume = document.createElement("div");
    parentDivPrenume.className="prenume";

    let lblNume = document.createElement("label");
    lblNume.innerText = arrOfText[0].text;

    let inputNume = document.createElement("input");
    inputNume.type = "text";

    let lblPrenume = document.createElement("label");
    lblPrenume.innerText = arrOfText[1].text;

    let inputPrenume = document.createElement("input");
    inputPrenume.type = "text";


    parentDivName.appendChild(lblNume);
    parentDivName.appendChild(inputNume);

    parentDivPrenume.appendChild(lblPrenume);
    parentDivPrenume.appendChild(inputPrenume);

    grandDiv.appendChild(parentDivName);
    grandDiv.appendChild(parentDivPrenume);

    return grandDiv;
}
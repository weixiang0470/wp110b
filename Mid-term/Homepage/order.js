function What(x) {
    var Name = document.getElementById("ProductName");
    Name.innerHTML = x;
    localStorage.setItem("WhatProduct", x);
    document.getElementById("Quantities").innerHTML = 1;
    document.getElementById("Price").innerHTML = `0NTD`;
}

function ShowOrder() {
    var order = document.getElementById('id04');
    order.style.display = 'block';
}

function Minus() {
    var x = document.getElementById("Quantities").innerHTML;
    /*var y = parseInt(x);
    console.log(x, y);*/
    if (x > 1) {
        x--;
        document.getElementById("Quantities").innerHTML = x;
    } else document.getElementById("Quantities").innerHTML = x;
    Calculate()
}

function Plus() {
    var x = document.getElementById("Quantities").innerHTML;
    /*var y = parseInt(x);
    console.log(x, y);*/
    x++;
    document.getElementById("Quantities").innerHTML = x;
    Calculate()
}

function Calculate() {
    var x = document.getElementById("Quantities").innerHTML;
    var product = localStorage.getItem("WhatProduct");
    var Identity = localStorage.getItem("CurrentUser");
    var Price;
    var Single = document.getElementById("SinglePrice");

    if (product == "OmegaEgg") {
        if (Identity == "Guest") {
            Price = 120;
            Single.innerHTML = `${Price}NTD`;
        } else {
            Price = 105;
            Single.innerHTML = `${Price}NTD`;
        }
    } else if (product == "10eggs") {
        if (Identity == "Guest") {
            Price = 75;
            Single.innerHTML = `${Price}NTD`;
        } else {
            Price = 65;
            Single.innerHTML = `${Price}NTD`;
        }
    } else if (product == "30eggs") {
        if (Identity == "Guest") {
            Price = 200;
            Single.innerHTML = `${Price}NTD`;
        } else {
            Price = 180;
            Single.innerHTML = `${Price}NTD`;
        }
    } else if (product == "Chicken") {
        if (Identity == "Guest") {
            Price = 150;
            Single.innerHTML = `${Price}NTD`;
        } else {
            Price = 140;
            Single.innerHTML = `${Price}NTD`;
        }
    } else if (product == "Peeled") {
        if (Identity == "Guest") {
            Price = 250;
            Single.innerHTML = `${Price}NTD`;
        } else {
            Price = 230;
            Single.innerHTML = `${Price}NTD`;
        }
    } else if (product == "Bird eggs") {
        if (Identity == "Guest") {
            Price = 50;
            Single.innerHTML = `${Price}NTD`;
        } else {
            Price = 45;
            Single.innerHTML = `${Price}NTD`;
        }
    }
    document.getElementById("Price").innerHTML = `${x*Price}NTD`;
    localStorage.setItem("Price", x * Price);
}

function SendOrder() {
    alert("Added to cart!");
    document.getElementById("id04").style.display = "none";
    var CartItems = [];
    var CartPrice = [];

    var WhatProduct = localStorage.getItem("WhatProduct");
    var Price = localStorage.getItem("Price");
    if (localStorage.getItem("CartItems") == null) localStorage.setItem("CartItems", CartItems);
    if (localStorage.getItem("CartPrice") == null) localStorage.setItem("CartPrice", CartPrice);

    CartItems = localStorage.getItem("CartItems").split(',');
    CartPrice = localStorage.getItem("CartPrice").split(',');
    CartItems.push(WhatProduct);
    CartPrice.push(Price);

    localStorage.setItem("CartItems", CartItems);
    localStorage.setItem("CartPrice", CartPrice);
}

function CartSet() {
    var Items = localStorage.getItem("CartItems").split(',');
    var Price = localStorage.getItem("CartPrice").split(',');
    var x = document.getElementById("ItemsPlace");
    x.innerHTML = "";
    for (var i = 1; i < Items.length; i++) {
        x.innerHTML += `${Items[i]} : ${Price[i]}<br>`;
    }
}

function Cancel() {
    localStorage.setItem("CartItems", "");
    localStorage.setItem("CartPrice", "");
    CartSet();
}

function OrderAndCancel() {
    var items = localStorage.getItem("CartItems");
    if (items != "") alert("Order sent!!!");
    Cancel();
}
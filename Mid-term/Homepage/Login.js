//Matching member name/email, password
function Match() {
    var user;
    var email;
    var password;

    if (localStorage.getItem("password") == null) localStorage.setItem("password", "");

    if (localStorage.getItem("username") == null) localStorage.setItem("username", "");

    if (localStorage.getItem("email") == null) localStorage.setItem("email", "");

    user = localStorage.getItem("username").split(",");
    email = localStorage.getItem("email").split(",");
    password = localStorage.getItem("password").split(",");

    var Current_User = document.getElementById("LoginForm").elements[0].value;
    var Current_Password = document.getElementById("LoginForm").elements[1].value;
    var Current_Email;
    var number = 0;
    var Index_User = 0,
        Index_Password = 0;
    var Match_User = false,
        Match_Password = false;
    for (var i of user) {
        number++;
        if (Current_User == i) {
            Match_User = true;
            Current_Email = email[number - 1];
            break;
        } else {
            Match_User = false;
            Index_User++;
        }
    }
    if (Match_User == false) {
        Index_User = 0;
        for (var i of email) {
            if (Current_User == i) {
                Match_User = true;
                break;
            } else {
                Match_User = false;
                Index_User++;
            }
        }
    }
    Index_Password = Index_User;
    if (password[Index_Password] == Current_Password) Match_Password = true;

    if (Current_User == "admin" && Current_Password == "admin") {
        localStorage.setItem("CurrentUser", "Admin");
        localStorage.setItem("CurrentUserName", "Admin");
        localStorage.setItem("CurrentUserEmail", "admin@admin.com.tw");
        alert("You're admin");
        TestUser();
        localStorage.setItem("CartItems", "");
        localStorage.setItem("CartPrice", "");
    } else if (Current_User != "" && Match_User && Match_Password && Index_Password == Index_User) {
        localStorage.setItem("CurrentUser", "Member");
        localStorage.setItem("CurrentUserName", Current_User);
        localStorage.setItem("CurrentUserEmail", Current_Email);
        alert("You're member");
        TestUser();
        localStorage.setItem("CartItems", "");
        localStorage.setItem("CartPrice", "");
    } else {
        localStorage.setItem("CurrentUser", "Guest");
        alert("Username or password wrong");
        TestUser();
    }
}

//To know which user right now(Admin/Member/Guest)
function TestUser() {
    var CurUser = localStorage.getItem("CurrentUser");
    if (CurUser == "Admin") {
        document.getElementById("WhatUser").src = "../Images/AdminAcct.png";
        document.getElementById("Login/out").src = "../Images/Logout.png";
        document.getElementById("Login").innerHTML = "Logout";
    } else if (CurUser == "Member") {
        document.getElementById("WhatUser").src = "../Images/UserAcct.png";
        document.getElementById("Login/out").src = "../Images/Logout.png";
        document.getElementById("Login").innerHTML = "Logout";
    } else if (CurUser == "Guest") {
        document.getElementById("WhatUser").src = "../Images/GuestAcct.png";
        document.getElementById("Login/out").src = "../Images/login.png";
        document.getElementById("Login/out").style = "top:-1.5vw";
    }
}
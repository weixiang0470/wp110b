const admin = {
    username: 'admin',
    password: 'admin',
    email: 's50@student.nqu.edu.tw',
}
var Available = {
    user: false,
    email: false,
    password: false,
}

function signup() {
    var uCheck = false,
        eCheck = false,
        pCheck = false,
        cCHeck = false;

    var UserName = document.getElementById("SignUpForm").elements[0].value;
    var Email = document.getElementById("SignUpForm").elements[1].value;
    var PassWord = document.getElementById("SignUpForm").elements[2].value;
    var RPassWord = document.getElementById("SignUpForm").elements[3].value;
    cCHeck = document.getElementById("labcheck").checked;


    var error = "";
    if (UserName != "") uCheck = true;
    else error += "Please enter username!\n";
    if (Email.match(/\w+@[a-z]+\.[a-z.]+/)) eCheck = true;
    else error += "Wrong email format!\n";
    if (PassWord == RPassWord && PassWord != "") pCheck = true;
    else error += "Password not match!\n";
    if (!cCHeck) error += "Please agree our term of service!\n";
    else;

    if (!pCheck || !eCheck || !cCHeck || !uCheck) alert(error);
    else {
        CheckUser(UserName);
        CheckEmail(Email);
        if (localStorage.getItem("password") == null) localStorage.setItem("password", "");
        Available.password = true;
        if (Available.user && Available.email && Available.password) {
            alert("Sign up success!");
            AddData(UserName, Email, PassWord);
        }
    }
}


function CheckUser(Cuser) {
    if (localStorage.getItem("username") == null) localStorage.setItem("username", "");
    var IsUser = localStorage.getItem("username").split(",");
    for (var i of IsUser) {
        if (i == Cuser || Cuser == "admin") {
            alert("Username already been used by others");
            Available.user = false;
            break;
        } else Available.user = true;
    }
}

function CheckEmail(Cemail) {

    if (localStorage.getItem("email") == null) localStorage.setItem("email", "");
    var IsEmail = localStorage.getItem("email").split(",");
    for (var i of IsEmail) {
        if (i == Cemail || Cemail == "s50@student.nqu.edu.tw") {
            alert("Email already been used by others");
            Available.email = false;
            break;
        } else Available.email = true;
    }
}

function AddData(Auser, Aemail, Apassword) {
    var UserData = [],
        EmailData = [],
        PasswordData = [];

    UserData = localStorage.getItem("username").split(',');
    EmailData = localStorage.getItem("email").split(',');
    PasswordData = localStorage.getItem("password").split(',');

    UserData.push(Auser);
    EmailData.push(Aemail);
    PasswordData.push(Apassword);

    localStorage.setItem("username", UserData);
    localStorage.setItem("email", EmailData);
    localStorage.setItem("password", PasswordData);

}
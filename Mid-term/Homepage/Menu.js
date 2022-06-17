//when mouse hover will change it's background color
function hover(x) {
    x.style.backgroundColor = "beige";
}

//when mouse moved out will change back it's background color
function out(x) {
    x.style.backgroundColor = "bisque";
}

//changing Login to Logout, and vice versa
function Show() {
    var x = document.getElementById("Login");
    var test = localStorage.getItem("CurrentUser");
    if (test == "Admin" || test == "Member") x.innerHTML = "Logout";
    else x.innerHTML = "Login";
}

//Show User's information before logout
function TestInformation() {
    var x = document.getElementById("Login").innerHTML;
    if (x == "Login") {
        document.getElementById('id01').style.display = 'block';
    } else {
        var currentuser = localStorage.getItem("CurrentUserName");
        var currentemail = localStorage.getItem("CurrentUserEmail");
        document.getElementById("UserInformation").innerHTML = `&#9775${currentuser}&#9775<hr style="position: relative; top: -20px;">${currentemail}`;
        document.getElementById('id03').style.display = 'block';
    }
    /*onclick="document.getElementById('id01').style.display='block'"
    onclick="document.getElementById('id03').style.display='block'"*/
}

//After logout renew everything
function logout() {
    localStorage.setItem("CurrentUser", "Guest");
    localStorage.setItem("CurrentUserName", "");
    localStorage.setItem("CurrentUserEmail", "");
    TestUser();
    location.reload();
}
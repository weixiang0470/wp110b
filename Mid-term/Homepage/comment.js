let OmegaPosts = [];
let EggPosts = [];
let DeliveryPosts = [];
// 顯示 id 指定的 panel (div)
function showPanel(id) {
    document.querySelectorAll('.panel').forEach((node) => node.style.display = 'none')
    document.getElementById(id).style.display = 'block'
}

// 列出所有貼文
function list() {
    showPanel('list')
}

//OmegaSave
function OmegaSave() {
    var comment = document.getElementById('OmegaCommentArea').value;
    var user = localStorage.getItem("CurrentUserName");
    var test = localStorage.getItem("CurrentUser");
    if (test == "Guest") {
        alert("You are not member!!");
    } else {
        OmegaPosts.push({
            User: user,
            Comment: comment,
        })
        alert('Comment Success')
        document.getElementById('OmegaCommentArea').value = ''

        let OmegaComments = [];
        for (let i = 0; i < OmegaPosts.length; i++) {
            OmegaComments.push(`<li><h3>${OmegaPosts[i].User}</h3><p>${OmegaPosts[i].Comment}</p></li>`)
        }
        document.getElementById('OmegaComment').innerHTML = OmegaComments.join('\n')
    }
}

//EggSave
function EggSave() {
    var comment = document.getElementById('EggCommentArea').value;
    var user = localStorage.getItem("CurrentUserName");
    var test = localStorage.getItem("CurrentUser");
    if (test == "Guest") {
        alert("You are not member!!");
    } else {
        EggPosts.push({
            User: user,
            Comment: comment,
        })
        alert('Comment Success')
        document.getElementById('EggCommentArea').value = ''

        let EggComments = [];
        for (let i = 0; i < EggPosts.length; i++) {
            EggComments.push(`<li><h2>${EggPosts[i].User}</h2><p>${EggPosts[i].Comment}</p></li>`)
        }
        document.getElementById('EggComment').innerHTML = EggComments.join('\n')
    }
}

//DeliverySave
function DeliverySave() {
    var comment = document.getElementById('DeliveryCommentArea').value;
    var user = localStorage.getItem("CurrentUserName");
    var test = localStorage.getItem("CurrentUser");
    if (test == "Guest") {
        alert("You are not member!!");
    } else {
        DeliveryPosts.push({
            User: user,
            Comment: comment,
        })
        alert('Comment Success')
        document.getElementById('DeliveryCommentArea').value = ''

        let DeliveryComments = [];
        for (let i = 0; i < DeliveryPosts.length; i++) {
            DeliveryComments.push(`<li><h2>${DeliveryPosts[i].User}</h2><p>${DeliveryPosts[i].Comment}</p></li>`)
        }
        document.getElementById('DeliveryComment').innerHTML = DeliveryComments.join('\n')
    }
}

//Omega
function Omega(match) {
    showPanel('Omega')
}
//Egg
function Egg(match) {
    showPanel('Egg')
}
//Delivery
function Delivery(match) {
    showPanel('Delivery')
}

// router 路徑地圖
let routeMap = [
    [/^\/?list\/?$/, list],
    [/^\/?Omega\/?$/, Omega],
    [/^\/?Delivery\/?$/, Delivery],
    [/^\/?Egg\/?$/, Egg],
]

// 當 hash 改變時，觸發路徑地圖對應的函數。
window.onhashchange = function() {
    var hash = window.location.hash.trim().substring(1)
    for (let [regexp, f] of routeMap) {
        var m = hash.match(regexp)
        if (m) {
            f(m, hash);
            break;
        }
    }
}

window.onload = function() {
    window.location.hash = '#/list/'
    list();
}
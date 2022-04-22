//any single x integration

function integral(y,xa,xb){
    var dif=0.001;
    var area=0.0;
    for(var x=xa;x<=xb;x+=dif){
        area+=(y(x) * dif);
        //console.log(area);
    }
    return area;
}

function square(x){
    return x*x;
}
var cube = function(x){
    return x*x*x;
}
var one = function(x){
    return x;
}
var squareroot = function(x){
    return Math.sqrt(x);
}
console.log("integral(x,1,10)="+integral(one,1,10));
console.log("integral(x^2,1,10)="+integral(square,1,10));
console.log("integral(x^3,1,10)="+integral(cube,1,10));
console.log("integral(sqrt(x),1,10)="+integral(squareroot,1,10));
console.log("integral(sin(x),1,10)="+integral(Math.sin,1,10));
console.log("integral(cos(x),1,10)="+integral(Math.cos,1,10));
console.log("integral(tan(x),1,10)="+integral(Math.tan,1,10));
/*var x;
for(var i=0;i<pw;i++){
    x*=x;
}*/
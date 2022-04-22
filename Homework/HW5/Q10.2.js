//y = a*x^2 + bx + c
var integral = function(a,b,c,xa,xb,h){
    var y,area,result=0;
    var dif=((xb-xa)/h);
    for(var i=0;i<h;i++){
        xa+=dif;
        //console.log(xa);
        y=( a*Math.pow(xa,2) + b*xa +c ); 
        area=y*dif;
        result+=area;
    }
    return result;
}
//integral(1,0,0,0,2,100);
console.log(integral(3,2,6,1,5,1000));
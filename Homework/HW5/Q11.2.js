var gcd=function(a,b){
    if(a%b==0)return b;
    else return gcd(b,a%b);
}
//console.log(gcd(999,27));
var ratio=function(x,y){
    var x1=x;
    var y1=y;
    x1/=gcd(x,y);
    y1/=gcd(x,y);
    if(y1==1)return x1;
    else return x1+'/'+y1;
}
var r1 = new ratio(1,3);
console.log(r1);
console.log('9/108='+ratio(9,108));
console.log('108/9='+ratio(108,9));
console.log('9/9='+ratio(9,9));
console.log('1/3='+ratio(1,3));
console.log('4/3='+ratio(4,3));


var ratio = function(x,y){
    for(var i=2;i<=y;i++){
        console.log('i:'+i+' y:'+y);
        if(x%i==0 && y%i==0){
            x/=i;
            y/=i;
            i=1;
        }
    }
    var r;
    if(y==1)r= x;
    else r=x+"/"+y;
    //this.r = r;
    return r;
}


//console.log('9/108='+ratio(9,108));
//console.log('108/9='+ratio(108,9));
//console.log('9/9='+ratio(9,9));
//console.log('1/3='+ratio(1,3));
//console.log('4/3='+ratio(4,3));
console.log('48/88='+ratio(48,88));

//console.log(r1.ratio);
ratio.prototype.toString = function maya() {
    return `${this.r}`;
};

//console.log(ratio(2,3).toString());
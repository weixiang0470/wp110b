

var f= function(n)
{
    if (n==0)return 0;
    else if (n==1) return 1;
    else return f(n-1) + f(n-2);
}
var x = parseInt(Deno.args);
console.log('f(',x,') =>',f(x));
var n,x1;
var arr=[];
var i=2;
var tmp;
function factor(x)
{
    for(;i<=x;i++)
    {
        if(x1%i==0)
        {
            arr.push(i);
            x1=x1/i;
            i=1;
        }
    }
}
n = parseInt(Deno.args);
x1=n;
factor(n);
console.log(arr);
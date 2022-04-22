// x^(n+1) / (n+1)

var integral = function(x,a,b)
{
    var pow = x+1;
    var n1 = 1;
    var n2 = 1;
    var ans=0;
    var ans1=0
    var ans2=0;
    for (var i=0;i<pow;i++)
    {
        n1*=a;
        n2*=b;
    }
    ans1=n1/pow;
    ans2=n2/pow;
    ans = ans2-ans1;
    return ans;
}
console.log(integral(2,1,2));
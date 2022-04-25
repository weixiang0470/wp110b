var f1 = function(n)
{
    console.log('HI, This is function 1');
    n();
}

var f2 = function(n)
{
    console.log('HI, This is function 2');
}
f1(f2);
let variable = 10;
let x = '${variable} Test1';
let y = `${variable} Test2`;
console.log(x,y);
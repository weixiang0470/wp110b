var i=1;
function fac(n){
    for(n;n>1;n--){
        i*=n;
        console.log(n,'*');
    }
}

var n = parseInt(Deno.args);
console.log('Factorial(',n,')=');
fac(n);
console.log('1 = ',i);
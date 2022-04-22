var arr=[];
var arr_count=-1;
function Not(a,b)
{
    for(;a<b;a++){
        if(a%3!=0 && a%5!=0 && a%7!=0){
            arr.push(a);
            arr_count+=2;
        }
    }
}
var x = parseInt(Deno.args[0]);
var y = parseInt(Deno.args[1]);
console.log('Filter357(',x,',',y,')=');
Not(x,y);
//arr.pop();
console.log(arr);
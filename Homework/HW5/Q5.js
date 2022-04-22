var arr=[];
arr=Deno.args;
var x=1,tmp=0,ans,count=0;
for (var i in arr){
    x=parseInt(arr[i]);
    tmp+=x;
    count++;
}
ans = tmp / count;

console.log(arr);
console.log(ans);
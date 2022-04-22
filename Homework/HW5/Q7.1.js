//Make input into 2 array
var arr1=[],arr2=[];
var arr=[];
arr=Deno.args;
for (var i=0;i<arr.length;i++)
{
    if(i<arr.length/2)arr1.push(arr[i]);
    else arr2.push(arr[i]);
}
//transform array 
var arr3=[],arr4=[],arr5=[],arr6=[];

for (i=0;i<arr.length/2;i++)
{
    if(i==0)
    {
        arr3.push(arr1[i]);
        arr3.push(arr2[i]);
    }
    else if(i==1)
    {
        arr4.push(arr1[i]);
        arr4.push(arr2[i]);
    }
    else if(i==2)
    {
        arr5.push(arr1[i]);
        arr5.push(arr2[i]);
    }
    else if(i==3)
    {
        arr6.push(arr1[i]);
        arr6.push(arr2[i]);
    }
}
console.log(arr);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);
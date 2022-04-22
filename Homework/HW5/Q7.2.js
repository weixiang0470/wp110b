var arr=[[1,2,3,9],[4,5,8,6]];

function transpose(array)
{
    var arr1=[];
    for(var i=0; i<array[0].length;i++)
    {
        arr1[i]=[];
        for(var j=0;j<array.length;j++)
        {
            arr1[i][j]=array[j][i];
        }
    }
    return arr1;
}
console.log(arr[0].length,':',arr.length);
console.log(arr,'=>',transpose(arr));
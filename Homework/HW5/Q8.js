var array1 = [[2,4,3,8],[2,7,5,1]];
var array2 = [[3,5,1,4],[3,5,1,9]];

var add_arr = function(arr1,arr2)
{
    var Farr=[];
    for(var i=0;i<arr1.length;i++)
    {
        Farr[i]=[];
        for(var j=0;j<arr1[0].length;j++)
        {
            Farr[i][j]=arr1[i][j]+arr2[i][j];
            //console.log('i=',i,'j=',j);
        }
        
    }
    return Farr;
}
//console.log(array1[0].length,array1.length);
console.log('add([',array1,',',array2,'])','=>',add_arr(array1,array2));
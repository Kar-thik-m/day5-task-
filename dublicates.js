//Q.no:1(g) dublicates;
var arr=[1,2,3,4,4,5,6,5,8,1,2,3,1,2,1,2,1];
var mt=[];
var repeat=function(arr){
    for(var i=0;i<arr.length;i++){
        if(mt.length===0){
            mt.push(arr[i]);
        }
        if(mt.indexOf(arr[i])=== -1){
            mt.push(arr[i]);
        }
    }
    return mt;
}
console.log(repeat(arr));
var arr=[1,2,5,6,7,8,];
var odd=(arr)=>{
    var mt = [];
 for(var i=0;i<arr.length;i++){
     if (arr[i]%2!=0){
         mt.push(arr[i]);
     }
     
 }   
    return mt;
}
console.log(odd(arr));
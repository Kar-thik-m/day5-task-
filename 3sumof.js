//Q.no:3(sum of)
var arr=[1,2,5,6,7,8,];
var sum=function(arr){
 var n=0;
 for(var i=0;i<arr.length;i++){
     n= n+arr[i];  
 }
 return n;
}
console.log(sum(arr));
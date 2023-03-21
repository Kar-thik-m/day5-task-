//Q.no:1
var arr=[1,9,8,33,88,48];
var a =[];
var odd=function(arr){
for (var i=0;i<arr.length;i++){
  if(arr[i]%2!=0){
   a.push(arr[i]);
  }
}
return a;
}
console.log(odd(arr))
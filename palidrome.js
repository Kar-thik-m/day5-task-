var arr =[111,180,121];
var palindrome=function (arr){
var mt=[];
var arr1=arr[0].toString().split(" ").join(" ").split("").reverse().join("");

var arr2=arr[0].toString().split(" ").join(" ").split("").join("");
var arr3=arr[1].toString().split(" ").join(" ").split("").reverse().join("");
var arr4=arr[1].toString().split(" ").join(" ").split("").join("");
var arr5=arr[2].toString().split(" ").join(" ").split("").reverse().join("");
var arr6=arr[2].toString().split(" ").join(" ").split("").join("");
if(arr1===arr2){
  mt.push(arr2);
}
if(arr3===arr4){
mt.push(arr4);
}
if(arr5===arr6){
mt.push(arr6);    
}

 return mt;
} 
console.log(palindrome(arr));
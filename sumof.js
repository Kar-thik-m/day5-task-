 
var num=[1,2,3,4,5,6,7,8,9,10];
(function sum (num){
var n=0;
for(var i=0;i<num.length;i++){
    n=n+num[i];
}
  console.log(n);  
})(num);
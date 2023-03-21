//Q>no:f(median)
var num1=[5,4,3,2,1,6,7,8,9];
var num2=[5,4,3,2,1,6,7,8,9];
var median=function(){
var sort=[...num1,...num2];
var num=sort.sort((a,b)=>a-b);
var leng=num.length;
if(leng%2===0){
  var m1=Math.floor(leng/2);
  return num[m1];
}else if(leng%2!==0){
    var m2=Math.floor(((leng/2)+(leng/2)+1)/2);
    return num[m2];
}

}
console.log((median(num1,num2))); 
var num1=[9,8,7,6,5,1,2,3,4];
var num2=[9,8,7,6,5,1,2,3,4]; 
(function midian(num1,num2){
 var num3=[...num1,...num2];
 var sort=num3.sort((a,b)=>a-b);
 var leng=sort.length;
 if(leng%2!=0){
    var odd=Math.floor(length/2);
    console.log(sort[odd]);
 }else if(leng%2==0){
    var even=Math.floor(((leng/2)+(leng/2)+1)/2);
    var res=sort[even];
    console.log(res);
 }
     
 
})(num1,num2);
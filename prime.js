var arr =[1,2,3,4,5,9,8,7,6];

 (function prime(arr){
var count=0;
var mt=[];
for(var i=0;i<arr.length;i++){
    for(var j=1;j<=i;j++){
        if(i%j===0){
            count++
        }
    }
  if(count===2){
     
      console.log(mt.push(i));
  } 
 
  count=0;
}
 })(arr);   
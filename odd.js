  
 var num=[1,2,3,4,5,6,7,8,9,10];
 (function odd(num) {
     var mt=[];
     for(var i=0;i<num.length;i++){
         if(num[i]%2!=0){
         mt.push(num[i]);    
  
         }
     }
    console.log(mt);  
 })(num);
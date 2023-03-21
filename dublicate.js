var arr=[1,2,3,4,4,1,5,5,6,5,8,9,9];

(function dublicate(arr){

var mt=[];
    for(var i=0;i<arr.length;i++){
        if(mt.length===0){
            mt.push(arr[i]);
        }
        if(mt.indexOf(arr[i])=== -1){
            mt.push(arr[i]);
        }
    }
console.log(mt) ;

}(arr));
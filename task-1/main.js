let str = "31,15,40";
let min= Infinity;
let arr = str.split(",");
for(i=0; i<arr.length; i++){
if(arr[i]<min){
min=arr[i]
}
}
console.log(min)

let str = "525522"
count1=0;
count2=0;
let arr = str.split("")
for(i=0; i<arr.length; i++){
  if(arr[i]==2){
    count1++
  }else if(arr[i]==5){
    count2++
  }
}
if(count1>count2){
  console.log("2");
}else if(count2>count1){
  console.log("5");
}else if(count1==count2){
  console.log("=")
}

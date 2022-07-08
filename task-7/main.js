let str = "kpkkp";
let arr = str.split("p");
let a=-Infinity;
for (i=0; i<arr.length; i++) {
  if(arr[i].length>a ){
    a=arr[i].length
  }
}
console.log(a);

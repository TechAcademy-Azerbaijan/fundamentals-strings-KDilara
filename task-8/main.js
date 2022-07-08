let str = "introduction to algorithms";
let arr = str.split(" ");

for (i = 0; i<arr.length; i++) {
 arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
}
console.log(arr.join(" "));

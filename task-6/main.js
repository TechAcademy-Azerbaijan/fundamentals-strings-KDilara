let str = "Hello world! Hello,    country!";
let arr = str.split(" ");
let count = 0;
for (i=0; i<arr.length; i++) {
  if (arr[i] != "") {
    count++
  }
}
console.log(count);

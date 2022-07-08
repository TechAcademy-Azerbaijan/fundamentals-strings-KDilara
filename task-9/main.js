let s = "This is a cat sitting on a table"
let c = "t"
let count = 0;
let arr = s.split(" "); 
for (i = 0; i<s.length; i++) {
   if(s[i]===c || s[i]===c.toUpperCase()){
    count++
   }
 }
 console.log(count);

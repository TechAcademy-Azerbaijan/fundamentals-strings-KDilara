let str ="Hello world! I learn to code."
let arr = str.split("")
count=0;
for(el of str){
  if(el=="." || el=="!" || el=="," || el =="?"){
    count++
  }
}
console.log(count)

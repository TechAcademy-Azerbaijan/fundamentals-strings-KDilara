let str ="+5-2+4-m/n*2:4"
let arr = str.split("")
count=0;
for(el of str){
  if(el=="+" || el=="-" || el=="*"){
    count++
  }
}
console.log(count)

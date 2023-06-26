function isValid(s) {
  if (s) {
    console.log(s);
  }
}

isValid("()");

let arr=[1,2,3];
let arr2=arr.reduce((acc,el)=>{
  return acc+el;
})
console.log(arr2)
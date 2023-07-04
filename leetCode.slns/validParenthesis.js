function isValid(s) {
  if (s) {
    console.log(s);
  }
}

isValid("()");

console.log("0"==[]);


let name='reno';
let obj={
  name,
}
console.log(obj['name'])
console.log(obj)

let num=123.456789;
console.log(num.toString(36))
console.log(123456789..toString(36))
let num2=num.toString(36)

console.log(+num.toFixed(2))

console.log((0.2+0.1).toFixed(1))
console.log(0.2+0.1==0.3)

console.log(1e3)
console.log(9999999999999999)
console.log(typeof NaN)

console.log(NaN===NaN)
console.log(null===null)
console.log(undefined===undefined)
console.log(isFinite())

console.log(Object.is(0.1 + 0.2, 0.3))
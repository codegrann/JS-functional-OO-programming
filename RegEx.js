// Search for any Numeric Characters
//    /\d+/
var reg = /\d+/;
console.log(reg.test("123"));
reg.test("33asd"); 
reg.test("5asdasd");
reg.test("asdasd");


// Search for only Numeric Characters
//   /^\d+$/
var reg = /^\d+$/;
reg.test("123"); 
console.log(reg.test("123a"))
reg.test("a"); 


// Floating Numeric Characters
//    /^[0-9]*.[0-9]*[1-9]+$/
var reg = /^[0-9]*.[0-9]*[1-9]+$/;
reg.test("12"); 
console.log(reg.test("12.2"));


// Only Alphanumeric Characters
//    /[a-zA-Z0-9]​/
var reg = /[a-zA-Z0-9]/;
reg.test("somethingELSE");
reg.test("hello");
reg.test("112a");
reg.test("112");
reg.test("^");



let y = /hi/;
let sample = 'hi John';
console.log(y.test(sample));

let ok="Hello are you ok, hope you are OK";
console.log(ok.replace(/re/g, "ra"))


console.log('+254-796-984-554'.match(/\d/g).join(''))

let str = 'O2 is oxygen';
let re = /\w\d/g

console.log(str.match(re));
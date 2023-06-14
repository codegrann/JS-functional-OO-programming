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


console.log([...'+254-796-984-554'.replace(/\D/g, ',')])

let str = 'O2 is oxygen';
let re = /\d is/g

console.log(str.match(re));


let rd = /Es.6/sgi
console.log('ES\n6'.match(rd)); 


let sentence="It @\n was a very chilly morning when I woke up, just to prepare for school. It happened the previous day that I missed 2 lectures so I had to be up early to cover up for the miss. A friend of mine informed me of some assignments given to them which were due that same day.";
console.log(/.$/.test(sentence))


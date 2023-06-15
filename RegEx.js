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


let sentence=`It @\n was a very chilly morning when I 
woke up, just to prepare for school. It 
happened the previous day that I missed
2 lectures so I had to be up early to cover 
up for the miss. A friend of mine informed 
me of some assignments given to them which were due that same day.`;
console.log(/^\d/.test(sentence))
console.log(sentence.match(/^\d/mg))

console.log(/^\D/.test(+254-796-984-554))
console.log(/^\d\d\D\d\d$/.test("12:05"))

console.log(/\w@\w/.test('omondihills02@gmail.com'))


let stri = `1st line
2nd line
3rd line`;
console.log(stri.match(/^\d/gm));

console.log(/\bo/.test('omondihills02@gmail.com.'))

let st = 'I start coding JS at 05:30 AM';
let ree = /\b\d\d.\d\d\b/g;
let result = st.match(ree);

console.log(result);

console.log(/\w{4,25}@\w{3,10}.\w{2,5}/.test('omondihills02@gmail.com.'))

let str1 = 'How cats, rats, and bats became Halloween animals';
let re1 = /[cbr]ats/g;
let result1 = str1.match(re1);

console.log(result1);

console.log(/[1-3]/.test('0796984554'));

let str2 = '🍎🍅🍓';
for(let i=0; i<str2.length; i++) {
    console.log(str2.charCodeAt(i));
}
console.log("🍎")
let apple='\uD83C\uDF0E'
console.log(apple)

const path = 'posts/10';
const pattern = /(?<resource>\w+)(?<divider>\/)(?<id>\d+)/;
console.log(path.match(pattern).groups);


const back="come home now";
let pat=/(\w+)\s+\1/;
// console.log(pat)
console.log(back.match(pat))

const s = 'JavaScript JavaScript is cool';
const patter = /(\w+)\s+\1/;
const resul = s.replace(patter, '$1');
console.log(resul);

const message = `"JavaScript's cool". They said`;
const patterns = /([\'"]).*?\1/;
const match = message.match(patterns);
console.log(match[0]);

console.log('omondihills02@gmail.com'.match(/(?<=@)\w+/g))
console.log('omondihills02@gmail.com'.match(/\d(?!@)/g))

let email='omondihills02@gmail.com';
email=email.replace(/o/g, 'XX')
console.log(email)


let omo='omondihills02@gmail.com';
let patt=/(\d+)/;
console.log(omo.replace(patt, 'XXX'))

let JS='Javascript Javascript is fun';
let jspattern=/(\w+)(\w)(\w+)/;
console.log(JS.match(jspattern))
console.log(JS.replace(jspattern, ''))

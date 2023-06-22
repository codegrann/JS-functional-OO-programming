function isValid(s) {
  if (s) {
    console.log(s);
  }
}

isValid("()");


function sayHi() {   // (1) create
    console.log( "Hello" );
  }
  
  let  func =sayHi;
  
  func(); // Hello     // (3) run the copy (it works)!
  sayHi();
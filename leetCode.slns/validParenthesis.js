function isValid(s) {
  if (s) {
    console.log(s);
  }
}

isValid("()");


function doPower(){
    let num=3, pwr=2;
    for(let i=1; i<pwr; i++){
        console.log(num*=num)
    }

    console.log(Math.pow(num, pwr))
}
doPower()
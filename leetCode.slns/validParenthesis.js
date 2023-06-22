function isValid(s) {
  if (s) {
    console.log(s);
  }
}

isValid("()");


function doPower(){
    let num=3, pwr=2;
    let ans=num;
    for(let i=1; i<pwr; i++){
        console.log(ans*=num)
    }

    console.log(Math.pow(num, pwr))
}
doPower()
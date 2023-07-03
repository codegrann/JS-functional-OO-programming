function isValid(s) {
  if (s) {
    console.log(s);
  }
}

isValid("()");

let user={
  name: 'jango',
  sayHi(){
    console.log(this.name)
  }
}
let user2=user;

console.log(user);
console.log(user2);

user=null;
console.log(user);
console.log(user2.name);
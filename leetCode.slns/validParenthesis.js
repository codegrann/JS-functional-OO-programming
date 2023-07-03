function isValid(s) {
  if (s) {
    console.log(s);
  }
}

isValid("()");

let user={
  name: 'jango',
  sayHi(){
    return this.name
  }
}
let user2=user;

// console.log(user);
// console.log(user.sayHi())
// console.log(user2);
// console.log(user2.sayHi())

user=null;
// user2=user;
console.log(user);
console.log(user2);

// console.log(user.sayHi())
console.log(user2.sayHi())
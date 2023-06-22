function isValid(s) {
  if (s) {
    console.log(s);
  }
}

isValid("()");

function checkAge() {
    let age=20;
    if (age > 18) {
      console.log(true);
    } else {
      console.log(confirm('Did parents allow you?'));
    }
  }

  checkAge()
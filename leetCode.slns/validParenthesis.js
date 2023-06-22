function isValid(s) {
  if (s) {
    console.log(s);
  }
}

isValid("()");

function checkAge() {
    let age=10;

    // Using ?
    let isAllowed=age>18? true: confirm('Did parents allow you');
    console.log(isAllowed);
    if (age > 18) {
      console.log(true);
    } else {
      console.log(confirm('Did parents allow you?'));
    }
  }

  checkAge()
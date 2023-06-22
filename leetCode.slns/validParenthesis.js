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

    // Using ||
    let allowed=age>18 || 'Did parents allow you';
    console.log(allowed)

    // Using  if
    if (age > 18) {
      console.log(true);
    } else {
      console.log(confirm('Did parents allow you?'));
    }
  }

  checkAge()
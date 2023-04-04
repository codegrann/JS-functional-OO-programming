
 function isPrime(n) {
    if (n <= 1) {
      return false;
    }
      // check from 2 to n-1
      for (var i = 2; i < n; i++) {
        if (n % i == 0) {
          console.log(false);
          return false;
        }
      }
      console.log(true);
      return true;
    }
    isPrime(9);
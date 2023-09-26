// UNARY OPERATOR(+) EXAMPLES

// null returns 0
console.log(+null);

// undefined returns NaN
console.log(+undefined);

// booleans: true evaluates to 1, false to 0
console.log(+true);
console.log(+false);

// string value is evaluated and corced
console.log(+"123");

console.log(+"");
console.log(+" ");
console.log(+" 32 ");
console.log(
  +`
    45
`
);

console.log(
  +function () {
    return 4;
  }
);
console.log(+[]);

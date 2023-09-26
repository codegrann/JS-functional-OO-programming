// UNARY OPERATOR(+) EXAMPLES

// null returns 0
console.log(+null);

// undefined returns NaN
console.log(+undefined);

// booleans: true evaluates to 1, false to 0
console.log(+true);
console.log(+false);

// string value is evaluated and coerced
console.log(+"123");

// empty and whitespace-only  strings are converted to 0
console.log(+"");
console.log(+" ");

// leading and trailing whitespace/line terminators are ignored
console.log(+" 32 ");
console.log(
  +`
    45
`
);

// empty array as well evaluates to 0
console.log(+[]);

// BigInt values throw TypeError
// console.log(+10n);

// NUMBER() METHOD EXAMPLES
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));
console.log(Number("123"));
console.log(Number(""));
console.log(Number(" "));

// bigint values are coercible using Number() method
console.log(Number(10n));

const num1 = +23;
const num2 = Number(23);
const num3 = new Number(23);

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);

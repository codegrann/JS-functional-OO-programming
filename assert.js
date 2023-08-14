const MyObj = {"Fi":4,"2A":2,"cing":1};
let result = "";
for (let value in MyObj) {
 if (value=="2A"){
  result=result.concat((+value).toString().toLowerCase());
 }
 else{
  result=result.concat(value);
 };
}
console.log(result);
let arr=[1,2,3];
let array=arr.reverse();
console.log(arr);
console.log(array);

//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let num1: number;
let num2: number;
let opiration: string;
num1 = parseInt(prompt('الرجاء إدخال رقم'));
num2 = parseInt(prompt(' الرجاء إدخال الرقم '));
opiration = prompt('الرجاء إدخال رمز العملية ');
main(num1, num2, opiration);
function add(num1: number, num2: number) {
  return num1 + num2;
}
function sub(num1: number, num2: number) {
  return num1 - num2;
}
function mul(num1: number, num2: number) {
  return num1 * num2;
}
function div(num1: number, num2: number) {
  return num1 / num2;
}
function main(num1: number, num2: number, opiration: string) {
  let result: number;
  if (opiration == '+') {
    result = add(num1, num2);
  } else if (opiration == '-') {
    result = sub(num1, num2);
  } else if (opiration == '*') {
    result = mul(num1, num2);
  } else if (opiration == '/') {
    result = div(num1, num2);
  }
  console.log(result);
}

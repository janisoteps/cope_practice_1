function words(){
  console.log('Guten Tag!');
}
words();

function length(){
  let a = 4;
  let b;
  b = a * Math.PI;
  console.log(b);
}
length();

/*function greet(name){
  function place(country){
    console.log('Hello' + name + 'from' + country);
  }
}
//let name = prompt('Enter your name');
//let place = prompt('Enter your country');

greet(name);*/

/*function greet(name){
    console.log('Hello' + name);
  }
let name = prompt('Enter your name');
greet(name);*/

function sum(a, b){
  console.log(a + b);
}
sum(5, 12)
sum(12.5, 25.3)

//RETURN
function add(number1, number2){
  return number1 + number2;
}
let number1 = parseFloat(prompt('Enter first number'));
let number2 = parseFloat(prompt('Enter second number'));

let result = add(number1, number2);
console.log('The sum is'+result);

//FExpressions
let x = function (num){return num*num};
console.log(x(7));

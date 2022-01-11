function displaySum(num1, num2, num3){
  var result = num1 + num2 + num3;
  console.log(result);
}
displaySum(48, 89, 45);


function showName(firstName, lastName){
  console.log('Hello' + ' ' + firstName + ' ' + lastName);
}
showName('Elena', 'Buch');

function sayHello(name = 'Georg'){
  console.log('Hello' + ' ' + name);
}
sayHello();
sayHello('Lena');

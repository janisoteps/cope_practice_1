function displaySum(num1, num2, num3){
  var result = num1 + num2 + num3;
  console.log(result);
}
displaySum(35, 63, 1346);


function showName(firstName, lastName){
  console.log('Hello' + ' ' + firstName + ' ' + lastName);
}
showName('Elena', 'Buch');

function sayHello(name = 'Ivan'){
  console.log('Hello' + ' ' + name);
}
sayHello();
sayHello('Mark');


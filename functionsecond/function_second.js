/*function ShowMessage(firstName, lastName){
  alert("Hello" +' '+ firstName + ' ' + lastName);
}

ShowMessage('Иван', 'Петров');*/

function Sum(val1, val2){
  return val1 + val2;
}
var result = Sum(10, 20);
console.log(result);

function mult(x){
  function par(y){
    y = 4;
    return x*y;
  }
  return par;
}
var number = mult(5);
console.log(number)

var add = function sum2(val3, val4){
  return val3 + val4;
}
var result2 = add(30, 76);
var result3 = add(54.8, 63.34)
console.log(result2);
console.log(result3);



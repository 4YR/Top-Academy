// HW 1
// let num1 = +prompt("num1");
// let num2 = +prompt("num2");

// let sum = 0;
// for (num1; num1 <= num2; num1++) {
//   sum += num1;
//   sum = sum + num1;
// }
// alert("summ diap" + sum);

// HW 2
// let num1 = +prompt("num1");
// let num2 = +prompt("num2");
// let delimiter = 1
// for(let i =1; i <= num2 || i <=num2; i++) {
//     if (num1% i==0 && num2 % i ==0) {
//         delimiter = i
//     }
// }
// alert(delimiter)

// HW 3
// let num1 = +prompt("num1");
// for(let i=1; i<=num1; i++) {
//     if(num1 % i==0) {
//         console.log(i)
//     }
// }

// HW 4
// let num1 = +prompt("num1");

// let count = 0;
// while (num1 > 1) {
//   num1 /= 10;
//   count++;
// }
// alert(count);

// HW 5

// let pos = 0;
// let negativ = 0;
// let zero = 0;
// for (let i = 1; i <= 10; i++) {
//   num = +prompt("enter number" + i);
//   if (num > 0) {
//     pos++;
//   }
//   if (num == 0) {
//     zero++;
//   }
//   if (num < 0) {
//     negativ++;
//   }
// }
// alert(`Полоительные: ${pos}, отрицательны ${negativ}, нулевые${zero}`);

// Calculate
// let answer = true;

// while (answer == true) {
//   num1 = +prompt("Введите первое число: ");
//   num2 = +prompt("Введите второе число: ");
//   sign = prompt("Введите знак: ");

//   if (sign == "+") {
//     alert(`${num1} + ${num2} = ${num1 + num2}`);
//   }
//   if (sign == "-") {
//     alert(`${num1} - ${num2} = ${num1 + num2}`);
//   }
//   answer = confirm("Посчитать еще?");
// }

// Циклы Прерыватили

// loopI: for (let i = 0; i < 10; i++) {
//   loopK: for (let k = 0; k < 10; k++) {
//     if (k > 5) {
//       break loopI;
//     }
//     console.log(i + ":" + k);
//   }
// }

//--------------------------------//

// Функции

//Выводит заголовки

// function showBlocks() {
//   for (let i = 1; i <= 6; i++) {
//     document.write("<h" + i + ">Header " + i + "</h" + i + ">");
//   }
// }
// showBlocks();

//--------------------------------//

// function incOne(x) {
//   console.log(x + 1);
// }
// incOne(10);

//--------------------------------//

// let userName = "Olga";
// let userAge = "43";

// function showName(profession) {
//   console.log(
//     "Привет " + userName + " Вам " + userAge + " лет. Вы - " + profession
//   );
// }
// showName("Teacher");

//--------------------------------//

// let x = 2;
// function incAndLog(x) {
//   x = x + 1;
//   alert("inc x = " + x);
//   block.innerHTML = "inc x = " + x;
// }
// incAndLog(x);

//--------------------------------//
// Считае куб

// function cube(x) {
//   return x * x * x;
// }
// let result = cube(10) + cube(5) + cube(27);

// alert(result);

//--------------------------------//

// function test(x) {
//   if (x > 0) {
//     return "positive";
//   }
//   if (x < 0) {
//     return "negative";
//   }
//   return 'zero';
// }
// let r1 = test(1)
// let r2 = test(-1)
// let r3 = test(0)
// console.log(r1)
// console.log(r2)
// console.log(r3)

//--------------------------------//

// function sayError() {
//   alert("Some error occurred!");
// }
// sayError();

//--------------------------------//

// function showError(x) {
//   alert("Error " + x + " occured");
// }
// showError("out of memory");

//--------------------------------//

// function createHeaders(N) {
//   for (let i = 1; i <= 6; i++) {
//     document.write("<h" + i + ">Header " + i + "</h" + i + ">");
//   }
// }
// createHeaders(7)

//--------------------------------//
// Проверка пароля

function checkPassword(x) {
  if (x == "step" || x == "web" || x == "javascript") {
    return true;
  }
  return false;
}

alert(checkPassword("step"));

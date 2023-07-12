//Task 1
/* Написать функцию, которая вычисляет факториал задан-
ного числа.*/

// function facrorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// }
// console.log(facrorial(5));

//Task 2
/* Написать функцию, которая выводит все числа из заданного
пользователем диапазона в прямом порядке. И еще одну
функцию – для вывода в обратном порядке*/

// function userRange(a, b) {
//   for (i = a; i <= b; i++) {
//     console.log(i);
//   }
// }
// userRange(5, 45);

// function userRange2(max, min) {
//   for (i = max; i >= min; i--) {
//     console.log(i);
//   }
// }
// userRange2(44, 1);

// Task 3
/*Написать функцию, которая выводит переданное ей число
задом наперед.
Например: число 1234 вывести как 4321*/

// function invertedNumber(num) {
//   let result = 0;
//   while (num) {
//     result = result * 10 + (num % 10);
//     num = Math.floor(num / 10);
//   }

//   return result;
// }

// console.log(invertedNumber(12346));


// Task 4
/* Написать функцию, которая считает сумму цифр числа.
Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.*/

// function sumNumbers(n) {
//   let sum = 0;
//   while (n > 0) {
//     sum = sum + (n % 10);
//     n = Math.floor(n / 10);
//   }
//   return sum;
// }
// console.log(sumNumbers(12341))


// Task 5
/* Написать функцию, которая принимает число и выводит
соответствующее количество вложенных пар круглых скобок.
Например: число 4 – (((())))*/

function roundBracket(num) {
  let bracket = " ";
  for (let i = 1; i <= num; i++) {
    bracket = bracket + "(";
  }
  for (let j = 1; j <= num; j++) {
    bracket = bracket + ")";
  }
  return bracket;
}
console.log(roundBracket(6));
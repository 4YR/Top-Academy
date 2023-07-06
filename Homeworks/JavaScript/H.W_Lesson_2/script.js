// Task 1

// let startRange = +prompt("Введите начало диапозона: ");
// let endRange = +prompt("Введите  конец диапозона: ");
// let sum = 0;
// for (let i = startRange; i <= endRange; i++) {
//   sum += i;
// }
// alert("Сумма в данном диапозоне равна: " + sum);

// Task 2

// let firstNumber = +prompt("Введите первое число: ");
// let secondNumber = +prompt("Введите второе число: ");
// let delimiter = 1;
// for (let i = 1; i <= firstNumber || i <= secondNumber; i++) {
//   if (firstNumber % i == 0 && secondNumber % i == 0) {
//     delimiter = i;
//   }
// }
// alert("Наибольший общий делитель равен: " + delimiter);

// Task 3

// let number = +prompt("Введите число: ");
// for (let i = 1; i <= number; i++) {
//   if (number % i == 0) {
//     alert("Все делители данного числа: " + i);
//   }
// }

// Task 4

// let num = +prompt("Введите число: ");
// let digits = 0;
// while (num > 0) {
//   num = Math.floor(num / 10);
//   digits++;
// }
// alert(" Ваше число содержит: " + digits + " цифр(ы).");

// Task 5

let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;
for (let i = 1; i <= 10; i++) {
  number = +prompt("Введите числа: ");
  if (number > 0) {
    positive++;
  }
  if (number == 0) {
    zero++;
  }
  if (number < 0) {
    negative++;
  }
  if (number % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}
alert(
  `Полоительных чисел: ${positive}, отрицательных ${negative}, нулевых ${zero}, четных ${even}, нечетных ${odd}`
);

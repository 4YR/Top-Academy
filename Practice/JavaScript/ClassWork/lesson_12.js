//Выводит время
// function time(h, m = "00", s = "00") {
//   if (h > 24 || m > 60 || s > 60) {
//     return "Неправильное время";
//   } else {
//     return `${h}:${m}:${s}`;
//   }
// }
// console.log(time(24, 9));

//Выводит время в секундах

// function seconds(h, m = "00", s = "00") {
//   return h * 3600 + m * 60 + s;
// }
// console.log(seconds(1, 1, 1));

//            Arguments                 //
//--------------------------------------//
//            Массивы                   //

// let arr = [10, 23, true, "anna", false];
// let arr2 = [[1, 2, 3], [4, 5, 6], false, 10, "olga"];

// console.log(arr2[4]);

//            Объект                   //

// let car = {
//   color: "black",
//   brand: "Honda",
//   year: 2010,
//   auto_transmission: true,
// };

// console.log(car["brand"]);

// console.log(car.color);

//--------------------------------------//

// function logArguments(x) {
//   console.log(x);
//   console.log(arguments[2]);
//   let str = "";
//   for (let i = 0; i < arguments.length; i++) {
//     str += arguments[i] + ", ";
//   }
//   console.log(str);
// }
// logArguments("olga", "max", "elena", "marina");

//--------------------------------------//

//      Выводит max значение           //

// function max() {
//   if (arguments.length == 0) {
//     return "Данные не были переданы ";
//   }
//   let maxNum = arguments[0];
//   for (let i = 0; i < arguments.length; i++) {
//     if (maxNum < arguments[i]) {
//       maxNum = arguments[i];
//     }
//   }
//   return maxNum;
// }
// console.log(max(10, 3, 19, 64, 4,123,999));

//--------------------------------------//

// function parity(x) {
//   if (x % 2 == 0) {
//     parity = "even";   // Нельзя называть перемнную как функцию
//   } else {
//     parity = "odd";
//   }
//   return 10
// }
// console.log(parity(8));

//--------------------------------------//
//          Область видимости          //

// let x = 10;
// function square(x) {    // Будет использоваться переменная х, которая внутри функции
//   return x * x;
// }
// console.log(square(20));

//--------------------------------------//
//      Переменные LET и VAR           //

// for (var i = 0; i<5; i++) { // VAR болле глобальней
//     console.log(i)
// }
// console.log(i)

//--------------------------------------//
//             Рекурсия                //

//             Факториал              //

// function facrorial(x) {
//   if (x == 1) return 1;
//   return x * facrorial(x - 1);
// }
// console.log(facrorial(5));

//--------------------------------------//
//             Числа Фибонначи         //

// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2); // Нельзя делать с помощью рекурсии(виснет компьютер)
// }
// console.log(fib(40));

//--------------------------------------//
/* Создайте функцию stringFrom(…), возвращающую
строку, состоящую из значений всех переданных
аргументов. Например, вызов stringFrom('I have',
5, 'apples') вернет строку «I have 5 apples»; вызов
stringFrom('Х value is', true) вернет строку «Х value
is true».*/

// function stringFrom() {
//   let res = " ";
//   for (let i = 0; i < arguments.length; i++) {
//     res = res + arguments[i];
//   }
//   return res;
// }
// console.log(stringFrom("I have ", 5, " apples", ",", " and ", 10, " bananas"));

//--------------------------------------//
// Возвоащает чисда, до того числа, что ввел пользователь
// function stringWithNumbers(n) {
//   if (n == 1) return "1";
//   return stringWithNumbers(n - 1) + ", " + n;
// }
// console.log(stringWithNumbers(78));

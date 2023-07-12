//             Циклы                //
//---------------------------------//

// Task 5

/*Запросить у пользователя 10 чисел и подсчитать, сколько
он ввел положительных, отрицательных и нулей. При этом
также посчитать, сколько четных и нечетных. Вывести
статистику на экран. Учтите, что достаточно одной пере-
менной (не 10) для ввода чисел пользователем.*/

// let positive = 0;
// let negative = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;
// for (let divisor  = 1; divisor  <= 10; divisor ++) {
//   number = +prompt("Введите числа: ");
//   if (number > 0) {
//     positive++;
//   }
//   if (number == 0) {
//     zero++;
//   }
//   if (number < 0) {
//     negative++;
//   }
//   if (number % 2 == 0) {
//     even++;
//   } else {
//     odd++;
//   }
// }
// alert(
//   `Положительных чисел: ${positive}, отрицательных ${negative}, нулевых ${zero}, четных ${even}, нечетных ${odd}`
// );

// Task 6
/*Зациклить калькулятор. Запросить у пользователя 2 числа
и знак, решить пример, вывести результат и спросить, хо-
чет ли он решить еще один пример. И так до тех пор, пока
пользователь не откажется*/

// let answer = true;

// while (answer == true) {
//   let numberOne = +prompt("Введите первое число: ");
//   let numberTwo = +prompt("Введите второе число: ");
//   let sign = prompt("Введите знак: ");
//   if (sign == "+") {
//     alert(`Ваш результат: ${numberOne + numberTwo}`);
//   }
//   if (sign == "-") {
//     alert(`Ваш результат:  ${numberOne - numberTwo}`);
//   }
//   if (sign == "*") {
//     alert(`Ваш результат:  ${numberOne * numberTwo}`);
//   }
//   if (sign == "/") {
//     alert(`Ваш результат:  ${numberOne / numberTwo}`);
//   }
//   answer = confirm("Посчитать еще?");
// }

// Task 7 not done

/*Запросить у пользователя число и на сколько цифр его
сдвинуть. Сдвинуть цифры числа и вывести результат (если
число 123456 сдвинуть на 2 цифры, то получится 345612).*/

// let number = +prompt("Введите число: ");
// let shift = +prompt("Насколько цифр сдвинуть: ");

// Task 8
//Вывести # столько раз, сколько указал пользователь

// let someThing = +prompt('How many you want to see "#"');
// let cell= "#"
// let tmp = 0;
// while (tmp <= someThing) {
//   console.log(cell);
//   cell +="#"
//   tmp++;
// }

// Task 9
// Пользователь ввел число, а на экран вывелись все числа
//от введенного до 0

// let num = +prompt("Enter number ");
// let nums = 1;
// while (nums <= num) {
//   console.log(nums);
//   nums++;
// }

// Task 10
//Запросить число и степень. Возвести число в указанную
//степень и вывести результат

// let num = +prompt("Enter number ");
// let degree = +prompt("Enter degree ");
// let sum = 0;
// while (sum < num) {
//   console.log(num ** degree);
//   sum++;
// }

// Task 11
//Запросить 2 числа и найти все общие делители.
// let num = +prompt("Enter number ");
// let num2 = +prompt("Enter number2 ");
// let divisor = 1;

// while (divisor <= num && divisor <= num2) {
//   if (num % divisor == 0 && num2 % divisor == 0) {
//     console.log(divisor);
//   }
//   divisor++;
// }

// Task 12
//Посчитать факториал введенного пользователем числа.
// let fact = +prompt("Enter number ");
// let temp = 1;
// let factorial_1 = 1;
// while (temp <= fact) {
//   factorial_1 = factorial_1 * temp;
//   console.log(factorial_1);
//   temp++;
// }

//Task 13 DO WHILE
/* Предлагать пользователю решить пример 2 + 2 * 2 до тех 
пор, пока он не решит его правильно*/

// let solution;
// do {
//   solution = +prompt("Decide this example 2 + 2 * 2: ");
// } while (solution !== 6);
// console.log("Правильно! Ответ равен 6.");

//Task 14 DO WHILE
/* Делить число 1000 на 2 до тех пор, пока не получится число 
меньше 50. Вывести это число и сколько делений произвели.*/

// let number = 1000;
// let count = 0;
// do {
//   number /= 2;
//   count++;
// } while (number >= 50);
// console.log(number);
// console.log(count);

//Task 15 FOR

//Вывести все числа от 1 до 100, которые кратные указанному
//пользователем числу.

// let num = +prompt("Enter number");
// for (let i = 1; i <= 100; i++) {
//   if (i % num === 0) {
//     console.log(i);
//   }
// }

//Task 16 FOR

/*Вывести каждый 4-й элемент из указанного пользователем
диапазона. Пользователь указывает минимальное и мак-
симальное значения диапазона.*/

// let range1 = +prompt("Enter start range");
// let range2 = +prompt("Enter end range");
// for (let i = 1; i <= range2; i++) {
//   if (i % 4 == 0) {
//     console.log(i);
//   }
// }

//Task 17 FOR

/*Запросить число и проверить, простое ли оно. Простое 
число делится без остатка только на себя и на единицу*/

// let simpleNum = +prompt("Enter number");
// let isPrime = true;
// for (let i = 2; i < simpleNum; i++) {
//   if (simpleNum % i == 0) {
//     isPrime = false;
//     console.log(" not simple number");
//     break;
//   } else {
//     console.log(" simple number");
//   }
// }

//                     Функции                       //
//--------------------------------------------------//

// HOMEWORK
// Task 1
/*Написать функцию, которая принимает 2 числа и возвра-
щает -1, если первое меньше, чем второе; 1 – если первое
больше, чем второе; и 0 – если числа равны.*/

// function someNum(a, b) {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0;
// }
// console.log(someNum(92, 90));

// Task 2
/*Написать функцию, которая вычисляет факториал пере-
данного ей числа.*/

// function factor(num) {
//   let factorial = 1;
//   for (let divisor  = 1; divisor  <= num; divisor ++) {
//     factorial = factorial * divisor ;
//   }
//   return factorial;
// }
// console.log(factor(3));

// Task 3

/*Написать функцию, которая принимает три отдельные
цифры и превращает их в одно число. Например: цифры
1, 4, 9 превратятся в число 149*/

// function digits(a, b, c) {
//   return " " + a + b + c;
// }
// console.log(digits(8, 4, 9));

// Task 4

/*Написать функцию, которая принимает длину и ширину
прямоугольника и вычисляет его площадь. Если в функцию
передали 1 параметр, то она вычисляет площадь квадрата*/

// function rectangle(a, b) {

//   if (b == undefined) {
//     return a * a;
//   } else {
//     return a * b;
//   }
// }
// console.log(rectangle(15, 56));

// Task 5

/*Написать функцию, которая проверяет, является ли пере-
данное ей число совершенным. Совершенное число – это
число, равное сумме всех своих собственных делителей*/

// function perfectNumber(num) {
//   let perfect = 0;

//   for (let divisor  = 1; divisor  < num; divisor ++) {
//     if (num % divisor  == 0) {
//       perfect = perfect + divisor ;
//     }
//   }
//   if (perfect == num) {
//     // console.log(perfect);
//     //   console.log("This is a perfect number !");
//     // } else {
//     //   console.log("This is not a perfect number!");
//   }
// }

// perfectNumber(280);

// Task 6

/*Написать функцию, которая принимает минимальное и
максимальное значения для диапазона, и выводит только
те числа из диапазона, которые являются совершенными.
Используйте написанную ранее функцию, чтобы узнавать,
совершенное число или нет.*/

// function rangeNumber(min, max) {
//   for (let divisor  = min; divisor  <= max; divisor ++) {
//     if (perfectNumber(divisor )) {
//       console.log(divisor );
//     }
//   }
// }
// rangeNumber(1, 190000);

// Task 7

/*Написать функцию, которая принимает время (часы, мину-
ты, секунды) и выводит его на экран в формате «чч:мм:сс».
Если при вызове функции минуты и/или секунды не были
переданы, то выводить их как 00.*/

// Data = new Date();
// console.log(
//   Data.getHours() + ":" + Data.getMinutes() + ":" + Data.getSeconds()
// );

// let hours = Data.getHours();
// let minutes = Data.getMinutes();
// let seconds = Data.getSeconds();

// function showTime() {
//   console.log(`${hours}:${minutes}:${seconds}`);
// }
// showTime();

// function showTime(h, m = "00", s = "00") {
//   console.log(`${h}:${m}:${s}`);
// }

// showTime(1,45,56);

// Task 8

/*Написать функцию, которая принимает часы, минуты и
секунды и возвращает это время в секундах.*/

// function sec(h, m, s) {
//   return h * 3600 + m * 60 + s;
// }
// sec(1, 30, 45); // 5445

// Task 9

/* Написать функцию, которая принимает количество секунд,
переводит их в часы, минуты и секунды и возвращает в
виде строки «чч:мм:сс».*/

// function sec2(s) {
//   let hours = Math.floor(s / 3600);
//   let min = Math.floor((s % 3600) / 60);
//   let secon = s % 60;
//   return `${hours}:${min}:${secon}`;
// }

// console.log(sec2(85564));

// Task 10
/*Написать функцию, которая считает разницу между датами.
Функция принимает 6 параметров, которые описывают 2
даты, и возвращает результат в виде строки «чч:мм:сс». При
выполнении задания используйте функции из предыду-
щих 2-х заданий: сначала обе даты переведите в секунды,
узнайте разницу в секундах, а потом разницу переведите
обратно в «чч:мм:сс».*/

// function differentTime(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
//   let totalSecond1 = sec(hours1, minutes1, seconds1);
//   let totalSecond2 = sec(hours2, minutes2, seconds2);
//   let diffSec = Math.abs(totalSecond2 - totalSecond1);
//   let timeDifference = sec2(diffSec);
//   return timeDifference;
// }
// console.log(differentTime(122, 30, 45, 133, 125, 330));

//              HOMEWORK                 //
//--------------------------------------//

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
// console.log(facrorial(3));

//         Рекурсивный метод         //

// function factor(n) {
//   if (n == 1) return 1;
//   return n * factor(n - 1);
// }
// console.log(factor(4));

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
// userRange2(34, 3);

// Task 3

/*Написать функцию, которая выводит переданное ей число
задом наперед.
Например: число 1234 вывести как 4321*/

// function invertedNumber(num) {
//   let res = 0;

//   for (let i = num; i !== 0; i = Math.floor(i / 10)) {
//     res = res * 10 + (i % 10);
//   }
//   return res;
// }
// console.log(invertedNumber(12346));

// var num = 123456;

// function getReversedNum(num) {
//   let result = 0;
//   while (num) {
//     result = result * 10 + (num % 10);
//     num = Math.floor(num / 10);
//   }

//   return result;
// }

// console.log(getReversedNum(num));

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
// console.log(sumNumbers(1234));

// Task 5

/* Написать функцию, которая принимает число и выводит
соответствующее количество вложенных пар круглых скобок.
Например: число 4 – (((())))*/

// function roundBracket(num) {
//   let bracket = " ";
//   for (let i = 1; i <= num; i++) {
//     bracket = bracket + "(";
//   }
//   for (let j = 1; j <= num; j++) {
//     bracket = bracket + ")";
//   }
//   return bracket;
// }
// console.log(roundBracket(6));



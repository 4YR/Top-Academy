
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
// for (let i = 1; i <= 10; i++) {
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
//   for (let i = 1; i <= num; i++) {
//     factorial = factorial * i;
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

//   for (let i = 1; i < num; i++) {
//     if (num % i == 0) {
//       perfect = perfect + i;
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
//   for (let i = min; i <= max; i++) {
//     if (perfectNumber(i)) {
//       console.log(i);
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

function sec(h, m, s) {
  return h * 3600 + m * 60 + s;
}
// sec(1, 30, 45); // 5445

// Task 9

/* Написать функцию, которая принимает количество секунд,
переводит их в часы, минуты и секунды и возвращает в
виде строки «чч:мм:сс».*/

function sec2(s) {
  let hours = Math.floor(s / 3600);
  let min = Math.floor((s % 3600) / 60);
  let secon = s % 60;
  return `${hours}:${min}:${secon}`;
}

// console.log(sec2(85564));

// Task 10
/*Написать функцию, которая считает разницу между датами.
Функция принимает 6 параметров, которые описывают 2
даты, и возвращает результат в виде строки «чч:мм:сс». При
выполнении задания используйте функции из предыду-
щих 2-х заданий: сначала обе даты переведите в секунды,
узнайте разницу в секундах, а потом разницу переведите
обратно в «чч:мм:сс».*/

function differentTime(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
  let totalSecond1 = sec(hours1, minutes1, seconds1);
  let totalSecond2 = sec(hours2, minutes2, seconds2);
  let diffSec = Math.abs(totalSecond2 - totalSecond1);
  let timeDifference = sec2(diffSec);
  return timeDifference;
}
console.log(differentTime(122, 30, 45, 133, 125, 330));

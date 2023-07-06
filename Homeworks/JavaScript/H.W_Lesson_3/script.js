// Task 1
/*Написать функцию, которая принимает 2 числа и возвра-
щает -1, если первое меньше, чем второе; 1 – если первое
больше, чем второе; и 0 – если числа равны.*/

// function numbers(a, b) {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0;
// }
// console.log(numbers(92, 98));

// Task 2
/*Написать функцию, которая вычисляет факториал пере-
данного ей числа.*/

// function countFactorial(num) {
//   let factorial = 1;
//   for (let i = 1; i <= num; i++) {
//     factorial = factorial * i;
//   }
//   return factorial;
// }
// console.log(countFactorial(5));

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
// console.log(rectangle(15, 87));

// Task 5

/*Написать функцию, которая проверяет, является ли пере-
данное ей число совершенным. Совершенное число – это
число, равное сумме всех своих собственных делителей*/

function perfectNumber(num) {
  let perfect = 0;

  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      perfect = perfect + i;
    }
  }
  if (perfect == num) {
    console.log(perfect + " - This is a perfect number !");
  } else {
    console.log(perfect + " - This is not a perfect number!");
  }
}

perfectNumber(28);

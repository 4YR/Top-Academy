// function bracket(num) {
//   let bracket = "";
//   for (let i = 0; i < num; i++) {
//     bracket = bracket + "(";
//   }
//   for (let j = 0; j < num; j++) {
//     bracket = bracket + ")";
//   }
//   return bracket;
// }

// console.log(bracket(4));
// console.log(12 % 10);
// console.log(Math.floor(123 / 10));

// function nums(num) {
//   let res = 0;
//   while (num > 0) {
//     res = res + (num % 10);
//     num = Math.floor(num / 10);
//     console.log(res);
//   }
//   return res;
// }
// console.log(nums(1234));

/*Запросите у пользователя  число и выведите
его задом наперед. Для решения задачи вам понадобится
оператор % (остаток от деления).*/

// function nums(x) {
//   let res = ""; //Все дело в этой переменной, если поменять на 1 то числа введенные будут между собой складываться, а в данном случае (пустая строка), числа выводятся задом наперед
//   while (x > 0) {
//     res = res + (x % 10);
//     x = Math.floor(x / 10);
//   }
//   return res;
// }
// console.log(nums(236));

/* Вывести таблицу умножения для всех чисел от 2 до 9.
Каждое число необходимо умножить на числа от 1 до 10*/

//                  HW                   //
//--------------------------------------//

// Task 1
/* Создать объект, описывающий автомобиль (производитель,
модель, год выпуска, средняя скорость), и следующие функции
для работы с этим объектом.
1. Функция для вывода на экран информации об автомобиле.
2. Функция для подсчета необходимого времени для пре-
одоления переданного расстояния со средней скоростью.
Учтите, что через каждые 4 часа дороги водителю необхо-
димо делать перерыв на 1 час*/

let car = {
  manufacturer: "Mercedes-Benz Group",
  model: "Mercedes-AMG GT",
  year_of_release: 2010,
  average_speed: 100,
  timeDistance(dist) {
    let time = Math.floor(dist / this.average_speed);
    let timeWithBreak = Math.floor(time / 4 + time);
    console.log(
      `Ваше время в пути, с учетом перерыва, составит: ${timeWithBreak} часов.`
    );
  },
};

car.timeDistance(2000);

// Task 2
/*Создать объект, хранящий в себе отдельно числитель и зна-
менатель дроби, и следующие функции для работы с этим объ-
ектом.
1. Функция сложения 2-х объектов-дробей.
2. Функция вычитания 2-х объектов-дробей.
3. Функция умножения 2-х объектов-дробей.
4. Функция деления 2-х объектов-дробей.
5. Функция сокращения объекта-дроби */

let fraction = {
  numerator_1: 5,
  denominator_1: 15,
  numerator_2: 2,
  denominator_2: 7,

  summation() {
    let resSumm_1 = this.numerator_1 * this.denominator_2;
    let resSumm_2 = this.numerator_2 * this.denominator_1;
    let resSumm_3 = this.denominator_1 * this.denominator_2;
    let result = resSumm_1 + resSumm_2;
    console.log(
      `${this.numerator_1}/${this.denominator_1} + ${this.numerator_2}/${this.denominator_2} = ${result}/${resSumm_3}`
    );
  },

  subtraction() {
    let resMinus_1 = this.numerator_1 * this.denominator_2;
    let resMinus_2 = this.numerator_2 * this.denominator_1;
    let resMinus_3 = this.denominator_1 * this.denominator_2;
    let result = resMinus_1 - resMinus_2;
    console.log(
      `${this.numerator_1}/${this.denominator_1} - ${this.numerator_2}/${this.denominator_2} = ${result}/${resMinus_3}`
    );
  },
  
  multiplication() {
    let resMulti_1 = this.numerator_1 * this.numerator_2;
    let resMulti_2 = this.denominator_1 * this.denominator_2;
    console.log(
      `${this.numerator_1}/${this.denominator_1} x ${this.numerator_2}/${this.denominator_2} = ${resMulti_1}/${resMulti_2}`
    );
  },
  
  division() {
    let resDivison_1 = this.numerator_1 * this.denominator_2;
    let resDivison_2 = this.denominator_1 * this.numerator_2;
    console.log(
      `${this.numerator_1}/${this.denominator_1} : ${this.numerator_2}/${this.denominator_2} = ${resDivison_1}/${resDivison_2}`
    );
  },
  greatestCommonDivisor(a, b) {
    while (a != b) {
      if (a > b) {
        a = a - b;
      } else {
        b = b - a;
      }
    }
    return a;
  },
  reduction() {
    let gcd = this.greatestCommonDivisor(this.numerator_1, this.denominator_1);
    let res1 = this.numerator_1 / gcd;
    let res2 = this.denominator_1 / gcd;
    console.log(`${this.numerator_1}/${this.denominator_1} = ${res1}/${res2}`);
  }
};

// function summation() {
//   let resSumm_1 = this.numerator_1 * this.denominator_2;
//   let resSumm_2 = this.numerator_2 * this.denominator_1;
//   let resSumm_3 = this.denominator_1 * this.denominator_2;
//   let result = resSumm_1 + resSumm_2;
//   console.log(
//     `${this.numerator_1}/${this.denominator_1} + ${this.numerator_2}/${this.denominator_2} = ${result}/${resSumm_3}`
//   );
// }
fraction.summation();

// function subtraction() {
//   let resMinus_1 = this.numerator_1 * this.denominator_2;
//   let resMinus_2 = this.numerator_2 * this.denominator_1;
//   let resMinus_3 = this.denominator_1 * this.denominator_2;
//   let result = resMinus_1 - resMinus_2;
//   console.log(
//     `${this.numerator_1}/${this.denominator_1} - ${this.numerator_2}/${this.denominator_2} = ${result}/${resMinus_3}`
//   );
// }
fraction.subtraction();

// function multiplication() {
//   let resMulti_1 = this.numerator_1 * this.numerator_2;
//   let resMulti_2 = this.denominator_1 * this.denominator_2;
//   console.log(
//     `${this.numerator_1}/${this.denominator_1} x ${this.numerator_2}/${this.denominator_2} = ${resMulti_1}/${resMulti_2}`
//   );
// }
fraction.multiplication();

// function division() {
//   let resDivison_1 = this.numerator_1 * this.denominator_2;
//   let resDivison_2 = this.denominator_1 * this.numerator_2;
//   console.log(
//     `${this.numerator_1}/${this.denominator_1} : ${this.numerator_2}/${this.denominator_2} = ${resDivison_1}/${resDivison_2}`
//   );
// }
fraction.division();

// function greatestCommonDivisor(a, b) {
//   while (a != b) {
//     if (a > b) {
//       a = a - b;
//     } else {
//       b = b - a;
//     }
//   }
//   return a;
// }

// function reduction() {
//   gcd = greatestCommonDivisor(this.numerator_1, this.denominator_1);
//   res1 = this.numerator_1 / gcd;
//   res2 = this.denominator_1 / gcd;
//   console.log(`${this.numerator_1}/${this.denominator_1} = ${res1}/${res2}`);
// }
fraction.reduction();

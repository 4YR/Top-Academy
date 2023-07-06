// Task 1 (поменять 1 и последнее число)

// let x = +prompt("Введите 5-ти значное число: "); // 12345
// let firstNumber = (x - (x % 10000)) / 10000; // 1 Option 1

// firstNumber = Math.floor(x / 10000); // 1 Option 2
// let lastNumber = x % 10; //5
// let center = Math.floor(x / 10) % 1000; //1234

// alert(" " + lastNumber + center + firstNumber);
// console.log(firstNumber);
// console.log(center);
// console.log(lastNumber);

// Task 2 (Вывести второе число)

// let num = +prompt("Введите 3-х значное число: ");
// let secondNumber = Math.floor((num % 100) / 10);
// alert("" + secondNumber);

// Цикл While

// let i = 1;
// while (i <= 30) {
//   console.log("Сделано " + i + " оборотов.");
// i = i + 1
//   i++;
// }

//----------------------// Task Credit

// let creditAmount = 100000;
// let creditRate = 20;
// let payment = 30000;
// creditAmount = (creditAmount * (100 + creditRate)) / 100;
// let months = 0;

// while (creditAmount > 0) {
//   creditAmount = creditAmount - payment;
//   months++;
// }
// alert("Время погаашения кредита - " + months + " месяцев.");

//----------------------// Task Deposit

// let deposit = +prompt("Вклад");
// let percent = 20;

// let years = 0;
// while (deposit < 1000000) {
//   deposit = deposit * ((100 + percent) / 100);
//   years++;
// }
// alert("Вы накопите 1 000 000 рублей через " + years + " лет");

// Цикл DO While

// let x= 0
// do {
//     alert('Text')
// }while(x !=0)

// let x = Math.random();
// let x2;
// do {
//   x2 = Math.random();
//   console.log(x);
//   console.log(x2);
// } while (x == x2);

// Цикл FOR

// for (let i = 1; i <= 30; i++) {
//   console.log(i);
// }

//----------------------//
// for (let i = 0, j = 10; i != j; i++, j--) {
//   console.log(i,j);
// }

//----------------------//

// let x;

// for (let i = 0; i < 10; i++) {
//   x = Math.round(Math.random() * 6) + 1; // 1-7
//   console.log(x);
//   if (x == 4) {
//     break;
//   }
// }

//----------------------// Рандомные цифры от 1-7, кроме 4

// let j = 0;
// let rnd;
// while (j < 10) {
//   rnd = Math.round(Math.random() * 6) + 1;
//   if (rnd == 4) {
//     continue;
//   }
//   console.log(rnd);
//   j++;
// }

//----------------------// Выводит все четные числа

// let num = +prompt("Enter number: ");

// for (let i = 1; i <= num; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//----------------------// Выводит все нечетные числа с конца

let num = +prompt("Enter number: ");

for (let i = num; i >= 0; i--) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

//----------------------// Выводит елочку ввиде звездочек
let stars = "*";
for (let i = 0; i <= 10; i++) {
  console.log(stars);
  stars += "*";
}

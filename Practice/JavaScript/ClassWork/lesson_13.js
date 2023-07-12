// Перевернутое число
// function revers(num) {
//   let str = "";
//   for (let i = 0; num > 0; i++) {
//     str += num % 10;
//     num = (num - (num % 10)) / 10;
//   }
//   console.log(str);
// }
// revers(123456);

// Скобки
// function brackets(x) {
//   let str1 = "";
//   let str2 = "";
//   for (let i = 0; i < x; i++) {
//     str1 += "(";
//     str2 += ")";
//   }
//   return str1 + str2;
// }
// console.log(brackets(10));

//               Объекты                 //
//--------------------------------------//

// let car = {
//   brand: "BMW",
//   model: "x5",
//   year: 2020,
// };

// let person = new Object();

// person.name = "Ivan";
// person.surname = "Petrov";
// person.birthday = "2000-06-30";
// person.is_student = true;
// person["name"] = "Sergey";    // Меняем name

// console.log(person);
// delete person.surname;       // Удаления свойства
// console.log(person);

// if ("name" in person) {     // Проверяем есть ли данное свойства в объекте
//   alert(person.name);
// } else {
//   alert("Имени нет");
// }

// let student = {
//   name: "Olga",
//   surname: "Petrova",
//   is_student: false,
//   contacts: {
//     email: "evd@mail.ru",
//     phone: "+765462342",
//     address: {
//       city: "Togliatty",
//       postcode: 456777,
//     },
//   },
// };
// console.log(student.contacts.address.city);  // Добираемся до city, по порядку

// for (let prop in student) {                       //Перебираем ключи в student (prop может быть с любым именем)
//   console.log(prop);
// }

// for (let prop in student) {
//   console.log([prop]);                           //Получаем значения в student  c помощью []

//   if ("contacts" in student) {                  // Перебираем ключи в contacts
//     for (let contact in student.contacts) {
//       console.log(student.contacts[contact]);
//     }
//   }
// }

// if('address' in student.contacts) {                     // Перебираем ключи в address
//     for(let addr in student.contacts.address){
//         console.log(student.contacts.address[addr])
//     }
// }

//                Массивы                //
//--------------------------------------//

// let arr = [10, 20, 30, 23, 45, 34]; // 1-й способ создания массива

// console.log(arr[2]); // Добираемся  до значения по id и через []

// arr[6] = "cat"; // Добавляем новый объект в массив
// console.log(arr[6]);

// let fruits = new Array("Lemon", "Banana", "Apple"); // 2-й способ создания массива
// console.log(fruits[1]);

// console.log(fruits.length);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let arr2 = [
//     'Apple',            // 0
//     true,               // 1
//     100,                // 2
//     [1, 2, 3, 4, 5],    // 3
//     [6, 7, 8, 9, 10],   // 4
// ];

// console.log(arr2[3][3])    // Дотягиваемся до 4

// let mix = [
//   ["Apple", "Banana", "Pineapple", "Lemon"],
//   ["Honda", "Audi", "Skoda", "Lada"],
// ];

// // Выводит все значения всех массивов
// for (let i = 0; i < mix.length; i++) {   // I - переберает сколько массивов
//   for (j = 0; j < mix[i].length; j++) {  // J - перебирает св-ва в массивах
//     console.log(mix[i][j]);
//   }
// }
// for (let i = 0; i < mix[0].length; i++) {  //Выводит только первый массив
//   console.log(mix[0][i]);
// }

//      Методы (Функция в объектах)      //
//--------------------------------------//

// let car = {
//     brand: 'Lada',
//     speed: 100,
//     getTripTime (distance) {                                          // Функция создается без слова "function"
//         console.log("Время в пути: " +distance/this.speed + " часов") // Внутри объекта используем this
//     }
// }
// car.getTripTime(1000)

//--------------------------------------//

// let rectangle = {
//     left_top: 67,
//     right_bottom: 73,
// }

// function info(obj) {
//     console.log( 'Верхний угол ' + obj.left_top + ' нижний правый угол ' + obj.right_bottom)
// }
// info(rectangle)

//--------------------------------------//

// let rectangle = {
//     left_top: 67,
//     right_bottom: 73,
//     widthRect: 150,
// }

// function infoRect(obj) {
//     console.log('Ширина прямоугольника: ' + obj.widthRect)

// }
// infoRect(rectangle)

let rectangle = {
  widthRect: 15,
  hightRect: 8,
};

function infoRect(obj) {
  console.log("Площадь прямоугольника: " + obj.widthRect * obj.hightRect);
}
infoRect(rectangle);

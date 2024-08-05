console.clear();
//!Змінна та константа
let a = 5
console.log(typeof(a), a)
a = 6
console.log(a)
const a1 = 7
console.log(typeof(a1), a1)
//! Типи даних
//? undefind,null,number, string, arr
a = '5'
console.log(typeof(a), a+a)
a = [11,42,83,34,25]
console.log(typeof(a), a,a[4])
let b 
console.log(b)
//! Арифметичні операції
//? + - / % ** * ++ --
a=6
console.log(a+2)
console.log(a-2)
console.log(a*2)
console.log(a**2)
console.log(a/2)
console.log(a%5)
a--
console.log(a)
a++
console.log(a)

//* Визнач скільки буде 2 в 5 степені та 2 в 15 степені
let b1 = 2 ** 5
let b2 = 2 ** 15
console.log("2 в 5 степені: " + b1)
console.log("2 в 15 степені: " + b2)
//* Обрахуй значення рівняння x^2+2xy+y^2
let x = 4, y = 7
let c = x**2+2*x*y+y**2
console.log("Значення рівняння: " + c)
//* Напишіть програму, яка перевіряє, чи число парне чи непарне.
a = 5
console.log(a%2==0)
// Перший спосіб
a%2==0 && console.log("Парне число")
// Другий спосіб
if(a%2==0){
    console.log("Парне число")
}else{
    console.log("Непарне число")
}
// Третій спосіб
a%2==0 ? console.log("Парне число") : console.log("Непарне число")
//* Створіть програму,яка визначає, чи є введене число додатним, від'ємним чи нулем.
let d = 5
if (d > 0) {
    console.log("Число додатне")
} else if (d < 0) {
    console.log("Число від'ємне")
} else {
    console.log("Число є нулем")
}
//* Напишіть програму, яка обчислює площу прямокутника за його довжиною і шириною.
let length = 5
let width = 3
let area = length * width
console.log("Площа прямокутника: " + area)
//* Створіть програму, яка перевіряє, чи є введене число кратним 3 або 5.
let f = 15
if (f % 3 == 0 && f % 5 == 0) {
    console.log('Число кратне як 3, так і 5')
} else if (f % 3 == 0) {
    console.log('Число кратне 3')
} else if (f % 5 == 0) {
    console.log('Число кратне 5')
} else {
    console.log('Число не кратне ні 3, ні 5')
}
////? Alert (Попередження):
//alert("Консоль успішно підключено")
////? Використовується для відображення повідомлення користувачу з кнопкою "OK". Наприклад:
////? window.alert("Це попередження!");
////? Prompt (Запит):
//b = prompt("Введіть ваше ім'я")
//console.log(b)
////? Використовується для отримання введеного користувачем значення. Він також має кнопки "OK" і "Cancel". Наприклад:
////? let result = window.prompt("Будь ласка, введіть своє ім'я", "Гість");
////? Confirm (Підтвердження):
//b = confirm("Чи бажаєте продовжити роботу на сайті?")
//console.log(b)
////? Використовується для підтвердження або скасування дії користувачем. Має кнопки

//let login, password;
//login=prompt("Введіть ваш логін")
//password=prompt("Введіть ваш пароль")
// if(login=="1" &&  password == "1"){
//    alert("Ви успішно авторизувалися")
//}else{
 //   window.location="https://www.google.com/"
//}

function processNumber(num) {
    if (num > 10) {
        return num * num;
    } else if (num < 7) {
        return "Число менше 7";
    } else if (num === 8) {
        return 7;
    } else if (num === 9) {
        return 8;
    } else {
        return num;
    }
}

const number = +prompt("Введіть число", "");

console.log("Завдання №3");
console.log("Користувач вводить числа. Якщо число більше 10, то функція повертає квадрат числа, якщо менше 7 - пише, що число менше 7. Якщо 8, 9 - то повертає відповідно 7 або 8. Реалізуйте рішення з декількома return.");
console.log("Введені дані: " + number);
console.log("Результат : " + processNumber(number));
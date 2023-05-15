const text = prompt("Введіть текст зі знаком \":\"", "");
let content = "";

for(let i = 0; i < text.length; i++){
    if(text[i] == ":"){
        content = text.slice(i+1);
        break; 
    }
}

console.log("Завдання №2");
console.log("З клавіатури вводиться текстовий рядок. Скласти скрипт, який виводить всі символи після першого символу \“:\”. ");
console.log("Введені дані: " + text);
console.log("Результат : " + content);

let js3 = confirm("Ви хочете перейти до розв'язку наступної задачі?");
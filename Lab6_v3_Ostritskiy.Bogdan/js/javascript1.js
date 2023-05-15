function findNegativeNumbers(array) {
    let negativeNumbers = [];
    let product = 1;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
        negativeNumbers.push(array[i]);
        if (negativeNumbers.length === 5) {
          break;
        }
      }
    }
  
    if (negativeNumbers.length === 5) {
      product = negativeNumbers.reduce((acc, curr) => acc * curr);
    } else {
      product = "Введено мало від'ємних чисел";
    }
  
    return product;
  }
  
  let numbers = prompt("Введіть числа для масиву, розділені комою", "").split(",").map(Number);
  
  console.log("Завдання 1");
  console.log("В даному масиві із n дійсних чисел знайти добуток перших 5 від’ємних елементів.");
  console.log("Введені дані: " + numbers);
  
  let result = findNegativeNumbers(numbers);
  if (typeof result === "number") {
    console.log("Результат: " + result);
  } else {
    console.log(result);
  }
  
  let js2 = confirm("Ви хочете перейти до розв'язку наступної задачі?");
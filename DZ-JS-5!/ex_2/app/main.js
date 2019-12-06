function factorialFind(n) {
  if (isNaN(n)) {
    return "Это не число";
  } else if (n < 0) {
    return "Число не может быть отрицательным";
  } else {
    let l = 1;
    for (i = 1; i <= n; i++) {
      l = l * i;
    }
    return l;
  }
}

console.log("\n");
console.log("Функция ычисляет факториал переданного ей числа.");
console.log(factorialFind("a"));
console.log(factorialFind(-10));
console.log(factorialFind(10));

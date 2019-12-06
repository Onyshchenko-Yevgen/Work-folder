function numbersQ(a, b) {
  let x = 2;

  a < b ? (x = -1) : a > b ? (x = 1) : (x = 0);

  return x;
}

console.log("\n");
console.log(
  "Функция принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны."
);
console.log(numbersQ(1, 2));
console.log(numbersQ(3, 2));
console.log(numbersQ(1, 1));

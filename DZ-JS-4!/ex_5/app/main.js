function factor(n = s, i = 2) {
  if (i > n / 2) {
    console.log(n);
    return;
  }
  if (n % i == 0) {
    console.log(i);
    factor(n / i, i);
  } else {
    factor(n, ++i);
  }
}

console.log("Функция выводит все множители числа в порядке возрастания.");
console.log("множители числа 18: ");
factor(22);

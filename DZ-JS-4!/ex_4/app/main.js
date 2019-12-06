function primeNumDef(n, i = 2) {
  if (n / 2 < i) {
    return true;
  }
  if (n % i == 0) {
    return false;
  }
  return primeNumDef(n, i + 1);
}

console.log(
  "Функция определяет простое число или нет. Если число простое возвращает: true, если составное: false "
);
console.log(primeNumDef(2));
console.log(primeNumDef(22));

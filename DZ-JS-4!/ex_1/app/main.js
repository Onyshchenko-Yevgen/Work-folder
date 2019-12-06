function pow(a, n) {
  if (n == 1) {
    return a;
  } else {
    return a * pow(a, n - 1);
  }
}

console.log("Функция возвращает число в указанной степени.");
console.log("число 10 в степени 2:");
console.log(pow(10, 2));

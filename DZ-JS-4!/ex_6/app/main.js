function fiboS(n) {
  if (n === 0) {
    return 0;
  } else {
    return fib(0, 1, n);
  }

  function fib(a, b, n) {
    if (n === 1) {
      return b;
    } else {
      return fib(b, a + b, n - 1);
    }
  }
}

console.log("Функция выводит число Фибоначчи по порядковому номеру.");
console.log("порядковый номер: 3");
console.log(fiboS(3));

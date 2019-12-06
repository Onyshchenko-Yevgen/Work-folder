function getMaxNum(num) {
  if (num < 10) {
    return num;
  } else if (num % 10 > getMaxNum(Math.floor(num / 10))) {
    return num % 10;
  } else {
    return getMaxNum(Math.floor(num / 10));
  }
}

console.log("Функция возвращает максимальную цифру числа");
console.log("максимальная цифра числа 111111191111 :");
console.log(getMaxNum(111111191111));

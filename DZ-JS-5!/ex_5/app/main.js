function perfectNumCheck(n) {
  let msg = "message";
  if (isNaN(n)) {
    msg = "This is not a number";
    return msg;
  } else {
    function getDivisorSum() {
      let sum = 0;
      for (i = n; i > 0; i--) {
        if (n % i == 0) {
          sum += i;
        }
      }
      return sum;
    }
    if (getDivisorSum() - n == n) {
      msg = "Number " + n + " perfect";
    } else {
      msg = "Number " + n + " not perfect";
    }
    return msg;
  }
}

console.log("\n");
console.log(
  "Функция проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей."
);
console.log(perfectNumCheck(123456));

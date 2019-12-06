function PerfectNumSearch(a, b) {
  let foundNum = [];

  for (let i = a; i < b; i++) {
    if (perfectNumCheck(i) == true) {
      foundNum.push(i);
    }
  }
  if (foundNum.length == 0) {
    return "В указанном диапазоне нет совершенного числа";
  } else {
    return foundNum;
  }
}

console.log("\n");
console.log(
  "Функция принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными."
);
console.log(PerfectNumSearch(1, 5));
console.log(PerfectNumSearch(55, 555));

function perfectNumCheck(n) {
  let perf = false;
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
    perf = true;
  } else {
    perf = false;
  }
  return perf;
}

let sum = 0,
    discount = 0,
    answer = '';


sum = parseInt(prompt ("Введите сумму покупки в грн."));

  if (sum >= 200 && sum <= 300) {
    discount = sum - 0.03 * sum;
  } else if (sum >= 301 && sum <= 500) {
    discount = sum - 0.05 * sum;
  } else if (sum > 500) {
    discount = sum - 0.07 * sum;
  } else if (sum < 199) {
    discount = sum;
  }

answer = "Цена со скидкой составит: " + discount + " грн.";

console.log(answer);
    
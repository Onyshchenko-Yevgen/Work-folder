const currencyEur = 'EUR', courseEur = 0.8834,
      currencyUah = 'UAH', courseUah = 26.2990,
      currencyAzn = 'AZN', courseAzn = 1.7000;      


let sumUsd = 0,
    currency = '',
    sum = 0;

sumUsd = prompt('Введите сумму в USD : ');
currency = prompt('Введите валюту в которую необходимо конвертировать (EUR, UAH, AZN) : ', 'EUR');

if (currency == currencyEur){
  sum = sumUsd * courseEur;
} 

if (currency == currencyUah){
  sum = sumUsd * courseUah;
} 

if (currency == currencyAzn){
  sum = sumUsd * courseAzn;
} 

if (currency != currencyEur && currency != currencyUah && currency != currencyAzn){
  console.log('Неверно указана валюта');
}


console.log(sum);
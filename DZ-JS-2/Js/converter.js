const currencyEur = 'EUR', courseEur = 0.8834,
      currencyUah = 'UAH', courseUah = 26.2990,
      currencyAzn = 'AZN', courseAzn = 1.7000;      


let sumUsd = 0,
    currency = '',
    sum = 0;

sumUsd = prompt('Enter USD Amount : ');
currency = prompt('Enter the currency you want to convert (EUR, UAH, AZN) : ', 'EUR');

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
  alert('Invalid currency');
}

alert(sum);
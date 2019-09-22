let year = 0,
    msg  = '';

year = parseInt(prompt('Введите год '));

if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
  msg = (year + ' высокосный год');
} else if ((year % 400 != 0) || (year % 100 == 0)) {
  msg = (year + ' невысокосный год');
}
console.log(msg);
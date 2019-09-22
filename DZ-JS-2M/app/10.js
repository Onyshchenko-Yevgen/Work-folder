const Jan = 01,
      Feb = 02
      Mar = 03
      Apr = 04,
      May = 05,
      Jun = 06,
      Jul = 07,
      Aug = 08,
      Sep = 09,
      Oct = 10,
      Nov = 11,
      Dec = 12;

let day = 0,
    nextDay = 0
    maxDay = 0,

    month = '',
    nextMonth = '',

    year = 0,
    nextYear = 0,
    msg = '';

day = prompt('Введите день', 1);
month = prompt('Введите месяц (01, 02) : ', '01');
year = prompt('Введите год (1987) ', 2019);

if (month == Jan || month == Mar || month == May || month == Jul || month == Aug || month == Oct || month == Dec){
  maxDay = 31;
}

if (month == Apr || month == Jun || month == Sep || month == Nov){
  maxDay = 30;
}

if (month == Feb && (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
  maxDay = 29;
} else if (month == Feb && (year % 400 != 0) || (year % 100 == 0)) {
  maxDay = 28;
}


if (day > 0 && day < maxDay){
  nextDay = ++day;
} else if(day == maxDay){
  nextDay = 1;
}

if (nextDay == 1 && month < 12){
  nextMonth = ++month;
} else if (nextDay == 1 && month == 12){
  nextMonth = 01;
} else {
  nextMonth = month;
} 

if (nextDay == 1 && month == 12){
  nextYear = ++year;
} else {
  nextYear = year;
}


console.log(nextDay,nextMonth,nextYear);

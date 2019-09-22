let age = 0;

age = prompt('введите ваш возвраст : ');

if (age < 0){
  console.log('ошибка в возрасте');
}

if (age >= 0 && age <= 2){
  console.log('грудной ребенок');
}

if (age > 2 && age <= 11){
  console.log('ребенок');
}

if (age > 11 && age <= 17){
  console.log('подросток');
}

if (age > 17 && age <= 60){
  console.log('взрослый');
}

if (age > 60 && age <= 80){
  console.log('пенсионер');
}

if (age > 80 && age < 120){
  console.log('пенсионер-долгожитель');
}



let num;

num = prompt('Введите число от 0 до 9 : ');

if (num == 0){
  console.log('числу ' + num + ' соответсвует сивол ")"');
}
if (num == 1){
  console.log('числу '+ num + ' соответсвует сивол "!"');
}
if (num == 2){
  console.log('числу '+ num + ' соответсвует сивол "@"');
}
if (num == 3){
  console.log('числу '+ num + ' соответсвует сивол "#"');
}
if (num == 4){
  console.log('числу '+ num + ' соответсвует сивол "$"');
}
if (num == 5){
  console.log('числу '+ num + ' соответсвует сивол "%"');
}
if (num == 6){
  console.log('числу '+ num + ' соответсвует сивол ":"');
}
if (num == 7){
  console.log('числу '+ num + ' соответсвует сивол "&"');
}
if (num == 8){
  console.log('числу '+ num + ' соответсвует сивол "*"');
}
if (num == 9){
  console.log('числу '+ num + ' соответсвует сивол "("');
}

if (num < 0 || num > 9){
  console.log('Символ не найден');
}

let a,b,c,e;

a = prompt("Введите трехзначное число");

if (a > 99 && a < 1000){
  b = parseInt(a / 100);  
  a = a % 100;
  c = parseInt(a / 10);  
  a = a % 10;  

  if ( b == a || c == a  || b == c){
    console.log("В данном числе есть одинаковые цифры");
  } else{
    console.log("В данном числе нет одинаковых цифр");
  }

} else{
  console.log("Вы ввели не трехзначное число");
}










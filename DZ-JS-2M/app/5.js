let a,b,c,e;

a = prompt("Введите пятизначное число");

if (a > 9999 && a < 100000){
  b = parseInt(a / 10000);
  a = a % 10000;
  c = parseInt(a / 1000);
  a = a % 1000;
  a = a % 100;
  e = parseInt(a / 10);
  a = a % 10; 

  if ( b == a && c == e ){
    console.log("Это число палиндром");
  } else{
    console.log("Это число не палиндром");
  }

} else{
  console.log("Вы ввели не пятизначное");
}


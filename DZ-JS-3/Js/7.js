let x = 0,
    y = 0,
    count = 0,
    div = 0,
    bias = 0,
    num = 0; 

x = parseInt(prompt("Введите число"));
y = parseInt(prompt("Введите сдвиг для числа"));

num = x;

if (isNaN(x) || isNaN(y)){
    alert("Ошибка при вводе числа")
} 
else {

  do{
    num = parseInt(num / 10);
    count++;
  }
  while (num > 0);

  if (count > y){
    num = Math.pow(10, count - y);
    bias = parseInt(x / num);
    div = x % num;
    alert("Введенное число " + x + "\nЧисло со сдвигом " + y + " = " + div + bias);
  } else {
        alert("Ошибка при вводе сдвига");
  }      
  
}

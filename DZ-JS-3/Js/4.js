let num = 0,    
    num2 = 0,
    sum = 0;

num = parseInt(prompt("Введите число :", 10));
num = (isNaN(num))? 10: num;
if(isNaN(num)){
    num = 10;
}

num2 = num;

while(num2 > 0){   
    num2 = parseInt(num2 / 10);
    sum++;
}


alert("Количество цифр в числе " + num + " = " + sum);
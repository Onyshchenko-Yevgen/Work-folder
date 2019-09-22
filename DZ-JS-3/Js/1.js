let x = 0,
    y = 0,
    sum = 0,
    num1 = 0,
    num2 = 0;

x = parseInt(prompt("Введите первое число"));
y = parseInt(prompt("Введите второе число"));

if (isNaN(x) || isNaN(y)){
    alert("Не вверно введены данные");
} else {
    num1 = x <= y ? x : y;
    num2 = x <= y ? y : x;
}

for (let i = num1; i <= num2; i++){
        sum += i;    
}

alert("Сумма чисел в диапазоне: " + x + "-" + y + "=" + sum);
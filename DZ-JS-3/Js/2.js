let a, b,
num1 = 0, num2 = 0;

a = parseInt(prompt('Введите первое число : ',1));
b = parseInt(prompt('Введите второе число : ',2)); 

if(a < 0 || b < 0){
    a = Math.abs(a);
    b = Math.abs(b);
}

num1 = a;
num2 = b;

while (a != 0 && b != 0){
    if (a > b){
        a = a % b;
    }else {
        b = b % a;
    }
} 

alert('НОД чисел ' + num1 + ' и ' + num2 + ' = ' + (a + b));
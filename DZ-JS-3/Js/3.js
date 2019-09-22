let n, num1, divisor = [], i = 1;

n = parseInt(prompt('Введите первое число : ',12));
num1 = n;   

if(n < 0){    
    n = Math.abs(n);    
}

while(i <= n) {
    if(n % i == 0) divisor.push(i);
    i++;
}

alert('Делители числа ' + num1 + ' : ' + divisor);




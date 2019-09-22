let max = [],
    num = [],
    m = 0,
    n = -1,
    arr = [];

for(i = 0; i < 10;i++){
    arr.push(parseInt(prompt('Введите оценку от 1 до 100', 1)));
    if(arr[i] < 0 || isNaN(arr[i])|| arr[i] > 100){
        alert('ОШИБКА ВВЕДЕННЫХ ДАННЫХ');
        arr.pop();
        i--;
    }
}

for (let j = 0; j < 3; j++) {
    m = 0;
    n = -1;
    for (let i = 0; i < 10; i++) {
        if (arr[i] > m) {
            m = arr[i];
            n = i;
        }
    }

    max.push(m);
    num.push(n);

    arr[n] = 0;
}

alert('Победители:\n' + num[0] + ': ' +  max[0] + ' очков,\n' + num[1] + ': ' + max[1] + ' очков,\n' + num[2] + ': ' + max[2] + ' очков.');
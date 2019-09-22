let xo = [],
    o = 0,
    x = 0,
    z = '';

do {
    for (i = 0; i < 3; i++) {
        let op = [],
            s = ['X', 'O'];

        for (j = 0; j < 3; j++) {
            op.push(s[randm(s.length)]);
            z += op[j];

            if (op[j] == 'X') {
                x++;
            } else if (op[j] == 'O') {
                o++;
            }
        }

        if (x > 5 || o > 5) {
            x = 0;
            z = '';
            o = 0;
            j = 0;
            i = 0;
            op = [];
            xo = [];
            break;
        }
        xo.push(op);
    }
} while (xo.length == 0);


z = (z.slice(0, 3)) + '\n' + (z.slice(3, 6)) + '\n' + (z.slice(6, 9));


function randm(r) {
    return Math.floor(Math.random() * r);
}

console.log(z);
console.log('Всего крестиков: ' + x);
console.log('Всего ноликов: ' + o);
console.log('Массив который получился: ');
console.log(xo);
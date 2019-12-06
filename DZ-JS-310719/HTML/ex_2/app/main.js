let fract1 = {
        numer: 0,
        denom: 0
    },
    fract2 = {
        numer: 0,
        denom: 0
    };

// ввод значений и определение возможности вывода вычислений
fract1.numer = parseInt(prompt('Введите числитель первого дробного числа', 0));
fract1.denom = parseInt(prompt('Введите знаменатель первого дробного числа', 0));
if (valFract(fract1) == true) {
    fract2.numer = parseInt(prompt('Введите числитель второго дробного числа', 0));
    fract2.denom = parseInt(prompt('Введите знаменатель второго дробного числа', 0));
    if (valFract(fract2) == true) {
        fractOut(fract1, fract2);
    } else {
        alert('Invalid');
    }
} else {
    alert('Invalid');
}

// функция сложения дробей
function fractPlus(f1, f2) {
    let fa1 = Object.assign({}, commonDenom(f1, f2)[0]),
        fa2 = Object.assign({}, commonDenom(f1, f2)[1]);
    fa1.numer = fa1.numer + fa2.numer;
    let result = Object.assign({}, fa1);
    return result;
}

// функция вычитания дробей
function fractMinus(f1, f2) {
    let fa1 = Object.assign({}, commonDenom(f1, f2)[0]),
        fa2 = Object.assign({}, commonDenom(f1, f2)[1]);
    fa1.numer = fa1.numer - fa2.numer;
    let result = Object.assign({}, fa1);
    return result;
}

// функция умножения дробей
function fractMult(f1, f2) {
    let fa1 = Object.assign({}, f1),
        fa2 = Object.assign({}, f1);
    fa1.numer = f1.numer * f2.numer;
    fa1.denom = f1.denom * f2.denom;
    let result = Object.assign({}, fa1);
    return result;
}

// функция деления дробей
function fractDiv(f1, f2) {
    let fa1 = Object.assign({}, f1),
        fa2 = Object.assign({}, f1);
    fa1.numer = f1.numer * f2.denom;
    fa1.denom = f1.denom * f2.numer;
    let result = Object.assign({}, fa1);
    return result;
}

// функция приведения к общему знаменателю
function commonDenom(cd1, cd2) {
    let o = Object.assign({}, cd1),
        o2 = Object.assign({}, cd2),
        result = [o, o2];
    o.numer = cd1.numer * cd2.denom;
    o2.numer = cd2.numer * cd1.denom;
    o.denom = cd1.denom * cd2.denom;
    o2.denom = cd1.denom * cd2.denom;
    return result;
}

// функция составления дроби из обьекта, для вывода на экран
function fractWrite(f) {
    let int = 0;
    if (f.numer > f.denom) {
        for (i = 1; i <= f.numer; i++) {
            if (i % f.denom == 0) {
                int++;
                console.log(int);
            }
            if (i == f.numer) {
                return '(' + int + ')' + (f.numer % f.denom) + '/' + f.denom;
            }
        }
    }
    return f.numer + '/' + f.denom;
}

// функция проверки введенных пользователем значений
function valFract(f) {
    if (isNaN(f.numer) || isNaN(f.denom)) {
        return false;
    } else {
        return true;
    }
}

// функция сокращения дроби
function simpleFract(f) {
    let res = Object.assign({}, f)
    // функция поиска НОД
    function getDivider(a, b) {
        if (b) {
            return getDivider(b, a % b);
        } else {
            return Math.abs(a);
        }
    }
    res.numer = res.numer / getDivider(f.numer, f.denom);
    res.denom = res.denom / getDivider(f.numer, f.denom);
    return res;
}

// функция вывода результатов вычислений 
function fractOut(f1, f2) {
    let res = [];
    res.push(fractWrite(f1) + " + " + fractWrite(f2) + " = " + fractWrite(simpleFract(fractPlus(f1, f2))));
    res.push(fractWrite(f1) + " - " + fractWrite(f2) + " = " + fractWrite(simpleFract(fractMinus(f1, f2))));
    res.push(fractWrite(f1) + " * " + fractWrite(f2) + " = " + fractWrite(simpleFract(fractMult(f1, f2))));
    res.push(fractWrite(f1) + " \u00F7 " + fractWrite(f2) + " = " + fractWrite(simpleFract(fractDiv(f1, f2))));
    return alert(res.join(';\n'));
}
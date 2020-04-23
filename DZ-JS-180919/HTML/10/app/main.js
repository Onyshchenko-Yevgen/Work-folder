// функция принимает шаблон и значения, и выводит готовую строку
// вставляя значения вместо %индекс в шаблоне
function showTemplate(temp, val) {
    let res = temp,
        v = val.join(',');
    for (let i = 0; i < val.length; i++) {
        res = res.replace(`%${i + 1}`, val[i]);
    }
    return showString(temp, v, res)
}

// обработка введенного значения
function addUserString() {
    let uTemp = document.querySelector('#userText').value,
        uVal = document.querySelector('#userSep').value;
    uVal = uVal.split(',');
    if (!uTemp || !uVal) {
        return;
    } else {
        showTemplate(uTemp, uVal);
        uTemp.value = '';
        uVal.value = '';
        return;
    }
}

// вывод готовой строки
function showString(temp, val, str) {
    document.querySelector('p').innerText = (`Шаблон: ${temp}, Значения: (${val}) ==> Результат: ${str}`);
}

// обработчик события кнопки
document.querySelector('#btnUstrng').addEventListener('click', addUserString);
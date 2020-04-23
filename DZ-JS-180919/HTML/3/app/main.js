// изменение строки
function rString(str) {
    let rStr = '';
    str.replace(/([a-z])|([A-Z])|([0-9])/g, replacer);

    function replacer(match, p1, p2, p3) {
        p1 ? p1 = p1.toUpperCase() : 0;
        p2 ? p2 = p2.toLowerCase() : 0;
        p3 ? p3 = '_' : 0;
        rStr += (p1 || p2 || p3);
        return;
    }
    console.log(rStr);
    return rStr;
}

// обработка введенного значения
function addUserString() {
    let uString = document.querySelector('#uStrng').value;
    if (!uString) {
        return;
    } else {
        showString(uString, rString(uString));
        return document.querySelector('#uStrng').value = '';
    }
}

// вывод готовой строки
function showString(oldStr, str) {
    document.querySelector('p').innerText = (`Было: ${oldStr}  Стало: ${str}`);
}

// обработчик события кнопки
document.querySelector('#btnUstrng').addEventListener('click', addUserString);
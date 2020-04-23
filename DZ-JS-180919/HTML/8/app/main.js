//принимает URL проверяет наличие протокола, и
// при помощи свойств тега <a> разбирает адрес по составляющим
function urlParcer(str) {
    if ((/^(ftp|http|https):\/\/[^ "]+$/).test(str)) {
        let a = document.createElement('a');
        a.href = str;
        let result = `${str}
                ${'protocol: ' + a.protocol}
                ${'hostname: ' + a.hostname}
                ${'port: ' + a.port}
                ${'pathname: ' + a.pathname}
                ${'hash: ' +  a.hash}
                ${'search: ' + a.search}
                ${'origin: ' + a.origin}`;
        return showString(result);
    } else {
        return showString('Invalid URL');
    }
}

// обработка введенного значения
function addUserString() {
    let uString = document.querySelector('#userText').value;
    if (!uString) {
        return;
    } else {
        urlParcer(uString);
        return document.querySelector('#userText').value = '';
    }
}

// вывод готовой строки
function showString(str) {
    document.querySelector('p').innerText = (`URL: ${str}`);
}

// обработчик события кнопки
document.querySelector('#btnUstrng').addEventListener('click', addUserString);
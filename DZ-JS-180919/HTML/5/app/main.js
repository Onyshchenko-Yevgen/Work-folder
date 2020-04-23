// создание аббревиатуры
function rString(str) {
  return str
    .match(/\b\w/g)
    .join("")
    .toUpperCase();
}

// обработка введенного значения
function addUserString() {
  let uString = document.querySelector("#uStrng").value;
  if (!uString) {
    return;
  } else {
    showString(uString, rString(uString));
    return (document.querySelector("#uStrng").value = "");
  }
}

// вывод готовой строки
function showString(oldStr, str) {
  document.querySelector(
    "p"
  ).innerHTML = `<abbr title = '${oldStr}'>${str}</abbr>`;
}

// обработчик события кнопки
document.querySelector("#btnUstrng").addEventListener("click", addUserString);

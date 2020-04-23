//принимает строку - очищает от нематематических символов и выводит результат
function calcString(str) {
  str = str.replace(/[^0-9\-\+\*\/\(\)]/g, "");
  return showString(str, eval(str));
}

// обработка введенного значения
function addUserString() {
  let uString = document.querySelector("#userText").value;
  if (!uString) {
    return;
  } else {
    calcString(uString);
    return (document.querySelector("#userText").value = "");
  }
}

// вывод готовой строки
function showString(oldStr, str) {
  document.querySelector("p").innerText = `${oldStr} = ${str}`;
}

// обработчик события кнопки
document.querySelector("#btnUstrng").addEventListener("click", addUserString);

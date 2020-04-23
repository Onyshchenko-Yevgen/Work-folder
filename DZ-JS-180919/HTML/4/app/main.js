// изменение строки в стиле "СamelCase"
function rString(str) {
  function lowToUp(match) {
    match = match.replace(/-/, "");
    return match.toUpperCase();
  }
  return str.replace(/(-+\w)/g, lowToUp);
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
  document.querySelector("p").innerText = `Было: ${oldStr}  Стало: ${str}`;
}

// обработчик события кнопки
document.querySelector("#btnUstrng").addEventListener("click", addUserString);

//принимает любое количество строк, которые соединяет в одну
function rString(...str) {
  let myStr = "";
  str = str.join("");
  return (myStr += str.replace(/\s/g, ""));
}

// обработка введенного значения
function addUserString() {
  let uString = document.querySelector("#userText").value,
    uString2 = document.querySelector("#userText2").value;
  if (!uString && !uString2) {
    return;
  } else {
    showString(uString, rString(uString, uString2));
    document.querySelector("#userText").value = "";
    return (document.querySelector("#userText2").value = "");
  }
}

// вывод готовой строки
function showString(oldStr, str) {
  document.querySelector("p").innerText = `${str}`;
}

// обработчик события кнопки
document.querySelector("#btnUstrng").addEventListener("click", addUserString);

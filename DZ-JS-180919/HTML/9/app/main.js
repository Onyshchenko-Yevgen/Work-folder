function arrFromString(str, sep) {
  let myRes = [];
  let tmp = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== sep) tmp.push(str[i]);
    else {
      !tmp[0] ? 0 : myRes.push((tmp = tmp.join("")));
      tmp = [];
    }
  }
  return showString(str, sep, JSON.stringify(myRes));
}

// обработка введенного значения
function addUserString() {
  let uString = document.querySelector("#userText").value,
    uSep = document.querySelector("#userSep").value;
  if (!uString || !uSep) {
    return;
  } else {
    arrFromString(uString, uSep);
    uSep = document.querySelector("#userSep").value = "";
    document.querySelector("#userText").value = "";
    return;
  }
}

// вывод готовой строки
function showString(oldStr, sep, str) {
  document.querySelector(
    "p"
  ).innerText = `(String: ${oldStr}; Separator: ${sep}) ==> Array: ${str}`;
}

// обработчик события кнопки
document.querySelector("#btnUstrng").addEventListener("click", addUserString);

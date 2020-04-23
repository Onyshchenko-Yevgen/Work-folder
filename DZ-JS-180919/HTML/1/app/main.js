function stringInfo(str) {
  let redStr = str.replace(/\s/g, ""),
    l = redStr.match(/[a-z]/g),
    n = redStr.match(/\d/g),
    s = redStr.match(/\W/g),
    info = {
      strng: str,
      strngLen: redStr.length,
      lettersLen: l ? l.length : 0,
      numbersLen: n ? n.length : 0,
      symbolsLen: s ? s.length : 0,
      letters: l ? l.join("") : "",
      numbers: n ? n.join("") : "",
      symbols: s ? s.join("") : ""
    };
  return info;
}

function addUserString() {
  let uString = document.querySelector("#uStr").value;
  if (!uString) {
    return;
  } else {
    showString(stringInfo(uString));
    return (document.querySelector("#uStr").value = "");
  }
}

function showString(infObj) {
  let str = `Строка: ${infObj.strng} длина строки: ${infObj.strngLen}`,
    letter = `Буквы: ${infObj.letters} всего в строке: ${infObj.lettersLen}`,
    numb = `Цифры: ${infObj.numbers} всего в строке: ${infObj.numbersLen};`,
    symbol = `Специальные символы: ${infObj.symbols} всего в строке: ${infObj.symbolsLen}`;
  document.querySelector(
    "p"
  ).innerText = `${str}\n${letter}\n${numb}\n${symbol}`;
}

document.querySelector("#btnStr").addEventListener("click", addUserString);

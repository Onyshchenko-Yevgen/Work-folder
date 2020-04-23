const U1 = [
  [
    "",
    "одинадцать",
    "двенадцать",
    "тринадцать",
    "четырнадцать",
    "пятнадцать",
    "шестнадцать",
    "семнадцать",
    "восемнадцать",
    "девятнадцать"
  ],
  [
    "",
    "один",
    "два",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять"
  ],
  [
    "",
    "десять",
    "двадцать",
    "тридцать",
    "сорок",
    "пятьдесят",
    "шестьдесят",
    "семьдесят",
    "восемьдесят",
    "девяносто"
  ],
  [
    "",
    "сто",
    "двести",
    "триста",
    "четыреста",
    "пятьсот",
    "шестьсот",
    "семьсот",
    "восемьсот",
    "девятьсот"
  ]
];

// перевод числа в его строчное написание
function parseNumber(num) {
  let res = "";
  if (num == 0) {
    return (res = "ноль ");
  } else if (num > 999 && num < -999) {
    return (res = "слишком большое число");
  } else if (num < 0) {
    res = "минус ";
    num = Math.abs(num);
  }
  {
    let oNum = String(num).split("");
    stringMaker(oNum);

    function stringMaker(a) {
      let len = a.length;
      if (len == 0) {
        return;
      } else {
        if (a[len - 2] == 1 && a[len - 1] > 0) {
          if (len == 3) {
            res += U1[len][a[0]] + " ";
          }
          res += U1[0][a[len - 1]] + " ";
          a.splice(-1, 2);
          return;
        } else {
          res += U1[len][a[0]] + " ";
          a.shift();
          return stringMaker(a);
        }
      }
    }
    return res;
  }
}

//вывод рандомного числа

function nm() {
  let n = Math.floor(Math.random() * 1000);
  return showNum(parseNumber(n), 1);
}

setInterval(nm, 1500);

// вывод числа на экран- принимает уже готовую строку
function showNum(n, s) {
  if (s) {
    let r = document.querySelector("#container>p"),
      container = document.querySelector("#container");
    if (r) {
      r.remove();
    }
    p = document.createElement("p");
    p.textContent = n;
    container.append(p);
  } else {
    let r = document.querySelector("#showValue>p"),
      container = document.querySelector("#showValue");
    if (r) {
      r.remove();
    }
    p = document.createElement("p");
    p.textContent = n;
    container.append(p);
  }
  return;
}

// принимает и обрабатывает значение введенное в input -
function addUserNum() {
  let uVal = document.querySelector("#NMBR").value;
  if (!uVal || uVal > 999 || uVal < -999) {
    return (document.querySelector("#NMBR").value = "");
  } else {
    showNum(parseNumber(uVal));
    return (document.querySelector("#NMBR").value = "");
  }
}

// кнопка ОК
document.querySelector("#btnAdd").addEventListener("click", addUserNum);

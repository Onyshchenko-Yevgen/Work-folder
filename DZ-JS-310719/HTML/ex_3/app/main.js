let time = {
  hh: 0,
  mm: 0,
  ss: 0
};

// ввод значений в секундах и вывод результата увеличения
let sec = parseInt(prompt("Введите на сколько секунд увеличить время", 0));
if (valTime(sec) == true) {
  timeWrite(addSec(sec));
} else if (valTime(sec) == false) {
  alert("Invalid");
}

// ввод значений в минутах и вывод результата увеличения
let min = parseInt(prompt("Введите на сколько минут увеличить время", 0));
if (valTime(min) == true) {
  timeWrite(addMin(min));
} else if (valTime(min) == false) {
  alert("Invalid");
}

// ввод значений в часах и вывод результата увеличения
let hour = parseInt(prompt("Введите на сколько часов увеличить время", 0));
if (valTime(hour) == true) {
  timeWrite(addHour(hour));
} else if (valTime(hour) == false) {
  alert("Invalid");
}

function timeWrite(t) {
  let res = [];
  for (let i in t) {
    res.push((t[i] > 10 ? "" : "0") + t[i]);
  }
  return alert(res.join(":"));
}

// функция добавления секунд
function addSec(s) {
  time.ss += s;
  if (time.ss >= 60) {
    for (i = 1; i <= time.ss; i++) {
      if (i % 60 == 0) {
        time.mm++;
      }
      if (i % 3600 == 0) {
        time.hh++;
        time.mm = 0;
      }
      if (i == time.ss) {
        time.ss = time.ss % 60;
      }
    }
  }
  return time;
}

// функция добавления минут
function addMin(m) {
  time.mm += m;
  if (time.mm >= 60) {
    for (i = 1; i <= time.mm; i++) {
      if (i % 60 == 0) {
        time.hh += 1;
      }
      if (i == time.mm) {
        time.mm = time.mm % 60;
      }
    }
  }
  return time;
}

// функция добавления часов
function addHour(h) {
  time.hh += h;
  return time;
}

// функция проверки введенных данных
function valTime(t) {
  if (t < 0 || isNaN(t)) {
    return false;
  } else {
    return true;
  }
}

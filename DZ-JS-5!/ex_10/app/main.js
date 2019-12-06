function getDateDiff(...date0) {
  let date1 = [],
    date2 = [],
    diff = 0;
  for (i = 0; i < date0.length; i++) {
    if (i < 3) {
      date1.push(date0[i]);
    } else if (i >= 3) {
      date2.push(date0[i]);
    }
  }
  if (dateValid(...date1) == true && dateValid(...date2) == true) {
    if (date1.toString() < date2.toString()) {
      while (date1.toString() !== date2.toString()) {
        date1 = nextDateGen(...date1);
        diff++;
      }
    } else if (date1.toString() > date2.toString()) {
      while (date1.toString() !== date2.toString()) {
        date2 = nextDateGen(...date2);
        diff++;
      }
    } else if (dateValid(...date1) == false && dateValid(...date2) == false) {
      return "формат даты не соответствует верному чч.мм.гггг";
    }
  }
  diff = diff * 86400;
  return getTime(diff);
}

function nextDateGen(...date) {
  let isDay = date[0],
    isMonth = date[1],
    isYear = date[2],
    isDate = [];

  if (isMonth == 12 && isDay == 31) {
    isDay = 1;
    isMonth = 1;
    ++isYear;
  } else if (
    (isDay == 28 &&
      isMonth == 2 &&
      !((isYear % 4 == 0 && isYear % 100 != 0) || isYear % 400 == 0)) ||
    (isDay == 30 && isMonth == 4) ||
    (isDay == 30 && isMonth == 6) ||
    (isDay == 30 && isMonth == 9) ||
    (isDay == 30 && isMonth == 11) ||
    (isDay == 31 && isMonth != 12) ||
    (isDay == 29 &&
      isMonth == 2 &&
      ((isYear % 4 == 0 && isYear % 100 != 0) || isYear % 400 == 0))
  ) {
    isDay = 1;
    ++isMonth;
  } else {
    ++isDay;
  }

  isDate.push(isDay);
  isDate.push(isMonth);
  isDate.push(isYear);
  return isDate;
}

function dateValid(...date) {
  let isDay = date[0],
    isMonth = date[1],
    isYear = date[2];

  if (isYear <= 0 || isNaN(isYear) || parseInt(isYear) != isYear) {
    return false;
  } else if (
    isMonth <= 0 ||
    isMonth >= 13 ||
    isNaN(isMonth) ||
    parseInt(isMonth) != isMonth
  ) {
    return false;
  } else if (
    isDay <= 0 ||
    isDay >= 32 ||
    isNaN(isDay) ||
    parseInt(isDay) != isDay ||
    (isMonth == 2 && isDay >= 30) ||
    (isDay > 28 &&
      isMonth == 2 &&
      !((isYear % 4 == 0 && isYear % 100 != 0) || isYear % 400 == 0)) ||
    ((isMonth == 4 || isMonth == 6 || isMonth == 9 || isMonth == 11) &&
      isDay >= 31)
  ) {
    return false;
  } else {
    return true;
  }
}

console.log("\n");
console.log(
  "считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»"
);
console.log("перебор с учетом високосного года и количества дней в месяце: ");
console.log(getDateDiff(21, 09, 2019, 22, 09, 2019));

console.log("\n");
console.log("перевод в секунды и получение разницы: ");
console.log(getDateDiffSecond(21, 05, 2019, 22, 05, 2020));

function getDateDiffSecond(...date) {
  let date1 = [],
    date2 = [],
    sec1 = 0,
    sec2 = 0,
    diff = 0;
  for (i = 0; i < date.length; i++) {
    if (i < 3) {
      date1.push(date[i]);
    } else if (i >= 3) {
      date2.push(date[i]);
    }
  }
  sec1 += date1[0] * 86400;
  sec1 += date1[1] * 2592000;
  sec1 += date1[2] * 31104000;
  sec2 += date2[0] * 86400;
  sec2 += date2[1] * 2592000;
  sec2 += date2[2] * 31104000;

  if (sec1 > sec2) {
    diff = sec1 - sec2;
  } else if (sec1 < sec2) {
    diff = sec2 - sec1;
  } else {
    return;
  }
  return getTime(diff);
}

function getTime(s) {
  let t = [];
  if (s < 0 || isNaN(s) || parseInt(s) != s) {
    return "Получены некорректные данные";
  } else {
    t.push((s - (s % 3600)) / 3600);
    t.push(((s - (s % 60)) % 3600) / 60);
    t.push(s % 60);
    return timeOutput(...t);
  }
}

function timeOutput(...time) {
  let o = [];
  for (i = 0; i < 3; i++) {
    o.push(time[i]);
    if (o[i] == 0) {
      o.splice(i, 1);
      o.push("00");
    } else if (o[i] < 10) {
      o[i] = "0" + o[i];
    }
  }
  o = o.join(":");
  return o;
}

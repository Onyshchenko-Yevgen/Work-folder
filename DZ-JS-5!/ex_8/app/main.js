function getSecondTime(...time) {
  let sec = 0;
  if (timeValid(time) == true) {
    sec += time[0] * 3600;
    sec += time[1] * 60;
    sec += time[2];
    return sec;
  } else if (timeValid(time) == false) {
    return "Некорректные данные";
  }
}

console.log("\n");
console.log(
  "Функция принимает часы, минуты и секунды и возвращает это время в секундах."
);
console.log(getSecondTime(01, 00, 00));

function timeValid(t) {
  if (t.length != 3) {
    return false;
  }
  if (t[1] >= 60 || t[2] >= 60) {
    return false;
  }
  for (j = 0; j < t.length; j++) {
    if (t[j] < 0) {
      return false;
    } else if (isNaN(t[j])) {
      return false;
    }
  }
  return true;
}

function timeOutput(...time) {
  let o = [];
  if (timeValid(time) == true) {
    for (i = 0; i < 3; i++) {
      o.push(time[i]);
      if (o[i] == undefined || o[i] == 0) {
        o.splice(i, 1);
        o.push("00");
      } else if (o[i] < 10) {
        o[i] = "0" + o[i];
      }
    }
    o = o.join(":");
    return o;
  } else if (timeValid(time) == false) {
    return "Некорректные данные";
  }
}

console.log("\n");
console.log(
  "Функция принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс». Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00."
);
console.log(timeOutput(5));
console.log(timeOutput(5, 55));
console.log(timeOutput(05, 05, 00));

function timeValid(t) {
  if (t.length > 3) {
    return false;
  }
  if (t[0] > 23 || t[1] >= 60 || t[2] >= 60) {
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

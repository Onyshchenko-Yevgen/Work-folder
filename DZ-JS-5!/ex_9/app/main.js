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

console.log("\n");
console.log(
  "Функция принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс»"
);
console.log(getTime(3600));

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

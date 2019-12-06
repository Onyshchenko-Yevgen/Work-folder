let auto = {
  производитель: "Skoda",
  модель: "Octavia",
  "год выпуска": 2009,
  "средняя скорость": 100,
  "максимальная скорость": 240
};

listInfo(auto);
let s = Math.floor(prompt("Введите дальность маршрута в километрах", 0));
timeCounter(s);

// функция для вывода информации об автомобиле
function listInfo(obj) {
  let res = ["Информация об автомобиле:\n"];
  for (let i in obj) {
    res.push(i + ": " + "-" + obj[i] + "-" + "\n");
  }
  return alert(res.join(""));
}

//функция для подсчета времени для преодоления расстояния

function timeCounter(i) {
  if (isNaN(i) || i < 0) {
    return alert("Введены неверные данные.");
  }
  let res = [],
    d = i;
  d = (d * 1000) / ((auto["средняя скорость"] * 1000) / 3600);
  res.push(Math.floor(d / 3600));
  res.push(Math.floor((d % 3600) / 60));
  res.push(Math.floor(d % 60));
  if (res[0] > 4 || (res[0] == 4 && res[1] > 30)) {
    for (i = 1; i <= res[0]; i++) {
      if (i % 4 == 0) {
        res[0] = res[0] + 1;
      }
    }
  }
  return alert(
    "для преодоления: " +
      i +
      " км\n" +
      "со скоростью: " +
      auto["средняя скорость"] +
      " км/ч \n" +
      "необходимо потратить времени на маршрут, с учетом остановок на отдых (чч:мм:сс): " +
      res.join(":")
  );
}

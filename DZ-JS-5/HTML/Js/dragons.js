let male = 0,
  female = 0,
  genderOper = 2,
  heads = 0,
  power = 1,
  dragVal = parseInt(
    prompt("Введите количество драконов в стае, от 1 до 100", 0)
  ),
  midHead = parseInt(heads / dragVal),
  dragonPack = [...dragonPackGen()];

if (isNaN(dragVal) || dragVal <= 0 || dragVal > 100) {
  alert("Необходимо ввести число от 1 до 100. Перезагрузите страницу.");
  dragVal = 0;
} else {
  alert(
    "Вы ввели всё правильно, и мы можем продолжить. Информация о стае будет выведена в консоль"
  );
  console.log("Стая: ", dragonPack);
  console.log("Самый молодой дракон: ", dragonPack[0]);
  console.log("Самый старый дракон: ", dragonPack[dragVal - 1]);
  console.log("драконов мужского пола: " + male);
  console.log("драконов женского пола: " + female);
  console.log("всего голов в стае: " + heads);
  console.log("среднее количество голов: " + parseInt(heads / dragVal));
  console.log("суммарная мощь стаи: " + power);
}

function dragonPackGen() {
  let dragons = [],
    locations = [
      "Подземные пещеры",
      "Озеро сокровищ",
      "Огненная гора",
      "Затерянные острова",
      "Ледяная впадина",
      "Тёмный лес"
    ],
    genders = ["cамец", "cамка"],
    colors = [
      "красный",
      "жёлтый",
      "зелёный",
      "зсеро-буро-малиновый",
      "черный",
      "синий",
      "хаки"
    ];

  for (let i = 0; i < dragVal; i++) {
    let g = {};

    g.gender = genders[rand(genders.length)];
    g.gender == genders[1] ? (gVal = 1) : (gVal = 0);
    g.color = colors[rand(colors.length)];
    g.age = rand(3000 - 100) + 100;
    g.name = nameGen();
    g.head = rand(20) + 1;
    g.location = locations[rand(locations.length)];
    heads += g.head;
    power *= g.head;
    dragons.push(g);
  }
  dragons.sort(function(a, b) {
    return a.age - b.age;
  });
  return dragons;
}

function rand(r) {
  return Math.floor(Math.random() * r);
}

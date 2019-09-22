let male = 0,
    female = 0,
    genderOper = 2,
    heads = 0,
    power = 1,
    dragVal = parseInt(prompt('Введите количество драконов в стае, от 1 до 100', 0)),
    midHead = parseInt(heads / dragVal),
    dragonPack = [...dragonPackGen()];

if (isNaN(dragVal) || dragVal <= 0 || dragVal > 100) {
    alert('Неверно, необходимо ввести число от 1 до 100. Перезагрузите страницу.');
    dragVal = 0;
} else {
    alert('Вы ввели всё правильно, и мы можем продолжить. Информация о стае будет выведена в консоль');
    console.log('Стая: ', dragonPack);
    console.log('Самый молодой дракон: ', dragonPack[0]);
    console.log('Самый старый дракон: ', dragonPack[dragVal - 1]);
    console.log('драконов мужского пола: ' + male);
    console.log('драконов женского пола: ' + female);
    console.log('всего голов в стае: ' + heads);
    console.log('среднее количество голов: ' + parseInt(heads / dragVal));
    console.log('суммарная мощь стаи: ' + power);
}


function dragonPackGen() {
    let dragons = [],
        locations = ['Холодное гнездо', 'Туманная пропасть', 'Зеленые острова', 'Бескрайние болота', 'Пустынные равнины', 'Тёмный лес', 'Проклятая равнина', 'Черные колонны', 'Глубокое пепелище', 'Мрачные горы', 'Пропасть отчаяния'],
        genders = ['cамец', 'cамка'],
        colors = ['красный', 'оранжевый', 'жёлтый', 'зелёный', 'черный', 'синий', 'фиолетовый'];


    for (let i = 0; i < dragVal; i++) {
        let g = {};


        g.gender = genders[randm(genders.length)];
        g.gender == genders[1] ? gVal = 1 : gVal = 0;
        g.color = colors[randm(colors.length)];
        g.age = randm((3000 - 100)) + 100;
        g.name = nameGen();
        g.head = randm(20) + 1;
        g.location = locations[randm(locations.length)];
        heads += g.head;
        power *= g.head;
        dragons.push(g);
    }
    dragons.sort(function (a, b) {
        return a.age - b.age;
    })
    return dragons;
}

function nameGen() {
    let capLetters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'],
        lowLetters = ['аб', 'ба', 'ив', 'ги', 'ид', 'ен', 'ёк', 'жи', 'за', 'ин', 'йо', 'ку', 'ль', 'мо', 'ни', 'ои', 'по', 'рц', 'си', 'ту', 'ур', 'фе', 'хе', 'цо', 'чи', 'ша', 'щ', 'ы', 'ь', 'э', 'ю', 'я'],
        endLettersMale = ['ан', 'ир', 'он', 'ен', 'эн', 'ист', 'ид', 'ад', 'нт', 'им', 'ил', 'ер', 'льд', 'льт', 'льм', 'льк', 'сс', 'шт', 'шк'],
        endLettersFemale = ['на', 'иа', 'да', 'ма', 'ка', 'ея', 'ра', 'ла', 'га', 'ия', 'ая'];

    let l = randm(7) + 1,
        nam = [];

    nam.push(capLetters[randm(capLetters.length)]);

    for (j = 0; j < l; j++) {
        nam.push(lowLetters[randm(lowLetters.length)]);
    }

    if (gVal == 0) {
        nam.push(endLettersMale[randm(endLettersMale.length)]);
        male++;

    } else if (gVal == 1) {
        nam.push(endLettersFemale[randm(endLettersFemale.length)]);
        female++;
    };

    return nam.join('');
}


function randm(r) {
    return Math.floor(Math.random() * r);
}
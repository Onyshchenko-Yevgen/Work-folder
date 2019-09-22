let name = prompt('Введи свое имя, странник', 'Имя'),
    letters = ["ш", "щ", "ч", "ж"],
    nameLen = name.length,
    isBadName = false,
    replics = ['Подозрительное у тебя имя, странник. Дам-ка я тебе задание на убийство крыс в канализации.', 'Отличное имя, странник. Вот тебе квест на убийство дракона.'];

for (let i = 0; i < nameLen; i++) {
    if (letters.indexOf(name[i].toLowerCase()) > -1) {
        isBadName = true;
        break;
    }
}

if (isBadName === true) {
    console.log(replics[0]);
} else {
    console.log(replics[1]);
}
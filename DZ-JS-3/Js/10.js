let num = 0,
    msg,
    min = 0,
    max = 100,
    num1 = 50;

num = parseInt(prompt("Введите число от 1 до 100"));

if (isNaN(num)){
    alert("Не корректно введны данные")
}else {

  do {
    msg = prompt("Ваше число больше, меньше или равно " + num1 + "?\nДопустимые значения < > =");

    switch (msg) {
      case "<":
              max = num1 - 1;
              num1 = parseInt((min + max) / 2);
              break;
      case ">":
              min = num1 + 1
              num1 = parseInt((min + max) / 2);
              break;
      case "=":
              break;
      default:
              alert("Не корректный выбор");
    }

  }
  while (msg != "="){
  alert("Вы загадали число = " + num1);
  }

}
let weeksDAY = 1,
    day = "";
    
do {
  switch (weeksDAY) {
    case 1: 
          day = "Понедельник";
          break;
    case 2: 
          day = "Вторник";
          break;
    case 3: 
          day = "Среда";
          break;
    case 4: 
          day = "Четверг";
          break;
    case 5: 
          day = "Пятница";
          break;
    case 6:
          day = "Суббота";
          break;
    case 7: 
          day = "Воскресенье";
          break;
  }
    
  weeksDAY += weeksDAY != 7 ? 1 : -6;
}
while (confirm(day + ".\n Хотите увидеть следующий день недели?"));

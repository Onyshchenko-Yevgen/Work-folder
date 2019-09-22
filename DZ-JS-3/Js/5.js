let num,
    countPlus = 0,
    countMinus = 0,
    countZero = 0,
    countOdd = 0,
    countEven = 0,    
    msg = "",
    res;

for (let i = 1; i <= 10; i++){

  do {
    num = parseInt(prompt("Введите число #" + i));
  }
  while (isNaN(num)){
    res = num % 2;
  }

  if (num == 0){
    countZero++;
  } 

  if (res == 0){
    countEven++;
  } else{
    countOdd++;
  }

  if (num > 0){
    countPlus++;
  }

  if (num < 0){
    countMinus++;
  }

}

msg = "Вы ввели цифру 0 : " + countZero + " раз";
msg += "\nположительных чисел : " + countPlus;
msg += "\nотрицательных чисел : " + countMinus;
msg += "\nчетных чисел : " + countEven;
msg += "\nнечетных чисел : " + countOdd;

alert(msg);
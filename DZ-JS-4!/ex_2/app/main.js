function getDivider(a, b) {
  if (b) {
    return getDivider(b, a % b);
  } else {
    return Math.abs(a);
  }
}
console.log("Функция возвращает наибольший общий делитель двух чисел.");
console.log("наибольший общий делитель чисел 200 и 500:");
console.log(getDivider(200, 500));

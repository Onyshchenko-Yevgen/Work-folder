function squareCalc() {
  let s = 0;
  if (arguments.length == 2) {
    s = arguments[0] * arguments[1];
  } else if (arguments.length == 1) {
    s = arguments[0] * arguments[0];
  }
  return s;
}

console.log("\n");
console.log(
  "Функция принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата."
);
console.log("Площадь прямоугольника равна: " + squareCalc(4, 5));
console.log("Площадь квадрата равна: " + squareCalc(22));

let xo = [],
  o = 0,
  x = 0,
  n = "";

do {
  for (i = 0; i < 3; i++) {
    let m = [],
      s = ["X", "O"];

    for (j = 0; j < 3; j++) {
      m.push(s[rand(s.length)]);
      n += m[j];
    }

    if (x > 5 || o > 5) {
      x = 0;
      n = "";
      o = 0;
      j = 0;
      i = 0;
      m = [];
      xo = [];
      break;
    }
    xo.push(m);
  }
} while (xo.length == 0);

n = n.slice(0, 3) + "\n" + n.slice(3, 6) + "\n" + n.slice(6, 9);

function rand(r) {
  return Math.floor(Math.random() * r);
}

console.log(n);
console.log("Получилось: ");
console.log(xo);

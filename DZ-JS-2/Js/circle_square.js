const pi = 3.14;

let p = 0,
    l = 0,
    r = 0,
    d = 0,
    a = 0,
    msg = '';

l = prompt('Enter the circumference ');
p = prompt('Enter the perimeter of the square');

a = p / 4; //сторона квадрата
d = l / pi; //диаметр окружности
r = d / 2; //радиус окружности

if (r <= a / 2){
  msg = 'This circle can fit in this square';
} else {
  msg = 'This circle cannot fit in this square';
}

alert(msg);
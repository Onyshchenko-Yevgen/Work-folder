let question1 = prompt(' 2 + 2 = ?','a) 3, b) 4, c) 5'),
   i = 0;

if (question1 == 'b' || question1 == 4) {
       i = i + 2;
   alert('you are right, get 2 balls');
}else {
   alert('You are mistaken!');
}

let question2 = prompt(' 2 * 2 = ?','a) 3, b) 4, c) 5');

if (question2 == 'b' || question2 == 4) {
   i = i + 2;
   alert('you are right, get 2 balls');
}else {
   alert('You are mistaken!');
}

let question3 = prompt(' 2 / 2 = ?','a) 1, b) 2, c) 3');

if (question3 == 'a' || question3 == 1) {
   i = i + 2;
   alert('you are right, get 2 balls');
}else {
   alert('You are mistaken!');
}

alert('you get' + i + 'balls');
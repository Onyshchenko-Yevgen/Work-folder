let a,b,c,e;

a = prompt("Enter a five-digit number");

if (a > 9999 && a < 100000){
  b = parseInt(a / 10000);
  a = a % 10000;
  c = parseInt(a / 1000);
  a = a % 1000;
  a = a % 100;
  d = parseInt(a / 10);
  a = a % 10; 

  if ( b == a && c == d ){
    alert("This number is palindrome");
  } else{
    alert("This number is not a palindrome");
  }

} else{
  alert("You entered not five-digit");
}


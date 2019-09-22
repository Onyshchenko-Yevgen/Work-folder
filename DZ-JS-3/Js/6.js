let x,y,res;
let sign ='';
let exitT ='';

while (exitT != '0'){   

  exitT = prompt('Вы хотите продолжить "да/нет")');  

  if (exitT == 'нет'){ exitT = false; break; } 
  if (exitT == 'да'){ 

    x = +prompt('Введите первое число : '); 
    sign = prompt('Введите знак ( +, -, *, / ) : '); 
    y = +prompt('Введите второе число : ');     

    if (sign == '+' || sign == '-' || sign == '*' || sign == '/'){
  
      switch (sign) {
        case '+':
                res = x + y;
                alert(x + ' + ' + y + ' = ' + res);
                break;
        case '-':
                res = x - y;
                alert(x + ' - ' + y + ' = ' + res);
                break;
        case '*':
                res = x * y;
                alert(x + ' * ' + y + ' = ' + res);
                break;
        case '/':      
                if (y != 0){
                  res = x / y;
                  alert(x + ' / ' + y + ' = ' + res);
                } else alert("Деление на ноль!");       
             
      }//switch      
      
    } //if    
    else {alert("Неверно указан знак операции");}

  } else {alert("Введите да или нет");}  

} //while

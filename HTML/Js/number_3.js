let a=0;
let a1=0;
let a2=0;
let a3=0;
a=prompt("Enter your number?",1);
 a1=(a/100)%10;
 a2=(a/10)%10;
 a3=a/%10;  
    if(a1==a2||a2==a3||a1==a3){
        alert("Yes")
    }
    else{
       alert("No") 
    }
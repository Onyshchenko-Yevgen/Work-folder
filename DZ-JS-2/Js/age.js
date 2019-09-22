let age=0;
text="Hellow"
age=prompt("How old are you?",1);
    
    switch(true){
        case 0<age<=2:{
                alert("You are a child");
                       break;
    }
        case 12<=age<=18:{
                alert("You are a teenager");
                       break;
    }
        case 18<age<=60:{
                alert("You are an adult");
                       break;
    }
        case age>60:{
                alert("You are pensioner");
                       break;
    }
}
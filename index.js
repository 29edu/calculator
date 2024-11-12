
let current=0;
let current_int=0;
let prev=0;
let prev_int=0;
let operation='';
let same='';

function reset(){
    current=0;
    current_int=0;
    same='';
    operation='';
    Span.innerHTML = current;
    prev=0;
    prev_int=0;
}

let Span = document.getElementById("res");
let allButton = document.querySelectorAll("button");
let  numbers = document.querySelectorAll(".num");
let special_character = document.querySelectorAll(".special");

numbers.forEach(element => {
    element.addEventListener("click", (event)=> {
        if (event.target.innerHTML=="reset") {
            reset();
            return;  
        } 

        if(prev!=0 ) {
            current = event.target.innerHTML;
            same=same+current;
            current_int = parseInt(same);
            current = prev+same;
            Span.innerHTML = current;
            return;
        }

        current=event.target.innerHTML;
        same = same + current;
        current = same;
        current_int = parseInt(current);
        Span.innerHTML = current;
    });
});

special_character.forEach(element => {
    element.addEventListener("click", (event)=> {
        if (event.target.innerHTML=="="){
            let result = arithmatic(operation);
            if (result==="Undefined") {
                reset();
            }
            Span.innerHTML = result;
            current_int = result;
            current = result;
            return;
        }
        operation=event.target.innerHTML;
        prev_int =current_int;
        
        current = current + operation;
        prev = current;
        Span.innerHTML = current;
        same='';
    });
});

function arithmatic(operation) {
    switch(operation) {
        case "+":
            return prev_int + current_int;
        
        case "-":
            return prev_int - current_int;

        case "*":
            return prev_int* current_int;

        case "/":
            if (current_int==0) {
                return "Undefined";
            }
            return prev_int/ current_int;

        default:
            return;
    }

}



// Working with floating numbers
// Issue happening while i write operation continuosly. 
// Limiting string characters according to size of calculator
// Adding one more button to remove the last element
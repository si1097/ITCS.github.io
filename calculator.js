function equivalentCheck(){ //This allows the last value to remain in view until the other buttons are pressed.
    if(parseInt(document.getElementById('equivalent').value)) {

        document.getElementById('equivalent').value = 0;
        document.getElementById('result').value = 0;
    }
}
function input(x) {

   equivalentCheck();

   let y = parseFloat(document.getElementById('result').value);

   if (document.getElementById('decimalVar').value == 0) {

        x += y * 10; //multiply text input by ten and add value of x,appending one digit to another

        document.getElementById('result').value = x;
   }
   else { //If decimal is true

        let decimalCount = parseInt(document.getElementById('decimalVar').value);
        
        if (decimalCount == 1) {

            x *= 1/10; // We are using maths to place the decimal point.
            y += x; // x is the input, will shift x to one tenth, y is the floating integer (x is the decimal, 7/10)
            document.getElementById('result').value = y;
            
        }
        else{
            document.getElementById('result').value += x;
        }

        decimalCount++;

        document.getElementById('decimalVar').value = decimalCount;
   }

    if (document.getElementById('result').value == 0) // this checks the zero and gets rid of it when we enter a number ofr the first time

    {
        document.getElementById('result').value = x;
    }

    else {

    document.getElementById('result').value += x; /* plus equal x means more than one digit can be entered on calculator.*/

}

}


}

function decimalPoint() {
        if(document.getElementById('decimalVar').value == 0){ // this prevents multiple decimals.
        document.getElementById('decimalVar').value = 1;
    }

    if(parsenInt(document.getElementById('operation').value)) {
        document.getElementById('result').value = 0;
    }
}


function operatorCheck() {

    let a = parseFloat(document.getElementById('operand').value);
    let b = parseFloat(document.getElementById('result').value);

    switch (parseInt(document.getElementById('operation').value)){

    case 1: // addition
        a += b;
        break;
    case 2: // subtraction
        a -= b;
        break;
    case 3: // multiplication
        a *= b;
        break;
    case 4: // division
        a /= b;


    }

    document.getElementById('operand').value = a;
    document.getElementById('result').value = a;
    document.getElementById('equivalent').value = 1;
    
}  
    function operators(x) {
    
        switch (x) {
        case 1:
            document.getElementById('operation').value = 1; //addition
            break;
        case 2:
            document.getElementById('operation').value = 2; //subtraction
            break;
        case 3:
            document.getElementById('operation').value = 3; //multiplication
            break;
        case 4:
            document.getElementById('operation').value = 4; //division
            break;
        default:
    }

    operandCheck();
}

function equals() {

    operators(parseInt(document.getElementById('operation').value));
    document.getElementById('result').value = document.getElementById('operand').value;
    document.getElementById('operand').value= "";
    document.getElementById('equivalent').value = 1;

}

function allClear() {

    document.getElementById('result').value = 0;
    document.getElementById('operand').value = "";
    document.getElementById('operation').value = 0;
    document.getElementById('equivalent').value = 0;
}

function plusminus() {

    let x = parseFloat(document.getElementById('result').value); // enables numbers to be minused in value

    x *= -1;

    document.getElementById('result').value = x;
}
function percent() {
    let x = parseFloat(document.getElementById('result'));

    x*= 0.01;

    document.getElementById('result').value = x;

}

function square(){
    let x = parseFloat(document.getElementById('result'));

    x *= x;


    document.getElementById('result').value = x;

}
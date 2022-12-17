let numOne = ''; // first number
let numTwo = ''; // secont number
let mathOperation = ''; // знак операции
let finish  = false; 

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/', '%', '+/-'];

// экран 
const outRezult = document.querySelector('.calc-screen p');

function allclear () {
    numOne = ''; // first number and result
    numTwo = ''; // second number 
    mathOperation = ''; // знак
    finish = false;
    outRezult.textContent = 0;
}

    const ac = document.querySelector('.ac')
    ac.onclick = allclear; // если нажимаю то все очищается по функции

    const buttons = document.querySelector('.buttons');
    buttons.onclick = (event) =>{
    //нажали не на кнопку а на пустую область
    if(!event.target.classList.contains('btn'))
        return;
    //.нажали на кнопку ac
    if(event.target.classList.contains('ac'))
        return;
    outRezult.textContent = '';

    //получили нажатую кнопку 
    const key = event.target.textContent; // обьявил переменную для event.target.textContent

    // проверка если нажата кнопка 0-9 из массива
    if (numbers.includes(key)){ 
        if(numTwo === '' && mathOperation === ''){
            numOne += key;
            outRezult.textContent = numOne;
            console.table(numOne); 
        } else if (numOne !=='' && numTwo !== '' && finish){
            numTwo = key;
            finish = false;
            outRezult.textContent = numTwo;
        }
        else{
            numTwo += key;
            outRezult.textContent = numTwo;
            console.table(numOne, mathOperation, numTwo);
        }
    }

    //проверяем нажатие действия 
    if (action.includes(key)){
        mathOperation = key;
        outRezult.textContent = mathOperation;
        console.table(numOne, mathOperation, numTwo);
    return;
    }

// нажата кнопка равно
if (key === '=' || key === '%' || key === '-'){
    if(numTwo === " ")
    numTwo = numOne;
    switch (mathOperation){
        case '+/-':
            if (numOne === "+"){
                numOne = -(+numOne) + (+numTwo);
                return;
            } else if (numOne === "-"){
                numOne = -numOne - numTwo;
                return;
            } else if(numOne === "X"){
                numOne = -numOne * numTwo;
                return;
            } else if (numOne === "/"){
                numOne = -numOne / numTwo;
                return;
            }
            break;
        case '%':
            numOne = numOne / 100;
        break;
        case '+':
            numOne = (+numOne) + (+numTwo);
        break;

        case '-':
            numOne = numOne - numTwo;
        break;

        case 'X':
            numOne = numOne * numTwo;
        break;

        case '/':
            if (numTwo === "0"){
                outRezult.textContent = "error";
                numOne = '';
                numTwo = '';
                mathOperation = '';
                return;
            }
        numOne = numOne / numTwo;
        break;
    }
    finish = true;
    outRezult.textContent =     numOne;
    console.table(numOne, mathOperation, numTwo);
    

    }
}


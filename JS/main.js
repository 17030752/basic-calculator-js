const buttonNumbers = document.getElementsByName('data-number');
const buttonOp = document.getElementsByName('data-op');
const buttonEquals = document.getElementsByName('data-equals')[0];
const buttonDel = document.getElementsByName('data-del')[0];
var result = document.getElementById('result');
var operationCurrent =' ';
var operationLast=' ';
var operation = undefined;
buttonNumbers.forEach(function (button) {
    button.addEventListener('click',function () {
        addNumber(button.innerText);
    });
});

buttonOp.forEach(function (button) {
    button.addEventListener('click',function () {
        selectOperation(button.innerText);
    });
});

buttonEquals.addEventListener('click',function () {
        calc();
        updateDisplay();
    });

buttonDel.addEventListener('click',function () {
clear();
updateDisplay();
    });
    function selectOperation(op){
        if(operationCurrent===' ') return;
        if (operationLast!==' ') {
            calc();
        }
        operation = op.toString();
        operationLast = operationCurrent;
        operationCurrent =' ';
    }
    function calc(){
        var calculus;
        const last = parseFloat(operationLast);
        const current = parseFloat(operationCurrent);
        if(isNaN(current) || isNaN(last)) return;
        switch (operation) {
            case '+':
                calculus = last + current;
                break;
        
            case '-':
                calculus = last - current;
                break;
        
            case '*':
                calculus = last * current;
                break;
        
            case '/':
                calculus = last / current;
                break;
                case '^':
                calculus = Math.pow(last , current);
                break;
            default:
                return;
        }
        operationCurrent = calculus;
        operation = undefined;
        operationLast = ' ';
    }
 function addNumber(num){
    operationCurrent = operationCurrent.toString() + num.toString();
    updateDisplay();
 }
    function clear(){
        operationCurrent=' ';
        operationLast=' ';
        operation = undefined;
    }
    function updateDisplay(){
        result.value = operationCurrent;
    }
    clear();
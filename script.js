function main() {
    const equation = [];
    
    const operands = document.querySelectorAll('.operand');
    operands.forEach(operand => {
        operand.addEventListener('click', (e) => {
            clearFirstOperandFromDisplay();
            displayOperand(e);
        });
    });

    const dotCharacter = document.querySelector('.dot');
    dotCharacter.addEventListener('click', displayTheDotCharacter);

    const deleteButton = document.querySelector('#delete');
    deleteButton.addEventListener('click', deleteCharacter);

    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', resetCalculator);

    const operators = document.querySelectorAll('button.operator');
    operators.forEach(operatorBtn => {
        operatorBtn.addEventListener('click', (e) => {
            const display = document.querySelector('.display');
            if (!equation.length) {
                equation.push(Number(display.textContent));
                equation.push(operatorBtn.textContent);
            } else if (equation.length == 1) {
                equation.push(operatorBtn.textContent);
            } else if (equation.length == 2) {
                equation.push(Number(display.textContent));
                calculateEquation(equation);
                equation.push(operatorBtn.textContent);
               
            }
            operatorBtn.classList.add('selected');
        });
    });

    const equalButton = document.querySelector('#equal');
    equalButton.addEventListener('click', (e) => {
        const display = document.querySelector('.display');
        equation.push(Number(display.textContent));
        calculateEquation(equation);
    });
}

function calculateEquation(equation) {
    const display = document.querySelector('.display');
    let result = operate(equation[0], equation[2], equation[1]);
    display.textContent = result;
    equation.push(result);
    equation.splice(0, 3);
}

function clearFirstOperandFromDisplay() {
    const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
        if (operator.classList.contains('selected')) {
            cleanScrean();
            operator.classList.remove('selected');
        }
    });
}

function cleanScrean() {
    const display = document.querySelector('.display');
    display.textContent = '';
}

function resetCalculator(e) {
    const display = document.querySelector('.display');
    display.textContent = 0;
}

function deleteCharacter(e) {
    const display = document.querySelector('.display');
    characters = display.textContent.split('');
    if (display.textContent.length === 1) {
        display.textContent = 0;
        return;
    } 
    characters.pop()
    display.textContent = characters.join('');
}

function displayTheDotCharacter(e) {
    const display = document.querySelector('.display');
    const patern = /\./
    if (display.textContent.search(patern) === -1) {
        display.textContent += e.target.textContent;
    }
}

function displayOperand(e) {
    const display = document.querySelector('.display');
    const CHARACTERS_LIMIT = 15;
    if (display.textContent.length === CHARACTERS_LIMIT) return;
    if (display.textContent === '0'){
        display.textContent = e.target.textContent;
    } else {
        display.textContent += e.target.textContent;
    }
}

function add(num1, num2) {
    return num1 + num2
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(factor1, factor2) {
    return factor1 * factor2;
}

function division(num1, num2) {
    if (num2 === 0) return null;
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtraction(num1, num2);
        case '/':
            return division(num1, num2);
        case 'x':
            return multiplication(num1, num2);
    }
}

main()
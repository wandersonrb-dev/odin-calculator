function main() {
    const operands = document.querySelectorAll('.operand');
    operands.forEach(operand => {
        operand.addEventListener('click', displayOperand);
    });

    const dotCharacter = document.querySelector('.dot');
    dotCharacter.addEventListener('click', displayTheDotCharacter);
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
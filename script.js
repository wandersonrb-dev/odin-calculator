function main() {
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
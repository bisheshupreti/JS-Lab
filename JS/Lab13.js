let a = 10;
let b = 3;

function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function product(num1, num2) {
    return num1 * num2;
}

document.write("<h3> a = " + a + "<br>b = " + b + "</h3>");
document.write("<h4> a + b = " + add(a, b) + "</h4>");
document.write("<h4> a - b = " + subtract(a, b) + "</h4>");
document.write("<h4> a / b = " + divide(a, b) + "</h4>");
document.write("<h4> a * b = " + product(a, b) + "</h4>");
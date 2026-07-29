const n = 7;

document.write("<h3> n = " + n + "</h3");

const square = (num) => num * num;
document.write("<br><h3> Square of n = " + square(n) + "</h3");

const factorial = (num) => {
  if (num < 0) return "Undefined (negative number)";
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
};

document.write("<br><h3> Factorial of n = " + factorial(n) + "</h3");
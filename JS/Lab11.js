// Sample array
let numbers = [2, 4, 6, 8, 10];

document.write("<p><strong>Original Array:</strong> [" + numbers + "]</p>");

// 1. forEach() Example
document.write("<h3>forEach() Example</h3>");
document.write("<p>Doubled values: ");

numbers.forEach(function (num) {
  document.write(num * 2 + " ");
});

document.write("</p>");


// 2. map() Example
let doubled = numbers.map(function (num) {
  return num * 2;
});

document.write("<h3>map() Example</h3>");
document.write("<p>Original Array: [" + numbers + "]</p>");
document.write("<p>New Array (Doubled): [" + doubled + "]</p>");

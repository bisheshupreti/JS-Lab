let arr = [10, 2, 3, 6, 11, 0];

let sum = 0;
let max = arr[0];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  if (arr[i] > max) max = arr[i];
  if (arr[i] < min) min = arr[i];
}
let avg = sum / arr.length;

// Display results
document.write("<h2>Results</h2>");
document.write("<div class='result'>");
document.write("<p><strong>Array:</strong> " + arr.join(", ") + "</p>");
document.write("<p><strong>Sum:</strong> " + sum + "</p>");
document.write("<p><strong>Average:</strong> " + avg.toFixed(2) + "</p>");
document.write("<p><strong>Largest:</strong> " + max + "</p>");
document.write("<p><strong>Smallest:</strong> " + min + "</p>");
document.write("</div>");

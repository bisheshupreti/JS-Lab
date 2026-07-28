let number = 7;
document.write("<h2>Multiplication Table of " + number + "</h2>");
document.write("<table>");
document.write(
  "<tr><th>Multiplier</th><th>Multiplication</th><th>Result</th></tr>",
);

for (let i = 1; i <= 10; i++) {
  let result = number * i;
  let rowClass = i % 2 === 0 ? "highlight" : "";
  document.write("<tr class='" + rowClass + "'>");
  document.write("<td>" + i + "</td>");
  document.write("<td>" + number + " * " + i + "</td>");
  document.write("<td><strong>" + result + "</strong></td>");
  document.write("</tr>");
}
document.write("</table>");

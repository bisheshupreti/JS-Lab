let n = 10;
let a = 0,
  b = 1;
let count = 0;
document.write("<h3> Fibonacci Series </h3>");
document.write("<div class='series'>");
while (count < n) {
  document.write("<span class='term'>" + a + "</span>");
  if (count < n - 1) document.write(", ");
  let temp = a + b;
  a = b;
  b = temp;
  count++;
}
document.write("</div>");


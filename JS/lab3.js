let a = 10;
let b = 3;
let result = "";

result += "<h2>Arithmetic Operators</h2>";
result += "<p>a = " + a + ", b = " + b + "</p>";
result += "<p>a + b = " + (a + b) + "</p>";
result += "<p>a - b = " + (a - b) + "</p>";
result += "<p>a * b = " + a * b + "</p>";
result += "<p>a / b = " + a / b + "</p>";
result += "<p>a % b = " + (a % b) + "</p>";
result += "<p>++a = " + ++a + " (a becomes " + a + ")</p>";
result += "<p>--b = " + --b + " (b becomes " + b + ")</p>";

let c = 20;
result += "<h2>Assignment Operators</h2>";
result += "<p>c = " + c + "</p>";
result += "<p>c += 5: " + (c += 5) + "</p>";
result += "<p>c -= 3: " + (c -= 3) + "</p>";
result += "<p>c *= 2: " + (c *= 2) + "</p>";
result += "<p>c /= 4: " + (c /= 4) + "</p>";
result += "<p>c %= 3: " + (c %= 3) + "</p>";

// Comparison Operators
let x = 5;
let y = "5";
result += "<h2>Comparison Operators</h2>";
result += "<p>x = " + x + " (Number), y = '" + y + "' (String)</p>";
result += "<p>x == y: " + (x == y) + " (value equality)</p>";
result += "<p>x === y: " + (x === y) + " (strict equality)</p>";
result += "<p>x != y: " + (x != y) + "</p>";
result += "<p>x !== y: " + (x !== y) + "</p>";
result += "<p>x > 3: " + (x > 3) + "</p>";
result += "<p>x < 3: " + (x < 3) + "</p>";
result += "<p>x >= 5: " + (x >= 5) + "</p>";
result += "<p>x <= 4: " + (x <= 4) + "</p>";

// Logical Operators
let p = true;
let q = false;
result += "<h2>Logical Operators</h2>";
result += "<p>p = " + p + ", q = " + q + "</p>";
result += "<p>p && q: " + (p && q) + " (AND)</p>";
result += "<p>p || q: " + (p || q) + " (OR)</p>";
result += "<p>!p: " + !p + " (NOT)</p>";
result += "<p>(5 > 3) && (10 < 20): " + (5 > 3 && 10 < 20) + "</p>";
result += "<p>(5 > 3) || (10 > 20): " + (5 > 3 || 10 > 20) + "</p>";

// Ternary Operator
let age = 18;
result += "<h2>Ternary Operator</h2>";
result += "<p>age = " + age + "</p>";
let status = age >= 18 ? "Adult" : "Minor";
result += "<p>Status: " + status + "</p>";

// Display all results
document.getElementById("output").innerHTML = result;

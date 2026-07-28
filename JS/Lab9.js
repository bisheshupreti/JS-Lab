const SUBJECTS = 5;
let subjectNames = ["Math", "Science", "English", "Computer", "Social"];
let marks = [60, 80, 69, 98, 75];

let total = 0;
for (let m of marks) {
  total += m;
}
let percentage = (total / (SUBJECTS * 100)) * 100;

// Determine division
let division;
if (percentage >= 75) division = "Distinction";
else if (percentage >= 60) division = "First Division";
else if (percentage >= 50) division = "Second Division";
else if (percentage >= 40) division = "Pass";
else division = "Fail";

// Display results
document.write("<h2>Marks Summary</h2>");
for (let i = 0; i < SUBJECTS; i++) {
  document.write(subjectNames[i] + " = " + marks[i] + "<br>");
}


document.write(
  "<p><strong>Total Marks:</strong> " + total + " / " + SUBJECTS * 100 + "</p>",
);
document.write(
  "<p><strong>Percentage:</strong> " + percentage.toFixed(2) + "%</p>",
);
document.write("<p><strong>Division:</strong> " + division + "</p>");
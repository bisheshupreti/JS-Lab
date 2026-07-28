// Single-line comment: This program demonstrates variables and data types

/*
           Multi-line comment:
           This program shows different data types,
           takes user input, and displays output
        */

// Different data types
let name = "Bishesh Upreti";
let age = 19;
let isStudent = true;
let marks = [85, 90, 78];
let person = {
  firstName: "Bishesh",
  lastName: "Upreti",
};
let city;
let country = null;

document.write("<h3>Variable Values:</h3>");
document.write("<p>Name: " + name + "</p>");
document.write("<p>Age: " + age + "</p>");
document.write("<p>Is Student: " + isStudent + "</p>");
document.write("<p>Marks: " + marks + "</p>");
document.write("<p>Person: " + JSON.stringify(person) + "</p>");
document.write("<p>City: " + city + "</p>");
document.write("<p>Country: " + country + "</p>");

let userName = prompt("Enter your name:", "User Name");
let userAge = prompt("Enter your age:", "19");

alert("Hello " + userName + "! You are " + userAge + " years old.");

// Display using document.write
document.write("<h3>User Input:</h3>");
document.write("<p>User Name: " + userName + "</p>");
document.write("<p>User Age: " + userAge + "</p>");

// Type checking
document.write("<h3>Data Types:</h3>");
document.write("<p>typeof name: " + typeof name + "</p>");
document.write("<p>typeof age: " + typeof age + "</p>");
document.write("<p>typeof isStudent: " + typeof isStudent + "</p>");
document.write("<p>typeof marks: " + typeof marks + "</p>");
document.write("<p>typeof person: " + typeof person + "</p>");
document.write("<p>typeof city: " + typeof city + "</p>");
document.write("<p>typeof country: " + typeof country + "</p>");

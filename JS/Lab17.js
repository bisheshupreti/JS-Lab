document.write("<h3>Math Object</h3>");
document.write("Value of Math.PI = " + Math.PI + "<br>");

document.write("Square root of 25 (Math.sqrt(25)) = " + Math.sqrt(25) + "<br>");

document.write( "2 raised to power 3 (Math.pow(2,3)) = " + Math.pow(2, 3) + "<br>");

document.write("Math.round(4.7) = " + Math.round(4.7) + "<br>");

document.write("Math.floor(4.9) = " + Math.floor(4.9) + "<br>");

document.write("Math.ceil(4.1) = " + Math.ceil(4.1) + "<br>");

document.write("Math.max(10, 25, 7, 33) = " + Math.max(10, 25, 7, 33) + "<br>");

document.write("Math.min(10, 25, 7, 33) = " + Math.min(10, 25, 7, 33) + "<br>");

document.write("Math.abs(-15) = " + Math.abs(-15) + "<br>");

let randomNum = Math.floor(Math.random() * 100);
document.write( "Random number between 0-99 (Math.random) = " + randomNum + "<br>");

//String
let text = "Hello JavaScript World";
document.write("<h3>String Object</h3>");
document.write('Original string = "' + text + '"<br>');


document.write("Length of string = " + text.length + "<br>");

document.write("Uppercase = " + text.toUpperCase() + "<br>");
document.write("Lowercase = " + text.toLowerCase() + "<br>");

document.write("Position of 'JavaScript' = " + text.indexOf("JavaScript") +"<br>");
document.write("Character at position 0 = " + text.charAt(0) + "<br>");

document.write("Slice from 0 to 5 = " + text.slice(0, 5) + "<br>");


let spacedStr = "   extra spaces around me   ";
document.write('Before trim = "' + spacedStr + '"<br>');
document.write('After trim = "' + spacedStr.trim() + '"<br>');


document.write("Replace 'Hello' with 'Hi' = " + text.replace("Hello", "Hi") +"<br>");

let words = text.split(" ");
document.write("Split into words (str.split(' ')) = " + words + "<br>");

let greeting = "Hello".concat(", ", "how are you?");
document.write("Concat example = " + greeting + "<br>");





document.write("<h3>NaN (Not a Number)</h3>");

let invalidNumber = Number("hello");
document.write("Number('hello') = " + invalidNumber + "<br>");
document.write("0 / 0 = " + 0 / 0 + "<br>");

document.write("isNaN(invalidNumber) = " + isNaN(invalidNumber) + "<br>");
document.write("isNaN(100) = " + isNaN(100) + "<br>");

document.write("typeof NaN = " + typeof NaN + "<br>");

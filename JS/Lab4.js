        // Taking input from user
        let num1 = parseFloat(prompt("Enter first number:", ""));
        let num2 = parseFloat(prompt("Enter second number:", ""));
        let num3 = parseFloat(prompt("Enter third number:", ""));
        
        // Validate input
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            alert("Please enter valid numbers!");
        } else {
            // Find largest using if-else
            let largest;
            
            if (num1 >= num2 && num1 >= num3) {
                largest = num1;
            } else if (num2 >= num1 && num2 >= num3) {
                largest = num2;
            } else {
                largest = num3;
            }
            
            // Display results
            document.write("<h3>The largest number among "+  num1 + ", " + num2 + ", " + "and " + num3 + " is: "+ largest + "</h3>");

        }
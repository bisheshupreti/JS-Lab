n = Number(prompt("Enter Number of persons:"));

if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
  alert("Enter a valid positive integer.");
} else {
  let users = [];
  for (let i = 0; i < n; i++) {
    users.push(
      prompt("Enter your full name of person " + (i + 1) + ": ").trim(),
    );
  }

  document.write("<h3>Name List in <i>'firstName lastName'</i> format: </h3>");
  document.write("<ol>");
  users.forEach(function (user) {
    document.write("<li>" + user + "</li>");
  });
  document.write("</ol>");

  let reversedUsers = users.map(function (user, ind) {
    let separatorIndex = user.indexOf(" ");

    if (separatorIndex === -1) {
      //If there is no Space
      return user;
    } else {
      let firstName = user.slice(0, separatorIndex);
      let lastName = user.slice(separatorIndex + 1);

      return lastName + " " + firstName;
    }
  });

  document.write("<h3>Name List in <i>'lastName firstName'</i> format: </h3>");
  document.write("<ol>");
  reversedUsers.forEach(function (user) {
    document.write("<li>" + user + "</li>");
  });
  document.write("</ol>");
}

function showAlert() {
  alert("This is an ALERT box! It only shows information.");
}

function showConfirm() {
  let userChoice = confirm("Do you want to continue?");
  let resultText;

  if (userChoice === true) {
    resultText = "You clicked OK.";
  } else {
    resultText = "You clicked Cancel.";
  }

  document.getElementById("dialogResult").innerHTML = resultText;
}

function showPrompt() {
  let userName = prompt("What is your name?", "Guest");

  let message;
  if (userName === null)
    message = "You clicked Cancel, so no name was entered.";
  else if (userName.trim() === "")
    message = "You clicked OK but left the box empty.";
  else message = "Hello, " + userName + "! Nice to meet you.";

  document.getElementById("dialogResult").innerHTML = message;
}

let myNewWindow;

function openNewWindow() {
  myNewWindow = window.open("", "MyNewWindow", "width=400,height=300");
  myNewWindow.document.write("<h2>Hello from the new window!</h2>");
  myNewWindow.document.write("<p>You can close me using the button on the main page.</p>");

  document.getElementById("windowStatus").innerHTML = "A new window has been opened.";
}


function closeNewWindow() {
  if (myNewWindow && !myNewWindow.closed) {
    myNewWindow.close();
    document.getElementById("windowStatus").innerHTML = "The new window has been closed.";
  } else {
    document.getElementById("windowStatus").innerHTML =
      "There is no open window to close. Please open one first.";
  }
}

function printPage() {
  window.print();
}

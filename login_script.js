function loginFunction(event) {
  event.preventDefault();

  // Hardcoded username and password
  const hardcodedUsername = "Janusz@gmail.com";
  const hardcodedPassword = "1234";

  // Get user input
  const enteredUsername = document.getElementById("emailInput").value;
  const enteredPassword = document.getElementById("passwordInput").value;

  // Get the warning message element
  const warningMessage = document.getElementById("warningMessage");

  if (enteredUsername === hardcodedUsername && enteredPassword === hardcodedPassword) {
    warningMessage.innerText = ""; // Clear any previous warning
    window.location.href = "ppracowniczy.html";
  }
  else {
    warningMessage.innerText = "Nieprawidłowe dane logowania.";
  }
}


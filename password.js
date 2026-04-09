const password = "raphlikesfemboys"; // Change this!

function checkPassword() {
  const input = prompt("Enter the password to view this site:");
  if (input === password) {
    document.body.style.display = "block"; // Show the page
  } else {
    alert("Incorrect password. Access denied.");
    location.reload(); // Reload the page to keep asking
  }
}

// Check the password when the page loads
window.onload = checkPassword;

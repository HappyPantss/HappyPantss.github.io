// Show todays date in index.html
const dateMessage = document.querySelector("#todaysDate");
const checkToday = new Date(); // Check todays date

// When the window/ site loads, the empty text will change to todays date
window.addEventListener('load', (event) => {
    dateMessage.textContent = checkToday; // textContent changes the content to the checkToday value (date)
})

// Check if password and confirmed password are the same
const password = document.querySelector("#password");
const cPassword = document.querySelector("#confirmPassword");
const registerForm = document.querySelector("#registerForm");

// When the user has changed the content and field, this code is checking if the passwords are matching
registerForm.addEventListener('change', (event) => {
  if (password.value === cPassword.value) { // When passwords match
    cPassword.style.borderColor = 'green'; 
    confirmPassword.setCustomValidity(""); 
  } else if(password.value !== cPassword.value || cPassword.value !== password.value) { // When passwords don't match
    cPassword.style.borderColor = '';
    confirmPassword.setCustomValidity("Passwords don't match!"); // Set custom warning when passwords don't match
  }
});
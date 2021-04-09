var form = document.getElementById("form"),
  username = document.getElementById("username"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  passwordCon = document.getElementById("con-password");

// When Form submits
form.addEventListener('submit', (e) => {
  // Stops the default settings
  e.preventDefault();
  
  // Check If Values are accepted
  checkValues();
  
});


username.addEventListener('change', (e) => {
  var usernameValue = username.value.trim();
  // Username must not be blank
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  }
  // Username must have more than 8 character
  else if (usernameValue.length < 8) {
    setErrorFor(username, "Username must be more than 8 character");
  }
  else {
    setSuccessFor(username);
  }
});
                          
email.addEventListener('change', (e) => {
  var emailValue = email.value.trim();
  // Email must have a value or throw an error
  if (emailValue === ""){
    setErrorFor(email, "Email cannot be blank");
  }
  // Email must be valid if not throw error
  else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  }
  else {
    setSuccessFor(email);
  }
});

password.addEventListener('change', (e) => {
  var passwordValue = password.value.trim();
  
  // Password must not be blank
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } 
  // Password must have more than 8 character
  else if (passwordValue.length < 8) {
    setErrorFor(password, "Password must be more than 8 character");
  } else {
    setSuccessFor(password);
  }
});
  
passwordCon.addEventListener('change', (e) => {
  var passwordValue = password.value.trim();
  var passwordConValue = passwordCon.value.trim();
  
  // Confirm Password must not be blank
  if (passwordConValue === "") {
    setErrorFor(passwordCon, "Password cannot be blank")
  }
  // Confirm Password must match with password otherwise throw error
  else if (passwordConValue !== passwordValue) {
    setErrorFor(passwordCon, "Password does not match")
  } else {
    setSuccessFor(passwordCon);
  }
});

// Set Inputs are Invalid
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('.small');
  
  // Error Messages shows
  small.innerText = message;
  
  // Add error class
  formControl.className = "form-control error";
}

// Set inputs are correct 
function setSuccessFor(input) {
  const formControl = input.parentElement;
  // Add success class
  formControl.className = "form-control success";
}

// Regex for validating Email
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkValues() {
  if (username.value.length > 8) {
    alert("Welcome" + " " + username.value);
  }
}

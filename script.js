function validateFirstName() {
    var firstNameInput = document.getElementById("first-name");
    var firstNameError = document.getElementById("first-name-error");
    
    if (firstNameInput.value.length < 3 || !/^[A-Z][a-z]*$/.test(firstNameInput.value)) {
      firstNameError.innerHTML = "Please enter a valid first name (minimum 3 characters and starts with a capital letter)";
      firstNameInput.classList.add("invalid");
    } else {
      firstNameError.innerHTML = "";
      firstNameInput.classList.remove("invalid");
    }
  }
  
  function validateEmail() {
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("email-error");
    
    if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(emailInput.value)) {
      emailError.innerHTML = "Please enter a valid email address";
      emailInput.classList.add("invalid");
    } else {
      emailError.innerHTML = "";
      emailInput.classList.remove("invalid");
    }
  }
  
  function validateForm() {
    validateFirstName();
    validateEmail();
    
    var invalidInputs = document.querySelectorAll(".invalid");
    
    if (invalidInputs.length > 0) {
      alert("Please fix the errors in the form before submitting");
      return false;
    }
  }
  
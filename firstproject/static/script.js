document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
  
    // It will clear all the error 
    document.getElementById('errorName').innerHTML = '';
    document.getElementById('errorContactNumber').innerHTML = '';
    document.getElementById('errorEmailId').innerHTML = '';
    document.getElementById('errorAddress').innerHTML = '';
  
    // Validation flags
    let hasError = false;
  
    // Validate Name
    const name = document.getElementById('Name').value;
    if (!/^[A-Za-z\s]+$/.test(name)) {
        document.getElementById('errorName').innerHTML = 'Invalid Name: Only letters are allowed.';
        hasError = true;
    }
  
    // Validate Contact Number
    const contactNumber = document.getElementById('contactNumber').value;
    if (!/^\d+$/.test(contactNumber)) {
        document.getElementById('errorContactNumber').innerHTML = 'Invalid Contact Number: Numbers only.';
        hasError = true;
    }
  
    // Validate Email
    const email = document.getElementById('emailId').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('errorEmailId').innerHTML = 'Invalid Email.';
        hasError = true;
    }
  
    // Validate Address
    const address = document.getElementById('address').value.trim();
    if (address === '') {
        document.getElementById('errorAddress').innerHTML = 'Invalid Address: Cannot be empty.';
        hasError = true;
    }
  
    // If errors exist, stop submission
    if (hasError) {
        return;
    }
  
    // If no errors, dynamically set action and method, then submit
    this.action = '/homepage'; // Dynamic action
    this.method = 'POST';  // Dynamic method
  
    // Proceed to submit the form
    this.submit();
    alert("Successfully registered");
  });
  
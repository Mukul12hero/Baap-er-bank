// step-1: add a click handler with submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2: get email value from email input
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //  step-3: get password value from password input
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;

    // step-4: verify email and password
    //    danger: do not use this way. we learn way proper in next ....
    if (email === 'mukul@gmail.com' && password === 'khan') {
        window.location.href = 'bank.html'
    }
    else {
        alert('stupid , remember the right email and password')
    }
})
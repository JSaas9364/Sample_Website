function validateEmails(){
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;
    var errorMessage = document.getElementById("errorMessage");

    if(email !== confirmEmail){
        errorMessage.innerHTML = "Emails do not match!";
        return false;
    } else {
        errorMessage.innerHTML = "";
        return true;
    }
}


// Toggle mobile menu overlay
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
});


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



function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector(".nav-links").classList.toggle("menu-open");
}

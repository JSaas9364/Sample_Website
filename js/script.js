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



function toggleMenu(x) {
    x.classList.toggle("change"); // Rotates burger into "X"
    document.querySelector(".nav-links").classList.toggle("menu-open"); // Toggles menu
    console.log(document.querySelector(".menu-icon").classList);
}

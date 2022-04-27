function ValidateInput() {


    emailInput = document.getElementById("email").value;
    emailInput = document.getElementById("email").value;

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput))){
        emailMsgBox = document.getElementById("mailMsgBox");
        emailMsgBox.innerHTML = "Invalid E-mail";
        emailMsgBox.style.display = "flex";
        return false
    }

    if(!ValidatePassword(passInput)){

    }

        
}
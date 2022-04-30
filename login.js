function ValidateInput() {

    emailInput = document.getElementById("email").value;
    passInput = document.getElementById("password").value;
    submitMsgBox = document.getElementById("submitMsgBox");
    isMailValid = false;
    isPassValid = false;

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput))){
        emailMsgBox = document.getElementById("mailMsgBox");
        emailMsgBox.innerHTML = "Invalid E-mail";
        emailMsgBox.style.display = "flex";
        isMailValid = false;
    }else{
        isMailValid = true;
    }

    isPassValid = ValidatePassword(passInput)

    if(isPassValid && isMailValid){
        submitMsgBox.innerHTML = "Submitted Successfully!";
        submitMsgBox.style.display = "flex";
    }else{
        submitMsgBox.style.display = "none"; 
    }        
}

function ValidatePassword(pass){
    passMsgBox = document.getElementById("passMsgBox");

    if(pass.length < 8){
        passMsgBox.innerHTML = "Password must be longer than 8 characters";
        passMsgBox.style.display = "flex";
        return false;
    }

    if(/^[A-Za-z0-9@+]*$/.test(pass)){
        passMsgBox.style.display = "none";
    }else{
        passMsgBox.innerHTML = "Password should consists of only numbers, letters, and ‘+’, ‘@";
        passMsgBox.style.display = "flex";
        return false;
    }

    if(!/(?=.*[A-Z])/.test(pass)){
        passMsgBox.innerHTML = "Password should contain  at least one upper case letter.";
        passMsgBox.style.display = "flex";
        return false;
    }else{
        passMsgBox.style.display = "none";
    }

    if(!/(?=.*[a-z])/.test(pass)){
        passMsgBox.innerHTML = "Password should contain at least one lowercase letter.";
        passMsgBox.style.display = "flex";
        return false;
    }else{
        passMsgBox.style.display = "none";
    }

    if(!/(?=.*\d)/.test(pass)){
        passMsgBox.innerHTML = "Password should contain at least one number.";
        passMsgBox.style.display = "flex";
        return false;
    }else{
        passMsgBox.style.display = "none";
    }

    return true;
}
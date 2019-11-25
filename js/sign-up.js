const nameInputElement = document.getElementById("name-input");
const phoneInputElement = document.getElementById("phone-input");
const mailInputElement = document.getElementById("mail-input");

const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const mailError = document.getElementById("mail-error");




function validateForm(){
    nameInput = nameInputElement.value;
    phoneInput = phoneInputElement.value;
    mailInput = mailInputElement.value;

    var allGood = true;
    
    if (!isNameValid(nameInput)){
        nameError.style.opacity = "1";
        var allGood = false;
    }
    else {
        nameError.style.opacity = "0";
    }

    if (!isPhoneValid(phoneInput)){
        phoneError.style.opacity = "1";
        var allGood = false;
    }
    else {
        phoneError.style.opacity = "0";
    }

    if (!isMailValid(mailInput)){
        mailError.style.opacity = "1";
        var allGood = false;
    }
    else {
        mailError.style.opacity = "0";
    }


    if (allGood){
        nameInputElement.value = "";
        phoneInputElement.value = "";
        mailInputElement.value = "";
        
        alert("Uspesno ste postali clan!");
    }

}

function isNameValid(nameInput){
    if (nameInput.length == 0 || !nameInput.includes(" ")){
        return false;
    }

    return true;
}


function isPhoneValid(phoneInput){
    var isGood = true;
    
    
    if (phoneInput.length == 0){
        isGood = false;
    }

    phoneInput.split("").forEach(letter => {
        if (letter < "0" || letter > "9"){
            isGood = false;
        }
    });

    return isGood;
}

function isMailValid(mailInput){
    if (mailInput.length == 0 || !mailInput.includes("@")){
        return false;
    }

    return true;
}
// Get Data
const contactName = document.querySelector("#name");
const contactEmail = document.querySelector("#email");
const contactMessage = document.querySelector("#message");
const contactSuccess = document.querySelector("#success");
const contactErrors = document.querySelectorAll(".error");

// Validate Data
function validateForm(){

    clearMessages();

    if(!emailIsValid(contactEmail.value)){
        contactErrors[1].innerText = data[currentLanguage].error1;
        contactEmail.classList.add("error-border");
    }
    else{
        let formData = {
            name: contactName.value,
            email: contactEmail.value,
            message: contactMessage.value
        }
        
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.setRequestHeader('content-type', ' application/json');
        xhr.onload = function(){
            console.log(xhr.responseText);
            if(xhr.responseText == 'success'){
                alert('email sent');
                contactName.value = "";
                contactEmail.value = "";
                contactMessage.value = "";
            }
            else{
                alert('something went wrong');
            }
        }
        xhr.send(JSON.stringify(formData));
    }

    
}


// Clear error and success messages
function clearMessages(){
    for(let i = 0; i < contactErrors.length; i++){
        contactErrors[i].innerText = "";
    }
    contactName.classList.remove("error-border");
    contactEmail.classList.remove("error-border");
}

// Check if email is valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}
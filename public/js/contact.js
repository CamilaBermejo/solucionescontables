// Get Data
const contactName = document.querySelector("#name");
const contactEmail = document.querySelector("#email");
const contactMessage = document.querySelector("#message");
const contactSuccess = document.querySelector("#success");
const contactErrors = document.querySelectorAll(".error");
const btnSend = document.querySelector("#contact6");
const alertImg = document.getElementById("alert-img");
const alertTxt = document.getElementById("alert-text");
const alertClose = document.getElementById("alert-close");
const alert = document.getElementById("custom-alert");
const socialContactTrigger = document.querySelector(".social-action-button-trigger");
const footer = document.querySelector("footer");
const fixedButtons = document.querySelector(".action-button-cotnainer");
const body = document.querySelector("body");
const about = document.querySelector("#about");
const returnButton = document.querySelector(".return-action-button-trigger");
const socialButtons = document.querySelector(".action-button-cotnainer .social-button")


// Validate Data
// function validateForm(){

//     clearMessages();

//     if(!emailIsValid(contactEmail.value)){
//         contactErrors[1].innerText = data[currentLanguage].error1;
//         contactEmail.classList.add("error-border");
//     }
//     else{
//         let formData = {
//             name: contactName.value,
//             email: contactEmail.value,
//             message: contactMessage.value
//         }
        
//         // ? Esto era la parte de node js
//         // let xhr = new XMLHttpRequest();
//         // xhr.open('POST', '/');
//         // xhr.setRequestHeader('content-type', ' application/json');
//         // xhr.onload = function(){
//         //     console.log(xhr.responseText);
//         //     if(xhr.responseText == 'success'){
//         //         alert('email sent');
//         //         contactName.value = "";
//         //         contactEmail.value = "";
//         //         contactMessage.value = "";
//         //     }
//         //     else{
//         alert('Something went wrong, please contact admin@solucionescontablessd.com');
//         //     }
//         // }
//         // xhr.send(JSON.stringify(formData));
//     }

    
// }

contactEmail.addEventListener('change',()=>{
    if(!emailIsValid(contactEmail.value) && contactEmail.value.length > 0){
        contactErrors[1].innerText = data[currentLanguage].error1;
        contactEmail.classList.add("error-border");
    }
    else{
        clearMessages();
    }
})


// Clear error and success messages
function clearMessages(){
    for(let i = 0; i < contactErrors.length; i++){
        contactErrors[i].innerText = "";
    }
    contactName.classList.remove("error-border");
    contactEmail.classList.remove("error-border");
}

//Clear values
function clearValues(){
    contactName.value = '';
    contactEmail.value = '';
    contactMessage.value = '';
}

// Check if email is valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}


function succesMsg(){
    alert.style.display = "flex";
    alertImg.setAttribute("src", data[currentLanguage].alertImgSuccessEmail);
    alertTxt.innerText = data[currentLanguage].alertSuccessEmail;
    alertClose.innerText = data[currentLanguage].alertClose;
}

function errorMsg(){
    alert.style.display = "flex";
    alertImg.setAttribute("src", data[currentLanguage].alertImgErrorEmail);
    alertTxt.innerText = data[currentLanguage].alertErrorEmail;
    alertClose.innerText = data[currentLanguage].alertClose;
}

alertClose.addEventListener("click", ()=>{
    alert.style.display = "none";
})

function textAreaAdjust(element){
    element.style.height = "1px";
    element.style.height = (25+element.scrollHeight)+"px";
}


document.addEventListener('DOMContentLoaded', ()=> {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get('email')

    if(!email){
        return;
    }

    if (email == "success"){
        succesMsg();
    }
    else if(email == "error"){
        errorMsg();
    }

    window.history.pushState({}, document.title, window.location.pathname);
})

console.log(socialContactTrigger)

socialContactTrigger.addEventListener("click", (e) =>{
    e.currentTarget.parentElement.classList.toggle("open");
})




window.addEventListener("scroll", ()=>{
    if (document.documentElement.scrollTop + window.innerHeight > footer.offsetTop + 8){
        fixedButtons.style.position = "absolute";
        fixedButtons.style.top = (footer.offsetTop - 16*8) + "px";
        fixedButtons.style.left = (window.innerWidth - 8.25*16) + "px";
    }
    else{
        fixedButtons.style.position = "fixed";
        fixedButtons.style.top = "";
        fixedButtons.style.left = "";
    }
    if(document.documentElement.scrollTop > about.offsetTop){
        returnButton.style.display = "flex";
        socialButtons.style.buttom = "7.5px";
    }
    else{
        returnButton.style.display = "none";
        socialButtons.style.buttom = "2.5px";
    }
})
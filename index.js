const subButton = document.querySelector(".btn-subscribe");

const emailInput = document.getElementById("email");

const warningSpan = document.querySelector(".warning");

const showEmail = document.querySelector(".email-input");

const formContent = document.querySelector(".grid-content");

const resultContent = document.querySelector(".grid-result");

const dismissButton = document.querySelector(".btn-dismiss");

const validFormatRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

subButton.disabled = true;

resultContent.style.display = "none";

subButton.addEventListener("click", (e) => {


    if(emailInput.value == " " || emailInput.value == null){
        subButton.disabled = true;
    }

    formContent.style.display = "none";
    resultContent.style.display = "grid";
    showEmail.textContent = emailInput.value;
    emailInput.value = " ";

})

dismissButton.addEventListener("click", (e) =>{
    formContent.style.display = "grid";
    resultContent.style.display = "none";
    subButton.disabled = true;
})

emailInput.addEventListener("input", (e) =>{

    if(!emailInput.value.match(validFormatRegex)){
        warningSpan.style.display = "block";
        emailInput.style.backgroundColor = "#ffe8e6";
        emailInput.style.color = "var(--primary)";
        emailInput.style.border = "1px solid var(--primary)";

        subButton.disabled = true;

    } else {
        warningSpan.style.display = "none";
        emailInput.style.backgroundColor = "var(--pure-white)";
        emailInput.style.color = "var(--dark-slate-gray)";
        emailInput.style.border = "1px solid var(--charcoal-grey)";

        subButton.disabled = false;
    }

})
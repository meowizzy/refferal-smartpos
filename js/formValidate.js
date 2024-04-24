const pasteErrorMessage = (input, msg, type) => {
    const $error = input.parentElement.parentElement.querySelector(".error");
    
    if ($error) {
        $error.remove();
        input.parentElement
            .insertAdjacentHTML(
                "beforebegin", 
                `<span class="error" data-translate="${type}">${msg}</span>`
            );
    } else {
        input.parentElement
            .insertAdjacentHTML(
                "beforebegin", 
                `<span class="error" data-translate="${type}">${msg}</span>`
            );
    }
}

const removeErrorMsg = (input) => {
    const $error = input.parentElement.parentElement.querySelector(".error");
    if ($error) $error.remove();
}

const validateDefaultInput = (input) => {
    if (!input.value) {
        pasteErrorMessage(input, localization[lang].errors.errorDefault, "errorDefault");
    } else {
        removeErrorMsg(input);   
    }
}

const validateTinInput = (input) => {
    if (!input.value) {
        pasteErrorMessage(input, localization[lang].errors.errorDefault, "errorDefault");
    } else if (!/([0-9])/.test(input.value) || input.value.length < 9 || input.value.length > 9) {
        pasteErrorMessage(input, localization[lang].errors.errorTin, "errorTin");
    } else {
        removeErrorMsg(input);
    }
}

const validatePhoneInput = (input) => {
    if (!input.value) {
        pasteErrorMessage(input, localization[lang].errors.errorDefault, "errorDefault");
    } else if (input.value.length < 19) {
        pasteErrorMessage(input, localization[lang].errors.errorPhone, "errorPhone");
    } else {
        removeErrorMsg(input);   
    }
}

const validateRegionInput = (input) => {
    const isCorrectRegion = JSON.parse(sessionStorage.getItem("regions"))?.find(item => item.nameRu.includes(input.value) || item.nameUz.includes(input.value));
    
    if (!input.value) {
        pasteErrorMessage(input, localization[lang].errors.errorDefault, "errorDefault");
    } else if (!isCorrectRegion) {
        pasteErrorMessage(input, localization[lang].errors.errorRegion, "errorRegion");
    } else {
        removeErrorMsg(input);
    }
}

function formValidate(input) {
    if (!input.classList.contains("required")) return;
    lang = Object.fromEntries(new URLSearchParams(location.search).entries()).lang 
    || localStorage.getItem("lang") 
    || document.documentElement.lang;

    switch(input.name) {
        case "tin":
            validateTinInput(input);
            break;
        case "region":
            validateRegionInput(input);
            break;
        case "phone":
            validatePhoneInput(input);
            break;
        default:
            validateDefaultInput(input);
    }
}

const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const inputs = e.target.querySelectorAll("input");

    inputs.forEach(input => formValidate(input));
};

const handleChangeInput = (e) => formValidate(e.target);

const form = document.querySelector(".referal-form");

document.addEventListener("input", handleChangeInput);
document.addEventListener("focusout", handleChangeInput);
document.addEventListener("submit", handleFormSubmit);
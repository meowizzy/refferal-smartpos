
const queryParams = Object.fromEntries(new URLSearchParams(location.search).entries());

const setInputMask = () => {
    const maskOptions = {
        mask: '+{998} (00) 000-00-00'
    };
    
    document.querySelectorAll("input[type='phone']").forEach(item => {
        IMask(item, maskOptions);
    });
};

const translate = (lang) => {
    const currentLang = document.querySelector(".header__langs-flag img");
    const langs = document.querySelectorAll(".header__langs a");

    langs.forEach(item => {
        if (item.dataset.code === lang) {
            currentLang.src = item.querySelector("img").src;
            langs.forEach(item => item.classList.remove("selected"));
            item.classList.add("selected");
        }
    });
    
    const translationItems = document.querySelectorAll("[data-translate]");


    translationItems.forEach(item => {
        const trans = localization[lang].common[item.dataset.translate] || localization[lang].errors[item.dataset.translate];
        if (item.tagName === "INPUT" || item.tagName === "TEXTAREA" || item.tagName === "SELECT") {
            item.placeholder = trans;
        } else {
            item.textContent = trans;
        }
    });

    const formContainer = document.querySelector('.form-block__body');

    if (!queryParams.promocode && !queryParams.promotionId) {
        formContainer.innerHTML = `
            <div class="promocode-not-specified">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" version="1.1" xml:space="preserve">
                        <g id="Layer_1"/>
                        <g id="Layer_2">
                            <g>
                                <path d="    M23,26h7v-4v0c-1.7,0-3-1.4-3-3s1.3-3,3-3v0v-4h-7" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                                <path d="    M20,12H2v4v0c1.7,0,3,1.4,3,3s-1.3,3-3,3v0v4h18" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                                <line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="23" x2="23" y1="12" y2="14"/>
                                <line fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="23" x2="23" y1="24" y2="26"/>
                                <line fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="8" x2="18" y1="16" y2="16"/>
                                <line fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="13" x2="18" y1="20" y2="20"/>
                                <line fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="22" x2="22" y1="6" y2="8"/>
                                <line fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="23" x2="23" y1="17" y2="21"/>
                                <line fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="26" x2="25" y1="8" y2="9"/>
                                <line fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="18" x2="19" y1="8" y2="9"/>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="note">
                    ${localization[lang].common.empty}
                </div>
            </div>
        `
    }
};

translate(lang);

const changeLanguage = (code) => {
    lang = Object.fromEntries(new URLSearchParams(location.search).entries()).lang 
    || localStorage.getItem("lang") 
    || document.documentElement.lang;
    localStorage.setItem("lang", code);
    document.documentElement.setAttribute("lang", code);
    const state = new URLSearchParams({ ...queryParams, lang: code }).toString();
    history.pushState(state, "", `?${state}`);
    translate(code);
}

setInputMask();

const successTemplate = () => {
    return `
        <div class="refferal-form-success">
            <div class="refferal-form-success__title">   
                ${localization[lang].common.successTitle}
            </div>
            <div class="refferal-form-success__desc">   
                ${localization[lang].common.successDesc}
            </div>
            <button class="refferal-form-success__repeat">
                ${localization[lang].common.successButton}
            </button>
        </div>
    `;
};

const postFormData = async (formData, $form) => {
    try {
        $form.querySelector("button").classList.add("isLoading");
        const response = await fetch(`${baseUrl}/api/billing-services/organization-application-form/create`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(formData)
        });
        const data = await response.json();

        if (data.status > 400) {
            Toastify({
                text: data.detail,
                duration: 3000,
                close: true,
                gravity: "top", 
                position: "right", 
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(90deg, #2150E7 0%, #3690F7 100%)",
                },
                }).showToast();
            return;
        }
        
        $form.querySelector("button").classList.remove("isLoading");
        sessionStorage.setItem("form", $form.outerHTML);
        $form.innerHTML = successTemplate();
        
    } catch(e) {
        Toastify({
            text: error?.responseJSON?.detail | e.message,
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "left", 
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            }).showToast();

        $form.querySelector("button").classList.remove("isLoading");
    } finally {
        $form.querySelector("button").classList.remove("isLoading");
    }
}

const handleRefferalFormSubmit = (e) => {
    if (!e.target.closest(".referal-form")) return;

    const data = Object.fromEntries(new FormData(e.target).entries());

    let isValid = true;
    
    for (let key in data) {
        if (!data[key]) {
            isValid = false;
        }
    }

    if (e.target.querySelectorAll(".error").length) {
        isValid = false;
    }

    if (!isValid) return;

    const newData = { 
        ...data, 
        phone: data.phone.replace(/\D/g, ""),
        regionId: Number(data.regionId),
        promoCode: queryParams.promocode, 
        promotionId: queryParams.promotionId 
    };

    delete newData.region

    postFormData(newData, e.target);
}

document.addEventListener("submit", handleRefferalFormSubmit);


const modalTemplate = (header, body) => {
    return `
        <div class="modal-overlay"></div>
        <div class="modal">
            <div class="modal__close">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.6923 30.8079C31.8096 30.9252 31.8755 31.0843 31.8755 31.2501C31.8755 31.416 31.8096 31.575 31.6923 31.6923C31.575 31.8096 31.416 31.8755 31.2501 31.8755C31.0843 31.8755 30.9252 31.8096 30.8079 31.6923L20.0001 20.8845L9.19229 31.6923C9.07502 31.8096 8.91596 31.8755 8.7501 31.8755C8.58425 31.8755 8.42519 31.8096 8.30792 31.6923C8.19064 31.575 8.12476 31.416 8.12476 31.2501C8.12476 31.0843 8.19064 30.9252 8.30792 30.8079L19.1157 20.0001L8.30792 9.19229C8.19064 9.07502 8.12476 8.91596 8.12476 8.7501C8.12476 8.58425 8.19064 8.42519 8.30792 8.30792C8.42519 8.19064 8.58425 8.12476 8.7501 8.12476C8.91596 8.12476 9.07502 8.19064 9.19229 8.30792L20.0001 19.1157L30.8079 8.30792C30.866 8.24985 30.9349 8.20378 31.0108 8.17236C31.0867 8.14093 31.168 8.12476 31.2501 8.12476C31.3322 8.12476 31.4135 8.14093 31.4894 8.17236C31.5653 8.20378 31.6342 8.24985 31.6923 8.30792C31.7504 8.36598 31.7964 8.43492 31.8279 8.51079C31.8593 8.58666 31.8755 8.66798 31.8755 8.7501C31.8755 8.83223 31.8593 8.91354 31.8279 8.98941C31.7964 9.06528 31.7504 9.13422 31.6923 9.19229L20.8845 20.0001L31.6923 30.8079Z" fill="black" fill-opacity="0.6"/>
                </svg>            
            </div>
            <div class="modal__header">
                ${header}
            </div>
            <div class="modal__body">
                <div class="modal__body-scroll-container">
                    ${body}
                </div>
            </div>
        </div>
    `   
};

const renderModal = (template) => {
    document.body.insertAdjacentHTML("beforeend", template);
    document.documentElement.style.overflow = "hidden";
} 

const closeModal = () => {
    const modal = document.querySelector(".modal");
    modal.remove()
    document.querySelector(".modal-overlay").remove();
    document.documentElement.style.overflow = "auto";
}

const handleClick = (e) => {
    const target = e.target;
    if (target.closest('.header__langs-selected')) {
        target.classList.toggle('active');
        target.parentElement.nextElementSibling.classList.toggle('opened');
    }

    if (!target.closest('.header__langs-selected')) {
        document.querySelector(".header__langs-dropdown").classList.remove('opened');
        document.querySelector(".header__langs-selected").classList.remove('active');
    }

    if (target.closest(".header__langs-dropdown li a")) {
        e.preventDefault();
        if (target.classList.contains('selected')) return;

        target.closest(".header__langs-dropdown").querySelectorAll('a').forEach(item => item.classList.remove('selected'));
        target.classList.add('selected');
        target.closest(".header__langs").querySelector(".header__langs-flag img").src = target.children[0].src;
        changeLanguage(target.dataset.code);   
    }

    if (target.closest(".refferal-form-success__repeat")) {
        document.querySelector(".form-block__body").innerHTML = sessionStorage.getItem("form");
        translate(lang);
        setInputMask();
    }

    if (target.closest(".policy-modal-opener")) {
        lang = Object.fromEntries(new URLSearchParams(location.search).entries()).lang 
        || localStorage.getItem("lang") 
        || document.documentElement.lang;
        renderModal(
            modalTemplate(
                localization[lang].common.policy, localization[lang].common.policyBody
            )
        );
    }

    if (target.closest(".modal-overlay") || target.closest(".modal__close")) {
        closeModal();
    }
};

document.addEventListener('click', handleClick);


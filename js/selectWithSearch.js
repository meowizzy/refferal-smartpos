const fetchRegions = async (container) => {
    try {
        container.classList.add("isLoading");
        const response = await fetch(`${baseUrl}/api/public/regions`);
        const data = await response.json();
        
        container.classList.add("data-fetched");
        container.classList.remove("isLoading");
        return data;
    } catch(e) {
        container.classList.remove("isLoading");
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
    }
};

const buildRegionList = (data) => {
    return data.map(item => {
        return `
            <li class="select_with_search__dropdown-item" data-id="${item?.id}">
                ${lang === langs.RU ? item?.nameRu : item?.nameUz}
            </li>`
    }).join("");
};

const handleSelectWithSearchFocusIn = async (e) => {
    if (e.target.closest(".select_with_search__row .form-control")) {
        const container = e.target.closest(".select_with_search");

        if (!container.classList.contains("data-fetched")) {
            const data = await fetchRegions(container);   
            sessionStorage.setItem("regions", JSON.stringify(data));

            const regionListDropdown = container.querySelector(".select_with_search__dropdown");

            regionListDropdown.insertAdjacentHTML("afterbegin", buildRegionList(data)); 
            container.classList.toggle("active");
        } else {
            container.classList.toggle("active");   
        }
    }
};

const handleSelectWithSearchFocusOut = (e) => {
    if (e.target.closest(".select_with_search__row .form-control")) {
        const regionList = e.target.parentElement.nextElementSibling;
        e.target.closest(".select_with_search").classList.remove("active");
        regionList.innerHTML = buildRegionList(JSON.parse(sessionStorage.getItem('regions')));
    }
};

const handleSelectRegion = (e) => {
    if (e.target.closest(".select_with_search__dropdown-item")) {
        const regionList = e.target.parentElement;
        const inputSearch = e.target.parentElement.previousElementSibling.children[0];
        const inputRegion = e.target.parentElement.previousElementSibling.children[1];

        inputSearch.value = e.target.textContent.trim();
        inputRegion.value = e.target.dataset.id;

        regionList.innerHTML = buildRegionList(JSON.parse(sessionStorage.getItem('regions')));
    }    
};

const onChangeSelectWithSearchInput = (e) => {
    if (e.target.closest(".select_with_search__row .form-control")) {
        const container = e.target.parentElement.nextElementSibling;
        const query = e.target.value;
        const data = JSON.parse(sessionStorage.getItem("regions"));
        let queriedData;

        if (lang === langs.RU) {
            queriedData = data.filter(item => item?.nameRu.toLowerCase().startsWith(query.toLowerCase()));
        } else {
            queriedData = data.filter(item => item?.nameUz.toLowerCase().startsWith(query.toLowerCase()));
        }

        if (query) {
            container.innerHTML = buildRegionList(queriedData);
        } else {
            container.innerHTML = buildRegionList(data);
        }
    }
};

document.addEventListener("input", onChangeSelectWithSearchInput);
document.addEventListener("mousedown", handleSelectRegion);
document.addEventListener('focusin', handleSelectWithSearchFocusIn);
document.addEventListener('focusout', handleSelectWithSearchFocusOut);
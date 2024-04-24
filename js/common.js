const baseUrl = "https://api-dev.smartpos.uz";
let lang = Object.fromEntries(new URLSearchParams(location.search).entries()).lang 
    || localStorage.getItem("lang") 
    || document.documentElement.lang;
const langs = {
    RU: "ru",
    UZ: "uz"
};
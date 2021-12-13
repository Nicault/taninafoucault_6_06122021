const logo = document.querySelector(".logo")
const header = document.querySelector("header")
const lienHomePage = document.createElement("a")
lienHomePage.href = "index.html"

header.replaceChild(lienHomePage, logo)
lienHomePage.appendChild(logo)





function photographerHeader(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const header = document.querySelector(".photograph-header")
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const cityCountry = document.createElement("p")
        cityCountry.classList.add("cityCountry")
        cityCountry.textContent = city + ", " + country
        const div = document.createElement("div")
        div.classList.add("text")
        const quote = document.createElement("p")
        quote.classList.add("quote")
        quote.textContent = tagline


        const button = document.querySelector(".photograph-header button")

        header.appendChild(div)
        div.appendChild(h2)
        div.appendChild(cityCountry)
        div.appendChild(quote)
        header.appendChild(img)
        div.appendChild(cityCountry)
        div.appendChild(quote)

        header.insertBefore(div, button)
    }
    return { name, id, city, country, tagline, price, picture, getUserCardDOM }
}



async function getPhotographers() {    
    return ({photographers})
}

async function displayData3(photographers) {
    const photographHeader = document.querySelector(".photograph-header");

    for (let i = 0 ; i < photographers.length ; i++) {
        if (window.location.href.includes(photographers[i].id)){
            const photographerModel = photographerHeader(photographers[i]);
            photographerModel.getUserCardDOM();
            // const userCardDOM = photographerModel.getUserCardDOM();
            // photographHeader.appendChild(userCardDOM);
        }
    }
    

};

async function init3() {
    const { photographers } = await getPhotographers();
    displayData3(photographers);
};

init3();

async function displayData2(medias) {
    const mediasSection = document.querySelector(".medias_section");

    for (let i = 0 ; i < medias.length ; i++ ) {
        if (window.location.href.includes(medias[i].photographerId)){
        const mediaModel = mediaFactory(medias[i]);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediasSection.appendChild(mediaCardDOM);
    }};
};

async function init2() {
    const { medias } = await getMedias();
    displayData2(medias);
};

init2();






let iconHeart = document.querySelectorAll("i")

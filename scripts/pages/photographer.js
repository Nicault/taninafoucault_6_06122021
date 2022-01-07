const logo = document.querySelector(".logo")
const header = document.querySelector("header")
const lienHomePage = document.createElement("a")
lienHomePage.href = "index.html"


// remet les elements dans l'ordre

header.replaceChild(lienHomePage, logo)
lienHomePage.appendChild(logo)



// créé le header
function photographerHeader(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const header = document.querySelector(".photograph-header")

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)
        img.setAttribute("tabindex", "0")

        const h1 = document.createElement( 'h1' );
        h1.innerHTML = "<span class='screenreader-text'>Nom du photographe : </span>" + name

        const cityCountry = document.createElement("p")
        cityCountry.classList.add("cityCountry")
        cityCountry.innerHTML = "<span class='screenreader-text'>Localisation du photographe : </span>" + city + ", " + country

        const div = document.createElement("div")
        div.classList.add("text")
        div.setAttribute("tabIndex", "0")

        const quote = document.createElement("p")
        quote.classList.add("quote")
        quote.innerHTML = "<span class='screenreader-text'>Citation du photographe : </span>" + tagline

        const button = document.querySelector(".photograph-header button")

        header.appendChild(div)
        div.appendChild(h1)
        div.appendChild(cityCountry)
        div.appendChild(quote)
        header.appendChild(img)
        div.appendChild(cityCountry)
        div.appendChild(quote)

        header.insertBefore(div, button)

        
        const priceDay = document.querySelector(".priceDay")
        priceDay.innerHTML = "<span class='screenreader-text'>Prix de la prestation : </span>" 
        + price + "€ <span aria-hidden = 'true'>/</span><span class='screenreader-text'>par </span>jour"
    }
    return { name, id, city, country, tagline, price, picture, getUserCardDOM }
}

//recupère les données photographe
async function displayDataHeader(photographers) {

    for (let i = 0 ; i < photographers.length ; i++) {
        if (window.location.href.includes(photographers[i].id)){
            const photographerModel = photographerHeader(photographers[i]);
            photographerModel.getUserCardDOM();
        }
    }
};
// affiche le header
async function initHeader() {
    const { photographers } = await getPhotographers();
    displayDataHeader(photographers);
};

initHeader();




const mediasSection = document.querySelector(".medias_section");
let mediasPage = []

// recupère les données medias
async function displayDataMedias(medias) {

    for (let i = 0 ; i < medias.length ; i++ ) {
        if (window.location.href.includes(medias[i].photographerId)){

        const mediaModel = mediaFactory(medias[i]);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediasSection.appendChild(mediaCardDOM);
        mediasPage.push(medias[i])

    }};
    
};

// affiche les medias
async function initMedias() {
    const { medias } = await getMedias();
    displayDataMedias(medias);
};

initMedias();




// création du aside (likes + price)  le price/day est rempli 
// en meme temps que le header à la création de la page
const littleHeart = document.createElement("i")
littleHeart.setAttribute("class", "fas fa-heart")
littleHeart.classList.add("littleHeart")


const body = document.querySelector("body")
const aside = document.createElement("aside")
aside.tabIndex = 0
const likes = document.createElement("div")
const totalLikes = document.createElement("div")
totalLikes.classList.add("totalLikes")
const priceDay = document.createElement("div")
priceDay.classList.add("priceDay")

body.appendChild(aside)

aside.appendChild(likes)
likes.appendChild(totalLikes)
likes.appendChild(littleHeart)
aside.appendChild(priceDay)












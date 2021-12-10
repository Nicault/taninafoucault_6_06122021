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

    photographers
    
    return ({photographers})
}

async function displayData(photographers) {
    const photographHeader = document.querySelector(".photograph-header");

    for (let i = 0 ; i < photographers.length ; i++) {
        if (window.location.href.includes(photographers[i].id)){
            const photographerModel = photographerHeader(photographers[i]);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographHeader.appendChild(userCardDOM);
        }
    }
    

};

async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();

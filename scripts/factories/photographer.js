function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const lien = document.createElement('a')
        lien.href = "photographer.html?id=" + id
        lien.tabIndex = -1
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", name + " - Page de " + name)
        const h2 = document.createElement( 'h2' );

        h2.innerHTML = "<span class='screenreader-text'>Nom du photographe : </span>" + name
        article.setAttribute("tabIndex", "0")
        const articleTxt = document.createElement("div")
        articleTxt.classList.add("articleTxt")
        const cityCountry = document.createElement("p")
        cityCountry.classList.add("cityCountry")
        cityCountry.innerHTML = "<span class='screenreader-text'>Localisation du photographe : </span>" + city + ", " + country
        const quote = document.createElement("p")
        quote.classList.add=("quote")
        quote.innerHTML = "<span class='screenreader-text'>Citation du photographe : </span>" + tagline
        const rate = document.createElement("p")
        rate.classList.add=("rate")
        rate.innerHTML = "<span class='screenreader-text'>Prix de la prestation : </span>" + price + "€/jour"


        article.appendChild(lien)
        lien.appendChild(img);
        lien.appendChild(h2);
        article.appendChild(articleTxt)

        articleTxt.appendChild(cityCountry)
        articleTxt.appendChild(quote)
        articleTxt.appendChild(rate)

        return (article);
    }
    return { name, id, city, country, tagline, price, picture, getUserCardDOM }
}


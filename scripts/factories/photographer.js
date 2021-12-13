function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const lien = document.createElement('a')
        lien.href = "photographer.html?id=" + id
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const div = document.createElement("div")
        const cityCountry = document.createElement("p")
        cityCountry.classList.add("cityCountry")
        cityCountry.textContent = city + ", " + country
        const quote = document.createElement("p")
        quote.classList.add=("quote")
        quote.textContent = tagline
        const rate = document.createElement("p")
        rate.classList.add=("rate")
        rate.textContent = price + "€/jour"


        article.appendChild(lien)
        lien.appendChild(img);
        lien.appendChild(h2);
        article.appendChild(div)

        div.appendChild(cityCountry)
        div.appendChild(quote)
        div.appendChild(rate)
        return (article);
    }
    return { name, id, city, country, tagline, price, picture, getUserCardDOM }
}

// crée l'element dans le dom avec le nom et l'image associée

// fabrique l'article photographer ayant pour constantes data qui correspond au duo nom + portrait
// on crée ensuite l'article puis l'image et le header qu'on lui append child
// la première fonction nous renvoie le resultat de la deuxieme fonction
// on va cherche l'image dans le dossier image mais où va t on chercher les name ?? reponse : dans le tableau
// photographers du doc index.js
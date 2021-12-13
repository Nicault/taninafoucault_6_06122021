

function mediaFactory(data) {
    const { title, id, photographerId, image, likes, date, price, video } = data;

    const picture = `assets/medias/${image}`;
    const videoMedia = `assets/medias/${video}`

    function getMediaCardDOM() {
            const mediaSection = document.querySelector(".medias_section")
            const article = document.createElement( 'article' );
            const lien = document.createElement('a')
            lien.href = "#"
            const div = document.createElement("div")
            const jaime = document.createElement("p")
            const iconHeart = document.createElement("i")
            iconHeart.setAttribute("class", "fas fa-heart")

            jaime.textContent = likes

            jaime.appendChild(iconHeart)            
            mediaSection.appendChild(article)
            article.appendChild(lien)

            if (image) {
                const img = document.createElement( 'img' );
                img.setAttribute("src", picture)
                const h2 = document.createElement( 'h2' );
                h2.textContent = title;   

                lien.appendChild(img);
                article.appendChild(div)
                div.appendChild(h2)
                div.appendChild(jaime)
            } else {
                const vdo = document.createElement('video');
                // vdo.setAttribute("controls")
                const src = document.createElement("source")
                src.setAttribute("src", videoMedia)
                src.type = "video/mp4"
                
                lien.appendChild(vdo);
                vdo.appendChild(src)
                article.appendChild(div)
                div.appendChild(jaime)

            }
            return (article);
    }
    return { title, id, photographerId, image, likes, date, price, video, getMediaCardDOM }
}

// incrementer les likes


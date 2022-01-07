
function mediaFactory(data) {
    const { title, id, photographerId, image, likes, date, price, video } = data;

    const picture = `assets/medias/${image}`;
    const videoMedia = `assets/medias/${video}`
    


    function getMediaCardDOM() {

            const article = document.createElement( 'article' );
            const legende = document.createElement("div")
            const stats = document.createElement("div")
            stats.setAttribute("tabIndex", "0")
            stats.innerHTML = "<span class='screenreader-text'>Nombre de Likes : </span>"

            const jaime = document.createElement("div")
            jaime.classList.add("likesNumber")
            jaime.textContent = likes

            const likeButton = document.createElement("button")
            likeButton.setAttribute("type", "button")
            likeButton.setAttribute("aria-pressed", "false")
            likeButton.setAttribute("aria-label", "likes")
            likeButton.classList.add("likeButton")

            const iconHeart = document.createElement("i")
            iconHeart.setAttribute("class", "far fa-heart")
            iconHeart.classList.add("iconHeart")



            stats.appendChild(jaime)
            stats.appendChild(likeButton)            
            likeButton.appendChild(iconHeart)

            if (image) {
                const img = document.createElement( 'img' );
                img.setAttribute("src", picture)
                img.setAttribute("alt", title)
                img.setAttribute("tabIndex", "0")
                img.classList.add("lightboxOpener")
              
                article.appendChild(img);
               
            } else {
                const vdo = document.createElement('video');
                vdo.classList.add("lightboxOpener")
                vdo.setAttribute("tabIndex", "0")
                vdo.setAttribute("aria-label", title) 

                const src = document.createElement("source")
                src.setAttribute("src", videoMedia)
                src.type = "video/mp4"

                const legendeVdo = document.createElement("p")
                legendeVdo.textContent = title
             
                article.appendChild(vdo);
                vdo.appendChild(src)
                vdo.appendChild(legendeVdo)
              
            }

            article.appendChild(legende)

            const h2 = document.createElement( 'h2' );
            h2.textContent = title 
                     
            legende.appendChild(h2)
            legende.appendChild(stats)

            return (article);
            
    }
    
    return { title, id, photographerId, image, likes, date, price, video, getMediaCardDOM }
}


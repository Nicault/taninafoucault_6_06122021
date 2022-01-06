const littleHeart = document.createElement("i")
littleHeart.setAttribute("class", "fas fa-heart")
littleHeart.classList.add("littleHeart")
// création du aside (likes + price)  le price/day est rempli en meme temps que le header à la création de la page

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
            const likeButton = document.createElement("button")
            likeButton.setAttribute("type", "button")
            likeButton.setAttribute("aria-pressed", "false")
            likeButton.setAttribute("aria-label", "j'aime")
            likeButton.classList.add("likeButton")
            const iconHeart = document.createElement("i")
            iconHeart.setAttribute("class", "far fa-heart")
            iconHeart.classList.add("iconHeart")

            jaime.textContent = likes

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
                const src = document.createElement("source")
                const legendeVdo = document.createElement("p")
                legendeVdo.textContent = title
                src.setAttribute("src", videoMedia)
                src.type = "video/mp4"
                vdo.classList.add("lightboxOpener")
                vdo.setAttribute("tabIndex", "0")
                vdo.setAttribute("aria-label", title)
                
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


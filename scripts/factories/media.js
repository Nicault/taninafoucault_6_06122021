const littleHeart = document.createElement("i")
littleHeart.setAttribute("class", "fas fa-heart")
littleHeart.classList.add("littleHeart")
// cree le aside

const body = document.querySelector("body")
const aside = document.createElement("aside")
// aside.tabIndex = 0
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






const mediaSection = document.querySelector(".medias_section")
const trieur = document.createElement("div")
trieur.classList.add("trieur")
const textTrieur = document.createElement("div")
textTrieur.textContent = "Trier par"
textTrieur.classList.add("textTrieur")
const navTrieur = document.createElement("div")
const triButton = document.createElement("button")
triButton.classList.add("contact_button")
triButton.classList.add("triButton")
const triStyle = document.createElement("div")
triStyle.classList.add("triStyle")
const chevron = document.createElement("i")
chevron.classList.add("fas")
chevron.classList.add("fa-chevron-down")
const triListe = document.createElement("div")
triListe.classList.add("triListe")
const pop = document.createElement("a")
pop.setAttribute("id", "pop")
pop.href = "#"
pop.textContent = "Popularité"
const date = document.createElement("a")
date.setAttribute("id", "date")
date.href = "#"
date.textContent = "Date"
const titre = document.createElement("a")
titre.setAttribute("id", "titre")
titre.href = "#"
titre.textContent = "Titre"

body.appendChild(trieur)
trieur.appendChild(textTrieur)
trieur.appendChild(navTrieur)
navTrieur.appendChild(triButton)
triButton.appendChild(triStyle)
triButton.appendChild(chevron)
triButton.appendChild(triListe)
triListe.appendChild(pop)
triListe.appendChild(date)
triListe.appendChild(titre)

body.insertBefore(trieur, mediaSection)










// let likesCount = 0


function mediaFactory(data) {
    const { title, id, photographerId, image, likes, date, price, video } = data;

    const picture = `assets/medias/${image}`;
    const videoMedia = `assets/medias/${video}`
    


    function getMediaCardDOM() {

            // const mediaSection = document.querySelector(".medias_section")
            const article = document.createElement( 'article' );
            const legende = document.createElement("div")
            const stats = document.createElement("div")
            const jaime = document.createElement("div")
            jaime.classList.add("likesNumber")
            const likeButton = document.createElement("button")
            likeButton.setAttribute("type", "button")
            likeButton.classList.add("likeButton")
            const iconHeart = document.createElement("i")
            iconHeart.setAttribute("class", "far fa-heart")
            iconHeart.classList.add("iconHeart")

            jaime.textContent = likes

            stats.appendChild(jaime)
            stats.appendChild(likeButton)            
            likeButton.appendChild(iconHeart)
            // mediaSection.appendChild(article)

            if (image) {
                const img = document.createElement( 'img' );
                img.setAttribute("src", picture)
                img.setAttribute("tabIndex", "0")

                img.classList.add("lightboxOpener")
              

                article.appendChild(img);
               
            } else {
                const vdo = document.createElement('video');
                const src = document.createElement("source")
                src.setAttribute("src", videoMedia)
                src.type = "video/mp4"
                vdo.classList.add("lightboxOpener")
                vdo.setAttribute("tabIndex", "0")
                
                article.appendChild(vdo);
                vdo.appendChild(src)
              
            }

            article.appendChild(legende)

            const h2 = document.createElement( 'h2' );
            h2.textContent = title
            // const elmtDate = document.createElement("div")
            // elmtDate.classList.add("date")

            // elmtDate.textContent = date
            
            legende.appendChild(h2)
            // legende.appendChild(elmtDate)
            legende.appendChild(stats)

            // const totalLikes = document.querySelector(".totalLikes")
            

            // totalLikes.textContent = (likesCount += likes)
        


            return (article);
            
    }
    
    return { title, id, photographerId, image, likes, date, price, video, getMediaCardDOM }
}


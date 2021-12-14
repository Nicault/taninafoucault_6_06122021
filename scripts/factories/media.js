
// cree le aside

const body = document.querySelector("body")
const aside = document.createElement("aside")
const totalLikes = document.createElement("div")
totalLikes.classList.add("totalLikes")
const priceDay = document.createElement("div")
priceDay.classList.add("priceDay")
body.appendChild(aside)
aside.appendChild(totalLikes)
aside.appendChild(priceDay)


// function getLikes() {
//     let likesCounter = 0
//     for (let i = 0 ; i < medias.length ; i++ ) {
//     if (window.location.href.includes(medias[i].photographerId)){
//     likesCounter + medias[i].likes
//     return likesCounter}}
    
// }


let likesCount = 0
function mediaFactory(data) {
    const { title, id, photographerId, image, likes, date, price, video } = data;

    const picture = `assets/medias/${image}`;
    const videoMedia = `assets/medias/${video}`
    


    function getMediaCardDOM() {

            const mediaSection = document.querySelector(".medias_section")
            const article = document.createElement( 'article' );
            const div = document.createElement("div")
            const jaime = document.createElement("div")
            jaime.classList.add("likesNumber")
            const likeButton = document.createElement("button")
            likeButton.setAttribute("type", "button")
            likeButton.classList.add("likeButton")
            const iconHeart = document.createElement("i")
            iconHeart.setAttribute("class", "fas fa-heart")
            iconHeart.classList.add("iconHeart")

            jaime.textContent = likes

            jaime.appendChild(likeButton)            
            likeButton.appendChild(iconHeart)
            mediaSection.appendChild(article)

            if (image) {
                const img = document.createElement( 'img' );
                img.setAttribute("src", picture)
                const h2 = document.createElement( 'h2' );
                h2.textContent = title;   

                article.appendChild(img);
                article.appendChild(div)
                div.appendChild(h2)
                div.appendChild(jaime)
            } else {
                const vdo = document.createElement('video');
                const src = document.createElement("source")
                src.setAttribute("src", videoMedia)
                src.type = "video/mp4"
                
                article.appendChild(vdo);
                vdo.appendChild(src)
                article.appendChild(div)
                div.appendChild(jaime)

            }

        const totalLikes = document.querySelector(".totalLikes")
        const littleHeart = document.createElement("i")
        littleHeart.setAttribute("class", "fas fa-heart")
        littleHeart.classList.add("littleHeart")
        totalLikes.textContent = (likesCount += likes)
        totalLikes.appendChild(littleHeart)
        


            return (likesCount, article);
            
    }
    
    return { title, id, photographerId, image, likes, date, price, video, getMediaCardDOM }
}

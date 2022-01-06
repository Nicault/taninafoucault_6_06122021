// LIKES
let likesNumber = document.querySelectorAll(".likesNumber")
let likesCount

function total () {
    likesCount = 0

    for (let i = 0 ; i < likesNumber.length ; i++) {
        likesCount += parseInt(likesNumber[i].textContent)
        console.log(likesCount)
    }
    totalLikes.innerHTML = "<span class='screenreader-text'>Nombre total de Likes : </span>" + likesCount

}

total()

// like et unlike 

function like() {
    let likesNumber = document.querySelectorAll(".likesNumber")
    let likeButton = document.querySelectorAll(".likeButton")
    let iconHeart = document.querySelectorAll(".iconHeart")
    for (let i = 0 ; i < likesNumber.length ; i++) {

        likeButton[i].addEventListener("click", function() {
            if (iconHeart[i].classList.contains("far")){
            likeButton[i].setAttribute("aria-pressed", "true")
            likesNumber[i].textContent++
            likesCount++
            iconHeart[i].classList.remove("far")
            iconHeart[i].classList.add("fas")
            } else {
            likeButton[i].setAttribute("aria-pressed", "false")
            likesNumber[i].textContent --
            likesCount--
            iconHeart[i].classList.add("far")
            iconHeart[i].classList.remove("fas")
            }
            total()

        })
}}
like()
// LIKES

let likesCount = 0

function total () {
for (let i = 0 ; i < mediasPage.length ; i++) {
    likesCount += mediasPage[i].likes
}
    totalLikes.textContent = likesCount}

total()

// like et unlike 

function like() {
    let likesNumber = document.querySelectorAll(".likesNumber")
    let likeButton = document.querySelectorAll(".likeButton")
    let iconHeart = document.querySelectorAll(".iconHeart")
    for (let i = 0 ; i < likesNumber.length ; i++) {

        likeButton[i].addEventListener("click", function() {
            if (iconHeart[i].classList.contains("far")){
            likesNumber[i].textContent++
            totalLikes.textContent++
            iconHeart[i].classList.remove("far")
            iconHeart[i].classList.add("fas")
            } else {
            likesNumber[i].textContent --
            totalLikes.textContent --
            iconHeart[i].classList.add("far")
            iconHeart[i].classList.remove("fas")
            }
        })
}}
like()

const likesNumber = document.querySelectorAll(".likesNumber")
let iconHeart = document.querySelectorAll(".iconHeart")



for (let i = 0 ; i < likesNumber.length ; i++) {
    iconHeart[i].addEventListener("click", function() {
        likesNumber[i].textContent++
        totalLikes.textContent++
    })
}

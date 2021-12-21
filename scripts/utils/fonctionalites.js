// LIKES

let likesCount = 0

function total () {
for (let i = 0 ; i < mediasPage.length ; i++) {
    likesCount += mediasPage[i].likes
}
    totalLikes.textContent = likesCount}

total()


let likesNumber = document.querySelectorAll(".likesNumber")
let likeButton = document.querySelectorAll(".likeButton")
let iconHeart = document.querySelectorAll(".iconHeart")


// like et unlike 

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
}


// tri

function sortedFactory() {   
     
    
    mediasSection.innerHTML = ""

    for (let i = 0 ; i < mediasPage.length ; i++ ) {

        const mediaModel = mediaFactory(mediasPage[i]);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediasSection.appendChild(mediaCardDOM);

    }
}

//les plus aimées


function displayByLikes90(mediasPage) {
    mediasPage.sort(function(a, b){return b.likes - a.likes})
};

//les moins aimées

// function displayByLikes09(mediasPage) {
//     mediasPage.sort(function(a, b){return a.likes - b.likes})

// };

//recent

function displayByDate90(mediasPage) {

    mediasPage.sort(function(a, b){return b.date.replaceAll("-", "") - a.date.replaceAll("-", "")})

};

// old

// function displayByDate09(mediasPage) {

//     mediasPage.sort(function(a, b){return a.date.replaceAll("-", "") - b.date.replaceAll("-", "")})

// };

// a - z

function displayByNameAZ(mediasPage) {

    mediasPage.sort(function(a, b){return a.title.localeCompare(b.title)})

};

// z - a

// function displayByNameZA(mediasPage) {

//     mediasPage.sort(function(a, b){return b.title.localeCompare(a.title)})

// };

// fonction à appeler

function initSortedMedias(fonction) {
    fonction(mediasPage);
    sortedFactory()
};


// pop date titre eventListeners


pop.addEventListener("click", function() {initSortedMedias(displayByLikes90)})
date.addEventListener("click", function() {initSortedMedias(displayByDate90)})
titre.addEventListener("click", function() {initSortedMedias(displayByNameAZ)})



let pdt = [pop, date, titre]


triStyle.textContent = "Défaut"

function toggleStyle() {
    chevron.classList.toggle("rotate")
    triListe.classList.toggle("list")
    triButton.classList.toggle("listHeight") 
}



triButton.addEventListener("click", function(){
    triStyle.textContent = ""
    toggleStyle()   
})


for (let i = 0 ; i < pdt.length ; i++) {
    pdt[i].addEventListener("click", function(e){
        e.stopPropagation()
        toggleStyle()
        triStyle.textContent = pdt[i].textContent})
}



// ATTENTION BUG DES LIKES QUAND ON APPLIQUE UN TRI SUR LES IMAGES


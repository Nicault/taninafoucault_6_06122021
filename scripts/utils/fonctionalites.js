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

function displayByLikes09(mediasPage) {
    mediasPage.sort(function(a, b){return a.likes - b.likes})

};

//recent

function displayByDate90(mediasPage) {

    mediasPage.sort(function(a, b){return b.date.replaceAll("-", "") - a.date.replaceAll("-", "")})

};

// old

function displayByDate09(mediasPage) {

    mediasPage.sort(function(a, b){return a.date.replaceAll("-", "") - b.date.replaceAll("-", "")})

};

// a - z

function displayByNameAZ(mediasPage) {

    mediasPage.sort(function(a, b){return a.title.localeCompare(b.title)})

};

// z - a

function displayByNameZA(mediasPage) {

    mediasPage.sort(function(a, b){return b.title.localeCompare(a.title)})

};

// fonction à appeler

function initSortedMedias(fonction) {
    fonction(mediasPage);
    sortedFactory()
};



















// LIKES


const likesNumber = document.querySelectorAll(".likesNumber")
let likeButton = document.querySelectorAll(".likeButton")



for (let i = 0 ; i < likesNumber.length ; i++) {
    likeButton[i].addEventListener("click", function() {
        likesNumber[i].textContent++
        totalLikes.textContent++
        likeButton[i].setAttribute("disabled", true)
    })
}

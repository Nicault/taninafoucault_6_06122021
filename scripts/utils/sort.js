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

//les plus recent

function displayByDate90(mediasPage) {

    mediasPage.sort(function(a, b){return b.date.replaceAll("-", "") - a.date.replaceAll("-", "")})
};

//les plus anciens 

// function displayByDate09(mediasPage) {

//     mediasPage.sort(function(a, b){return a.date.replaceAll("-", "") - b.date.replaceAll("-", "")})

// };

//alpha a - z

function displayByNameAZ(mediasPage) {

    mediasPage.sort(function(a, b){return a.title.localeCompare(b.title)})
};

//alpha z - a

// function displayByNameZA(mediasPage) {

//     mediasPage.sort(function(a, b){return b.title.localeCompare(a.title)})

// };


// fonction à appeler + fonction like + display lightbox car les elements bougent après le tri /!\ 

function initSortedMedias(fonction) {
    fonction(mediasPage);
    sortedFactory()
    like()
    displayLightboxMedias()
};


// pop date titre eventListeners


pop.addEventListener("click", function() {initSortedMedias(displayByLikes90)})
date.addEventListener("click", function() {initSortedMedias(displayByDate90)})
titre.addEventListener("click", function() {initSortedMedias(displayByNameAZ)})


// changement de l'affichage du menu de tri

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




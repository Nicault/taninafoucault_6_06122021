// création de menu de tri

const trieur = document.createElement("div")
trieur.classList.add("trieur")

const textTrieur = document.createElement("label")
textTrieur.textContent = "Trier par"
textTrieur.classList.add("textTrieur")
textTrieur.setAttribute("tabIndex", "0")


const triButton = document.createElement("button")
triButton.classList.add("contact_button")
triButton.classList.add("triButton")
triButton.setAttribute("role", "button")
triButton.setAttribute("aria-haspopup", "listbox")
triButton.setAttribute("aria-expanded", "false")
triButton.classList.add("triButtonText")

const spanSRT = document.createElement("span")
spanSRT.classList.add("screenreader-text")
spanSRT.textContent = "Trier par : "

const chevron = document.createElement("i")
chevron.classList.add("fas")
chevron.classList.add("fa-chevron-down")
chevron.removeAttribute("aria-hidden")

const triListe = document.createElement("ul")
triListe.setAttribute("role", "listbox")
triListe.classList.add("triListe")
triListe.classList.add("none")
triListe.setAttribute("tabIndex", "-1")

const triListeBG = document.createElement("div")
triListeBG.classList.add("triListeBG")
triListeBG.classList.add("none")

const pop = document.createElement("li")
const popLien = document.createElement("a")
popLien.setAttribute("id", "pop")
popLien.href = "#"
popLien.setAttribute("role", "option")
pop.setAttribute("class", "dropDownItem")
popLien.innerHTML = "<span class='screenreader-text'>Trier par : </span>Popularité"

const date = document.createElement("li")
const dateLien = document.createElement("a")
dateLien.setAttribute("id", "date")
dateLien.href = "#"
dateLien.setAttribute("role", "option")
date.setAttribute("class", "dropDownItem")
dateLien.innerHTML = "<span class='screenreader-text'>Trier par : </span>Date"

const titre = document.createElement("li")
const titreLien = document.createElement("a")
titreLien.setAttribute("id", "titre")
titreLien.href = "#"
titreLien.setAttribute("role", "option")
titre.setAttribute("class", "dropDownItem")
titreLien.innerHTML = "<span class='screenreader-text'>Trier par : </span>Titre"




body.appendChild(trieur)
body.appendChild(triListeBG)
trieur.appendChild(textTrieur)
trieur.appendChild(triButton)
trieur.appendChild(triListe)
trieur.appendChild(chevron)
triListe.appendChild(pop)
pop.appendChild(popLien)
triListe.appendChild(date)
date.appendChild(dateLien)
triListe.appendChild(titre)
titre.appendChild(titreLien)

body.insertBefore(trieur, mediasSection)


// class over et active pour le chevron

triButton.addEventListener("mouseon", function(){
    chevron.classList.toggle("hoverActive")
})


// tri : efface tous les medias puis les recréé dans l'ordre souhaité

function displayDataSortedMedias() { 
    mediasSection.innerHTML = ""

    for (let i = 0 ; i < mediasPage.length ; i++ ) {

        const mediaModel = mediaFactory(mediasPage[i]);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediasSection.appendChild(mediaCardDOM);

    }
}

//les plus aimées


function sortByLikes90() {

    mediasPage.sort(function(a, b){return b.likes - a.likes})
}

//les moins aimées

// function displayByLikes09(mediasPage) {
//     mediasPage.sort(function(a, b){return a.likes - b.likes})

// };

//les plus recent

function sortByDate90() {

    mediasPage.sort(function(a, b){return b.date.replaceAll("-", "") - a.date.replaceAll("-", "")})
}

//les plus anciens 

// function displayByDate09(mediasPage) {

//     mediasPage.sort(function(a, b){return a.date.replaceAll("-", "") - b.date.replaceAll("-", "")})

// };

//alpha a - z

function SortByNameAZ() {

    mediasPage.sort(function(a, b){return a.title.localeCompare(b.title)})
}

//alpha z - a

// function displayByNameZA(mediasPage) {

//     mediasPage.sort(function(a, b){return b.title.localeCompare(a.title)})

// };


// fonction à appeler + fonction like + display lightbox car les elements bougent après le tri /!\ 

function initSortedMedias(fonction) {
    fonction();
    displayDataSortedMedias()
    like()
    displayLightboxMedias()
}

// pop date titre eventListeners

popLien.addEventListener("click", function() {initSortedMedias(sortByLikes90)})
dateLien.addEventListener("click", function() {initSortedMedias(sortByDate90)})
titreLien.addEventListener("click", function() {initSortedMedias(SortByNameAZ)})


// changement de l'affichage du menu de tri

let pdt = [popLien, dateLien, titreLien]


let triButtonTextContent = "Défaut"
triButton.innerHTML = "<span class='screenreader-text'>Trier par : </span>" + triButtonTextContent 
// triButton.setAttribute("aria-activedescendant", triButtonTextContent)

function toggleStyle() {
    chevron.classList.toggle("rotate")
    triListe.classList.toggle("none")
    triButton.classList.toggle("none")
    triListeBG.classList.toggle("none")
    triButton.setAttribute("aria-expanded", "true")
}


triButton.addEventListener("click", function(){toggleStyle()})
chevron.addEventListener("click", function() {toggleStyle()})
chevron.addEventListener("keydown", function(e) {
    if (e.code == "Enter") {
        toggleStyle()
    }
})


for (let i = 0 ; i < pdt.length ; i++) {
    pdt[i].addEventListener("click", function(e){
        e.stopPropagation()
        toggleStyle()
        triButton.innerHTML = pdt[i].innerHTML
        triButtonTextContent = pdt[i].innerHTML
        triButton.setAttribute("aria-activedescendant", triButtonTextContent)
    })
}

// fermer quand click ailleurs

triListeBG.addEventListener("click", function(){
    toggleStyle()
})


// garder le focus dans le menu de tri
document.addEventListener('keydown', function(e) {
    keepFocusOnModal(e, popLien, titreLien) 
})


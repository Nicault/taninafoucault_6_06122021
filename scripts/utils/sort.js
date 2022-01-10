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
pop.setAttribute("class", "dropDownItem")
popLien.innerHTML = "<span class='screenreader-text'>Trier par : </span>Popularité"

const date = document.createElement("li")
const dateLien = document.createElement("a")
dateLien.setAttribute("id", "date")
dateLien.href = "#"
date.setAttribute("class", "dropDownItem")
dateLien.innerHTML = "<span class='screenreader-text'>Trier par : </span>Date"

const titre = document.createElement("li")
const titreLien = document.createElement("a")
titreLien.setAttribute("id", "titre")
titreLien.href = "#"
titre.setAttribute("class", "dropDownItem")
titreLien.innerHTML = "<span class='screenreader-text'>Trier par : </span>Titre"

// const chevronListe = document.createElement("i")
// chevronListe.classList.add("fas")
// chevronListe.classList.add("fa-chevron-down")


body.appendChild(trieur)
body.appendChild(triListeBG)
trieur.appendChild(textTrieur)
trieur.appendChild(triButton)
trieur.appendChild(triListe)
triButton.appendChild(chevron)
triListe.appendChild(pop)
pop.appendChild(popLien)
triListe.appendChild(date)
date.appendChild(dateLien)
triListe.appendChild(titre)
titre.appendChild(titreLien)
// trieur.appendChild(chevronListe)

body.insertBefore(trieur, mediasSection)


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
    // chevronListe.classList.toggle("rotate")
    triListe.classList.toggle("none")
    triListe.classList.toggle("block")
    triButton.classList.toggle("none")
    triListeBG.classList.toggle("none")
    triButton.setAttribute("aria-expanded", "false")
    
}



triButton.addEventListener("click", function(){
    // triButtonText.textContent = ""
    toggleStyle()
    if (triListe.classList.contains("block")) {
        triButton.innerHTML = "<span class='screenreader-text'>Trier par : </span>" + triButtonTextContent
    }
})



//  ATTENTION NE PAS EFFACER .. VOIR POUR RAJOUTER CET ELEMENT

// chevronListe.addEventListener("click", function() {
//     toggleStyle()
//     if (triListe.classList.contains("block")) {
//         triButtonText.innerHTML = "<span class='screenreader-text'>Trier par : </span>" + triButtonTextContent
//     }
// })

// chevronListe.addEventListener("keydown", function(e) {
//     if (e.code == "Enter") {
//         popLien.focus()
//         toggleStyle()
//         if (triListe.classList.contains("block")) {
//             triButton.innerHTML = "<span class='screenreader-text'>Trier par : </span>" + triButtonTextContent
//         }
//     }
// })



for (let i = 0 ; i < pdt.length ; i++) {
    pdt[i].addEventListener("click", function(e){
        e.stopPropagation()
        toggleStyle()
        triButton.innerHTML = pdt[i].innerHTML
        triButtonTextContent = pdt[i].innerHTML
        triButton.setAttribute("aria-activedescendant", triButtonTextContent)
        })
}

// fermer quand click ailleurs*

triListeBG.addEventListener("click", function(){
    toggleStyle()
})

// garder le focus dans le menu de tri

document.addEventListener('keydown', function(e) {
    keepFocusOnModal(e, popLien, titreLien) 
  })
  


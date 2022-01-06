{/* <label for="menu_destination_liste">Navigation</label> 
<select name="menu_destination" id="menu_destination_liste"> 
     <option value="http://www.monsite.net/accueil.html">Accueil</option> 
     <option value="http://www.monsite.net/apropos.html">Qui sommes-nous ?</option> 
     <option value="http://www.monsite.net/contact.html">Nous contacter</option> 
     <option value="http://www.monsite.net/plan.html">Plan du site</option> 
</select> */}


// création de menu de tri

const trieur = document.createElement("div")
trieur.classList.add("trieur")
const textTrieur = document.createElement("label")
textTrieur.textContent = "Trier par"
textTrieur.classList.add("textTrieur")
textTrieur.setAttribute("tabIndex", "0")
const navTrieur = document.createElement("div")
const triButton = document.createElement("button")
triButton.classList.add("contact_button")
triButton.classList.add("triButton")
triButton.setAttribute("aria-haspopup", "listbox")
triButton.setAttribute("aria-expanded", "false")
const triStyle = document.createElement("div")
triStyle.classList.add("triStyle")
const chevron = document.createElement("i")
chevron.classList.add("fas")
chevron.classList.add("fa-chevron-down")
const triListe = document.createElement("div")
triListe.setAttribute("role", "listbox")
triListe.classList.add("triListe")
const pop = document.createElement("a")
pop.setAttribute("id", "pop")
pop.href = "#"
pop.textContent = "Popularité"
pop.setAttribute("role", "listbox")
const date = document.createElement("a")
date.setAttribute("id", "date")
date.href = "#"
date.textContent = "Date"
date.setAttribute("role", "listbox")
const titre = document.createElement("a")
titre.setAttribute("id", "titre")
titre.href = "#"
titre.textContent = "Titre"
titre.setAttribute("role", "listbox")

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

body.insertBefore(trieur, mediasSection)


// tri : efface tous les mediats puis les recréé dans le bon ordre

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


let triButtonTextContent = "Défaut"
triStyle.textContent = triButtonTextContent
triButton.setAttribute("aria-activedescendant", triButtonTextContent)



function toggleStyle() {
    chevron.classList.toggle("rotate")
    triListe.classList.toggle("list")
    triButton.classList.toggle("listHeight") 

    if (triButton.classList.contains("listHeight")){
        triButton.setAttribute("aria-expanded", "true")
    } 
    else {
        triButton.setAttribute("aria-expanded", "false")

    }
    
}



triButton.addEventListener("click", function(){
    triStyle.textContent = ""
    toggleStyle()

    if (!chevron.classList.contains("rotate")) {
        triStyle.textContent = triButtonTextContent
    }
})



for (let i = 0 ; i < pdt.length ; i++) {
    pdt[i].addEventListener("click", function(e){
        e.stopPropagation()
        toggleStyle()
        triStyle.textContent = pdt[i].textContent
        triButtonTextContent = pdt[i].textContent
        triButton.setAttribute("aria-activedescendant", triButtonTextContent)

        })
}




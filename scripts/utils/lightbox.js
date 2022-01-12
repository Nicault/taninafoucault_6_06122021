// création de la lightbox
const lightBoxScreen = document.createElement("section")
const lightBox = document.createElement("div")
const lightBoxBG = document.createElement("div")
const exit = document.createElement("img")
const chevronR = document.createElement("i")
const chevronL = document.createElement("i")
const lightBoxMedia = document.createElement("div")
const lightBoxMediaTitle = document.createElement("p")


lightBox.classList.add("lightBox")
lightBox.setAttribute("tabIndex", "-1")
lightBox.setAttribute("role", "dialog")
lightBox.setAttribute("aria-label", "Aperçu des éléments")
exit.src="assets/icons/closeRed.svg" 
exit.classList.add("exit")
exit.setAttribute("id", "croixLightbox")
lightBoxBG.classList.add("modalBG")
chevronR.classList.add("fas")
chevronR.classList.add("fa-chevron-right")
// chevronR.setAttribute("tabIndex", "0")
// chevronR.setAttribute("aria-label","élément suivant")
chevronR.innerHTML = "<span class='screenreader-text'>élément suivant</span>"

chevronL.classList.add("fas" )
chevronL.classList.add("fa-chevron-left")
// chevronL.setAttribute("tabIndex", "0")
// chevronL.setAttribute("aria-label","élément précédent")
chevronL.innerHTML = "<span class='screenreader-text'>élément précédent</span>"

lightBoxMedia.classList.add("lightBoxMedia")
lightBoxMedia.tabIndex = 0
lightBoxMediaTitle.classList.add("lightBoxMediaTitle")
lightBoxMediaTitle.tabIndex = 0

body.appendChild(lightBoxScreen)
lightBoxScreen.appendChild(lightBox)
lightBoxScreen.appendChild(lightBoxBG)
lightBox.appendChild(exit)
lightBox.appendChild(lightBoxMedia)
lightBox.appendChild(lightBoxMediaTitle)
lightBox.appendChild(chevronR)
lightBox.appendChild(chevronL)





function displayLightBox() {

    lightBoxScreen.style.display = "block";
    lightBoxMedia.focus()
  }
  
  function closeLightBox() {     
    lightBoxMedia.innerHTML = ""
    lightBoxScreen.style.display = "none";
  }
  
closeLightBox()

//close light box

exit.addEventListener("click", function(){closeLightBox()})
lightBoxBG.addEventListener("click", function() {closeLightBox()})


//changer le contenu de lightbox media

// afficher l'image sur laquelle on a cliqué dans la ligthbox

function displayCurrentMedia(indice) {
    displayLightBox()

    lightBoxMediaTitle.textContent = mediasPage[indice].title

    if (mediasPage[indice].image){
        lightBoxMedia.innerHTML = "<img src='assets/medias/" + mediasPage[indice].image + 
                                "' tabIndex='0' alt='Description de : " + mediasPage[indice].title + "'>"
    }
    else {
        lightBoxMedia.innerHTML = "<video controls> <source src='assets/medias/" + mediasPage[indice].video + 
                                "'><p>Description de : " + mediasPage[indice].title + " </p></video>"
    }
}

// afficher media suivant et precedent dans la ligthbox 



function navigateBetweenMedias(currentMediaIndex) {

    // suivant au click
    chevronR.addEventListener("click", function() {
        currentMediaIndex = displayNextMedia(currentMediaIndex)
    })
    // suivant touche espace
    document.addEventListener("keydown", function(e) {
        if (lightBoxScreen.style.display == "block" && e.code == "Space" && !e.shiftKey) {
            e.preventDefault()
            currentMediaIndex = displayNextMedia(currentMediaIndex)
        }
    })
    // suivant flèches
    document.addEventListener("keydown", function(e) {
        if (lightBoxScreen.style.display == "block" && e.code == "ArrowRight") {
            currentMediaIndex = displayNextMedia(currentMediaIndex)            
        }
    })
    // precedent au click
    chevronL.addEventListener("click", function() {
        currentMediaIndex = displayPreviousMedia(currentMediaIndex)
    })
    // precedent shift + espace
    document.addEventListener("keydown", function(e) {
        if (lightBoxScreen.style.display == "block" && e.shiftKey && e.code =="Space"){
            e.preventDefault()    
            currentMediaIndex = displayPreviousMedia(currentMediaIndex)
        }      
    })
    // precedent fleches
    document.addEventListener("keydown", function(e) {
        if (lightBoxScreen.style.display == "block" && e.code == "ArrowLeft") {
            currentMediaIndex = displayPreviousMedia(currentMediaIndex)
    
        }
    })
}

// specificité premier et dernier media
function displayNextMedia(currentMediaIndex) {
    ++currentMediaIndex
                if (currentMediaIndex > mediasPage.length - 1) {
                    currentMediaIndex = 0
                }
                displayCurrentMedia(currentMediaIndex)
    return currentMediaIndex
}

function displayPreviousMedia(currentMediaIndex) {
    --currentMediaIndex
                if (currentMediaIndex < 0) {
                    currentMediaIndex = mediasPage.length - 1
                }
                displayCurrentMedia(currentMediaIndex)
    return currentMediaIndex
}

// afficher media suivant et precedent en utilisant souris ou clavier

function displayLightboxMedias() {
    const lightboxOpener = document.querySelectorAll(".lightboxOpener")

    for (let i = 0 ; i < mediasPage.length ; i++) {

        lightboxOpener[i].addEventListener("click", function() {
            let currentMediaIndex = i
            displayCurrentMedia(currentMediaIndex)
            navigateBetweenMedias(currentMediaIndex)
  
        })
        lightboxOpener[i].addEventListener("keydown", function(e) {
            let currentMediaIndex = i
            if (e.code == "Enter") {
                displayCurrentMedia(currentMediaIndex)
                navigateBetweenMedias(currentMediaIndex)
            }
        }) 
    }
}

displayLightboxMedias()




// focus sur la lightbox


document.addEventListener('keydown', function(e) {
    keepFocusOnModal(e, lightBoxMedia, lightBoxMediaTitle) 
  })




// attention !! focus sur le lightBoxMedia à l'ouverture de la modale
// puis focus sur l'image et le titre
// donne l'impression d'un double focus car le contenu prend la taille du contenant
// reflechir à une solution si besoin

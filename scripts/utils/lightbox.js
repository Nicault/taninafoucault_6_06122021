const lightBoxScreen = document.createElement("section")
const lightBox = document.createElement("div")
const lightBoxBG = document.createElement("div")
const exit = document.createElement("img")
const chevronR = document.createElement("i")
const chevronL = document.createElement("i")
const lightBoxMedia = document.createElement("div")
const lightBoxMediaTitle = document.createElement("h2")


lightBox.classList.add("lightBox")
exit.src="assets/icons/closeRed.svg" 
exit.classList.add("exit")
lightBoxBG.classList.add("modalBG")
chevronR.classList.add("fas")
chevronR.classList.add("fa-chevron-right")
chevronL.classList.add("fas" )
chevronL.classList.add("fa-chevron-left")
lightBoxMedia.classList.add("lightBoxMedia")
lightBoxMediaTitle.classList.add("lightBoxMediaTitle")

body.appendChild(lightBoxScreen)
lightBoxScreen.appendChild(lightBox)
lightBoxScreen.appendChild(lightBoxBG)
lightBox.appendChild(exit)
lightBox.appendChild(chevronL)
lightBox.appendChild(chevronR)
lightBox.appendChild(lightBoxMedia)
lightBox.appendChild(lightBoxMediaTitle)




function displayLightBox() {
    lightBoxScreen.style.display = "block";
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





// open light box





function lightboxCurrentMedia(indice) {
    if (mediasPage[indice].image){
        lightBoxMedia.innerHTML = "<img src='assets/medias/" + mediasPage[indice].image + "'>"
    }
    else {
        lightBoxMedia.innerHTML = "<video controls> <source src='assets/medias/" + mediasPage[indice].video + "'> </video>"
    }
}



function displayLightboxMedias() {
    const lightboxOpener = document.querySelectorAll(".lightboxOpener")

    for (let i = 0 ; i < mediasPage.length ; i++) {

        lightboxOpener[i].addEventListener("click", function() {
            displayLightBox()
            let currentMediaIndex = i
            lightBoxMediaTitle.textContent = mediasPage[currentMediaIndex].title
            lightboxCurrentMedia(currentMediaIndex)

            chevronR.addEventListener("click", function() {
                ++currentMediaIndex
                if (currentMediaIndex > mediasPage.length - 1) {
                    currentMediaIndex = 0
                }
                lightboxCurrentMedia(currentMediaIndex)
            })

            chevronL.addEventListener("click", function() {
                --currentMediaIndex
                if (currentMediaIndex < 0) {
                    currentMediaIndex = mediasPage.length - 1
                }
                lightboxCurrentMedia(currentMediaIndex)
            })
        }
    )
}}

displayLightboxMedias()


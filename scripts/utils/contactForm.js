const modal = document.getElementById("contact_modal");
const boutonEnvoyer = document.querySelector("form button")
const contactezMoi = document.querySelector("header h2")
const modalValidation = document.querySelector(".modalValidation")
const groupeValidation = document.querySelector(".groupe_validation")

const prenom = document.querySelector("#prenom")
const nom = document.querySelector("#nom")
const email = document.querySelector("#email")
const message = document.querySelector("#votre_message")
const fermer = document.querySelector(".modalValidation .closeButton")

// message de validation + validationBG

function displayValidation() {
  groupeValidation.style.display = "flex";
  validationText.focus()    
}

function closeValidation() {
  groupeValidation.style.display = "none";
}

closeValidation()

const modalValidationBG = document.createElement("div")
modalValidationBG.classList.add("modalBG")
groupeValidation.appendChild(modalValidationBG)
modalValidationBG.addEventListener("click", function() {closeValidation()})



// ajoute le nom du photographe de la page dans la modale

for (let i = 0 ; i < photographers.length ; i++) {
  if (window.location.href.includes(photographers[i].id)){
    contactezMoi.textContent="Contactez-moi " + photographers[i].name
  }
}

function displayModal() {
	modal.style.display = "block"
  contactezMoi.focus()
}

function closeModal() {
    modal.style.display = "none"
}



// background opacity + closemodal on click
const modalBG = document.createElement("div")
modalBG.classList.add("modalBG")
modal.appendChild(modalBG)
modalBG.addEventListener("click", function() {closeModal()})


// messages d'alerte en cas de mauvais input

let warningMessage = document.querySelectorAll(".warningMessage")



const inputAccessibility = document.querySelectorAll (".modal input, .modal textarea")

function goodInput (index) {
    warningMessage[index].classList.remove("block")  
    warningMessage[index].classList.add("none") 
    warningMessage[index].removeAttribute("tabIndex")
    inputAccessibility[index].setAttribute("aria-invalid","false")
    return true     
}

function wrongInput (index) {
    warningMessage[index].classList.remove("none")  
    warningMessage[index].classList.add("block")
    warningMessage[index].setAttribute("tabIndex", "0")
    inputAccessibility[index].setAttribute("aria-invalid","true")
    return false     
}


// names

function nameIsRight(constName, index) {
    if (constName.value) {
      return goodInput (index)
    }
    else {
      return wrongInput (index)  
  
    }
  }

//   email

let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/  

function emailIsRight(){
  if (regexEmail.test(email.value)) {
    return goodInput(2)
  } else {
    return wrongInput(2)  
  }
}

// message

function messageIsRight(){
    if (message.value.length >= 5){
        return goodInput(3)
    } else {
        return wrongInput(3)
    }
}

prenom.addEventListener("change", function() {nameIsRight(prenom, 0)})
nom.addEventListener("change", function() {nameIsRight(nom,1)})
email.addEventListener("change", function() {emailIsRight()})
message.addEventListener("change", function() {messageIsRight()})

const screenReaderText = document.querySelectorAll("#contact_modal .screenreader-text")


function validate() {
    if ( nameIsRight(prenom, 0) 
      && nameIsRight(nom, 1) 
      && emailIsRight() 
      && messageIsRight()) {

        console.log("prénom : " + prenom.value + "\n" + "nom : " + nom.value + "\n" + 
                              "email : " + email.value + "\n" + "message : " + message.value)  


        prenom.value = ""
        nom.value = ""
        email.value = ""
        message.value = ""

        for (let i = 0 ; i < screenReaderText.length ; i++) {
          screenReaderText[i].setAttribute("aria-hidden", "false")
        }
        closeModal()
        displayValidation()

    } else {
  
      nameIsRight(prenom, 0) 
      nameIsRight(nom, 1) 
      emailIsRight() 
      messageIsRight()

      for (let i = 0 ; i < screenReaderText.length ; i++) {
        screenReaderText[i].setAttribute("aria-hidden", "true")
      }
    }
  } 


  // important. sans ça le bouton envoyer mène à un url sans parametre
boutonEnvoyer.addEventListener("click", function(e) {
    e.preventDefault()
    validate()
})



// accessibilité clavier : fermer les modales

function closeWithKeyboard(e) {
  if (e.code == "Escape"){
    closeModal()
    closeValidation()
    closeLightBox()
    toggleStyle()
  }
}

document.addEventListener('keydown', function(e) {
  closeWithKeyboard(e)
})


// focus sur la modale de contact /!\ FONCTION KEEP FOCUS ON MODAL  
// va de paire avec le premierElement.focus() dans le display de la modale



// https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700 //

// add all the elements inside modal which you want to make focusable
const  focusableElements = document.querySelectorAll("header h2, .modal input, .modal textarea, #envoyer, .warningMessage")

function keepFocusOnModal(e, firstElement, lastElement) {
  let isTabPressed = e.key === 'Tab'

  if (!isTabPressed) {
    return
  }

  if (e.shiftKey) { // if shift key pressed for shift + tab combination
    if (document.activeElement === firstElement) {
      lastElement.focus(); // add focus for the last focusable element
      e.preventDefault();
    }
  } else { // if tab key is pressed
    if (document.activeElement === lastElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstElement.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  }
}

document.addEventListener('keydown', function(e) {
  keepFocusOnModal(e, contactezMoi, boutonEnvoyer) 
})

// focus sur la modale de validation

const validationText = document.querySelector(".validationText")
validationText.setAttribute("tabIndex", "0")

document.addEventListener('keydown', function(e) {
  keepFocusOnModal(e, validationText, fermer) 
})

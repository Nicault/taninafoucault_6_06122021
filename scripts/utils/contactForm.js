const modal = document.getElementById("contact_modal");
const boutonEnvoyer = document.querySelector("form button")
const contactezMoi = document.querySelector("header h2")
const modalValidation = document.querySelector(".modalValidation")
const groupeValidation = document.querySelector(".groupe_validation")


// message de validation + validationBG
function displayValidation() {
  groupeValidation.style.display = "flex";
}

function closeValidation() {
  groupeValidation.style.display = "none";
}

closeValidation()





const modalValidationBG = document.createElement("div")
modalValidationBG.classList.add("modalBG")
groupeValidation.appendChild(modalValidationBG)
modalValidationBG.addEventListener("click", function() {closeValidation()})






for (let i = 0 ; i < photographers.length ; i++) {
  let name 
  if (window.location.href.includes(photographers[i].id)){
    name = photographers[i].name
  }}

contactezMoi.textContent="Contactez-moi " + name


function displayModal() {
	modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}







// background opacity + closemodal on click
const modalBG = document.createElement("div")
modalBG.classList.add("modalBG")
modal.appendChild(modalBG)
modalBG.addEventListener("click", function() {closeModal()})




let warningMessage = document.querySelectorAll(".warningMessage")

const prenom = document.querySelector("#prenom")
const nom = document.querySelector("#nom")
const email = document.querySelector("#email")
const message = document.querySelector("#votre_message")

function goodInput (index) {
    warningMessage[index].classList.remove("block")  
    warningMessage[index].classList.add("none") 
    return true     
}

function wrongInput (index) {
    warningMessage[index].classList.remove("none")  
    warningMessage[index].classList.add("block")  
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


boutonEnvoyer.addEventListener("click", function() {closeModal()})

function validate() {
    if ( nameIsRight(prenom, 0) 
      && nameIsRight(nom, 1) 
      && emailIsRight() 
      && messageIsRight()) {

        console.log("prénom : " + prenom.value + "\n" + "nom : " + nom.value + "\n" + "email : " + email.value + "\n" + "message : " + message.value)  


        prenom.value = ""
        nom.value = ""
        email.value = ""
        message.value = ""

        displayValidation()

    } else {
  
      nameIsRight(prenom, 0) 
      nameIsRight(nom,1) 
      emailIsRight() 
      messageIsRight()

      displayModal()

        
    }
  } 


  // important. sans ça le bouton envoyer même à un url sans parametre
boutonEnvoyer.addEventListener("click", function(e) {
    e.preventDefault()
    validate()
})





// VOIR POUR METTRE UN MESSAGE DE VALIDATION QUAND ON ENVOIE LE FORMULAIRE + RED BOX !!
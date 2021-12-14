const modal = document.getElementById("contact_modal");


function displayModal() {
	modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}


const modalBG = document.createElement("div")
modalBG.classList.add("modalBG")
modal.appendChild(modalBG)


const boutonEnvoyer = document.querySelector("form button")
boutonEnvoyer.addEventListener("click", function(e) {
    e.preventDefault()
    closeModal()
})




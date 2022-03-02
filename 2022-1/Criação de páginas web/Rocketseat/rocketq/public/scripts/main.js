import Modal from "./modal.js"

const modal = Modal()

const deleteButtons = document.querySelectorAll(".actions a.delete")

// opens modal when clicking to remove a question
deleteButtons.forEach(button => {
    button.addEventListener("click", event => { modal.open() } )
})


// closes the modal once it's open
document.getElementById("close-modal").addEventListener("click", event => {modal.close()})


// Make another modal for the checkmark button lmao
const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalActionButton = document.querySelector(".modal .buttons button")



const checkButtons = document.querySelectorAll(".actions .check")
checkButtons.forEach(button => {
    button.addEventListener("click", event => {
        
        modalTitle.innerHTML = "Marcar como lida"
        modalDescription.innerHTML = "Confirmar pergunta como lida?"
        modalActionButton.className = "button"
        modalActionButton.innerHTML = "Confirmar"
    
        modal.open()
    
    })
})
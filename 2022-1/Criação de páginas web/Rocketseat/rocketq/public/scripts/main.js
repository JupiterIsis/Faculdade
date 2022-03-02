import Modal from "./modal.js"

const modal = Modal()

const deleteButtons = document.querySelectorAll(".actions a.delete")

// Make another modal for the checkmark button lmao
const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalActionButton = document.querySelector(".modal .buttons button")



// opens modal when clicking to remove a question
deleteButtons.forEach(button => {
    button.addEventListener("click", handleClick(event))
})


// closes the modal once it's open
document.getElementById("close-modal").addEventListener("click", event => {modal.close()})


const checkButtons = document.querySelectorAll(".actions .check")
checkButtons.forEach(button => {
    button.addEventListener("click", handleClick(event, true))
})

function handleClick(event, check = false){
        modalActionButton.className = check ? "button" : "red"
        modalTitle.innerHTML = check ? "Marcar como lida" : "Excluir pergunta"
        modalDescription.innerHTML = check ? "Quer mesmo marcar pergunta como lida?" : "Tem certeza que deseja excluir essa pergunta?"
        modalActionButton.innerHTML = check ? "Confirmar" : "Sim, excluir"
    
        modal.open()
}
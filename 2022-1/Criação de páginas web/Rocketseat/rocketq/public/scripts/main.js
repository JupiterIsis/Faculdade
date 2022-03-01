import Modal from "./modal.js"

const modal = Modal()

const deleteButtons = document.querySelectorAll(".actions a.delete")

// opens modal when clicking to remove a question
deleteButtons.forEach(button => {
    button.addEventListener("click", event => { modal.open() } )
})


// closes the modal once it's open
document.getElementById("close-modal").addEventListener("click", event => {modal.close()})

const checkButtons = document.querySelectorAll(".actions .check")
checkButtons.forEach(button => {
    button.addEventListener("click", event => {modal.open()})
})
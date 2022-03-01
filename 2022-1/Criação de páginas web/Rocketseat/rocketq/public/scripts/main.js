import Modal from "./modal.js"

const modal = Modal()

const rmvButtons = document.querySelectorAll(".actions a.delete")

// opens modal when clicking to remove a question
rmvButtons.forEach(button => {
    button.addEventListener("click", event => { modal.open() } )
})


// closes the modal once it's open
document.getElementById("close-modal").addEventListener("click", event => {modal.close()})



aa

import { Modal } from "./modal"

const modal = Modal()

const rmvButtons = document.querySelectorAll(".actions a.delete")
rmvButtons.forEach((button) => {
    button.addEventListener("click", event => {modal.open()})
})




module.exports = function Modal(){
    modal = document.querySelector(".modal-wrapper")

    function open(){
        modal.classList.add("active")
    }
    function close(){
        modal.classList.remove("active")

    }
    
    return(
        open, close
    )
}
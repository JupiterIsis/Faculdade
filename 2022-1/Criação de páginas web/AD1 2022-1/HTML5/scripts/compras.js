import {lista_memorias, lista_hds} from "./produtos";   

function populateListeners(){
    const options = document.querySelectorAll("option")
    options.forEach(element => {
        element.addEventListener("click", (e) => {
            sumPrice(element)
        })
        
    });
}

function sumPrice(element){
    const campoValor = document.querySelector("[name=valor]")
    console.log(element.data.type)
    // switch(element.data.type
}
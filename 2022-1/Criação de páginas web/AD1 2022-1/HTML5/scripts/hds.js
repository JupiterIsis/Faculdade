import {lista_hds} from "./produtos"

function addEventListeners(){
    const hds = document.querySelectorAll(".hd")
    hds.forEach(element => {
        element.addEventListener("click", (e)=> {
            e.preventDefault()
            populateDescription(element.dataset.index)
        })
    });
       
        
}


function populateDescription(hdIndex){

    const fabricante = document.getElementById("titDes")
    const img = document.getElementById("imgDes")
    const inter_hd = document.getElementById("interface")
    const capacidade = document.getElementById("capacidade")
    const preco = document.getElementById("preco")

    fabricante.innerHTML = lista_hds[hdIndex].fabricante
    img.src = lista_hds[hdIndex].src
    inter_hd.innerHTML = "Interface: " + lista_hds[hdIndex].interface
    capacidade.innerHTML = "Capacidade: " + lista_hds[hdIndex].capacidade
    preco.innerHTML = "Preço: R$ <span class='precoDes'>" + lista_hds[hdIndex].preco + "</span>"

}
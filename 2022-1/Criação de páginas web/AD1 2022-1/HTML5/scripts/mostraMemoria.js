import { lista_memorias } from "./produtos";

// preenche os campos HTML com as informações adequadas
function populateHTML(){
    // pega os query params, transforma em URLSearchParams obj, pega o valor da chave "index" e transforma em int
    var indexMemoria = parseInt(new URLSearchParams(location.search).get("index"));

    var tipo = document.getElementById("tipo");
    var imgMemoria = document.getElementById("imgMemoria");
    var fabricante = document.getElementById("fabricante");
    var capacidade = document.getElementById("capacidade");
    var preco = document.getElementById("preco");
    
    console.log(tipo)
    
    tipo.innerHTML = "Tipo " + lista_memorias[indexMemoria].tipo
    imgMemoria.src = lista_memorias[indexMemoria].src
    fabricante.innerText = "Fabricante: " + lista_memorias[indexMemoria].fabricante
    capacidade.innerText = "Capacidade: " + lista_memorias[indexMemoria].capacidade
    preco.innerText = "Preço: R$" + lista_memorias[indexMemoria].preco
}



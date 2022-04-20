
function abrirJanela(index){
    let memorias = document.querySelectorAll(".link_memoria");
    window.open(
        url="memorias/showMemory.html?index=" + index,
        target= memorias[index].innerHTML,
        features= 'height=450,width=225,left=100,top=100'
        );
    return false; 
}
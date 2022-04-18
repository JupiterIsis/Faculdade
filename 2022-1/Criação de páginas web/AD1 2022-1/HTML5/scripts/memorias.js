
function abrirJanela(index){
    let memorias = document.querySelectorAll(".link_memoria");
    console.log(memorias)
    window.open(
        url="memorias/showMemory.html?index=" + index,
        target= memorias[index].innerHTML,
        features= 'height=500,width=400,left=100,top=100'
        );
    return false; 
}
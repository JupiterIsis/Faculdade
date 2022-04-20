
function addEventListeners(){
    const nums = document.querySelectorAll(".num")
    nums.forEach(element => {
        element.addEventListener("blur", ()=>{
            verificaNum(element.name)
        })
    });
}

function verificaNum(name){
    value = document.querySelector(`[name=${name}]`).value

    switch(name){
        case "telefone":
            if (!(!isNaN(value) && value.length == 8)){
                alert("O telefone precisa conter 8 números!")
                }
            break;
                
        case "celular":
            if (!(!isNaN(value) && value.length == 9)){
                alert("O celular precisa conter 9 números!")
                }
            break;
    }
}

const lista_memorias = [
    {
        tipo:"DDR3",
        src: "/assets/Mem_Kingston_4gb_200.jpg",
        fabricante:"Kingston",
        capacidade: "4Gb",
        preco: "150,00",
        
    },
    {
        tipo:"DDR3",
        src: "/assets/Mem_Samsung_8g_200.jpg",
        fabricante: "Samsung",
        capacidade: "8Gb",
        preco:"300,00"
    },
    {
        tipo: "DDR4",
        src: "/assets/Mem_Fury_8gb_200.jpg",
        fabricante: "Kingston Fury",
        capacidade: "8Gb",
        preco:"250,00"
    },
    {
        tipo: "DDR4",
        src: "/assets/Mem_Corsair_8gb_200.jpg",
        fabricante: "Corsair Vengeance",
        capacidade: "8Gb",
        preco:"270,00"
    }
]
const lista_hds = [
    {   
        fabricante: "Western Digital",
        src: "/assets/HD_WD_500gb_70.jpg",
        interface: "HD SATA III",
        capacidade: "500 Gb",
        preco: "170,00"
    },
    {   
        fabricante: "Seagate",
        src: "/assets/HD_Seagate_1Tb_70.jpg",
        interface: "HD SATA III",
        capacidade: "1 Tb",
        preco: "350,00"
    },
    {   
        fabricante: "Samdisk",
        src: "/assets/SSD_Samdisk_480Gb_70.jpg",
        interface: "SSD SATA III",
        capacidade: "480 Gb",
        preco: "380,00"
    },
    {   
        fabricante: "Kingston",
        src: "/assets/SSD_Kingston_960Gb_70.jpg",
        interface: "SSD SATA III",
        capacidade: "960 Gb",
        preco: "700,00"
    },
    {   
        fabricante: "Kingston",
        src: "/assets/SSD_Kingston_M2_5000Gb_70.jpg",
        interface: "SSD M2",
        capacidade: "500 Gb",
        preco: "410,00"
    },
    {   
        fabricante: "Western Digital",
        src: "/assets/SSD_WD_M2_240Gb_70.jpg",
        interface: "SSD M2",
        capacidade: "240 Gb",
        preco: "270,00"
    },
]

let preco, texto; 
function populateListeners(){
    const options = document.querySelectorAll("option")
    options.forEach(element => {
        element.addEventListener("click", (e) => {
            setProductFields(element)
        })
        
        
    });
    const buttonApply = document.querySelector("[name=applyFields]")
    buttonApply.addEventListener("click", (e) => {
        e.preventDefault()
        applyProductFields(preco, texto)

    })
}


function setProductFields(element){
    if (element.value == "-----"){
        preco = undefined
        texto = undefined
    }
    switch(element.dataset.type){
        case "memoria":
            preco = parseInt(lista_memorias[element.dataset.index].preco)
            texto = "Memória " + lista_memorias[element.dataset.index].fabricante + " " + lista_memorias[element.dataset.index].capacidade + "\n"
            break;
        case "hd":
            preco = parseInt(lista_hds[element.dataset.index].preco)
            texto = lista_hds[element.dataset.index].interface + " " + lista_hds[element.dataset.index].fabricante + " " + lista_hds[element.dataset.index].capacidade + "\n"
            break;
        }
    campoValor.value = parseInt(campoValor.value) + preco
    campoTexto.value = campoTexto.value + texto
    // switch(element.data.type
}

function applyProductFields(preco, texto){
    const campoValor = document.querySelector("[name=valor]")
    const campoTexto = document.querySelector("[name=lista-produtos]")

    if (texto){
        campoValor.value = String(parseInt(campoValor.value) + preco) + ",00"
        campoTexto.value = campoTexto.value + texto
        
    } else {
        alert("Nenhum produto selecionado!")
    }

}
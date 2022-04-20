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
    const interface = document.getElementById("interface")
    const capacidade = document.getElementById("capacidade")
    const preco = document.getElementById("preco")

    fabricante.innerHTML = lista_hds[hdIndex].fabricante
    img.src = lista_hds[hdIndex].src
    interface.innerHTML = "Interface: " + lista_hds[hdIndex].interface
    capacidade.innerHTML = "Capacidade: " + lista_hds[hdIndex].capacidade
    preco.innerHTML = "Preço: R$ <span class='precoDes'>" + lista_hds[hdIndex].preco + "</span>"

}
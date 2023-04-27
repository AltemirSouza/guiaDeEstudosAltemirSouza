const lista = [1,2,3,4,5,6,7,8,9]

const carros = [
    {
        marca:"Fiat",
        modelo:"Uno",
        valor:100
    },

    {
        marca:"Ford",
        modelo:"Gol",
        valor:150
    },

    {
        marca:"BMW",
        modelo:"X1",
        valor:200
    },

    {
        marca:"Toyota",
        modelo:"Corola",
        valor:230
    },
]

const maior = lista.filter((el)=>{
    return el > 4
})



const dv1 = document.getElementById("dv1")
const dv2 = document.getElementById("dv2")


for (const todos of lista) {
    const p = document.createElement("p")
    p.appendChild(document.createTextNode(todos))

    dv1.appendChild(p)
}

for (const num of maior) {
    const p = document.createElement("p")
    p.appendChild(document.createTextNode(num))
    
    dv2.appendChild(p)
}

//adicionar a lista de carros completa

const dv3 = document.getElementById("dv3")
const dv4 = document.getElementById("dv4")
const btn = document.getElementById("btn")
const br = document.createElement("br")


for(let carro of carros){
    const p = document.createElement("p")
    const br = document.createElement("br")
    dv3.appendChild(p)
    dv3.insertBefore(br,p)
    
    p.appendChild(document.createTextNode("Marca: " + carro.marca + " - "))
    p.appendChild(document.createTextNode("Modelo: " + carro.modelo + " - ",))
    p.appendChild(document.createTextNode("valor: " + carro.valor))
    
}

btn.addEventListener("click",()=>{

    const filtro = carros.filter((el)=>{
        return el.valor >= 200 
    })
    
    
    for (const el of filtro) {
        const p = document.createElement("p")
        const br = document.createElement("br")
        dv4.appendChild(p)
        dv4.insertBefore(br,p)
        
        p.appendChild(document.createTextNode("Marca: " + el.marca + " - "))
        p.appendChild(document.createTextNode("Modelo: " + el.modelo + " - ",))
        p.appendChild(document.createTextNode("valor: " + el.valor))
    }
})
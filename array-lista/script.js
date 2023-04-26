const dv1 = document.getElementById("dv1")
const dv2 = document.getElementById("dv2")
const dv3 = document.getElementById("dv3")
let btn = document.getElementById("btn")

const nomes = ["Ana", "Maria", "Pedro", "Thiago"]
const sobrenomes = ["Silva", "Souza", "Pimentel", "Pedrosa"]



//cria a lista dos nomes

let lista1 = document.createElement("ul")


for(let item of nomes){

let li =  document.createElement("li")

li.appendChild(document.createTextNode(item))


lista1.appendChild(li)
}

dv1.appendChild(lista1)


//cria a lista dos sobrenomes

let lista2 = document.createElement("ul")

for(let item of sobrenomes){
    let li = document.createElement("li")

    li.appendChild(document.createTextNode(item))
    

    lista2.appendChild(li)
}

dv2.appendChild(lista2)

// listar todos li
const listaCompleta = [...document.querySelectorAll("li")]


//atribuir a classe .destaque a todos os li quando clicado
listaCompleta.map((el)=>{
 el.addEventListener("click",(evt)=>{
    const el=evt.target
    el.classList.toggle("destaque")
       
 })
})

//quem estiver com a classe .destaque, vai para dv3
btn.addEventListener("click",()=>{
    const destacado = [...document.querySelectorAll(".destaque")]

    destacado.map((el)=>{
        dv3.appendChild(el)
    })
})

var tema = 0
var bod = document.getElementById("body")
var botao = document.getElementById("teste")
var link1 = document.getElementById("a")
var link2 = document.getElementById("b")
var link3 = document.getElementById("c")
var link4 = document.getElementById("d")
var link5 = document.getElementById("e")
var nave = document.getElementById("nav")
var titulo = document.getElementById("augusto")

function mudar() {

    if (tema == 0) {
        bod.style.backgroundColor = "#383838"
        teste.innerHTML = 'Light Theme'
        botao.style.border = "1px solid #f5f5f5"
        botao.style.backgroundColor = "#383838"
        botao.style.color = "#f5f5f5"
        link1.style.color="#f5f5f5"
        link2.style.color="#f5f5f5"
        link3.style.color="#f5f5f5"
        link4.style.color="#f5f5f5"
        // link5.style.color="#f5f5f5"
        nave.style.borderBottom="1px solid #f5f5f5"
        titulo.style.color="#f5f5f5"
        tema = 1

    } else {
        // add class css  
        bod.style.backgroundColor = "#f5f5f5"
        teste.innerHTML = 'Dark Theme'
        botao.style.border = "1px solid #383838"
        botao.style.backgroundColor = "#f5f5f5"
        botao.style.color = "#383838"
        link1.style.color="#383838"
        link2.style.color="#383838"
        link3.style.color="#383838"
        link4.style.color="#383838"
        // link5.style.color="#383838"
        nave.style.borderBottom="1px solid #383838"
        titulo.style.color="#383838"
        tema = 0
    }
}


function comprar() {
    
}

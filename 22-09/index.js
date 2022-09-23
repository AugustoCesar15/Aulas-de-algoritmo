var tema = 0
var bod = document.getElementById("body")
var botao = document.getElementById("teste")
var link1 = document.getElementById("a"); var link2 = document.getElementById("b"); var link3 = document.getElementById("c"); var link4 = document.getElementById("d"); var link5 = document.getElementById("e"); var link6 = document.getElementById("f"); var link7 = document.getElementById("g"); var link8 = document.getElementById("h"); var link9 = document.getElementById("i"); var link10 = document.getElementById("j"); var link11 = document.getElementById("k"); var link12 = document.getElementById("l"); var link13 = document.getElementById("m"); var link14 = document.getElementById("n")
var nave = document.getElementById("nav")
var titulo = document.getElementById("augusto")
var caixa = document.getElementById("ativi")
var titulo2 = document.getElementById("tituloCaixa")
var testos = document.getElementById("textoCaixa")
var testo = document.getElementById("textoCaix")
var inp = document.getElementById("input1")
var inp2 = document.getElementById("input2")

function mudar() {

    if (tema == 0) {
        // Nav
        bod.style.backgroundColor = "#383838"
        teste.innerHTML = 'Light Theme'
        botao.style.border = "1px solid #f5f5f5"
        botao.style.backgroundColor = "#383838"
        botao.style.color = "#f5f5f5"
        link1.style.color="#f5f5f5"
        link2.style.color="#f5f5f5"
        link3.style.color="#f5f5f5"
        link4.style.color="#f5f5f5"
        link5.style.color="#f5f5f5"
        link6.style.color="#f5f5f5"
        link7.style.color="#f5f5f5"
        link8.style.color="#f5f5f5"
        link9.style.color="#f5f5f5"
        link10.style.color="#f5f5f5"
        link11.style.color="#f5f5f5"
        link12.style.color="#f5f5f5"
        link13.style.color="#f5f5f5"
        link14.style.color="#f5f5f5"
        nave.style.borderBottom="1px solid #f5f5f5"
        // Container
        titulo.style.color="#f5f5f5"
        caixa.style.boxShadow="-20px 20px 20px rgb(172, 19, 19)"
        caixa.style.backgroundColor="#f5f5f5"
        caixa.style.color="#383838"
        testos.style.color="#383838"
        testo.style.color="#383838"
        titulo2.style.color="#383838"
        inp.style.border="2px solid #383838"
        inp.style.color="#383838"
        inp2.style.border="2px solid #383838"
        inp2.style.color="#383838"
        tema = 1

    } else {
        // add class css  
        // NavBAr
        bod.style.backgroundColor = "#f5f5f5"
        teste.innerHTML = 'Dark Theme'
        botao.style.border = "1px solid #383838"
        botao.style.backgroundColor = "#f5f5f5"
        botao.style.color = "#383838"
        link1.style.color="#383838"
        link2.style.color="#383838"
        link3.style.color="#383838"
        link4.style.color="#383838"
        link5.style.color="#383838"
        link6.style.color="#383838"
        link7.style.color="#383838"
        link8.style.color="#383838"
        link9.style.color="#383838"
        link10.style.color="#383838"
        link11.style.color="#383838"
        link12.style.color="#383838"
        link13.style.color="#383838"
        link14.style.color="#383838"
        // Container
        nave.style.borderBottom="1px solid #383838"
        titulo.style.color="#383838"
        caixa.style.boxShadow="20px 20px 20px rgb(172, 19, 19)"
        caixa.style.backgroundColor="#383838"
        caixa.style.color="#f5f5f5"
        testos.style.color="#f5f5f5"
        testo.style.color="#f5f5f5"
        titulo2.style.color="#f5f5f5"
        inp.style.border="2px solid #f5f5f5"
        inp.style.color="#f5f5f5"
        inp2.style.border="2px solid #f5f5f5"
        inp2.style.color="#f5f5f5"
        tema = 0
    }
}

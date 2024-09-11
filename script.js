const quadrados = document.querySelectorAll("td")


function clicarQuadro (idQuadro) {
    
    const quadro = document.getElementById(idQuadro)
    const jogadaAtual = definirJogador()

    if (quadro.innerHTML === "X" || quadro.innerHTML === "O") {
        console.log("Quadrado já preenchido")
        return
    }

    console.log("Quadrado de ID = " + idQuadro + " clicado")
    quadro.innerHTML = jogadaAtual
    
    const vitoria = verificarVitoria(quadrados)
    
    if (vitoria) {
        alert("Vitoria do jogador: " + jogadaAtual)

    } else {
        verificarEmpate(quadrados)
    }
}


function verificarVitoria(quadrados) {
    const combinacoesVitoria = [
        
        [quadrados[0], quadrados[1], quadrados[2]], // Linha 1
        [quadrados[3], quadrados[4], quadrados[5]], // Linha 2
        [quadrados[6], quadrados[7], quadrados[8]], // Linha 3
        // Colunas
        [quadrados[0], quadrados[3], quadrados[6]], // Coluna 1
        [quadrados[1], quadrados[4], quadrados[7]], // Coluna 2
        [quadrados[2], quadrados[5], quadrados[8]], // Coluna 3
        // Diagonais
        [quadrados[0], quadrados[4], quadrados[8]], // Diagonal esquerda para a direita
        [quadrados[2], quadrados[4], quadrados[6]] // Diagonal direita para a esquerda
    ]


    for (const combinacao of combinacoesVitoria) {
        const [quadroA, quadroB, quadroC] = combinacao

        if (quadroA.innerHTML && quadroA.innerHTML === quadroB.innerHTML && quadroA.innerHTML === quadroC.innerHTML) {
            return true 
        }
    }
    return false
}



function verificarEmpate(quadrados) {
    let preenchidos = 0

    for (const quadro of quadrados) {
        if (quadro.innerHTML === "X" || quadro.innerHTML === "O") {
            preenchidos++
        }
    }

    if (preenchidos === 9) {
        alert("Empate!!")
    }
}



function definirJogador () {

    if (jogadorAtual === "X") {
        jogadorAtual = "O"
        return jogadorAtual
    }
    jogadorAtual = "X"
    return jogadorAtual
}


function reiniciarTabela () {

    for (quadro of quadrados) {
        quadro.innerHTML = ""
    }
    return
}

let jogadorAtual = ""
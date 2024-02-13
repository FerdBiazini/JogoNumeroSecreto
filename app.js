//Titulo Principal site
//let titulo = document.querySelector ("h1");
//titulo.innerHTML = "Jogo do número secreto";
//Paragrafo Escolha de 1 a 10
//let paragrafo = document.querySelector ("p");
//paragrafo.innerHTML = "Escolha seu numero de 1 e 10";


// Lista de numero sorteado
let listaDeNumeroSorteado = [];
let numeroLimite = 10

//Gerar o numero aleatorio
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

//Exibir no HTML
function exibirTextoNaTela (tag, Texto) {
let campo = document.querySelector(tag);
campo.innerHTML = Texto
responsiveVoice.speak (Texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela ("h1", "Jogo do Número Secreto");
    exibirTextoNaTela ("p", "Escolha seu número entre 1 e 10");

} 
exibirMensagemInicial();

//Ação ao clicar no botão chutar
    function verificarChute() {
        let chute = document.querySelector ("input").value;
        console.log(chute == numeroSecreto);
        if (numeroSecreto == chute){
            exibirTextoNaTela ("h1", "Acertou!");
            let palavraTentativa = tentativas > 1 ? ' tentativas' : ' tentativa';
            let mensagemTentativas = "Parabéns você achou o número secreto com " +tentativas +palavraTentativa;
            exibirTextoNaTela ("p", mensagemTentativas);
            document.getElementById ("reiniciar").removeAttribute ("disabled");
        }
        else {
            if (chute > numeroSecreto) { 
                exibirTextoNaTela ("p", "Número secreto é MENOR");
            }
             else {
                exibirTextoNaTela ("p", "Número secreto é MAIOR");
            }
            tentativas++;
            limparCampo();
        }    
};
function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1);
    let quantidadeElementosLista = listaDeNumeroSorteado.length;
    if (quantidadeElementosLista == numeroLimite) {
        listaDeNumeroSorteado = []
    }

    if (listaDeNumeroSorteado.includes (numeroEscolhido)) {;
        return gerarNumeroAleatorio();
    }else {
        listaDeNumeroSorteado.push(numeroEscolhido);
        console.log (listaDeNumeroSorteado);
        return numeroEscolhido;
    }
};

// Limpar Campo
function limparCampo () {
    chute = document.querySelector ("input")
    chute.value = "";
};

//reiniciar Jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo ();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById ("reiniciar").setAttribute ("disabled", true)
};

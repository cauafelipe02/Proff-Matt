// Funções de "Máquinas repetitivas", faxina e transição de cenas
import { UI } from './UI.js';

// Funções para limpeza e voltar páginas

export function prepararCena(pose, textoFala) {
    limparPalco(); // Primeiro limpa tudo...
    
    // ...depois configura o Professor
    UI.sprite.className = '';
    UI.sprite.classList.add(pose);
    UI.fala.innerText = textoFala;
}

export function limparPalco() {
    UI.menu.classList.add('escondido');
    UI.form.classList.remove('escondido');
    
    // Limpa os conteúdos dinâmicos para a nova aba
    UI.resumo.innerHTML = "";
    UI.inputs.innerHTML = "";
    UI.resultado.innerText = "";

    // limpa o botão antes de adicionar um novo evento (importante para evitar múltiplos eventos acumulados)
    UI.btnVoltarPagina.removeEventListener('click', resetar);
    UI.btnVoltarPagina.removeEventListener('click', irParaCalculo);

    // adiciona ao botão de voltar o evento de clique que chama a função de resetar e configura seu texto
    UI.btnVoltarPagina.addEventListener('click', resetar);
    UI.btnVoltarPagina.textContent = "Voltar ao Inicio";
}

export function resetar() {
    location.reload(); 
}

export function voltarCalculo() {
    UI.btnVoltarPagina.removeEventListener('click', resetar);
    UI.btnVoltarPagina.removeEventListener('click', irParaCalculo);

    UI.btnVoltarPagina.addEventListener('click', irParaCalculo);
    UI.btnVoltarPagina.textContent = "Voltar";
}

function irParaCalculo() {
    window.mudarCena('calculo');
}

export function validarInputsEBotao(...valores) {
    // Remove o botão de tentar novamente caso ele exista para evitar múltiplos botões
    document.getElementById("btn-tentar-novamente")?.remove();

    if(valores.some(valor => valor.trim() === "")) {
            UI.resultado.innerText = "Por favor, insira um valor válido.";
            mostrarNeutro();
            criarBotaoTentarNovamente();
            return true; // Retorna true se a validação falhar
        }
    return false; // Retorna false se a validação passar
}

// Funções para criar o botão de tentar novamente e para limpar os inputs

export function criarBotaoTentarNovamente() {
    let botao = document.createElement("button");
    botao.id = "btn-tentar-novamente";
    botao.classList.add("btn-tentar-novamente-style");
    botao.textContent = "Tentar novamente";
    
    // Como estamos em módulos, usamos a referência direta da função importada
    botao.addEventListener('click', tentarNovamente);
    UI.inputs.appendChild(botao);
}

export function tentarNovamente() {
    document.getElementById('valA').value = "";
    document.getElementById('valB').value = "";
    document.getElementById('valC').value = "";
    UI.resultado.innerText = "";

    UI.sprite.className = 'pose-inicial';
    UI.balaoFala.style.cssText = `
        width: 250px;
        margin-right: 15px;
        margin-top: 5px;
    `;
    UI.fala.innerHTML = `<p>Entender a lógica é o primeiro passo, vamos tentar novamente?</p>`;

    document.getElementById("btn-tentar-novamente")?.remove();
}

// Funções de mudar de imagem
export function mostrarSucesso() {
    UI.sprite.className = 'pose-sucesso';
    UI.fala.innerText = "Excelente! Você dominou essa lógica!";
}

export function mostrarFrustracao() {
    UI.sprite.className = 'pose-triste';
    UI.fala.innerText = "Ops, vamos tentar de novo?";
}

export function mostrarNeutro() {
    UI.sprite.className = 'pose-neutra';
    UI.fala.innerText = "Hmm, parece que algo não está certo. Tente novamente!";
}

// função de escolher operação

// ela armazena o valor capturado no input que está selecionado e chama 
// a função de mudarCena passando esse valor para que a cena correta seja exibida
export function escolherOperacao() {
    const operacao = document.querySelector('input[name="operacao"]:checked');

    if (operacao) {
        window.mudarCena(operacao.value);
    } else {
        alert("Por favor, selecione uma operação para continuar.");
    }
}
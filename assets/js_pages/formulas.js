// Funções que processam dados ou calculam resultados
import { UI } from './UI.js';
import { mostrarSucesso, 
        mostrarFrustracao, 
        mostrarNeutro, 
        criarBotaoTentarNovamente, 
        validarInputsEBotao } from './engine.js';

export function calcularAND() {
    const aRaw = document.getElementById('valA').value;
    const bRaw = document.getElementById('valB').value;

    // Validação dos inputs e limpeza do botão
    if (validarInputsEBotao(aRaw, bRaw)) return;

    const a = Number(aRaw);
    const b = Number(bRaw);

    if (a === 1 && b === 1) {
        UI.resultado.innerText = "Resultado: (1) Verdadeiro."
        mostrarSucesso(); // chama a função que mostra a imagem de sucesso
    } else {
        UI.resultado.innerText = "Resultado: (0) Falso."
        mostrarFrustracao(); // chama a função que mostra a imagem de frustração
    }
    // adiciona botão no final do bloco de inputs
    criarBotaoTentarNovamente();
}

export function calcularSoma() {
    const aRaw = document.getElementById('valA').value;
    const bRaw = document.getElementById('valB').value;

    if (validarInputsEBotao(aRaw, bRaw)) return;

    const a = Number(aRaw);
    const b = Number(bRaw);
    let soma = a + b;
    UI.resultado.innerText = `Resultado: ${soma.toFixed(2)}`;
    mostrarSucesso();
    criarBotaoTentarNovamente();
}

export function calcularSubtracao() {
    const aRaw = document.getElementById('valA').value;
    const bRaw = document.getElementById('valB').value;

    if (validarInputsEBotao(aRaw, bRaw)) return;

    const a = Number(aRaw);
    const b = Number(bRaw);
    let subtracao = a - b;
    UI.resultado.innerText = `Resultado: ${subtracao.toFixed(2)}`;
    mostrarSucesso();
    criarBotaoTentarNovamente();
}

export function calcularMultiplicacao() {
    const aRaw = document.getElementById('valA').value;
    const bRaw = document.getElementById('valB').value;

    if (validarInputsEBotao(aRaw, bRaw)) return;

    const a = Number(aRaw);
    const b = Number(bRaw);
    let multiplicacao = a * b;
    UI.resultado.innerText = `Resultado: ${multiplicacao.toFixed(2)}`;
    mostrarSucesso();
    criarBotaoTentarNovamente();
}

export function calcularDivisao() {
    const aRaw = document.getElementById('valA').value;
    const bRaw = document.getElementById('valB').value;

    if (validarInputsEBotao(aRaw, bRaw)) return;

    const a = Number(aRaw);
    const b = Number(bRaw);
    let divisao = a / b;
    UI.resultado.innerText = `Resultado: ${divisao.toFixed(2)}`;
    mostrarSucesso();
    criarBotaoTentarNovamente();
}

export function calcularExpressao() {
    const aRaw = document.getElementById('valA').value;
    const bRaw = document.getElementById('valB').value;
    const cRaw = document.getElementById('valC').value;

    if (validarInputsEBotao(aRaw, bRaw, cRaw)) return;

    const a = Number(aRaw);
    const b = Number(bRaw);
    const c = Number(cRaw);
    let delta = b**2 - 4*a*c;

    if (delta >= 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2*a);
        let x2 = (-b - Math.sqrt(delta)) / (2*a);
        UI.resultado.innerHTML = `<p>Resultados:<br> Delta = ${delta.toFixed(2)} <br> x1 = ${x1.toFixed(2)} <br> x2 = ${x2.toFixed(2)}</p>`;
    } else {
        UI.resultado.innerText = "Resultado: A expressão não possui raízes reais.";
    }
    mostrarSucesso();
    criarBotaoTentarNovamente();
}
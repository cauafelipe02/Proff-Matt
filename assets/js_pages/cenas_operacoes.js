// Guarda as diferentes cenas do site, cada função é responsável por configurar a cena de um conteúdo específico
import {UI} from './UI.js';
import {prepararCena, voltarCalculo} from './engine.js';
import { calcularSoma, 
    calcularSubtracao, 
    calcularMultiplicacao, 
    calcularDivisao,
    calcularExpressao } from './formulas.js';

export function fazerSoma() {
    prepararCena('pose-inicial', "Beleza, vamos somar!!");

    UI.inputs.innerHTML = `
        <div style="display: flex; gap: 10px; align-items: center;">
            <label style="font-weight: 500; ">Insira os números:</label>
            <input type="number" id="valA" placeholder="a">
            <input type="number" id="valB" placeholder="b">
            <button type="button" class="btn-js" id="btn-somar">Somar</button>
        </div>
    `;

    document.getElementById('btn-somar')
        .addEventListener('click', calcularSoma);

    voltarCalculo();
}

export function fazerSubtracao() {
    prepararCena('pose-inicial', "Beleza, vamos subtrair!!");

    UI.inputs.innerHTML = `
        <div style="display: flex; gap: 10px; align-items: center;">
            <label style="font-weight: 500; ">Insira os números:</label>
            <input type="number" id="valA" placeholder="a">
            <input type="number" id="valB" placeholder="b">
            <button type="button" class="btn-js" id="btn-subtrair">Subtrair</button>
        </div>
    `;

    document.getElementById('btn-subtrair')
        .addEventListener('click', calcularSubtracao);

    voltarCalculo();
}

export function fazerMultiplicacao() {
    prepararCena('pose-inicial', "Beleza, vamos multiplicar!!");

    UI.inputs.innerHTML = `
        <div style="display: flex; gap: 10px; align-items: center;">
            <label style="font-weight: 500; ">Insira os números:</label>
            <input type="number" id="valA" placeholder="a">
            <input type="number" id="valB" placeholder="b">
            <button type="button" class="btn-js" id="btn-multiplicar">Multiplicar</button>
        </div>
    `;

    document.getElementById('btn-multiplicar')
        .addEventListener('click', calcularMultiplicacao);

    voltarCalculo();
}

export function fazerDivisao() {
    prepararCena('pose-inicial', "Beleza, vamos dividir!!");

    UI.inputs.innerHTML = `
        <div style="display: flex; gap: 10px; align-items: center;">
            <label style="font-weight: 500; ">Insira os números:</label>
            <input type="number" id="valA" placeholder="a">
            <input type="number" id="valB" placeholder="b">
            <button type="button" class="btn-js" id="btn-dividir">Dividir</button>
        </div>
    `;

    document.getElementById('btn-dividir')
        .addEventListener('click', calcularDivisao);

    voltarCalculo();
}

export function fazerExpressao() {
    prepararCena('pose-inicial', "Beleza, vamos resolver uma expressão!");

    UI.inputs.innerHTML = `
        <div style="display: flex; gap: 10px; align-items: center;">
            <label style="font-weight: 500; ">Insira os números:</label>
            <input type="number" id="valA" placeholder="a">
            <input type="number" id="valB" placeholder="b">
            <input type="number" id="valC" placeholder="c">
            <button type="button" class="btn-js" id="btn-expressao">Resolver</button>
        </div>
    `;

    document.getElementById('btn-expressao')
        .addEventListener('click', calcularExpressao);

    voltarCalculo();
}
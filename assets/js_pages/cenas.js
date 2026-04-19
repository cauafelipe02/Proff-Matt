// Guarda as diferentes cenas do site, cada função é responsável por configurar a cena de um conteúdo específico
import {UI} from './UI.js';
import {escolherOperacao, prepararCena} from './engine.js';
import { calcularAND } from './formulas.js';

export function mudarBooleana() {
    // 1. A função prepararCena já faz a faxina e troca a pose/fala por você!
    prepararCena('pose-explicando', "Vamos falar sobre álgebra booleana?");

    // Altera a margem do balão de fala
    UI.balaoFala.style.marginRight = "20px";

    // Insere o resumo grande sobre o conteúdo:
    UI.resumo.innerHTML = `
        <article class="estilizacao-texto">
            <h2>Álgebra Booleana</h2>
            <p>Na álgebra booleana, operamos com proposições (sentenças que só podem ser verdadeiras ou falsas). Os conectores lógicos são funções que combinam essas proposições para gerar um resultado final, os principais conectores são:</p>
            <p>1. Conector AND (E / . ) - Interseção: funciona como um circuito em série, ou seja, se o interruptor falhar, a luz não ascende. Com esse operador, o resultado só é verdadeiro (TRUE) se todas as entradas forem verdadeiras.
                Aplicação: Utilizado para validar muitas condições simultâneas (ex: *usuario_logado* AND *tem_permissao*).</p> 
            <p>2. Conector OR (Ou / +) - União: Mais flexivel, funciona como um circuito paralelo, se pelo menos um caminho estiver passando corrente, a luz ascende. O resultado é verdadeiro (TRUE) se PELO MENOS UMA entrada for verdadeira.
                Aplicação: Oferece alternativas (ex: *pagamento_cartao* OR *pagamento_pix*).</p>
            <p>3. Conector NOT (Não) - Complemento: é um operador unário (atua sobre apenas uma variável) ele funciona como um inversor lógico de valores. 
                Aplicação: Negar estados (ex: *not lista_vazia* para saber se há itens).</p>
            <p>4. Conector XOR (OU Exclusivo) - Diferença Simétrica: fundamental para cálculos binários. O resultado é verdadeiro (TRUE) apenas se as ENTRADAS forem DIFERENTES    
                Aplicação: Situações de exclusividade mútua (ex: um sistema onde o usuário pode ser 'Pessoa Física' ou 'Jurídica', mas nunca os dois ao mesmo tempo).</p>
        </article>
    `;

    // Insere a parte interativa "exercicios"
    UI.inputs.innerHTML = `
    <div style="display: flex; gap: 10px; align-items: center;">
        <label style="font-weight: 500; ">Teste a porta AND:</label>
            <input type="number" id="valA" placeholder="A" min="0" max="1">
            <input type="number" id="valB" placeholder="B" min="0" max="1">
        <button type="button" class="btn-js" id="btn-calcularAND">Verificar Lógica</button>
    </div>
    `;

    document.getElementById('btn-calcularAND')
        .addEventListener('click', calcularAND);
}

export function mudarConjunto() {
    prepararCena('pose-explicando', "Vamos falar sobre teoria de conjuntos?");

    UI.appContainer.style.alignItems = "center";
    UI.balaoFala.style.marginRight = "20px";
    UI.resumo.innerHTML = ` 
        <article class="estilizacao-texto">
            <h2>Teoria de Conjuntos</h2>
                <p>Um conjunto é uma coleção de objetos distintos, chamados de elementos, ex: listas. Na computação,
                tratamos conjuntos como estruturas de dados, onde a noção de “pertinência” indica se um elemento faz 
                parte ou não de um conjunto. Além disso, a ordem não importa e a duplicidade (quando a mesma informação 
                está escrita em dois lugares diferentes) é ignorada.<br>
                A seguir estão algumas definições básicas relacionadas com o conteúdo:</p>

                <p>- Pertinência (∈ ou  ∉): Indica que um objeto pertence ou não a um conjunto, ex: 2 ∈ A (número 2 pertence a conjunto A) e 3 ∉ A (número 3 não pertence a conjunto A).</p>
                <p>- Conjunto vazio (∅ ou {} ): Um conjunto sem elementos. É fundamental para representar buscas sem resultados. Além disso, todo conjunto vazio é subconjunto de um conjunto.</p>
                <p>- Conjunto Universo (U): Conjunto que contém todos os elementos possíveis dentro de um contexto.</p>
                <p>- Extensão (Enumeração): Quando listamos os elementos de um conjunto, ex: V = {1,a,3,4,b,c…}.</p>
                <p>- Compreensão (Predicado): Quando definimos uma regra lógica para aquele conjunto, ex: V = {x | x é um número par e x > 0}. Em programação isso está presente na List comprehensions (python) ou em filtros de arrays.</p>
                <p>- Subconjunto (⊆): É um conjunto cuja os elementos fazem parte de um conjunto maior, ex: Dizemos que A é um subconjunto de B ( A ⊆ B ) se cada elemento de A também for um elemento de B como em: A = {1,2} e B = {1,2,3,4} ou A = {} e B = {1,2,3,4}.</p>
                <p>- Conjunto das Partes ( P(A ): É o conjunto que contém todos os subconjuntos possíveis de um conjunto A, ex: Se A = {1,2,} então P(A) = {∅, {1}, {2}, {1,2} }.</p>
        </article>
    `;
}

export function mudarFuncoes() {
    prepararCena('pose-explicando', "Agora vamos estudar sobre Funções!");

    UI.resumo.innerHTML = ` 
        <article class="estilizacao-texto">
            <h2>Funções Matemáticas</h2>
            <p>As funções matemáticas são o alicerce da computação, servindo tanto para a construção de algoritmos simples quanto para a garantia de integridade em sistemas complexos. 
            Na programação, essas funções são abstraídas em bibliotecas como o objeto Math do JavaScript, permitindo que o hardware processe cálculos de alta precisão de forma eficiente.</p>

            <p>- Aritmética e Operadores Binários: A computação baseia-se na aritmética binária para realizar todas as suas operações internas. 
            Funções de resto (módulo %) são essenciais para determinar paridade, controlar ciclos em estruturas de repetição e distribuir dados em tabelas de dispersão (Hash Tables).</p>
            <p>- Álgebra Booleana: Fundamental para a lógica de programação e arquitetura de hardware. Através de funções lógicas (AND, OR, NOT, XOR), 
            o computador toma decisões, valida permissões de acesso e processa fluxos de controle em qualquer software.</p>
            <p>- Geometria Analítica e Trigonometria: Aplicadas intensamente no desenvolvimento de interfaces gráficas, jogos e processamento de imagens. 
            Funções como seno e cosseno (Math.sin, Math.cos) são usadas para calcular rotações, trajetórias de objetos e a renderização de elementos 
            visuais em diferentes resoluções.</p>
            <p>- Criptografia e Funções Exponenciais: A segurança da informação depende de funções matemáticas complexas, como exponenciação modular e logaritmos discretos. 
            A dificuldade de reverter essas funções garante que senhas e dados sensíveis permaneçam protegidos contra ataques de força bruta.</p>
            <p>- Análise de Algoritmos (Notação Big O): A matemática é usada para medir a eficiência de um código. Através de funções lineares, logarítmicas ou quadráticas, 
            os desenvolvedores conseguem prever como o tempo de execução e o consumo de memória de um sistema crescerão conforme o volume de dados aumenta.</p>
            <p>- Estatística e Probabilidade: Essenciais na computação moderna para o desenvolvimento de Inteligência Artificial e Machine Learning. 
            Funções estatísticas permitem que sistemas identifiquem padrões, filtrem spans e tomem decisões preditivas baseadas em grandes conjuntos de dados históricos.</p>
        </article>
    `;

    UI.inputs.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">
            
        </div>
    `;
}

export function mudarCalculo() {
    prepararCena('pose-calculando', "Vamos resolver algumas questões?");

    UI.resumo.classList.add('escondido'); // Esconde o resumo, pois nessa cena não é necessário
    UI.inputs.innerHTML = `
        <p style="font-weight: 600;">Informe a seguir a operação que deseja realizar:</p>
        <div class="coluna-opcoes">
            <input type="radio" id="soma" name="operacao" value="soma">
                <label for="soma">Soma</label>
            <input type="radio" id="subtracao" name="operacao" value="subtracao">
                <label for="subtracao">Subtração</label>
            <input type="radio" id="multiplicacao" name="operacao" value="multiplicacao">
                <label for="multiplicacao">Multiplicação</label>
            <input type="radio" id="divisao" name="operacao" value="divisao">
                <label for="divisao">Divisão</label>
            <input type="radio" id="expressao" name="operacao" value="expressao">
                <label for="expressao">Expressão 2º Grau</label>
        </div>
        <button type="button" id="btn-escolher-operacao" class="btn-js">Escolher</button>
    `;

    document.getElementById('btn-escolher-operacao')
        .addEventListener('click', (escolherOperacao));
}
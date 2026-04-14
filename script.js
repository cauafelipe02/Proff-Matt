const cenas = {
    booleana: mudarBooleana,
    calculo: mudarCalculo
}

function mudarCena(tipo) {
    const funcao = cenas[tipo];

    if (funcao) {
        funcao();
    }
}

function mudarBooleana() {
    const sprite = document.getElementById('professor-sprite');
    const fala = document.getElementById('fala-professor');
    const menu = document.getElementById('menu-opcoes');
    const form = document.getElementById('form-calculo');
    const resumo = document.getElementById('resumo-teoria');
    const inputs = document.getElementById('inputs-dinamicos')

    // Limpamos todas as poses anteriores
    sprite.className = '';
    sprite.classList.add('pose-explicando');

    fala.innerText = "Entender a lógica é o primeiro passo...";

    // Insere o resumo grande sobre o conteúdo:
    resumo.innerHTML = `<p style="background-color: lightgrey; padding: 10px; border-radius: 5px;">Na álgebra booleana, operamos com proposições (sentenças que só podem ser verdadeiras ou falsas). Os conectores lógicos são funções que combinam essas proposições para gerar um resultado final, os principais conectores são:<br><br>

1. Conector AND (E / . ) - Interseção: funciona como um circuito em série, ou seja, se o interruptor falhar, a luz não ascende. Com esse operador, o resultado só é verdadeiro (TRUE) se todas as entradas forem verdadeiras.
    Aplicação: Utilizado para validar muitas condições simultâneas (ex: *usuario_logado* AND *tem_permissao*).<br><br> 
2. Conector OR (Ou / +) - União: Mais flexivel, funciona como um circuito paralelo, se pelo menos um caminho estiver passando corrente, a luz ascende. O resultado é verdadeiro (TRUE) se PELO MENOS UMA entrada for verdadeira.
    Aplicação: Oferece alternativas (ex: *pagamento_cartao* OR *pagamento_pix*).<br><br>
3. Conector NOT (Não) - Complemento: é um operador unário (atua sobre apenas uma variável) ele funciona como um inversor lógico de valores. 
    Aplicação: Negar estados (ex: *not lista_vazia* para saber se há itens).<br><br>    
4. Conector XOR (OU Exclusivo) - Diferença Simétrica: fundamental para cálculos binários. O resultado é verdadeiro (TRUE) apenas se as ENTRADAS forem DIFERENTES    
    Aplicação: Situações de exclusividade mútua (ex: um sistema onde o usuário pode ser 'Pessoa Física' ou 'Jurídica', mas nunca os dois ao mesmo tempo).</p>`;

    // Insere a parte interativa "exercicios"
    inputs.innerHTML = `
    <div style="display: flex; gap: 10px; align-items: center;">
        <label style="font-weight: 500; ">Teste a porta AND:</label>
            <input type="number" id="valA" placeholder="A" min="0" max="1">
            <input type="number" id="valB" placeholder="B" min="0" max="1">
        <button type="button" class="btn-calcular" onclick="calcularAND()">Verificar Lógica</button>
    </div>
    `;

    //adiciona ao menu a classe escondido e retira ela do form
    menu.classList.add('escondido');
    form.classList.remove('escondido');
}
    
function mudarCalculo() {
    const sprite = document.getElementById('professor-sprite');
    const fala = document.getElementById('fala-professor');
    const menu = document.getElementById('menu-opcoes');
    const form = document.getElementById('form-calculo');
    const resumo = document.getElementById('resumo-teoria');
    const inputs = document.getElementById('inputs-dinamicos')

    sprite.className = '';
    sprite.classList.add('pose-calculando');
    
    fala.innerText = "Vamos resolver alguns cálculos?";

    resumo.innerHTML = "Informe a seguir qual operação deseja realizar:";

    inputs.innerHTML = `
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
            <label for="expressao">Expressão Segundo Grau</label>

            <button type="button" onclick="escolherOperacao()">
                Escolher
            </button>
        </div>
    `;

    menu.classList.add('escondido');
    form.classList.remove('escondido');
}

// Funções para cálculo
function calcularAND() {
    const aRaw = document.getElementById('valA').value;
    const bRaw = document.getElementById('valB').value;
    const resultado = document.getElementById('resultado-matematico');
    const inputs = document.getElementById('inputs-dinamicos');

    // Remove o botão de tentar novamente caso ele exista para evitar múltiplos botões
    document.getElementById("btn-tentar-novamente")?.remove();

    // Cria a variavel do botão de tentar novamente
    let botao = document.createElement("button");
    botao.id = "btn-tentar-novamente";
    botao.classList.add("btn-tentar-novamente-style");
    botao.textContent = "Tentar novamente";
    botao.onclick = tentarNovamente;

    // Verifica se os campos estão vazios
    if(aRaw === "" || bRaw === ""){
        resultado.innerText = "Por favor, insira um valor válido.";
        mostrarNeutro();

        // Adiciona o botao de tentar novamente
        inputs.appendChild(botao);
        return;
    }

    const a = parseInt(aRaw);
    const b = parseInt(bRaw);

    if (a === 1 && b === 1 || a === 0 && b === 0) {
        resultado.innerText = "Resultado: (1) Verdadeiro."
        mostrarSucesso(); // chama a função que mostra a imagem de sucesso
    } else {
        resultado.innerText = "Resultado: (0) Falso."
        mostrarFrustracao(); // chama a função que mostra a imagem de frustração
    }
    // adiciona botão no final do bloco de inputs
    inputs.appendChild(botao);
}

// Função para o botão de tentar novamente
function tentarNovamente() {
    document.getElementById('valA').value = "";
    document.getElementById('valB').value = "";
    document.getElementById('resultado-matematico').innerText = "";

    document.getElementById('professor-sprite').className = 'pose-explicando';
    document.getElementById('fala-professor').innerText = "Entender a lógica é o primeiro passo...";

    document.getElementById("btn-tentar-novamente")?.remove();
}

// Funções de mudar de imagem
function mostrarSucesso() {
    const sprite = document.getElementById('professor-sprite');
    sprite.className = 'pose-sucesso';
    document.getElementById('fala-professor').innerText = "Excelente! Você dominou essa lógica!";
}

function mostrarFrustracao() {
    const sprite = document.getElementById('professor-sprite');
    sprite.className = 'pose-triste';
    document.getElementById('fala-professor').innerText = "Ops, vamos tentar de novo?";
}

function mostrarNeutro() {
    const sprite = document.getElementById('professor-sprite');
    sprite.className = 'pose-neutra';
    document.getElementById('fala-professor').innerText = "Hmm, parece que algo não está certo. Tente novamente!";
}

// Função de Reset
function resetar() {
    location.reload(); 
}

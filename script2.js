function verificarPrioridade() {
    var idade = parseInt(document.getElementById('idade').value, 10);
    var profissionalDeSaude = document.getElementById('profissionalDeSaude').checked;
    var condicaoMedica = document.getElementById('condicaoMedica').checked;

    // Simples validação: verifica se a idade é um número positivo
    if (!isNaN(idade) && idade > 0) {
        var ePrioritario = (idade >= 60) || profissionalDeSaude || condicaoMedica;
        var mensagem = ePrioritario
            ? 'A pessoa é considerada prioritária para vacinação.'
            : 'A pessoa não é considerada prioritária para vacinação.';

        exibirMensagem(mensagem, ePrioritario);
    } else {
        exibirMensagem('Informe uma idade válida.', false);
    }
}

function exibirMensagem(mensagem, sucesso) {
    var mensagemElement = document.getElementById('mensagem');
    mensagemElement.innerHTML = mensagem;

    // Adiciona ou remove a classe de estilo com base no sucesso
    mensagemElement.className = sucesso ? 'mensagem-sucesso' : 'mensagem-erro';
}
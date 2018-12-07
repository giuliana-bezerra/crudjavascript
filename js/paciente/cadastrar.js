var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault();
    mensagemErro.innerHTML = '';

    // Extrai informações do paciente de um formulário.
    var paciente = obterPacienteDoFormulario(adicionarPacienteForm);

    if (!validarPaciente(paciente)) {
        mensagemErro.textContent = 'Paciente inválido!';
        console.log('Paciente inválido!');
        return;
    }

    // Adiciona o paciente tabela HTML.
    adicionaPacienteTabela(pacientesTable, paciente);

    adicionarPacienteForm.reset();

    // Loga mensagem de sucesso
    console.log('Paciente adicionado!');
});

function obterPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };
    return paciente;
}

function adicionaPacienteTabela(tabela, paciente) {
    var row = tabela.insertRow(1);
    $('tr').hide();
    row.classList.add('paciente');
    criarCell(row, 0, paciente.nome, 'info-nome');
    criarCell(row, 1, paciente.peso, 'info-peso');
    criarCell(row, 2, paciente.altura, 'info-altura');
    criarCell(row, 3, paciente.gordura, 'info-gordura');
    criarCell(row, 4, paciente.imc, 'info-imc');
    $('tr').fadeIn();
}

function criarCell(row, position, dado, classe) {
    var cell = row.insertCell(position);
    cell.classList.add(classe);
    cell.innerHTML = dado;
}

function validarPaciente(paciente) {
    if (!validarPeso(paciente.peso)) return false;
    else if (!validarAltura(paciente.altura)) return false;
    else return true;
}
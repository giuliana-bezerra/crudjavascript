carregarPaciente.addEventListener('click', function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    // Basic Auth
    //xhr.setRequestHeader("Authorization", "Basic " + btoa("user:password"));

    xhr.addEventListener('load', function () {
        if (this.status === 200) {
            mensagemErroAjax.innerHTML = '';
            var pacientes = JSON.parse(this.responseText);
            pacientes.forEach(function (paciente) {
                adicionaPacienteTabela(pacientesTable, paciente);
            });
        } else {
            mensagemErroAjax.innerHTML = 'Erro durante carregamento de pacientes.'
            console.log(this.status);
            console.log(this.responseText);
        }
    });

    xhr.send();
});
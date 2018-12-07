filtroTabela.addEventListener('input', function () {
    var filtro = new RegExp(this.value, 'i');
    var nomesPacientes = document.querySelectorAll('.info-nome');
    nomesPacientes.forEach(function (nomePaciente) {
        if (filtro.test(nomePaciente.textContent))
            nomePaciente.parentNode.classList.remove('invisivel');
        else
            nomePaciente.parentNode.classList.add('invisivel');
    });
});
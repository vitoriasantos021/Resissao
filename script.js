document.getElementById("ferias").addEventListener("change", function() {
    document.getElementById("diasFerias").disabled = !this.checked;
});

document.getElementById("rescisaoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const dataSaida = new Date(document.getElementById("dataSaida").value);
    const dataAdmissao = new Date(document.getElementById("dataAdmissao").value);
    const salario = parseFloat(document.getElementById("salario").value);
    const insalubridade = parseFloat(document.getElementById("insalubridade").value);
    const teveFerias = document.getElementById("ferias").checked;
    const diasFerias = teveFerias ? parseInt(document.getElementById("diasFerias").value) : 0;

    // Salário Total
    const salarioTotal = salario + insalubridade;

    // Dias Trabalhados
    const diasTrabalhados = (salarioTotal / 30) * dataSaida.getDate();

    //  Décimo Terceiro
    const mesesTrabalhados = dataSaida.getMonth();
    const decimoTerceiro = (salarioTotal / 12) * mesesTrabalhados;

    // Cálculo das Férias 
    const feriasProporcionais = (salarioTotal / 12) * (mesesTrabalhados - 1);

    // Terço das Férias
    const umTercoFerias = feriasProporcionais / 3;

    //  Resultado Final
    const resultadoFinal = diasTrabalhados + decimoTerceiro + feriasProporcionais + umTercoFerias;

    document.getElementById("resultado").innerText = `Valor da Rescisão: R$ ${resultadoFinal.toFixed(2)}`;
});

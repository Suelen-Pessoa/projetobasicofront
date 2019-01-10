function limparCampo(valor) {
	var valor = prompt("Informe o valor do depósito.");
	if (valor == "") {
		alert("Digite um valor!");
	}
	if (isNaN(valor)) {
		alert("Valor inválido!");
		limparCampo();
	}
	if (valor > 0) {
		saldo += parseFloat(valor);
		teste.textContent = saldo.toFixed(2);
		teste.classList.remove("invisivel");
		setTimeout(function () {
			teste.classList.add("invisivel");
		}, 5000);
		limparCampo();
	}
	if (valor < 0) {
		alert("Valor negativo");
		limparCampo();
	}
}

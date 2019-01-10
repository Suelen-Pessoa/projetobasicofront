function saque(valor) {
	//var valor = document.getElementById('valor-transacao').value;
	var valor = prompt("Informe o valor desejado.")
	if(valor == ""){
		alert("Digite um valor!");
	} else 
	if(isNaN(valor)){
		alert ("Valor inválido!");
		limparCampo();
	} else
	if (valor > saldo){
		alert("Saldo insuficiente!");
		limparCampo();
	}
	else
		if(valor < 0){
		alert("Valor negativo!");
		limparCampo();
	}
	else{
		saldo -= parseFloat(valor);
		teste.textContent = saldo.toFixed(2);
		teste.classList.remove("invisivel");
			setTimeout(function(){
			teste.classList.add("invisivel");
		}, 5000);
		limparCampo();	
		}
}

botaoSaque.addEventListener("click", saque);
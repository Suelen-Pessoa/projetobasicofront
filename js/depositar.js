function habilitaCampo(){
    mostrarCampos.classList.remove("invisivel");
    document.getElementById("valor").focus();

}


function depositar(valor){
	var valor = document.getElementById("valor").value;

	if(valor == "" || valor == 0){
		var campoMensagem = document.querySelector(".mensagem");
		campoMensagem.textContent = ("Informe o valor do deposito.")
		limparCampo();
	} 
	if(isNaN(valor)){
		var campoMensagem = document.querySelector(".mensagem");
		campoMensagem.textContent = ("Valor inválido.")
		limparCampo();
	}
	if (valor >0){
		saldoFloat += parseFloat(valor);
		console.log(saldoFloat.toFixed(2));
		var campoSaldo = document.getElementById("saldo");
		campoSaldo.textContent = "Saldo: "+saldoFloat.toFixed(2);
		limparCampo();	
		}
	if(valor <0){
		var campoMensagem = document.querySelector(".mensagem");
		campoMensagem.textContent = ("Valor negativo. Informe o valor do deposito.");
		limparCampo();
	}
}



function limparCampo(){
	document.getElementById("valor").value = "";
    document.getElementById("valor").focus();
}



var habilitarDeposito = document.getElementById("botaoDepositar");
var mostrarCampos = document.getElementById("campos");




habilitarDeposito.addEventListener("click", function(){
	informacaoDeposito.classList.remove("invisivel");
	informacaoSaque.classList.add("invisivel");
	campoExtrato.classList.add("invisivel");
	atualizaMensagem();
	var habilitarSaque = document.getElementById("botaoSaque");
	camposSaldo.classList.add("invisivel");
	ok2.classList.add("invisivel");
	ok.classList.remove("invisivel");
	habilitaCampo();
})

var ok = document.getElementById("efetua");

ok.addEventListener("click",depositar);



//comparado//













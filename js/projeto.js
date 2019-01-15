var boasVindas = document.querySelector(".bem-vindo");
var principal = document.querySelector("canvas");
var teste = document.querySelector("h2");
var ok = true;
var botaoDeposito = document.querySelector(".deposito");
var botaoSaque = document.querySelector(".saque");




function mudarTexto(){
	if(ok){
		teste.textContent = "Bruno";
		ok = false;
	} else{
		teste.textContent = "Marinho";
		ok = true;
	}

}

botaoDeposito.addEventListener("click",  mudarTexto);
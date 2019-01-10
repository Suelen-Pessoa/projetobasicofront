function mostrarSaldo() {
	teste.textContent = saldo.toFixed(2);
	teste.classList.remove("invisivel");
}

botaoSaldo.addEventListener("click", mostrarSaldo);
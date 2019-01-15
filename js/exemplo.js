var clientes = [
    {
        nome : "Cliente 1",
        historico : []
    },
    {
        nome : "Cliente 2",
        historico : []
    }
];

var cliente = 0;

var button1 = document.getElementById("efetua");

button1.addEventListener("click", function(){

    var input1 = document.getElementById("valor");

    // ADICIONA ESTE BLOCO
    var operacao = {
        operacao : "D",
        valor : input1.value,
        data : "10/01/2019",
    };
    
    clientes[cliente].historico.push(operacao);

    atualizarExtrato();
    //FIM - ADICIONAR ESSE BLOCO
});

function atualizarExtrato(){
    var extrato = document.getElementById("extrato");
    extrato.innerText = "";

    /*var extrato2 = document.getElementById("extrato2").getElementsByTagName('tbody')[0];*/

    /*clientes[0].historico.forEach(
        function(hist){
            var string = hist.data + " - " + hist.operacao + " - " + hist.valor;
            extrato.innerText =  extrato.innerText + "\n" +  string;
            var linha = extrato2.insertRow(-1);
            var cell1 = linha.insertCell(0);
            var cell2 = linha.insertCell(1);
            var cell3 = linha.insertCell(2);

        
        }
    )*/
}

atualizarExtrato();
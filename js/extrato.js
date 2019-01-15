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
    var teste = parseFloat(input1.value);
    if (input1.value > 0){

    var d = new Date();
    
    var operacao = {
        operacao : "Dep",
        valor : teste.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
        data : d.getDate() + "/" + d.getMonth()+1 + "/" + d.getFullYear(),
        hora : d.getHours() + ":" + d.getMinutes() + ":"+ d.getSeconds(),
    };
    
    clientes[cliente].historico.push(operacao);

    atualizarExtrato();
    //FIM - ADICIONAR ESSE BLOCO
}
});



var button2 = document.getElementById("efetua2");

button2.addEventListener("click", function(){

    var input1 = document.getElementById("valor");
    var teste = parseFloat(input1.value);

    // ADICIONA ESTE BLOCO
    var d = new Date();

    if(input1.value <=saldoFloat && input1.value !="" && input1.value > 0 ){
    var operacao = {
        operacao : "Saq",
        valor : teste.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
        data : d.getDate() + "/" + d.getMonth()+1 + "/" + d.getFullYear(),
        hora : d.getHours() + ":" + d.getMinutes() + ":"+ d.getSeconds(),
    };
    console.log(operacao);
    clientes[cliente].historico.push(operacao);

    atualizarExtrato();
    //FIM - ADICIONAR ESSE BLOCO
}
});

function atualizarExtrato(){
    var extrato = document.getElementById("extrato");
    extrato.innerText = "";

    var extrato2 = document.getElementById("extrato2").getElementsByTagName('tbody')[0];

    clientes[0].historico.forEach(
        function(hist){
            var string = hist.data + " - " +hist.hora + " - " + hist.operacao + ": " + hist.valor;
            extrato.innerText =  extrato.innerText + "\n" +  string;
            var linha = extrato2.insertRow(-1);
            var cell1 = linha.insertCell(0);
            var cell2 = linha.insertCell(1);
            var cell3 = linha.insertCell(2);

        
        }
    )
}

atualizarExtrato();


var mostrarExtrato = document.getElementById("botaoExtrato");

mostrarExtrato.addEventListener("click", function(){
    mostrarCampos.classList.add("invisivel");
    camposSaldo.classList.add("invisivel");
    campoExtrato.classList.remove("invisivel");
});
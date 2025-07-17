document.addEventListener("DOMContentLoaded", function() {
    const buyForm = document.getElementById("buyFormulary");
    const infoDisplayElement = document.getElementById("informationsText");
    const infoConfForm = document.getElementById("informationBoxForm");

    if (!buyForm || !infoDisplayElement) {
        console.error("Erro no script: Formulário (ID 'buyFormulary') ou elemento de exibição (ID 'informationsText') não encontrados. Verifique se os IDs estão corretos e se o script é carregado DEPOIS do HTML.");
        return;
    }

    buyForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let volume = document.getElementById("volume");
        let quant = document.getElementById("quantidade");
        let est = document.getElementById("estado");
        let cit = document.getElementById("cidade");
        let ndt = document.getElementById("numero_de_telefone");
        let email = document.getElementById("email");
        let nome = document.getElementById("nome");
        let nde = document.getElementById("numero_do_endereco");
        let nda = document.getElementById("numero_do_apartamento");
        let comp = document.getElementById("complemento");
        
        infoDisplayElement.innerHTML = "--- Dados do Pedido --- <br>Volume: "
         + volume.value + "<br>Quantidade: " + quant.value + "<br>Estado: " + est.value + "<br>Cidade: "
         + cit.value + "<br>Número do Telefone: " + ndt.value + "<br>Email: " + email.value + "<br>Nome: "
          + nome.value + "<br>Número do Endereço: " + nde.value + "<br>Número do Apartamento: "
          + nda.value +  "<br>Complemento: " + comp.value;

    });

    infoConfForm.addEventListener("submit", function(event){
        event.preventDefault();
    })


});
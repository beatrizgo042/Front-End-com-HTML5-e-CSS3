var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event){
    var alvoEvento = event.target,
        paiDoAlvo = alvoEvento.parentNode;

    paiDoAlvo.classList.add("fadeOut");
    setTimeout(function(){
        paiDoAlvo.remove();
    }, 500);
});

// pacientes.forEach(function(paciente){
//    paciente.addEventListener("dblclick", function(){
//        this.remove();
//    });
//}); 
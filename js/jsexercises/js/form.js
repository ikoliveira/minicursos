//tanto faz usar .botao como #adicionar-paciente. Qual a diferença entre usar pelo ID e pela Classe?
var botao = document.querySelector("#adicionar-paciente") 
botao.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona")

    var paciente = instanciaPaciente(form);

    var pacienteTR = montaTr(paciente)
    
    var tabela = document.querySelector("#tabela-pacientes")
    analisaDados(pacienteTR)
    tabela.appendChild(pacienteTR)
    form.reset()
})

function instanciaPaciente(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){

    var pacienteTR = document.createElement("tr");
    pacienteTR.classList.add("paciente")

    pacienteTR.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTR.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTR.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTR.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTR.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTR;
}

function montaTd(dado, classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)
    return td
}
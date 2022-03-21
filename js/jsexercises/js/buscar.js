
var botaobuscar = document.querySelector("#buscar-paciente")
// https://api-pacientes.herokuapp.com/pacientes
botaobuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest()
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){
        var msg = document.querySelector("#erro-ajax")
        if (xhr.status == 200){
            msg.classList.add("invisivel")
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            })
        } else {
            msg.classList.remove("invisivel")
            
        }
        
    })
    
    xhr.send();
    
    


})

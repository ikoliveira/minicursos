var titulo = document.querySelector(".titulo")

/**
 * Calcula o IMC dos pacientes extraindo os dados direto da tabela contida no HTML
 * @param {Object} paciente 
 */
function calculaIMC(peso, altura) {
    var imc = 0;
    imc = peso / (altura**2)
    return imc.toFixed(2);
}

/**
 * faz a validação dos dados do paciente e solicita o cálculo do IMC, se cabível.
 * @param {Object} paciente 
 */
function analisaDados(paciente) {
    pmax = 400
    altmax = 3.0
    var peso = paciente.querySelector(".info-peso").textContent
    var altura = paciente.querySelector(".info-altura").textContent
    if (peso >= pmax || peso < 0) {
        paciente.style.backgroundColor = "black"
        paciente.style.color = "white"
        alert("Peso Inválido")
        return false
    } else if (altura >= altmax || altura < 0) {
        paciente.style.color = "red"
        alert("Altura Inválida")
        return false
    } else {
        var imc = calculaIMC(peso, altura);
        paciente.querySelector(".info-imc").textContent = imc;
        return true
    }
}

/**
 * analisa uma lista de pacientes para cálculo do IMC
 * @param {Object} pacientes 
 */
function analisaVarios(pacientes){
    for (var i = 0; i < pacientes.length; i++) {
        analisaDados(pacientes[i])     
    }
}

pacientes = document.querySelectorAll(".paciente")

analisaVarios(pacientes)


var index = 1;

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

const calculaImc = (peso, altura) => {
  var imc = (peso / (altura * altura)).toFixed(2);
  return imc;
};

const gerarIndex = array => {
  if (index <= array.length) {
    return index++;
    gerarIndex(array);
  }
};

pacientes.forEach(paciente => {
  paciente.querySelector(".info-index").textContent = gerarIndex(pacientes);
  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;
  if (peso < 0 || peso > 1000) {
    paciente.style.background = "#ff0000";
    paciente.classList.add("campo-invalido");
  } else if (altura < 0 || altura > 3.0) {
    paciente.style.background = "#ff0000";
    paciente.classList.add("campo-invalido");
  } else {
    paciente.querySelector(".info-imc").textContent = calculaImc(peso, altura);
  }
});

var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", e => {
  e.preventDefault();
  alert();
});

$(function() {
  $("#tabela-pacientes").sortable({
    update: function() {
      index = 1;
      pacientes = document.querySelectorAll(".paciente");
      for(var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        paciente.querySelector(".info-index").textContent = gerarIndex(pacientes);
      }
    }
  });
});

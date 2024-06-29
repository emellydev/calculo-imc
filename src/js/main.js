const pesoInput = document.querySelector("#peso");
const alturaInput = document.querySelector("#altura");
const resultadoImc = document.querySelector("#Resultado");
const form = document.querySelector(".form");
let mensagem;

function calculoImc(peso, altura) {
  return (peso / altura ** 2).toFixed(2);
}

function mostrandoResultado(imc) {
  if (imc < 18.5) {
    mensagem = `Abaixo do peso`;
  } else if (imc >= 18.5 && imc <= 24.9) {
    mensagem = `Peso normal`;
  } else if (imc >= 25 && imc <= 29.9) {
    mensagem = `Sobrepeso`;
  } else if (imc >= 30 && imc <= 34.9) {
    mensagem = `Obesidade grau 1`;
  } else if (imc <= 35 && imc <= 39.9) {
    mensagem = `Obesidade grau 2`;
  } else if (imc > 40 < 600) {
    mensagem = `Obesidade grau 3`;
  } else {
    mensagem = `Por favor, insira valores válidos.`;
  }
  resultadoImc.innerHTML = `IMC: ${imc} ${mensagem}`;
}

form.addEventListener("submit", (evento) => {
  evento.preventDefault(); // previne reload
  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value);
  if (Number(peso) && Number(altura) && altura > 0) {
    const imc = calculoImc(peso, altura);
    mostrandoResultado(imc);
  } else {
    resultadoImc.innerHTML = "Por favor, insira valores válidos.";
  }
});

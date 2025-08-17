function calcularImc() {
  var peso = document.getElementById("peso");
  var altura = document.getElementById("altura");
  var resultado = document.getElementById("resultado");
  var valorPeso = Number(peso.value);
  var valorAltura = Number(altura.value);
  var imcCalculado = valorPeso / (valorAltura * valorAltura);
  resultado.innerHTML = (imcCalculado).toFixed(2) + "<br>";
  if (imcCalculado < 18.5) {
    resultado.innerHTML += " Sua classificação é: Magreza";
  }
    else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
        resultado.innerHTML += " Sua classificação é: Normal";
    } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
        resultado.innerHTML += " Sua classificação é: Sobrepeso";
    } else if (imcCalculado >= 30 && imcCalculado < 39.9) {
        resultado.innerHTML += " Sua classificação é: Obesidade";
    } else {
        resultado.innerHTML += " Sua classificação é: Obesidade grave";
    }
}

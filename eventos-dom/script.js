function calcular() {
  var resultado = document.getElementById("resultado");
  var tn1 = document.getElementById("num_n1");
  var tn2 = document.getElementById("num_n2");
  var operacao = document.getElementById("operacao");
  var opcaoValor = operacao.options[operacao.selectedIndex].value;

  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);

  var s = 0;
  if (opcaoValor == "soma") {
    s = soma(n1, n2);
  } else if (opcaoValor == "sub") {
    s = subtracao(n1, n2);
  } else if (opcaoValor == "mult") {
    s = multiplicao(n1, n2);
  } else {
    s = divisao(n1, n2);
  }

  resultado.innerHTML = `${s}`;
  document.getElementById("num_n1").value = "";
  document.getElementById("num_n2").value = "";
}

function clean() {
  resultado.innerHTML = `0.0`;
}

function soma(a, b) {
  return a + b;
}
function subtracao(a, b) {
  return a - b;
}
function multiplicao(a, b) {
  return a * b;
}
function divisao(a, b) {
  return a / b;
}

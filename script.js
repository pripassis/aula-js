function exibirResultado(resultado) {
  console.log(`O resulado é: ${resultado}`);
}

// calcular sincrono
function calcular(calculo, func) {
  let result = eval(calculo);
  func(result);
}

calcular(window.prompt("Informe um calculo"), exibirResultado);

// Captura o evento load da página

// /** * Soma dois valores */

// function sum(a, b) {
//   return a + b;
// }

// var a = 1;
// var b = 2;

// var result = sum(a, b);
// console.log(result);

// window.onload = function () {
//   // Localiza o elemento com id "id_p"
//   var p = document.getElementById("id_p");

//   var links = p.getElementsByTagName("a");

//   // configura a propriedade backgroundColor do elemento
//   p.style.backgroundColor = "#c2c2c2";

//   alert(links[0].href);
// };

// var obj = {
//   nome: "Maria",
//   email: "maria@gmail.com",
// };

// obj["model"] = "xuxa";
// obj["name"] = 343;
// obj.start = function () {
//   console.log("I`m ready!!!!!");
// };

// console.log(JSON.stringify(obj));

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array.forEach(function (value, key) {
// });

// array.forEach((value, key) => {
//   if (value % 2 == 0) {
//     array.push(value + 1);
//   } else {
//     array.splice(key, 1);
//   }
// });

// for (var i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     array.push(array[i] + 1);
//   } else {
//     array.splice(i, 1);
//   }
// }
// document.write(array);

// console.log("Inicio");
// myArray.forEach(function (value, key) {
//   console.log(value, key);
// });

// console.log("Adicionei");
// myArray.push("Antonio");

// myArray.unshift("A");
// myArray.forEach(function (value, key) {
//   document.write(key + " --> ");
//   document.write(value);
//   document.write("<br/>");
// });

// var var1 = 0;
// do {
//   document.write(" do while " + var1);
//   var1++;
// } while (var1 <= 10);

// for (i = 0; i <= 10; i++) {
//   document.write(" Linha " + i);
// }

// var a = 6; //2,3,4,5
// if (a > 1 && a < 6) {
//   document.write("Maior que 1 E menor que 6");
// }
// var a = 6; //1
// if (a > 1 || a < 6) {
//   document.write("Maior que 1 OU menor que 6");
// }

// var a = 6;
// if (!(a > 1 && a < 6)) {
//   document.write("Não é maior que 1 OU menor que 6");
// }
// var a = prompt("Digite um numero.");

// if (a == 6) {
//   document.write("Igual a 6!");
// } else if (a < 6) {
//   document.write("Menor que 6");
// } else {
//   document.write("Maior que 6");
// }

// var anoAtual = 2024;
// // Pede que o usuário digite o ano em que nasceu
// var anoNascimento = prompt("Digite o ano em que você nasceu.");
// // Calcula a idade do usuário e armazena na variável idade
// var idade = anoAtual - anoNascimento;
// // Mostra ao usuário a idade que ele possui
// alert("Sua idade é: " + idade + " anos");

let peso = Number(prompt("Digite o seu peso: "));
let altura = Number(prompt("Digite a sua altura: "));

let imc = peso / (altura * altura);

if (imc < 18) {
  alert("Cuidado, você está abaixo do peso ideal!")
} else if (imc >= 18 && imc <= 25) {
  alert("Parabéns, você está no peso ideal!")
} else if (imc >= 25 && imc <= 30) {
  alert("Cuidado, você está no sobrepeso!")
} else if (imc >= 30 && imc <= 35) {
  alert("Cuidado, você está com obesidade moderada!")
} else if (imc >= 35 && imc <= 40) {
  alert("Cuidado, você está com obesidade grave!")
} else {
  alert("Cuidado, você está com obesidade mórbida!!")
}
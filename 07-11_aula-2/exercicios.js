let prompt = require('prompt-sync')();
let process = require('process');

let exercicio = prompt("Informe o numero do exercicio: ")
let numero

function numeroValidacao(mensagem) {
	numero = parseFloat(prompt(mensagem))
	if (isNaN(numero)){
		console.log("O valor informado não é um numero. Por favor, tente novamente.");
		process.exit(-1)
	}
	return (numero)
}

switch (exercicio) {
	case "1":

		// EXERCICIO 1
		// Faça um programa que receba o nome, cargo e salário de um
		// funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
		// salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
		// desse funcionário.

		console.log("===== Calcula acréscimo de 10% em valores menores que 1000 =====");

		let nome = prompt("Digite seu nome: ")
		let cargo = prompt("Digite seu cargo: ")
		let salarioBase = numeroValidacao("Digite seu salario: ")
		let salarioAcrescido

		if (salarioBase < 1000) {
			salarioAcrescido = salarioBase + (salarioBase / 10)
			console.log(`Nome: ${nome}.\nCargo: ${cargo}.`)
			console.log(`Salario base: ${salarioBase.toFixed(2)}.\nSalario acrescido: ${parseFloat(salarioAcrescido).toFixed(2)}.`)
		}
		else{
			console.log(`Nome: ${nome} .\nCargo: ${cargo}.`)
			console.log(`Salario base: ${salarioBase.toFixed(2)}\nSeu salario não receberá o acrescimo.`);
		}
		break;

	case "2":

		// EXERICIO 2
		// Uma empresa decide dar aumento de 30% aos funcionários cujo
		// salário é inferior a 500 reais. Escreva um programa que receba o
		// salário de um funcionário e imprima o valor do salário reajustado ou
		// uma mensagem caso o funcionário não tenha direito a aumento.

		console.log("===== Checa se um valor receberá um acréscimo ou não. =====");

		let salario = numeroValidacao("Digite seu salario: ")

		if (salario < 500) {
			salario += salario / 30
			console.log("Seu salario foi reajustado para: " + salario.toFixed(2) + ".")
		} else
			console.log("Você não tem direito ao reajuste.")

		break;

	case "3":

		// EXERICIO 3
		// Faça um programa que receba um número inteiro do usuário e informe
		// se este número é positivo ou negativo.

		console.log("===== Checa se o seu numero é negativo, positivo ou neutro. =====");

		numero = numeroValidacao("Digite um numero: ")

		if (numero < 0)
			console.log("Seu numero é negativo.")
		else if (numero > 0)
			console.log("Seu numero é positivo")
		else
			console.log("Zero é zero, parça (numero neutro).");
		break;

	case "4":

		// EXERICIO 4
		// Faça um programa que receba um número do usuário e informe
		// se este número é par ou ímpar.

		console.log("===== Checa se um numero é par ou impar. =====");
		numero = numeroValidacao("Digite um numero: ")

		let restante = numero % 2

		if (restante != 0)
			console.log("Seu numero é impar.")
		else
			console.log("Seu numero é par")

		break;

	case "5":

		// EXERCICIO 5
		// Faça um programa receba dois valores e imprima qual é o maior
		// número digitado.

		console.log("===== Avalia qual é o maior entre dois numeros =====");

		let numeroUm = numeroValidacao("Digite o primeiro numero: ")
		let numeroDois = numeroValidacao("Digite o segundo numero: ")

		if (numeroUm > numeroDois)
			console.log(`Seu numero maior é: ${numeroUm}.`)
		else if
			(numeroDois > numeroUm)
			console.log(`Seu numero maior é: ${numeroDois}.`)
		else
			console.log("Seus numeros são iguais")

		break;

	case "6":

		// EXERCICIO 6
		// Faça um programa que receba 4 notas de um aluno, calcule e
		// imprima a média aritmética das notas e a mensagem de APROVADO
		// para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre
		// 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

		function notaValidacao(mensagem) {
			numero = parseFloat(prompt(mensagem))

			if (isNaN(numero) || numero < 0 || numero > 10){
				console.log("A nota informada não foi apresentada corretamente. Por favor, tente outra vez.");
				process.exit(-1)
			}
			return (numero)
		}

		console.log("===== Calculadora de médias =====\nApresente os valores entre 0 e 10");

		let notaUm = notaValidacao(("Digite a primeira nota: "))
		let notaDois = notaValidacao(("Digite a segunda nota: "))
		let notaTres = notaValidacao(("Digite a terceira nota: "))
		let notaQuatro = notaValidacao(("Digite a quarta nota: "))
		
		let media = (notaUm + notaDois + notaTres + notaQuatro) / 4
		
		if (media >= 7)
			console.log(`Média: ${media}. Aluno aprovado.`)
		else if (media < 7 && media >= 5)
			console.log(`Média: ${media}. Aluno em recuperação.`)
		else
			console.log(`Média: ${media}. Aluno reprovado.`)

		break;

	default:
		console.log("Exercicio não encontrado. Tente um numero de 01 a 06")
		break;
}

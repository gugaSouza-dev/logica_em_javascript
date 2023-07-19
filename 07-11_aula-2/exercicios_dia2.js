let prompt = require('prompt-sync')();
let process = require('process');


let vermelho = '\u001b[' + 31 + ';1m'
let verde = '\u001b[' + 32 + ';1m'
let amarelo = '\u001b[' + 33 + ';1m'
let azul = '\u001b[' + 34 + ';1m'
let roxo = '\u001b[' + 35 + ';1m'
let ciano = '\u001b[' + 36 + ';1m'

let numero;

function mensagemCor(cor, mensagem) {
	return (cor + mensagem + '\x1b[0m');
}

function numeroValidacao(mensagem) {
	numero = parseFloat(prompt(mensagem))
	if (isNaN(numero)){
		console.log(mensagemCor(vermelho, "O valor informado não é um numero. Por favor, tente novamente."));
		process.exit(-1)
	}
	return (numero)
}

function asciiMensagem() {
	console.log(azul
					+ "\n   ____                _ _ _   _                   _       ____            _     ___ ___ "
					+ "\n  / ___|___  _ __   __| (_) |_(_) ___  _ __   __ _| |___  |  _ \\ __ _ _ __| |_  |_ _|_ _|"
					+ "\n | |   / _ \\| '_ \\ / _` | | __| |/ _ \\| '_ \\ / _` | / __| | |_) / _` | '__| __|  | | | | "
					+ roxo
					+ "\n | |__| (_) | | | | (_| | | |_| | (_) | | | | (_| | \\__ \\ |  __/ (_| | |  | |_   | | | | "
					+ "\n  \\____\\___/|_| |_|\\__,_|_|\\__|_|\\___/|_| |_|\\__,_|_|___/ |_|   \\__,_|_|   \\__| |___|___|"
					+ verde + '\n'
					+ "\n1 = Login do Ademir"
					+ "\n2 = Dias da Semana"
					+ "\n3 = Checa ordenação de três numeros"
					+ "\n4 = Validação de idade"
					+ "\n5 = Calculador de descontos"
					+ "\n6 = Calculadora de IMC\n");
}

asciiMensagem();

let exercicio = numeroValidacao(roxo + mensagemCor(amarelo, "Informe o numero do exercicio (1 a 6): "))


switch (exercicio) {
	case "1":

		/*
		Exercício 1: Verificação de login
		Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
		nome de usuário é &quot;admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
		foi bem-sucedido ou não.
		*/

		console.log("Login do Ademir.");

		let usuario = prompt("Informe seu usuário: ")
		let senha = prompt("Informe sua senha: ")

		if (usuario == "admin" && senha == "senha123")
			console.log("Login feito com sucesso. Bem vindo, Ademir.");
		else
			console.log("Você não é o Ademir. Login incorreto.");

		break;

	case "2":

		/*
		Exercício 2: Verificação de dia da semana
		Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
		semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
		2 representa terça-feira e assim por diante.
		*/

		console.log("Dias da Semana.");

		dia = numeroValidacao("Informe um numero de 1 a 7: ")
		
		switch (dia) {
			case 1:
				console.log("Segunda-feira.");
				break;
			case 2:
				console.log("Terça-feira.");
				break;
			case 3:
				console.log("Quarta-feira.");
				break;
			case 4:
				console.log("Quinta-feira.");
				break;
			case 5:
				console.log("Sexta-feira.");
				break;
			case 6:
				console.log("Sabado.");
				break;
			case 7:
				console.log("Domingo.");
				break;
		
			default:
				console.log("O numero informado não corresponde á um dia da semana.");
				break;
		}

		break;

	case "3":

		/*
		Exercício 3: Verificação de números em ordem crescente
		Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
		crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.
		*/

		console.log("Checa ordenação de três numeros.");

		let numeroUm = numeroValidacao("Insira o primeiro número: ")
		let numeroDois = numeroValidacao("Insira o segundo número: ")
		let numeroTres = numeroValidacao("Insira o terceiro número: ")

		if (numeroUm > numeroDois || numeroDois > numeroTres)
			console.log("Seus números não estão em ordem crescente.")
		else if (numeroUm < numeroDois || numeroDois < numeroTres)
			console.log("Seus números estão em ordem crescente.");
		else
			console.log("Seus numeros são iguais.");

		break;

	case "4":

		/*
		Exercício 4: Verificação de idade
		Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
		de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.
		*/

		console.log("Validação de idade.");

		let anoNascimento = numeroValidacao("Informe a sua data de nascimento: ")
		let anoAtual = numeroValidacao("Informe o ano que estamos: ")
		let idade = anoAtual - anoNascimento

		if (idade >= 18)
			console.log("Parabens! Você é maior de idade e pode ser preso!");
		else
			console.log("Parabéns! Você ainda não é um maior de idade. Aproveite, pois vai acabar.");

		break;
	
	case "5":

		/*
		Exercício 5: Cálculo de desconto progressivo

		Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
		pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
		aplique um desconto de acordo com o valor total da compra. Siga a tabela:

		Valor total da compra até R$ 100,00: sem desconto.
		Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
		Valor total da compra acima de R$ 200,00: desconto de 20%.

		Exiba o valor final da compra com o desconto aplicado.
		*/

		console.log("Calculador de descontos.");

		valor = numeroValidacao("Informe o valor total da compra: ")

		console.log(`Valor da compra: ${valor}.`);

		if (valor > 100 || valor <= 200)
			valor -= valor / 10
		else if (valor > 200)
			valor -= valor / 20

		console.log(`Valor da compra com desconto: ${valor.toFixed(2)}.`);

		break;
		
	case "6":

		/*
		Exercício 6: Cálculo de IMC
		Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
		Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
		* altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
		usuário se encontra, de acordo com a tabela a seguir:
		IMC menor que 18.5: Abaixo do peso
		IMC de 18.5 a 24.9: Peso normal
		
		IMC de 25.0 a 29.9: Sobrepeso
		IMC de 30.0 a 34.9: Obesidade grau 1
		IMC de 35.0 a 39.9: Obesidade grau 2
		IMC maior ou igual a 40.0: Obesidade grau 3
		*/

		console.log("Calculadora de IMC");

		let peso = numeroValidacao("Informe o peso em KG: ")
		let altura = numeroValidacao("Informe a altura em metros: ")
		let imc = peso / (altura * altura)
		
		if (imc < 18.5)
			console.log("Abaixo do peso.");
		else if (imc < 24.9)
			console.log("Peso normal.");
		else if (imc < 29.9)
			console.log("Sobrepeso");
		else if (imc < 34.9)
			console.log("Obesidade grau 1");
		else if (imc < 39.9)
			console.log("Obesidade grau 2");
		else
			console.log("Obesidade grau 3");
		break;

	default:
		console.log("Exercicio não encontrado. Tente um numero de 1 a 6")
		break;
}


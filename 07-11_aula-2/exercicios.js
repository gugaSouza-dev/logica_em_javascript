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

function stringValidacao(string) {
	if (!string) {
		console.log(mensagemCor(vermelho, "Valor vazio não aceito."));
		process.exit(-1)
	}
	return (string)
}

function asciiMensagem() {
	console.log(azul
		+ "\n   ____                _ _ _   _                   _     "
		+ "\n  / ___|___  _ __   __| (_) |_(_) ___  _ __   __ _| |___ "
		+ "\n | |   / _ \\| '_ \\ / _` | | __| |/ _ \\| '_ \\ / _` | / __|"
		+ roxo
		+ "\n | |__| (_) | | | | (_| | | |_| | (_) | | | | (_| | \\__ \\"
		+ "\n  \\____\\___/|_| |_|\\__,_|_|\\__|_|\\___/|_| |_|\\__,_|_|___/"
		+ verde + '\n'
		+ "\n1 = Calcula acréscimo de 10% em valores menores que 1000"
		+ "\n2 = Checa se um valor receberá um acréscimo ou não"
		+ "\n3 = Checa se o seu numero é negativo, positivo ou neutro"
		+ "\n4 = Checa se um numero é par ou impar"
		+ "\n5 = Avalia qual é o maior entre dois numeros"
		+ "\n6 = Calculadora de médias\n");
}

asciiMensagem();

let exercicio = numeroValidacao(roxo + mensagemCor(amarelo, "Informe o numero do exercicio (1 a 6): "))

switch (exercicio) {
	case 1:

		/*
		Exercício 1:
		Faça um programa que receba o nome, cargo e salário de um
		funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
		salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
		desse funcionário.
		*/

		console.log(verde + "\nCalcula acréscimo de 10% em valores menores que 1000\n");

		let nome = stringValidacao(prompt(mensagemCor(amarelo, "Digite seu nome: ") + roxo))
		let cargo = stringValidacao(prompt(mensagemCor(amarelo, "Digite seu cargo: ") + roxo))
		let salarioBase = numeroValidacao(mensagemCor(amarelo, "Digite seu salario: ") + roxo)
		let salarioAcrescido

		if (salarioBase < 1000) {
			salarioAcrescido = salarioBase + (salarioBase / 10)
			console.log(ciano + `Nome: ` + roxo + `${nome}` + ciano + `.\nCargo: ` + roxo + ` ${cargo}.`)
			console.log(ciano + `Salario base: ` + roxo + `${salarioBase.toFixed(2)}.\n` + ciano + `Salario acrescido: ` + roxo + ` ${parseFloat(salarioAcrescido).toFixed(2)}.`)
		}
		else{
			console.log(ciano + `Nome: ` + roxo + `${nome}.\n` + ciano +`Cargo: ` + roxo + `${cargo}.`)
			console.log(ciano + `Salario base: ` + roxo + `${salarioBase.toFixed(2)}\n` + ciano + `Seu salario não receberá o acrescimo.`);
		}
		console.log(mensagemCor(verde, "Fim."));
		break;

	case 2:

		/*
		Exercício 2
		Uma empresa decide dar aumento de 30% aos funcionários cujo
		salário é inferior a 500 reais. Escreva um programa que receba o
		salário de um funcionário e imprima o valor do salário reajustado ou
		uma mensagem caso o funcionário não tenha direito a aumento.
		*/

		console.log(verde + "Checa se um valor receberá um acréscimo ou não. ");

		let salario = numeroValidacao(amarelo + "Digite seu salario: ")

		if (salario < 500) {
			salario += salario / 30
			console.log(ciano + "Seu salario foi reajustado para: " + roxo + salario.toFixed(2) + ".")
		}
		else
			console.log(ciano + "Você não tem direito ao reajuste.")
		
		console.log(mensagemCor(verde, "Fim."));
		break;

	case 3:

		/*
		Exercício 3
		Faça um programa que receba um número inteiro do usuário e informe
		se este número é positivo ou negativo.
		*/

		console.log(verde + "Checa se o seu numero é negativo, positivo ou neutro. ");

		numero = numeroValidacao(amarelo + "Digite um numero: " + roxo)

		if (numero < 0)
			console.log(ciano + "Seu numero é negativo.")
		else if (numero > 0)
			console.log(ciano + "Seu numero é positivo")
		else
			console.log(ciano + "Zero é zero, parça (numero neutro).");
		console.log(mensagemCor(verde, "Fim."));
		break;
		
	case 4:

		/*
		Exercício 4
		Faça um programa que receba um número do usuário e informe
		se este número é par ou ímpar.
		*/

		console.log(verde + "Checa se um numero é par ou impar. ");
		numero = numeroValidacao(amarelo + "Digite um numero: " + roxo)

		let restante = numero % 2

		if (restante != 0)
			console.log(ciano + "Seu numero é impar.")
		else
			console.log(ciano + "Seu numero é par")
		console.log(mensagemCor(verde, "Fim."));
		break;

	case 5:

		/*
		Exercício 5
		Faça um programa receba dois valores e imprima qual é o maior
		número digitado.
		*/

		console.log(verde + "Avalia qual é o maior entre dois numeros ");

		let numeroUm = numeroValidacao(amarelo + "Digite o primeiro numero: " + roxo)
		let numeroDois = numeroValidacao(amarelo + "Digite o segundo numero: " + roxo)

		if (numeroUm > numeroDois)
			console.log(ciano + `Seu numero maior é: ` + roxo + `${numeroUm}.`)
		else if
			(numeroDois > numeroUm)
			console.log(ciano + `Seu numero maior é: ` + roxo + `${numeroDois}.`)
		else
			console.log(ciano + "Seus numeros são iguais")
		console.log(mensagemCor(verde, "Fim."));

		break;

	case 6:

		/*
		Exercício 6
		Faça um programa que receba 4 notas de um aluno, calcule e
		imprima a média aritmética das notas e a mensagem de APROVADO
		para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre
		5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.
		*/

		function notaValidacao(mensagem) {
			numero = parseFloat(prompt(mensagem))

			if (isNaN(numero) || numero < 0 || numero > 10){
				console.log(mensagemCor(vermelho, "A nota informada não foi apresentada corretamente. Por favor, tente outra vez."));
				process.exit(-1)
			}
			return (numero)
		}

		console.log(verde + "Calculadora de médias \nApresente os valores entre 0 e 10 ");

		let notaUm = notaValidacao((amarelo + "Digite a primeira nota: " + roxo))
		let notaDois = notaValidacao((amarelo + "Digite a segunda nota: " + roxo))
		let notaTres = notaValidacao((amarelo + "Digite a terceira nota: " + roxo))
		let notaQuatro = notaValidacao((amarelo + "Digite a quarta nota: " + roxo))
		
		let media = (notaUm + notaDois + notaTres + notaQuatro) / 4
		
		if (media >= 7)
			console.log(ciano + `Média: ${media}. Aluno aprovado.`)
		else if (media < 7 && media >= 5)
			console.log(amarelo + `Média: ${media}. Aluno em recuperação.`)
		else
			console.log(vermelho + `Média: ${media}. Aluno reprovado.`)
		console.log(mensagemCor(verde, "Fim."));
		break;

	default:
		console.log("Exercicio não encontrado. Tente um numero de 1 a 6")
		break;
}

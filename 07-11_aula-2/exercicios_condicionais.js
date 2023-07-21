import promptSync from "prompt-sync";
import { mensagemCor, numeroValidacao, comandos } from "./main.js";

//CORES
import { vermelho, verde, amarelo,
		azul, roxo, ciano } from "./main.js";

const prompt = promptSync();

let numero;
let exercicio

function stringValidacao(string) {
	if (!string) {
		console.log(mensagemCor(vermelho, "Valor vazio não aceito."));
		return (null)
	}
	return (string)
}

function opcoes() {
	console.log(verde
		+ "\n1 = Calcula acréscimo de 10% em valores menores que 1000"
		+ "\n2 = Checa se um valor receberá um acréscimo ou não"
		+ "\n3 = Checa se o seu numero é negativo, positivo ou neutro"
		+ "\n4 = Checa se um numero é par ou impar"
		+ "\n5 = Avalia qual é o maior entre dois numeros"
		+ "\n6 = Calculadora de médias\n");
}


function asciiArtConditionals() {	
	console.log(azul
		+ "\n   ____                _ _ _   _                   _     "
		+ "\n  / ___|___  _ __   __| (_) |_(_) ___  _ __   __ _| |___ "
		+ "\n | |   / _ \\| '_ \\ / _` | | __| |/ _ \\| '_ \\ / _` | / __|"
		+ roxo
		+ "\n | |__| (_) | | | | (_| | | |_| | (_) | | | | (_| | \\__ \\"
		+ "\n  \\____\\___/|_| |_|\\__,_|_|\\__|_|\\___/|_| |_|\\__,_|_|___/")
}


export function conditionalsUm(params) {
	asciiArtConditionals()
	opcoes();
	do {
		comandos()
		exercicio = prompt(mensagemCor(roxo, mensagemCor(amarelo,
			"Informe o numero do exercicio (1 a 6): ")) + roxo)
		exercicio = numeroValidacao(exercicio)
		if (exercicio == "op")
			opcoes()
		else if (!isNaN(exercicio))
		{
			switch (exercicio) {
				case 1:
			
					/*
					Exercício 1:
					Faça um programa que receba o nome, cargo e salário de um
					funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
					salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
					desse funcionário.
					*/
					let nome
					let cargo
					let salarioBase
					let salarioAcrescido

					console.log(verde + "\nCalcula acréscimo de 10% em valores menores que 1000\n");
			
					nome = stringValidacao(prompt(mensagemCor(amarelo, "Digite seu nome: ") + roxo))
					if (nome == null)
						break;
					cargo = stringValidacao(prompt(mensagemCor(amarelo, "Digite seu cargo: ") + roxo))
					if (cargo == null)
						break;
					salarioBase = numeroValidacao(prompt(
						mensagemCor(amarelo, "Digite seu salario: ") + roxo))
					if (isNaN(salarioBase))
						break;
					salarioAcrescido
			
					if (salarioBase < 1000) {
						salarioAcrescido = salarioBase + (salarioBase / 10)
						console.log(ciano + `Nome: ` + roxo + `${nome}` + ciano + `.\nCargo: ` + roxo + ` ${cargo}.`)
						console.log(ciano + `Salario base: ` + roxo + `${salarioBase.toFixed(2)}.\n` +
						ciano + `Salario acrescido: ` + roxo + ` ${parseFloat(salarioAcrescido).toFixed(2)}.`)
					}
					else{
						console.log(ciano + `Nome: ` + roxo + `${nome}.\n` + ciano +`Cargo: ` + roxo + `${cargo}.`)
						console.log(ciano + `Salario base: ` + roxo + `${salarioBase.toFixed(2)}\n` + 
						ciano + `Seu salario não receberá o acrescimo.`);
					}
					break;
			
				case 2:
			
					/*
					Exercício 2
					Uma empresa decide dar aumento de 30% aos funcionários cujo
					salário é inferior a 500 reais. Escreva um programa que receba o
					salário de um funcionário e imprima o valor do salário reajustado ou
					uma mensagem caso o funcionário não tenha direito a aumento.
					*/
					let salario

					console.log(verde + "\nCheca se um valor receberá um acréscimo ou não. ");
			
					salario = prompt(mensagemCor(amarelo, "Digite seu salario: ") + roxo)
					salario = numeroValidacao(salario)
					if (isNaN(salario))
						break;
					if (salario < 500) {
						salario += salario / 30
						console.log(ciano + "Seu salario foi reajustado para: " + roxo + salario.toFixed(2) + ".")
					}
					else
						console.log(ciano + "Você não tem direito ao reajuste.")
					
					break;
			
				case 3:
			
					/*
					Exercício 3
					Faça um programa que receba um número inteiro do usuário e informe
					se este número é positivo ou negativo.
					*/
			
					console.log(verde + "\nCheca se o seu numero é negativo, positivo ou neutro. ");
			
					numero = prompt(mensagemCor(amarelo, "Digite um numero: ") + roxo)
					numero = numeroValidacao(numero)
					if (isNaN(numero))
						break;

					if (numero < 0)
						console.log(ciano + "Seu numero é negativo.")
					else if (numero > 0)
						console.log(ciano + "Seu numero é positivo")
					else
						console.log(ciano + "Zero é zero, parça (numero neutro).");
					break;
					
				case 4:
			
					/*
					Exercício 4
					Faça um programa que receba um número do usuário e informe
					se este número é par ou ímpar.
					*/
					let restante

					console.log(verde + "\nCheca se um numero é par ou impar. ");
					numero = prompt(mensagemCor(amarelo, "Digite um numero: ") + roxo)
					numero = numeroValidacao(numero)
					if (isNaN(numero))
						break;

					restante = numero % 2
			
					if (restante != 0)
						console.log(ciano + "Seu numero é impar.")
					else
						console.log(ciano + "Seu numero é par")
					break;
			
				case 5:
			
					/*
					Exercício 5
					Faça um programa receba dois valores e imprima qual é o maior
					número digitado.
					*/
					let numeroUm
					let numeroDois
			
					console.log(verde + "\nAvalia qual é o maior entre dois numeros ");
			
					numeroUm = prompt(mensagemCor(amarelo, "Digite o primeiro numero: ") + roxo)
					numeroUm = numeroValidacao(numeroUm)
					if (isNaN(numeroUm))
						break
					numeroDois = prompt(mensagemCor(amarelo, "Digite o segundo numero: ") + roxo)
					numeroDois = numeroValidacao(numeroDois)
					if (isNaN(numeroDois))
						break
					if (numeroUm > numeroDois)
						console.log(ciano + `Seu numero maior é: ` + roxo + `${numeroUm}.`)
					else if
						(numeroDois > numeroUm)
						console.log(ciano + `Seu numero maior é: ` + roxo + `${numeroDois}.`)
					else
						console.log(ciano + "Seus numeros são iguais")
			
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
							console.log(mensagemCor(vermelho, 
								"A nota informada não foi apresentada corretamente. Por favor, tente outra vez."));
							return (false)
						}
						return (numero)
					}

					function mediaCalculator(notaUm, notaDois, notaTres, notaQuatro) {
						let media
						media = (notaUm + notaDois + notaTres + notaQuatro) / 4
					
						if (media >= 7)
							console.log(ciano + `Média: ${media}. Aluno aprovado.`)
						else if (media < 7 && media >= 5)
							console.log(ciano + `Média: ${media}.` + amarelo + ` Aluno em recuperação.`)
						else
							console.log(vermelho + `Média: ${media}. Aluno reprovado.`)
					}

					let notaUm
					let notaDois
					let notaTres
					let notaQuatro
			
					console.log(verde + "\nCalculadora de médias \nApresente os valores entre 0 e 10 ");
			
					notaUm = notaValidacao((amarelo + "Digite a primeira nota: " + roxo))
					if (!notaUm)
						break;
					notaDois = notaValidacao((amarelo + "Digite a segunda nota: " + roxo))
					if (!notaDois)
						break;
					notaTres = notaValidacao((amarelo + "Digite a terceira nota: " + roxo))
					if (!notaTres)
						break;
					notaQuatro = notaValidacao((amarelo + "Digite a quarta nota: " + roxo))
					if (!notaQuatro)
						break;

					mediaCalculator(notaUm, notaDois, notaTres, notaQuatro)

					break;
			
				default:
					if (exercicio != 0)
						console.log(mensagemCor(vermelho, "Exercicio não encontrado. Tente um numero de 1 a 10."))
					break;
			}
			console.log(mensagemCor(verde, "Fim.\n"));
		}
	} while (exercicio != 0 || exercicio != '\x0D');
}
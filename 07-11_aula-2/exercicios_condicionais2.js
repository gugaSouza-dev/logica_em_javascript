import promptSync from "prompt-sync";
import { mensagemCor, numeroValidacao, comandos } from "./main.js";

//CORES
import { vermelho, verde, amarelo,
		azul, roxo, ciano } from "./main.js";

//NUMEROS
import { numeroUm, numeroDois } from "./main.js"


const prompt = promptSync();

function opcoes() {
	console.log(verde
				+ "\n1 = Login do Ademir"
				+ "\n2 = Dias da Semana"
				+ "\n3 = Checa ordenação de três numeros"
				+ "\n4 = Verificação de idade"
				+ "\n5 = Calculador de descontos"
				+ "\n6 = Calculadora de IMC\n");
}

function asciiArt(params) {
	console.log(azul
		+ "\n   ____                _ _ _   _                   _       ____            _     ___ ___ "
		+ "\n  / ___|___  _ __   __| (_) |_(_) ___  _ __   __ _| |___  |  _ \\ __ _ _ __| |_  |_ _|_ _|"
		+ "\n | |   / _ \\| '_ \\ / _` | | __| |/ _ \\| '_ \\ / _` | / __| | |_) / _` | '__| __|  | | | | "
		+ roxo
		+ "\n | |__| (_) | | | | (_| | | |_| | (_) | | | | (_| | \\__ \\ |  __/ (_| | |  | |_   | | | | "
		+ "\n  \\____\\___/|_| |_|\\__,_|_|\\__|_|\\___/|_| |_|\\__,_|_|___/ |_|   \\__,_|_|   \\__| |___|___|\n");
}



export function conditionalsDois() {
	let exercicio

	asciiArt()
	opcoes()
	do {
		comandos()
		exercicio = numeroValidacao(prompt(
			mensagemCor(amarelo, "Informe o numero do exercicio (1 a 6): ") + roxo))
		if (exercicio == "op")
			opcoes()
		else if (!isNaN(exercicio)) 
		{
			switch (exercicio) {
				case 1:
			
					/*
					Exercício 1: Verificação de login
					Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
					nome de usuário é &quot;admin&quot; e a senha é &quot;senha123&quot;.
					Exiba uma mensagem indicando se o login
					foi bem-sucedido ou não.
					*/
			
					console.log(verde, "\nLogin do Ademir.\n");
			
					let usuario = prompt(mensagemCor(amarelo, "Informe seu usuário: ") + roxo)
					let senha = prompt(mensagemCor(amarelo, "Informe sua senha: ") + roxo)
			
					if (usuario == "admin" && senha == "senha123")
						console.log(mensagemCor(verde, "Login feito com sucesso. Bem vindo, Ademir."));
					else
						console.log(mensagemCor(vermelho, "Você não é o Ademir. Login incorreto."));
					
					break;
			
				case 2:
			
					/*
					Exercício 2: Verificação de dia da semana
					Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
					semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
					2 representa terça-feira e assim por diante.
					*/
					let dia

					console.log(mensagemCor(verde, "\nDias da Semana.\n"));
					dia = numeroValidacao(prompt(mensagemCor(amarelo, "Informe um numero de 1 a 7: ") + roxo))
					
					switch (dia) {
						case 1:
							console.log(mensagemCor(azul, "Segunda-feira."));
							
							break;
						case 2:
							console.log(mensagemCor(azul, "Terça-feira."));
							
							break;
						case 3:
							console.log(mensagemCor(azul, "Quarta-feira."));
							
							break;
						case 4:
							console.log(mensagemCor(azul, "Quinta-feira."));
							
							break;
						case 5:
							console.log(mensagemCor(azul, "Sexta-feira."));
							
							break;
						case 6:
							console.log(mensagemCor(azul, "Sabado."));
							
							break;
						case 7:
							console.log(mensagemCor(azul, "Domingo."));
							
							break;
						default:
							if (isNaN(dia))
								break
							console.log("O numero informado não corresponde á um dia da semana.");
							break;
					}
			
					break;
			
				case 3:
			
					/*
					Exercício 3: Verificação de números em ordem crescente
					Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
					crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.
					*/

					console.log(verde + "\nCheca ordenação de três numeros.\n");
			
					numeroUm = numeroValidacao(prompt(mensagemCor(amarelo, "Insira o primeiro número: ") + roxo))
					if (isNaN(numeroUm))
						break;
					numeroDois = numeroValidacao(prompt(mensagemCor(amarelo, "Insira o segundo número: ") + roxo))
					if (isNaN(numeroDois))
						break;
					numeroTres = numeroValidacao(prompt(mensagemCor(amarelo, "Insira o terceiro número: ") + roxo))
					if (isNaN(numeroTres))
						break;
					
					if (numeroUm > numeroDois || numeroDois > numeroTres)
						console.log(mensagemCor(vermelho, "Seus números não estão em ordem crescente."))
					else if (numeroUm < numeroDois || numeroDois < numeroTres)
						console.log(mensagemCor(verde, "Seus números estão em ordem crescente."));
					else
						console.log(mensagemCor(verde, "Seus numeros são iguais."));
					
			
					break;
			
				case 4:
			
					/*
					Exercício 4: Verificação de idade
					Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
					de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.
					*/
					let anoNascimento
					let anoAtual
					let idade

					console.log(verde + "\nVerificação de idade.\n");
					anoNascimento = numeroValidacao(prompt(mensagemCor(amarelo, "Informe o seu ano de nascimento: ") + roxo))
					if (isNaN(anoNascimento))
						break;
					anoAtual = numeroValidacao(prompt(mensagemCor(amarelo, "Informe o ano que estamos: ") + roxo))
					if (isNaN(anoAtual))
						break;
					idade = anoAtual - anoNascimento
			
					if (idade >= 18)
						console.log(mensagemCor(azul, "Parabens! Você é maior de idade e pode ser preso!"));
					else
						console.log(mensagemCor(azul, 
							"Parabéns! Você ainda não é um maior de idade. Aproveite, pois vai acabar."));
					
					break;
				
				case 5:
			
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
					let valor

					console.log(verde + "\nCalculador de descontos.\n");			
					valor = numeroValidacao(prompt((mensagemCor(amarelo, "Informe o valor total da compra: ") + roxo)))
					if (isNaN(valor))
						break;
					console.log(ciano + `Valor da compra: ` + roxo + `R$${valor}`);
			
					if (valor > 100 || valor <= 200)
						valor -= valor / 10
					else if (valor > 200)
						valor -= valor / 20
			
					console.log(ciano + `Valor da compra com desconto: ` + roxo + `R$${valor.toFixed(2)}`);
					break;
					
				case 6:
			
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
					let peso
					let altura
					let imc

					console.log(verde + "\nCalculadora de IMC");
			
					peso = numeroValidacao(prompt(mensagemCor(amarelo, "Informe o peso em KG: ") + roxo))
					if (isNaN(peso))
						break;
					altura = numeroValidacao(prompt(mensagemCor(amarelo, "Informe a altura em metros: ") + roxo))
					if (isNaN(altura))
						break;
					imc = peso / (altura * altura)
					
					if (imc < 18.5)
						console.log(mensagemCor(roxo, "Abaixo do peso."));
					else if (imc < 24.9)
						console.log(mensagemCor(verde, "Peso normal."));
					else if (imc < 29.9)
						console.log(mensagemCor(roxo, "Sobrepeso"));
					else if (imc < 34.9)
						console.log(mensagemCor(vermelho, "Obesidade grau 1"));
					else if (imc < 39.9)
						console.log(mensagemCor(vermelho, "Obesidade grau 2"));
					else
						console.log(mensagemCor(vermelho, "Obesidade grau 3"));
					
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

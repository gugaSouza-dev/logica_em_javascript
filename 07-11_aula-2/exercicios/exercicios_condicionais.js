import promptSync from "prompt-sync";
import { mensagemCor, numeroValidacao } from "../main.js";

//CORES
import { vermelho, verde, amarelo,
		azul, roxo, ciano } from "../main.js";

const prompt = promptSync();

function stringValidacao(string) {
	if (!string) {
		console.log(mensagemCor(vermelho, "Valor vazio não aceito."));
		return (null)
	}
	return (string)
}

function notaValidacao(mensagem, numero) {
	numero = parseFloat(prompt(mensagem))

	if (isNaN(numero) || numero < 0 || numero > 10){
		console.log(mensagemCor(vermelho, 
			"A nota informada não foi apresentada corretamente. Por favor, tente outra vez."));
		return (-1)
	}
	return (numero)
}

function mediaCalculator(notas) {
	let media
	media = (notas.notaUm + notas.notaDois + notas.notaTres + notas.notaQuatro) / 4

	if (media >= 7)
		console.log(ciano + `Média: ${media}. Aluno aprovado.`)
	else if (media < 7 && media >= 5)
		console.log(ciano + `Média: ${media}.` + amarelo + ` Aluno em recuperação.`)
	else
		console.log(vermelho + `Média: ${media}. Aluno reprovado.`)
}

export function salarioAcrescimoDez(params) {
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
		return (-1)
	cargo = stringValidacao(prompt(mensagemCor(amarelo, "Digite seu cargo: ") + roxo))
	if (cargo == null)
		return (-1)
	salarioBase = numeroValidacao(prompt(
		mensagemCor(amarelo, "Digite seu salario: ") + roxo))
	if (isNaN(salarioBase))
		return (-1)
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
}

export function salarioAcrescidoTrinta(params) {
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
		return (-1)
	if (salario < 500) {
		salario += salario / 30
		console.log(ciano + "Seu salario foi reajustado para: " + roxo + salario.toFixed(2) + ".")
	}
	else
		console.log(ciano + "Você não tem direito ao reajuste.")

}

export function positivoOuNegativo(numero) {
	/*
	Exercício 3
	Faça um programa que receba um número inteiro do usuário e informe
	se este número é positivo ou negativo.
	*/

	console.log(verde + "\nCheca se o seu numero é negativo, positivo ou neutro. ");

	numero = prompt(mensagemCor(amarelo, "Digite um numero: ") + roxo)
	numero = numeroValidacao(numero)
	if (isNaN(numero))
		return (-1)

	if (numero < 0)
		console.log(ciano + "Seu numero é negativo.")
	else if (numero > 0)
		console.log(ciano + "Seu numero é positivo")
	else
		console.log(ciano + "Zero é zero, parça (numero neutro).");
	return (-1)
}

export function imparOuPar(numero) {
	/*
	Exercício 4
	Faça um programa que receba um número do usuário e informe
	se este número é par ou ímpar.
	*/
	let restante = 0

	console.log(verde + "\nCheca se um numero é par ou impar. ");
	numero = prompt(mensagemCor(amarelo, "Digite um numero: ") + roxo)
	numero = numeroValidacao(numero)
	if (isNaN(numero))
		return (-1)

	restante = numero % 2

	if (restante != 0)
		console.log(ciano + "Seu numero é impar.")
	else
		console.log(ciano + "Seu numero é par")

}

export function maiorValor(params) {
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
		return (-1)
	numeroDois = prompt(mensagemCor(amarelo, "Digite o segundo numero: ") + roxo)
	numeroDois = numeroValidacao(numeroDois)
	if (isNaN(numeroDois))
		return (-1)
	if (numeroUm > numeroDois)
		console.log(ciano + `Seu numero maior é: ` + roxo + `${numeroUm}.`)
	else if
		(numeroDois > numeroUm)
		console.log(ciano + `Seu numero maior é: ` + roxo + `${numeroDois}.`)
	else
		console.log(ciano + "Seus numeros são iguais")

}



export function media(numero) {
	/*
	Exercício 6
	Faça um programa que receba 4 notas de um aluno, calcule e
	imprima a média aritmética das notas e a mensagem de APROVADO
	para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre
	5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.
	*/

	let notas = {notaUm: 0, notaDois: 0, notaTres: 0, notaQuatro: 0}

	console.log(verde + "\nCalculadora de médias \nApresente os valores entre 0 e 10 ");

	notas.notaUm = notaValidacao((amarelo + "Digite a primeira nota: " + roxo), numero)
	if (notas.notaUm == -1)
		return(-1)
	notas.notaDois = notaValidacao((amarelo + "Digite a segunda nota: " + roxo), numero)
	if (notas.notaDois == -1)
		return(-1)
	notas.notaTres = notaValidacao((amarelo + "Digite a terceira nota: " + roxo), numero)
	if (notas.notaTres == -1)
		return(-1)
	notas.notaQuatro = notaValidacao((amarelo + "Digite a quarta nota: " + roxo), numero)
	if (notas.notaQuatro == -1)
		return(-1)

	mediaCalculator(notas)
}

let prompt = require('prompt-sync')();
let process = require('process');


let exercicio = prompt("Informe o numero do exercicio (1 a 10): ")
let numero

let verde = '\u001b[' + 32 + ';1m'
let azul = '\u001b[' + 34 + ';1m'
let roxo = '\u001b[' + 35 + ';1m'
let branco = '\u001b[' + 37 + ';1m'

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
		/*
		1. Imprimir números de 1 a 10 utilizando o loop for.
		*/
		console.log("Numeros de 1 a 10: ");
		for (let i = 1; i <= 10; i++)
			console.log(i);
		break;
	case "2":
		/*
		2. Imprimir números pares de 1 a 10.
		*/
		console.log("Numeros pares de 1 a 10:");
		for (let i = 0; i <= 10; i = i + 2)
			console.log(i);
		break;
	case "3":
		/*
		3. Faça um programa que imprima os números ímpares de 0 a 50.
		*/
		console.log("Numeros ímpares de 0 a 50:");
		for (let i = 1; i <= 50; i = i + 2)
			console.log(i);
		break;
	case "4":
		/*
		4. Faça um programa que imprima na tela a tabuada de um número
		qualquer escolhido pelo usuário até o 10.
		*/
		console.log("Tabuada:");
		let multiplicador = numeroValidacao("Informe o número que deseja ser multiplicado: ")
		for (let i = 0; i <= 10; i++)
			console.log(`${multiplicador} * ${i} = ${multiplicador * i}`);
		break;
	case "5":
		/*
		5. Imprimir os primeiros 10 números da sequência de Fibonacci.
		*/
		function fiboPosicao(fibo, posicao) {
			console.log(roxo + `Posição ${posicao}:\t` + azul + `${fibo}.` + branco)
		}
		console.log(verde + "Sequência de Febonacci:");
		let t1 = 0, t2 = 1, fibonacci = t1 + t2
		for (let i = 2; i <= 9; i++){
			if (t1 == 0){
				fiboPosicao(t1, 1);
				fiboPosicao(t2, 2);
			}
			fiboPosicao(fibonacci, i+1);
			t1 = t2
			t2 = fibonacci
			fibonacci = t1 + t2
		}
		break;
	case "6":
		/*
		6. Imprimir números pares de 0 a 20 utilizando o loop while.
		*/
		console.log("Numeros pares de 0 a 20:");
		numero = 0
		while (numero <= 20) {
			if (numero%2 == 0)
		console.log(numero);
			numero++
		}
		break;
	case "7":
		/*
		7. Calcular a soma dos números de 1 a 100 utilizando a estrutura
		while.
		*/
		
		break;
	case "8":
		/*
		8. Faça um programa que receba a idade do usuário, enquanto a
		resposta do usuário for menor que 18 anos continue a solicitar a
		idade e mostre uma mensagem quando a idade do usuário for
		maior que 18.
		*/
		console.log("Validação de idade:");
		let idade = 0
		while (idade < 18) {
			idade = numeroValidacao("Digite sua idade: ")
			if (idade < 18)
		console.log("Idade inválida.");
		}
		console.log("Idade válida!");
		break;
	case "9":
		/*
		9. Faça um programa que receba um número do usuário e mostre
		 console a contagem regressiva até 0.
		*/
		console.log("Contagem regressiva:");
		numero = numeroValidacao("Informe seu numero: ")
		while (numero >= 0) {
			console.log(numero);
			numero--;
		}
		break;
	case "10":
		/*
		10. Faça um programa que receba um número do usuário e continue
		a pedir o número se o numero for diferente de 0.
		*/
		console.log("Loop infinito de zero:");
		numero = 1
		while (numero != 0) {
			numero = numeroValidacao("Digite sua numero: ")
			if (numero != 0)
		console.log("Numero inválido.");
		}
		console.log("Valor válida!");
		break;
	default:
		console.log("Exercicio não encontrado. Tente um numero de 1 a 10")
		break;
}


let prompt = require('prompt-sync')();
let process = require('process');

let vermelho = '\u001b[' + 31 + ';1m'
let verde = '\u001b[' + 32 + ';1m'
let amarelo = '\u001b[' + 33 + ';1m'
let azul = '\u001b[' + 34 + ';1m'
let roxo = '\u001b[' + 35 + ';1m'
let ciano = '\u001b[' + 36 + ';1m'
let branco = '\u001b[' + 37 + ';1m'

let numero;

function mensagemCor(cor, mensagem) {
	return (cor + mensagem + branco);
}

function numeroValidacao(mensagem) {
	numero = parseFloat(prompt(mensagem))
	if (isNaN(numero)){
		console.log(mensagemCor(vermelho, "O valor informado não é um numero. Por favor, tente novamente."));
		process.exit(-1)
	}
	return (numero)
}

let exercicio = numeroValidacao(mensagemCor(roxo, "Informe o numero do exercicio (1 a 10): "))

switch (exercicio) {
	case 1:
		/*
		1. Imprimir números de 1 a 10 utilizando o loop for.
		*/
		console.log(verde + "Numeros de 1 a 10: ");
		for (let i = 1; i <= 10; i++)
			console.log(mensagemCor(azul, i));
		console.log(mensagemCor(verde, "Fim."));
		break;
	case 2:
		/*
		2. Imprimir números pares de 1 a 10.
		*/
		console.log(verde + "Numeros pares de 1 a 10:");
		for (let i = 0; i <= 10; i = i + 2)
			console.log(mensagemCor(azul, i));
		console.log(mensagemCor(verde, "Fim."));
		break;
	case 3:
		/*
		3. Faça um programa que imprima os números ímpares de 0 a 50.
		*/
		console.log(verde + "Numeros ímpares de 0 a 50:");
		for (let i = 1; i <= 50; i = i + 2)
			console.log(mensagemCor(azul, i));
		console.log(mensagemCor(verde, "Fim."));
		break;
	case 4:
		/*
		4. Faça um programa que imprima na tela a tabuada de um número
		qualquer escolhido pelo usuário até o 10.
		*/
		console.log(verde + "===== Tabuada =====");
		let multiplicador = numeroValidacao(amarelo + "Informe o número que deseja ser multiplicado: " + branco)
		for (let i = 0; i <= 10; i++)
			console.log(mensagemCor(roxo, `${multiplicador} * ${i} =`), mensagemCor(azul, `${multiplicador * i}`));
		console.log(mensagemCor(verde, "Fim."));
		break;
	case 5:
		/*
		5. Imprimir os primeiros 10 números da sequência de Fibonacci.
		*/
		function fiboPosicao(fibo, posicao) {
			console.log(mensagemCor(roxo, `Posição ${posicao}:\t`), mensagemCor(azul, `${fibo}.`))
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
		console.log(mensagemCor(verde, "Fim."));
		break;
	case 6:
		/*
		6. Imprimir números pares de 0 a 20 utilizando o loop while.
		*/
		console.log(verde + "Numeros pares de 0 a 20:");
		numero = 0
		while (numero <= 20) {
			if (numero%2 == 0)
				console.log(mensagemCor(azul, numero));
			numero++
		}
		console.log(mensagemCor(verde, "Fim."));
		break;
	case 7:
		/*
		7. Calcular a soma dos números de 1 a 100 utilizando a estrutura
		while.
		?????????????????????????????????????
		*/
		
		break;
	case 8:
		/*
		8. Faça um programa que receba a idade do usuário, enquanto a
		resposta do usuário for menor que 18 anos continue a solicitar a
		idade e mostre uma mensagem quando a idade do usuário for
		maior que 18.
		*/
		console.log(verde + "===== Validação de idade =====");
		let idade = 0
		while (idade < 18) {
			idade = numeroValidacao(amarelo + "Digite sua idade: " + ciano)
			if (idade < 18)
		console.log(mensagemCor(vermelho, "Idade inválida."));
		}
		console.log(mensagemCor(verde, "Idade válida!"));
		console.log(mensagemCor(verde, "Fim."));
		break;
	case 9:
		/*
		9. Faça um programa que receba um número do usuário e mostre
		 console a contagem regressiva até 0.
		*/
		console.log(verde + "===== Contagem regressiva =====");
		numero = numeroValidacao(amarelo + "Informe seu numero: ")
		while (numero >= 0) {
			console.log(mensagemCor(azul, numero));
			numero--;
		}
		console.log(mensagemCor(verde, "Fim."));
		break;
	case 10:
		/*
		10. Faça um programa que receba um número do usuário e continue
		a pedir o número se o numero for diferente de 0.
		*/
		console.log(verde + "===== Loop infinito de zeros =====");
		numero = 1
		while (numero != 0) {
			numero = numeroValidacao(amarelo + "Digite sua numero: ")
			if (numero != 0)
			console.log(mensagemCor(vermelho, "Numero inválido."));
		}
		console.log(mensagemCor(verde, "Valor valido!"));
		console.log(mensagemCor(verde, "Fim."));
		break;
	default:
		console.log(mensagemCor(vermelho, "Exercicio não encontrado. Tente um numero de 1 a 10."))
		break;
}


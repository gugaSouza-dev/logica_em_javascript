import promptSync from "prompt-sync";
import { mensagemCor, numeroValidacao } from "../main.js";

//CORES
import { vermelho, verde, amarelo,
		azul, roxo } from "../main.js";

const prompt = promptSync();

let numero = 0

function fiboPosicao(fibo, posicao) {
	console.log(mensagemCor(roxo, `Posição ${posicao}:\t`), mensagemCor(azul, `${fibo}.`))
}

export function umADez() {
	/*
	1. Imprimir números de 1 a 10 utilizando o loop for.
	*/
	let numeros = []
	let index = 0

	console.log(verde + "\nNumeros de 1 a 10: ");
	for (let i = 1; i <= 10; i++)
	numeros[index++] = i
	console.log(mensagemCor(azul, numeros));
}

export function umADezPares() {
	/*
	2. Imprimir números pares de 1 a 10.
	*/
	let numeros = []
	let index = 0

	console.log(verde + "\nNumeros pares de 1 a 10:");
	for (let i = 0; i <= 10; i = i + 2)
	numeros[index++] = i
	console.log(mensagemCor(azul, numeros));
}

export function zeroACinquentaImpar() {
	/*
	3. Faça um programa que imprima os números ímpares de 0 a 50.
	*/
	let numeros = []
	let index = 0

	console.log(verde + "\nNumeros ímpares de 0 a 50:");
	for (let i = 1; i <= 50; i = i + 2)
	numeros[index++] = i
	console.log(mensagemCor(azul, numeros));

}

export function tabuada() {
	/*
	4. Faça um programa que imprima na tela a tabuada de um número
	qualquer escolhido pelo usuário até o 10.
	*/
	let multiplicador

	console.log(verde + "\nTabuada");
	multiplicador = prompt(mensagemCor(amarelo, 
		"Informe o número que deseja ser multiplicado: ") + roxo)
	if (isNaN(numeroValidacao(multiplicador)))
		return (-1)
	multiplicador = numeroValidacao(multiplicador)
	for (let i = 0; i <= 10; i++)
	console.log(mensagemCor(azul, `${multiplicador} * ${i} =`), 
	mensagemCor(roxo, `${multiplicador * i}`));
}

export function fibonacci(params) {
	/*
	5. Imprimir os primeiros 10 números da sequência de Fibonacci.
	*/
	console.log(verde + "Sequência de Febonacci");
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
}

export function zeroAVinte(params) {
	/*
	6. Imprimir números pares de 0 a 20 utilizando o loop while.
	*/
	let numero = 0
	let numeros = []
	let index = 0

	console.log(verde + "\nNumeros pares de 0 a 20");
	while (numero <= 20) {
		if (numero%2 == 0)
		numeros[index++] = numero
		numero++
	}
	console.log(mensagemCor(azul, numeros));

}

export function somaUmACem(params) {
	/*
	7. Calcular a soma dos números de 1 a 100 utilizando a estrutura
	while.
	*/
	console.log(mensagemCor(verde, "\nSoma dos numeros de 1 a 100"));
	let soma = 0;
	let contador = 0;
	
	while (contador <= 100) {
		soma += contador
		contador++;
	}
	console.log(mensagemCor(azul, soma));

}

export function idadeValidacao(params) {
	/*
	8. Faça um programa que receba a idade do usuário, enquanto a
	resposta do usuário for menor que 18 anos continue a solicitar a
	idade e mostre uma mensagem quando a idade do usuário for
	maior que 18.
	*/
	let idade

	console.log(verde + "\nValidação de idade");
	idade = 0
	while (idade < 18) {
		idade = numeroValidacao(prompt(mensagemCor(amarelo, "Digite sua idade: ") + roxo))
		if (isNaN(idade))
			break;						
		if (idade < 18)
			console.log(mensagemCor(vermelho, "Idade inválida."));
		else
			console.log(mensagemCor(verde, "\nIdade válida!"));
	}
}

export function contagemRegressiva(params) {
	/*
	9. Faça um programa que receba um número do usuário e mostre
	console a contagem regressiva até 0.
	*/
	console.log(verde + "\nContagem regressiva ");
	numero = numeroValidacao(prompt(mensagemCor(amarelo,
		"Informe seu numero para iniciar a contagem: ") + roxo))
	if (isNaN(numero))
		return (-1)
	while (numero >= 0) {
		console.log(mensagemCor(azul, numero));
		numero--;
	}		
}

export function zeroLoop(params) {
	/*
	10. Faça um programa que receba um número do usuário e continue
	a pedir o número se o numero for diferente de 0.
	*/
	console.log(verde + "\nLoop infinito de zeros ");
	numero = 1
	while (numero != 0) {
		numero = parseInt(prompt(amarelo + "Digite seu numero: " + roxo))
		if (numero != 0)
		console.log(mensagemCor(vermelho, "Numero inválido."));
	}
	console.log(mensagemCor(verde, "Valor valido!"));
}

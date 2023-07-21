import promptSync from "prompt-sync";
import { mensagemCor, numeroValidacao, comandos } from "./main.js";

//CORES
import { vermelho, verde, amarelo,
		azul, roxo } from "./main.js";

const prompt = promptSync();

let numero;
let numeros = []
let index = 0

function opcoes() {
	console.log(verde
				+ "\n1 = Numeros de 1 a 10"
				+ "\n2 = Numeros pares de 1 a 10"
				+ "\n3 = Numeros ímpares de 0 a 50"
				+ "\n4 = Tabuada"
				+ "\n5 = Sequência de Febonacci"
				+ "\n6 = Numeros pares de 0 a 20"
				+ "\n7 = Soma dos numeros de 1 a 100"
				+ "\n8 = Validação de idade"
				+ "\n9 = Contagem regressiva"
				+ "\n10 = Loop infinito de zeros\n");
}

function asciiArtLoopings(){
	console.log(azul
	+ "\n██╗      ██████╗  ██████╗ ██████╗ ██╗███╗   ██╗ ██████╗ ███████╗"
	+ "\n██║     ██╔═══██╗██╔═══██╗██╔══██╗██║████╗  ██║██╔════╝ ██╔════╝"
	+ "\n██║     ██║   ██║██║   ██║██████╔╝██║██╔██╗ ██║██║  ███╗███████╗"
	+ roxo
	+ "\n██║     ██║   ██║██║   ██║██╔═══╝ ██║██║╚██╗██║██║   ██║╚════██║"
	+ "\n███████╗╚██████╔╝╚██████╔╝██║     ██║██║ ╚████║╚██████╔╝███████║"
	+ "\n╚══════╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝")
}

export function loopings(params) {
	let exercicio

	asciiArtLoopings()
	opcoes();

	do {
		numero = 0
		numeros = []
		index = 0

		comandos()
		exercicio = prompt(mensagemCor(amarelo,
			"Informe o numero do exercicio (1 a 10): ") + roxo)
		exercicio = numeroValidacao(exercicio)
		if (exercicio == "op")
			opcoes()
		else if (!isNaN(exercicio))
		{	
			switch (exercicio) {
				case 1:
					/*
					1. Imprimir números de 1 a 10 utilizando o loop for.
					*/
					console.log(verde + "\nNumeros de 1 a 10: ");
					for (let i = 1; i <= 10; i++)
					numeros[index++] = i
					console.log(mensagemCor(azul, numeros));
					break;
				case 2:
					/*
					2. Imprimir números pares de 1 a 10.
					*/
					console.log(verde + "\nNumeros pares de 1 a 10:");
					for (let i = 0; i <= 10; i = i + 2)
					numeros[index++] = i
					console.log(mensagemCor(azul, numeros));
					break;
				case 3:
					/*
					3. Faça um programa que imprima os números ímpares de 0 a 50.
					*/
					console.log(verde + "\nNumeros ímpares de 0 a 50:");
					for (let i = 1; i <= 50; i = i + 2)
					numeros[index++] = i
					console.log(mensagemCor(azul, numeros));
					break;
				case 4:
					/*
					4. Faça um programa que imprima na tela a tabuada de um número
					qualquer escolhido pelo usuário até o 10.
					*/
					let multiplicador

					console.log(verde + "\nTabuada");
					multiplicador = prompt(mensagemCor(amarelo, 
						"Informe o número que deseja ser multiplicado: ") + roxo)
					if (isNaN(numeroValidacao(multiplicador)))
						break;
					multiplicador = numeroValidacao(multiplicador)
					for (let i = 0; i <= 10; i++)
					console.log(mensagemCor(azul, `${multiplicador} * ${i} =`), 
					mensagemCor(roxo, `${multiplicador * i}`));
					break;
				case 5:
					/*
					5. Imprimir os primeiros 10 números da sequência de Fibonacci.
					*/
					function fiboPosicao(fibo, posicao) {
						console.log(mensagemCor(roxo, `Posição ${posicao}:\t`), mensagemCor(azul, `${fibo}.`))
					}

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
					break;
				case 6:
					/*
					6. Imprimir números pares de 0 a 20 utilizando o loop while.
					*/
					console.log(verde + "\nNumeros pares de 0 a 20");
					numero = 0
					while (numero <= 20) {
						if (numero%2 == 0)
						numeros[index++] = numero
						numero++
					}
					console.log(mensagemCor(azul, numeros));
					break;
				case 7:
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
					break;
				case 8:
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
					break;
				case 9:
					/*
					9. Faça um programa que receba um número do usuário e mostre
					console a contagem regressiva até 0.
					*/
					console.log(verde + "\nContagem regressiva ");
					numero = numeroValidacao(prompt(mensagemCor(amarelo,
						"Informe seu numero para iniciar a contagem: ") + roxo))
					if (isNaN(numero))
						break
					while (numero >= 0) {
						console.log(mensagemCor(azul, numero));
						numero--;
					}
					break;
				case 10:
					/*
					10. Faça um programa que receba um número do usuário e continue
					a pedir o número se o numero for diferente de 0.
					*/
					console.log(verde + "\nLoop infinito de zeros ");
					numero = 1
					while (numero != 0) {
						numero = parseInt(prompt(amarelo + "Digite sua numero: "))
						if (numero != 0)
						console.log(mensagemCor(vermelho, "Numero inválido."));
					}
					console.log(mensagemCor(verde, "Valor valido!"));
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
		
import promptSync from "prompt-sync";
import { mensagemCor, numeroValidacao, comandos } from "../main.js";

//CORES
import { vermelho, verde, amarelo,
		azul, roxo } from "../main.js";

// FUNÇÕES
import { umADez, umADezPares, zeroACinquentaImpar,
	tabuada, fibonacci, zeroAVinte, somaUmACem,
	idadeValidacao, contagemRegressiva, zeroLoop,
	} from "../exercicios/exercicios_loop.js";

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

export function loopings() {
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
					umADez();
					break;
				case 2:
					umADezPares()
					break;
				case 3:
					zeroACinquentaImpar()
					break;
				case 4:
					tabuada()
					break;
				case 4:
					tabuada()
				case 5:
					fibonacci()
					break;
				case 6:
					zeroAVinte()
					break;
				case 7:
					somaUmACem()
					break;
				case 8:
					idadeValidacao()
					break;
				case 9:
					contagemRegressiva()
					break;
				case 10:
					zeroLoop()
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
		
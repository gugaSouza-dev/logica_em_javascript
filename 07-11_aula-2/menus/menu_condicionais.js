import promptSync from "prompt-sync";
import { mensagemCor, numeroValidacao, comandos } from "../main.js";
import { imparOuPar, maiorValor, positivoOuNegativo,
	 salarioAcrescidoTrinta, salarioAcrescimoDez, media } from "../exercicios/exercicios_condicionais.js";

//CORES
import { vermelho, verde, amarelo,
		azul, roxo, ciano } from "../main.js";

//NUMEROS
import { numero, numeroUm, numeroDois } from "../main.js"

const prompt = promptSync();

let exercicio

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

export function conditionalsUm() {
	let numero

	asciiArtConditionals()
	opcoes();
	do {
		numero = 0
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
					salarioAcrescimoDez()
					break;
				case 2:
					salarioAcrescidoTrinta()
					break;
			
				case 3:
					positivoOuNegativo(numero)
					break;
				case 4:
					imparOuPar(numero)
					break;
			
				case 5:
					maiorValor()
					break;
			
				case 6:
					media(numero)
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
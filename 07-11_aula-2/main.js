import promptSync from "prompt-sync";
import { exit } from 'process';
import { loopings } from "./menus/menu_loop.js";
import { conditionalsUm } from "./menus/menu_condicionais.js";
import { conditionalsDois } from "./menus/menu_condicionais2.js";


import { s̸͇̫͈̳̓̎́̒̏̈́͒͗͘͠t̴̡̢̞̪̫̫̤̦̳̻͚̦̭̾̄͒͂̃͂͛̈̉̒̒͜ǎ̷̧̛̛̺̮̞̪̲͈̝̓͂̈̏́͊͐́̂̀͠͠ͅn̷͎̙̈̌̊͗̂̀̆̀̄̕ } from "./s̸͇̫͈̳̓̎́̒̏̈́͒͗͘͠t̴̡̢̞̪̫̫̤̦̳̻͚̦̭̾̄͒͂̃͂͛̈̉̒̒͜ǎ̷̧̛̛̺̮̞̪̲͈̝̓͂̈̏́͊͐́̂̀͠͠ͅn̷͎̙̈̌̊͗̂̀̆̀̄̕.js";


const prompt = promptSync();

export const vermelho = '\u001b[' + 31 + ';1m'
export const verde = '\u001b[' + 32 + ';1m'
export const amarelo = '\u001b[' + 33 + ';1m'
export const azul = '\u001b[' + 34 + ';1m'
export const roxo = '\u001b[' + 35 + ';1m'
export const ciano = '\u001b[' + 36 + ';1m'
export const reset = '\x1b[0m'

export let numero
export let numeroUm
export let numeroDois

let opcao

export function mensagemCor(cor, mensagem) {
	return (cor + mensagem + reset);
}

export function numeroValidacao(numero) {
	//checa se o input do usuario é um ENTER. Se for, encerra o programa
	if (numero == null || isNaN(numero.charCodeAt(0)))
	{
		console.log(reset);
		exit(0)
	}
	if (numero == "op")
		return (numero)
	if (isNaN(parseFloat(numero))){
		console.log(mensagemCor(vermelho, 
			"O valor informado não é um numero. Por favor, tente novamente."));
		return (numero)
	}
	return (parseFloat(numero))
}

export function comandos() {	
	console.log(mensagemCor(ciano, "Para sair, digite:" + roxo + " 0"
	+ ciano +"\nPara mostrar as opções, digite: " + roxo + "op"));
}


function asciiArtMenu(){
	console.log(azul
	+ "\n$$\\      $$\\     "
	+ "\n$$$\\    $$$ |   "
	+ "\n$$$$\\  $$$$ | $$$$$$\\  $$$$$$$\\  $$\\   $$\\ "
	+ "\n$$\\$$\\$$ $$ |$$  __$$\\ $$  __$$\\ $$ |  $$ |"
	+ "\n$$\\$$\\$$ $$ |$$  __$$\\ $$  __$$\\ $$ |  $$ |"
	+ roxo
	+ "\n$$ \\$$$  $$ |$$$$$$$$ |$$ |  $$ |$$ |  $$ |"
	+ "\n$$ |\\$  /$$ |$$   ____|$$ |  $$ |$$ |  $$ |"
	+ "\n$$ | \\_/ $$ |\\$$$$$$$\\ $$ |  $$ |\\$$$$$$  |"
	+ "\n\\__|     \\__| \\_______|\\__|  \\__| \\______/ \n")
}

function opcoesAtividades() {
	console.log(mensagemCor(verde,
		"1 = Exercicios de Condicionais 1\
		\n2 = Exercicios de condicionais 2\
		\n3 = Exercicios de Loopings\n"));
}

asciiArtMenu()
do {
	opcoesAtividades();
	console.log(mensagemCor(ciano, "Para sair, digite:" + roxo + " 0" + reset))
	opcao = prompt(mensagemCor(amarelo, 
		"Escolha um conjunto de exercícios: ") + roxo)
	opcao = numeroValidacao(opcao)
	if (opcao == 666){

		s̸͇̫͈̳̓̎́̒̏̈́͒͗͘͠t̴̡̢̞̪̫̫̤̦̳̻͚̦̭̾̄͒͂̃͂͛̈̉̒̒͜ǎ̷̧̛̛̺̮̞̪̲͈̝̓͂̈̏́͊͐́̂̀͠͠ͅn̷͎̙̈̌̊͗̂̀̆̀̄̕()
		
	}
	else if (opcao > 3 || opcao < 0)
		console.log(mensagemCor(vermelho, "Conjunto não encontrado.\nInforme um numero de 1 a 3."));
	switch (opcao) {
		case 1:
			conditionalsUm()
			break;
		case 2:
			conditionalsDois()
			break;
		case 3:
			loopings()
			break;
		default:
			break;
	}
} while (opcao);

console.log(reset);

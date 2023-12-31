import promptSync from "prompt-sync";
import { mensagemCor, numeroValidacao, comandos } from "../main.js";
import { descontoProgressivo, diaDaSemana, imc,
	login, numerosCrescentes, idadeVerificacao } from "../exercicios/exercicios_condicionais2.js";

//CORES
import { vermelho, verde, amarelo,
		azul, roxo } from "../main.js";

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

function asciiArt() {
	console.log(azul
	+ "\n ██████╗ ██████╗ ███╗   ██╗██████╗ ██╗████████╗██╗ ██████╗ ███╗   ██╗ █████╗ ██╗     ███████╗    ██████╗ "
	+ "\n██╔════╝██╔═══██╗████╗  ██║██╔══██╗██║╚══██╔══╝██║██╔═══██╗████╗  ██║██╔══██╗██║     ██╔════╝    ╚════██╗"
	+ "\n██║     ██║   ██║██╔██╗ ██║██║  ██║██║   ██║   ██║██║   ██║██╔██╗ ██║███████║██║     ███████╗     █████╔╝"
	+ roxo
	+ "\n██║     ██║   ██║██║╚██╗██║██║  ██║██║   ██║   ██║██║   ██║██║╚██╗██║██╔══██║██║     ╚════██║    ██╔═══╝ "
	+ "\n╚██████╗╚██████╔╝██║ ╚████║██████╔╝██║   ██║   ██║╚██████╔╝██║ ╚████║██║  ██║███████╗███████║    ███████╗"
	+ "\n ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚══════╝    ╚══════╝")
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
					let user = {usuario: "", senha: ""}

					console.log(verde, "\nLogin do Ademir.\n");
					user.usuario = prompt(mensagemCor(amarelo, "Informe seu usuário: ") + roxo)
					user.senha = prompt(mensagemCor(amarelo, "Informe sua senha: ") + roxo)
					login(user)
					break;
				case 2:
					let dia

					console.log(mensagemCor(verde, "\nDias da Semana.\n"));
					dia = numeroValidacao(prompt(mensagemCor(amarelo, "Informe um numero de 1 a 7: ") + roxo))
					diaDaSemana(dia)
					break;
				case 3:
					let numeroUm
					let numeroDois
					let numeroTres
				
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

					numerosCrescentes(numeroUm, numeroDois, numeroTres)
					break;
				case 4:
					let anoNascimento
					let anoAtual
				
					console.log(verde + "\nVerificação de idade.\n");

					anoNascimento = numeroValidacao(prompt(mensagemCor(amarelo, "Informe o seu ano de nascimento: ") + roxo))
					if (isNaN(anoNascimento))
						break;
					anoAtual = numeroValidacao(prompt(mensagemCor(amarelo, "Informe o ano que estamos: ") + roxo))
					if (isNaN(anoAtual))
						break;
					idadeVerificacao(anoNascimento, anoAtual)				
					break;
				case 5:
					let valor

					console.log(verde + "\nCalculador de descontos.\n");			

					valor = numeroValidacao(prompt((mensagemCor(amarelo, "Informe o valor total da compra: ") + roxo)))
					if (isNaN(valor))
						break;
					descontoProgressivo(valor)
					break;
				case 6:
					let peso
					let altura

					console.log(verde + "\nCalculadora de IMC");

					peso = numeroValidacao(prompt(mensagemCor(amarelo, "Informe o peso em KG: ") + roxo))
					if (isNaN(peso))
						break;
					altura = numeroValidacao(prompt(mensagemCor(amarelo, "Informe a altura em metros: ") + roxo))
					if (isNaN(altura))
						break;
					imc(peso, altura)			
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

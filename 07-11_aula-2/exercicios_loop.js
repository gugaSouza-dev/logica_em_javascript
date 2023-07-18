let prompt = require('prompt-sync')();
let process = require('process');


let exercicio = prompt("Informe o numero do exercicio: ")
let numero

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
		for (let i = 1; i <= 10; i++)
			console.log(i);
		break;
	case "2":
		for (let i = 0; i <= 10; i = i + 2)
			console.log(i);
		break;
	case "3":
		for (let i = 1; i <= 50; i = i + 2)
			console.log(i);
		break;
	case "4":
		let multiplicador = numeroValidacao("Informe o número que deseja ser multiplicado: ")
		for (let i = 0; i <= 10; i++)
			console.log(`${multiplicador} * ${i} = ${multiplicador * i}`);
		break;
	case "5":
		let t1 = 0, t2 = 1, fibonacci = t1 + t2
		for (let i = 0; i <= 10; i++){
			if (t1 == 0)	
				console.log(`${t1}\n${t2}`);
			console.log(fibonacci);
			t1 = t2
			t2 = fibonacci
			fibonacci = t1 + t2
		}
		break;
	case "6":
		numero = 0
		while (numero <= 20) {
			if (numero%2 == 0)
				console.log(numero);
			numero++
		}
		break;
	case "7":

		break;
	case "8":
		let idade = 0
		while (idade < 18) {
			idade = numeroValidacao("Digite sua idade: ")
			if (idade < 18)
				console.log("Idade inválida.");
		}
		console.log("Idade válida!");
		break;
	case "9":
		numero = numeroValidacao("Informe seu numero: ")
		while (numero >= 0) {
			console.log(numero);
			numero--;
		}
		break;
	case "10":
		numero = 1
		while (numero != 0) {
			numero = numeroValidacao("Digite sua numero: ")
			if (numero != 0)
				console.log("Numero inválido.");
		}
		console.log("Valor válida!");
		break;
	default:
		console.log("Exercicio não encontrado. Tente um numero de 1 a 6")
		break;
}


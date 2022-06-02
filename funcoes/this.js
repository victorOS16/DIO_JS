const pessoa1 = {
    nome: 'Horácio',
    idade: 40
}
const pessoa2 = {
    nome: 'Humberto',
    idade: 15
}
const animal = {
    nome: 'Hela',
    idade: 20,
    raça: 'Poodle'
}

function calculaIdade(anos) {

	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.apply(pessoa1, [13]));
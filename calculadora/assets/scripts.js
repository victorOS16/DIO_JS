calculadora();

function calculadora() {
    let operacao = Number(prompt("Digite a operação que deseja executar:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Divisão Real\n6 - Potenciação"));
    if (operacao >= 7 || !operacao) {
        alert("Favor inserir o número correspondente a operação desejada.");
        calculadora();
    }
    else {
        let a = Number(prompt("Digite o primeiro número:"));
        let b = Number(prompt("Digite o segundo número:"));
    
        if (!a || !b) {
            alert("Favor inserir um número válido.");
            calculadora();
        }
        else {
            switch (operacao) {
                case 1:
                    soma(a, b);
                    break;
                    case 2:
                        subtracao(a, b);
                        break;
                        case 3:
                            multiplicacao(a, b);
                            break;
                            case 4:
                                divisao(a, b);
                                break;
                                case 5:
                                    divisaoReal(a, b);
                                    break;
                                    case 6:
                                        potenciacao(a, b);
                                        break;       
            }
        }
    }
}
function soma(a, b) {
    let resultado = a + b;
    alert("O resultado é:\n" + resultado);
    fecharCalculadora();
}
function subtracao(a, b) {
    let resultado = a - b;
    alert("O resultado é:\n" + resultado);
    fecharCalculadora();
}
function multiplicacao(a, b) {
    let resultado = a * b;
    alert("O resultado é:\n" + resultado);
    fecharCalculadora();
}
function divisao(a, b) {
    let resultado = a / b;
    alert("O resultado é:\n" + resultado);
    fecharCalculadora();
}
function divisaoReal(a, b) {
    let resultado = a % b;
    alert("O resultado é:\n" + resultado);
    fecharCalculadora();
}
function potenciacao(a, b) {
    let resultado = a ** b;
    alert("O resultado é:\n" + resultado);
    fecharCalculadora();
}
function fecharCalculadora() {
    let decisao = Number(prompt("Deseja executar outra operação?\n1 - Sim\n2 - Não"));
    if (!decisao || decisao >= 3 || decisao <= 0) {
        alert("Escolha uma opção válida!");
        fecharCalculadora();
    }
    else if (decisao == 1) {
        calculadora();
    }
    else {
        alert("Até mais!");
        close();
    }
}
// fluxoDeControle.js
// Altere a variável menu para testar os exercícios

const menu = 1;

switch (menu) {
    case 1:
        console.log("Exercício 1 selecionado.\n");
        positivo();
        break;

    case 2:
        console.log("Exercício 2 selecionado.\n");
        parOuImpar();
        break;

    case 3:
        console.log("Exercício 3 selecionado.\n");
        boasVindasTurno();
        break;

    case 4:
        console.log("Exercício 4 selecionado.\n");
        maiorDeDois();
        break;

    case 5:
        console.log("Exercício 5 selecionado.\n");
        operadorTernario();
        break;

    case 6:
        console.log("Exercício 6 selecionado.\n");
        menuSimples();
        break;

    case 7:
        console.log("Exercício 7 selecionado.\n");
        contadorWhile();
        break;

    case 8:
        console.log("Exercício 8 selecionado.\n");
        regressivaDoWhile();
        break;

    case 9:
        console.log("Exercício 9 selecionado.\n");
        forUmADez();
        break;

    case 10:
        console.log("Exercício 10 selecionado.\n");
        somaUmADez();
        break;

    case 11:
        console.log("Exercício 11 selecionado.\n");
        arrayComFor();
        break;

    case 12:
        console.log("Exercício 12 selecionado.\n");
        arrayForOf();
        break;

    case 13:
        console.log("Exercício 13 selecionado.\n");
        objetoForIn();
        break;

    case 14:
        console.log("Exercício 14 selecionado.\n");
        breakContagem();
        break;

    case 15:
        console.log("Exercício 15 selecionado.\n");
        continueContagem();
        break;

    case 16:
        console.log("Exercício 16 selecionado.\n");
        classificarNota();
        break;

    case 17:
        console.log("Exercício 17 selecionado.\n");
        tabuada();
        break;

    case 18:
        console.log("Exercício 18 selecionado.\n");
        contarNumerosArray();
        break;

    case 19:
        console.log("Exercício 19 selecionado.\n");
        palindromo();
        break;

    case 20:
        console.log("Exercício 20 selecionado.\n");
        menuInterativo();
        break;

    default:
        console.log("Opção inválida.");
}

// =========================
// FUNÇÕES
// =========================

function positivo() {
    const num = 5;

    if (num > 0) {
        console.log("Número positivo.");
    }
}

function parOuImpar() {
    const num = 8;

    if (num % 2 === 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }
}

function boasVindasTurno() {
    const turno = "M";

    if (turno === "M") {
        console.log("Bom dia");
    } else if (turno === "T") {
        console.log("Boa tarde");
    } else {
        console.log("Boa noite");
    }
}

function maiorDeDois() {
    const a = 10;
    const b = 7;

    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

function operadorTernario() {
    const num = -2;

    const resultado = num >= 0 ? "Positivo" : "Negativo";

    console.log(resultado);
}

function menuSimples() {
    const opcao = 2;

    switch (opcao) {
        case 1:
            console.log("Início");
            break;
        case 2:
            console.log("Sobre");
            break;
        case 3:
            console.log("Sair");
            break;
    }
}

function contadorWhile() {
    let i = 1;

    while (i <= 5) {
        console.log(i);
        i++;
    }
}

function regressivaDoWhile() {
    let i = 5;

    do {
        console.log(i);
        i--;
    } while (i >= 1);
}

function forUmADez() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function somaUmADez() {
    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        soma += i;
    }

    console.log(soma);
}

function arrayComFor() {
    const frutas = ["Maçã", "Banana", "Uva"];

    for (let i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    }
}

function arrayForOf() {
    const nomes = ["Ana", "Pedro", "Lucas"];

    for (let nome of nomes) {
        console.log(nome);
    }
}

function objetoForIn() {
    const pessoa = {
        nome: "Lorena",
        idade: 17,
        cidade: "Campinas"
    };

    for (let chave in pessoa) {
        console.log(chave + ": " + pessoa[chave]);
    }
}

function breakContagem() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            break;
        }

        console.log(i);
    }
}

function continueContagem() {
    for (let i = 1; i <= 10; i++) {
        if (i === 7) {
            continue;
        }

        console.log(i);
    }
}

function classificarNota() {
    const nota = 8.5;

    if (nota < 6) {
        console.log("Reprovado");
    } else if (nota < 8) {
        console.log("Recuperação");
    } else {
        console.log("Aprovado");
    }
}

function tabuada() {
    const num = 5;

    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

function contarNumerosArray() {
    const lista = [1, "oi", true, 7, 9, "js"];
    let contador = 0;

    for (let item of lista) {
        if (typeof item === "number") {
            contador++;
        }
    }

    console.log("Quantidade:", contador);
}

function palindromo() {
    const palavra = "arara";
    let invertida = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i];
    }

    if (palavra === invertida) {
        console.log("É palíndromo");
    } else {
        console.log("Não é palíndromo");
    }
}

function menuInterativo() {
    let opcao = 1;

    while (opcao <= 3) {
        switch (opcao) {
            case 1:
                console.log("Início");
                break;
            case 2:
                console.log("Sobre");
                break;
            case 3:
                console.log("Sair");
                return;
        }

        opcao++;
    }
}




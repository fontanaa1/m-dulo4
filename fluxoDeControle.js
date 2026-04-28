// fluxoDeControle.js
// Programa com menu funcional contendo todos os exercícios solicitados
// Execute no VS Code (Node.js) ou CISCO NetAcad

const prompt = require("prompt-sync")();

// ======================
// EXERCÍCIOS FÁCEIS
// ======================

// 1
function positivo() {
    let num = Number(prompt("Digite um número: "));
    if (num > 0) {
        console.log("Número positivo.");
    } else {
        console.log("Número não é positivo.");
    }
}

// 2
function parOuImpar() {
    let num = Number(prompt("Digite um número: "));
    if (num % 2 === 0) {
        console.log("Par.");
    } else {
        console.log("Ímpar.");
    }
}

// 3
function boasVindasTurno() {
    let turno = prompt("Digite M, T ou N: ").toUpperCase();

    if (turno === "M") {
        console.log("Bom dia");
    } else if (turno === "T") {
        console.log("Boa tarde");
    } else if (turno === "N") {
        console.log("Boa noite");
    } else {
        console.log("Turno inválido.");
    }
}

// 4
function maiorDeDois() {
    let a = Number(prompt("Primeiro número: "));
    let b = Number(prompt("Segundo número: "));

    if (a > b) {
        console.log("Maior:", a);
    } else {
        console.log("Maior:", b);
    }
}

// 5
function operadorTernario() {
    let num = Number(prompt("Digite um número: "));
    console.log(num >= 0 ? "Positivo" : "Negativo");
}

// 6
function menuSimples() {
    let op = prompt("1-Início 2-Sobre 3-Sair: ");

    switch (op) {
        case "1":
            console.log("Início");
            break;
        case "2":
            console.log("Sobre");
            break;
        case "3":
            console.log("Sair");
            break;
        default:
            console.log("Inválido");
    }
}

// 7
function contadorWhile() {
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
}

// 8
function regressivaDoWhile() {
    let i = 5;
    do {
        console.log(i);
        i--;
    } while (i >= 1);
}

// 9
function forUmADez() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// 10
function somaUmADez() {
    let soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += i;
    }
    console.log("Soma =", soma);
}

// 11
function arrayComFor() {
    let lista = ["Maçã", "Banana", "Uva"];

    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}

// 12
function arrayForOf() {
    let nomes = ["Ana", "Carlos", "Pedro"];

    for (let nome of nomes) {
        console.log(nome);
    }
}

// 13
function objetoForIn() {
    let pessoa = {
        nome: "Lorena",
        idade: 17,
        cidade: "Campinas"
    };

    for (let chave in pessoa) {
        console.log(chave + ": " + pessoa[chave]);
    }
}

// 14
function breakContagem() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) break;
        console.log(i);
    }
}

// 15
function continueContagem() {
    for (let i = 1; i <= 10; i++) {
        if (i === 7) continue;
        console.log(i);
    }
}

// ======================
// MÉDIOS
// ======================

// 16
function classificarNota() {
    let nota = Number(prompt("Digite a nota: "));

    if (nota < 6) {
        console.log("Reprovado");
    } else if (nota < 8) {
        console.log("Recuperação");
    } else {
        console.log("Aprovado");
    }
}

// 17
function tabuada() {
    let num = Number(prompt("Digite um número: "));

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// 18
function contarNumerosArray() {
    let lista = [10, "oi", true, 7, "js", 3];

    let contador = 0;

    for (let item of lista) {
        if (typeof item === "number") {
            contador++;
        }
    }

    console.log("Quantidade de números:", contador);
}

// ======================
// DIFÍCEIS
// ======================

// 19
function palindromo() {
    let palavra = prompt("Digite uma palavra: ").toLowerCase();
    let invertida = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i];
    }

    if (palavra === invertida) {
        console.log("É palíndromo.");
    } else {
        console.log("Não é palíndromo.");
    }
}

// 20
function menuInterativo() {
    let op;

    while (op !== "3") {
        console.log("\n1 - Olá");
        console.log("2 - Data");
        console.log("3 - Sair");

        op = prompt("Escolha: ");

        switch (op) {
            case "1":
                console.log("Olá usuário!");
                break;
            case "2":
                console.log(new Date().toLocaleDateString());
                break;
            case "3":
                console.log("Encerrando...");
                break;
            default:
                console.log("Inválido.");
        }
    }
}

// ======================
// MENU PRINCIPAL
// ======================

function menuPrincipal() {
    let opcao;

    do {
        console.log("\n========= MENU =========");
        console.log("1  - Número positivo");
        console.log("2  - Par ou Ímpar");
        console.log("3  - Boas-vindas por turno");
        console.log("4  - Maior de dois");
        console.log("5  - Operador ternário");
        console.log("6  - Switch simples");
        console.log("7  - While 1 a 5");
        console.log("8  - Regressiva");
        console.log("9  - For 1 a 10");
        console.log("10 - Soma 1 a 10");
        console.log("11 - Array com for");
        console.log("12 - Array for...of");
        console.log("13 - Objeto for...in");
        console.log("14 - Break");
        console.log("15 - Continue");
        console.log("16 - Classificar nota");
        console.log("17 - Tabuada");
        console.log("18 - Contar números array");
        console.log("19 - Palíndromo");
        console.log("20 - Menu interativo");
        console.log("0  - Sair");

        opcao = prompt("Escolha: ");

        switch (opcao) {
            case "1": positivo(); break;
            case "2": parOuImpar(); break;
            case "3": boasVindasTurno(); break;
            case "4": maiorDeDois(); break;
            case "5": operadorTernario(); break;
            case "6": menuSimples(); break;
            case "7": contadorWhile(); break;
            case "8": regressivaDoWhile(); break;
            case "9": forUmADez(); break;
            case "10": somaUmADez(); break;
            case "11": arrayComFor(); break;
            case "12": arrayForOf(); break;
            case "13": objetoForIn(); break;
            case "14": breakContagem(); break;
            case "15": continueContagem(); break;
            case "16": classificarNota(); break;
            case "17": tabuada(); break;
            case "18": contarNumerosArray(); break;
            case "19": palindromo(); break;
            case "20": menuInterativo(); break;
            case "0": console.log("Programa encerrado."); break;
            default: console.log("Opção inválida.");
        }

    } while (opcao !== "0");
}

menuPrincipal();
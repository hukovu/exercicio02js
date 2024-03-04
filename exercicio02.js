const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Primeira questão
rl.question("Digite o primeiro número: ", function(numero1) {
    rl.question("Digite o segundo número: ", function(numero2) {
        rl.question("Digite o terceiro número: ", function(numero3) {
            const media = (parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3)) / 3;
            console.log("A média dos três números é: " + media);
            rl.close();
        });
    });
});

// Segunda questão
rl.question("Digite o seu número: ", function(numero) {
    if (numero % 2 === 0) {
        console.log("O número é par");
    } else {
        console.log("O número é ímpar");
    }
    rl.close();
});

// Terceira questão
rl.question("Insira um número: ", function(numero) {
    console.log("Números pares até " + numero + ":");
    for (let i = 0; i <= parseInt(numero); i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
    rl.close();
});

// Quarta questão
rl.question("Digite uma lista de números separados por espaço: ", function(numeros) {
    numeros = numeros.split(" ").map(Number);
    if (numeros.length > 0) {
        const maior = Math.max(...numeros);
        const menor = Math.min(...numeros);
        console.log("O maior valor na lista é: " + maior);
        console.log("O menor valor na lista é: " + menor);
    } else {
        console.log("A lista está vazia.");
    }
    rl.close();
});

// Quinta questão
rl.question("Digite uma lista de números: ", function(numero) {
    numeros = numero.split(" ").map(Number);
    let somaPares = 0;
    let contagemPares = 0;
    numeros.forEach(function(num) {
        if (num % 2 === 0) {
            somaPares += num;
            contagemPares++;
        }
    });
    if (contagemPares > 0) {
        const mediaPares = somaPares / contagemPares;
        console.log("A média dos números pares é: " + mediaPares);
    } else {
        console.log("Não há números pares na lista.");
    }
    rl.close();
});

// Sexta questão
rl.question("Digite um número inteiro positivo: ", function(numero) {
    numero = parseInt(numero);
    if (numero < 0) {
        console.log("Você digitou um número negativo.");
    } else {
        let fatorial = 1;
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        console.log("O fatorial de " + numero + " é: " + fatorial);
    }
    rl.close();
});

// Sétima questão
rl.question("Por favor, digite o seu número: ", function(limite) {
    limite = parseInt(limite);
    if (limite <= 0) {
        console.log("Por favor, digite um número maior que zero.");
    } else {
        let fibonacci = [0, 1];
        while (fibonacci[fibonacci.length - 1] <= limite) {
            const proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
            if (proximo <= limite) {
                fibonacci.push(proximo);
            } else {
                break;
            }
        }
        console.log("Sequência de Fibonacci até " + limite + ": " + fibonacci.join(" "));
    }
    rl.close();
});

// Oitava questão
function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

rl.question("Digite um número: ", function(numero) {
    numero = parseInt(numero);
    if (ehPrimo(numero)) {
        console.log(numero + " é um número primo.");
    } else {
        console.log(numero + " não é um número primo.");
    }
    rl.close();
});

// Nona questão
rl.question("Digite aqui a lista de nomes: ", function(nomes) {
    nomes = nomes.split(" ");
    const nomesComA = nomes.filter(function(nome) {
        return nome.toLowerCase().startsWith('a');
    });
    console.log("Nomes que começam com a letra 'A': " + nomesComA.join(", "));
    rl.close();
});

// Décima questão
function jogoPedraPapelTesoura(jogadaUsuario) {
    const jogadas = ['pedra', 'papel', 'tesoura'];
    const jogadaMaquina = jogadas[Math.floor(Math.random() * jogadas.length)];
    console.log("Você jogou: " + jogadaUsuario);
    console.log("Máquina jogou: " + jogadaMaquina);
    if (jogadaUsuario === jogadaMaquina) {
        return "Empate!";
    } else if ((jogadaUsuario === 'pedra' && jogadaMaquina === 'tesoura') ||
               (jogadaUsuario === 'papel' && jogadaMaquina === 'pedra') ||
               (jogadaUsuario === 'tesoura' && jogadaMaquina === 'papel')) {
        return "Você ganhou!";
    } else {
        return "Você perdeu!";
    }
}

rl.question("Escolha sua jogada (pedra, papel ou tesoura): ", function(jogadaUsuario) {
    jogadaUsuario = jogadaUsuario.toLowerCase();
    if (jogadaUsuario === 'pedra' || jogadaUsuario === 'papel' || jogadaUsuario === 'tesoura') {
        const resultado = jogoPedraPapelTesoura(jogadaUsuario);
        console.log(resultado);
    } else {
        console.log("Opção inválida. Por favor, escolha pedra, papel ou tesoura.");
    }
    rl.close();
});
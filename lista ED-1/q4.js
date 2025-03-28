class Pilha {
    constructor() {
        this.itens = [];
    }

    push(elemento) {
        this.itens.push(elemento);
    }

    pop() {
        return this.itens.pop();
    }

    isEmpty() {
        return this.itens.length === 0;
    }
}

function decimalParaBinario(numero) {
    const pilha = new Pilha();
    while (numero > 0) {
        pilha.push(numero % 2);
        numero = Math.floor(numero / 2);
    }
    return pilha.itens.reverse().join('');
}

console.log(decimalParaBinario(25));

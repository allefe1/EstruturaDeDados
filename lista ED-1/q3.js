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

function trocarTopoBase(pilha) {
    if (pilha.isEmpty()) return;

    const aux = new Pilha();
    while (pilha.itens.length > 1) {
        aux.push(pilha.pop());
    }

    const base = pilha.pop();
    while (!aux.isEmpty()) {
        pilha.push(aux.pop());
    }

    pilha.push(base);
}


const pilha = new Pilha();
pilha.push(1);
pilha.push(2);
pilha.push(3);
trocarTopoBase(pilha);
console.log(pilha.itens);

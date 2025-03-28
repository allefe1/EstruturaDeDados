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

function removerDuplicatas(pilha) {
    const unicos = new Set();
    const aux = new Pilha();

    while (!pilha.isEmpty()) {
        const elemento = pilha.pop();
        if (!unicos.has(elemento)) {
            unicos.add(elemento);
            aux.push(elemento);
        }
    }

    while (!aux.isEmpty()) {
        pilha.push(aux.pop());
    }

    return pilha.itens;
}

const pilha = new Pilha();
pilha.push(1);
pilha.push(2);
pilha.push(2);
pilha.push(3);
console.log(removerDuplicatas(pilha));

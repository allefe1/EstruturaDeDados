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

function verificarSequencia(expressao) {
    const pilha = new Pilha();
    const pares = { ')': '(', ']': '[' };

    for (let char of expressao) {
        if (char === '(' || char === '[') {
            pilha.push(char);
        } else if (char === ')' || char === ']') {
            if (pilha.isEmpty() || pilha.pop() !== pares[char]) return false;
        }
    }
    return pilha.isEmpty();
}

console.log(verificarSequencia("([()])"));

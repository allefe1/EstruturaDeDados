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

    peek() {
        return this.itens[this.itens.length - 1];
    }

    isEmpty() {
        return this.itens.length === 0;
    }
}

function paraRPN(expressao) {
    const precedencia = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };
    const pilha = new Pilha();
    let saida = '';

    for (let char of expressao) {
        if (/[a-z]/i.test(char)) {
            saida += char;
        } else if (char === '(') {
            pilha.push(char);
        } else if (char === ')') {
            while (!pilha.isEmpty() && pilha.peek() !== '(') {
                saida += pilha.pop();
            }
            pilha.pop();
        } else {
            while (!pilha.isEmpty() && precedencia[char] <= precedencia[pilha.peek()]) {
                saida += pilha.pop();
            }
            pilha.push(char);
        }
    }

    while (!pilha.isEmpty()) {
        saida += pilha.pop();
    }

    return saida;
}

console.log(paraRPN("a+b*(c^d-e)^(f+g*h)-i"));

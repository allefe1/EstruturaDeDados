class Node {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class Lista {
    constructor() {
        this.inicio = null;
    }

    // Método para adicionar elementos à lista
    adicionar(valor) {
        const novo = new Node(valor);
        if (!this.inicio) {
            this.inicio = novo;
        } else {
            let atual = this.inicio;
            while (atual.proximo) {
                atual = atual.proximo;
            }
            atual.proximo = novo;
        }
    }

    // Método para imprimir a lista
    imprimir() {
        let atual = this.inicio;
        const valores = [];
        while (atual) {
            valores.push(atual.valor);
            atual = atual.proximo;
        }
        console.log(valores.join(" -> "));
    }

    // Método para inverter a lista
    inverter() {
        this.inicio = inverterLista(this.inicio);
    }
}

// Função para inverter a lista
function inverterLista(inicio) {
    let anterior = null;
    let atual = inicio;
    while (atual) {
        const proximo = atual.proximo;
        atual.proximo = anterior;
        anterior = atual;
        atual = proximo;
    }
    return anterior;
}

// Criando e manipulando a lista
const lista = new Lista();
lista.adicionar(1);
lista.adicionar(2);
lista.adicionar(3);
lista.adicionar(4);

console.log("Antes de inverter:");
lista.imprimir(); // 1 -> 2 -> 3 -> 4

lista.inverter();

console.log("Depois de inverter:");
lista.imprimir(); // 4 -> 3 -> 2 -> 1

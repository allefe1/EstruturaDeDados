class Node {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class Fila {
    constructor() {
        this.inicio = null;
        this.fim = null;
    }

    enqueue(valor) {
        const novo = new Node(valor);
        if (this.fim) {
            this.fim.proximo = novo;
        } else {
            this.inicio = novo;
        }
        this.fim = novo;
    }

    dequeue() {
        if (!this.inicio) return null;
        const valor = this.inicio.valor;
        this.inicio = this.inicio.proximo;
        if (!this.inicio) this.fim = null;
        return valor;
    }

    isEmpty() {
        return this.inicio === null;
    }

    imprimir() {
        let atual = this.inicio;
        const valores = [];
        while (atual) {
            valores.push(atual.valor);
            atual = atual.proximo;
        }
        console.log(valores.join(" -> "));
    }
}

const fila = new Fila();
fila.enqueue("A");
fila.enqueue("B");
fila.enqueue("C");

console.log("Fila original:");
fila.imprimir(); 

console.log("Dequeue:");
console.log(fila.dequeue()); 

console.log("Fila após dequeue:");
fila.imprimir();

console.log("Está vazia?");
console.log(fila.isEmpty()); 

fila.dequeue();
fila.dequeue();

console.log("Está vazia após remover todos os elementos?");
console.log(fila.isEmpty()); 

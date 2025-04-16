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

    
    imprimir() {
        let atual = this.inicio;
        const valores = [];
        while (atual) {
            valores.push(atual.valor);
            atual = atual.proximo;
        }
        console.log(valores.join(" -> "));
    }

    
    embaralhar() {
        this.inicio = embaralharLista(this.inicio);
    }
}


function embaralharLista(inicio) {
    const array = [];
    let atual = inicio;
    while (atual) {
        array.push(atual.valor);
        atual = atual.proximo;
    }

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    let novaLista = null;
    for (let i = array.length - 1; i >= 0; i--) {
        const novo = new Node(array[i]);
        novo.proximo = novaLista;
        novaLista = novo;
    }

    return novaLista;
}


const lista = new Lista();
lista.adicionar(1);
lista.adicionar(2);
lista.adicionar(3);
lista.adicionar(4);

console.log("Antes do embaralhamento:");
lista.imprimir();

lista.embaralhar();

console.log("Depois do embaralhamento:");
lista.imprimir();

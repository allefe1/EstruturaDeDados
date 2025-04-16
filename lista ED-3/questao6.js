class Node {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaString {
    constructor(texto) {
        this.inicio = null;
        let atual = null;
        for (let char of texto) {
            const novo = new Node(char);
            if (!this.inicio) {
                this.inicio = novo;
                atual = novo;
            } else {
                atual.proximo = novo;
                atual = novo;
            }
        }
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

    
    substring(a, b) {
        let novaLista = null, fim = null;
        let atual = this.inicio;
        let i = 0;
        while (atual && i <= b) {
            if (i >= a) {
                const novo = new Node(atual.valor);
                if (!novaLista) {
                    novaLista = novo;
                    fim = novo;
                } else {
                    fim.proximo = novo;
                    fim = novo;
                }
            }
            atual = atual.proximo;
            i++;
        }
        return novaLista;
    }
}


const lista = new ListaString("estruturas");


console.log("Lista completa:");
lista.imprimir(); 


const sub = lista.substring(2, 5);
console.log("Substring (índices 2 a 5):");
let subLista = new ListaString("");
subLista.inicio = sub;
subLista.imprimir(); 

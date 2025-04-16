class ListaSimples {
    constructor() {
        this.inicio = null;
    }

    adicionar(valor) {
        const novoNo = { valor: valor, proximo: null };
        if (!this.inicio) {
            this.inicio = novoNo;
        } else {
            let atual = this.inicio;
            while (atual.proximo) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
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

    buscar(valor) {
        let atual = this.inicio;
        while (atual) {
            if (atual.valor === valor) {
                return true;
            }
            atual = atual.proximo;
        }
        return false;
    }

    remover(valor) {
        if (!this.inicio) return;

        if (this.inicio.valor === valor) {
            this.inicio = this.inicio.proximo;
            return;
        }

        let atual = this.inicio;
        while (atual.proximo && atual.proximo.valor !== valor) {
            atual = atual.proximo;
        }

        if (atual.proximo) {
            atual.proximo = atual.proximo.proximo;
        }
    }
}

const lista = new ListaSimples();
lista.adicionar("João");
lista.adicionar("Maria");
lista.adicionar("Pedro");

console.log("Lista original:");
lista.imprimir(); 

console.log("Busca por 'Maria':");
console.log(lista.buscar("Maria")); 

lista.remover("Maria");

console.log("Após remover 'Maria':");
lista.imprimir();

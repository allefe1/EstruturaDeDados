class PilhasCompartilhadas {
    constructor(tamanho) {
        this.vetor = new Array(tamanho);
        this.topoA = -1;
        this.topoB = tamanho;
    }

    empilhaA(valor) {
        if (this.topoA + 1 === this.topoB) throw new Error("Pilha cheia");
        this.vetor[++this.topoA] = valor;
    }

    empilhaB(valor) {
        if (this.topoB - 1 === this.topoA) throw new Error("Pilha cheia");
        this.vetor[--this.topoB] = valor;
    }

    desempilhaA() {
        if (this.topoA === -1) throw new Error("Pilha A vazia");
        return this.vetor[this.topoA--];
    }

    desempilhaB() {
        if (this.topoB === this.vetor.length) throw new Error("Pilha B vazia");
        return this.vetor[this.topoB++];
    }
}


const pilhas = new PilhasCompartilhadas(10);
pilhas.empilhaA(1);
pilhas.empilhaB(9);
console.log(pilhas.desempilhaA(), pilhas.desempilhaB());

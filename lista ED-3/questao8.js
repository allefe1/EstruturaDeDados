class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.proximo = null;
    }
}

class ListaPessoas {
    constructor() {
        this.inicio = null;
    }

    adicionar(nome, idade) {
        const nova = new Pessoa(nome, idade);
        if (!this.inicio) {
            this.inicio = nova;
        } else {
            let atual = this.inicio;
            while (atual.proximo) {
                atual = atual.proximo;
            }
            atual.proximo = nova;
        }
    }

    ordenarPorNome() {
        const array = this.toArray();
        array.sort((a, b) => a.nome.localeCompare(b.nome));
        return ListaPessoas.fromArray(array);
    }

    ordenarPorIdade() {
        const array = this.toArray();
        array.sort((a, b) => a.idade - b.idade);
        return ListaPessoas.fromArray(array);
    }

    toArray() {
        const array = [];
        let atual = this.inicio;
        while (atual) {
            array.push({ nome: atual.nome, idade: atual.idade });
            atual = atual.proximo;
        }
        return array;
    }

    static fromArray(array) {
        const lista = new ListaPessoas();
        array.forEach(p => lista.adicionar(p.nome, p.idade));
        return lista;
    }

    imprimir() {
        let atual = this.inicio;
        const valores = [];
        while (atual) {
            valores.push(`${atual.nome} (${atual.idade})`);
            atual = atual.proximo;
        }
        console.log(valores.join(" -> "));
    }
}

const listaPessoas = new ListaPessoas();
listaPessoas.adicionar("João", 25);
listaPessoas.adicionar("Maria", 30);
listaPessoas.adicionar("Pedro", 20);
listaPessoas.adicionar("Ana", 22);

console.log("Ordenado por nome:");
const listaPorNome = listaPessoas.ordenarPorNome();
listaPorNome.imprimir(); 

console.log("Ordenado por idade:");
const listaPorIdade = listaPessoas.ordenarPorIdade();
listaPorIdade.imprimir(); 

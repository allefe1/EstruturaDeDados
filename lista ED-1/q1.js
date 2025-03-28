class Pilha {
    constructor() {
        this.palavra = [];
    }

    push(letra){
        this.palavra.push(letra);
    }

    pop(){
        return this.palavra.pop();
    }

    isEmpty(){
        return this.palavra.length === 0;
    }
}

class inversao {
    static reverter(oque){
        const pilha = new Pilha();
        let palavInvert= '';

        for(let letra of oque ){
            pilha.push(letra);
        }

        while ( !pilha.isEmpty() ){
            palavInvert += pilha.pop();
        }
        
        return palavInvert;
    }
}

console.log(inversao.reverter("Abacaxi"));
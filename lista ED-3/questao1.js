

class Node {
    constructor(valor) {
      this.valor = valor;
      this.proximo = null;
    }
  }
  
  class Pilha {
    constructor() {
      this.topo = null;
    }
  
    push(valor) {
      const novo = new Node(valor);
      novo.proximo = this.topo;
      this.topo = novo;
    }
  
    pop() {
      if (!this.topo) return null;
      const valor = this.topo.valor;
      this.topo = this.topo.proximo;
      return valor;
    }
  
    isEmpty() {
      return this.topo === null;
    }
  
    imprimir() {
      let atual = this.topo;
      const valores = [];
      while (atual) {
        valores.push(atual.valor);
        atual = atual.proximo;
      }
      console.log(valores.join(" -> "));
    }
  }
  

  const pilha = new Pilha();
  pilha.push(10);
  pilha.push(20);
  pilha.push(30);
  pilha.imprimir(); 
  console.log(pilha.pop()); 
  console.log(pilha.pop()); 
  console.log(pilha.isEmpty()); 
  console.log(pilha.pop()); 
  console.log(pilha.isEmpty());
  
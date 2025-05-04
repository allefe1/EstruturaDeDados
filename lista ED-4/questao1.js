
class MinHeap {
    constructor() {
        this.data = [];
    }

    
    insert(val) {
        this.data.push(val);
        this.bubbleUp(this.data.length - 1);
    }

    
    bubbleUp(index) {
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.data[parent] > this.data[index]) {
                // troca o elemento com o pai se for menor
                let temp = this.data[parent];
                this.data[parent] = this.data[index];
                this.data[index] = temp;
                index = parent;
            } else {
                break;
            }
        }
    }

    
    extractMin() {
        if (this.data.length === 0) return null;
        if (this.data.length === 1) return this.data.pop();

        let min = this.data[0];
        this.data[0] = this.data.pop();
        this.bubbleDown(0);
        return min;
    }

    
    bubbleDown(index) {
        while (true) {
            let smallest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            if (left < this.data.length && this.data[left] < this.data[smallest]) {
                smallest = left;
            }
            if (right < this.data.length && this.data[right] < this.data[smallest]) {
                smallest = right;
            }
            if (smallest === index) break;

            let temp = this.data[smallest];
            this.data[smallest] = this.data[index];
            this.data[index] = temp;
            index = smallest;
        }
    }

   
    size() {
        return this.data.length;
    }
}

// teste
let heap = new MinHeap();
heap.insert(5);
heap.insert(3);
heap.insert(7);
heap.insert(1);
console.log("Menor elemento removido:", heap.extractMin()); // Deve exibir 1
console.log("Menor elemento removido:", heap.extractMin()); // Deve exibir 3

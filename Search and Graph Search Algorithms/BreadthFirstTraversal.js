const LinkedList = require('./LinkedList');

class Queue {
    constructor(maxSize = Infinity) {
        this.queue = new LinkedList();
        this.maxSize = maxSize;
        this.size = 0;
    }

    hasRoom() {
        return this.size < this.maxSize;
    }

    isEmpty() {
        return this.size === 0;
    }

    enqueue(data) {
        if (this.hasRoom()) {
            this.queue.addToTail(data);
            this.size++;
        } else {
            throw new Error('Queue is full!');
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            const data = this.queue.removeHead();
            this.size--;
            return data;
        } else {
            throw new Error('Queue is empty!');
        }
    }
}

const breadthFirstTraversal = (start) => {
    const visitedVertices = [start];
    const visitQueue = new Queue();
    visitQueue.enqueue(start);
    while (!visitQueue.isEmpty()) {
        const current = visitQueue.dequeue();
        console.log(current.data);
        current.edges.forEach((edge) => {
            const neighbor = edge.end;
            if (!visitedVertices.includes(neighbor)) {
                visitedVertices.push(neighbor);
                visitQueue.enqueue(neighbor);
            }
        });
    }
};

breadthFirstTraversal(testGraph.vertices[0]);

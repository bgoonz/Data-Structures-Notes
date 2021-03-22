import LinkedList from '../linked-list';

class Queue {
    constructor(...args) {
        this.container = new LinkedList(Array.from(args))
    }

    enqueue (data) {
        this.container.insertAtEnd(data)
    }

    dequeue () {
        return this.container.deleteAtStart()
    }

    peek () {
        return this.container.getElementAtStart()
    }

    get length () {
        return this.container.length
    }

    toString () {
        return this.container.toArray().toString()
    }

    isEmpty () {
        return this.length === 0
    }

    toArray () {
        return this.container.toArray()
    }
}

export default Queue;

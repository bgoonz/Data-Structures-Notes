const LinkedList = require('../linked-list')

class Queue {
    constructor () {
        this.container = new LinkedList(Array.from(arguments))
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

module.exports = Queue

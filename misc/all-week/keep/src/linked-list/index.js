class Node {
    constructor (data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor (fromArray = [], comparator = (a, b) => a - b) {
        this.head = null
        this.tail = null
        this.size = 0
        this.comparator = comparator

        fromArray
            .reverse()
            .forEach(item => this.insertAtStart(item))
    }

    get length () {
        return this.size
    }

    getElementAtEnd () {
        return this.tail && this.tail.data
    }

    getElementAtStart () {
        return this.head && this.head.data
    }

    insertAtStart (item) {
        const newNode = new Node(item)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.size += 1
    }

    insertAtEnd (item) {
        const newNode = new Node(item)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.size += 1
    }

    deleteAtStart () {
        if (!this.head) {
            return
        }

        const data = this.head.data
        this.head = this.head.next

        if (this.head === null) {
            this.tail = null
        }

        this.size -= 1

        return data
    }

    delete (data) {
        let cur = this.head
        let prev = null

        while (cur !== null) {
            if (this.comparator(cur.data, data) === 0) {
                if (cur === this.head) {
                    this.deleteAtStart()
                } else {
                    prev.next = cur.next
                }
                this.size -= 1
            } else {
                prev = cur
            }
            cur = cur.next
        }

        this.tail = prev
    }

    find (data) {
        let cur = this.head

        while (cur !== null) {
            if (this.comparator(cur.data, data) === 0) {
                return cur.data
            }
            cur = cur.next
        }

        return null
    }

    toArray () {
        const array = []
        let current = this.head

        while (current !== null) {
            array.push(current.data)
            current = current.next
        }

        return array
    }

    forEach (fn) {
        let current = this.head

        while (current !== null) {
            fn(current.data)
            current = current.next
        }
    }
}

module.exports = LinkedList

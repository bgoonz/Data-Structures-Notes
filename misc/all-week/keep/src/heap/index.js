class Heap {
    constructor (comparator = minHeapComparator) {
        this.array = []
        this.comparator = comparator
    }

    forEach (fn) {
        this.array.forEach((element, index) => fn(element, index))
    }

    get length () {
        return this.array.length
    }

    peek () {
        return this.array[0]
    }

    push (data) {
        this.array.push(data)
        this.heapifyUp()
    }

    heapifyUp () {
        let childIndex = this.array.length - 1
        while (this.hasParent(childIndex) &&
            this.comparator(this.parent(childIndex), this.array[childIndex]) > 0) {
            swap(this.array, this.getParentIndex(childIndex), childIndex)
            childIndex = this.getParentIndex(childIndex)
        }
    }

    pop () {
        swap(this.array, 0, this.array.length - 1)
        const data = this.array.pop()
        this.heapifyDown(0)
        return data
    }

    delete (data) {
        let index = 0

        if (data) {
            index = find(this.array, data)
        }

        if (index < 0) return

        swap(this.array, index, this.array.length - 1)
        this.array.pop()
        this.heapifyDown(index)
    }

    heapifyDown (index) {
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index)
            if (this.hasRightChild(index) &&
                this.comparator(this.getLeftChild(index), this.getRightChild(index)) > 0) {
                smallerChildIndex = this.getRightChildIndex(index)
            }
            if (this.comparator(this.array[index], this.array[smallerChildIndex]) > 0) {
                swap(this.array, index, smallerChildIndex)
            } else {
                break
            }

            index = smallerChildIndex
        }
    }

    getParentIndex (index) {
        return Math.floor((index - 1) / 2)
    }

    hasParent (index) {
        return this.getParentIndex(index) >= 0
    }

    parent (childIndex) {
        return this.array[this.getParentIndex(childIndex)]
    }

    getLeftChildIndex (index) {
        return (2 * index) + 1
    }

    getRightChildIndex (index) {
        return (2 * index) + 2
    }

    hasLeftChild (index) {
        return this.getLeftChildIndex(index) < this.array.length
    }

    hasRightChild (index) {
        return this.getRightChildIndex(index) < this.array.length
    }

    getRightChild (index) {
        return this.array[this.getRightChildIndex(index)]
    }

    getLeftChild (index) {
        return this.array[this.getLeftChildIndex(index)]
    }
}

/** Utils */

const minHeapComparator = (a, b) => a - b

const find = (array, data) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === data) {
            return i
        }
    }
    return -1
}

const swap = (array, a, b) => {
    const temp = array[a]
    array[a] = array[b]
    array[b] = temp
}

module.exports = Heap

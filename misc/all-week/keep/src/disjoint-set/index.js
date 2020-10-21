class DisjointSet {
    constructor () {
        this.container = {}
        this.rank = {}
    }

    find (element) {
        if (!this.has(element)) {
            this.add(element)
        }

        if (this.container[element] === element) {
            return element
        } else {
            // Path compression
            this.container[element] = this.find(this.container[element])
            return this.container[element]
        }
    }

    union (elementA, elementB) {
        if (!this.has(elementA)) {
            this.add(elementA)
        }

        if (!this.has(elementB)) {
            this.add(elementB)
        }

        const parentOfA = this.find(elementA)
        const parentOfB = this.find(elementB)

        if (this.rank[parentOfB] > this.rank[parentOfA]) {
            this.container[parentOfA] = parentOfB
            this.rank[parentOfB] += 1
        } else {
            this.container[parentOfB] = parentOfA
            this.rank[parentOfA] += 1
        }
    }

    add (element) {
        this.container[element] = element
        this.rank[element] = 1
    }

    has (element) {
        return !!this.container[element]
    }

    isConnected (elementA, elementB) {
        if (!this.has(elementA) || !this.has(elementB)) {
            return false
        }

        return this.find(elementA) === this.find(elementB)
    }
}

module.exports = DisjointSet

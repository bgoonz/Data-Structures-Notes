const LinkedList = require('.')

describe('test linked-list DS operations', () => {
    test('construction', () => {
        const list = new LinkedList()
        expect(list).toBeDefined()
    })

    test('insert at start', () => {
        const list = new LinkedList()
        list.insertAtStart(1)

        expect(list.toArray()).toEqual([1])
    })

    test('delete at start', () => {
        const list = new LinkedList([1, 2, 3])
        const data = list.deleteAtStart()

        expect(list.toArray()).toEqual([2, 3])
        expect(data).toEqual(1)
    })

    test('delete at start using delete operation', () => {
        const list = new LinkedList([1, 2, 3])
        list.delete(1)

        expect(list.toArray()).toEqual([2, 3])
    })

    test('delete second item', () => {
        const list = new LinkedList([1, 2, 3])
        list.delete(2)

        expect(list.toArray()).toEqual([1, 3])
    })

    test('delete last item', () => {
        const list = new LinkedList([1, 2, 3])
        list.delete(3)

        expect(list.getElementAtEnd()).toBe(2)
        expect(list.toArray()).toEqual([1, 2])
    })

    test('delete duplicates | case 1', () => {
        const list = new LinkedList([1, 1, 3])
        list.delete(1)

        expect(list.getElementAtEnd()).toBe(3)
        expect(list.toArray()).toEqual([3])
    })

    test('delete duplicates | case 2', () => {
        const list = new LinkedList([1, 1, 1])
        list.delete(1)

        expect(list.getElementAtEnd()).toBe(null)
        expect(list.toArray()).toEqual([])
    })

    test('delete duplicates | case 3', () => {
        const list = new LinkedList([1, 2, 2, 3])
        list.delete(2)

        expect(list.getElementAtEnd()).toBe(3)
        expect(list.toArray()).toEqual([1, 3])
    })

    test('find', () => {
        const list = new LinkedList([1, 2, 3])

        expect(list.find(2)).toBe(2)
        expect(list.find(4)).toBe(null)
    })

    test('forEach', () => {
        const list = new LinkedList([1, 2, 3])

        const output = []
        list.forEach(i => output.push(i))

        expect(output).toEqual([1, 2, 3])
    })
})

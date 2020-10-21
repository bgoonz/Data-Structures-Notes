const Heap = require('./index')

test('pushing one element', () => {
    const heap = new Heap()
    heap.push(7)
    expect(heap.array.length).toBe(1)
})

test('pushing 2 elements', () => {
    const heap = new Heap()
    heap.push(7)
    heap.push(6)

    expect(heap.array).toEqual([6, 7])
})

test('pushing 3 elements', () => {
    const heap = new Heap()
    heap.push(7)
    heap.push(6)
    heap.push(5)
    expect(heap.array).toEqual([5, 7, 6])
})

test('pushing 4 elements', () => {
    const heap = new Heap()
    heap.push(7)
    heap.push(6)
    heap.push(5)
    heap.push(4)
    expect(heap.array).toEqual([4, 5, 6, 7])
})

test('deleting specific data', () => {
    const heap = new Heap()
    heap.array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    heap.delete(2)
    expect(heap.array).toEqual([1, 4, 3, 8, 5, 6, 7, 9])
})

test('deleting non-existing data', () => {
    const heap = new Heap()
    heap.array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    heap.delete(10)
    expect(heap.array).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('pop operation', () => {
    const heap = new Heap()
    heap.push(7)
    heap.push(6)
    heap.push(5)
    expect(heap.pop()).toEqual(5)
    expect(heap.array).toEqual([6, 7])
})

test('peeking empty heap', () => {
    const heap = new Heap()
    expect(heap.peek()).toEqual(undefined)
})

test('custom test 1', () => {
    const heap = new Heap()
    heap.push(4)
    heap.push(9)
    heap.delete(4)
    expect(heap.array).toEqual([9])
})

test('custom test 2', () => {
    const heap = new Heap()
    heap.array = [1, 3, 2, 4]
    heap.pop()
    expect(heap.array).toEqual([2, 3, 4])
})

test('length method', () => {
    const heap = new Heap()
    heap.push(1)
    heap.push(2)
    heap.push(3)

    expect(heap.length).toEqual(3)
})

test('custom test 2', () => {
    const heap = new Heap()
    '13 47 74 12 89 74 18 38'.split(' ').forEach(data => {
        heap.push(parseInt(data))
    })

    expect(heap.array).toEqual([12, 13, 18, 38, 89, 74, 74, 47])
})

test('forEach operation', () => {
    const heap = new Heap()
    '13 47 74 12 89 74 18 38'.split(' ').forEach(data => {
        heap.push(parseInt(data))
    })

    const expectedResult = [12, 13, 18, 38, 89, 74, 74, 47]
    heap.forEach((val, i) => {
        expect(val).toEqual(expectedResult[i])
    })
})

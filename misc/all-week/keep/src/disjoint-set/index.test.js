const DisjointSet = require('.')

describe('Testing disjoint-set', () => {
    test('initialization', () => {
        const ds = new DisjointSet()

        expect(ds).toBeDefined()
    })

    test('find', () => {
        const ds = new DisjointSet()

        expect(ds.find('a')).toBe('a')
    })

    test('union', () => {
        const ds = new DisjointSet()
        ds.union('a', 'b')

        expect(ds.find('b')).toBe('a')
    })

    test('isConnected', () => {
        const ds = new DisjointSet()
        ds.union('a', 'b')
        ds.union('b', 'c')
        ds.add('d')

        expect(ds.isConnected('a', 'd')).toBe(false)
        expect(ds.isConnected('b', 'c')).toBe(true)
        expect(ds.isConnected('e', 'a')).toBe(false)
    })

    test('case 1', () => {
        const ds = new DisjointSet()
        ds.union('a', 'b')
        ds.union('b', 'c')

        expect(ds.find('c')).toBe('a')
    })

    test('case 2', () => {
        const ds = new DisjointSet()
        ds.union('a', 'b')
        ds.union('b', 'c')
        ds.union('d', 'c')

        expect(ds.find('d')).toBe('a')
    })
})

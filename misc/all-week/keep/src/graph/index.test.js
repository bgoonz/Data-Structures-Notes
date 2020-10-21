const Graph = require('.')

describe('test graph DS', () => {
    it('should construct an empty graph', () => {
        const graph = new Graph()
        expect(graph).toBeDefined()
    })

    it('should construct a directed graph', () => {
        const graph = new Graph()

        /*
            a---> b
            ^    /
            |   /
              c
        */

        graph.addVertex('a')
        graph.addVertex('b')
        graph.addVertex('c')

        graph.addEdge('a', 'b')
        graph.addEdge('c', 'a')
        graph.addEdge('c', 'b')

        expect(graph.getAdjVertices('a').toArray().map(e => e.name)).toEqual(['b'])
        expect(graph.getAdjVertices('c').toArray().map(e => e.name)).toEqual(['a', 'b'])
    })

    it('should do bfs', () => {
        const graph = new Graph()

        /*
            a ---> b
            |     ^
            |    /
            >  c
        */

        graph.addVertex('a')
        graph.addVertex('b')
        graph.addVertex('c')

        graph.addEdge('a', 'b')
        graph.addEdge('a', 'c')
        graph.addEdge('c', 'b')

        const output = []
        graph.bfs('a', vertex => output.push(vertex.name))
        const expectOutput = ['a', 'b', 'c']

        expect(output).toEqual(expectOutput)
    })

    it('should do dfs', () => {
        const graph = new Graph()

        /*
            a ---> b
            |     ^
            |    /
            >  c
        */

        graph.addVertex('a')
        graph.addVertex('b')
        graph.addVertex('c')

        graph.addEdge('a', 'c')
        graph.addEdge('c', 'b')
        graph.addEdge('a', 'b')

        const output = []
        graph.dfs('a', vertex => output.push(vertex.name))
        const expectOutput = ['a', 'c', 'b']

        expect(output).toEqual(expectOutput)
    })

    it('should tell if v1 is adjacent to v2', () => {
        const graph = new Graph()

        /*
            a ---> b
            |     ^
            |    /
            >  c
        */

        graph.addVertex('a')
        graph.addVertex('b')
        graph.addVertex('c')

        graph.addEdge('a', 'c')
        graph.addEdge('c', 'b')
        graph.addEdge('a', 'b')

        const output = graph.isAdjacent('a', 'b')
        const expectOutput = true

        expect(output).toEqual(expectOutput)
    })

    it('should remove the given edge', () => {
        const graph = new Graph()

        /*
            a ---> b
            |     ^
            |    /
            >  c
        */

        graph.addVertex('a')
        graph.addVertex('b')
        graph.addVertex('c')

        graph.addEdge('a', 'c')
        graph.addEdge('c', 'b')
        graph.addEdge('a', 'b')

        graph.removeEdge('a', 'b')

        const output = graph.isAdjacent('a', 'b')
        const expectOutput = false

        expect(output).toEqual(expectOutput)
    })

    it('should remove the given vertex', () => {
        const graph = new Graph()

        /*
            a ---> b
            |     ^
            |    /
            >  c
        */

        graph.addVertex('a')
        graph.addVertex('b')
        graph.addVertex('c')

        graph.addEdge('a', 'c')
        graph.addEdge('c', 'b')
        graph.addEdge('a', 'b')

        graph.removeVertex('a')

        const output = graph.isAdjacent('a', 'b') || graph.isAdjacent('a', 'c')
        const expectOutput = false

        expect(output).toEqual(expectOutput)
    })

    it('should able to add weights to edges', () => {
        const graph = new Graph()

        /*
            a ---> b
            |     ^
            |    /
            >  c
        */

        graph.addVertex('a')
        graph.addVertex('b')
        graph.addVertex('c')

        graph.addEdge('a', 'c', 5)
        graph.addEdge('c', 'b', 7)
        graph.addEdge('a', 'b', 9)

        graph.setEdgeValue('a', 'b', 10)

        expect(graph.getEdgeValue('a', 'c')).toBe(5)
        expect(graph.getEdgeValue('a', 'b')).toBe(10)
    })

    it('should do on adding existing vertex', () => {
        const graph = new Graph()
        graph.addVertex('a')
        graph.addVertex('a')
    })

    it('should throw error on adding invalid edge', () => {
        const graph = new Graph()
        graph.addVertex('a')
        expect(() => graph.addEdge('a', 'b')).toThrow()
        expect(() => graph.addEdge('b', 'c')).toThrow()
    })

    it('should throw error on accessing neighbors of invalid vertex', () => {
        const graph = new Graph()
        expect(() => graph.getAdjVertices('a')).toThrow()
    })

    it('should throw error on setting value of invalid vertex', () => {
        const graph = new Graph()
        expect(() => graph.setVertexValue('a', 1)).toThrow()
    })

    it('should throw error on accessing value of invalid vertex', () => {
        const graph = new Graph()
        expect(() => graph.getVertexValue('a')).toThrow()
    })

    it('should throw error on accessing invalid vertex', () => {
        const graph = new Graph()
        expect(() => graph.getVertex('a')).toThrow()
    })

    it('bfs should throw error on invalid vertex start node', () => {
        const graph = new Graph()
        expect(() => graph.bfs('a')).toThrow()
    })

    it('dfs should throw error on invalid vertex start node', () => {
        const graph = new Graph()
        expect(() => graph.dfs('a')).toThrow()
    })
})

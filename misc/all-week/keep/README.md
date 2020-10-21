
- Binary Search Tree
- Stack
- Queue
- Heap
- Graph
- Disjoint-set (New!)

## Installation and Usage

```bash
npm install data-structures-again
```

### Binary Search Tree:

```js
const { BST } = require("data-structures-again");

const bst = new BST();
bst.insert(2);
bst.insert(1);
const node = bst.search(1); // { data: 1, left: null, right: null }
bst.delete(1);
```

### Stack:

```js
const { Stack } = require("data-structures-again");

const stack = new Stack();
stack.push(1);
stack.push(2);
const data = stack.pop(); // 2
const top = stack.peek(); // 1
```

### Queue:

```js
const { Queue } = require("data-structures-again");

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
const data = queue.dequeue(); // 1
const top = queue.peek(); // 2
```

### Heap:

```js
const { Heap } = require("data-structures-again");

const minHeap = new Heap()
minHeap.push(5)
minHeap.push(2)
minHeap.peek()  // 2


const maxHeap = new Heap((a, b) => b - a)
maxHeap.push(4)
maxHeap.push(10)
maxHeap.peek() // 10

```

### Graph

```js
const { Graph } = require("data-structures-again");

const graph = new Graph()

/*
    a---b
    |  /    
    | /
    c
*/

graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')

graph.addEdge('a', 'c') // add weight using graph.addEdge('a', 'c', 10)
graph.addEdge('c', 'b')
graph.addEdge('a', 'b')

const output = []
graph.dfs('a', vertex => output.push(vertex.name)) // ['a', 'c', 'b']

```

### Disjoint Set(Union-find)

```js
const { DisjointSet } = require("data-structures-again");

const ds = new DisjointSet()
ds.union('a', 'b')
ds.union('b', 'c')
ds.union('d', 'c')

ds.find('d') // 'a'
ds.isConnected('a', 'd') // true

```

## License

MIT.

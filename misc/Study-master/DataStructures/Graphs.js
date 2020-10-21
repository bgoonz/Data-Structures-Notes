// Implement a GraphNode class
// neighboring nodes are just stored in an array

class GraphNode {
  constructor(val) {
    this.value = val;
    this.neighbors = [];
  }
}

let a = new GraphNode('a')
let a = new GraphNode('b')
let a = new GraphNode('c')
let a = new GraphNode('d')
let a = new GraphNode('e')
let a = new GraphNode('f')

a.neighbors = [e, c, b]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

// Depth First Traversal:
// recursive
// must mark all visited nodes to avoid infinite loop
// use a Set since it allows for constant time lookup
// **this will only work if the nodes are guaranteed to be unique and 
//    you're able to access all the nodes from your starting node.
function depthFirst(node, visited=new Set()) {
  if (visited.has(node.value)) return;

  console.log(node.value);
  visited.add(node.value)

  node.neighbors.forEach(neighbor => {
    depthFirst(neighbor)
  })
}

// if you're working with a graph not implemented with a class and nodes, but just a string:
let graph = {
  'a': ['b', 'c', 'e'],
  'b': [],
  'c': ['b', 'd'],
  'd': [],
  'e': ['a'],
  'f': ['e']
};

function depthFirstStr(node, graph, visited=new Set()) {
  if (visited.has(node)) return;

  console.log(node);
  visited.add(node);

  graph[node].forEach(neighbor => {
    depthFirstStr(neighbor, graph, visited)
  })
}

// in the case where you might have a graph with two connected components 
//    (two trees which are not connected, but still part of the same graph)
// you need to have a helper function which is the recursive function which still does the same job
//    it will explore a full connected region of a graph
// the main dfsForAll function will 'bridge' the gap
function dfsForAll(graph) {
  let visited = new Set();

  for (let node in graph) {
    dfsRecursive(node, graph, visited)
  }
}

function dfsRecursive(node, graph, visited) {
  if (visited.has(node)) return;

  console.log(node);
  visited.add(node);
  
  graph[node].forEach(neighbor => {
    dfsRecursive(neighbor, graph, visited)
  })
}

let forest = {
  'h': ['i', 'j'],
  'i': [],
  'j': ['k'],
  'k': [],
  'l': ['m'],
  'm': []
}

// if we use the two functions on the above:
// first enter the dfsForAll and the for loop begins on 'h'
// we then enter the dfsRecursive, and explore the 'local' region as far as possible.
//    this means we would visit 'h', 'i', 'j', 'k'
// *we are adding these to 'visited' as we go
// then we return to the main function, and continue in the loop until we find a node we haven't visited yet
//    (thanks to our visited set)
// we would then hit 'l', and explore it's local region as far as possible, etc etc ... 
// and finally hitting the last node 'm'


// Breadth First Search on a Graph:
function bfs(node, target) {
  let queue = [node];
  let visited = new Set();

  while (queue.length) {
    let currNode = queue.shift();
    if (visited.has(currNode)) continue;
    visited.add(currNode);
    if (currNode.value === target) return currNode;

    queue.push(...currNode.neighbors)
  }
  return null;
}


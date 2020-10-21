class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToTail(val) {
    let newNode = new Node(val);
    
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

    this.length++
  }

  removeNode(val) {
    if (!this.head) return null;

    let currentNode = this.head;
    let previous;

    if (currentNode.value === val) {
      this.head = currentNode.next;
    } else {
      while (currentNode.value !== val) {
        previous = currentNode;
        currentNode = currentNode.next;
      }
      previous.next = currentNode.next;
    }
    return this.length--;
  }

  reverse(head) {
    let current = this.head;
    let previous;
    let temp;

    while (current) {
      temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    }
    return previous;
  }
}

let LL = new LinkedList();
LL.addToTail(1)
LL.addToTail(2)
LL.addToTail(3)
console.log(LL);
LL.removeNode(2)
console.log(LL);

function createBase(a) {
  return function(b) {
    a + b
  }
}
class Node {
  constructor(val) {
    this.value = val;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length ++
    return newNode;
  }

  removeTail() {
    if (!this.head) return null;

    if (this.length < 3) {
      this.head = null;
      this.tail = null;
    }

    let currNode = this.head;
    let newTail = currNode;

    while (currNode.next) {
      newTail = currNode
      currNode = currNode.next
    }
    this.tail = newTail
    this.tail.next = null;
    this.length--
    return currNode
  }
}
class myArray {

  constructor() {
    this.store = new Array();
  }

  myLength() {
    this.store.length;
  }

  myPush(ele) {
    this.store.push(ele);
    return this.myLength();
  }

  myPop() {
    if (!this.store) return undefined;
    const popped = this.store.pop();
    return popped;
  }

  myIndexOf(value) {
    for (let i = 0; i < this.store.length; i++) {
      if (this.store[i] === value) return i;
    }

    return undefined;
  }

}

class Stack { // LIFO - last in, first out

  constructor() {
    this.store = new Array();
  }

  size() {
    return this.store.length;
  }

  push(ele) {
    this.store.push(ele);
    return `push was successful`;
  }

  pop() {
    return this.store.pop();
  }

  peek() {
    this.store[this.store.length - 1];
  }

}

class Queue { // FIFO - first in, first out

  constructor() {
    this.store = new Array();
  }

  size() {
    return this.store.length;
  }

  enqueue(ele) {
    this.store.push(ele);
    return true;
  }

  dequeue() {
    return this.store.shift();
  }

  peek() {
    return this.store[0]
  }

}

class _Node {

  constructor(value) {
    this.value = value;
    this.next = null;
  }

}

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  size() {
    let curr = this.head;
    let count = 0;

    while (curr) {
      curr = curr.next;

      count ++
    }

    return count;
  }

  addToTail(value) {
    const new_tail = new _Node(value)
    this.tail.next = new_tail;
    this.tail = new_tail;
  }

  add(value) {
    if (!this.head) {
      this.head = new _Node(value);
    } else {
      this._add(value);
    }
  }

  _add(value) {
    let curr = this.head; // curr => 2

    while (curr.next) {
      curr = curr.next;
    }

    curr.next = new _Node(value);
  }

  insertAt(value, index) {
    if (index === 0) { // if index @ 0, means we want to set new head
      prev_head = this.head // 1
      this.head = new _Node(value);
      this.head.next = prev_head
    } else {
      this._insertAt(value, index);
    }
  }

  _insertAt(value, index) {
    let curr = this.head;
    let curr_idx = 0; // 2
    let prev; 

    while (curr_idx < index) { // 2 < 2
      prev = curr; // prev = 2
      curr = curr.next; // curr = 3

      curr_idx++;
    }

    const new_node = new _Node(value); // [10]
    prev.next = new_node; // [2] => [10]
    new_node.next = curr; // [10] => [3]
  }

  //deleteAt(index)
  //find(value)

}

// const ll = new LinkedList();
// ll.add(1);
// ll.add(2);
// ll.add(3);
// ll.add(4);
// ll.insertAt(10, 2)

  // [1] => [2] => [10] => [3] => [4]

  // [1,2,3,4]


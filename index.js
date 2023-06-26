const LinkedList = require("./linked-list");

class LinkedListStack {
  constructor() {
    this.List = new LinkedList();
  }

  push(value) {
    this.List.prepend(value);
  }

  pop() {
    return this.List.removeFromFront();
  }

  peek() {
    return this.List.head.value;
  }

  isEmpty() {
    return this.List.isEmpty();
  }

  getSize() {
    return this.List.getSize();
  }

  print() {
    this.List.print();
  }
}

const stack = new LinkedListStack();
console.log(stack.isEmpty());

stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.getSize());
stack.print();

console.log(stack.pop());
console.log(stack.peek());

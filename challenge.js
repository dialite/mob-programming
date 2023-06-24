// LINKED LIST

// A linked list is a linear data structure that includes a series of connected nodes

// Each node consists of a data value and a pointer that points to the next node

// The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure

// Random access of elements is not feasible and accessing an element has a linear time complexity

// The linked list data structure supports three main operations

//   - Insertion : to add an element at the beginning, end or at a given index in the list
//   - Deletion : To remove an item given its index or value
//   - Search : To find an element given its value

// E.g. Image viewer

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  // O(1)
  prepend(value) {
    const node = new Node(value);
    // If list is empty
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let current = this.head;
      let listValues = "";
      while (current) {
        listValues += `${current.value} `;
        current = current.next;
      }
      console.log(listValues);
    }
  }
}

const list = new linkedList();
console.log("List is empty? ", list.isEmpty());
console.log("List size ", list.getSize());

list.print();

// list.prepend(10);
// list.print();

// list.prepend(20);
// list.prepend(30);
// list.print();

// list.print();

// list.append(10);
// list.print();

// list.append(20);
// list.append(30);
// list.print();

list.insert(10, 0);
list.print();

list.insert(20, 0);
list.print();

list.insert(30, 1);
list.print();

list.insert(40, 2);
list.print();
console.log(list.getSize());

console.log(list.removeFrom(10));

console.log(list.removeFrom(0));
list.print();

console.log(list.removeFrom(1));
list.print();
console.log(list.getSize());

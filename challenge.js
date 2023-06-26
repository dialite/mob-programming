// LINKED LIST WITH HEAD AND TAIL

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

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
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

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return nul;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }
}

const list = new LinkedList();

console.log(`List is empty?`, list.isEmpty());
console.log(`List size?`, list.getSize());
list.print();

list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.print();
console.log("List size", list.getSize());

list.removeFromFront();
list.removeFromEnd();
list.print();

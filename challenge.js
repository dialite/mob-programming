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
}

const list = new linkedList();
console.log("List is empty? ", list.isEmpty());
console.log("List size ", list.getSize());
